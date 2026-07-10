import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';

export default function Leaderboard() {
  const [tab, setTab] = useState('weekly');
  const [profiles, setProfiles] = useState([]);
  const [weekly, setWeekly] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentUserId, setCurrentUserId] = useState(null);
  const [weekStart, setWeekStart] = useState(null);

  useEffect(() => { load(); }, []);

  async function load() {
    const { data: { session } } = await supabase.auth.getSession();
    setCurrentUserId(session?.user?.id);

    const [globalRes, weeklyRes] = await Promise.all([
      supabase.from('profiles')
        .select('id, username, total_score, games_played')
        .order('total_score', { ascending: false })
        .limit(50),
      supabase.rpc('get_weekly_leaderboard', { p_limit: 20 })
    ]);

    setProfiles(globalRes.data || []);
    setWeekly(weeklyRes.data || []);

    // Calc start saptamana (luni)
    const now = new Date();
    const day = now.getDay();
    const diff = now.getDate() - day + (day === 0 ? -6 : 1);
    const monday = new Date(now.setDate(diff));
    setWeekStart(monday.toLocaleDateString('ro-RO', { day: 'numeric', month: 'long' }));

    setLoading(false);
  }

  if (loading) return <div className="loading container">Se încarcă...</div>;

  const rows = tab === 'weekly' ? weekly : profiles;
  const isEmpty = rows.length === 0;

  return (
    <div className="container" style={{padding:'2rem 1.5rem', maxWidth:'800px'}}>
      <h1 style={{textAlign:'center', marginBottom:'0.5rem', color:'#5b21b6'}}>🏆 Clasament</h1>
      <p style={{textAlign:'center', color:'#64748b', marginBottom:'2rem'}}>
        {tab === 'weekly' ? `Săptămâna curentă (de la ${weekStart || 'luni'})` : 'Top 50 jucători all-time'}
      </p>

      {/* Tab-uri */}
      <div style={{display:'flex', gap:'0.5rem', marginBottom:'2rem', background:'#f1f5f9', padding:'0.4rem', borderRadius:'12px'}}>
        <button onClick={() => setTab('weekly')} style={{
          flex:1, padding:'0.85rem', border:'none', borderRadius:'10px',
          background: tab === 'weekly' ? 'linear-gradient(135deg, #8b5cf6, #6d28d9)' : 'transparent',
          color: tab === 'weekly' ? 'white' : '#475569',
          fontWeight:700, cursor:'pointer', fontSize:'1rem'
        }}>🔥 Săptămânal</button>
        <button onClick={() => setTab('global')} style={{
          flex:1, padding:'0.85rem', border:'none', borderRadius:'10px',
          background: tab === 'global' ? 'linear-gradient(135deg, #8b5cf6, #6d28d9)' : 'transparent',
          color: tab === 'global' ? 'white' : '#475569',
          fontWeight:700, cursor:'pointer', fontSize:'1rem'
        }}>🌍 All-Time</button>
      </div>

      {isEmpty ? (
        <div style={{padding:'3rem', textAlign:'center', color:'#64748b', background:'white', borderRadius:'16px'}}>
          {tab === 'weekly' ? '🎯 Nimeni nu a jucat multiplayer săptămâna aceasta încă. Fii primul!' : '🎯 Niciun jucător încă. Fii primul!'}
        </div>
      ) : (
        <div style={{background:'white', borderRadius:'16px', overflow:'hidden', boxShadow:'0 4px 12px rgba(0,0,0,0.05)'}}>
          {rows.map((p, i) => {
            const rank = tab === 'weekly' ? p.rank : (i + 1);
            const isYou = tab === 'weekly' ? p.user_id === currentUserId : p.id === currentUserId;
            const name = tab === 'weekly' ? p.nickname : (p.username || 'Anonim');
            const points = tab === 'weekly' ? p.points : p.total_score;
            const games = tab === 'weekly' ? p.games_played : p.games_played;
            const medal = rank === 1 ? '🥇' : rank === 2 ? '🥈' : rank === 3 ? '🥉' : `#${rank}`;
            const bg = isYou 
              ? 'linear-gradient(135deg, #ede9fe, #ddd6fe)' 
              : rank <= 3 ? 'linear-gradient(135deg, #fef3c7, #fde68a)' 
              : (i % 2 === 0 ? '#f8fafc' : 'white');
            
            return (
              <div key={rank} style={{
                display:'grid', gridTemplateColumns:'80px 1fr auto auto', gap:'1rem', 
                padding:'1rem 1.25rem', alignItems:'center',
                background: bg, borderBottom:'1px solid #e2e8f0'
              }}>
                <div style={{fontSize: rank <= 3 ? '1.5rem' : '1.1rem', fontWeight:800, color:'#5b21b6'}}>
                  {medal}
                </div>
                <div style={{fontWeight:700, color:'#1e293b', fontSize:'1rem'}}>
                  {name} {isYou && <span style={{color:'#8b5cf6', fontSize:'0.85rem'}}>(TU)</span>}
                </div>
                <div style={{color:'#64748b', fontSize:'0.85rem', textAlign:'right'}}>
                  {games || 0} jocuri
                  {tab === 'weekly' && p.games_won > 0 && <div style={{color:'#f59e0b', fontWeight:700}}>🏆 {p.games_won}</div>}
                </div>
                <div style={{fontWeight:900, color:'#5b21b6', fontSize:'1.2rem', minWidth:'80px', textAlign:'right'}}>
                  {points}
                </div>
              </div>
            );
          })}
        </div>
      )}

      {tab === 'weekly' && (
        <div style={{marginTop:'1.5rem', padding:'1rem', background:'linear-gradient(135deg, #ede9fe, #ddd6fe)', borderRadius:'12px', textAlign:'center', color:'#5b21b6', fontSize:'0.9rem'}}>
          💡 Clasamentul se resetează luni. Joacă multiplayer pentru a urca!
        </div>
      )}
    </div>
  );
}
