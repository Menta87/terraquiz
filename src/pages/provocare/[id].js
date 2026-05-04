import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { supabase } from '../../lib/supabase';

const TIME_PER_QUESTION = 30;

function FlagImage({ iso }) {
  return (
    <div style={{width:'100%',display:'flex',justifyContent:'center',alignItems:'center',padding:'1.5rem',background:'linear-gradient(135deg, #f8fafc, #e2e8f0)',borderRadius:'12px',marginBottom:'1.5rem',border:'2px solid #e2e8f0'}}>
      <img src={'https://flagcdn.com/w320/' + iso + '.png'} alt="Steag" style={{maxWidth:'280px',width:'100%',height:'auto',borderRadius:'6px',boxShadow:'0 4px 12px rgba(0,0,0,0.15)'}} />
    </div>
  );
}

export default function ChallengePage() {
  const router = useRouter();
  const { id } = router.query;
  const [challenge, setChallenge] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [stage, setStage] = useState('intro'); // intro | playing | finished
  const [currentIdx, setCurrentIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [fillAnswer, setFillAnswer] = useState('');
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [timeLeft, setTimeLeft] = useState(TIME_PER_QUESTION);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => { if (!id) return; loadChallenge(); }, [id]);

  async function loadChallenge() {
    const { data: { session } } = await supabase.auth.getSession();
    if (!session) {
      router.push(`/login?redirect=/provocare/${id}`);
      return;
    }
    setUser(session.user);
    
    const { data: ch } = await supabase.from('challenges').select('*').eq('id', id).single();
    if (!ch) { setLoading(false); return; }
    setChallenge(ch);
    
    const { data: qs } = await supabase.from('questions').select('*').in('id', ch.question_ids);
    if (qs) {
      // Reorder to match challenge
      const ordered = ch.question_ids.map(qid => qs.find(q => q.id === qid)).filter(Boolean);
      setQuestions(ordered);
    }
    
    // Increment views
    await supabase.from('challenges').update({ views: (ch.views || 0) + 1 }).eq('id', id);
    
    setLoading(false);
  }

  useEffect(() => {
    if (stage !== 'playing' || showResult) return;
    if (timeLeft <= 0) { handleAnswer(null); return; }
    const t = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
    return () => clearTimeout(t);
  }, [timeLeft, stage, showResult]);

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
      await saveResponse();
      setStage('finished');
    } else {
      setCurrentIdx(i => i + 1);
      setSelectedOption(null);
      setFillAnswer('');
      setShowResult(false);
      setTimeLeft(TIME_PER_QUESTION);
    }
  }

  async function saveResponse() {
    const { data: profile } = await supabase.from('profiles').select('username').eq('id', user.id).single();
    await supabase.from('challenge_responses').insert({
      challenge_id: id, responder_id: user.id, responder_name: profile?.username || 'Anonim',
      responder_score: score, responder_correct: correct,
    });
    // Save in own profile
    const { data: prof } = await supabase.from('profiles').select('total_score, games_played').eq('id', user.id).single();
    if (prof) {
      await supabase.from('profiles').update({
        total_score: (prof.total_score || 0) + score,
        games_played: (prof.games_played || 0) + 1
      }).eq('id', user.id);
    }
  }

  if (loading) return <div className="loading container">Se incarca provocarea...</div>;
  
  if (!challenge) {
    return (
      <div className="container" style={{padding:'4rem 0', textAlign:'center'}}>
        <h2>Provocarea nu a fost gasita.</h2>
        <Link href="/" className="btn btn-primary" style={{marginTop:'1rem'}}>Pagina principala</Link>
      </div>
    );
  }

  if (stage === 'intro') {
    return (
      <div className="container" style={{padding:'2rem 1.5rem', maxWidth:'600px'}}>
        <div style={{
          background:'linear-gradient(135deg, #ddd6fe, #c4b5fd)',
          padding:'2.5rem 2rem', borderRadius:'20px', textAlign:'center',
          border:'3px solid #8b5cf6',
        }}>
          <div style={{fontSize:'4rem'}}>🎯</div>
          <h1 style={{color:'#5b21b6', margin:'1rem 0'}}>Provocare TerraQuiz!</h1>
          <p style={{fontSize:'1.2rem', color:'#6d28d9', marginBottom:'2rem'}}>
            <strong>{challenge.challenger_name}</strong> te provoaca!
          </p>
          
          <div style={{
            background:'white', padding:'1.5rem', borderRadius:'12px',
            marginBottom:'2rem',
          }}>
            <div style={{fontSize:'2rem', marginBottom:'0.5rem'}}>{challenge.chapter_emoji}</div>
            <div style={{fontWeight:700, color:'#1e293b', marginBottom:'1rem'}}>{challenge.chapter_name}</div>
            <div style={{display:'flex', justifyContent:'space-around', textAlign:'center'}}>
              <div>
                <div style={{fontSize:'1.8rem', fontWeight:800, color:'#5b21b6'}}>{challenge.challenger_score}</div>
                <div style={{fontSize:'0.85rem', color:'#64748b'}}>Puncte</div>
              </div>
              <div>
                <div style={{fontSize:'1.8rem', fontWeight:800, color:'#5b21b6'}}>{challenge.challenger_correct}/{challenge.challenger_total}</div>
                <div style={{fontSize:'0.85rem', color:'#64748b'}}>Corecte</div>
              </div>
            </div>
            <div style={{marginTop:'1rem', color:'#64748b', fontSize:'0.95rem'}}>
              Acesta este scorul lui {challenge.challenger_name}. Il poti bate?
            </div>
          </div>
          
          <button onClick={() => { setStage('playing'); }} style={{
            background:'linear-gradient(135deg, #8b5cf6, #6d28d9)', color:'white',
            padding:'1rem 2rem', borderRadius:'12px', border:'none',
            fontWeight:700, fontSize:'1.1rem', cursor:'pointer', width:'100%',
            boxShadow:'0 4px 12px rgba(139, 92, 246, 0.4)',
          }}>
            Accept provocarea
          </button>
        </div>
      </div>
    );
  }

  if (stage === 'finished') {
    const challengerWon = challenge.challenger_score > score;
    const tied = challenge.challenger_score === score;
    return (
      <div className="container" style={{padding:'2rem 1.5rem', maxWidth:'600px'}}>
        <div style={{
          background: tied ? 'linear-gradient(135deg, #fef3c7, #fcd34d)' : challengerWon ? 'linear-gradient(135deg, #fee2e2, #fca5a5)' : 'linear-gradient(135deg, #d1fae5, #6ee7b7)',
          padding:'2.5rem 2rem', borderRadius:'20px', textAlign:'center',
          border: '3px solid ' + (tied ? '#d97706' : challengerWon ? '#dc2626' : '#16a34a'),
        }}>
          <div style={{fontSize:'4rem'}}>
            {tied ? '🤝' : challengerWon ? '😅' : '🏆'}
          </div>
          <h1 style={{color: tied ? '#78350f' : challengerWon ? '#991b1b' : '#14532d', margin:'1rem 0'}}>
            {tied ? 'Egalitate!' : challengerWon ? 'Mai mult noroc data viitoare!' : 'Felicitari, ai castigat!'}
          </h1>
          
          <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'1rem', marginTop:'2rem', marginBottom:'2rem'}}>
            <div style={{background:'white', padding:'1.5rem', borderRadius:'12px'}}>
              <div style={{fontSize:'0.9rem', color:'#64748b'}}>{challenge.challenger_name}</div>
              <div style={{fontSize:'2.2rem', fontWeight:800, color:'#5b21b6'}}>{challenge.challenger_score}</div>
              <div style={{fontSize:'0.85rem', color:'#64748b'}}>{challenge.challenger_correct}/{challenge.challenger_total} corecte</div>
            </div>
            <div style={{background:'white', padding:'1.5rem', borderRadius:'12px'}}>
              <div style={{fontSize:'0.9rem', color:'#64748b'}}>Tu</div>
              <div style={{fontSize:'2.2rem', fontWeight:800, color: challengerWon ? '#991b1b' : '#16a34a'}}>{score}</div>
              <div style={{fontSize:'0.85rem', color:'#64748b'}}>{correct}/{questions.length} corecte</div>
            </div>
          </div>
          
          <Link href={`/play/${challenge.chapter_id}`} style={{
            display:'inline-block',
            background:'linear-gradient(135deg, #8b5cf6, #6d28d9)', color:'white',
            padding:'1rem 2rem', borderRadius:'12px', textDecoration:'none',
            fontWeight:700, fontSize:'1.05rem', marginRight:'0.5rem',
          }}>
            Provoaca pe altcineva
          </Link>
          <Link href="/" style={{
            display:'inline-block',
            background:'white', color:'#5b21b6',
            padding:'1rem 2rem', borderRadius:'12px', textDecoration:'none',
            fontWeight:700, fontSize:'1.05rem', border:'2px solid #8b5cf6',
          }}>
            Pagina principala
          </Link>
        </div>
      </div>
    );
  }

  // Playing stage
  const q = questions[currentIdx];
  if (!q) return <div className="loading container">Se incarca...</div>;
  const progress = ((currentIdx + 1) / questions.length) * 100;
  const hasFlag = q.image_description && q.image_description.startsWith('FLAG_IMAGE:');
  const flagIso = hasFlag ? q.image_description.replace('FLAG_IMAGE:', '') : null;

  return (
    <div className="quiz-container">
      <div className="quiz-header">
        <div style={{fontWeight:600}}>🎯 vs {challenge.challenger_name}</div>
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
        {hasFlag ? <FlagImage iso={flagIso} /> : null}
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
            <input type="text" className="fill-input" placeholder="Scrie raspunsul..." value={fillAnswer} onChange={e => setFillAnswer(e.target.value)} disabled={showResult} onKeyDown={e => e.key === 'Enter' && !showResult && handleAnswer(fillAnswer)} autoFocus />
            {!showResult && <button onClick={() => handleAnswer(fillAnswer)} className="btn btn-primary next-btn">Verifica</button>}
            {showResult && <div style={{marginTop:'1rem', padding:'1rem', borderRadius:'8px', background: isCorrect ? '#d1fae5' : '#fee2e2', color: isCorrect ? '#065f46' : '#991b1b'}}>{isCorrect ? 'Corect!' : 'Raspunsul corect: ' + q.correct_answer}</div>}
          </div>
        )}
        {showResult && <button onClick={nextQuestion} className="btn btn-primary next-btn">{currentIdx + 1 >= questions.length ? 'Vezi rezultatul' : 'Urmatoarea intrebare'}</button>}
      </div>
    </div>
  );
}
