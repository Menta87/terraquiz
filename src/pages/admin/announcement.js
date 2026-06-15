import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { supabase } from '../../lib/supabase';

export default function AnnouncementAdmin() {
  const [loading, setLoading] = useState(true);
  const [authorized, setAuthorized] = useState(false);
  const [userEmail, setUserEmail] = useState('');
  const [sending, setSending] = useState(false);
  const [result, setResult] = useState(null);
  const router = useRouter();

  useEffect(() => { checkAuth(); }, []);

  async function checkAuth() {
    const { data: { session } } = await supabase.auth.getSession();
    if (!session) { router.push('/login'); return; }
    setUserEmail(session.user.email);
    if (session.user.email === 'robert_menta@yahoo.com') setAuthorized(true);
    setLoading(false);
  }

  async function send(testMode) {
    const msg = testMode 
      ? 'Trimitem email TEST doar la robert_menta@yahoo.com?'
      : '⚠️ ATENTIE: vrei sa trimiti email-ul la TOTI utilizatorii activi?';
    if (!confirm(msg)) return;
    
    setSending(true);
    setResult(null);
    try {
      const res = await fetch('/api/newsletter-announcement', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ adminEmail: userEmail, testMode }),
      });
      setResult(await res.json());
    } catch (e) { setResult({ error: e.message }); }
    setSending(false);
  }

  if (loading) return <div style={{padding:'2rem',textAlign:'center'}}>Se încarcă...</div>;

  if (!authorized) {
    return (
      <div style={{padding:'2rem',textAlign:'center',maxWidth:'500px',margin:'4rem auto'}}>
        <div style={{fontSize:'4rem'}}>🚫</div>
        <h1>Acces interzis</h1>
        <a href="/" style={{color:'#1e3a8a'}}>← Înapoi acasă</a>
      </div>
    );
  }

  return (
    <div style={{maxWidth:'800px',margin:'0 auto',padding:'2rem 1rem'}}>
      <h1 style={{color:'#1e293b',marginBottom:'0.5rem'}}>📢 Anunț special - Limita zilnică</h1>
      <p style={{color:'#64748b',marginBottom:'2rem'}}>Trimite emailul de anunt despre limita 20 jocuri/zi catre utilizatorii activi (au jucat in ultimele 30 zile).</p>

      <div style={{background:'#dbeafe',padding:'1.5rem',borderRadius:'12px',border:'2px solid #3b82f6',marginBottom:'1.5rem'}}>
        <h2 style={{margin:'0 0 0.5rem',color:'#1e3a8a'}}>1️⃣ Test - Trimite doar la mine</h2>
        <p style={{color:'#1e40af',marginBottom:'1rem',fontSize:'0.95rem'}}>✉️ Verifica cum arata in Inbox inainte de trimiterea oficiala.</p>
        <button onClick={() => send(true)} disabled={sending}
          style={{background:'#3b82f6',color:'white',border:'none',padding:'0.9rem 2rem',borderRadius:'8px',fontWeight:800,cursor:'pointer',fontSize:'1.05rem'}}>
          {sending ? '📤 Se trimite...' : '✉️ Trimite test'}
        </button>
      </div>

      <div style={{background:'#fef3c7',padding:'1.5rem',borderRadius:'12px',border:'2px solid #d97706',marginBottom:'1.5rem'}}>
        <h2 style={{margin:'0 0 0.5rem',color:'#78350f'}}>2️⃣ Trimite la toti utilizatorii activi</h2>
        <p style={{color:'#92400e',marginBottom:'1rem',fontSize:'0.95rem'}}>⚠️ Va trimite la TOTI utilizatorii care au jucat in ultimele 30 zile.</p>
        <button onClick={() => send(false)} disabled={sending}
          style={{background:'#d97706',color:'white',border:'none',padding:'0.9rem 2rem',borderRadius:'8px',fontWeight:800,cursor:'pointer',fontSize:'1.05rem'}}>
          {sending ? '📤 Se trimite...' : '🚀 TRIMITE LA TOTI'}
        </button>
      </div>

      {result && (
        <div style={{background:result.error?'#fef2f2':'#f0fdf4',padding:'1.5rem',borderRadius:'12px',border:result.error?'2px solid #dc2626':'2px solid #16a34a'}}>
          {result.error ? (
            <><h3 style={{color:'#991b1b',margin:'0 0 0.5rem'}}>❌ Eroare</h3><p style={{color:'#991b1b'}}>{result.error}</p></>
          ) : (
            <>
              <h3 style={{color:'#166534',margin:'0 0 0.5rem'}}>✅ Trimis cu succes!</h3>
              <p style={{color:'#166534',fontSize:'1.1rem'}}>
                📬 <strong>{result.sent}</strong> emailuri trimise {result.testMode ? '(MOD TEST)' : ''} (din {result.total} destinatari)
              </p>
              {result.failed > 0 && <p style={{color:'#d97706'}}>⚠️ {result.failed} esuate</p>}
            </>
          )}
        </div>
      )}
    </div>
  );
}
