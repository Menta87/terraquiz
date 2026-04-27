import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';

export default function Leaderboard() {
  const [profiles, setProfiles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentUserId, setCurrentUserId] = useState(null);

  useEffect(() => {
    load();
  }, []);

  async function load() {
    const { data: { session } } = await supabase.auth.getSession();
    setCurrentUserId(session?.user?.id);

    const { data } = await supabase
      .from('profiles')
      .select('id, username, total_score, games_played')
      .order('total_score', { ascending: false })
      .limit(50);
    
    setProfiles(data || []);
    setLoading(false);
  }

  if (loading) return <div className="loading container">Se încarcă...</div>;

  return (
    <div className="container" style={{padding:'2rem 1.5rem'}}>
      <h1 style={{textAlign:'center', marginBottom:'0.5rem', color:'var(--primary-dark)'}}>🏆 Clasament Global</h1>
      <p style={{textAlign:'center', color:'var(--text-light)', marginBottom:'2rem'}}>
        Top 50 jucători cu cele mai mari scoruri
      </p>

      <div className="leaderboard-table">
        <div className="leaderboard-row header">
          <div>Loc</div>
          <div>Jucător</div>
          <div className="games">Jocuri</div>
          <div>Punctaj</div>
        </div>
        {profiles.length === 0 ? (
          <div style={{padding:'3rem', textAlign:'center', color:'var(--text-light)'}}>
            Niciun jucător încă. Fii primul!
          </div>
        ) : (
          profiles.map((p, i) => {
            const rank = i + 1;
            const isYou = p.id === currentUserId;
            const rankCls = rank === 1 ? 'rank-1' : rank === 2 ? 'rank-2' : rank === 3 ? 'rank-3' : '';
            const medal = rank === 1 ? '🥇' : rank === 2 ? '🥈' : rank === 3 ? '🥉' : `#${rank}`;
            return (
              <div key={p.id} className={`leaderboard-row ${isYou ? 'you' : ''}`}>
                <div className={rankCls}><strong>{medal}</strong></div>
                <div>
                  <strong>{p.username || 'Anonim'}</strong>
                  {isYou && <span style={{marginLeft:'0.5rem', fontSize:'0.8rem', color:'var(--warning)'}}>(tu)</span>}
                </div>
                <div className="games" style={{color:'var(--text-light)'}}>{p.games_played || 0}</div>
                <div style={{fontWeight:700, color:'var(--primary)'}}>{p.total_score || 0}</div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
