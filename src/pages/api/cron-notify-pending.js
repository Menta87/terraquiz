import { createClient } from '@supabase/supabase-js';

// Retrimite notificarile de castigator care nu au plecat (notification_sent_at gol).
// notify-winner marcheaza notificarea DOAR dupa ce Resend confirma trimiterea,
// deci acest job nu poate genera dubluri.
export default async function handler(req, res) {
  const authHeader = req.headers.authorization;
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.SUPABASE_SERVICE_ROLE_KEY
  );

  // Doar recompense recente (30 zile), nefolosite, ca sa nu trimitem emailuri vechi
  const since = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString();

  const { data: pending, error } = await supabase
    .from('user_rewards')
    .select('id, user_id')
    .in('reward_type', ['tournament_winner', 'weekly_leaderboard'])
    .is('notification_sent_at', null)
    .eq('is_redeemed', false)
    .gte('earned_at', since)
    .limit(5);

  if (error) {
    return res.status(500).json({ error: error.message });
  }

  const list = pending || [];
  const protocol = req.headers.host?.includes('localhost') ? 'http' : 'https';
  let sent = 0;
  const failed = [];

  for (const reward of list) {
    try {
      const r = await fetch(`${protocol}://${req.headers.host}/api/notify-winner`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.CRON_SECRET}`
        },
        body: JSON.stringify({ userId: reward.user_id, rewardId: reward.id })
      });
      if (r.ok) sent++;
      else failed.push({ id: reward.id, status: r.status });
    } catch (e) {
      failed.push({ id: reward.id, error: e.message });
    }
  }

  res.status(200).json({ pending: list.length, sent, failed });
}
