import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Layout from '../components/Layout';
import { supabase } from '../lib/supabase';

export default function PremiumPage() {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [isPremium, setIsPremium] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    async function checkUser() {
      const { data: { session } } = await supabase.auth.getSession();
      if (session) {
        setUser(session.user);
        const res = await fetch('/api/subscription-status?userId=' + session.user.id);
        const data = await res.json();
        setIsPremium(data.isPremium || false);
      }
    }
    checkUser();
  }, []);

  async function handleSubscribe(plan) {
    if (!user) {
      router.push('/login?redirect=/premium');
      return;
    }
    setLoading(true);
    setError('');
    try {
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ plan, userId: user.id, userEmail: user.email }),
      });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        setError(data.error || 'Eroare la procesarea abonamentului');
      }
    } catch (err) {
      setError('A apărut o eroare. Încearcă din nou.');
    }
    setLoading(false);
  }

  async function handleManageSubscription() {
    setLoading(true);
    try {
      const res = await fetch('/api/customer-portal', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId: user.id }),
      });
      const data = await res.json();
      if (data.url) window.location.href = data.url;
    } catch (err) {
      setError('Eroare. Încearcă din nou.');
    }
    setLoading(false);
  }

  return (
    <Layout>
      <div style={{maxWidth: '900px', margin: '0 auto', padding: '3rem 1.5rem'}}>
        <div style={{textAlign: 'center', marginBottom: '3rem'}}>
          <div style={{fontSize: '4rem', marginBottom: '1rem'}}>👑</div>
          <h1 style={{fontSize: '2.2rem', fontWeight: 900, color: '#1e293b', marginBottom: '1rem'}}>
            TerraQuiz Premium
          </h1>
          <p style={{fontSize: '1.1rem', color: '#64748b', lineHeight: 1.7, maxWidth: '600px', margin: '0 auto'}}>
            Acces complet la toate variantele BAC, exerciții interactive nelimitate și pregătire serioasă pentru examen.
          </p>
        </div>

        {isPremium ? (
          <div style={{background: 'linear-gradient(135deg, #10b981, #059669)', color: 'white', padding: '2rem', borderRadius: '16px', textAlign: 'center'}}>
            <div style={{fontSize: '3rem'}}>✅</div>
            <h2 style={{fontSize: '1.5rem', marginTop: '1rem'}}>Ești abonat Premium!</h2>
            <p style={{marginTop: '0.5rem', opacity: 0.9}}>Mulțumim pentru susținere 💙</p>
            <button onClick={handleManageSubscription} disabled={loading} style={{marginTop: '1.5rem', padding: '0.75rem 1.5rem', background: 'white', color: '#059669', border: 'none', borderRadius: '8px', fontWeight: 700, cursor: 'pointer'}}>
              {loading ? 'Se încarcă...' : 'Gestionează abonamentul'}
            </button>
          </div>
        ) : (
          <>
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginBottom: '2rem'}}>
              {/* Plan LUNAR */}
              <div style={{background: 'white', borderRadius: '20px', padding: '2rem', border: '2px solid #e2e8f0', textAlign: 'center'}}>
                <div style={{fontSize: '0.9rem', color: '#64748b', fontWeight: 600, textTransform: 'uppercase'}}>Lunar</div>
                <div style={{fontSize: '3rem', fontWeight: 900, color: '#1e293b', margin: '0.5rem 0'}}>9,90 <span style={{fontSize: '1.2rem', color: '#64748b'}}>RON</span></div>
                <div style={{fontSize: '0.9rem', color: '#64748b'}}>pe lună, se reînnoiește automat</div>
                <ul style={{listStyle: 'none', padding: 0, margin: '2rem 0', textAlign: 'left'}}>
                  <li style={{padding: '0.5rem 0', color: '#1e293b'}}>✅ Toate cele 22 variante BAC</li>
                  <li style={{padding: '0.5rem 0', color: '#1e293b'}}>✅ Multiplayer cu clase întregi</li>
                  <li style={{padding: '0.5rem 0', color: '#1e293b'}}>✅ Hărți + diagrame interactive</li>
                  <li style={{padding: '0.5rem 0', color: '#1e293b'}}>✅ Suport prioritar</li>
                  <li style={{padding: '0.5rem 0', color: '#1e293b'}}>✅ Anulare oricând</li>
                </ul>
                <button onClick={() => handleSubscribe('lunar')} disabled={loading} style={{width: '100%', padding: '1rem', background: 'linear-gradient(135deg, #0284c7, #1e40af)', color: 'white', border: 'none', borderRadius: '12px', fontSize: '1.05rem', fontWeight: 700, cursor: 'pointer'}}>
                  {loading ? 'Se încarcă...' : 'Abonează-te lunar'}
                </button>
              </div>

              {/* Plan ANUAL */}
              <div style={{background: 'white', borderRadius: '20px', padding: '2rem', border: '3px solid #f59e0b', textAlign: 'center', position: 'relative'}}>
                <div style={{position: 'absolute', top: '-12px', left: '50%', transform: 'translateX(-50%)', background: '#f59e0b', color: 'white', padding: '0.4rem 1rem', borderRadius: '12px', fontSize: '0.85rem', fontWeight: 700}}>
                  🏆 RECOMANDAT
                </div>
                <div style={{fontSize: '0.9rem', color: '#64748b', fontWeight: 600, textTransform: 'uppercase', marginTop: '0.5rem'}}>Anual</div>
                <div style={{fontSize: '3rem', fontWeight: 900, color: '#1e293b', margin: '0.5rem 0'}}>79 <span style={{fontSize: '1.2rem', color: '#64748b'}}>RON</span></div>
                <div style={{fontSize: '0.9rem', color: '#64748b'}}>pe an (~6,60 RON / lună)</div>
                <div style={{fontSize: '0.85rem', color: '#f59e0b', fontWeight: 700, marginTop: '0.25rem'}}>Economisești 40 RON</div>
                <ul style={{listStyle: 'none', padding: 0, margin: '2rem 0', textAlign: 'left'}}>
                  <li style={{padding: '0.5rem 0', color: '#1e293b'}}>✅ Toate beneficiile lunare</li>
                  <li style={{padding: '0.5rem 0', color: '#1e293b'}}>✅ Plată o singură dată</li>
                  <li style={{padding: '0.5rem 0', color: '#1e293b'}}>✅ Acoperă tot anul școlar</li>
                  <li style={{padding: '0.5rem 0', color: '#1e293b'}}>✅ Cele mai mari economii</li>
                  <li style={{padding: '0.5rem 0', color: '#1e293b'}}>✅ Suport prioritar</li>
                </ul>
                <button onClick={() => handleSubscribe('anual')} disabled={loading} style={{width: '100%', padding: '1rem', background: 'linear-gradient(135deg, #f59e0b, #d97706)', color: 'white', border: 'none', borderRadius: '12px', fontSize: '1.05rem', fontWeight: 700, cursor: 'pointer'}}>
                  {loading ? 'Se încarcă...' : 'Abonează-te anual'}
                </button>
              </div>
            </div>

            {error && (
              <div style={{padding: '1rem', background: '#fee2e2', color: '#991b1b', borderRadius: '8px', textAlign: 'center', marginBottom: '1rem'}}>
                {error}
              </div>
            )}

            {!user && (
              <div style={{padding: '1rem', background: '#fef3c7', borderRadius: '8px', textAlign: 'center', color: '#78350f'}}>
                💡 <Link href="/login?redirect=/premium" style={{color: '#78350f', textDecoration: 'underline', fontWeight: 700}}>Conectează-te</Link> pentru a te abona
              </div>
            )}

            <div style={{textAlign: 'center', marginTop: '2rem'}}>
              <Link href="/bac" style={{color: '#64748b', textDecoration: 'underline'}}>
                ← Înapoi la BAC (5 variante gratuite)
              </Link>
            </div>
          </>
        )}

        <div style={{marginTop: '3rem', padding: '1.5rem', background: '#f8fafc', borderRadius: '12px', color: '#475569', fontSize: '0.9rem'}}>
          <p style={{margin: '0 0 0.5rem 0'}}><strong>FAQ:</strong></p>
          <p style={{margin: '0.5rem 0'}}>• <strong>Pot anula oricând?</strong> Da, prin "Gestionează abonamentul"</p>
          <p style={{margin: '0.5rem 0'}}>• <strong>Cum se plătește?</strong> Prin Stripe - card sau Apple Pay/Google Pay</p>
          <p style={{margin: '0.5rem 0'}}>• <strong>Variantele gratuite?</strong> Variantele 1-5 (BAC 2020 Test 6-10) rămân gratuite</p>
        </div>
      </div>
    </Layout>
  );
}
