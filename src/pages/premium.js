import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { supabase } from '../lib/supabase';

export default function PremiumPage() {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isPremium, setIsPremium] = useState(false);

  useEffect(() => {
    async function loadUser() {
      const { data: { session } } = await supabase.auth.getSession();
      if (session) {
        setUser(session.user);
        try {
          const res = await fetch(`/api/subscription-status?userId=${session.user.id}`);
          const data = await res.json();
          setIsPremium(data.isPremium);
        } catch (e) {
          console.error(e);
        }
      }
    }
    loadUser();

    if (router.query.canceled === 'true') {
      alert('Plata a fost anulata. Poti incerca din nou oricand.');
    }
  }, [router.query]);

  async function handleSubscribe(plan) {
    if (!user) {
      router.push('/login?redirect=/premium');
      return;
    }
    
    setLoading(true);
    
    try {
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          plan,
          userId: user.id,
          userEmail: user.email,
        }),
      });
      
      const data = await res.json();
      
      if (data.url) {
        window.location.href = data.url;
      } else {
        alert('Eroare: ' + (data.error || 'Nu s-a putut crea sesiunea de plata'));
        setLoading(false);
      }
    } catch (error) {
      alert('Eroare: ' + error.message);
      setLoading(false);
    }
  }

  return (
    <>
      <section style={{
        background: 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 50%, #d97706 100%)',
        color: 'white',
        padding: '5rem 0 4rem',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{position:'absolute',top:0,left:0,right:0,bottom:0,background:'radial-gradient(circle at 30% 20%, rgba(255,255,255,0.15) 0%, transparent 50%)',pointerEvents:'none'}}></div>
        <div className="container" style={{position:'relative'}}>
          {isPremium ? (
            <div style={{display:'inline-block', background:'rgba(255,255,255,0.95)', padding:'0.75rem 1.5rem', borderRadius:'20px', fontSize:'1rem', fontWeight:700, marginBottom:'1.5rem', color:'#92400e'}}>
              ⭐ Esti deja Premium!
            </div>
          ) : (
            <div style={{display:'inline-block', background:'rgba(255,255,255,0.25)', backdropFilter:'blur(10px)', padding:'0.5rem 1.25rem', borderRadius:'20px', fontSize:'0.95rem', fontWeight:600, marginBottom:'1.5rem', border:'1px solid rgba(255,255,255,0.3)'}}>
              ⭐ Disponibil acum
            </div>
          )}
          <div style={{fontSize:'5rem', marginBottom:'0.5rem'}}>👑</div>
          <h1 style={{fontSize:'3.5rem', fontWeight:900, marginBottom:'1rem'}}>TerraQuiz Premium</h1>
          <p style={{fontSize:'1.3rem', opacity:0.95, maxWidth:'700px', margin:'0 auto 2rem', lineHeight:1.6}}>
            Pentru elevii seriosi care vor sa-si maximizeze invatarea. Fara reclame, cu statistici avansate si features exclusive.
          </p>
        </div>
      </section>

      <section style={{padding:'4rem 0', background:'linear-gradient(180deg, #fffbeb 0%, #ffffff 100%)'}}>
        <div className="container">
          <div style={{textAlign:'center', marginBottom:'3rem'}}>
            <h2 style={{fontSize:'2.5rem', fontWeight:800, color:'#1e293b'}}>Alege planul tau</h2>
            <p style={{color:'#64748b', fontSize:'1.1rem', marginTop:'0.5rem'}}>1 zi GRATIS de proba la ambele planuri</p>
          </div>

          <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(280px, 1fr))', gap:'1.5rem', maxWidth:'800px', margin:'0 auto'}}>
            <div style={{background:'white', padding:'2.5rem 2rem', borderRadius:'16px', border:'2px solid #e2e8f0', textAlign:'center'}}>
              <div style={{fontSize:'1rem', color:'#64748b', marginBottom:'0.5rem'}}>Lunar</div>
              <div style={{fontSize:'3rem', fontWeight:900, color:'#1e293b', lineHeight:1}}>9.90 <span style={{fontSize:'1.2rem', color:'#64748b', fontWeight:600}}>lei</span></div>
              <div style={{fontSize:'0.95rem', color:'#64748b', margin:'0.5rem 0 1.5rem'}}>per luna · anuleaza oricand</div>
              <button onClick={() => handleSubscribe('lunar')} disabled={loading || isPremium} style={{width:'100%', padding:'1rem', background: isPremium ? '#94a3b8' : 'linear-gradient(135deg, #d97706, #b45309)', color:'white', border:'none', borderRadius:'10px', fontWeight:700, fontSize:'1rem', cursor: (loading || isPremium) ? 'not-allowed' : 'pointer'}}>
                {isPremium ? 'Esti deja Premium' : (loading ? 'Se incarca...' : 'Cumpara Lunar')}
              </button>
            </div>

            <div style={{background:'linear-gradient(135deg, #fef3c7, #fde68a)', padding:'2.5rem 2rem', borderRadius:'16px', border:'3px solid #d97706', textAlign:'center', position:'relative'}}>
              <div style={{position:'absolute', top:'-12px', left:'50%', transform:'translateX(-50%)', background:'#dc2626', color:'white', fontSize:'0.75rem', padding:'0.25rem 0.75rem', borderRadius:'12px', fontWeight:700}}>
                ECONOMISESTI 25%
              </div>
              <div style={{fontSize:'1rem', color:'#92400e', marginBottom:'0.5rem'}}>Anual</div>
              <div style={{fontSize:'3rem', fontWeight:900, color:'#78350f', lineHeight:1}}>89 <span style={{fontSize:'1.2rem', color:'#92400e', fontWeight:600}}>lei</span></div>
              <div style={{fontSize:'0.95rem', color:'#92400e', margin:'0.5rem 0 1.5rem'}}>~7.40 lei/luna · 12 luni</div>
              <button onClick={() => handleSubscribe('anual')} disabled={loading || isPremium} style={{width:'100%', padding:'1rem', background: isPremium ? '#94a3b8' : 'linear-gradient(135deg, #d97706, #b45309)', color:'white', border:'none', borderRadius:'10px', fontWeight:700, fontSize:'1rem', cursor: (loading || isPremium) ? 'not-allowed' : 'pointer'}}>
                {isPremium ? 'Esti deja Premium' : (loading ? 'Se incarca...' : 'Cumpara Anual')}
              </button>
            </div>
          </div>

          {!user && (
            <div style={{textAlign:'center', marginTop:'2rem', padding:'1rem', background:'#eff6ff', borderRadius:'8px', color:'#1e40af', fontSize:'0.95rem'}}>
              💡 Trebuie sa fii logat pentru a cumpara Premium. <Link href="/login" style={{color:'#1e40af', fontWeight:700}}>Conecteaza-te aici</Link>
            </div>
          )}
        </div>
      </section>

      <section style={{padding:'4rem 0', background:'white'}}>
        <div className="container">
          <h2 style={{textAlign:'center', fontSize:'2.5rem', fontWeight:800, color:'#1e293b', marginBottom:'3rem'}}>
            Ce primesti cu Premium?
          </h2>
          <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(280px, 1fr))', gap:'1.5rem'}}>
            <BenefitCard icon="🚫" title="Zero reclame" description="Experienta 100% curata, fara pop-up-uri sau bannere." />
            <BenefitCard icon="📊" title="Statistici avansate" description="Vezi ce subiecte stapanesti si unde trebuie sa exersezi." />
            <BenefitCard icon="🎯" title="Mod Antrenament BAC" description="Exerseaza doar intrebarile grele de la BAC." />
            <BenefitCard icon="🏆" title="Diplome exclusive" description="Diplome speciale Premium cu design unic." />
            <BenefitCard icon="📥" title="Export rapoarte PDF" description="Exporta progresul tau ca raport profesional." />
            <BenefitCard icon="🚀" title="Acces prioritar" description="Primesti primul acces la capitole noi si features beta." />
          </div>
        </div>
      </section>

      <section style={{padding:'4rem 0', background:'#f8fafc'}}>
        <div className="container">
          <h2 style={{textAlign:'center', fontSize:'2.2rem', fontWeight:800, color:'#1e293b', marginBottom:'3rem'}}>Intrebari frecvente</h2>
          <div style={{maxWidth:'800px', margin:'0 auto'}}>
            <FAQ q="Cum functioneaza 1 zi gratis?" a="Te inscrii cu cardul, dar nu se descarca nimic in prima zi. Ai acces complet Premium 24 de ore. Daca nu iti place, anulezi si nu platesti nimic." />
            <FAQ q="Pot anula oricand?" a="Da! Poti anula abonamentul oricand din contul tau. Vei avea acces Premium pana la sfarsitul perioadei platite." />
            <FAQ q="Plata e sigura?" a="Da, folosim Stripe - una dintre cele mai sigure platforme de plati din lume (folosita de Apple, Google, Amazon)." />
            <FAQ q="Aplicatia ramane gratuita?" a="DA! Toate cele 11 capitole, multiplayer-ul si diplomele raman gratuite pentru totdeauna. Premium e doar pentru cei care vor in plus." />
          </div>
        </div>
      </section>
    </>
  );
}

function BenefitCard({ icon, title, description }) {
  return (
    <div style={{background:'#fffbeb', padding:'2rem', borderRadius:'16px', border:'2px solid #fbbf24'}}>
      <div style={{fontSize:'3rem', marginBottom:'1rem'}}>{icon}</div>
      <h3 style={{fontSize:'1.3rem', fontWeight:700, color:'#1e293b', marginBottom:'0.5rem'}}>{title}</h3>
      <p style={{color:'#64748b', lineHeight:1.6}}>{description}</p>
    </div>
  );
}

function FAQ({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{background:'white', borderRadius:'12px', marginBottom:'1rem', border:'1px solid #e2e8f0'}}>
      <button onClick={() => setOpen(!open)} style={{width:'100%', padding:'1.25rem', background:'transparent', border:'none', textAlign:'left', cursor:'pointer', display:'flex', justifyContent:'space-between', alignItems:'center', fontSize:'1.05rem', fontWeight:600, color:'#1e293b'}}>
        <span>{q}</span>
        <span style={{fontSize:'1.5rem', color:'#d97706'}}>{open ? '−' : '+'}</span>
      </button>
      {open && <div style={{padding:'0 1.25rem 1.25rem', color:'#475569', lineHeight:1.7}}>{a}</div>}
    </div>
  );
}
