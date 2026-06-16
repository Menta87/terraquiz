import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { supabase } from '../../../lib/supabase';
import { safePlay, playCorrect, playWrong, playVictory } from '../../../lib/sounds';

const TIME_PER_QUESTION = 30;

export default function SchoolQuiz() {
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
  const [isPremium, setIsPremium] = useState(false);
  const [needLogin, setNeedLogin] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);

  useEffect(() => { if (chapterId) load(); }, [chapterId]);

  async function load() {
    setLoading(true);
    const { data: { session } } = await supabase.auth.getSession();
    if (!session) { setNeedLogin(true); setLoading(false); return; }
    try {
      const res = await fetch('/api/subscription-status?userId=' + session.user.id);
      const data = await res.json();
      if (!data.isPremium) { router.push('/premium'); return; }
      setIsPremium(true);
    } catch (e) { router.push('/premium'); return; }

    const { data: ch } = await supabase.from('school_chapters').select('*').eq('id', chapterId).maybeSingle();
    if (!ch) { router.push('/scoala'); return; }
    setChapter(ch);

    const { data: qs } = await supabase.from('school_questions').select('*').eq('school_chapter_id', chapterId);
    if (qs && qs.length > 0) {
      const shuffled = [...qs].sort(() => Math.random() - 0.5).slice(0, 15);
      setQuestions(shuffled);
    }
    setLoading(false);
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
      if (typeof accepted === 'string') accepted = accepted.replace(/[{}"]/g, '').split(',').map(s => s.trim());
      if (!accepted || accepted.length === 0) accepted = [q.correct_answer];
      isC = accepted.some(a => a.toLowerCase().trim() === userAns);
    }
    setIsCorrect(isC);
    setSelectedOption(answer);
    setShowResult(true);
    safePlay(isC ? playCorrect : playWrong);
    if (isC) {
      const pts = q.level === 'Avansat' ? 20 : 10;
      const bonus = Math.floor(timeLeft / 3);
      setScore(s => s + pts + bonus);
      setCorrect(c => c + 1);
    }
  }

  function nextQuestion() {
    if (currentIdx + 1 >= questions.length) {
      setFinished(true);
      safePlay(playVictory);
    } else {
      setCurrentIdx(i => i + 1);
      setSelectedOption(null);
      setFillAnswer('');
      setShowResult(false);
      setShowExplanation(false);
      setTimeLeft(TIME_PER_QUESTION);
    }
  }

  if (loading) return <div style={{padding:'4rem',textAlign:'center'}}>Se încarcă quiz-ul...</div>;
  if (needLogin) { router.push('/login'); return null; }

  if (finished) {
    const pct = Math.round((correct / questions.length) * 100);
    return (
      <div style={{minHeight:'90vh',padding:'2rem 1rem',background:'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'}}>
        <div style={{maxWidth:'500px',margin:'0 auto',background:'white',borderRadius:'20px',padding:'2.5rem',textAlign:'center',boxShadow:'0 10px 40px rgba(0,0,0,0.2)'}}>
          <div style={{fontSize:'5rem'}}>{pct >= 80 ? '🏆' : pct >= 50 ? '🎯' : '📚'}</div>
          <h1 style={{color:'#1e293b',marginTop:'1rem'}}>{pct >= 80 ? 'Excelent!' : pct >= 50 ? 'Bravo!' : 'Mai exersează'}</h1>
          <p style={{color:'#64748b',marginTop:'0.5rem',fontSize:'1.05rem'}}>{chapter?.chapter_emoji} {chapter?.chapter_name}</p>
          <div style={{background:'linear-gradient(135deg, #ede9fe, #ddd6fe)',borderRadius:'14px',padding:'1.5rem',marginTop:'1.5rem'}}>
            <div style={{fontSize:'3rem',fontWeight:900,color:'#5b21b6'}}>{score}</div>
            <div style={{color:'#5b21b6',fontWeight:700}}>puncte</div>
            <div style={{marginTop:'1rem',color:'#475569',fontSize:'1rem'}}>{correct} / {questions.length} corecte ({pct}%)</div>
          </div>
          <div style={{marginTop:'1.5rem',display:'flex',gap:'0.5rem',justifyContent:'center'}}>
            <button onClick={() => router.reload()} style={{padding:'0.85rem 1.25rem',background:'linear-gradient(135deg, #8b5cf6, #6d28d9)',color:'white',border:'none',borderRadius:'10px',fontWeight:700,cursor:'pointer'}}>🔄 Reia</button>
            <Link href={'/scoala/' + (chapter?.class_level || '')} style={{padding:'0.85rem 1.25rem',background:'#f1f5f9',color:'#475569',borderRadius:'10px',textDecoration:'none',fontWeight:600,display:'inline-block'}}>← Capitole</Link>
          </div>
        </div>
      </div>
    );
  }

  const q = questions[currentIdx];
  if (!q) return <div style={{padding:'4rem',textAlign:'center'}}>Nu sunt întrebări.</div>;

  return (
    <div style={{minHeight:'90vh',padding:'1rem',background:'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'}}>
      <div style={{maxWidth:'700px',margin:'0 auto'}}>
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',background:'white',padding:'0.75rem 1rem',borderRadius:'12px',marginBottom:'1rem'}}>
          <div style={{fontWeight:700,color:'#1e293b'}}>{chapter?.chapter_emoji} {chapter?.chapter_name}</div>
          <div style={{display:'flex',gap:'0.75rem',alignItems:'center'}}>
            <div style={{background:'#ede9fe',color:'#5b21b6',padding:'0.4rem 0.75rem',borderRadius:'8px',fontWeight:800}}>{score} pct</div>
            <div style={{background: timeLeft <= 5 ? '#fee2e2' : '#f1f5f9',color: timeLeft <= 5 ? '#dc2626' : '#1e293b',padding:'0.4rem 0.75rem',borderRadius:'8px',fontWeight:800}}>⏱️ {timeLeft}s</div>
          </div>
        </div>

        <div style={{background:'white',borderRadius:'16px',padding:'1.5rem',marginBottom:'1rem'}}>
          <div style={{display:'flex',justifyContent:'space-between',marginBottom:'0.75rem'}}>
            <span style={{color:'#94a3b8',fontSize:'0.85rem',fontWeight:600}}>Întrebarea {currentIdx + 1} / {questions.length}</span>
            <span style={{background: q.level === 'Avansat' ? '#fef3c7' : '#dbeafe',color: q.level === 'Avansat' ? '#92400e' : '#1e40af',padding:'0.2rem 0.6rem',borderRadius:'8px',fontSize:'0.75rem',fontWeight:700}}>{q.level}</span>
          </div>
          <h2 style={{color:'#1e293b',fontSize:'1.25rem',lineHeight:1.5,fontWeight:700,margin:0}}>{q.question_text}</h2>
        </div>

        {!showResult ? (
          q.type === 'multiple_choice' ? (
            <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'0.75rem'}}>
              {[{key:'option_a',color:'#ef4444',shape:'▲'},{key:'option_b',color:'#3b82f6',shape:'◆'},{key:'option_c',color:'#eab308',shape:'●'},{key:'option_d',color:'#22c55e',shape:'■'}].map(({key,color,shape}) => {
                const opt = q[key];
                if (!opt) return null;
                return (<button key={key} onClick={() => handleAnswer(opt)} style={{padding:'1.5rem 1rem',background: color,color:'white',border:'none',borderRadius:'12px',fontSize:'1rem',fontWeight:700,cursor:'pointer',minHeight:'100px',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',gap:'0.5rem'}}><div style={{fontSize:'1.75rem'}}>{shape}</div><div style={{textAlign:'center'}}>{opt}</div></button>);
              })}
            </div>
          ) : (
            <div style={{background:'white',borderRadius:'16px',padding:'1.5rem'}}>
              <input type="text" placeholder="Scrie răspunsul..." value={fillAnswer} onChange={e => setFillAnswer(e.target.value)} onKeyDown={e => e.key === 'Enter' && handleAnswer(fillAnswer)} autoFocus style={{width:'100%',padding:'1rem',fontSize:'1.1rem',border:'2px solid #e2e8f0',borderRadius:'12px',marginBottom:'1rem'}} />
              <button onClick={() => handleAnswer(fillAnswer)} style={{width:'100%',padding:'1rem',background:'linear-gradient(135deg, #8b5cf6, #6d28d9)',color:'white',border:'none',borderRadius:'12px',fontSize:'1.05rem',fontWeight:700,cursor:'pointer'}}>Trimite</button>
            </div>
          )
        ) : (
          <div style={{background: isCorrect ? '#d1fae5' : '#fee2e2',borderRadius:'16px',padding:'1.5rem',textAlign:'center'}}>
            <div style={{fontSize:'3.5rem'}}>{isCorrect ? '✅' : '❌'}</div>
            <h2 style={{color: isCorrect ? '#065f46' : '#991b1b',marginTop:'0.5rem',fontSize:'1.5rem'}}>{isCorrect ? 'Corect!' : 'Greșit'}</h2>
            {!isCorrect && <div style={{color:'#475569',marginTop:'0.75rem',fontSize:'0.95rem'}}>Răspuns corect: <strong>{q.correct_answer}</strong></div>}
            {q.explanation && (
              <div style={{background:'rgba(255,255,255,0.7)',padding:'1rem',borderRadius:'10px',marginTop:'1rem',textAlign:'left',color:'#1e293b',fontSize:'0.92rem',lineHeight:1.5}}>
                💡 <strong>Explicație:</strong> {q.explanation}
              </div>
            )}
            <button onClick={nextQuestion} style={{marginTop:'1.25rem',padding:'1rem 2rem',background:'linear-gradient(135deg, #8b5cf6, #6d28d9)',color:'white',border:'none',borderRadius:'10px',fontSize:'1.05rem',fontWeight:700,cursor:'pointer'}}>{currentIdx + 1 >= questions.length ? '🏁 Vezi scor' : '➡️ Următoarea'}</button>
          </div>
        )}
      </div>
    </div>
  );
}
