import { createClient } from '@supabase/supabase-js';
import { Resend } from 'resend';

export default async function handler(req, res) {
  // Verific CRON_SECRET
  const authHeader = req.headers.authorization;
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.SUPABASE_SERVICE_ROLE_KEY
  );

  try {
    // Rulez ciclul săptămânal
    const { data, error } = await supabase.rpc('weekly_tournament_cycle');
    
    if (error) throw error;

    // Recompensă pentru locul 1 la clasamentul săptămânal precedent
    const { data: leaderboardReward } = await supabase.rpc('weekly_leaderboard_reward_cycle');
    if (leaderboardReward?.winner_found) {
      try {
        await fetch(`${req.headers.host?.includes('localhost') ? 'http' : 'https'}://${req.headers.host}/api/notify-winner`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${process.env.CRON_SECRET}`
          },
          body: JSON.stringify({ userId: leaderboardReward.winner_id, rewardId: leaderboardReward.reward.reward_id })
        });
      } catch (e) { console.error('Notify leaderboard winner error:', e); }
    }
    
    // Trimit email câștigătorilor (care nu au primit încă notificarea)
    const { data: pendingRewards } = await supabase
      .from('user_rewards')
      .select('id, user_id')
      .eq('reward_type', 'tournament_winner')
      .is('notification_sent_at', null);
    
    if (pendingRewards && pendingRewards.length > 0) {
      for (const reward of pendingRewards) {
        try {
          await fetch(`${req.headers.host?.includes('localhost') ? 'http' : 'https'}://${req.headers.host}/api/notify-winner`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${process.env.CRON_SECRET}`
            },
            body: JSON.stringify({ userId: reward.user_id, rewardId: reward.id })
          });
        } catch (e) { console.error('Notify error:', e); }
      }
    }

    // Trimit email de notificare
    const resend = new Resend(process.env.RESEND_API_KEY);
    const dateStr = new Date().toLocaleDateString('ro-RO');
    
    await resend.emails.send({
      from: 'TerraQuiz <noreply@terraquiz.ro>',
      to: ['robert_menta@yahoo.com'],
      subject: `🏆 Turnee - Ciclu săptămânal - ${dateStr}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px;">
          <h2 style="color: #5b21b6;">🏆 Ciclu turnee săptămânal</h2>
          <p>Data: ${dateStr}</p>
          
          <div style="background: #f8fafc; padding: 20px; border-radius: 10px; margin: 20px 0;">
            <h3>📊 Rezultat:</h3>
            <pre style="background: white; padding: 15px; border-radius: 8px; overflow: auto;">${JSON.stringify(data, null, 2)}</pre>
          </div>
          
          ${data.new_tournament_created ? `
            <div style="background: #d1fae5; padding: 15px; border-radius: 10px;">
              <h3 style="color: #065f46;">✅ Turneu nou creat!</h3>
              <p>Capitol: <strong>${data.chapter}</strong></p>
              <p>ID: ${data.new_tournament_id}</p>
            </div>
          ` : `
            <div style="background: #fef3c7; padding: 15px; border-radius: 10px;">
              <p style="color: #92400e;">ℹ️ ${data.reason || 'Nu s-a creat turneu nou'}</p>
            </div>
          `}
        </div>
      `
    });

    res.status(200).json({ success: true, data });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
}
