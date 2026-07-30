import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { supabase } from '../lib/supabase';

export default function TestEntry() {
  const router = useRouter();
  const [step, setStep] = useState('code');
  const [code, setCode] = useState('');
  const [studentName, setStudentName] = useState('');
  const [test, setTest] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [answers, setAnswers] = useState({});
  const [startedAt, setStartedAt] = useState(null);
  const [timeLeft, setTimeLeft] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [finalScore, setFinalScore] = useState(null);

  useEffect(() => {
    if (step !== 'quiz' || timeLeft <= 0) return;
    const t = setInterval(() => setTimeLeft(x => x - 1), 1000);
    return () => clearInterval(t);
  }, [step, timeLeft]);

  useEffect(() => {
    if (step === 'quiz' && timeLeft === 0 && startedAt) {
      submitTest();
    }
  }, [timeLeft]);

  async function checkCode() {
    setError('');
    if (code.length < 4) return setError('Codul trebuie să aibă cel puțin 4 caractere');
    setLoading(true);
    const { data } = await supabase.from('teacher_tests').select('*').eq('test_code', code.toUpperCase()).eq('status', 'active').maybeSingle();
    setLoading(false);
    if (!data) return setError('Cod invalid sau test expirat');
    setTest(data);
    setStep('name');
  }

  async function startTest() {
    setError('');
    if (studentName.trim().length < 3) return setError('Numele trebuie să aibă min. 3 caractere');
    
    // Verific dacă elevul a mai făcut testul
    const { data: existing } = await supabase.from('test_results').select('id, grade').eq('test_id', test.id).eq('student_name', studentName.trim()).maybeSingle();
    if (existing) return setError(`Ai făcut deja acest test. Nota obținută: ${existing.grade}`);
    
    setLoading(true);
    const { data: qs } = await supabase.from('school_questions').select('*').in('id', test.question_ids);
    const ordered = test.question_ids.map(id => qs.find(q => q.id === id)).filter(Boolean);
    setQuestions(ordered);
    setStartedAt(Date.now());
    setTimeLeft(test.duration_minutes * 60);
    setStep('quiz');
    setLoading(false);
  }

  function selectAnswer(qId, answer) {
    setAnswers(prev => ({ ...prev, [qId]: answer }));
  }

  async function submitTest() {
    setLoading(true);
    let correct = 0;
    questions.forEach(q => {
      const userAns = answers[q.id];
      if (!userAns) return;
      if (q.type === 'multiple_choice') {
        if (userAns === q.correct_answer) correct++;
      } else {
        let accepted = q.accepted_answers;
        if (typeof accepted === 'string') accepted = accepted.replace(/[{}"]/g, '').split(',').map(s => s.trim());
        if (!accepted || accepted.length === 0) accepted = [q.correct_answer];
        if (accepted.some(a => a.toLowerCase().trim() === (userAns || '').toLowerCase().trim())) correct++;
      }
    });
    
    const total = questions.length;
    const scorePct = (correct / total) * 100;
    const grade = Math.round((correct / total) * 900 + 100) / 100; // Nota 1-10
    const timeTaken = Math.floor((Date.now() - startedAt) / 1000);
    
    await supabase.from('test_results').insert({
      test_id: test.id,
      student_name: studentName.trim(),
      correct_answers: correct,
      total_questions: total,
      score_percent: scorePct,
      grade: grade,
      answers: answers,
      finished_at: new Date().toISOString(),
      time_taken_seconds: timeTaken
    });
    
    setFinalScore({ correct, total, grade, scorePct });
    setStep('done');
    setLoading(false);
  }

  if (step === 'code') {
    return (
      <div style={{minHeight:'80vh', display:'flex', alignItems:'center', justifyContent:'center', padding:'2rem 1rem', background:'linear-gradient(135deg, #667eea, #764ba2)'}}>
        <div style={{background:'white', borderRadius:'20px', padding:'2.5rem', maxWidth:'450px', width:'100%', textAlign:'center'}}>
          <div style={{fontSize:'4rem'}}>📝</div>
          <h1 style={{color:'#1e293b'}}>Test de la profesor</h1>
          <p style={{color:'#64748b'}}>Introdu codul primit de la profesor</p>
          <input type="text" placeholder="Ex: ABC123" value={code} onChange={e => setCode(e.target.value.toUpperCase())} style={{width:'100%', padding:'1rem', border:'2px solid #e2e8f0', borderRadius:'12px', fontSize:'1.5rem', textAlign:'center', letterSpacing:'0.3rem', fontFamily:'monospace', marginBottom:'1rem'}} />
          {error && <div style={{padding:'0.75rem', background:'#fee2e2', color:'#991b1b', borderRadius:'10px', marginBottom:'1rem'}}>{error}</div>}
          <button onClick={checkCode} disabled={loading} style={{width:'100%', padding:'1rem', background:'linear-gradient(135deg, #8b5cf6, #6d28d9)', color:'white', border:'none', borderRadius:'12px', fontWeight:800, fontSize:'1.05rem', cursor:'pointer'}}>{loading ? '...' : '➡️ Continuă'}</button>
        </div>
      </div>
    );
  }

  if (step === 'name') {
    return (
      <div style={{minHeight:'80vh', display:'flex', alignItems:'center', justifyContent:'center', padding:'2rem 1rem', background:'linear-gradient(135deg, #667eea, #764ba2)'}}>
        <div style={{background:'white', borderRadius:'20px', padding:'2.5rem', maxWidth:'500px', width:'100%'}}>
          <div style={{textAlign:'center'}}>
            <div style={{fontSize:'4rem'}}>👨‍🎓</div>
            <h1 style={{color:'#1e293b'}}>{test.test_name}</h1>
            <div style={{background:'#ede9fe', padding:'1rem', borderRadius:'10px', margin:'1rem 0'}}>
              <div style={{color:'#5b21b6', fontSize:'0.9rem'}}>Clasa {test.class_level} • {test.question_count} întrebări • {test.duration_minutes} minute</div>
            </div>
          </div>
          <label style={{fontWeight:700, color:'#475569', display:'block', marginBottom:'0.5rem'}}>Nume complet (Nume și Prenume):</label>
          <input type="text" placeholder="Ex: Popescu Andrei" value={studentName} onChange={e => setStudentName(e.target.value)} style={{width:'100%', padding:'1rem', border:'2px solid #e2e8f0', borderRadius:'12px', fontSize:'1rem', marginBottom:'1rem'}} />
          {error && <div style={{padding:'0.75rem', background:'#fee2e2', color:'#991b1b', borderRadius:'10px', marginBottom:'1rem'}}>{error}</div>}
          <button onClick={startTest} disabled={loading} style={{width:'100%', padding:'1rem', background:'linear-gradient(135deg, #10b981, #059669)', color:'white', border:'none', borderRadius:'12px', fontWeight:800, fontSize:'1.05rem', cursor:'pointer'}}>{loading ? '...' : '🚀 Începe testul'}</button>
        </div>
      </div>
    );
  }

  if (step === 'quiz') {
    const q = questions[currentIdx];
    if (!q) return null;
    const mins = Math.floor(timeLeft / 60);
    const secs = timeLeft % 60;
    
    return (
      <div style={{minHeight:'80vh', padding:'1.5rem', background:'linear-gradient(135deg, #667eea, #764ba2)'}}>
        <div style={{maxWidth:'700px', margin:'0 auto', background:'white', borderRadius:'20px', padding:'2rem'}}>
          <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:'1rem'}}>
            <div style={{color:'#5b21b6', fontWeight:800}}>Întrebarea {currentIdx + 1} din {questions.length}</div>
            <div style={{background: timeLeft < 300 ? '#fee2e2' : '#ede9fe', color: timeLeft < 300 ? '#991b1b' : '#5b21b6', padding:'0.5rem 1rem', borderRadius:'8px', fontWeight:800, fontFamily:'monospace'}}>⏱ {mins}:{secs.toString().padStart(2, '0')}</div>
          </div>
          <div style={{background:'#f8fafc', padding:'1.5rem', borderRadius:'12px', marginBottom:'1.25rem'}}>
            <div style={{fontWeight:700, color:'#1e293b', fontSize:'1.1rem'}}>{q.question_text}</div>
          </div>
          
          {q.type === 'multiple_choice' ? (
            <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'0.75rem', marginBottom:'1rem'}}>
              {[{key:'option_a', letter:'A', color:'#ef4444'},{key:'option_b', letter:'B', color:'#3b82f6'},{key:'option_c', letter:'C', color:'#eab308'},{key:'option_d', letter:'D', color:'#22c55e'}].map(({key, letter, color}) => {
                const opt = q[key];
                if (!opt) return null;
                const isSelected = answers[q.id] === letter;
                return (
                  <button key={key} onClick={() => selectAnswer(q.id, letter)} style={{padding:'1rem', background: isSelected ? color : 'white', color: isSelected ? 'white' : '#1e293b', border:'3px solid ' + color, borderRadius:'12px', fontWeight:700, cursor:'pointer', textAlign:'left'}}>
                    <div style={{fontSize:'0.85rem', opacity:0.85}}>{letter}</div>
                    <div>{opt}</div>
                  </button>
                );
              })}
            </div>
          ) : (
            <input type="text" placeholder="Scrie răspunsul..." value={answers[q.id] || ''} onChange={e => selectAnswer(q.id, e.target.value)} style={{width:'100%', padding:'1rem', border:'2px solid #e2e8f0', borderRadius:'12px', fontSize:'1rem', marginBottom:'1rem'}} />
          )}
          
          <div style={{display:'flex', gap:'0.5rem', marginTop:'1.5rem'}}>
            <button onClick={() => setCurrentIdx(Math.max(0, currentIdx - 1))} disabled={currentIdx === 0} style={{flex:1, padding:'0.85rem', background:'#f1f5f9', color:'#475569', border:'none', borderRadius:'10px', fontWeight:700, cursor: currentIdx === 0 ? 'not-allowed' : 'pointer'}}>← Anterioară</button>
            {currentIdx < questions.length - 1 ? (
              <button onClick={() => setCurrentIdx(currentIdx + 1)} style={{flex:1, padding:'0.85rem', background:'linear-gradient(135deg, #8b5cf6, #6d28d9)', color:'white', border:'none', borderRadius:'10px', fontWeight:700, cursor:'pointer'}}>Următoarea →</button>
            ) : (
              <button onClick={submitTest} style={{flex:1, padding:'0.85rem', background:'linear-gradient(135deg, #10b981, #059669)', color:'white', border:'none', borderRadius:'10px', fontWeight:800, cursor:'pointer'}}>🏁 Trimite test</button>
            )}
          </div>
        </div>
      </div>
    );
  }

  if (step === 'done') {
    return (
      <div style={{minHeight:'80vh', display:'flex', alignItems:'center', justifyContent:'center', padding:'2rem 1rem', background:'linear-gradient(135deg, #667eea, #764ba2)'}}>
        <div style={{background:'white', borderRadius:'20px', padding:'2.5rem', maxWidth:'500px', width:'100%', textAlign:'center'}}>
          <div style={{fontSize:'5rem'}}>{finalScore.grade >= 8 ? '🏆' : finalScore.grade >= 5 ? '👍' : '📚'}</div>
          <h1 style={{color:'#1e293b'}}>Test terminat!</h1>
          <div style={{background:'linear-gradient(135deg, #ede9fe, #ddd6fe)', padding:'1.5rem', borderRadius:'16px', margin:'1.5rem 0'}}>
            <div style={{fontSize:'3.5rem', fontWeight:900, color:'#5b21b6'}}>{finalScore.grade}</div>
            <div style={{color:'#5b21b6', fontWeight:700}}>Nota ta</div>
          </div>
          <div style={{color:'#64748b'}}>Ai răspuns corect la <strong>{finalScore.correct}</strong> din <strong>{finalScore.total}</strong> întrebări ({Math.round(finalScore.scorePct)}%)</div>
          <div style={{color:'#94a3b8', fontSize:'0.9rem', marginTop:'1rem'}}>Nota va fi vizibilă și în raportul profesorului</div>
          <Link href="/" style={{display:'inline-block', marginTop:'1.5rem', padding:'0.85rem 1.5rem', background:'linear-gradient(135deg, #8b5cf6, #6d28d9)', color:'white', borderRadius:'10px', textDecoration:'none', fontWeight:700}}>← Înapoi la TerraQuiz</Link>
        </div>
      </div>
    );
  }

  return null;
}
