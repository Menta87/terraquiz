import { useEffect, useState, useRef } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { supabase } from '../../../lib/supabase';
import { safePlay, playCorrect, playWrong, playSubmit, playTimeUp, playGameStart, playVictory } from '../../../lib/sounds';

export default function PlayerRoom() {
  const router = useRouter();
  const { roomCode } = router.query;
  const [room, setRoom] = useState(null);
  const [player, setPlayer] = useState(null);
  const [players, setPlayers] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [hasAnswered, setHasAnswered] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [fillAnswer, setFillAnswer] = useState('');
  const [isCorrect, setIsCorrect] = useState(null);
  const [pointsEarned, setPointsEarned] = useState(0);
  const [questionStartTime, setQuestionStartTime] = useState(null);
  const [hasPlayedResultSound, setHasPlayedResultSound] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const channelRef = useRef(null);

  useEffect(() => {
    if (!roomCode) return;
    loadRoom();
  }, [roomCode]);

  async function checkExistingAnswer(roomData, playerId) {
    if (roomData.current_question_idx < 0) return null;
    const { data } = await supabase
      .from('multiplayer_answers')
      .select('*')
      .eq('room_id', roomData.id)
      .eq('player_id', playerId)
      .eq('question_idx', roomData.current_question_idx)
      .maybeSingle();
    return data;
  }

  async function loadRoom() {
    const playerId = typeof window !== 'undefined' ? localStorage.getItem(`mp_player_${roomCode}`) : null;
    if (!playerId) {
      setError('Nu te-ai inregistrat in aceasta camera. Intra din nou cu codul.');
      setLoading(false);
      return;
    }
    const { data: r } = await supabase.from('multiplayer_rooms').select('*').eq('room_code', roomCode).maybeSingle();
    if (!r) {
      setError('Camera nu mai exista.');
      setLoading(false);
      return;
    }
    setRoom(r);
    const { data: p } = await supabase.from('multiplayer_players').select('*').eq('id', playerId).maybeSingle();
    if (!p) {
      setError('Nu te-am gasit in aceasta camera.');
      setLoading(false);
      return;
    }
    setPlayer(p);
    const { data: ps } = await supabase.from('multiplayer_players').select('*').eq('room_id', r.id).order('score', { ascending: false });
    if (ps) setPlayers(ps);
    if (r.status === 'playing' && r.current_question_idx >= 0) {
      await loadCurrentQuestion(r);
      const existing = await checkExistingAnswer(r, playerId);
      if (existing) {
        setHasAnswered(true);
        setSelectedAnswer(existing.answer);
        setIsCorrect(existing.is_correct);
        setPointsEarned(existing.points_earned);
      }
    }
    setLoading(false);

    const channel = supabase.channel(`player_${r.id}_${playerId}`)
      .on('postgres_changes', { event: 'UPDATE', schema: 'public', table: 'multiplayer_rooms', filter: `id=eq.${r.id}` }, async (payload) => {
        const updatedRoom = payload.new;
        setRoom(updatedRoom);
        if (updatedRoom.status === 'playing' && updatedRoom.current_question_idx !== r.current_question_idx) {
          r.current_question_idx = updatedRoom.current_question_idx;
          r.question_started_at = updatedRoom.question_started_at;
          await loadCurrentQuestion(updatedRoom);
          setHasAnswered(false);
          setSelectedAnswer(null);
          setFillAnswer('');
          setIsCorrect(null);
          setPointsEarned(0);
        }
      })
      .on('postgres_changes', { event: 'UPDATE', schema: 'public', table: 'multiplayer_players', filter: `room_id=eq.${r.id}` }, (payload) => {
        setPlayers(prev => {
          const updated = prev.map(pl => pl.id === payload.new.id ? payload.new : pl);
          return updated.sort((a, b) => b.score - a.score);
        });
        if (payload.new.id === parseInt(playerId)) setPlayer(payload.new);
      })
      .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'multiplayer_players', filter: `room_id=eq.${r.id}` }, (payload) => {
        setPlayers(prev => [...prev, payload.new].sort((a, b) => b.score - a.score));
      })
      .subscribe();
    channelRef.current = channel;
  }

  async function loadCurrentQuestion(roomData) {
    const qId = roomData.question_ids[roomData.current_question_idx];
    if (!qId) return;
    const { data: q } = await supabase.from('questions').select('*').eq('id', qId).single();
    if (q) {
      setCurrentQuestion(q);
      setQuestionStartTime(new Date(roomData.question_started_at).getTime());
    }
  }

  useEffect(() => {
    return () => { if (channelRef.current) supabase.removeChannel(channelRef.current); };
  }, []);

  // Sunete: la reveal cantam corect/gresit, la timp expirat - timeUp, la finished - victory
  useEffect(() => {
    if (!room) return;
    if (room.status === 'finished' && !hasPlayedResultSound) {
      safePlay(playVictory);
      setHasPlayedResultSound(true);
      // Salvez scorul in leaderboard saptamanal (doar user autentificat + are scor)
      (async () => {
        try {
          const { data: { session } } = await supabase.auth.getSession();
          if (session && player && player.score > 0) {
            const myRank = players.findIndex(p => p.id === player.id) + 1;
            const isWinner = myRank === 1;
            await supabase.rpc('add_weekly_score', {
              p_user_id: session.user.id,
              p_nickname: player.nickname,
              p_points: player.score,
              p_won: isWinner
            });
            // Update streak (zile consecutive de joc)
            await supabase.rpc('update_user_streak', { p_user_id: session.user.id });
            // Update progres challenge zilnic
            const { data: chData } = await supabase.rpc('update_daily_challenge_progress', {
              p_user_id: session.user.id,
              p_event_type: 'game_multi',
              p_score_pct: null
            });
            if (chData && chData.just_completed) {
              alert('🎉 Challenge completat: ' + chData.name + ' - ' + chData.reward + ' puncte bonus!');
            }
          }
        } catch (e) { console.error('Weekly score error:', e); }
      })();
      return;
    }
    if (room.show_results && !hasPlayedResultSound && room.status === 'playing') {
      if (hasAnswered) {
        safePlay(isCorrect ? playCorrect : playWrong);
      } else {
        safePlay(playTimeUp);
      }
      setHasPlayedResultSound(true);
    }
    // Reset cand vine intrebare noua
    if (room.status === 'playing' && !room.show_results && hasPlayedResultSound) {
      setHasPlayedResultSound(false);
    }
  }, [room?.show_results, room?.status, isCorrect, hasAnswered, hasPlayedResultSound]);

  async function submitAnswer(answer) {
    if (hasAnswered || !currentQuestion || !room || room.show_results) return;
    
    // ANTI-CHEAT: verifica in DB inainte de a salva (in caz de refresh)
    const existing = await checkExistingAnswer(room, player.id);
    if (existing) {
      setHasAnswered(true);
      setSelectedAnswer(existing.answer);
      setIsCorrect(existing.is_correct);
      setPointsEarned(existing.points_earned);
      return;
    }
    
    setHasAnswered(true);
    setSelectedAnswer(answer);
    safePlay(playSubmit);
    const answerTimeMs = Date.now() - questionStartTime;
    const timeBonus = Math.max(0, 30 - Math.floor(answerTimeMs / 1000));
    let correct = false;
    if (currentQuestion.type === 'multiple_choice') {
      correct = answer === currentQuestion.correct_answer;
    } else {
      const userAns = (answer || '').trim().toLowerCase();
      let accepted = currentQuestion.accepted_answers;
      if (typeof accepted === 'string') accepted = accepted.replace(/[{}"]/g, '').split(',').map(s => s.trim());
      if (!accepted) accepted = [currentQuestion.correct_answer];
      correct = accepted.some(a => a.toLowerCase().trim() === userAns);
    }
    setIsCorrect(correct);
    let points = 0;
    if (correct) {
      const basePoints = currentQuestion.level === 'Avansat' ? 20 : 10;
      points = basePoints + Math.floor(timeBonus / 3);
    }
    setPointsEarned(points);
    
    // Salvam doar raspunsul - scorul NU se actualizeaza inca!
    // Profesorul va apela RPC reveal_question_scores cand da "Arata raspunsul"
    await supabase.from('multiplayer_answers').insert({
      room_id: room.id, player_id: player.id, question_idx: room.current_question_idx,
      question_id: currentQuestion.id, answer: answer || '', is_correct: correct,
      points_earned: points, answer_time_ms: answerTimeMs
    });
    
    // BUG FIX: NU mai facem update la player.score aici!
    // Scorul se actualizeaza in DB doar dupa ce profesorul da "Arata raspunsul"
    // (prin RPC reveal_question_scores)
  }

  if (loading) return <div className="loading container">Se incarca...</div>;
  if (error) return (<div className="container" style={{padding:'4rem 0', textAlign:'center'}}><h2>{error}</h2><Link href="/multiplayer" className="btn btn-primary" style={{marginTop:'1rem'}}>Inapoi</Link></div>);

  if (room.status === 'waiting') {
    return (
      <div style={{minHeight:'90vh', display:'flex', alignItems:'center', justifyContent:'center', padding:'2rem 1.5rem', background:'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'}}>
        <div style={{maxWidth:'500px', width:'100%'}}>
          <div style={{background:'white', borderRadius:'20px', padding:'2.5rem', textAlign:'center'}}>
            <div style={{fontSize:'4rem'}}>{player.avatar_emoji}</div>
            <h2 style={{color:'#1e293b', marginTop:'1rem'}}>{player.nickname}</h2>
            <div style={{padding:'1rem', background:'#ede9fe', borderRadius:'12px', margin:'1.5rem 0', color:'#5b21b6'}}>
              <div style={{fontSize:'0.95rem', marginBottom:'0.5rem'}}>Esti in camera:</div>
              <div style={{fontSize:'1.3rem', fontWeight:700}}>{room.chapter_emoji} {room.chapter_name}</div>
            </div>
            <div style={{padding:'1.5rem 0'}}>
              <div style={{fontSize:'3rem'}}>⏳</div>
              <div style={{color:'#64748b', marginTop:'0.5rem', fontSize:'1.1rem'}}>Astept ca profesorul sa porneasca jocul...</div>
            </div>
            <div style={{padding:'1rem', background:'#f8fafc', borderRadius:'12px', fontSize:'0.95rem', color:'#475569'}}>
              👥 {players.length} {players.length === 1 ? 'jucator' : 'jucatori'} in camera
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (room.status === 'finished') {
    const myRank = players.findIndex(p => p.id === player.id) + 1;
    const isWinner = myRank === 1;
    const isPodium = myRank <= 3;
    return (
      <div style={{minHeight:'90vh', padding:'2rem 1.5rem', background:'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'}}>
        <div style={{maxWidth:'500px', margin:'0 auto'}}>
          <div style={{background: isWinner ? 'linear-gradient(135deg, #fcd34d, #d97706)' : isPodium ? 'linear-gradient(135deg, #ddd6fe, #c4b5fd)' : 'white', borderRadius:'20px', padding:'2.5rem', textAlign:'center', color: isWinner ? 'white' : '#1e293b'}}>
            <div style={{fontSize:'5rem'}}>{isWinner ? '🏆' : myRank === 2 ? '🥈' : myRank === 3 ? '🥉' : '🎯'}</div>
            <h1 style={{fontSize:'2rem', marginTop:'1rem'}}>{isWinner ? 'Felicitari!' : isPodium ? `Locul ${myRank}!` : `Locul ${myRank} din ${players.length}`}</h1>
            <div style={{fontSize:'4rem', fontWeight:900, margin:'1rem 0', color: isWinner ? 'white' : '#5b21b6'}}>{player.score}</div>
            <div style={{fontSize:'1.1rem'}}>puncte • {player.correct_answers} corecte</div>
          </div>
          <Link href="/multiplayer" style={{display:'block', textAlign:'center', padding:'1rem', marginTop:'1.5rem', background:'white', color:'#5b21b6', borderRadius:'12px', textDecoration:'none', fontWeight:700}}>🎮 Joc nou</Link>
        </div>
      </div>
    );
  }

  if (room.status === 'playing' && currentQuestion) {
    const myRank = players.findIndex(p => p.id === player.id) + 1;
    const showResult = hasAnswered && room.show_results === true;
    const timeExpired = !hasAnswered && room.show_results === true;
    
    if (timeExpired) {
      return (
        <div style={{minHeight:"90vh", display:"flex", alignItems:"center", justifyContent:"center", padding:"2rem 1.5rem", background:"linear-gradient(135deg, #f59e0b, #d97706)"}}>
          <div style={{maxWidth:"500px", width:"100%", textAlign:"center", color:"white"}}>
            <div style={{fontSize:"6rem"}}>⏰</div>
            <h1 style={{fontSize:"2.5rem", marginTop:"1rem"}}>Timpul a expirat!</h1>
            <div style={{fontSize:"1.2rem", marginTop:"1rem", opacity:0.95}}>Nu ai răspuns la această întrebare.</div>
            {currentQuestion && (
              <div style={{background:"rgba(255,255,255,0.25)", padding:"1.25rem", borderRadius:"12px", marginTop:"1.5rem"}}>
                <div style={{fontSize:"0.95rem", opacity:0.9, marginBottom:"0.5rem"}}>Răspunsul corect era:</div>
                <div style={{fontSize:"1.5rem", fontWeight:800}}>{currentQuestion.correct_answer}</div>
              </div>
            )}
            <div style={{background:"rgba(255,255,255,0.2)", padding:"1.5rem", borderRadius:"16px", marginTop:"2rem"}}>
              <div style={{fontSize:"2.5rem"}}>{player.avatar_emoji}</div>
              <div style={{fontSize:"1.3rem", fontWeight:700}}>{player.nickname}</div>
              <div style={{fontSize:"2rem", fontWeight:900, marginTop:"1rem"}}>{player.score} pct</div>
            </div>
            <div style={{marginTop:"2rem", fontSize:"1.1rem"}}>⏳ Astept urmatoarea intrebare...</div>
          </div>
        </div>
      );
    }
    
    if (hasAnswered && !showResult) {
      // Jucatorul a raspuns - astepta rezultatul de la profesor
      // Aratam scorul FARA noile puncte (ele se adauga doar la reveal)
      return (
        <div style={{minHeight:'90vh', display:'flex', alignItems:'center', justifyContent:'center', padding:'2rem 1.5rem', background:'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'}}>
          <div style={{maxWidth:'500px', width:'100%', textAlign:'center', color:'white'}}>
            <div style={{fontSize:'6rem'}}>✅</div>
            <h1 style={{fontSize:'2rem', marginTop:'1rem'}}>Raspuns trimis!</h1>
            <div style={{fontSize:'1.2rem', marginTop:'1rem', opacity:0.9}}>Astept ca profesorul sa arate raspunsul...</div>
            <div style={{background:'rgba(255,255,255,0.2)', padding:'1.5rem', borderRadius:'16px', marginTop:'2rem'}}>
              <div style={{fontSize:'2.5rem'}}>{player.avatar_emoji}</div>
              <div style={{fontSize:'1.3rem', fontWeight:700}}>{player.nickname}</div>
              <div style={{fontSize:'2rem', fontWeight:900, marginTop:'1rem'}}>{player.score} pct</div>
            </div>
          </div>
        </div>
      );
    }
    
    if (showResult) {
      // Profesorul a aratat raspunsul - jucatorul vede acum corect/gresit
      return (
        <div style={{minHeight:'90vh', display:'flex', alignItems:'center', justifyContent:'center', padding:'2rem 1.5rem', background: isCorrect ? 'linear-gradient(135deg, #10b981, #059669)' : 'linear-gradient(135deg, #ef4444, #dc2626)'}}>
          <div style={{maxWidth:'500px', width:'100%', textAlign:'center', color:'white'}}>
            <div style={{fontSize:'6rem'}}>{isCorrect ? '✅' : '❌'}</div>
            <h1 style={{fontSize:'2.5rem', marginTop:'1rem'}}>{isCorrect ? 'Corect!' : 'Gresit!'}</h1>
            {isCorrect && <div style={{fontSize:'2rem', fontWeight:700}}>+{pointsEarned} puncte</div>}
            {!isCorrect && currentQuestion && (
              <div style={{background:'rgba(255,255,255,0.25)', padding:'1.25rem', borderRadius:'12px', marginTop:'1.5rem', fontSize:'1.1rem'}}>
                <div style={{fontSize:'0.95rem', opacity:0.9, marginBottom:'0.5rem'}}>Răspunsul corect era:</div>
                <div style={{fontSize:'1.5rem', fontWeight:800}}>{currentQuestion.correct_answer}</div>
              </div>
            )}
            <div style={{background:'rgba(255,255,255,0.2)', padding:'1.5rem', borderRadius:'16px', marginTop:'2rem'}}>
              <div style={{fontSize:'2.5rem'}}>{player.avatar_emoji}</div>
              <div style={{fontSize:'1.3rem', fontWeight:700}}>{player.nickname}</div>
              <div style={{display:'flex', justifyContent:'space-around', marginTop:'1rem'}}>
                <div><div style={{fontSize:'2rem', fontWeight:900}}>{player.score}</div><div style={{fontSize:'0.9rem'}}>puncte</div></div>
                <div><div style={{fontSize:'2rem', fontWeight:900}}>#{myRank}</div><div style={{fontSize:'0.9rem'}}>din {players.length}</div></div>
              </div>
            </div>
            <div style={{marginTop:'2rem', fontSize:'1.1rem'}}>⏳ Astept urmatoarea intrebare...</div>
          </div>
        </div>
      );
    }
    
    const hasFlag = currentQuestion.image_description && currentQuestion.image_description.startsWith('FLAG_IMAGE:');
    const flagIso = hasFlag ? currentQuestion.image_description.replace('FLAG_IMAGE:', '') : null;
    return (
      <div style={{minHeight:'90vh', padding:'1rem', background:'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'}}>
        <div style={{maxWidth:'600px', margin:'0 auto'}}>
          <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', background:'white', padding:'0.75rem 1rem', borderRadius:'12px', marginBottom:'1rem'}}>
            <div style={{display:'flex', alignItems:'center', gap:'0.5rem'}}>
              <div style={{fontSize:'1.5rem'}}>{player.avatar_emoji}</div>
              <div style={{fontWeight:700, color:'#1e293b'}}>{player.nickname}</div>
            </div>
            <div style={{display:'flex', gap:'1rem'}}>
              <div style={{textAlign:'center'}}><div style={{fontWeight:800, color:'#5b21b6'}}>{player.score}</div><div style={{fontSize:'0.7rem', color:'#64748b'}}>puncte</div></div>
              <div style={{textAlign:'center'}}><div style={{fontWeight:800, color:'#5b21b6'}}>#{myRank}</div><div style={{fontSize:'0.7rem', color:'#64748b'}}>loc</div></div>
            </div>
          </div>
          <div style={{background:'white', borderRadius:'16px', padding:'1.5rem', marginBottom:'1rem'}}>
            <div style={{fontSize:'0.85rem', color:'#64748b'}}>Intrebarea {room.current_question_idx + 1} / {room.question_count}</div>
            <div style={{fontSize:'1.2rem', fontWeight:600, color:'#1e293b'}}>{currentQuestion.question_text}</div>
            {hasFlag && (<div style={{textAlign:'center', marginTop:'1rem'}}><img src={`https://flagcdn.com/w320/${flagIso}.png`} alt="Steag" style={{maxWidth:'200px', borderRadius:'8px'}} /></div>)}
          </div>
          {currentQuestion.type === 'multiple_choice' ? (
            <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'0.75rem'}}>
              {[{key:'option_a',color:'#ef4444',shape:'▲'},{key:'option_b',color:'#3b82f6',shape:'◆'},{key:'option_c',color:'#eab308',shape:'●'},{key:'option_d',color:'#22c55e',shape:'■'}].map(({key,color,shape}) => {
                const opt = currentQuestion[key];
                if (!opt) return null;
                return (<button key={key} onClick={() => submitAnswer(opt)} style={{padding:'2rem 1rem', background: color, color:'white', border:'none', borderRadius:'12px', fontSize:'1.1rem', fontWeight:700, cursor:'pointer', minHeight:'120px', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', gap:'0.5rem'}}><div style={{fontSize:'2rem'}}>{shape}</div><div>{opt}</div></button>);
              })}
            </div>
          ) : (
            <div style={{background:'white', borderRadius:'16px', padding:'1.5rem'}}>
              <input type="text" placeholder="Scrie raspunsul..." value={fillAnswer} onChange={e => setFillAnswer(e.target.value)} onKeyDown={e => e.key === 'Enter' && submitAnswer(fillAnswer)} autoFocus style={{width:'100%', padding:'1rem', fontSize:'1.2rem', border:'2px solid #e2e8f0', borderRadius:'12px', marginBottom:'1rem'}} />
              <button onClick={() => submitAnswer(fillAnswer)} style={{width:'100%', padding:'1rem', background:'linear-gradient(135deg, #8b5cf6, #6d28d9)', color:'white', border:'none', borderRadius:'12px', fontSize:'1.1rem', fontWeight:700, cursor:'pointer'}}>Trimite raspunsul</button>
            </div>
          )}
        </div>
      </div>
    );
  }

  return <div className="loading container">Se incarca...</div>;
}
