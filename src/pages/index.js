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
  const [stats, setStats] = useState({ totalQuestions: 0, totalChapters: 0, totalPlayers: 0, totalDiplomas: 26, totalSchoolQuestions: 0, totalSchoolChapters: 0, totalBacVariants: 50 });
  const [dailyChallenge, setDailyChallenge] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    loadAll();
  }, []);

  async function loadAll() {
    const [chaptersRes, countsRes, totalCount, playersCount, schoolQuestionsCount, schoolChaptersCount] = await Promise.all([
      supabase.from('chapters').select('*').order('order_num'),
      supabase.rpc('get_chapter_counts'),
      supabase.from('questions').select('*', { count: 'exact', head: true }),
      supabase.from('profiles').select('*', { count: 'exact', head: true }),
      supabase.from('school_questions').select('*', { count: 'exact', head: true }),
      supabase.from('school_chapters').select('*', { count: 'exact', head: true }),
    ]);
    
    const counts = {};
    if (countsRes.data) {
      countsRes.data.forEach(row => {
        if (!counts[row.chapter_id]) counts[row.chapter_id] = { total: 0, Mediu: 0, Avansat: 0 };
        counts[row.chapter_id].total += Number(row.count);
        if (row.level === 'Mediu') counts[row.chapter_id].Mediu = Number(row.count);
        if (row.level === 'Avansat') counts[row.chapter_id].Avansat = Number(row.count);
      });
    }
    
    if (chaptersRes.data) setChapters(chaptersRes.data);
    setChapterCounts(counts);
    // Load challenge zilnic (doar user autentificat)
    const { data: { session } } = await supabase.auth.getSession();
    if (session) {
      try {
        const { data: chData } = await supabase.rpc('get_or_create_daily_challenge', { p_user_id: session.user.id });
        if (chData) setDailyChallenge(chData);
      } catch (e) { console.error('Challenge error:', e); }
    }
    setStats({
      totalQuestions: (totalCount.count || 0) + (schoolQuestionsCount.count || 0),
      totalChapters: chaptersRes.data?.length || 0,
      totalPlayers: playersCount.count || 0,
      totalDiplomas: 26,
      totalSchoolQuestions: schoolQuestionsCount.count || 0,
      totalSchoolChapters: schoolChaptersCount.count || 0,
      totalBacVariants: 50,
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
            Aplicatie educationala de geografie cu peste {stats.totalQuestions} de intrebari, 50 variante BAC, programa scolara V-XII, multiplayer si diplome
          </p>
          
          <div style={{
            display:'grid',
            gridTemplateColumns:'repeat(auto-fit, minmax(150px, 1fr))',
            gap:'1.5rem',
            maxWidth:'800px',
            margin:'0 auto',
          }}>
            <StatCard num={stats.totalQuestions} label="Intrebari" icon="📝" />
            <StatCard num={stats.totalBacVariants} label="Variante BAC" icon="🎓" />
            <StatCard num={8} label="Clase scoala" icon="🏫" />
            <StatCard num={stats.totalDiplomas} label="Diplome" icon="🏆" />
            <StatCard num={stats.totalPlayers} label="Jucatori" icon="👥" />
            <StatCard num={stats.totalSchoolChapters + stats.totalChapters} label="Capitole" icon="📚" />
          </div>
        </div>
      </section>

      {dailyChallenge && (
        <section style={{background:'white', padding:'2rem 1rem', borderTop:'3px solid #f97316'}}>
          <div className="container" style={{maxWidth:'600px'}}>
            <div style={{
              background: dailyChallenge.completed 
                ? 'linear-gradient(135deg, #22c55e, #16a34a)'
                : 'linear-gradient(135deg, #fef3c7, #fde68a)',
              padding:'1.5rem',
              borderRadius:'20px',
              boxShadow:'0 8px 24px rgba(249,115,22,0.15)',
              border: dailyChallenge.completed ? '2px solid #16a34a' : '2px solid #f59e0b'
            }}>
              <div style={{display:'flex', alignItems:'center', gap:'1rem'}}>
                <div style={{fontSize:'3rem'}}>{dailyChallenge.emoji}</div>
                <div style={{flex:1}}>
                  <div style={{fontSize:'0.85rem', color: dailyChallenge.completed ? 'white' : '#92400e', fontWeight:700, textTransform:'uppercase', letterSpacing:'1px'}}>
                    {dailyChallenge.completed ? '✓ Challenge completat!' : '🎯 Challenge-ul de azi'}
                  </div>
                  <div style={{fontSize:'1.15rem', fontWeight:800, color: dailyChallenge.completed ? 'white' : '#78350f', marginTop:'0.25rem'}}>
                    {dailyChallenge.name}
                  </div>
                  <div style={{marginTop:'0.75rem'}}>
                    <div style={{background:'rgba(255,255,255,0.4)', height:'10px', borderRadius:'5px', overflow:'hidden'}}>
                      <div style={{background: dailyChallenge.completed ? 'white' : '#f97316', height:'100%', width: Math.min(100, (dailyChallenge.progress / dailyChallenge.target) * 100) + '%', transition:'width 0.5s'}}></div>
                    </div>
                    <div style={{display:'flex', justifyContent:'space-between', marginTop:'0.5rem', fontSize:'0.85rem', fontWeight:700, color: dailyChallenge.completed ? 'white' : '#92400e'}}>
                      <span>{dailyChallenge.progress}/{dailyChallenge.target}</span>
                      <span>+{dailyChallenge.reward} puncte</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
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

      <section style={{
        background:'linear-gradient(135deg, #f59e0b 0%, #d97706 50%, #b45309 100%)',
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
            <div style={{fontSize:'4rem', marginBottom:'0.5rem'}}>🏫</div>
            <h2 style={{fontSize:'2.2rem', fontWeight:900, marginBottom:'0.75rem', letterSpacing:'-0.5px'}}>
              Programa scolara V-XII
            </h2>
            <p style={{fontSize:'1.15rem', opacity:0.95, maxWidth:'700px', margin:'0 auto 2rem', lineHeight:1.5}}>
              {stats.totalSchoolQuestions} intrebari Premium pe programa oficiala (OM 3393/2017), pentru toate cele 8 clase. {stats.totalSchoolChapters} capitole, cu explicatii educative la fiecare intrebare.
            </p>
            <div style={{display:'flex',gap:'1rem',justifyContent:'center',flexWrap:'wrap'}}>
              <a href="/scoala" style={{
                display:'inline-block',
                background:'white',
                color:'#b45309',
                padding:'1rem 2rem',
                borderRadius:'12px',
                fontWeight:800,
                fontSize:'1.05rem',
                textDecoration:'none',
                boxShadow:'0 8px 24px rgba(0,0,0,0.25)',
              }}>
                🏫 Vezi clasele V-XII
              </a>
              <a href="/premium" style={{
                display:'inline-block',
                background:'linear-gradient(135deg, #8b5cf6, #6d28d9)',
                color:'white',
                padding:'1rem 2rem',
                borderRadius:'12px',
                fontWeight:800,
                fontSize:'1.05rem',
                textDecoration:'none',
                boxShadow:'0 8px 24px rgba(0,0,0,0.25)',
              }}>
                👑 Devino Premium
              </a>
            </div>
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
