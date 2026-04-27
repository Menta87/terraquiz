import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { supabase } from '../lib/supabase';

export default function Profile() {
  const router = useRouter();
  const [profile, setProfile] = useState(null);
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    load();
  }, []);

  async function load() {
    const { data: { session } } = await supabase.auth.getSession();
    if (!session) {
      router.push('/login');
      return;
    }

    const { data: prof } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', session.user.id)
      .single();
    setProfile({ ...prof, email: session.user.email });

    const { data: res } = await supabase
      .from('game_results')
      .select('*, chapters(name, emoji)')
      .eq('user_id', session.user.id)
      .order('played_at', { ascending: false })
      .limit(10);
    setResults(res || []);
    setLoading(false);
  }

  if (loading) return <div className="loading container">Se încarcă...</div>;

  return (
    <div className="container" style={{padding:'2rem 1.5rem', maxWidth:'800px'}}>
      <div style={{
        background:'linear-gradient(135deg, var(--primary), var(--accent))',
        color:'white',
        padding:'2rem',
        borderRadius:'12px',
        marginBottom:'2rem'
      }}>
        <div style={{fontSize:'4rem'}}>👤</div>
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
        </div>
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
    </div>
  );
}
