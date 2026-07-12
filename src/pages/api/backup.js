import { createClient } from '@supabase/supabase-js';
import { Resend } from 'resend';

const CRITICAL_TABLES = [
  'profiles',
  'chapters',
  'questions',
  'game_results',
  'diplomas',
  'subscriptions',
  'school_chapters',
  'school_questions',
  'weekly_scores',
  'daily_challenges',
  'teacher_rooms',
  'tournaments',
  'tournament_scores',
  'user_rewards',
  'universal_promo_codes',
  'user_promo_uses',
  'multiplayer_rooms',
  'multiplayer_players'
];

export default async function handler(req, res) {
  // Securizat cu CRON_SECRET
  const authHeader = req.headers.authorization;
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.SUPABASE_SERVICE_ROLE_KEY
  );

  const backup = {
    timestamp: new Date().toISOString(),
    tables: {},
    stats: {
      totalRows: 0,
      totalSize: 0
    }
  };

  const errors = [];

  // Export toate tabelele
  for (const table of CRITICAL_TABLES) {
    try {
      const { data, error, count } = await supabase
        .from(table)
        .select('*', { count: 'exact' });
      
      if (error) {
        errors.push(`${table}: ${error.message}`);
        continue;
      }
      
      backup.tables[table] = {
        rowCount: count || 0,
        data: data || []
      };
      backup.stats.totalRows += count || 0;
    } catch (e) {
      errors.push(`${table}: ${e.message}`);
    }
  }

  const backupJson = JSON.stringify(backup, null, 2);
  backup.stats.totalSize = Buffer.byteLength(backupJson, 'utf8');
  const sizeMB = (backup.stats.totalSize / 1024 / 1024).toFixed(2);
  
  // Trimit email cu backup ca atașament
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const dateStr = new Date().toLocaleDateString('ro-RO');
    const timeStr = new Date().toLocaleTimeString('ro-RO');
    
    await resend.emails.send({
      from: 'TerraQuiz Backup <noreply@terraquiz.ro>',
      to: ['robert_menta@yahoo.com'],
      subject: `🔐 Backup TerraQuiz - ${dateStr}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px;">
          <h2 style="color: #5b21b6;">🔐 Backup TerraQuiz - ${dateStr}</h2>
          <p>Backup automat rulat cu succes la ${timeStr}.</p>
          
          <div style="background: #f8fafc; padding: 20px; border-radius: 10px; margin: 20px 0;">
            <h3>📊 Statistici backup:</h3>
            <ul>
              <li><strong>${Object.keys(backup.tables).length}</strong> tabele exportate</li>
              <li><strong>${backup.stats.totalRows.toLocaleString()}</strong> rânduri totale</li>
              <li><strong>${sizeMB} MB</strong> dimensiune totală</li>
            </ul>
          </div>
          
          ${errors.length > 0 ? `
            <div style="background: #fee2e2; padding: 15px; border-radius: 10px; margin: 20px 0;">
              <h3 style="color: #991b1b;">⚠️ Erori (${errors.length}):</h3>
              <ul>
                ${errors.map(e => `<li>${e}</li>`).join('')}
              </ul>
            </div>
          ` : '<p style="color: #16a34a;">✅ Toate tabelele au fost exportate cu succes!</p>'}
          
          <p style="font-size: 12px; color: #64748b; margin-top: 30px;">
            Backup-ul este atașat ca fișier JSON. Salvează-l într-un loc sigur (Google Drive, Dropbox, etc.).
          </p>
        </div>
      `,
      attachments: [
        {
          filename: `terraquiz-backup-${dateStr.replace(/\./g, '-')}.json`,
          content: Buffer.from(backupJson).toString('base64')
        }
      ]
    });
    
    res.status(200).json({
      success: true,
      tables: Object.keys(backup.tables).length,
      totalRows: backup.stats.totalRows,
      sizeMB,
      errors: errors.length
    });
  } catch (e) {
    res.status(500).json({ error: 'Email failed: ' + e.message, backup: { tables: Object.keys(backup.tables).length, errors } });
  }
}
