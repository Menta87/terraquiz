import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { supabase } from '../lib/supabase';

export default function Profile() {
  const router = useRouter();
  const [profile, setProfile] = useState(null);
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [subscription, setSubscription] = useState(null);
  const [portalLoading, setPortalLoading] = useState(false);
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    load();
  }, []);

  async function load() {
    const { data: { session } } = await supabase.auth.getSession();
    if (!session) {
      router.push('/login');
      return;
    }
    setUserId(session.user.id);

    const { data: prof } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', session.user.id)
      .single();
    setProfile({ ...prof, email: session.user.email });

    // Verific subscription
    try {
      const res = await fetch('/api/subscription-status?userId=' + session.user.id);
      const data = await res.json();
      setSubscription(data);
    } catch (e) {}

    const { data: res } = await supabase
      .from('game_results')
      .select('*, chapters(name, emoji)')
      .eq('user_id', session.user.id)
      .order('played_at', { ascending: false })
      .limit(10);
    setResults(res || []);
    setLoading(false);
  }

  async function openCustomerPortal() {
    setPortalLoading(true);
    try {
      const res = await fetch('/api/customer-portal', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId }),
      });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        alert('Eroare: ' + (data.error || 'Nu s-a putut deschide portalul'));
      }
    } catch (err) {
      alert('Eroare la deschiderea portalului');
    }
    setPortalLoading(false);
  }

  async function handleLogout() {
    if (confirm('Sigur vrei să te deconectezi?')) {
      await supabase.auth.signOut();
      router.push('/');
    }
  }

  if (loading) return <div className="loading container">Se încarcă...</div>;

  const isPremium = subscription?.isPremium;
  const willCancel = subscription?.cancelAtPeriodEnd;
  const periodEnd = subscription?.currentPeriodEnd 
    ? new Date(subscription.currentPeriodEnd).toLocaleDateString('ro-RO', { day: 'numeric', month: 'long', year: 'numeric' })
    : null;

  return (
    <div className="container" style={{padding:'2rem 1.5rem', maxWidth:'800px'}}>
      <div style={{
        background:'linear-gradient(135deg, var(--primary), var(--accent))',
        color:'white',
        padding:'2rem',
        borderRadius:'12px',
        marginBottom:'2rem'
      }}>
        <div style={{fontSize:'4rem'}}>👤</div>
        <h1 style={{color:'white', margin:'0.5rem 0'}}>{profile?.username || 'Anonim'}</h1>
        <p style={{opacity:0.9}}>{profile?.email}</p>
        <div style={{display:'grid', gridTemplateColumns:'repeat(2, 1fr)', gap:'1rem', marginTop:'1.5rem'}}>
          <div>
            <div style={{fontSize:'2rem', fontWeight:700}}>{profile?.total_score || 0}</div>
            <div style={{opacity:0.85, fontSize:'0.9rem'}}>Punctaj total</div>
          </div>
          <div>
            <div style={{fontSize:'2rem', fontWeight:700}}>{profile?.games_played || 0}</div>
            <div style={{opacity:0.85, fontSize:'0.9rem'}}>Jocuri jucate</div>
          </div>
          <div style={{background:'rgba(249,115,22,0.25)',padding:'0.75rem',borderRadius:'12px'}}>
            <div style={{fontSize:'2rem', fontWeight:700}}>🔥 {profile?.current_streak || 0}</div>
            <div style={{opacity:0.85, fontSize:'0.9rem'}}>Zile consecutive</div>
          </div>
          <div style={{background:'rgba(234,179,8,0.25)',padding:'0.75rem',borderRadius:'12px'}}>
            <div style={{fontSize:'2rem', fontWeight:700}}>🏆 {profile?.longest_streak || 0}</div>
            <div style={{opacity:0.85, fontSize:'0.9rem'}}>Record streak</div>
          </div>
        </div>
      </div>

      {/* SECȚIUNE ABONAMENT */}
      <div style={{
        background: isPremium 
          ? 'linear-gradient(135deg, #fef3c7, #fde68a)' 
          : 'linear-gradient(135deg, #e0e7ff, #c7d2fe)',
        padding:'1.5rem',
        borderRadius:'12px',
        marginBottom:'2rem',
        border: isPremium ? '2px solid #f59e0b' : '2px solid #6366f1',
      }}>
        <div style={{display:'flex', alignItems:'center', gap:'0.75rem', marginBottom:'1rem'}}>
          <div style={{fontSize:'2rem'}}>{isPremium ? '👑' : '⭐'}</div>
          <h2 style={{margin:0, color:'#1e293b'}}>
            {isPremium ? 'Abonament Premium' : 'Cont Free'}
          </h2>
        </div>

        {isPremium ? (
          <>
            <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'0.75rem', marginBottom:'1.5rem'}}>
              <div style={{background:'white', padding:'0.75rem', borderRadius:'8px'}}>
                <div style={{fontSize:'0.8rem', color:'#64748b'}}>Plan</div>
                <div style={{fontWeight:700, color:'#1e293b', textTransform:'capitalize'}}>{subscription.plan || 'Lunar'}</div>
              </div>
              <div style={{background:'white', padding:'0.75rem', borderRadius:'8px'}}>
                <div style={{fontSize:'0.8rem', color:'#64748b'}}>Status</div>
                <div style={{fontWeight:700, color:'#10b981'}}>✅ Activ</div>
              </div>
            </div>

            {periodEnd && (
              <div style={{background:'white', padding:'0.75rem 1rem', borderRadius:'8px', marginBottom:'1rem', color:'#475569', fontSize:'0.9rem'}}>
                {willCancel ? (
                  <>⏰ Abonamentul se anulează la <strong>{periodEnd}</strong> - poți încă folosi Premium până atunci</>
                ) : (
                  <>🔄 Se reînnoiește automat la <strong>{periodEnd}</strong></>
                )}
              </div>
            )}

            <button 
              onClick={openCustomerPortal} 
              disabled={portalLoading}
              style={{
                width:'100%', padding:'0.9rem',
                background:'linear-gradient(135deg, #1e293b, #475569)',
                color:'white', border:'none', borderRadius:'10px',
                fontWeight:700, fontSize:'1rem', cursor:'pointer',
                marginBottom:'0.5rem',
              }}
            >
              {portalLoading ? 'Se încarcă...' : '⚙️ Gestionează abonamentul'}
            </button>
            <p style={{fontSize:'0.8rem', color:'#64748b', textAlign:'center', margin:'0.5rem 0 0'}}>
              Anulare, schimbare plan, update card - toate disponibile aici
            </p>
          </>
        ) : (
          <>
            <p style={{color:'#475569', marginBottom:'1.5rem', lineHeight:1.6}}>
              Ai acces gratuit la Variantele 1-5. Deblochează toate cele 22 de variante BAC cu un abonament Premium.
            </p>
            <Link href="/premium" style={{
              display:'block', textAlign:'center', padding:'0.9rem',
              background:'linear-gradient(135deg, #f59e0b, #d97706)',
              color:'white', borderRadius:'10px',
              textDecoration:'none', fontWeight:700, fontSize:'1rem',
            }}>
              👑 Vezi planurile Premium
            </Link>
          </>
        )}
      </div>

      <h2 style={{marginBottom:'1rem', color:'var(--primary-dark)'}}>📜 Ultimele jocuri</h2>
      {results.length === 0 ? (
        <p style={{color:'var(--text-light)', textAlign:'center', padding:'2rem'}}>
          Nu ai jucat încă nimic. Începe primul tău joc!
        </p>
      ) : (
        <div style={{display:'flex', flexDirection:'column', gap:'0.75rem'}}>
          {results.map(r => (
            <div key={r.id} style={{
              background:'white',
              padding:'1rem 1.5rem',
              borderRadius:'10px',
              display:'grid',
              gridTemplateColumns:'auto 1fr auto',
              gap:'1rem',
              alignItems:'center',
              boxShadow:'0 2px 6px rgba(0,0,0,0.04)'
            }}>
              <div style={{fontSize:'1.75rem'}}>{r.chapters?.emoji}</div>
              <div>
                <div style={{fontWeight:600}}>{r.chapters?.name}</div>
                <div style={{fontSize:'0.85rem', color:'var(--text-light)'}}>
                  {r.questions_correct}/{r.questions_total} corecte · {new Date(r.played_at).toLocaleDateString('ro-RO')}
                </div>
              </div>
              <div style={{fontWeight:700, color:'var(--primary)', fontSize:'1.25rem'}}>
                {r.score} pct
              </div>
            </div>
          ))}
        </div>
      )}

      <div style={{marginTop:'3rem', paddingTop:'2rem', borderTop:'1px solid #e2e8f0', textAlign:'center'}}>
        <button onClick={handleLogout} style={{
          padding:'0.7rem 1.5rem',
          background:'#fee2e2', color:'#991b1b',
          border:'none', borderRadius:'8px',
          fontWeight:700, cursor:'pointer',
        }}>
          🚪 Deconectează-mă
        </button>
      </div>
    </div>
  );
}
