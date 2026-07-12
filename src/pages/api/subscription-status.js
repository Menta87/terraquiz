import { createClient } from '@supabase/supabase-js';

export default async function handler(req, res) {
  const { userId } = req.query;
  
  if (!userId) {
    return res.status(400).json({ error: 'Missing userId' });
  }

  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.SUPABASE_SERVICE_ROLE_KEY
  );

  // 1. Verific subscription platit (Stripe)
  const { data: sub } = await supabase
    .from('subscriptions')
    .select('*')
    .eq('user_id', userId)
    .maybeSingle();

  const isPaidPremium = sub?.status === 'active' || sub?.status === 'trialing';

  // 2. Verific bonus Premium (recompense)
  const { data: profile } = await supabase
    .from('profiles')
    .select('premium_bonus_until')
    .eq('id', userId)
    .maybeSingle();

  const now = new Date();
  const bonusUntil = profile?.premium_bonus_until ? new Date(profile.premium_bonus_until) : null;
  const hasBonusPremium = bonusUntil && bonusUntil > now;

  // Premium activ dacă are ORICE dintre: subscription plătit SAU bonus
  const isPremium = isPaidPremium || hasBonusPremium;

  res.status(200).json({
    isPremium,
    isPaidPremium,
    hasBonusPremium,
    bonusUntil: profile?.premium_bonus_until || null,
    plan: sub?.plan || (hasBonusPremium ? 'bonus' : null),
    status: sub?.status || (hasBonusPremium ? 'bonus_active' : null),
    currentPeriodEnd: sub?.current_period_end || null,
    cancelAtPeriodEnd: sub?.cancel_at_period_end || false,
  });
}
