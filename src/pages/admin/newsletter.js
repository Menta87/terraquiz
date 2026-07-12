import { requireAdmin } from '../../lib/adminAuth';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { supabase } from '../../lib/supabase';

export default function NewsletterAdmin() {
  const [loading, setLoading] = useState(true);
  const [authorized, setAuthorized] = useState(false);
  const [userEmail, setUserEmail] = useState('');
  const [preview, setPreview] = useState(null);
  const [generating, setGenerating] = useState(false);
  const [sending, setSending] = useState(false);
  const [sendResult, setSendResult] = useState(null);
  const [subject, setSubject] = useState('🌍 TerraQuiz Săptămânal - Provocarea săptămânii');
  const router = useRouter();

  useEffect(() => { checkAuth(); }, []);

  async function checkAuth() {
    const { data: { session } } = await supabase.auth.getSession();
    if (!session) { router.push('/login'); return; }
    setUserEmail(session.user.email);
    if (session.user.email === 'robert_menta@yahoo.com') setAuthorized(true);
    setLoading(false);
  }

  async function generatePreview() {
    setGenerating(true);
    setSendResult(null);
    try {
      const res = await fetch('/api/newsletter-preview');
      const data = await res.json();
      if (data.html) setPreview(data);
      else alert('Eroare: ' + (data.error || 'preview nereușit'));
    } catch (e) { alert('Eroare: ' + e.message); }
    setGenerating(false);
  }

  async function sendNewsletter(testMode = false) {
    const msg = testMode 
      ? 'Trimitem un email de TEST doar la robert_menta@yahoo.com?'
      : 'Sigur vrei să trimiți newsletter-ul la TOȚI utilizatorii abonați?';
    if (!confirm(msg)) return;
    
    setSending(true);
    setSendResult(null);
    try {
      const res = await fetch('/api/newsletter-send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ adminEmail: userEmail, subject, html: preview.html, testMode }),
      });
      setSendResult(await res.json());
    } catch (e) { setSendResult({ error: e.message }); }
    setSending(false);
  }

  if (loading) return <div style={{padding:'2rem',textAlign:'center'}}>Se încarcă...</div>;

  if (!authorized) {
    return (
      <div style={{padding:'2rem',textAlign:'center',maxWidth:'500px',margin:'4rem auto'}}>
        <div style={{fontSize:'4rem',marginBottom:'1rem'}}>🚫</div>
        <h1>Acces interzis</h1>
        <p style={{color:'#64748b'}}>Această pagină este doar pentru administrator.</p>
        <a href="/" style={{color:'#1e3a8a'}}>← Înapoi acasă</a>
      </div>
    );
  }

  return (
    <div style={{maxWidth:'1000px',margin:'0 auto',padding:'2rem 1rem'}}>
      <h1 style={{color:'#1e293b',marginBottom:'0.5rem'}}>📧 Newsletter Admin</h1>
      <p style={{color:'#64748b',marginBottom:'2rem'}}>Generează, previzualizează și trimite newsletter-ul săptămânal.</p>

      <div style={{background:'white',padding:'1.5rem',borderRadius:'12px',border:'1px solid #e2e8f0',marginBottom:'1.5rem'}}>
        <h2 style={{margin:'0 0 1rem',color:'#1e293b'}}>1️⃣ Generează conținut</h2>
        <p style={{color:'#64748b',marginBottom:'1rem'}}>Click pentru a obține întrebări random + top utilizatori.</p>
        <button onClick={generatePreview} disabled={generating}
          style={{background:'#1e3a8a',color:'white',border:'none',padding:'0.75rem 1.5rem',borderRadius:'8px',fontWeight:700,cursor:'pointer',fontSize:'1rem'}}>
          {generating ? 'Se generează...' : '🎲 Generează preview'}
        </button>
      </div>

      {preview && (
        <>
          <div style={{background:'white',padding:'1.5rem',borderRadius:'12px',border:'1px solid #e2e8f0',marginBottom:'1.5rem'}}>
            <h2 style={{margin:'0 0 1rem',color:'#1e293b'}}>2️⃣ Subiect email</h2>
            <input type="text" value={subject} onChange={e => setSubject(e.target.value)}
              style={{width:'100%',padding:'0.75rem',border:'1px solid #cbd5e1',borderRadius:'8px',fontSize:'1rem'}} />
          </div>

          <div style={{background:'white',padding:'1.5rem',borderRadius:'12px',border:'1px solid #e2e8f0',marginBottom:'1.5rem'}}>
            <h2 style={{margin:'0 0 1rem',color:'#1e293b'}}>3️⃣ Preview newsletter</h2>
            <div style={{border:'1px solid #cbd5e1',borderRadius:'8px',overflow:'hidden'}}>
              <iframe srcDoc={preview.html} style={{width:'100%',height:'600px',border:'none'}} title="Preview" />
            </div>
          </div>

          <div style={{background:'#dbeafe',padding:'1.5rem',borderRadius:'12px',border:'2px solid #3b82f6',marginBottom:'1.5rem'}}>
            <h2 style={{margin:'0 0 0.5rem',color:'#1e3a8a'}}>4️⃣ TEST - Trimite doar la mine</h2>
            <p style={{color:'#1e40af',marginBottom:'1rem',fontSize:'0.95rem'}}>✉️ Recomandat: testează cum arată \u00een Inbox \u00eenainte de a trimite la toți.</p>
            <button onClick={() => sendNewsletter(true)} disabled={sending}
              style={{background:'#3b82f6',color:'white',border:'none',padding:'0.9rem 2rem',borderRadius:'8px',fontWeight:800,cursor:'pointer',fontSize:'1.05rem'}}>
              {sending ? '📤 Se trimite...' : '✉️ Trimite test (doar la mine)'}
            </button>
          </div>

          <div style={{background:'#fef3c7',padding:'1.5rem',borderRadius:'12px',border:'2px solid #d97706',marginBottom:'1.5rem'}}>
            <h2 style={{margin:'0 0 0.5rem',color:'#78350f'}}>5️⃣ Trimite la TOȚI utilizatorii</h2>
            <p style={{color:'#92400e',marginBottom:'1rem',fontSize:'0.95rem'}}>⚠️ Aceasta va trimite newsletter-ul la TOȚI utilizatorii abonați (290 persoane).</p>
            <button onClick={() => sendNewsletter(false)} disabled={sending}
              style={{background:'#d97706',color:'white',border:'none',padding:'0.9rem 2rem',borderRadius:'8px',fontWeight:800,cursor:'pointer',fontSize:'1.05rem'}}>
              {sending ? '📤 Se trimite...' : '🚀 TRIMITE LA TOȚI'}
            </button>
          </div>

          {sendResult && (
            <div style={{background:sendResult.error?'#fef2f2':'#f0fdf4',padding:'1.5rem',borderRadius:'12px',border:sendResult.error?'2px solid #dc2626':'2px solid #16a34a',marginBottom:'1.5rem'}}>
              {sendResult.error ? (
                <><h3 style={{color:'#991b1b',margin:'0 0 0.5rem'}}>❌ Eroare</h3><p style={{color:'#991b1b'}}>{sendResult.error}</p></>
              ) : (
                <>
                  <h3 style={{color:'#166534',margin:'0 0 0.5rem'}}>✅ Trimis cu succes!</h3>
                  <p style={{color:'#166534',fontSize:'1.1rem',margin:'0.5rem 0'}}>
                    📬 <strong>{sendResult.sent}</strong> emailuri trimise {sendResult.testMode ? '(MOD TEST)' : ''} (din {sendResult.total} destinatari)
                  </p>
                  {sendResult.failed > 0 && <p style={{color:'#d97706'}}>⚠️ {sendResult.failed} emailuri au eșuat</p>}
                </>
              )}
            </div>
          )}
        </>
      )}
    </div>
  );
}


export const getServerSideProps = requireAdmin();
