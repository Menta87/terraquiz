import Link from 'next/link';
import Layout from '../../components/Layout';

const VARIANTE = [
  {
    id: 'demo',
    nume: 'Variantă Demo',
    descriere: 'Test rapid cu toate tipurile de exerciții - Subiect I + Calcule',
    durata: '~15 min',
    nrExercitii: 13,
    nivel: 'Începător',
    culoare: '#10b981',
    href: '/bac/demo-exercitii',
    disponibil: true,
  },
  {
    id: 'test-6',
    nume: 'Variantă inspirată BAC 2020',
    descriere: 'Subiect I (Europa) - identificare, completare, grilă, comparație, cauze',
    durata: '~30 min',
    nrExercitii: 13,
    nivel: 'Avansat',
    culoare: '#0284c7',
    href: '/bac/demo-exercitii',
    disponibil: true,
  },
   {
    id: 'subiect-2',
    nume: 'Subiect II - Geografia României',
    descriere: 'Unități de relief, râuri, orașe, comparații, cauze - 30 puncte',
    durata: '~30 min',
    nrExercitii: 13,
    nivel: 'Avansat',
    culoare: '#d97706',
    href: '/bac/subiect-2',
    disponibil: true,
  },
  {
    id: 'test-10',
    nume: 'Variantă completă BAC',
    descriere: 'Subiect I + II + III cu timer 3 ore (în curând)',
    durata: '~3 ore',
    nrExercitii: 30,
    nivel: 'Examen',
    culoare: '#7c3aed',
    href: '#',
    disponibil: false,
  },
];


export default function BacIndex() {
  return (
    <Layout>
      {/* Hero */}
      <section style={{
        background: 'linear-gradient(135deg, #1e3a8a 0%, #5b21b6 50%, #7c3aed 100%)',
        color: 'white',
        padding: '4rem 1rem 3rem',
        textAlign: 'center',
      }}>
        <div style={{maxWidth: '900px', margin: '0 auto'}}>
          <div style={{fontSize: '4rem', marginBottom: '0.5rem'}}>🎓</div>
          <h1 style={{fontSize: '2.5rem', fontWeight: 900, margin: '0 0 0.5rem'}}>
            Pregătire BAC Geografie
          </h1>
          <p style={{fontSize: '1.15rem', opacity: 0.95, margin: '0 0 1.5rem', lineHeight: 1.6}}>
            Exerciții identice cu examenul real. Hărți interactive, întrebări inspirate din variantele oficiale, auto-evaluare cu barem.
          </p>
          
          <div style={{
            display: 'inline-flex', gap: '1rem', flexWrap: 'wrap',
            justifyContent: 'center', marginTop: '1rem',
          }}>
            <span style={{
              background: 'rgba(255,255,255,0.2)', padding: '0.5rem 1rem',
              borderRadius: '20px', fontSize: '0.9rem', fontWeight: 600,
              backdropFilter: 'blur(10px)',
            }}>
              🎯 Format autentic BAC
            </span>
            <span style={{
              background: 'rgba(255,255,255,0.2)', padding: '0.5rem 1rem',
              borderRadius: '20px', fontSize: '0.9rem', fontWeight: 600,
              backdropFilter: 'blur(10px)',
            }}>
              📊 Scor automat
            </span>
            <span style={{
              background: 'rgba(255,255,255,0.2)', padding: '0.5rem 1rem',
              borderRadius: '20px', fontSize: '0.9rem', fontWeight: 600,
              backdropFilter: 'blur(10px)',
            }}>
              🗺️ Hărți interactive
            </span>
          </div>
        </div>
      </section>

      {/* Variante */}
      <section style={{padding: '3rem 1rem', maxWidth: '1100px', margin: '0 auto'}}>
        <h2 style={{textAlign: 'center', fontSize: '1.75rem', fontWeight: 800, color: '#1e293b', marginBottom: '0.5rem'}}>
          Variante disponibile
        </h2>
        <p style={{textAlign: 'center', color: '#64748b', marginBottom: '2.5rem', fontSize: '1rem'}}>
          Alege o variantă și începe pregătirea pentru BAC
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '1.5rem',
        }}>
          {VARIANTE.map(function(v) {
            return (
              <div key={v.id} style={{
                background: 'white',
                borderRadius: '16px',
                border: '2px solid #e2e8f0',
                padding: '1.75rem',
                position: 'relative',
                opacity: v.disponibil ? 1 : 0.6,
                transition: 'transform 0.2s',
              }}>
                <div style={{
                  position: 'absolute', top: '1rem', right: '1rem',
                  background: v.culoare, color: 'white',
                  padding: '0.25rem 0.75rem', borderRadius: '12px',
                  fontSize: '0.75rem', fontWeight: 700,
                }}>
                  {v.nivel}
                </div>

                <h3 style={{
                  margin: '0 0 0.5rem', color: '#1e293b',
                  fontSize: '1.25rem', fontWeight: 800,
                  paddingRight: '5rem',
                }}>
                  {v.nume}
                </h3>

                <p style={{margin: '0 0 1rem', color: '#64748b', fontSize: '0.95rem', lineHeight: 1.5}}>
                  {v.descriere}
                </p>

                <div style={{
                  display: 'flex', gap: '1rem', flexWrap: 'wrap',
                  marginBottom: '1.25rem', fontSize: '0.85rem', color: '#475569',
                }}>
                  <span>⏱️ {v.durata}</span>
                  <span>📝 {v.nrExercitii} exerciții</span>
                </div>

                {v.disponibil ? (
                  <Link href={v.href} style={{
                    display: 'block', textAlign: 'center',
                    padding: '0.7rem 1.2rem',
                    background: v.culoare, color: 'white',
                    borderRadius: '8px', textDecoration: 'none',
                    fontWeight: 700, fontSize: '0.95rem',
                  }}>
                    🚀 Începe varianta
                  </Link>
                ) : (
                  <button disabled style={{
                    width: '100%', padding: '0.7rem 1.2rem',
                    background: '#94a3b8', color: 'white',
                    border: 'none', borderRadius: '8px',
                    fontWeight: 700, fontSize: '0.95rem',
                    cursor: 'not-allowed',
                  }}>
                    🔔 În curând
                  </button>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Info despre BAC */}
      <section style={{
        background: '#f8fafc', padding: '3rem 1rem',
      }}>
        <div style={{maxWidth: '900px', margin: '0 auto'}}>
          <h2 style={{textAlign: 'center', fontSize: '1.5rem', fontWeight: 800, color: '#1e293b', marginBottom: '2rem'}}>
            De ce TerraQuiz pentru BAC?
          </h2>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '1.5rem',
          }}>
            <div style={{textAlign: 'center', padding: '1rem'}}>
              <div style={{fontSize: '2.5rem', marginBottom: '0.5rem'}}>📋</div>
              <h3 style={{margin: '0 0 0.5rem', color: '#1e293b', fontSize: '1.05rem'}}>Format autentic</h3>
              <p style={{margin: 0, color: '#64748b', fontSize: '0.9rem', lineHeight: 1.5}}>
                Exerciții identice cu cele de la examen
              </p>
            </div>
            <div style={{textAlign: 'center', padding: '1rem'}}>
              <div style={{fontSize: '2.5rem', marginBottom: '0.5rem'}}>🗺️</div>
              <h3 style={{margin: '0 0 0.5rem', color: '#1e293b', fontSize: '1.05rem'}}>Hărți interactive</h3>
              <p style={{margin: 0, color: '#64748b', fontSize: '0.9rem', lineHeight: 1.5}}>
                Hover, click, identificare directă
              </p>
            </div>
            <div style={{textAlign: 'center', padding: '1rem'}}>
              <div style={{fontSize: '2.5rem', marginBottom: '0.5rem'}}>📊</div>
              <h3 style={{margin: '0 0 0.5rem', color: '#1e293b', fontSize: '1.05rem'}}>Punctaj automat</h3>
              <p style={{margin: 0, color: '#64748b', fontSize: '0.9rem', lineHeight: 1.5}}>
                Scor calculat conform baremului oficial
              </p>
            </div>
            <div style={{textAlign: 'center', padding: '1rem'}}>
              <div style={{fontSize: '2.5rem', marginBottom: '0.5rem'}}>🎯</div>
              <h3 style={{margin: '0 0 0.5rem', color: '#1e293b', fontSize: '1.05rem'}}>Auto-evaluare</h3>
              <p style={{margin: 0, color: '#64748b', fontSize: '0.9rem', lineHeight: 1.5}}>
                Pentru răspunsurile deschise, cu cuvinte-cheie
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section style={{padding: '3rem 1rem', textAlign: 'center'}}>
        <h2 style={{fontSize: '1.5rem', fontWeight: 800, color: '#1e293b', marginBottom: '0.5rem'}}>
          Începe pregătirea acum
        </h2>
        <p style={{color: '#64748b', marginBottom: '1.5rem', fontSize: '1rem'}}>
          Totul e gratuit. Fără cont obligatoriu pentru variantele demo.
        </p>
        <Link href="/bac/demo-exercitii" style={{
          display: 'inline-block',
          padding: '0.9rem 2rem',
          background: 'linear-gradient(135deg, #0284c7, #1e40af)',
          color: 'white', borderRadius: '10px',
          textDecoration: 'none', fontWeight: 700, fontSize: '1.05rem',
        }}>
          🚀 Începe acum cu varianta Demo
        </Link>
      </section>
    </Layout>
  );
}
