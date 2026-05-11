import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { supabase } from '../lib/supabase';

export default function Layout({ children }) {
  const [user, setUser] = useState(null);
  const [isPremium, setIsPremium] = useState(false);
  const router = useRouter();

  useEffect(() => {
    supabase.auth.getSession().then(async ({ data: { session } }) => {
      setUser(session?.user ?? null);
      if (session?.user) {
        await checkPremium(session.user.id);
      }
    });
    const { data: listener } = supabase.auth.onAuthStateChange(async (_event, session) => {
      setUser(session?.user ?? null);
      if (session?.user) {
        await checkPremium(session.user.id);
      } else {
        setIsPremium(false);
      }
    });
    return () => listener.subscription.unsubscribe();
  }, []);

  async function checkPremium(userId) {
    try {
      const res = await fetch(`/api/subscription-status?userId=${userId}`);
      const data = await res.json();
      setIsPremium(data.isPremium);
    } catch (e) {
      setIsPremium(false);
    }
  }

  async function logout() {
    await supabase.auth.signOut();
    router.push('/');
  }

  return (
    <>
      <header className="navbar">
        <div className="container">
          <Link href="/" className="logo">
            🌍 TerraQuiz
          </Link>
          <nav>
                  <Link href="/bac" style={{background:'linear-gradient(135deg, #0284c7, #1e40af)', color:'white', padding:'0.4rem 0.9rem', borderRadius:'8px', fontWeight:700, marginRight:'0.25rem'}}>🎓 BAC</Link>

                       <Link href="/leaderboard">🏆 Clasament</Link>

            <Link href="/diplome">Diplome</Link>

            {!isPremium && (
              <Link href="/premium" style={{background:'linear-gradient(135deg, #fbbf24, #d97706)', color:'white', padding:'0.4rem 0.9rem', borderRadius:'8px', fontWeight:700, marginLeft:'0.25rem'}}>⭐ Premium</Link>
            )}

            {user ? (
              <>
                <Link href="/profile" style={{display:'inline-flex', alignItems:'center', gap:'0.4rem'}}>
                  Profil
                  {isPremium && (
                    <span style={{background:'linear-gradient(135deg, #fbbf24, #d97706)', color:'white', padding:'0.2rem 0.5rem', borderRadius:'6px', fontSize:'0.75rem', fontWeight:700}}>⭐ PREMIUM</span>
                  )}
                </Link>
                <button onClick={logout} className="btn btn-outline" style={{padding:'0.4rem 1rem', fontSize:'0.9rem'}}>Ieșire</button>
              </>
            ) : (
              <Link href="/login" className="btn btn-outline" style={{padding:'0.4rem 1rem', fontSize:'0.9rem'}}>
                Conectare
              </Link>
            )}
          </nav>
        </div>
      </header>
      <main>{children}</main>
      <footer className="footer">
        <div className="container">
          <p>© 2026 TerraQuiz · Aplicație educațională de geografie</p>
        </div>
      </footer>
    </>
  );
}
