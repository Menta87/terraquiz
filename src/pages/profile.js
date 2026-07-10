import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { supabase } from '../lib/supabase';

export default function Profile() {
  const router = useRouter();
  const [profile, setProfile] = useState(null);
  const [showAvatarPicker, setShowAvatarPicker] = useState(false);
  const [isPremiumUser, setIsPremiumUser] = useState(false);
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

  async function changeAvatar(emoji) {
    const { data: { session } } = await supabase.auth.getSession();
    if (!session) return;
    await supabase.from('profiles').update({ avatar_emoji: emoji }).eq('id', session.user.id);
    setProfile({ ...profile, avatar_emoji: emoji });
    setShowAvatarPicker(false);
  }
    if (loading) return <div className="loading container">Se încarcă...</div>;

  const isPremium = subscription?.isPremium;
  if (isPremium !== isPremiumUser) setIsPremiumUser(isPremium);
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
        <div style={{fontSize:'4rem', cursor:'pointer', transition:'transform 0.2s'}} onClick={() => setShowAvatarPicker(true)} onMouseEnter={e => e.currentTarget.style.transform='scale(1.1)'} onMouseLeave={e => e.currentTarget.style.transform='scale(1)'} title="Click pentru a schimba avatarul">{profile?.avatar_emoji || '👤'}</div>
        <div style={{fontSize:'0.75rem', opacity:0.8, marginTop:'-0.25rem'}}>click pentru a schimba</div>
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
      {showAvatarPicker && (
        <div style={{position:'fixed',top:0,left:0,right:0,bottom:0,background:'rgba(0,0,0,0.7)',display:'flex',alignItems:'center',justifyContent:'center',zIndex:9999,padding:'1rem'}} onClick={() => setShowAvatarPicker(false)}>
          <div style={{background:'white',borderRadius:'20px',padding:'2rem',maxWidth:'500px',width:'100%',maxHeight:'80vh',overflowY:'auto'}} onClick={e => e.stopPropagation()}>
            <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:'1rem'}}>
              <h2 style={{margin:0,color:'#1e293b'}}>Alege un avatar</h2>
              <button onClick={() => setShowAvatarPicker(false)} style={{background:'none',border:'none',fontSize:'1.5rem',cursor:'pointer',color:'#64748b'}}>×</button>
            </div>
            <div style={{fontSize:'0.9rem',color:'#64748b',marginBottom:'1rem'}}>Free - 20 avatare disponibile</div>
            <div style={{display:'grid',gridTemplateColumns:'repeat(5, 1fr)',gap:'0.75rem',marginBottom:'1.5rem'}}>
              {["👤","😀","😎","🤓","🧐","🤠","🥳","👨‍🎓","👩‍🎓","👨‍🏫","👩‍🏫","🦁","🐯","🦉","🐺","🦊","🐨","🐼","🐸","🐙"].map(emoji => (
                <button key={emoji} onClick={() => changeAvatar(emoji)} style={{fontSize:'2rem',padding:'0.75rem',border: profile?.avatar_emoji === emoji ? '3px solid #8b5cf6' : '2px solid #e2e8f0',borderRadius:'12px',background: profile?.avatar_emoji === emoji ? '#ede9fe' : 'white',cursor:'pointer',transition:'all 0.2s'}}>{emoji}</button>
              ))}
            </div>
            <div style={{fontSize:'0.9rem',color:'#f59e0b',fontWeight:700,marginBottom:'1rem'}}>👑 Premium - 20 avatare exclusive</div>
            <div style={{display:'grid',gridTemplateColumns:'repeat(5, 1fr)',gap:'0.75rem'}}>
              {["👑","💎","🏆","⚡","🌟","🔥","🚀","🦄","🐉","🦅","🦈","🐆","🦁","⚔️","🎯","🎖️","🏅","💫","✨","🌈"].map(emoji => (
                <button key={emoji} onClick={() => isPremiumUser ? changeAvatar(emoji) : null} disabled={!isPremiumUser} style={{fontSize:'2rem',padding:'0.75rem',border: profile?.avatar_emoji === emoji ? '3px solid #f59e0b' : '2px solid #fef3c7',borderRadius:'12px',background: profile?.avatar_emoji === emoji ? '#fef3c7' : '#fffbeb',cursor: isPremiumUser ? 'pointer' : 'not-allowed',opacity: isPremiumUser ? 1 : 0.4,transition:'all 0.2s',position:'relative'}}>{emoji}{!isPremiumUser && <div style={{position:'absolute',top:'2px',right:'2px',fontSize:'0.6rem'}}>🔒</div>}</button>
              ))}
            </div>
            {!isPremiumUser && (
              <div style={{marginTop:'1rem',padding:'1rem',background:'linear-gradient(135deg, #fef3c7, #fde68a)',borderRadius:'12px',textAlign:'center'}}>
                <div style={{color:'#92400e',fontWeight:700}}>👑 Deblochează avatarele Premium</div>
                <a href="/premium" style={{display:'inline-block',marginTop:'0.5rem',padding:'0.5rem 1rem',background:'#f59e0b',color:'white',borderRadius:'8px',textDecoration:'none',fontWeight:700}}>Devino Premium</a>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}