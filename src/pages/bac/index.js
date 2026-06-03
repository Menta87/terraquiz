import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Layout from '../../components/Layout';
import { supabase } from '../../lib/supabase';

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
    isPremium: true,
  },
  {
    id: 'varianta-7',
    nume: 'Varianta 7',
    durata: '~45 min',
    nrExercitii: 30,
    nivel: 'BAC complet',
    culoare: '#06b6d4',
    href: '/bac/varianta/varianta-7',
    disponibil: true,
    isPremium: true,
  },
  {
    id: 'varianta-8',
    nume: 'Varianta 8',
    durata: '~45 min',
    nrExercitii: 30,
    nivel: 'BAC complet',
    culoare: '#14b8a6',
    href: '/bac/varianta/varianta-8',
    disponibil: true,
    isPremium: true,
  },
  {
    id: 'varianta-9',
    nume: 'Varianta 9',
    durata: '~45 min',
    nrExercitii: 30,
    nivel: 'BAC complet',
    culoare: '#a855f7',
    href: '/bac/varianta/varianta-9',
    disponibil: true,
    isPremium: true,
  },
   {
    id: 'varianta-10',
    nume: 'Varianta 10',
    durata: '~45 min',
    nrExercitii: 30,
    nivel: 'BAC complet',
    culoare: '#f97316',
    href: '/bac/varianta/varianta-10',
    disponibil: true,
    isPremium: true,
  },
  {
    id: 'varianta-11',
    nume: 'Varianta 11',
    durata: '~45 min',
    nrExercitii: 30,
    nivel: 'BAC complet',
    culoare: '#22c55e',
    href: '/bac/varianta/varianta-11',
    disponibil: true,
    isPremium: true,
  },
  {
    id: 'varianta-12',
    nume: 'Varianta 12',
    durata: '~45 min',
    nrExercitii: 30,
    nivel: 'BAC complet',
    culoare: '#0ea5e9',
    href: '/bac/varianta/varianta-12',
    disponibil: true,
    isPremium: true,
  },
  {
    id: 'varianta-13',
    nume: 'Varianta 13',
    durata: '~45 min',
    nrExercitii: 30,
    nivel: 'BAC complet',
    culoare: '#d946ef',
    href: '/bac/varianta/varianta-13',
    disponibil: true,
    isPremium: true,
  },
  {
    id: 'varianta-14',
    nume: 'Varianta 14',
    durata: '~45 min',
    nrExercitii: 30,
    nivel: 'BAC complet',
    culoare: '#dc2626',
    href: '/bac/varianta/varianta-14',
    disponibil: true,
    isPremium: true,
  },
  {
    id: 'varianta-15',
    nume: 'Varianta 15',
    durata: '~45 min',
    nrExercitii: 30,
    nivel: 'BAC complet',
    culoare: '#7c3aed',
    href: '/bac/varianta/varianta-15',
    disponibil: true,
    isPremium: true,
  },
   {
    id: 'varianta-16',
    nume: 'Varianta 16',
    durata: '~45 min',
    nrExercitii: 30,
    nivel: 'BAC complet',
    culoare: '#dc2626',
    href: '/bac/varianta/varianta-16',
    disponibil: true,
    isPremium: true,
  },
  {
    id: 'varianta-17',
    nume: 'Varianta 17',
    durata: '~45 min',
    nrExercitii: 30,
    nivel: 'BAC complet',
    culoare: '#0891b2',
    href: '/bac/varianta/varianta-17',
    disponibil: true,
    isPremium: true,
  },
    {
    id: 'varianta-18',
    nume: 'Varianta 18',
    durata: '~45 min',
    nrExercitii: 30,
    nivel: 'BAC complet',
    culoare: '#16a34a',
    href: '/bac/varianta/varianta-18',
    disponibil: true,
    isPremium: true,
  },
  {
    id: 'varianta-19',
    nume: 'Varianta 19',
    durata: '~45 min',
    nrExercitii: 30,
    nivel: 'BAC complet',
    culoare: '#9333ea',
    href: '/bac/varianta/varianta-19',
    disponibil: true,
    isPremium: true,
  },
  {
    id: 'varianta-20',
    nume: 'Varianta 20',
    durata: '~45 min',
    nrExercitii: 30,
    nivel: 'BAC complet',
    culoare: '#0ea5e9',
    href: '/bac/varianta/varianta-20',
    disponibil: true,
    isPremium: true,
  },
  {
    id: 'varianta-21',
    nume: 'Varianta 21',
    durata: '~45 min',
    nrExercitii: 30,
    nivel: 'BAC complet',
    culoare: '#e11d48',
    href: '/bac/varianta/varianta-21',
    disponibil: true,
    isPremium: true,
  },
  {
    id: 'varianta-22',
    nume: 'Varianta 22',
    durata: '~45 min',
    nrExercitii: 30,
    nivel: 'BAC complet',
    culoare: '#0d9488',
    href: '/bac/varianta/varianta-22',
    disponibil: true,
    isPremium: true,
  },
  {
    id: 'varianta-23',
    nume: 'Varianta 23',
    durata: '~45 min',
    nrExercitii: 30,
    nivel: 'BAC complet',
    culoare: '#7c3aed',
    href: '/bac/varianta/varianta-23',
    disponibil: true,
    isPremium: true,
  },
  {
    id: 'varianta-24',
    nume: 'Varianta 24',
    durata: '~45 min',
    nrExercitii: 30,
    nivel: 'BAC complet',
    culoare: '#db2777',
    href: '/bac/varianta/varianta-24',
    disponibil: true,
    isPremium: true,
  },
  {
    id: 'varianta-25',
    nume: 'Varianta 25',
    durata: '~45 min',
    nrExercitii: 30,
    nivel: 'BAC complet',
    culoare: '#0f766e',
    href: '/bac/varianta/varianta-25',
    disponibil: true,
    isPremium: true,
  },
  {
    id: 'varianta-26',
    nume: 'Varianta 26',
    durata: '~45 min',
    nrExercitii: 30,
    nivel: 'BAC complet',
    culoare: '#a855f7',
    href: '/bac/varianta/varianta-26',
    disponibil: true,
    isPremium: true,
  },
  {
    id: 'varianta-27',
    nume: 'Varianta 27',
    durata: '~45 min',
    nrExercitii: 30,
    nivel: 'BAC complet',
    culoare: '#2563eb',
    href: '/bac/varianta/varianta-27',
    disponibil: true,
    isPremium: true,
  },
  {
    id: 'varianta-28',
    nume: 'Varianta 28',
    durata: '~45 min',
    nrExercitii: 30,
    nivel: 'BAC complet',
    culoare: '#ea580c',
    href: '/bac/varianta/varianta-28',
    disponibil: true,
    isPremium: true,
  },
  {
    id: 'varianta-29',
    nume: 'Varianta 29',
    durata: '~45 min',
    nrExercitii: 30,
    nivel: 'BAC complet',
    culoare: '#0891b2',
    href: '/bac/varianta/varianta-29',
    disponibil: true,
    isPremium: true,
  },
  {
    id: 'varianta-30',
    nume: 'Varianta 30',
    durata: '~45 min',
    nrExercitii: 30,
    nivel: 'BAC complet',
    culoare: '#84cc16',
    href: '/bac/varianta/varianta-30',
    disponibil: true,
    isPremium: true,
  },
  {
    id: 'varianta-31',
    nume: 'Varianta 31',
    durata: '~45 min',
    nrExercitii: 30,
    nivel: 'BAC complet',
    culoare: '#dc2626',
    href: '/bac/varianta/varianta-31',
    disponibil: true,
    isPremium: true,
  },
  {
    id: 'varianta-32',
    nume: 'Varianta 32',
    durata: '~45 min',
    nrExercitii: 30,
    nivel: 'BAC complet',
    culoare: '#7c3aed',
    href: '/bac/varianta/varianta-32',
    disponibil: true,
    isPremium: true,
  },
  {
    id: 'varianta-33',
    nume: 'Varianta 33',
    durata: '~45 min',
    nrExercitii: 30,
    nivel: 'BAC complet',
    culoare: '#0d9488',
    href: '/bac/varianta/varianta-33',
    disponibil: true,
    isPremium: true,
  },
  {
    id: 'varianta-34',
    nume: 'Varianta 34',
    durata: '~45 min',
    nrExercitii: 30,
    nivel: 'BAC complet',
    culoare: '#9333ea',
    href: '/bac/varianta/varianta-34',
    disponibil: true,
    isPremium: true,
  },
  {
    id: 'varianta-35',
    nume: 'Varianta 35',
    durata: '~45 min',
    nrExercitii: 30,
    nivel: 'BAC complet',
    culoare: '#0ea5e9',
    href: '/bac/varianta/varianta-35',
    disponibil: true,
    isPremium: true,
  },
  {
    id: 'varianta-36',
    nume: 'Varianta 36',
    durata: '~45 min',
    nrExercitii: 30,
    nivel: 'BAC complet',
    culoare: '#c026d3',
    href: '/bac/varianta/varianta-36',
    disponibil: true,
    isPremium: true,
  },
  {
    id: 'varianta-37',
    nume: 'Varianta 37',
    durata: '~45 min',
    nrExercitii: 30,
    nivel: 'BAC complet',
    culoare: '#16a34a',
    href: '/bac/varianta/varianta-37',
    disponibil: true,
    isPremium: true,
  },
  {
    id: 'varianta-38',
    nume: 'Varianta 38',
    durata: '~45 min',
    nrExercitii: 30,
    nivel: 'BAC complet',
    culoare: '#f97316',
    href: '/bac/varianta/varianta-38',
    disponibil: true,
    isPremium: true,
  },
  {
    id: 'varianta-39',
    nume: 'Varianta 39',
    durata: '~45 min',
    nrExercitii: 30,
    nivel: 'BAC complet',
    culoare: '#be185d',
    href: '/bac/varianta/varianta-39',
    disponibil: true,
    isPremium: true,
  },
  {
    id: 'varianta-40',
    nume: 'Varianta 40',
    durata: '~45 min',
    nrExercitii: 30,
    nivel: 'BAC complet',
    culoare: '#facc15',
    href: '/bac/varianta/varianta-40',
    disponibil: true,
    isPremium: true,
  },
  {
    id: 'varianta-41',
    nume: 'Varianta 41',
    durata: '~45 min',
    nrExercitii: 30,
    nivel: 'BAC complet',
    culoare: '#06b6d4',
    href: '/bac/varianta/varianta-41',
    disponibil: true,
    isPremium: true,
  },
  {
    id: 'varianta-42',
    nume: 'Varianta 42',
    durata: '~45 min',
    nrExercitii: 30,
    nivel: 'BAC complet',
    culoare: '#65a30d',
    href: '/bac/varianta/varianta-42',
    disponibil: true,
    isPremium: true,
  },
  {
    id: 'varianta-43',
    nume: 'Varianta 43',
    durata: '~45 min',
    nrExercitii: 30,
    nivel: 'BAC complet',
    culoare: '#a3a3a3',
    href: '/bac/varianta/varianta-43',
    disponibil: true,
    isPremium: true,
  },
  {
    id: 'varianta-44',
    nume: 'Varianta 44',
    durata: '~45 min',
    nrExercitii: 30,
    nivel: 'BAC complet',
    culoare: '#d97706',
    href: '/bac/varianta/varianta-44',
    disponibil: true,
    isPremium: true,
  },
  {
    id: 'varianta-45',
    nume: 'Varianta 45',
    durata: '~45 min',
    nrExercitii: 30,
    nivel: 'BAC complet',
    culoare: '#7e22ce',
    href: '/bac/varianta/varianta-45',
    disponibil: true,
    isPremium: true,
  },
  {
    id: 'varianta-46',
    nume: 'Varianta 46',
    durata: '~45 min',
    nrExercitii: 30,
    nivel: 'BAC complet',
    culoare: '#e11d48',
    href: '/bac/varianta/varianta-46',
    disponibil: true,
    isPremium: true,
  },
  {
    id: 'varianta-47',
    nume: 'Varianta 47',
    durata: '~45 min',
    nrExercitii: 30,
    nivel: 'BAC complet',
    culoare: '#0369a1',
    href: '/bac/varianta/varianta-47',
    disponibil: true,
    isPremium: true,
  },
       {
    id: 'varianta-48',
    nume: 'Varianta 48',
    durata: '~45 min',
    nrExercitii: 30,
    nivel: 'BAC complet',
    culoare: '#15803d',
    href: '/bac/varianta/varianta-48',
    disponibil: true,
    isPremium: true,
  },
];



export default function BacIndex() {
  const router = useRouter();
  const [isPremium, setIsPremium] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  useEffect(() => {
    async function check() {
      const { data: { session } } = await supabase.auth.getSession();
      if (session) {
        setIsLoggedIn(true);
        try {
          const res = await fetch('/api/subscription-status?userId=' + session.user.id);
          const data = await res.json();
          setIsPremium(data.isPremium || false);
        } catch (e) {}
      }
    }
    check();
  }, []);
  
  function handleVariantClick(e, v) {
    if (v.isPremium && !isPremium) {
      e.preventDefault();
      router.push('/premium');
    }
  }
  
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
                  display: 'flex', gap: '0.5rem',
                }}>
                  {v.isPremium && (
                    <div style={{
                      background: 'linear-gradient(135deg, #f59e0b, #d97706)', 
                      color: 'white',
                      padding: '0.25rem 0.6rem', borderRadius: '12px',
                      fontSize: '0.7rem', fontWeight: 800,
                    }}>
                      👑 PREMIUM
                    </div>
                  )}
                  <div style={{
                    background: v.culoare, color: 'white',
                    padding: '0.25rem 0.75rem', borderRadius: '12px',
                    fontSize: '0.75rem', fontWeight: 700,
                  }}>
                    {v.nivel}
                  </div>
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
                              <Link 
                  href={v.isPremium && !isPremium ? '/premium' : v.href}
                  onClick={(e) => handleVariantClick(e, v)}
                  style={{
                    display: 'block', textAlign: 'center',
                    padding: '0.7rem 1.2rem',
                    background: v.isPremium && !isPremium ? '#94a3b8' : v.culoare, 
                    color: 'white',
                    borderRadius: '8px', textDecoration: 'none',
                    fontWeight: 700, fontSize: '0.95rem',
                  }}>
                  {v.isPremium && !isPremium ? '🔒 Deblochează cu Premium' : '🚀 Începe varianta'}
                </Link>

              </div>
            );
          })}
        </div>
      </section>
    </Layout>
  );
}
