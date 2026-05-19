import Link from 'next/link';
import Layout from '../../components/Layout';

const VARIANTE = [
  {
    id: 'varianta-1',
    nume: 'Varianta 1',
    durata: '~45 min',
    nrExercitii: 30,
    nivel: 'BAC complet',
    culoare: '#10b981',
    href: '/bac/varianta/varianta-1',
    disponibil: true,
  },
  {
    id: 'varianta-2',
    nume: 'Varianta 2',
    durata: '~45 min',
    nrExercitii: 30,
    nivel: 'BAC complet',
    culoare: '#8b5cf6',
    href: '/bac/varianta/varianta-2',
    disponibil: true,
  },
  {
    id: 'varianta-3',
    nume: 'Varianta 3',
    durata: '~45 min',
    nrExercitii: 30,
    nivel: 'BAC complet',
    culoare: '#ef4444',
    href: '/bac/varianta/varianta-3',
    disponibil: true,
  },
  {
    id: 'varianta-4',
    nume: 'Varianta 4',
    durata: '~45 min',
    nrExercitii: 30,
    nivel: 'BAC complet',
    culoare: '#3b82f6',
    href: '/bac/varianta/varianta-4',
    disponibil: true,
  },
  {
    id: 'varianta-5',
    nume: 'Varianta 5',
    durata: '~45 min',
    nrExercitii: 30,
    nivel: 'BAC complet',
    culoare: '#f59e0b',
    href: '/bac/varianta/varianta-5',
    disponibil: true,
  },
  {
    id: 'varianta-6',
    nume: 'Varianta 6',
    durata: '~45 min',
    nrExercitii: 30,
    nivel: 'BAC complet',
    culoare: '#ec4899',
    href: '/bac/varianta/varianta-6',
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
            Variante autentice cu hărți oficiale și diagrame.
          </p>
        </div>
      </section>

      <section style={{padding: '3rem 1rem', maxWidth: '1100px', margin: '0 auto'}}>
        <h2 style={{textAlign: 'center', fontSize: '1.75rem', fontWeight: 800, color: '#1e293b', marginBottom: '0.5rem'}}>
          Variante BAC disponibile
        </h2>
        <p style={{textAlign: 'center', color: '#64748b', marginBottom: '2.5rem', fontSize: '1rem'}}>
          În curs de extindere
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
                  margin: '0 0 1rem', color: '#1e293b',
                  fontSize: '1.25rem', fontWeight: 800,
                  paddingRight: '5rem',
                }}>
                  {v.nume}
                </h3>
                <div style={{
                  display: 'flex', gap: '1rem', flexWrap: 'wrap',
                  marginBottom: '1.25rem', fontSize: '0.85rem', color: '#475569',
                }}>
                  <span>⏱️ {v.durata}</span>
                  <span>📝 {v.nrExercitii} exerciții</span>
                </div>
                <Link href={v.href} style={{
                  display: 'block', textAlign: 'center',
                  padding: '0.7rem 1.2rem',
                  background: v.culoare, color: 'white',
                  borderRadius: '8px', textDecoration: 'none',
                  fontWeight: 700, fontSize: '0.95rem',
                }}>
                  🚀 Începe varianta
                </Link>
              </div>
            );
          })}
        </div>
      </section>
    </Layout>
  );
}
