import { Resend } from 'resend';
import { createClient } from '@supabase/supabase-js';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { adminEmail, html, subject, testMode } = req.body;
  
  if (adminEmail !== 'robert_menta@yahoo.com') {
    return res.status(403).json({ error: 'Forbidden - admin only' });
  }

  if (!html || !subject) {
    return res.status(400).json({ error: 'Missing html or subject' });
  }

  try {
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL,
      process.env.SUPABASE_SERVICE_ROLE_KEY
    );

    const { data: profiles, error: profErr } = await supabase
      .from('profiles')
      .select('id, username, newsletter_subscribed');

    if (profErr) throw profErr;

    const profileMap = {};
    profiles.forEach(p => { profileMap[p.id] = p; });

    const subscribedProfileIds = profiles
      .filter(p => p.newsletter_subscribed !== false)
      .map(p => p.id);

    const { data: { users }, error: usersErr } = await supabase.auth.admin.listUsers({
      page: 1,
      perPage: 1000,
    });

    if (usersErr) throw usersErr;

    let recipients = users
      .filter(u => subscribedProfileIds.includes(u.id))
      .map(u => ({ 
        email: u.email, 
        id: u.id,
        username: profileMap[u.id]?.username || 'Geograf'
      }));

    if (testMode) {
      recipients = recipients.filter(r => r.email === 'robert_menta@yahoo.com');
      if (recipients.length === 0) {
        recipients = [{ email: 'robert_menta@yahoo.com', id: 'admin-test', username: 'Robert' }];
      }
    }

    if (recipients.length === 0) {
      return res.status(200).json({ sent: 0, message: 'No subscribers' });
    }

    let sentCount = 0;
    let errorCount = 0;
    const errors = [];

    // Batch-uri mai mici (25 in loc de 50) cu pauza mai mare
    for (let i = 0; i < recipients.length; i += 25) {
      const batch = recipients.slice(i, i + 25);
      
      const emails = batch.map(r => {
        const unsubUrl = `https://terraquiz.ro/api/newsletter-unsubscribe?email=${encodeURIComponent(r.email)}`;
        return {
          from: 'TerraQuiz <newsletter@terraquiz.ro>',
          to: [r.email],
          reply_to: 'newsletter@terraquiz.ro',
          subject: testMode ? '[TEST] ' + subject : subject,
          html: html
            .replace(/EMAIL_PLACEHOLDER/g, encodeURIComponent(r.email))
            .replace(/USERNAME_PLACEHOLDER/g, r.username || 'Geograf'),
          headers: {
            'List-Unsubscribe': `<${unsubUrl}>`,
            'List-Unsubscribe-Post': 'List-Unsubscribe=One-Click',
            'X-Entity-Ref-ID': `newsletter-${Date.now()}-${r.id}`,
          },
        };
      });

      try {
        const { data, error } = await resend.batch.send(emails);
        
        if (error) {
          errorCount += batch.length;
          errors.push(error.message);
        } else {
          sentCount += batch.length;
        }
      } catch (e) {
        errorCount += batch.length;
        errors.push(e.message);
      }

      // Pauză mai mare între batch-uri (1.2s în loc de 0.6s)
      await new Promise(r => setTimeout(r, 1200));
    }

    res.status(200).json({
      sent: sentCount,
      failed: errorCount,
      total: recipients.length,
      testMode: !!testMode,
      errors: errors.slice(0, 5),
    });
  } catch (error) {
    console.error('Send error:', error);
    res.status(500).json({ error: error.message });
  }
}
