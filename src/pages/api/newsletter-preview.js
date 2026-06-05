import { createClient } from '@supabase/supabase-js';

export default async function handler(req, res) {
  try {
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL,
      process.env.SUPABASE_SERVICE_ROLE_KEY
    );

    const { data, error } = await supabase.rpc('get_newsletter_content');
    
    if (error) {
      console.error('RPC error:', error);
      return res.status(500).json({ error: error.message });
    }

    const html = generateNewsletterHTML(data, 'USERNAME_PLACEHOLDER');

    res.status(200).json({
      content: data,
      html: html,
    });
  } catch (error) {
    console.error('Preview error:', error);
    res.status(500).json({ error: error.message });
  }
}

function generateNewsletterHTML(content, username = 'USERNAME_PLACEHOLDER') {
  const { challenge_easy, challenge_medium, challenge_hard, curiosity, top_users } = content;
  
  const topUsersHTML = (top_users || []).map((u, i) => {
    const medal = i === 0 ? '🥇' : i === 1 ? '🥈' : i === 2 ? '🥉' : `${i+1}.`;
    return `<tr><td style="padding:8px 12px;color:#475569">${medal} ${u.username}</td><td style="padding:8px 12px;text-align:right;font-weight:700;color:#1e293b">${(u.score || 0).toLocaleString()}</td></tr>`;
  }).join('');

  const playUrl = (id) => `https://terraquiz.ro/play/${id || ''}`;

  return `<!DOCTYPE html>
<html lang="ro">
<head>
<meta charset="UTF-8">
<title>TerraQuiz Newsletter</title>
</head>
<body style="margin:0;padding:0;font-family:Arial,sans-serif;background:#f3f4f6;">
  <div style="max-width:600px;margin:0 auto;background:white;">
    <div style="background:linear-gradient(135deg, #1e3a8a 0%, #5b21b6 100%);padding:40px 20px;text-align:center;color:white;">
      <div style="font-size:48px;margin-bottom:10px;">🌍</div>
      <h1 style="margin:0;font-size:28px;font-weight:900;">TerraQuiz Săptămânal</h1>
      <p style="margin:10px 0 0;opacity:0.9;font-size:15px;">Geografia pe scurt - 3 minute de învățare</p>
    </div>

    <div style="padding:25px 20px 15px;text-align:center;">
      <p style="margin:0;font-size:18px;color:#1e293b;">Bună, <strong>${username}</strong>! 👋</p>
      <p style="margin:8px 0 0;color:#64748b;font-size:14px;">Ne bucurăm să te avem aici. Iată ce avem pregătit pentru tine:</p>
    </div>

    <div style="padding:20px;">
      <h2 style="color:#1e293b;font-size:22px;margin:0 0 20px;">🎯 Provocarea săptămânii</h2>
      <p style="color:#64748b;font-size:14px;margin:0 0 20px;">Răspunde la cele 3 întrebări direct pe site și vezi explicații complete!</p>
      
      <div style="background:#f0fdf4;border-left:4px solid #16a34a;padding:18px;margin-bottom:15px;border-radius:8px;">
        <div style="color:#166534;font-weight:700;font-size:12px;margin-bottom:8px;">UȘOR · ${challenge_easy?.topic || ''}</div>
        <p style="margin:0 0 12px;color:#1e293b;font-weight:600;font-size:15px;">${challenge_easy?.question || ''}</p>
        <div style="font-size:14px;color:#475569;line-height:1.8;margin-bottom:12px;">
          <div>a) ${challenge_easy?.option_a || ''}</div>
          <div>b) ${challenge_easy?.option_b || ''}</div>
          <div>c) ${challenge_easy?.option_c || ''}</div>
          <div>d) ${challenge_easy?.option_d || ''}</div>
        </div>
        <a href="${playUrl(challenge_easy?.chapter_id)}" style="display:inline-block;background:#16a34a;color:white;padding:8px 16px;border-radius:6px;text-decoration:none;font-weight:700;font-size:13px;">▶ Răspunde pe site</a>
      </div>

      <div style="background:#fffbeb;border-left:4px solid #d97706;padding:18px;margin-bottom:15px;border-radius:8px;">
        <div style="color:#854d0e;font-weight:700;font-size:12px;margin-bottom:8px;">MEDIU · ${challenge_medium?.topic || ''}</div>
        <p style="margin:0 0 12px;color:#1e293b;font-weight:600;font-size:15px;">${challenge_medium?.question || ''}</p>
        <div style="font-size:14px;color:#475569;line-height:1.8;margin-bottom:12px;">
          <div>a) ${challenge_medium?.option_a || ''}</div>
          <div>b) ${challenge_medium?.option_b || ''}</div>
          <div>c) ${challenge_medium?.option_c || ''}</div>
          <div>d) ${challenge_medium?.option_d || ''}</div>
        </div>
        <a href="${playUrl(challenge_medium?.chapter_id)}" style="display:inline-block;background:#d97706;color:white;padding:8px 16px;border-radius:6px;text-decoration:none;font-weight:700;font-size:13px;">▶ Răspunde pe site</a>
      </div>

      <div style="background:#fef2f2;border-left:4px solid #dc2626;padding:18px;margin-bottom:15px;border-radius:8px;">
        <div style="color:#991b1b;font-weight:700;font-size:12px;margin-bottom:8px;">GREU · ${challenge_hard?.topic || ''}</div>
        <p style="margin:0 0 12px;color:#1e293b;font-weight:600;font-size:15px;">${challenge_hard?.question || ''}</p>
        <a href="${playUrl(challenge_hard?.chapter_id)}" style="display:inline-block;background:#dc2626;color:white;padding:8px 16px;border-radius:6px;text-decoration:none;font-weight:700;font-size:13px;">▶ Răspunde pe site</a>
      </div>
    </div>

    <div style="padding:20px;background:#f8fafc;margin:0 20px;border-radius:12px;border:2px solid #e2e8f0;">
      <h2 style="color:#1e293b;font-size:20px;margin:0 0 12px;">${curiosity?.emoji || '🌍'} Știai că...</h2>
      <h3 style="color:#1e3a8a;font-size:17px;margin:0 0 10px;">${curiosity?.title || ''}</h3>
      <p style="color:#475569;line-height:1.6;margin:0;font-size:14px;">${curiosity?.content || ''}</p>
    </div>

    <div style="padding:30px 20px 15px;">
      <h2 style="color:#1e293b;font-size:22px;margin:0 0 15px;">🏆 Top 5 Geografi</h2>
      <div style="background:linear-gradient(135deg, #fef3c7, #fde68a);border-radius:12px;padding:15px;">
        <table style="width:100%;border-collapse:collapse;">
          ${topUsersHTML || '<tr><td style="text-align:center;color:#92400e;padding:20px;">Joacă primul pentru top!</td></tr>'}
        </table>
      </div>
    </div>

    <div style="background:linear-gradient(135deg, #1e3a8a, #5b21b6);padding:30px 20px;text-align:center;margin-top:20px;">
      <h2 style="color:white;margin:0 0 15px;font-size:22px;">📚 Vrei mai mult?</h2>
      <p style="color:rgba(255,255,255,0.9);margin:0 0 20px;font-size:15px;">1.699 întrebări, 50 variante BAC, 10 capitole te așteaptă</p>
      <a href="https://terraquiz.ro" style="display:inline-block;background:white;color:#1e3a8a;padding:14px 32px;border-radius:10px;font-weight:800;text-decoration:none;font-size:16px;">▶ Joacă acum</a>
    </div>

    <div style="padding:20px;text-align:center;background:#f8fafc;color:#64748b;font-size:13px;">
      <p style="margin:0 0 10px;">Primești acest email pentru că ai un cont pe TerraQuiz.</p>
      <p style="margin:0;"><a href="https://terraquiz.ro/api/newsletter-unsubscribe?email=EMAIL_PLACEHOLDER" style="color:#64748b;">Dezabonează-te</a> · <a href="https://terraquiz.ro" style="color:#64748b;">Vezi site</a></p>
    </div>
  </div>
</body>
</html>`;
}
