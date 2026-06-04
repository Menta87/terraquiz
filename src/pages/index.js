import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { supabase } from '../lib/supabase';

const CHAPTER_GRADIENTS = {
  1: 'linear-gradient(135deg, #667eea, #764ba2)',
  2: 'linear-gradient(135deg, #f093fb, #f5576c)',
  3: 'linear-gradient(135deg, #4facfe, #00f2fe)',
  4: 'linear-gradient(135deg, #fa709a, #fee140)',
  5: 'linear-gradient(135deg, #30cfd0, #330867)',
  6: 'linear-gradient(135deg, #a8edea, #fed6e3)',
  7: 'linear-gradient(135deg, #ff9a9e, #fecfef)',
  8: 'linear-gradient(135deg, #43e97b, #38f9d7)',
  9: 'linear-gradient(135deg, #fbc2eb, #a6c1ee)',
  10: 'linear-gradient(135deg, #fdcbf1, #e6dee9)',
  11: 'linear-gradient(135deg, #ffecd2, #fcb69f)',
  default: 'linear-gradient(135deg, #667eea, #764ba2)',
};

export default function Home() {
  const [chapters, setChapters] = useState([]);
  const [chapterCounts, setChapterCounts] = useState({});
  const [stats, setStats] = useState({ totalQuestions: 0, totalChapters: 0, totalPlayers: 0, totalDiplomas: 14 });
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    loadAll();
  }, []);

  async function loadAll() {
    const [chaptersRes, questionsRes, playersCount] = await Promise.all([
      supabase.from('chapters').select('*').order('order_num'),
      supabase.from('questions').select('chapter_id, level'),
      supabase.from('profiles').select('*', { count: 'exact', head: true }),
    ]);
    
    // Count per chapter + per level
    const counts = {};
    if (questionsRes.data) {
      questionsRes.data.forEach(q => {
        if (!counts[q.chapter_id]) counts[q.chapter_id] = { total: 0, Mediu: 0, Avansat: 0 };
        counts[q.chapter_id].total++;
        if (q.level === 'Mediu') counts[q.chapter_id].Mediu++;
        if (q.level === 'Avansat') counts[q.chapter_id].Avansat++;
      });
    }
    
    if (chaptersRes.data) setChapters(chaptersRes.data);
    setChapterCounts(counts);
    setStats({
      totalQuestions: questionsRes.data?.length || 0,
      totalChapters: chaptersRes.data?.length || 0,
      totalPlayers: playersCount.count || 0,
      totalDiplomas: 14,
    });
    setLoading(false);
  }

  async function startQuiz(chapterId) {
    const { data: { session } } = await supabase.auth.getSession();
    if (!session) {
      router.push(`/login?redirect=/play/${chapterId}`);
    } else {
      router.push(`/play/${chapterId}`);
    }
  }

  return (
    <>
      <section style={{
        background: 'linear-gradient(135deg, #1e3a8a 0%, #3730a3 50%, #5b21b6 100%)',
        color: 'white',
        padding: '5rem 0 4rem',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{position:'absolute',top:0,left:0,right:0,bottom:0,background:'radial-gradient(circle at 20% 30%, rgba(255,255,255,0.1) 0%, transparent 50%)',pointerEvents:'none'}}></div>
        <div className="container" style={{position:'relative'}}>
          <div style={{fontSize:'5rem', marginBottom:'0.5rem', filter:'drop-shadow(0 4px 8px rgba(0,0,0,0.3))'}}>🌍</div>
          <h1 style={{fontSize:'3.5rem', fontWeight:900, marginBottom:'1rem', letterSpacing:'-1px'}}>TerraQuiz</h1>
          <p style={{fontSize:'1.3rem', opacity:0.95, maxWidth:'700px', margin:'0 auto 3rem', lineHeight:1.6}}>
            Aplicatie educationala de geografie cu peste {stats.totalQuestions} de intrebari, harti interactive si diplome
          </p>
          
          <div style={{
            display:'grid',
            gridTemplateColumns:'repeat(auto-fit, minmax(150px, 1fr))',
            gap:'1.5rem',
            maxWidth:'800px',
            margin:'0 auto',
          }}>
            <StatCard num={stats.totalQuestions} label="Intrebari" icon="📝" />
            <StatCard num={stats.totalChapters} label="Capitole" icon="📚" />
            <StatCard num={stats.totalDiplomas} label="Diplome" icon="🏆" />
            <StatCard num={stats.totalPlayers} label="Jucatori" icon="👥" />
          </div>
        </div>
      </section>

         <section style={{
        background:'linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)',
        padding:'3rem 0',
      }}>
        <div className="container">
          <div style={{
            background:'rgba(255,255,255,0.15)',
            backdropFilter:'blur(10px)',
            border:'2px solid rgba(255,255,255,0.3)',
            borderRadius:'24px',
            padding:'2.5rem 2rem',
            textAlign:'center',
            color:'white',
            boxShadow:'0 20px 60px rgba(0,0,0,0.2)',
          }}>
            <div style={{fontSize:'4rem', marginBottom:'0.5rem'}}>🎮</div>
            <h2 style={{fontSize:'2.2rem', fontWeight:900, marginBottom:'0.75rem', letterSpacing:'-0.5px'}}>
              Joaca cu prietenii sau cu clasa!
            </h2>
            <p style={{fontSize:'1.15rem', opacity:0.95, maxWidth:'600px', margin:'0 auto 2rem', lineHeight:1.5}}>
              Mod multiplayer in stilul Kahoot. Profesorul creeaza camera, elevii intra cu un cod si toata lumea joaca live!
            </p>
            <a href="/multiplayer" style={{
              display:'inline-block',
              background:'white',
              color:'#7c3aed',
              padding:'1rem 2.5rem',
              borderRadius:'12px',
              fontWeight:800,
              fontSize:'1.15rem',
              textDecoration:'none',
              boxShadow:'0 8px 24px rgba(0,0,0,0.25)',
              transition:'transform 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-3px) scale(1.03)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0) scale(1)'}
            >
              🚀 Intra in modul Multiplayer
            </a>
          </div>
        </div>
      </section>

      <section style={{padding:'4rem 0', background:'linear-gradient(180deg, #f8fafc 0%, #ffffff 100%)'}}>
        <div className="container">
          <div style={{textAlign:'center', marginBottom:'3rem'}}>
            <h2 style={{fontSize:'2.5rem', fontWeight:800, color:'#1e293b', marginBottom:'0.5rem'}}>
              Alege un capitol
            </h2>

            <p style={{color:'#64748b', fontSize:'1.1rem'}}>
              Selecteaza tema preferata si incepe sa joci
            </p>
          </div>

          {loading ? (
            <div style={{textAlign:'center', padding:'3rem', color:'#64748b'}}>Se incarca...</div>
          ) : (
            <div style={{
              display:'grid',
              gridTemplateColumns:'repeat(auto-fill, minmax(280px, 1fr))',
              gap:'1.5rem',
            }}>
              {chapters.map(c => (
                <ChapterCard key={c.id} chapter={c} counts={chapterCounts[c.id]} onClick={() => startQuiz(c.id)} />
              ))}
            </div>
          )}
        </div>
      </section>

      <section style={{
        background:'linear-gradient(135deg, #fef3c7, #fde68a)',
        padding:'3rem 0',
        textAlign:'center',
      }}>
        <div className="container">
          <div style={{fontSize:'3rem', marginBottom:'1rem'}}>🏆</div>
          <h2 style={{fontSize:'2rem', fontWeight:800, color:'#78350f', marginBottom:'0.5rem'}}>
            Castiga diplome
          </h2>
          <p style={{color:'#92400e', fontSize:'1.1rem', maxWidth:'600px', margin:'0 auto 1.5rem'}}>
            Termina capitolele cu peste 80% corecte si acumuleaza puncte ca sa primesti diplome PDF descarcabile, perfecte pentru CV sau portofoliu scolar.
          </p>
          <a href="/diplome" style={{
            display:'inline-block',
            background:'#d97706',
            color:'white',
            padding:'0.85rem 2rem',
            borderRadius:'10px',
            fontWeight:700,
            fontSize:'1rem',
            textDecoration:'none',
            boxShadow:'0 4px 12px rgba(217,119,6,0.4)',
          }}>Vezi diplomele tale</a>
        </div>
      </section>
    </>
  );
}

function StatCard({ num, label, icon }) {
  return (
    <div style={{
      background:'rgba(255,255,255,0.15)',
      backdropFilter:'blur(10px)',
      padding:'1.5rem 1rem',
      borderRadius:'16px',
      border:'1px solid rgba(255,255,255,0.2)',
      transition:'transform 0.2s',
    }}>
      <div style={{fontSize:'2rem', marginBottom:'0.5rem'}}>{icon}</div>
      <div style={{fontSize:'2.2rem', fontWeight:800, lineHeight:1}}>{num}</div>
      <div style={{fontSize:'0.9rem', opacity:0.9, marginTop:'0.3rem'}}>{label}</div>
    </div>
  );
}

function ChapterCard({ chapter, counts, onClick }) {
  const gradient = CHAPTER_GRADIENTS[chapter.order_num] || CHAPTER_GRADIENTS.default;
  const total = counts?.total || 0;
  const mediu = counts?.Mediu || 0;
  const avansat = counts?.Avansat || 0;
  
  return (
    <div
      onClick={onClick}
      style={{
        background:'white',
        borderRadius:'16px',
        overflow:'hidden',
        cursor:'pointer',
        transition:'all 0.3s',
        boxShadow:'0 4px 12px rgba(0,0,0,0.05)',
        border:'1px solid #e2e8f0',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = 'translateY(-6px)';
        e.currentTarget.style.boxShadow = '0 16px 32px rgba(0,0,0,0.12)';
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.05)';
      }}
    >
      <div style={{
        background: gradient,
        padding:'2rem 1.5rem',
        textAlign:'center',
        color:'white',
        position: 'relative',
      }}>
        <div style={{fontSize:'3.5rem', filter:'drop-shadow(0 2px 4px rgba(0,0,0,0.2))'}}>{chapter.emoji}</div>
        {total > 0 && (
          <div style={{
            position: 'absolute',
            top: '12px',
            right: '12px',
            background: 'rgba(255,255,255,0.25)',
            backdropFilter: 'blur(10px)',
            padding: '0.35rem 0.75rem',
            borderRadius: '20px',
            fontSize: '0.85rem',
            fontWeight: 700,
            border: '1px solid rgba(255,255,255,0.3)',
          }}>
            📝 {total}
          </div>
        )}
      </div>
      <div style={{padding:'1.5rem'}}>
        <h3 style={{fontSize:'1.25rem', fontWeight:700, color:'#1e293b', marginBottom:'0.5rem'}}>
          {chapter.name}
        </h3>
        <p style={{color:'#64748b', fontSize:'0.95rem', marginBottom:'1rem', lineHeight:1.5, minHeight:'2.8em'}}>
          {chapter.description}
        </p>
        {total > 0 && (
          <div style={{
            display: 'flex',
            gap: '0.5rem',
            marginBottom: '1rem',
            fontSize: '0.8rem',
          }}>
            <span style={{
              background: '#dcfce7',
              color: '#166534',
              padding: '0.25rem 0.6rem',
              borderRadius: '6px',
              fontWeight: 600,
            }}>
              {mediu} Mediu
            </span>
            <span style={{
              background: '#fef3c7',
              color: '#854d0e',
              padding: '0.25rem 0.6rem',
              borderRadius: '6px',
              fontWeight: 600,
            }}>
              {avansat} Avansat
            </span>
          </div>
        )}
        <div style={{
          background:'#1e3a8a',
          color:'white',
          padding:'0.75rem',
          borderRadius:'10px',
          textAlign:'center',
          fontWeight:600,
          fontSize:'0.95rem',
        }}>
          ▶ Incepe
        </div>
      </div>
    </div>
  );
}
