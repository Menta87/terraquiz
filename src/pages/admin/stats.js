import { requireAdmin } from '../../lib/adminAuth';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { supabase } from '../../lib/supabase';

export default function AdminStats() {
  const [loading, setLoading] = useState(true);
  const [authorized, setAuthorized] = useState(false);
  const [stats, setStats] = useState(null);
  const [refreshing, setRefreshing] = useState(false);
  const router = useRouter();

  useEffect(() => { checkAuth(); }, []);

  async function checkAuth() {
    const { data: { session } } = await supabase.auth.getSession();
    if (!session) { router.push('/login'); return; }
    if (session.user.email === 'robert_menta@yahoo.com') {
      setAuthorized(true);
      await loadStats();
    }
    setLoading(false);
  }

  async function loadStats() {
    setRefreshing(true);
    try {
      const { data, error } = await supabase.rpc('get_admin_stats');
      if (error) { alert('Eroare: ' + error.message); return; }
      setStats(data);
    } catch (e) { alert('Eroare: ' + e.message); }
    setRefreshing(false);
  }

  if (loading) return <div style={{padding:'2rem',textAlign:'center'}}>Se încarcă...</div>;

  if (!authorized) {
    return (
      <div style={{padding:'2rem',textAlign:'center',maxWidth:'500px',margin:'4rem auto'}}>
        <div style={{fontSize:'4rem',marginBottom:'1rem'}}>🚫</div>
        <h1>Acces interzis</h1>
        <p style={{color:'#64748b'}}>Această pagină este doar pentru administrator.</p>
        <a href="/" style={{color:'#1e3a8a'}}>← Înapoi acasă</a>
      </div>
    );
  }

  if (!stats) return <div style={{padding:'2rem',textAlign:'center'}}>Se încarcă statistici...</div>;

  // Format duration: 65s → "1m 5s"
  const formatDuration = (s) => {
    const min = Math.floor(s / 60);
    const sec = s % 60;
    return min > 0 ? `${min}m ${sec}s` : `${sec}s`;
  };

  const formatNumber = (n) => n.toLocaleString('ro-RO');
  const formatRON = (n) => n.toFixed(2).replace('.', ',') + ' RON';

  // Calculează min/max pentru grafic
  const growthData = stats.user_growth || [];
  const minGrowth = Math.min(...growthData.map(d => d.total_users));
  const maxGrowth = Math.max(...growthData.map(d => d.total_users));
  const range = Math.max(1, maxGrowth - minGrowth);

  return (
    <div style={{maxWidth:'1200px',margin:'0 auto',padding:'2rem 1rem'}}>
      <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:'2rem'}}>
        <div>
          <h1 style={{color:'#1e293b',marginBottom:'0.25rem'}}>📊 Statistici TerraQuiz</h1>
          <p style={{color:'#64748b',fontSize:'0.9rem'}}>Actualizat: {new Date(stats.generated_at).toLocaleString('ro-RO')}</p>
        </div>
        <button onClick={loadStats} disabled={refreshing}
          style={{background:'#1e3a8a',color:'white',border:'none',padding:'0.6rem 1.2rem',borderRadius:'8px',fontWeight:700,cursor:'pointer'}}>
          {refreshing ? '⏳ Se încarcă...' : '🔄 Refresh'}
        </button>
      </div>

      {/* Card-uri principale */}
      <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit, minmax(220px, 1fr))',gap:'1rem',marginBottom:'2rem'}}>
        <StatCard icon="👥" label="Total utilizatori" value={formatNumber(stats.users_total)} color="#3b82f6" />
        <StatCard icon="💎" label="Abonați Premium" value={formatNumber(stats.premium_active)} color="#8b5cf6" />
        <StatCard icon="💰" label="Venit lunar" value={formatRON(stats.revenue_monthly)} color="#10b981" />
        <StatCard icon="🎮" label="Jocuri totale" value={formatNumber(stats.games_total)} color="#f59e0b" />
      </div>

      {/* Activitate */}
      <Section title="📈 Activitate utilizatori">
        <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:'1rem'}}>
          <ActivityCard label="Azi" value={stats.users_today} subtext={`${stats.games_today} jocuri`} color="#16a34a" />
          <ActivityCard label="Săptămâna asta" value={stats.users_week} subtext={`${stats.games_week} jocuri`} color="#d97706" />
          <ActivityCard label="Luna asta" value={stats.users_month} subtext={`din ${stats.users_total} total`} color="#7c3aed" />
        </div>
      </Section>

      {/* Venit */}
      <Section title="💰 Venituri Premium">
        <div style={{display:'grid',gridTemplateColumns:'repeat(2,1fr)',gap:'1rem'}}>
          <div style={{background:'linear-gradient(135deg, #10b981, #059669)',color:'white',padding:'1.5rem',borderRadius:'12px'}}>
            <div style={{fontSize:'0.85rem',opacity:0.9}}>Venit lunar estimat</div>
            <div style={{fontSize:'2rem',fontWeight:800,marginTop:'0.5rem'}}>{formatRON(stats.revenue_monthly)}</div>
          </div>
          <div style={{background:'linear-gradient(135deg, #1e3a8a, #5b21b6)',color:'white',padding:'1.5rem',borderRadius:'12px'}}>
            <div style={{fontSize:'0.85rem',opacity:0.9}}>Venit anualizat</div>
            <div style={{fontSize:'2rem',fontWeight:800,marginTop:'0.5rem'}}>{formatRON(stats.revenue_annual)}</div>
          </div>
        </div>
        <div style={{marginTop:'1rem',padding:'1rem',background:'#f1f5f9',borderRadius:'8px',fontSize:'0.9rem',color:'#475569'}}>
          ⏱️ Durată medie joc: <strong>{formatDuration(stats.avg_duration_seconds)}</strong> · 📊 Conversie Premium: <strong>{((stats.premium_active / stats.users_total) * 100).toFixed(1)}%</strong>
        </div>
      </Section>

      {/* Grafic evoluție */}
      <Section title="📈 Evoluție utilizatori (ultimele 30 zile)">
        <div style={{background:'#f8fafc',padding:'1rem',borderRadius:'12px'}}>
          <svg viewBox="0 0 700 200" style={{width:'100%',height:'auto'}}>
            {/* Grid lines */}
            {[0,25,50,75,100].map(p => (
              <line key={p} x1="40" y1={20 + (160 * p / 100)} x2="690" y2={20 + (160 * p / 100)} stroke="#e2e8f0" strokeWidth="1" />
            ))}
            {/* Labels Y */}
            <text x="35" y="25" fontSize="10" fill="#64748b" textAnchor="end">{maxGrowth}</text>
            <text x="35" y="185" fontSize="10" fill="#64748b" textAnchor="end">{minGrowth}</text>
            {/* Linia grafic */}
            <polyline
              points={growthData.map((d, i) => {
                const x = 40 + (i * 650 / Math.max(1, growthData.length - 1));
                const y = 180 - ((d.total_users - minGrowth) / range) * 160;
                return `${x},${y}`;
              }).join(' ')}
              fill="none"
              stroke="#1e3a8a"
              strokeWidth="2"
            />
            {/* Puncte */}
            {growthData.map((d, i) => {
              const x = 40 + (i * 650 / Math.max(1, growthData.length - 1));
              const y = 180 - ((d.total_users - minGrowth) / range) * 160;
              return <circle key={i} cx={x} cy={y} r="3" fill="#1e3a8a" />;
            })}
            {/* Labels X - primul, mijloc, ultimul */}
            {[0, Math.floor(growthData.length/2), growthData.length-1].map(i => {
              if (!growthData[i]) return null;
              const x = 40 + (i * 650 / Math.max(1, growthData.length - 1));
              return <text key={i} x={x} y="198" fontSize="10" fill="#64748b" textAnchor="middle">{growthData[i].day_label}</text>;
            })}
          </svg>
          <div style={{display:'flex',justifyContent:'space-between',marginTop:'0.5rem',fontSize:'0.85rem',color:'#64748b'}}>
            <span>📈 Start: <strong style={{color:'#1e293b'}}>{growthData[0]?.total_users || 0}</strong></span>
            <span>📈 Acum: <strong style={{color:'#16a34a'}}>{growthData[growthData.length-1]?.total_users || 0}</strong> (+{((growthData[growthData.length-1]?.total_users - growthData[0]?.total_users) || 0)} noi)</span>
          </div>
        </div>
      </Section>

      {/* Top capitole */}
      <Section title="🏆 Top capitole jucate">
        <div style={{display:'flex',flexDirection:'column',gap:'0.5rem'}}>
          {(stats.top_chapters || []).map((ch, i) => {
            const accuracy = ch.avg_accuracy || 0;
            const accuracyColor = accuracy >= 85 ? '#16a34a' : accuracy >= 70 ? '#d97706' : '#dc2626';
            const maxGames = stats.top_chapters[0]?.games_count || 1;
            const barWidth = (ch.games_count / maxGames) * 100;
            return (
              <div key={i} style={{background:'white',border:'1px solid #e2e8f0',padding:'1rem',borderRadius:'10px'}}>
                <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:'0.5rem'}}>
                  <div style={{display:'flex',alignItems:'center',gap:'0.5rem'}}>
                    <span style={{fontSize:'1.3rem'}}>{ch.chapter_emoji}</span>
                    <strong style={{color:'#1e293b'}}>{ch.chapter_name}</strong>
                  </div>
                  <div style={{display:'flex',gap:'1rem',fontSize:'0.9rem'}}>
                    <span style={{color:'#475569'}}>🎮 {formatNumber(ch.games_count)}</span>
                    <span style={{color: accuracyColor, fontWeight:700}}>{accuracy}% acuratețe</span>
                  </div>
                </div>
                <div style={{background:'#f1f5f9',borderRadius:'4px',overflow:'hidden',height:'6px'}}>
                  <div style={{background:'linear-gradient(90deg, #3b82f6, #8b5cf6)',height:'100%',width:`${barWidth}%`,transition:'width 0.3s'}}></div>
                </div>
              </div>
            );
          })}
        </div>
      </Section>
    </div>
  );
}

function StatCard({ icon, label, value, color }) {
  return (
    <div style={{background:'white',border:'1px solid #e2e8f0',padding:'1.25rem',borderRadius:'12px'}}>
      <div style={{fontSize:'2rem'}}>{icon}</div>
      <div style={{fontSize:'1.8rem',fontWeight:800,color:color,marginTop:'0.5rem'}}>{value}</div>
      <div style={{color:'#64748b',fontSize:'0.85rem',marginTop:'0.25rem'}}>{label}</div>
    </div>
  );
}

function ActivityCard({ label, value, subtext, color }) {
  return (
    <div style={{background:'white',border:'1px solid #e2e8f0',padding:'1.25rem',borderRadius:'12px',textAlign:'center'}}>
      <div style={{color:'#64748b',fontSize:'0.85rem'}}>{label}</div>
      <div style={{fontSize:'2.5rem',fontWeight:800,color:color,margin:'0.5rem 0'}}>{value}</div>
      <div style={{color:'#94a3b8',fontSize:'0.8rem'}}>{subtext}</div>
    </div>
  );
}

function Section({ title, children }) {
  return (
    <div style={{marginBottom:'2rem'}}>
      <h2 style={{color:'#1e293b',fontSize:'1.2rem',marginBottom:'1rem'}}>{title}</h2>
      {children}
    </div>
  );
}


export const getServerSideProps = requireAdmin();
