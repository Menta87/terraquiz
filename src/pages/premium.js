import { useState, useEffect } from 'react';
import Link from 'next/link';
import { supabase } from '../lib/supabase';

export default function PremiumPage() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function checkUser() {
      const { data: { session } } = await supabase.auth.getSession();
      if (session) {
        setUser(session.user);
        setEmail(session.user.email);
      }
    }
    checkUser();
  }, []);

  async function handleNotifyMe(e) {
    e.preventDefault();
    setLoading(true);
    
    // Save to a "premium_waitlist" table (we'll create later if needed)
    // For now, just save locally and mark as submitted
    if (typeof window !== 'undefined') {
      const waitlist = JSON.parse(localStorage.getItem('premium_waitlist') || '[]');
      if (!waitlist.includes(email)) {
        waitlist.push(email);
        localStorage.setItem('premium_waitlist', JSON.stringify(waitlist));
      }
    }
    
    // Save in Supabase if logged in
    if (user) {
      await supabase.from('profiles').update({
        wants_premium: true,
        premium_signup_at: new Date().toISOString()
      }).eq('id', user.id);
    }
    
    setSubmitted(true);
    setLoading(false);
  }

  return (
    <>
      {/* Hero */}
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
          <div style={{
            display:'inline-block',
            background:'rgba(255,255,255,0.25)',
            backdropFilter:'blur(10px)',
            padding:'0.5rem 1.25rem',
            borderRadius:'20px',
            fontSize:'0.95rem',
            fontWeight:600,
            marginBottom:'1.5rem',
            border:'1px solid rgba(255,255,255,0.3)'
          }}>
            ⭐ În curând disponibil
          </div>
          <div style={{fontSize:'5rem', marginBottom:'0.5rem', filter:'drop-shadow(0 4px 8px rgba(0,0,0,0.3))'}}>👑</div>
          <h1 style={{fontSize:'3.5rem', fontWeight:900, marginBottom:'1rem', letterSpacing:'-1px'}}>TerraQuiz Premium</h1>
          <p style={{fontSize:'1.3rem', opacity:0.95, maxWidth:'700px', margin:'0 auto 2rem', lineHeight:1.6}}>
            Pentru elevii seriosi care vor sa-si maximizeze invatarea. Fara reclame, cu statistici avansate si features exclusive.
          </p>
          
          {/* Pricing card */}
          <div style={{
            display:'inline-flex',
            gap:'1rem',
            flexWrap:'wrap',
            justifyContent:'center',
          }}>
            <div style={{
              background:'rgba(255,255,255,0.2)',
              backdropFilter:'blur(10px)',
              padding:'1.5rem 2rem',
              borderRadius:'16px',
              border:'2px solid rgba(255,255,255,0.3)',
              minWidth:'180px',
            }}>
              <div style={{fontSize:'0.9rem', opacity:0.9}}>Lunar</div>
              <div style={{fontSize:'2.5rem', fontWeight:900, lineHeight:1, margin:'0.5rem 0'}}>9.90 <span style={{fontSize:'1rem', opacity:0.9}}>lei</span></div>
              <div style={{fontSize:'0.85rem', opacity:0.8}}>per lună</div>
            </div>
            <div style={{
              background:'rgba(255,255,255,0.95)',
              padding:'1.5rem 2rem',
              borderRadius:'16px',
              minWidth:'180px',
              color:'#92400e',
              position:'relative',
            }}>
              <div style={{
                position:'absolute',
                top:'-12px',
                left:'50%',
                transform:'translateX(-50%)',
                background:'#dc2626',
                color:'white',
                fontSize:'0.75rem',
                padding:'0.25rem 0.75rem',
                borderRadius:'12px',
                fontWeight:700,
              }}>-25% REDUCERE</div>
              <div style={{fontSize:'0.9rem', opacity:0.9}}>Anual</div>
              <div style={{fontSize:'2.5rem', fontWeight:900, lineHeight:1, margin:'0.5rem 0'}}>89 <span style={{fontSize:'1rem', opacity:0.9}}>lei</span></div>
              <div style={{fontSize:'0.85rem', opacity:0.8}}>~7.40 lei/lună</div>
            </div>
          </div>

          <div style={{marginTop:'1.5rem', fontSize:'1rem', opacity:0.95}}>
            🎁 <strong>1 zi GRATIS</strong> ca să încerci toate features-urile
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section style={{padding:'4rem 0', background:'linear-gradient(180deg, #fffbeb 0%, #ffffff 100%)'}}>
        <div className="container">
          <div style={{textAlign:'center', marginBottom:'3rem'}}>
            <h2 style={{fontSize:'2.5rem', fontWeight:800, color:'#1e293b', marginBottom:'0.5rem'}}>
              Ce primești cu Premium?
            </h2>
            <p style={{color:'#64748b', fontSize:'1.1rem'}}>
              Mult mai mult decât doar fără reclame
            </p>
          </div>

          <div style={{
            display:'grid',
            gridTemplateColumns:'repeat(auto-fill, minmax(280px, 1fr))',
            gap:'1.5rem',
            marginBottom:'3rem',
          }}>
            <BenefitCard
              icon="🚫"
              title="Zero reclame"
              description="Experiență 100% curată, fără pop-up-uri sau bannere. Concentrare totală pe învățare."
            />
            <BenefitCard
              icon="📊"
              title="Statistici avansate"
              description="Vezi ce subiecte stăpânești și unde trebuie să mai exersezi. Grafice detaliate de progres."
            />
            <BenefitCard
              icon="🎯"
              title="Mod Antrenament BAC"
              description="Exerseaza doar întrebările grele de la BAC, sortate pe subiecte și grad de dificultate."
            />
            <BenefitCard
              icon="🏆"
              title="Diplome exclusive"
              description="Diplome speciale Premium cu design unic, perfecte pentru CV sau portofoliu școlar."
            />
            <BenefitCard
              icon="📥"
              title="Export rapoarte PDF"
              description="Exportă progresul tău ca raport profesional - util pentru părinți sau meditații."
            />
            <BenefitCard
              icon="🚀"
              title="Acces prioritar"
              description="Primești primul acces la capitole noi, features beta și actualizări exclusive."
            />
          </div>
        </div>
      </section>

      {/* CTA - Notify me */}
      <section style={{
        background:'linear-gradient(135deg, #fef3c7, #fde68a)',
        padding:'4rem 0',
        textAlign:'center',
      }}>
        <div className="container">
          <div style={{maxWidth:'600px', margin:'0 auto'}}>
            <div style={{fontSize:'4rem', marginBottom:'1rem'}}>⏰</div>
            <h2 style={{fontSize:'2.2rem', fontWeight:800, color:'#78350f', marginBottom:'1rem'}}>
              Lansare în curând!
            </h2>
            <p style={{color:'#92400e', fontSize:'1.15rem', marginBottom:'2rem', lineHeight:1.6}}>
              Premium vine în câteva săptămâni. <strong>Primii 100 de înscriși</strong> primesc <strong>20% reducere permanentă</strong> + 1 lună gratis bonus!
            </p>

            {!submitted ? (
              <form onSubmit={handleNotifyMe} style={{
                background:'white',
                padding:'1.5rem',
                borderRadius:'16px',
                boxShadow:'0 8px 24px rgba(0,0,0,0.1)',
                display:'flex',
                gap:'0.5rem',
                flexWrap:'wrap',
              }}>
                <input
                  type="email"
                  required
                  placeholder="email@exemplu.com"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  style={{
                    flex:1, minWidth:'200px',
                    padding:'1rem',
                    fontSize:'1rem',
                    border:'2px solid #e2e8f0',
                    borderRadius:'10px',
                    color:'#1e293b'
                  }}
                />
                <button type="submit" disabled={loading} style={{
                  padding:'1rem 2rem',
                  background:'linear-gradient(135deg, #d97706, #b45309)',
                  color:'white',
                  border:'none',
                  borderRadius:'10px',
                  fontWeight:700,
                  fontSize:'1rem',
                  cursor: loading ? 'wait' : 'pointer',
                  whiteSpace:'nowrap',
                }}>
                  {loading ? 'Se inscrie...' : '🔔 Anunță-mă'}
                </button>
              </form>
            ) : (
              <div style={{
                background:'white',
                padding:'2rem',
                borderRadius:'16px',
                boxShadow:'0 8px 24px rgba(0,0,0,0.1)',
              }}>
                <div style={{fontSize:'3rem'}}>✅</div>
                <h3 style={{color:'#065f46', fontSize:'1.5rem', marginTop:'0.5rem', marginBottom:'0.5rem'}}>Te-am inscris!</h3>
                <p style={{color:'#475569'}}>
                  Vei primi email când Premium este disponibil. Mulțumesc!
                </p>
              </div>
            )}

            <p style={{marginTop:'1.5rem', fontSize:'0.9rem', color:'#92400e'}}>
              Nu trimitem spam. Te poți dezabona oricând.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{padding:'4rem 0', background:'white'}}>
        <div className="container">
          <h2 style={{textAlign:'center', fontSize:'2.2rem', fontWeight:800, color:'#1e293b', marginBottom:'3rem'}}>
            Întrebări frecvente
          </h2>
          <div style={{maxWidth:'800px', margin:'0 auto'}}>
            <FAQ
              q="Care e diferența între gratis și Premium?"
              a="Versiunea gratis are toate cele 11 capitole, multiplayer și diplome - perfect pentru elevii care exersează ocazional. Premium adaugă: zero reclame, statistici detaliate de progres, mod special de antrenament BAC și diplome exclusive. Ideal pentru elevii care iau aplicația în serios."
            />
            <FAQ
              q="Pot anula oricând?"
              a="Da! Poți anula abonamentul oricând din contul tău. Fără penalizări, fără întrebări. Vei avea acces Premium până la sfârșitul perioadei plătite."
            />
            <FAQ
              q="Cum funcționează 1 zi gratis?"
              a="Te înscrii cu cardul, dar nu se descarcă nimic în prima zi. Ai acces complet Premium 24 de ore. Dacă nu îți place, anulezi și nu plătești nimic."
            />
            <FAQ
              q="Există reducere pentru școli sau profesori?"
              a="Da! Pregătim un plan special pentru școli (5 lei/elev/an) cu funcții pentru profesori - dashboard de monitorizare a clasei, rapoarte agregate, posibilitatea de a crea capitole personalizate. Contactează-ne dacă reprezinți o școală."
            />
            <FAQ
              q="Plata e sigură?"
              a="Da, folosim Stripe - una dintre cele mai sigure platforme de plăți din lume (folosită de Apple, Google, Amazon). Datele cardului tău nu trec prin serverele noastre - sunt procesate direct de Stripe."
            />
            <FAQ
              q="Aplicația rămâne gratuită pentru utilizarea de bază?"
              a="DA, ABSOLUT! Misiunea TerraQuiz este să facă geografia accesibilă tuturor elevilor din România. Toate cele 11 capitole, multiplayer-ul cu colegii și diplomele rămân gratuite pentru totdeauna. Premium e doar pentru cei care vor în plus."
            />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section style={{
        background:'linear-gradient(135deg, #1e3a8a 0%, #5b21b6 100%)',
        padding:'3rem 0',
        textAlign:'center',
        color:'white',
      }}>
        <div className="container">
          <h2 style={{fontSize:'2rem', fontWeight:800, marginBottom:'1rem'}}>
            Începe gratis acum
          </h2>
          <p style={{fontSize:'1.1rem', opacity:0.95, marginBottom:'2rem', maxWidth:'500px', margin:'0 auto 2rem'}}>
            Joacă, învață, câștigă diplome - fără cont, fără card, fără limite.
          </p>
          <Link href="/" style={{
            display:'inline-block',
            background:'white',
            color:'#1e3a8a',
            padding:'1rem 2.5rem',
            borderRadius:'12px',
            fontWeight:800,
            fontSize:'1.1rem',
            textDecoration:'none',
            boxShadow:'0 8px 24px rgba(0,0,0,0.2)',
          }}>
            🌍 Începe să joci
          </Link>
        </div>
      </section>
    </>
  );
}

function BenefitCard({ icon, title, description }) {
  return (
    <div style={{
      background:'white',
      padding:'2rem',
      borderRadius:'16px',
      border:'2px solid #fbbf24',
      boxShadow:'0 4px 12px rgba(0,0,0,0.05)',
    }}>
      <div style={{fontSize:'3rem', marginBottom:'1rem'}}>{icon}</div>
      <h3 style={{fontSize:'1.3rem', fontWeight:700, color:'#1e293b', marginBottom:'0.5rem'}}>{title}</h3>
      <p style={{color:'#64748b', lineHeight:1.6}}>{description}</p>
    </div>
  );
}

function FAQ({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{
      background:'#f8fafc',
      borderRadius:'12px',
      marginBottom:'1rem',
      overflow:'hidden',
      border:'1px solid #e2e8f0',
    }}>
      <button onClick={() => setOpen(!open)} style={{
        width:'100%',
        padding:'1.25rem',
        background:'transparent',
        border:'none',
        textAlign:'left',
        cursor:'pointer',
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center',
        fontSize:'1.05rem',
        fontWeight:600,
        color:'#1e293b'
      }}>
        <span>{q}</span>
        <span style={{fontSize:'1.5rem', color:'#d97706'}}>{open ? '−' : '+'}</span>
      </button>
      {open && (
        <div style={{padding:'0 1.25rem 1.25rem', color:'#475569', lineHeight:1.7}}>
          {a}
        </div>
      )}
    </div>
  );
}
