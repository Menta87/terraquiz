import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { supabase } from '../lib/supabase';

export default function Layout({ children }) {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
    });
    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });
    return () => listener.subscription.unsubscribe();
  }, []);

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
                       <Link href="/leaderboard">Clasament</Link><Link href="/diplome">Diplome</Link><Link href="/premium" style={{background:'linear-gradient(135deg, #fbbf24, #d97706)', color:'white', padding:'0.4rem 0.9rem', borderRadius:'8px', fontWeight:700, marginLeft:'0.25rem'}}>⭐ Premium</Link>


            {user ? (
              <>
                <Link href="/profile">Profil</Link>
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
