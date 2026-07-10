import { useEffect, useState } from 'react';
import Link from 'next/link';
import { supabase } from '../lib/supabase';

export default function TournamentsPage() {
  const [tournaments, setTournaments] = useState([]);
  const [selectedId, setSelectedId] = useState(null);
  const [leaderboard, setLeaderboard] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentUserId, setCurrentUserId] = useState(null);

  useEffect(() => { load(); }, []);
  useEffect(() => { if (selectedId) loadLeaderboard(selectedId); }, [selectedId]);

  async function load() {
    const { data: { session } } = await supabase.auth.getSession();
    setCurrentUserId(session?.user?.id);
    const { data } = await supabase.rpc('get_active_tournaments');
    setTournaments(data || []);
    if (data && data.length > 0) setSelectedId(data[0].id);
    setLoading(false);
  }

  async function loadLeaderboard(tournamentId) {
    const { data } = await supabase.rpc('get_tournament_leaderboard', { p_tournament_id: tournamentId, p_limit: 20 });
    setLeaderboard(data || []);
  }

  if (loading) return <div className="loading container">Se încarcă...</div>;

  const selected = tournaments.find(t => t.id === selectedId);

  return (
    <div className="container" style={{padding:'2rem 1.5rem', maxWidth:'800px'}}>
      <h1 style={{textAlign:'center', color:'#5b21b6', marginBottom:'0.5rem'}}>🏆 Turnee active</h1>
      <p style={{textAlign:'center', color:'#64748b', marginBottom:'2rem'}}>Competiții pe săptămâni cu premii pentru câștigători</p>

      {tournaments.length === 0 ? (
        <div style={{padding:'3rem', textAlign:'center', background:'white', borderRadius:'16px', color:'#64748b'}}>
          🎯 Nu există turnee active momentan. Revino în curând!
        </div>
      ) : (
        <>
          {/* Selector turnee */}
          <div style={{display:'flex', gap:'0.75rem', flexWrap:'wrap', marginBottom:'2rem'}}>
            {tournaments.map(t => (
              <button key={t.id} onClick={() => setSelectedId(t.id)} style={{
                flex: '1 1 200px', padding:'1rem 1.25rem', 
                background: selectedId === t.id ? 'linear-gradient(135deg, #8b5cf6, #6d28d9)' : 'white',
                color: selectedId === t.id ? 'white' : '#1e293b',
                border: selectedId === t.id ? 'none' : '2px solid #e2e8f0',
                borderRadius:'12px', cursor:'pointer', textAlign:'left'
              }}>
                <div style={{fontSize:'1.5rem'}}>{t.emoji}</div>
                <div style={{fontWeight:800, fontSize:'0.95rem', marginTop:'0.25rem'}}>{t.name}</div>
                <div style={{fontSize:'0.75rem', opacity:0.85, marginTop:'0.25rem'}}>{t.days_left} zile rămase • {t.participants_count} jucători</div>
              </button>
            ))}
          </div>

          {/* Detalii turneu selectat */}
          {selected && (
            <>
              <div style={{background:'linear-gradient(135deg, #ede9fe, #ddd6fe)', borderRadius:'16px', padding:'1.5rem', marginBottom:'1.5rem'}}>
                <div style={{fontSize:'0.85rem', color:'#5b21b6', fontWeight:700, textTransform:'uppercase', letterSpacing:'1px'}}>Detalii turneu</div>
                <h2 style={{color:'#1e293b', marginTop:'0.5rem'}}>{selected.emoji} {selected.name}</h2>
                <p style={{color:'#475569', marginTop:'0.5rem'}}>{selected.description}</p>
                <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(120px, 1fr))', gap:'1rem', marginTop:'1rem'}}>
                  <div style={{background:'white', padding:'0.75rem', borderRadius:'10px'}}>
                    <div style={{fontSize:'0.75rem', color:'#64748b', textTransform:'uppercase'}}>Capitol</div>
                    <div style={{fontWeight:700, color:'#1e293b'}}>{selected.chapter_emoji} {selected.chapter_name}</div>
                  </div>
                  <div style={{background:'white', padding:'0.75rem', borderRadius:'10px'}}>
                    <div style={{fontSize:'0.75rem', color:'#64748b', textTransform:'uppercase'}}>Rămân</div>
                    <div style={{fontWeight:700, color:'#dc2626'}}>{selected.days_left} zile</div>
                  </div>
                  <div style={{background:'white', padding:'0.75rem', borderRadius:'10px'}}>
                    <div style={{fontSize:'0.75rem', color:'#64748b', textTransform:'uppercase'}}>Premiu</div>
                    <div style={{fontWeight:700, color:'#f59e0b'}}>+{selected.reward_points} pct</div>
                  </div>
                </div>
                <Link href={`/play/${selected.chapter_id}`} style={{display:'block', textAlign:'center', padding:'1rem', marginTop:'1.5rem', background:'linear-gradient(135deg, #8b5cf6, #6d28d9)', color:'white', borderRadius:'12px', textDecoration:'none', fontWeight:700}}>
                  🚀 Joacă acum pentru locul 1!
                </Link>
              </div>

              {/* Leaderboard */}
              <h3 style={{color:'#1e293b', marginBottom:'1rem'}}>📊 Clasament LIVE</h3>
              {leaderboard.length === 0 ? (
                <div style={{padding:'2rem', textAlign:'center', background:'white', borderRadius:'12px', color:'#64748b'}}>
                  Nimeni nu a jucat încă. Fii primul!
                </div>
              ) : (
                <div style={{background:'white', borderRadius:'16px', overflow:'hidden', boxShadow:'0 4px 12px rgba(0,0,0,0.05)'}}>
                  {leaderboard.map(p => {
                    const isYou = p.user_id === currentUserId;
                    const medal = p.rank === 1 ? '🥇' : p.rank === 2 ? '🥈' : p.rank === 3 ? '🥉' : `#${p.rank}`;
                    const bg = isYou ? 'linear-gradient(135deg, #ede9fe, #ddd6fe)' : p.rank <= 3 ? 'linear-gradient(135deg, #fef3c7, #fde68a)' : 'white';
                    return (
                      <div key={p.rank} style={{display:'grid', gridTemplateColumns:'60px 40px 1fr auto auto', gap:'1rem', padding:'1rem 1.25rem', alignItems:'center', background: bg, borderBottom:'1px solid #e2e8f0'}}>
                        <div style={{fontSize: p.rank <= 3 ? '1.5rem' : '1rem', fontWeight:800, color:'#5b21b6'}}>{medal}</div>
                        <div style={{fontSize:'1.75rem'}}>{p.avatar_emoji}</div>
                        <div style={{fontWeight:700, color:'#1e293b'}}>{p.username} {isYou && <span style={{color:'#8b5cf6', fontSize:'0.85rem'}}>(TU)</span>}</div>
                        <div style={{fontSize:'0.85rem', color:'#64748b'}}>{p.best_correct} corecte • {p.attempts} încercări</div>
                        <div style={{fontWeight:900, color:'#5b21b6', fontSize:'1.2rem'}}>{p.best_score}</div>
                      </div>
                    );
                  })}
                </div>
              )}
            </>
          )}
        </>
      )}
    </div>
  );
}
