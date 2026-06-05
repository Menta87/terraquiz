import { createClient } from '@supabase/supabase-js';

export default async function handler(req, res) {
  const { email } = req.query;

  if (!email) {
    return res.status(400).send(`
      <html><body style="font-family:Arial;text-align:center;padding:40px;">
        <h2>Email lipsă</h2>
        <a href="https://terraquiz.ro">Înapoi la TerraQuiz</a>
      </body></html>
    `);
  }

  try {
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL,
      process.env.SUPABASE_SERVICE_ROLE_KEY
    );

    const decodedEmail = decodeURIComponent(email);

    const { data: { users } } = await supabase.auth.admin.listUsers({
      page: 1,
      perPage: 1000,
    });

    const user = users.find(u => u.email === decodedEmail);

    if (!user) {
      return res.status(200).send(`
        <html><body style="font-family:Arial;text-align:center;padding:40px;">
          <h2>✅ Dezabonat cu succes</h2>
          <p>Nu vei mai primi emailuri de la TerraQuiz.</p>
          <a href="https://terraquiz.ro">Înapoi la site</a>
        </body></html>
      `);
    }

    await supabase
      .from('profiles')
      .update({ newsletter_subscribed: false })
      .eq('id', user.id);

    res.status(200).send(`
      <html lang="ro">
        <head><meta charset="UTF-8"><title>Dezabonare TerraQuiz</title></head>
        <body style="font-family:Arial,sans-serif;text-align:center;padding:40px;background:#f3f4f6;">
          <div style="max-width:500px;margin:0 auto;background:white;padding:40px;border-radius:16px;">
            <div style="font-size:64px;">✅</div>
            <h2 style="color:#1e293b;">Dezabonat cu succes</h2>
            <p style="color:#64748b;font-size:16px;">Nu vei mai primi newsletter de la TerraQuiz.</p>
            <p style="color:#64748b;font-size:14px;">Contul tău rămâne activ - poți juca în continuare pe site.</p>
            <a href="https://terraquiz.ro" style="display:inline-block;margin-top:20px;background:#1e3a8a;color:white;padding:12px 24px;border-radius:10px;text-decoration:none;font-weight:700;">Înapoi la TerraQuiz</a>
          </div>
        </body>
      </html>
    `);
  } catch (error) {
    console.error('Unsubscribe error:', error);
    res.status(500).send(`
      <html><body style="font-family:Arial;text-align:center;padding:40px;">
        <h2>Eroare</h2>
        <p>Te rugăm să încerci din nou.</p>
        <a href="https://terraquiz.ro">Înapoi la TerraQuiz</a>
      </body></html>
    `);
  }
}
