import { createClient } from '@supabase/supabase-js';
import { Resend } from 'resend';

export default async function handler(req, res) {
  // Doar admin (email hardcoded pentru simplitate)
  const authHeader = req.headers.authorization;
  const isValidAdmin = authHeader === `Bearer ${process.env.CRON_SECRET}`;
  if (!isValidAdmin) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  const { userId, rewardId } = req.body;
  
  if (!userId || !rewardId) {
    return res.status(400).json({ error: 'Missing userId or rewardId' });
  }

  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.SUPABASE_SERVICE_ROLE_KEY
  );

  try {
    // Iau detaliile
    const { data: reward } = await supabase
      .from('user_rewards')
      .select('*')
      .eq('id', rewardId)
      .single();
    
    if (!reward) {
      return res.status(404).json({ error: 'Reward not found' });
    }
    
    const { data: profile } = await supabase
      .from('profiles')
      .select('username')
      .eq('id', userId)
      .single();
    
    const { data: authData } = await supabase.auth.admin.getUserById(userId);
    const email = authData?.user?.email;
    
    if (!email) {
      return res.status(404).json({ error: 'Email not found' });
    }

    // Trimit email
    const resend = new Resend(process.env.RESEND_API_KEY);
    
    await resend.emails.send({
      from: 'TerraQuiz <noreply@terraquiz.ro>',
      to: [email],
      subject: `🏆 Felicitări! Ai câștigat ${reward.premium_days} zile Premium GRATUIT!`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #8b5cf6, #6d28d9); padding: 30px; text-align: center; border-radius: 12px 12px 0 0;">
            <div style="font-size: 60px;">🏆</div>
            <h1 style="color: white; margin: 10px 0;">FELICITĂRI!</h1>
            <p style="color: rgba(255,255,255,0.9); font-size: 18px;">${profile?.username || 'Campionule'}, ai câștigat!</p>
          </div>
          
          <div style="background: white; padding: 30px; border: 1px solid #e2e8f0;">
            <h2 style="color: #1e293b;">🎁 ${reward.reward_name}</h2>
            <p style="color: #475569; font-size: 16px; line-height: 1.6;">
              Ai fost cel mai bun la turneul săptămânal pe TerraQuiz! 
              Ca recompensă, primești <strong>${reward.premium_days} zile de Premium GRATUIT</strong>.
            </p>
            
            <div style="background: linear-gradient(135deg, #fef3c7, #fde68a); padding: 20px; border-radius: 12px; margin: 25px 0; border: 2px dashed #f59e0b;">
              <p style="color: #78350f; font-weight: 700; margin: 0 0 10px 0;">🎫 Codul tău promoțional:</p>
              <div style="background: white; padding: 15px; border-radius: 8px; text-align: center;">
                <code style="font-size: 20px; font-weight: 900; color: #5b21b6; letter-spacing: 1px;">${reward.promo_code}</code>
              </div>
            </div>
            
            <div style="text-align: center; margin: 30px 0;">
              <a href="https://terraquiz.ro/recompense" style="display: inline-block; background: linear-gradient(135deg, #8b5cf6, #6d28d9); color: white; padding: 15px 40px; border-radius: 10px; text-decoration: none; font-weight: 700; font-size: 16px;">
                🚀 Activează Premium acum
              </a>
            </div>
            
            <div style="background: #f8fafc; padding: 20px; border-radius: 10px; margin-top: 25px;">
              <h3 style="color: #1e293b; margin-top: 0;">📋 Cum activezi:</h3>
              <ol style="color: #475569; line-height: 1.8;">
                <li>Intri pe <a href="https://terraquiz.ro/recompense" style="color: #5b21b6;">terraquiz.ro/recompense</a></li>
                <li>Copiază codul de mai sus</li>
                <li>Lipești codul în caseta „Ai un cod promo?"</li>
                <li>Click „Aplică" → Premium activat!</li>
              </ol>
            </div>
            
            <p style="color: #94a3b8; font-size: 13px; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e2e8f0;">
              Codul expiră pe: <strong>${new Date(reward.expires_at).toLocaleDateString('ro-RO', { day: 'numeric', month: 'long', year: 'numeric' })}</strong><br/>
              Sfat: participă în continuare la turnee pentru mai multe recompense!
            </p>
          </div>
        </div>
      `
    });

    // Marchez că s-a trimis notificarea
    await supabase
      .from('user_rewards')
      .update({ notification_sent_at: new Date().toISOString() })
      .eq('id', rewardId);

    res.status(200).json({ success: true, email });
  } catch (e) {
    console.error('Error:', e);
    res.status(500).json({ error: e.message });
  }
}
