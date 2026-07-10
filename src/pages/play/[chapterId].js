import { useEffect, useState } from 'react';
// Nota: limita zilnica de jocuri (FREE = 20, Premium = nelimitat)
import { useRouter } from 'next/router';
import Link from 'next/link';
import { supabase } from '../../lib/supabase';

const QUESTION_COUNT = 10;
const TIME_PER_QUESTION = 30;

const DIPLOMAS_PER_CHAPTER = {
  'Quiz Romania': { code: 'romania_master', name: 'Cunoscatorul Romaniei', emoji: 'RO' },
  'Quiz România': { code: 'romania_master', name: 'Cunoscatorul Romaniei', emoji: 'RO' },
  'Europa': { code: 'europe_explorer', name: 'Exploratorul Europei', emoji: 'EU' },
  'Asia': { code: 'asia_master', name: 'Maestru al Asiei', emoji: 'AS' },
  'Africa': { code: 'africa_conqueror', name: 'Cuceritorul Africii', emoji: 'AF' },
  'America de Nord': { code: 'north_america_pioneer', name: 'Pionier al Americii de Nord', emoji: 'NA' },
  'America de Sud': { code: 'south_america_adventurer', name: 'Aventurier in America de Sud', emoji: 'SA' },
  'Oceania': { code: 'oceania_navigator', name: 'Navigator in Oceania', emoji: 'OC' },
  'Antarctica': { code: 'antarctica_explorer', name: 'Explorator al Antarcticii', emoji: 'AN' },
  'Steaguri': { code: 'flag_hunter', name: 'Vanator de Steaguri', emoji: 'FL' },
  'Bacalaureat': { code: 'bac_master', name: 'Maestru BAC', emoji: 'BAC' },
};

const CUMULATIVE_DIPLOMAS = [
  { threshold: 100, code: 'beginner', name: 'Incepator', emoji: 'IN' },
  { threshold: 1000, code: 'enthusiast', name: 'Pasionat', emoji: 'PS' },
  { threshold: 5000, code: 'expert', name: 'Expert Geograf', emoji: 'EX' },
  { threshold: 10000, code: 'supreme_master', name: 'Maestru Suprem', emoji: 'MS' },
];

function FlagImage({ iso }) {
  return (
    <div style={{width:'100%',display:'flex',justifyContent:'center',alignItems:'center',padding:'1.5rem',background:'linear-gradient(135deg, #f8fafc, #e2e8f0)',borderRadius:'12px',marginBottom:'1.5rem',border:'2px solid #e2e8f0'}}>
      <img src={'https://flagcdn.com/w320/' + iso + '.png'} alt="Steag" style={{maxWidth:'280px',width:'100%',height:'auto',borderRadius:'6px',boxShadow:'0 4px 12px rgba(0,0,0,0.15)'}} />
    </div>
  );
}

function isPhysicalTopic(topic) {
  if (!topic) return false;
  const t = topic.toLowerCase();
  return t.includes('relief') || t.includes('hidrograf') || t.includes('clim') || t.includes('munt') || t.includes('rauri') || t.includes('lac') || t.includes('mar') || t.includes('ocean') || t.includes('vegetat') || t.includes('sol') || t.includes('record');
}

function HintMap({ lat, lng, radius, topic }) {
  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (!document.getElementById('leaflet-css')) {
      const link = document.createElement('link');
      link.id = 'leaflet-css';
      link.rel = 'stylesheet';
      link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
      document.head.appendChild(link);
    }
    if (!window.L) {
      const script = document.createElement('script');
      script.src = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js';
      script.onload = () => initMap();
      document.head.appendChild(script);
    } else { initMap(); }
    function initMap() {
      const container = document.getElementById('hint-map');
      if (!container || !window.L) return;
      if (container._leaflet_id) { container._leaflet_id = null; container.innerHTML = ''; }
      const physical = isPhysicalTopic(topic);
      const vagueRadius = radius * 2;
      const map = window.L.map('hint-map', {zoomControl: true, attributionControl: false, scrollWheelZoom: false}).setView([lat, lng], getZoomFromRadius(vagueRadius));
      const tileUrl = physical ? 'https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png' : 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
      const maxZoom = physical ? 17 : 18;
      window.L.tileLayer(tileUrl, {maxZoom: maxZoom, minZoom: 2}).addTo(map);
      const circleColor = physical ? '#059669' : '#3b82f6';
      window.L.circle([lat, lng], {color: circleColor, fillColor: circleColor, fillOpacity: 0.15, weight: 2, dashArray: '8, 4', radius: vagueRadius}).addTo(map);
    }
  }, [lat, lng, radius, topic]);
  const physical = isPhysicalTopic(topic);
  const labelText = physical ? 'Indiciu - harta fizica' : 'Indiciu - harta politica';
  const labelColor = physical ? '#059669' : '#3b82f6';
  return (
    <div style={{width:'100%',height:'320px',borderRadius:'12px',overflow:'hidden',border:'2px solid #e2e8f0',marginBottom:'1.5rem',position:'relative'}}>
      <div id="hint-map" style={{width:'100%',height:'100%'}}></div>
      <div style={{position:'absolute',top:8,left:8,background:'rgba(255,255,255,0.95)',padding:'4px 10px',borderRadius:'6px',fontSize:'0.8rem',fontWeight:600,color:labelColor,zIndex:1000,border:'1px solid '+labelColor}}>{labelText}</div>
    </div>
  );
}

function getZoomFromRadius(radius) {
  if (radius >= 4000000) return 2;
  if (radius >= 2000000) return 3;
  if (radius >= 1000000) return 4;
  if (radius >= 500000) return 5;
  if (radius >= 200000) return 6;
  return 7;
}

function DiplomaPopup({ diploma, onClose }) {
  return (
    <div style={{position:'fixed',inset:0,background:'rgba(0,0,0,0.7)',display:'flex',alignItems:'center',justifyContent:'center',zIndex:9999,padding:'1rem'}} onClick={onClose}>
      <div style={{background:'linear-gradient(135deg,#fef3c7,#fcd34d)',padding:'3rem 2rem',borderRadius:'20px',maxWidth:'500px',textAlign:'center',border:'4px solid #d97706',boxShadow:'0 20px 60px rgba(0,0,0,0.3)'}} onClick={e=>e.stopPropagation()}>
        <div style={{fontSize:'4rem',marginBottom:'1rem'}}>🏆</div>
        <h2 style={{color:'#78350f',marginBottom:'0.5rem',fontSize:'1.8rem'}}>Diploma noua!</h2>
        <div style={{fontSize:'1.5rem',fontWeight:700,color:'#92400e',margin:'1rem 0'}}>{diploma.name}</div>
        <p style={{color:'#78350f',marginBottom:'1.5rem'}}>Felicitari! Ai obtinut o noua diploma. O poti vedea si descarca din pagina ta de Diplome.</p>
        <div style={{display:'flex',gap:'1rem',justifyContent:'center'}}>
          <Link href="/diplome" className="btn btn-primary" style={{background:'#d97706',color:'white',padding:'0.75rem 1.5rem',borderRadius:'8px',fontWeight:600,textDecoration:'none'}}>Vezi diplomele</Link>
          <button onClick={onClose} className="btn" style={{background:'white',color:'#78350f',padding:'0.75rem 1.5rem',borderRadius:'8px',fontWeight:600,border:'2px solid #d97706'}}>Inchide</button>
        </div>
      </div>
    </div>
  );
}

function ChallengeBox({ challengeId, baseUrl }) {
  const [copied, setCopied] = useState(false);
  const link = `${baseUrl}/provocare/${challengeId}`;
  
  function copyLink() {
    navigator.clipboard.writeText(link);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }
  
  function shareWhatsApp() {
    const text = encodeURIComponent(`Te provoc la TerraQuiz! Vezi daca ma poti bate: ${link}`);
    window.open(`https://wa.me/?text=${text}`, '_blank');
  }
  
  function shareFacebook() {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(link)}`, '_blank');
  }
  
  return (
    <div style={{
      background: 'linear-gradient(135deg, #ddd6fe, #c4b5fd)',
      padding: '1.5rem',
      borderRadius: '12px',
      marginTop: '1.5rem',
      border: '2px solid #8b5cf6',
    }}>
      <div style={{textAlign:'center', marginBottom:'1rem'}}>
        <div style={{fontSize:'2.5rem'}}>🎯</div>
        <h3 style={{color:'#5b21b6', marginBottom:'0.5rem'}}>Provoaca un coleg!</h3>
        <p style={{color:'#6d28d9', fontSize:'0.95rem'}}>Trimite linkul si vezi cine te bate la scor</p>
      </div>
      <div style={{
        background:'white',
        padding:'0.75rem',
        borderRadius:'8px',
        marginBottom:'1rem',
        wordBreak:'break-all',
        fontSize:'0.85rem',
        color:'#5b21b6',
        border:'1px solid #8b5cf6',
      }}>{link}</div>
      <div style={{display:'flex', gap:'0.5rem', flexWrap:'wrap'}}>
        <button onClick={copyLink} style={{
          flex:1, minWidth:'120px',
          background: copied ? '#16a34a' : '#8b5cf6',
          color:'white', padding:'0.75rem', borderRadius:'8px',
          border:'none', fontWeight:600, cursor:'pointer',
          transition:'all 0.2s'
        }}>{copied ? '✓ Copiat!' : 'Copiaza link'}</button>
        <button onClick={shareWhatsApp} style={{
          background:'#25d366', color:'white', padding:'0.75rem 1.25rem',
          borderRadius:'8px', border:'none', fontWeight:600, cursor:'pointer'
        }}>WhatsApp</button>
        <button onClick={shareFacebook} style={{
          background:'#1877f2', color:'white', padding:'0.75rem 1.25rem',
          borderRadius:'8px', border:'none', fontWeight:600, cursor:'pointer'
        }}>Facebook</button>
      </div>
    </div>
  );
}

export default function PlayQuiz() {
  const router = useRouter();
  const { chapterId } = router.query;
  const [chapter, setChapter] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [fillAnswer, setFillAnswer] = useState('');
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [timeLeft, setTimeLeft] = useState(TIME_PER_QUESTION);
  const [loading, setLoading] = useState(true);
  const [finished, setFinished] = useState(false);
  const [streakInfo, setStreakInfo] = useState(null);
  const [startTime, setStartTime] = useState(Date.now());
  const [dailyLimitReached, setDailyLimitReached] = useState(null);
  const [dailyLimitInfo, setDailyLimitInfo] = useState(null);
  const [newDiploma, setNewDiploma] = useState(null);
  const [challengeId, setChallengeId] = useState(null);
  const [creatingChallenge, setCreatingChallenge] = useState(false);

  useEffect(() => { if (!chapterId) return; loadQuiz(); }, [chapterId]);

  async function loadQuiz() {
    const { data: chap } = await supabase.from('chapters').select('*').eq('id', chapterId).single();
    setChapter(chap);
    
    // VERIFICARE LIMITA ZILNICA (doar pentru quiz-urile non-Bacalaureat)
    // Bacalaureat (chapter_id=13) are propriul sistem Premium (Var 6+)
    const isBacalaureat = parseInt(chapterId) === 13;
    if (!isBacalaureat) {
      const { data: { session } } = await supabase.auth.getSession();
      if (session) {
        const { data: limitData } = await supabase.rpc('count_daily_games', { p_user_id: session.user.id });
        if (limitData && limitData.is_limited) {
          setDailyLimitReached(limitData);
          setLoading(false);
          return;
        }
        if (limitData) setDailyLimitInfo(limitData);
      }
    }
    
    const { data: qs } = await supabase.from('questions').select('*').eq('chapter_id', chapterId);
    if (qs && qs.length > 0) {
      const shuffled = [...qs].sort(() => Math.random() - 0.5).slice(0, QUESTION_COUNT);
      setQuestions(shuffled);
    }
    setLoading(false);
    setStartTime(Date.now());
  }

  useEffect(() => {
    if (loading || showResult || finished) return;
    if (timeLeft <= 0) { handleAnswer(null); return; }
    const t = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
    return () => clearTimeout(t);
  }, [timeLeft, loading, showResult, finished]);

  function handleAnswer(answer) {
    if (showResult) return;
    const q = questions[currentIdx];
    let isC = false;
    if (q.type === 'multiple_choice') {
      isC = answer === q.correct_answer;
    } else {
      const userAns = (answer || '').trim().toLowerCase();
      let accepted = q.accepted_answers;
      if (typeof accepted === 'string') {
        accepted = accepted.replace(/[{}"]/g, '').split(',').map(s => s.trim());
      }
      if (!accepted) accepted = [q.correct_answer];
      isC = accepted.some(a => a.toLowerCase().trim() === userAns);
    }
    setIsCorrect(isC);
    setSelectedOption(answer);
    setShowResult(true);
    if (isC) {
      const points = (q.level === 'Avansat' ? 20 : 10) + Math.floor(timeLeft / 3);
      setScore(s => s + points);
      setCorrect(c => c + 1);
    }
  }

  async function nextQuestion() {
    if (currentIdx + 1 >= questions.length) {
      await saveResults();
      setFinished(true);
    } else {
      setCurrentIdx(i => i + 1);
      setSelectedOption(null);
      setFillAnswer('');
      setShowResult(false);
      setTimeLeft(TIME_PER_QUESTION);
    }
  }

  async function checkAndAwardDiplomas(session, totalScore, finalCorrect, total) {
    // Pas 1: Verific diploma de capitol (logica veche - rapida)
    const pct = Math.round((finalCorrect / total) * 100);
    let awarded = null;
    if (chapter && pct >= 80) {
      const diplomaInfo = DIPLOMAS_PER_CHAPTER[chapter.name];
      if (diplomaInfo) {
        const { data: existing } = await supabase.from('diplomas').select('id').eq('user_id', session.user.id).eq('diploma_code', diplomaInfo.code).maybeSingle();
        if (!existing) {
          const { data } = await supabase.from('diplomas').insert({
            user_id: session.user.id, diploma_code: diplomaInfo.code, diploma_name: diplomaInfo.name,
            diploma_emoji: diplomaInfo.emoji, diploma_type: 'chapter', earned_score: pct
          }).select().single();
          if (data) awarded = data;
        }
      }
    }
    
    // Pas 2: Cheam RPC pentru toate diplomele (cumulative, progres, speciale, BAC)
    try {
      const { data: rpcResult } = await supabase.rpc('check_and_award_diplomas', {
        p_user_id: session.user.id
      });
      // Daca RPC a acordat diplome si nu avem una "primara" la capitol, arata prima din RPC
      if (rpcResult && rpcResult.awarded && rpcResult.awarded.length > 0 && !awarded) {
        const firstNew = rpcResult.awarded[0];
        awarded = {
          diploma_code: firstNew.code,
          diploma_name: firstNew.name,
          diploma_emoji: firstNew.emoji,
          earned_score: totalScore,
          earned_at: new Date().toISOString()
        };
      }
    } catch (e) {
      console.error('RPC diplome eroare:', e);
    }
    
    return awarded;
  }

  async function saveResults() {
    const { data: { session } } = await supabase.auth.getSession();
    if (!session) return;
    const duration = Math.floor((Date.now() - startTime) / 1000);
    await supabase.from('game_results').insert({
      user_id: session.user.id, chapter_id: parseInt(chapterId), score,
      questions_correct: correct, questions_total: questions.length, duration_seconds: duration
    });
    const { data: profile } = await supabase.from('profiles').select('total_score, games_played').eq('id', session.user.id).single();
    let newTotalScore = score;
    if (profile) {
      newTotalScore = (profile.total_score || 0) + score;
      await supabase.from('profiles').update({
        total_score: newTotalScore, games_played: (profile.games_played || 0) + 1
      }).eq('id', session.user.id);
    }
    const awarded = await checkAndAwardDiplomas(session, newTotalScore, correct, questions.length);
    if (awarded) setNewDiploma(awarded);
    // Update streak (zile consecutive de joc)
    try {
      const { data: streakData } = await supabase.rpc('update_user_streak', { p_user_id: session.user.id });
      if (streakData && streakData.is_new_record && streakData.current_streak >= 3) {
        setStreakInfo(streakData);
      }
    } catch (e) { console.error('Streak error:', e); }
  }

  async function createChallenge() {
    setCreatingChallenge(true);
    const { data: { session } } = await supabase.auth.getSession();
    if (!session) { setCreatingChallenge(false); return; }
    
    const { data: profile } = await supabase.from('profiles').select('username').eq('id', session.user.id).single();
    const challengerName = profile?.username || 'Anonim';
    
    const id = Math.random().toString(36).substring(2, 11);
    const questionIds = questions.map(q => q.id);
    
    const { error } = await supabase.from('challenges').insert({
      id, challenger_id: session.user.id, challenger_name: challengerName,
      challenger_score: score, challenger_correct: correct, challenger_total: questions.length,
      chapter_id: parseInt(chapterId), chapter_name: chapter?.name, chapter_emoji: chapter?.emoji,
      question_ids: questionIds
    });
    
    if (!error) setChallengeId(id);
    setCreatingChallenge(false);
  }

  // ECRAN LIMITA ZILNICA - apare pentru FREE users care au depasit 20 jocuri/zi
  if (dailyLimitReached) {
    return (
      <div style={{minHeight:'80vh', display:'flex', alignItems:'center', justifyContent:'center', padding:'2rem 1.5rem', background:'linear-gradient(135deg, #fef3c7, #fde68a)'}}>
        <div style={{maxWidth:'500px', width:'100%', background:'white', borderRadius:'20px', padding:'2.5rem', textAlign:'center', boxShadow:'0 10px 40px rgba(0,0,0,0.15)'}}>
          <div style={{fontSize:'5rem'}}>⏰</div>
          <h1 style={{color:'#1e293b', marginTop:'1rem', fontSize:'1.8rem'}}>Limita zilnică atinsă</h1>
          <p style={{color:'#475569', fontSize:'1.05rem', marginTop:'1rem', lineHeight:1.6}}>
            Ai jucat <strong>{dailyLimitReached.games_today} din {dailyLimitReached.daily_limit}</strong> quiz-uri permise astăzi pentru utilizatorii gratuiți.
          </p>
          <div style={{background:'linear-gradient(135deg, #8b5cf6, #6d28d9)', color:'white', borderRadius:'16px', padding:'1.5rem', marginTop:'1.5rem', boxShadow:'0 8px 24px rgba(139, 92, 246, 0.4)'}}>
            <div style={{fontSize:'2.5rem'}}>👑</div>
            <h2 style={{margin:'0.5rem 0', fontSize:'1.4rem'}}>Treci la Premium</h2>
            <p style={{fontSize:'0.95rem', opacity:0.95, marginBottom:'1.5rem'}}>
              ✅ Jocuri NELIMITATE<br/>
              ✅ Toate cele 50 variante BAC<br/>
              ✅ Doar 9.90 RON/lună sau 79 RON/an
            </p>
            <Link href="/premium" style={{display:'inline-block', background:'white', color:'#6d28d9', padding:'0.85rem 2rem', borderRadius:'10px', fontWeight:800, fontSize:'1.05rem', textDecoration:'none'}}>
              👑 Vezi Premium
            </Link>
          </div>
          <p style={{color:'#64748b', fontSize:'0.9rem', marginTop:'1.5rem'}}>
            🌙 Sau revino mâine - limita se resetează la miezul nopții!
          </p>
          <div style={{marginTop:'1.5rem', display:'flex', gap:'0.75rem', justifyContent:'center'}}>
            <Link href="/" style={{padding:'0.75rem 1.25rem', background:'#f1f5f9', color:'#475569', borderRadius:'10px', textDecoration:'none', fontWeight:600}}>← Acasă</Link>
            <Link href="/multiplayer" style={{padding:'0.75rem 1.25rem', background:'linear-gradient(135deg, #10b981, #059669)', color:'white', borderRadius:'10px', textDecoration:'none', fontWeight:700}}>🎮 Joacă Multiplayer</Link>
          </div>
        </div>
      </div>
    );
  }

  if (loading) return <div className="loading container">Se incarca intrebarile...</div>;
  if (!questions.length) {
    return (
      <div className="container" style={{padding:'4rem 0', textAlign:'center'}}>
        <h2>Nu s-au gasit intrebari pentru acest capitol.</h2>
        <Link href="/" className="btn btn-primary" style={{marginTop:'1rem'}}>Inapoi</Link>
      </div>
    );
  }

  if (finished) {
    const pct = Math.round((correct / questions.length) * 100);
    const baseUrl = typeof window !== 'undefined' ? window.location.origin : '';
    return (
      <>
        {newDiploma && <DiplomaPopup diploma={newDiploma} onClose={() => setNewDiploma(null)} />}
        {streakInfo && (
          <div style={{position:'fixed',top:'1rem',left:'50%',transform:'translateX(-50%)',zIndex:1000,background:'linear-gradient(135deg, #f97316, #dc2626)',color:'white',padding:'1rem 1.5rem',borderRadius:'16px',boxShadow:'0 10px 40px rgba(220,38,38,0.4)',minWidth:'280px',textAlign:'center',cursor:'pointer',animation:'slideDown 0.5s'}} onClick={() => setStreakInfo(null)}>
            <div style={{fontSize:'2.5rem'}}>🔥</div>
            <div style={{fontWeight:900,fontSize:'1.3rem',marginTop:'0.25rem'}}>Streak {streakInfo.current_streak} zile!</div>
            <div style={{fontSize:'0.9rem',opacity:0.95,marginTop:'0.25rem'}}>{streakInfo.is_new_record ? '🏆 Record personal!' : 'Continuă zi de zi pentru bonus!'}</div>
            <div style={{fontSize:'0.75rem',opacity:0.8,marginTop:'0.5rem'}}>Apasă pentru a închide</div>
          </div>
        )}
        <div className="container">
          <div className="results">
            <div style={{fontSize:'4rem'}}>{pct >= 80 ? 'Excelent' : pct >= 60 ? 'Bine' : pct >= 40 ? 'Ok' : 'Mai studiaza'}</div>
            <div className="score">{score}</div>
            <div className="score-label">puncte castigate</div>
            <div className="stats">
              <div className="stat"><div className="v">{correct}/{questions.length}</div><div className="l">Corecte</div></div>
              <div className="stat"><div className="v">{pct}%</div><div className="l">Acuratete</div></div>
              <div className="stat"><div className="v">{chapter?.emoji}</div><div className="l">{chapter?.name}</div></div>
            </div>
            <div className="actions">
              <button onClick={() => router.reload()} className="btn btn-primary">Mai joc o data</button>
              <Link href="/" className="btn btn-outline" style={{borderColor:'var(--primary-light)', color:'var(--primary-light)'}}>Capitole</Link>
              <Link href="/diplome" className="btn btn-success">Diplomele mele</Link>
            </div>
            
            {!challengeId ? (
              <button onClick={createChallenge} disabled={creatingChallenge} style={{
                marginTop:'1.5rem', width:'100%',
                background:'linear-gradient(135deg, #8b5cf6, #6d28d9)',
                color:'white', padding:'1rem', borderRadius:'12px',
                border:'none', fontWeight:700, fontSize:'1.1rem',
                cursor: creatingChallenge ? 'wait' : 'pointer',
                boxShadow:'0 4px 12px rgba(139, 92, 246, 0.4)',
              }}>
                {creatingChallenge ? 'Se creeaza...' : '🎯 Provoaca un coleg'}
              </button>
            ) : (
              <ChallengeBox challengeId={challengeId} baseUrl={baseUrl} />
            )}
          </div>
        </div>
      </>
    );
  }

  const q = questions[currentIdx];
  const progress = ((currentIdx + 1) / questions.length) * 100;
  const hasMap = q.map_lat !== null && q.map_lat !== undefined && q.map_lng !== null && q.map_lng !== undefined;
  const hasFlag = q.image_description && q.image_description.startsWith('FLAG_IMAGE:');
  const flagIso = hasFlag ? q.image_description.replace('FLAG_IMAGE:', '') : null;

  return (
    <div className="quiz-container">
      <div className="quiz-header">
        <div style={{fontWeight:600}}>{chapter?.emoji} {chapter?.name}</div>
        <div className="quiz-progress"><div className="quiz-progress-bar" style={{width: progress + '%'}}></div></div>
        <div className="quiz-timer">{timeLeft}s</div>
        <div className="quiz-score">{score} pct</div>
      </div>
      <div className="question-card">
        <div className="question-meta">
          <span className="badge badge-topic">{q.topic}</span>
          <span className={'badge badge-' + q.level.toLowerCase()}>{q.level}</span>
          <span style={{marginLeft:'auto', color:'var(--text-light)', fontSize:'0.9rem'}}>Intrebarea {currentIdx + 1} / {questions.length}</span>
        </div>
        <div className="question-text">{q.question_text}</div>
        {hasFlag ? <FlagImage iso={flagIso} /> : hasMap ? <HintMap key={'map-' + currentIdx} lat={parseFloat(q.map_lat)} lng={parseFloat(q.map_lng)} radius={parseFloat(q.map_radius) || 500000} topic={q.topic} /> : q.image_description && !q.image_description.startsWith('FLAG_IMAGE:') ? <div className="question-image">Indiciu vizual: {q.image_description}</div> : null}
        {q.type === 'multiple_choice' ? (
          <div className="options">
            {['option_a', 'option_b', 'option_c', 'option_d'].map((key, i) => {
              const opt = q[key];
              if (!opt) return null;
              const letter = ['A', 'B', 'C', 'D'][i];
              let cls = 'option-btn';
              if (showResult) {
                if (opt === q.correct_answer) cls += ' correct';
                else if (opt === selectedOption) cls += ' incorrect';
              }
              return <button key={key} className={cls} disabled={showResult} onClick={() => handleAnswer(opt)}><strong>{letter})</strong> {opt}</button>;
            })}
          </div>
        ) : (
          <div>
            <input type="text" className="fill-input" placeholder="Scrie raspunsul aici..." value={fillAnswer} onChange={e => setFillAnswer(e.target.value)} disabled={showResult} onKeyDown={e => e.key === 'Enter' && !showResult && handleAnswer(fillAnswer)} autoFocus />
            {!showResult && <button onClick={() => handleAnswer(fillAnswer)} className="btn btn-primary next-btn">Verifica raspunsul</button>}
            {showResult && <div style={{marginTop:'1rem', padding:'1rem', borderRadius:'8px', background: isCorrect ? '#d1fae5' : '#fee2e2', color: isCorrect ? '#065f46' : '#991b1b'}}>{isCorrect ? 'Corect!' : 'Raspunsul corect: ' + q.correct_answer}</div>}
          </div>
        )}
        {showResult && <button onClick={nextQuestion} className="btn btn-primary next-btn">{currentIdx + 1 >= questions.length ? 'Vezi rezultatul' : 'Urmatoarea intrebare'}</button>}
      </div>
    </div>
  );
}
