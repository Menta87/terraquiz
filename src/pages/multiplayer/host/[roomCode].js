import { useEffect, useState, useRef } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { supabase } from '../../../lib/supabase';

const TIME_PER_QUESTION = 30;

export default function HostRoom() {
  const router = useRouter();
  const { roomCode } = router.query;
  const [room, setRoom] = useState(null);
  const [players, setPlayers] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [answersForQuestion, setAnswersForQuestion] = useState([]);
  const [timeLeft, setTimeLeft] = useState(TIME_PER_QUESTION);
  const [stage, setStage] = useState('lobby');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const channelRef = useRef(null);

  useEffect(() => {
    if (!roomCode) return;
    loadRoom();
  }, [roomCode]);

  async function loadRoom() {
    const { data: { session } } = await supabase.auth.getSession();
    if (!session) {
      router.push('/login');
      return;
    }
    const { data: r, error: roomError } = await supabase.from('multiplayer_rooms').select('*').eq('room_code', roomCode).single();
    if (roomError || !r) {
      setError('Camera nu a fost gasita.');
      setLoading(false);
      return;
    }
    if (r.host_id !== session.user.id) {
      setError('Nu esti host-ul acestei camere.');
      setLoading(false);
      return;
    }
    setRoom(r);
    const { data: qs } = await supabase.from('questions').select('*').in('id', r.question_ids);
    if (qs) {
      const ordered = r.question_ids.map(qid => qs.find(q => q.id === qid)).filter(Boolean);
      setQuestions(ordered);
    }
    if (r.status === 'finished') setStage('finished');
    else if (r.status === 'playing' && r.current_question_idx >= 0) {
      setCurrentQuestion(r.current_question_idx);
      setStage('question');
    }
    const { data: ps } = await supabase.from('multiplayer_players').select('*').eq('room_id', r.id).order('joined_at', { ascending: true });
    if (ps) setPlayers(ps);
    setLoading(false);
    const channel = supabase.channel(`room_${r.id}`)
      .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'multiplayer_players', filter: `room_id=eq.${r.id}` }, (payload) => { setPlayers(prev => [...prev, payload.new]); })
      .on('postgres_changes', { event: 'UPDATE', schema: 'public', table: 'multiplayer_players', filter: `room_id=eq.${r.id}` }, (payload) => { setPlayers(prev => prev.map(p => p.id === payload.new.id ? payload.new : p)); })
      .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'multiplayer_answers', filter: `room_id=eq.${r.id}` }, (payload) => { setAnswersForQuestion(prev => [...prev, payload.new]); })
      .subscribe();
    channelRef.current = channel;
  }

  useEffect(() => {
    return () => { if (channelRef.current) supabase.removeChannel(channelRef.current); };
  }, []);

  useEffect(() => {
    if (stage !== 'question') return;
    if (timeLeft <= 0) { setStage('reveal'); return; }
    const t = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
    return () => clearTimeout(t);
  }, [timeLeft, stage]);

  async function startGame() {
    if (players.length === 0) { alert('Trebuie sa fie cel putin un jucator!'); return; }
    const now = new Date().toISOString();
       await supabase.from('multiplayer_rooms').update({ status: 'playing', current_question_idx: 0, question_started_at: now, show_results: false }).eq('id', room.id);

    setCurrentQuestion(0);
    setAnswersForQuestion([]);
    setTimeLeft(TIME_PER_QUESTION);
    setStage('question');
  }

  async function nextQuestion() {
    const nextIdx = currentQuestion + 1;
    if (nextIdx >= questions.length) {
      await supabase.from('multiplayer_rooms').update({ status: 'finished' }).eq('id', room.id);
      setStage('finished');
      return;
    }
    const now = new Date().toISOString();
        await supabase.from('multiplayer_rooms').update({ current_question_idx: nextIdx, question_started_at: now, show_results: false }).eq('id', room.id);

    setCurrentQuestion(nextIdx);
    setAnswersForQuestion([]);
    setTimeLeft(TIME_PER_QUESTION);
    setStage('question');
  }

  const sortedPlayers = [...players].sort((a, b) => b.score - a.score);

  if (loading) return <div className="loading container">Se incarca camera...</div>;
  if (error) return (<div className="container" style={{padding:'4rem 0', textAlign:'center'}}><h2>{error}</h2><Link href="/multiplayer" className="btn btn-primary" style={{marginTop:'1rem'}}>Inapoi</Link></div>);

  if (stage === 'lobby') {
    return (
      <div style={{minHeight:'90vh', padding:'2rem 1.5rem', background:'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'}}>
        <div style={{maxWidth:'1200px', margin:'0 auto'}}>
          <div style={{background:'white', borderRadius:'20px', padding:'2.5rem', textAlign:'center', marginBottom:'2rem', boxShadow:'0 10px 40px rgba(0,0,0,0.2)'}}>
            <div style={{fontSize:'1.2rem', color:'#64748b', marginBottom:'0.5rem'}}>{room.chapter_emoji} {room.chapter_name} • {questions.length} intrebari</div>
            <div style={{fontSize:'1.1rem', color:'#475569', marginBottom:'1rem'}}>Intra pe <strong>terraquiz.ro/multiplayer</strong> si introdu codul:</div>
            <div style={{fontSize:'5rem', fontWeight:900, letterSpacing:'1rem', color:'#5b21b6', fontFamily:'monospace', padding:'1rem', background:'linear-gradient(135deg, #ede9fe, #ddd6fe)', borderRadius:'16px', border:'4px solid #8b5cf6'}}>{roomCode}</div>
          </div>
          <div style={{background:'white', borderRadius:'20px', padding:'2rem', marginBottom:'2rem', boxShadow:'0 10px 40px rgba(0,0,0,0.2)'}}>
            <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:'1.5rem'}}>
              <h2 style={{color:'#1e293b', fontSize:'1.5rem'}}>👥 Jucatori conectati</h2>
              <div style={{background:'#8b5cf6', color:'white', padding:'0.5rem 1rem', borderRadius:'8px', fontWeight:700, fontSize:'1.2rem'}}>{players.length}</div>
            </div>
            {players.length === 0 ? (
              <div style={{textAlign:'center', padding:'3rem', color:'#94a3b8'}}><div style={{fontSize:'3rem'}}>⏳</div><div style={{marginTop:'1rem'}}>Astept sa se conecteze jucatorii...</div></div>
            ) : (
              <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(180px, 1fr))', gap:'0.75rem'}}>
                {players.map(p => (<div key={p.id} style={{padding:'1rem', background:'linear-gradient(135deg, #ede9fe, #ddd6fe)', borderRadius:'12px', textAlign:'center', border:'2px solid #8b5cf6'}}><div style={{fontSize:'2rem'}}>{p.avatar_emoji}</div><div style={{fontWeight:700, color:'#5b21b6', marginTop:'0.5rem'}}>{p.nickname}</div></div>))}
              </div>
            )}
          </div>
          <button onClick={startGame} disabled={players.length === 0} style={{width:'100%', padding:'1.5rem', background: players.length === 0 ? '#94a3b8' : 'linear-gradient(135deg, #10b981, #059669)', color:'white', border:'none', borderRadius:'16px', fontSize:'1.5rem', fontWeight:800, cursor: players.length === 0 ? 'not-allowed' : 'pointer'}}>🚀 START JOC ({players.length} {players.length === 1 ? 'jucator' : 'jucatori'})</button>
        </div>
      </div>
    );
  }

  if (stage === 'question' || stage === 'reveal') {
    const q = questions[currentQuestion];
    if (!q) return <div className="loading container">Se incarca intrebarea...</div>;
    const answeredCount = answersForQuestion.length;
    const totalPlayers = players.length;
    const hasFlag = q.image_description && q.image_description.startsWith('FLAG_IMAGE:');
    const flagIso = hasFlag ? q.image_description.replace('FLAG_IMAGE:', '') : null;

    return (
      <div style={{minHeight:'90vh', padding:'2rem 1.5rem', background:'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'}}>
        <div style={{maxWidth:'1200px', margin:'0 auto'}}>
          <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:'1.5rem', color:'white'}}>
            <div style={{fontSize:'1.2rem', fontWeight:600}}>Intrebarea {currentQuestion + 1} / {questions.length}</div>
            <div style={{background:'white', color:'#5b21b6', padding:'0.75rem 1.5rem', borderRadius:'12px', fontSize:'2rem', fontWeight:900, minWidth:'80px', textAlign:'center'}}>{stage === 'question' ? timeLeft : '⏰'}</div>
            <div style={{fontSize:'1.2rem', fontWeight:600}}>📝 {answeredCount} / {totalPlayers}</div>
          </div>
          <div style={{background:'white', borderRadius:'20px', padding:'2rem', marginBottom:'1.5rem'}}>
            <div style={{fontSize:'1.8rem', fontWeight:700, color:'#1e293b', textAlign:'center', marginBottom:'1.5rem'}}>{q.question_text}</div>
            {hasFlag && (<div style={{textAlign:'center', marginBottom:'1.5rem'}}><img src={`https://flagcdn.com/w320/${flagIso}.png`} alt="Steag" style={{maxWidth:'280px', borderRadius:'8px'}} /></div>)}
            {q.type === 'multiple_choice' && (
              <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'1rem'}}>
                {[{key:'option_a',color:'#ef4444',shape:'▲',letter:'A'},{key:'option_b',color:'#3b82f6',shape:'◆',letter:'B'},{key:'option_c',color:'#eab308',shape:'●',letter:'C'},{key:'option_d',color:'#22c55e',shape:'■',letter:'D'}].map(({key,color,shape,letter}) => {
                  const opt = q[key];
                  if (!opt) return null;
                  const isCorrect = stage === 'reveal' && opt === q.correct_answer;
                  const showFaded = stage === 'reveal' && opt !== q.correct_answer;
                  return (<div key={key} style={{padding:'1.5rem', background: color, opacity: showFaded ? 0.4 : 1, borderRadius:'12px', color:'white', fontSize:'1.2rem', fontWeight:700, display:'flex', alignItems:'center', gap:'1rem', border: isCorrect ? '4px solid white' : 'none'}}><div style={{fontSize:'2rem'}}>{shape}</div><div style={{flex:1}}><div style={{fontSize:'0.9rem', opacity:0.9}}>{letter})</div><div>{opt}</div></div>{isCorrect && <div style={{fontSize:'2rem'}}>✓</div>}</div>);
                })}
              </div>
            )}
                        {(q.type === 'fill_in' || q.type === 'fill_blank') && stage === 'reveal' && (<div style={{padding:'1.5rem', background:'#d1fae5', borderRadius:'12px', textAlign:'center'}}><div style={{color:'#065f46', fontSize:'0.9rem'}}>Raspunsul corect:</div><div style={{color:'#065f46', fontSize:'2rem', fontWeight:800}}>{q.correct_answer}</div></div>)}



          </div>
                   {stage === 'question' && (<button onClick={async () => { await supabase.rpc('reveal_question_scores', { p_room_id: room.id, p_question_idx: currentQuestion }); setStage('reveal'); }} style={{width:'100%', padding:'1rem', background:'white', color:'#5b21b6', border:'none', borderRadius:'12px', fontSize:'1.1rem', fontWeight:700, cursor:'pointer'}}>⏭️ Arata raspunsul</button>)}

          {stage === 'reveal' && (
            <>
              <div style={{background:'white', borderRadius:'16px', padding:'1.5rem', marginBottom:'1rem'}}>
                <h3 style={{color:'#1e293b', marginBottom:'1rem'}}>🏆 Clasament</h3>
                {sortedPlayers.slice(0, 10).map((p, idx) => (<div key={p.id} style={{display:'flex', alignItems:'center', gap:'1rem', padding:'0.75rem', background: idx === 0 ? '#fef3c7' : '#f8fafc', borderRadius:'8px', marginBottom:'0.5rem'}}><div style={{fontSize:'1.5rem', fontWeight:800, color:'#5b21b6', minWidth:'40px'}}>{idx === 0 ? '🥇' : idx === 1 ? '🥈' : idx === 2 ? '🥉' : `#${idx + 1}`}</div><div style={{fontSize:'1.5rem'}}>{p.avatar_emoji}</div><div style={{flex:1, fontWeight:700, color:'#1e293b'}}>{p.nickname}</div><div style={{fontSize:'1.3rem', fontWeight:800, color:'#5b21b6'}}>{p.score} pct</div></div>))}
              </div>
              <button onClick={nextQuestion} style={{width:'100%', padding:'1.5rem', background:'linear-gradient(135deg, #10b981, #059669)', color:'white', border:'none', borderRadius:'12px', fontSize:'1.3rem', fontWeight:800, cursor:'pointer'}}>{currentQuestion + 1 >= questions.length ? '🏁 Vezi rezultatul final' : '➡️ Urmatoarea intrebare'}</button>
            </>
          )}
        </div>
      </div>
    );
  }

  if (stage === 'finished') {
    const top3 = sortedPlayers.slice(0, 3);
    return (
      <div style={{minHeight:'90vh', padding:'2rem 1.5rem', background:'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'}}>
        <div style={{maxWidth:'900px', margin:'0 auto'}}>
          <div style={{textAlign:'center', color:'white', marginBottom:'2rem'}}>
            <div style={{fontSize:'5rem'}}>🏆</div>
            <h1 style={{fontSize:'3rem', marginTop:'1rem'}}>Joc terminat!</h1>
            <p style={{fontSize:'1.2rem', opacity:0.9}}>{room.chapter_emoji} {room.chapter_name}</p>
          </div>
          <div style={{background:'white', borderRadius:'16px', padding:'1.5rem', marginBottom:'2rem'}}>
            <h3 style={{color:'#1e293b', marginBottom:'1rem'}}>🏆 Clasament final</h3>
            {sortedPlayers.map((p, idx) => (<div key={p.id} style={{display:'flex', alignItems:'center', gap:'1rem', padding:'0.75rem', background: idx === 0 ? '#fef3c7' : idx === 1 ? '#e2e8f0' : idx === 2 ? '#fde68a' : '#f8fafc', borderRadius:'8px', marginBottom:'0.5rem'}}><div style={{fontSize:'1.5rem', fontWeight:800, color:'#5b21b6', minWidth:'40px'}}>{idx === 0 ? '🥇' : idx === 1 ? '🥈' : idx === 2 ? '🥉' : `#${idx + 1}`}</div><div style={{fontSize:'1.5rem'}}>{p.avatar_emoji}</div><div style={{flex:1, fontWeight:700, color:'#1e293b'}}>{p.nickname}</div><div style={{fontSize:'1.3rem', fontWeight:800, color:'#5b21b6'}}>{p.score} pct</div></div>))}
          </div>
          <Link href="/multiplayer" style={{display:'block', textAlign:'center', padding:'1rem', background:'white', color:'#5b21b6', borderRadius:'12px', textDecoration:'none', fontWeight:700, fontSize:'1.1rem'}}>🎮 Joc nou</Link>
        </div>
      </div>
    );
  }

  return null;
}
