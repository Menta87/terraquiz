import Link from 'next/link';
import Layout from '../../components/Layout';

const VARIANTE = [
  {
    id: 'varianta-1',
    nume: 'Varianta 1',
    descriere: 'Variantă completă cu Subiect I (Europa) + II (România) + III (Lumea)',
    durata: '~45 min',
    nrExercitii: 30,
    nivel: 'BAC complet',
    culoare: '#7c3aed',
    href: '/bac/varianta/varianta-1',
    disponibil: true,
  },
  {
    id: 'varianta-2',
    nume: 'Varianta 2',
    descriere: 'Subiect I (Europa) + II (România) + III (migrație + Podișul Mehedinți + fond funciar + Suedia)',
    durata: '~45 min',
    nrExercitii: 30,
    nivel: 'BAC complet',
    culoare: '#dc2626',
    href: '/bac/varianta/varianta-2',
    disponibil: true,
  },
  {
    id: 'varianta-3',
    nume: 'Varianta 3',
    descriere: 'Subiect I (Europa) + II (România) + III (precipitații + Subcarpații Moldovei + bilanț natural)',
    durata: '~45 min',
    nrExercitii: 30,
    nivel: 'BAC complet',
    culoare: '#0284c7',
    href: '/bac/varianta/varianta-3',
    disponibil: true,
  },
  {
    id: 'varianta-4',
    nume: 'Varianta 4',
    descriere: 'Subiect I (Europa) + II (România) + III (energie electrică + Câmpia Română)',
    durata: '~45 min',
    nrExercitii: 30,
    nivel: 'BAC complet',
    culoare: '#16a34a',
    href: '/bac/varianta/varianta-4',
    disponibil: true,
  },
  {
    id: 'varianta-5',
    nume: 'Varianta 5',
    descriere: 'Subiect I (Europa) + II (România) + III (natalitate/mortalitate + Dealurile de Vest)',
    durata: '~45 min',
    nrExercitii: 30,
    nivel: 'BAC complet',
    culoare: '#0891b2',
    href: '/bac/varianta/varianta-5',
    disponibil: true,
  },
  {
    id: 'varianta-6',
    nume: 'Varianta 6',
    descriere: 'Subiect I (Europa) + II (România) + III (defrișări + Câmpia de Vest + populație)',
    durata: '~45 min',
    nrExercitii: 30,
    nivel: 'BAC complet',
    culoare: '#a855f7',
    href: '/bac/varianta/varianta-6',
    disponibil: true,
  },
  {
    id: 'varianta-7',
    nume: 'Varianta 7',
    descriere: 'Subiect I (Europa) + II (România) + III (precipitații + Munții Banatului)',
    durata: '~45 min',
    nrExercitii: 30,
    nivel: 'BAC complet',
    culoare: '#f59e0b',
    href: '/bac/varianta/varianta-7',
    disponibil: true,
  },
  {
    id: 'varianta-8',
    nume: 'Varianta 8',
    descriere: 'Subiect I (Europa) + II (România) + III (temperaturi Murmansk + Podișul Someșan)',
    durata: '~45 min',
    nrExercitii: 30,
    nivel: 'BAC complet',
    culoare: '#ec4899',
    href: '/bac/varianta/varianta-8',
    disponibil: true,
  },
  {
    id: 'varianta-9',
    nume: 'Varianta 9',
    descriere: 'Subiect I (Europa) + II (România) + III (precipitații Constanța + Carpații Meridionali)',
    durata: '~45 min',
    nrExercitii: 30,
    nivel: 'BAC complet',
    culoare: '#06b6d4',
    href: '/bac/varianta/varianta-9',
    disponibil: true,
  },
  {
    id: 'varianta-10',
    nume: 'Varianta 10',
    descriere: 'Subiect I (Europa) + II (România) + III (Mureș, Olt, Prut + Subcarpații Curburii)',
    durata: '~45 min',
    nrExercitii: 30,
    nivel: 'BAC complet',
    culoare: '#84cc16',
    href: '/bac/varianta/varianta-10',
    disponibil: true,
  },
  {
    id: 'varianta-11',
    nume: 'Varianta 11',
    descriere: 'Subiect I (Europa) + II (România) + III (temperaturi Budapesta + Depresiunea Transilvaniei)',
    durata: '~45 min',
    nrExercitii: 30,
    nivel: 'BAC complet',
    culoare: '#a855f7',
    href: '/bac/varianta/varianta-11',
    disponibil: true,
  },
  {
    id: 'varianta-12',
    nume: 'Varianta 12',
    descriere: 'Subiect I (Europa) + II (România) + III (temperaturi Kiev + Masivul Dobrogei)',
    durata: '~45 min',
    nrExercitii: 30,
    nivel: 'BAC complet',
    culoare: '#f97316',
    href: '/bac/varianta/varianta-12',
    disponibil: true,
  },
  {
    id: 'varianta-13',
    nume: 'Varianta 13',
    descriere: 'Subiect I (Europa) + II (România) + III (natalitate/mortalitate + Podișul Bârladului)',
    durata: '~45 min',
    nrExercitii: 30,
    nivel: 'BAC complet',
    culoare: '#0d9488',
    href: '/bac/varianta/varianta-13',
    disponibil: true,
  },
  {
    id: 'varianta-14',
    nume: 'Varianta 14',
    descriere: 'Subiect I (Europa) + II (România) + III (debit Mureș + Podișul Târnavelor)',
    durata: '~45 min',
    nrExercitii: 30,
    nivel: 'BAC complet',
    culoare: '#9333ea',
    href: '/bac/varianta/varianta-14',
    disponibil: true,
  },
  {
    id: 'varianta-15',
    nume: 'Varianta 15',
    descriere: 'Subiect I (Europa) + II (România) + III (precipitații București + Câmpia Moldovei)',
    durata: '~45 min',
    nrExercitii: 30,
    nivel: 'BAC complet',
    culoare: '#e11d48',
     href: '/bac/varianta/varianta-15',
    disponibil: true,
  },
  {
    id: 'varianta-16',
    nume: 'Varianta 16',
    descriere: 'BAC 2009 - Europa + România (Pod. Someșan, Bârladului) + Italia',
    durata: '~45 min',
    nrExercitii: 30,
    nivel: 'BAC complet',
    culoare: '#10b981',
    href: '/bac/varianta/varianta-16',
    disponibil: true,
  },
  {
    id: 'varianta-17',
    nume: 'Varianta 17',
    descriere: 'BAC 2009 - Europa + România (M. Apuseni, P. Getic) + Regatul Unit',
    durata: '~45 min',
    nrExercitii: 30,
    nivel: 'BAC complet',
    culoare: '#8b5cf6',
    href: '/bac/varianta/varianta-17',
    disponibil: true,
  },
  {
    id: 'varianta-18',
    nume: 'Varianta 18',
    descriere: 'BAC 2009 - Europa + România (Parâng, Bărăgan) + Spania',
    durata: '~45 min',
    nrExercitii: 30,
    nivel: 'BAC complet',
    culoare: '#ef4444',
    href: '/bac/varianta/varianta-18',
    disponibil: true,
  },
  {
    id: 'varianta-19',
    nume: 'Varianta 19',
    descriere: 'BAC 2009 - Europa + România (Câmpia Vest, Subcarpați) + Franța',
    durata: '~45 min',
    nrExercitii: 30,
    nivel: 'BAC complet',
    culoare: '#3b82f6',
    href: '/bac/varianta/varianta-19',
    disponibil: true,
  },
  {
    id: 'varianta-20',
    nume: 'Varianta 20',
    descriere: 'BAC 2009 - Europa + România (Pod. Bârladului, Retezat) + producția de grâu',
    durata: '~45 min',
    nrExercitii: 30,
    nivel: 'BAC complet',
    culoare: '#f59e0b',
    href: '/bac/varianta/varianta-20',
    disponibil: true,
  },
  {
    id: 'varianta-21',
    nume: 'Varianta 21',
    descriere: 'BAC 2009 - Europa + România (Banatului, Maramureș) + Franța nod comunicație',
    durata: '~45 min',
    nrExercitii: 30,
    nivel: 'BAC complet',
    culoare: '#ec4899',
    href: '/bac/varianta/varianta-21',
    disponibil: true,
  },
];



export default function BacIndex() {
  return (
    <Layout>
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

      <section style={{padding: '3rem 1rem', maxWidth: '1100px', margin: '0 auto'}}>
        <h2 style={{textAlign: 'center', fontSize: '1.75rem', fontWeight: 800, color: '#1e293b', marginBottom: '0.5rem'}}>
          15 variante BAC disponibile
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

      <section style={{padding: '3rem 1rem', textAlign: 'center'}}>
        <h2 style={{fontSize: '1.5rem', fontWeight: 800, color: '#1e293b', marginBottom: '0.5rem'}}>
          Începe pregătirea acum
        </h2>
        <p style={{color: '#64748b', marginBottom: '1.5rem', fontSize: '1rem'}}>
          15 variante BAC complete · Toate gratuit
        </p>
        <Link href="/bac/varianta/varianta-1" style={{
          display: 'inline-block',
          padding: '0.9rem 2rem',
          background: 'linear-gradient(135deg, #0284c7, #1e40af)',
          color: 'white', borderRadius: '10px',
          textDecoration: 'none', fontWeight: 700, fontSize: '1.05rem',
        }}>
          🚀 Începe cu Varianta 1
        </Link>
      </section>
    </Layout>
  );
}
