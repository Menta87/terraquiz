import { Resend } from 'resend';
import { createClient } from '@supabase/supabase-js';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { adminEmail, testMode } = req.body;
  
  if (adminEmail !== 'robert_menta@yahoo.com') {
    return res.status(403).json({ error: 'Forbidden - admin only' });
  }

  try {
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL,
      process.env.SUPABASE_SERVICE_ROLE_KEY
    );

    // Obtin doar utilizatorii ACTIVI (au jucat in ultimele 30 zile)
    const { data: activeUsers } = await supabase
      .from('game_results')
      .select('user_id')
      .gte('played_at', new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString());
    
    const activeUserIds = [...new Set((activeUsers || []).map(r => r.user_id))];
    
    const { data: profiles } = await supabase
      .from('profiles')
      .select('id, username, newsletter_subscribed')
      .in('id', activeUserIds);
    
    const subscribedIds = profiles
      .filter(p => p.newsletter_subscribed !== false)
      .map(p => p.id);
    
    const profileMap = {};
    profiles.forEach(p => { profileMap[p.id] = p; });

    const { data: { users } } = await supabase.auth.admin.listUsers({ page: 1, perPage: 1000 });
    
    let recipients = users
      .filter(u => subscribedIds.includes(u.id))
      .map(u => ({ email: u.email, id: u.id, username: profileMap[u.id]?.username || 'Geograf' }));

    if (testMode) {
      recipients = [{ email: 'robert_menta@yahoo.com', id: 'admin-test', username: 'Robert' }];
    }

    if (recipients.length === 0) {
      return res.status(200).json({ sent: 0, message: 'No recipients' });
    }

    const subject = '📢 Schimbare importantă pe TerraQuiz - vă explicăm';
    let sentCount = 0;
    let errorCount = 0;

    for (let i = 0; i < recipients.length; i += 25) {
      const batch = recipients.slice(i, i + 25);
      const emails = batch.map(r => {
        const unsubUrl = `https://terraquiz.ro/api/newsletter-unsubscribe?email=${encodeURIComponent(r.email)}`;
        return {
          from: 'TerraQuiz <newsletter@terraquiz.ro>',
          to: [r.email],
          reply_to: 'newsletter@terraquiz.ro',
          subject: testMode ? '[TEST] ' + subject : subject,
          html: generateHTML(r.username, r.email),
          headers: {
            'List-Unsubscribe': `<${unsubUrl}>`,
            'List-Unsubscribe-Post': 'List-Unsubscribe=One-Click',
          },
        };
      });

      try {
        const { error } = await resend.batch.send(emails);
        if (error) errorCount += batch.length;
        else sentCount += batch.length;
      } catch (e) { errorCount += batch.length; }

      await new Promise(r => setTimeout(r, 1200));
    }

    res.status(200).json({ sent: sentCount, failed: errorCount, total: recipients.length, testMode: !!testMode });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

function generateHTML(username, email) {
  return `<!DOCTYPE html>
<html lang="ro"><head><meta charset="UTF-8"></head>
<body style="margin:0;padding:0;font-family:Arial,sans-serif;background:#f3f4f6;">
  <div style="max-width:600px;margin:0 auto;background:white;">
    <div style="background:linear-gradient(135deg, #1e3a8a 0%, #5b21b6 100%);padding:40px 20px;text-align:center;color:white;">
      <div style="font-size:48px;margin-bottom:10px;">📢</div>
      <h1 style="margin:0;font-size:26px;font-weight:900;">Schimbare importantă</h1>
      <p style="margin:10px 0 0;opacity:0.9;font-size:15px;">pe TerraQuiz</p>
    </div>
    
    <div style="padding:30px 25px;">
      <p style="margin:0 0 20px;font-size:17px;color:#1e293b;">Bună, <strong>${username}</strong>! 👋</p>
      
      <p style="color:#475569;line-height:1.7;font-size:15px;">Vreau să-ți comunic transparent o schimbare pe care am implementat-o pe TerraQuiz, care ne ajută să menținem platforma activă și să o îmbunătățim continuu.</p>
      
      <div style="background:#fef3c7;border-left:4px solid #d97706;padding:18px;border-radius:8px;margin:20px 0;">
        <h3 style="margin:0 0 10px;color:#78350f;font-size:17px;">⏰ Limită zilnică pentru conturile gratuite</h3>
        <p style="margin:0;color:#92400e;font-size:14px;line-height:1.6;">Începând de azi, conturile gratuite pot juca <strong>20 de quiz-uri/zi</strong> din capitolele de geografie.</p>
      </div>
      
      <h3 style="color:#1e293b;margin:25px 0 10px;font-size:17px;">🎮 Ce RĂMÂNE GRATUIT și NELIMITAT?</h3>
      <ul style="color:#475569;line-height:1.8;font-size:14px;padding-left:20px;">
        <li><strong>Multiplayer</strong> - jocurile cu clasa sau prietenii rămân fără limită</li>
        <li><strong>5 variante BAC</strong> (Variantele 1-5) - pentru exersarea inițială</li>
        <li><strong>Sistemul de diplome</strong> - toate cele 26 de diplome</li>
        <li><strong>Newsletter săptămânal</strong> cu provocări și curiozități</li>
      </ul>
      
      <h3 style="color:#1e293b;margin:25px 0 10px;font-size:17px;">👑 De ce am făcut asta?</h3>
      <p style="color:#475569;line-height:1.7;font-size:14px;">TerraQuiz costă bani să fie întreținut (servere, baze de date, livrare emailuri). Pentru a continua să adaug conținut nou și să mențin platforma activă, am nevoie de mai mulți utilizatori Premium.</p>
      
      <div style="background:linear-gradient(135deg, #8b5cf6, #6d28d9);color:white;border-radius:12px;padding:20px;margin:20px 0;text-align:center;">
        <div style="font-size:36px;margin-bottom:5px;">👑</div>
        <h3 style="margin:0 0 10px;font-size:18px;">Treci la Premium</h3>
        <p style="margin:0 0 15px;font-size:14px;opacity:0.95;">
          ✅ Jocuri NELIMITATE<br/>
          ✅ Toate cele 50 variante BAC<br/>
          ✅ <strong>9.90 RON/lună</strong> sau <strong>79 RON/an</strong> (10 RON discount)
        </p>
        <a href="https://terraquiz.ro/premium" style="display:inline-block;background:white;color:#6d28d9;padding:12px 28px;border-radius:8px;font-weight:800;text-decoration:none;font-size:15px;">Vezi planurile Premium</a>
      </div>
      
      <p style="color:#475569;line-height:1.7;font-size:14px;margin-top:20px;">Înțeleg că poate părea o limitare, dar 20 de quiz-uri pe zi sunt suficiente pentru exersare normală. Iar dacă ești în pregătire intensă pentru BAC sau teze, abonamentul Premium e o investiție mică pentru un acces complet.</p>
      
      <p style="color:#475569;line-height:1.7;font-size:14px;margin-top:15px;">Îți mulțumesc că ești alături de TerraQuiz și că faci parte din această comunitate!</p>
      
      <p style="color:#1e293b;margin-top:20px;font-size:15px;">Cu drag,<br/><strong>Prof. Robert Ioniță</strong></p>
    </div>
    
    <div style="padding:20px;text-align:center;background:#f8fafc;color:#64748b;font-size:13px;">
      <p style="margin:0 0 10px;">Primești acest email pentru că ai un cont activ pe TerraQuiz.</p>
      <p style="margin:0;"><a href="https://terraquiz.ro/api/newsletter-unsubscribe?email=${encodeURIComponent(email)}" style="color:#64748b;">Dezabonează-te</a> · <a href="https://terraquiz.ro" style="color:#64748b;">Vezi site</a></p>
    </div>
  </div>
</body></html>`;
}
