import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { supabase } from '../../lib/supabase';
import { useEffect } from 'react';

const CHAPTERS_LIST = [
  { id: 1, name: 'Geografie Generala', emoji: '🌍' },
  { id: 2, name: 'Quiz Romania', emoji: '🇷🇴' },
  { id: 3, name: 'Europa', emoji: '🏰' },
  { id: 4, name: 'Asia', emoji: '🏯' },
  { id: 5, name: 'Africa', emoji: '🦁' },
  { id: 6, name: 'America de Nord', emoji: '🗽' },
  { id: 7, name: 'America de Sud', emoji: '🌴' },
  { id: 8, name: 'Oceania', emoji: '🦘' },
  { id: 9, name: 'Antarctica', emoji: '🐧' },
    { id: 12, name: 'Steaguri', emoji: '🚩' },
  { id: 13, name: 'Bacalaureat', emoji: '🎓' },

];

export default function MultiplayerHome() {
  const router = useRouter();
  const [mode, setMode] = useState('choose');
  const [roomCode, setRoomCode] = useState('');
  const [nickname, setNickname] = useState('');
  const [selectedChapter, setSelectedChapter] = useState(1);
  const [questionCount, setQuestionCount] = useState(10);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [savedRooms, setSavedRooms] = useState([]);
  const [isTeacher, setIsTeacher] = useState(false);
  const [showSaveDialog, setShowSaveDialog] = useState(false);
  const [saveRoomName, setSaveRoomName] = useState('');
  const [pendingRoom, setPendingRoom] = useState(null);
  
  useEffect(() => {
    (async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (session) {
        setIsTeacher(true);
        const { data: rooms } = await supabase.from('teacher_rooms').select('*').eq('user_id', session.user.id).order('last_used_at', { ascending: false, nullsFirst: false }).limit(5);
        setSavedRooms(rooms || []);
      }
    })();
  }, []);

  function generateRoomCode() {
    return Math.floor(100000 + Math.random() * 900000).toString();
  }

  async function createRoom() {
    setLoading(true);
    setError('');
    
    const { data: { session } } = await supabase.auth.getSession();
    if (!session) {
      setError('Trebuie sa fii autentificat ca sa creezi o camera.');
      setLoading(false);
      return;
    }

    // Rate limit: max 10 camere per user/oră
    const { data: rateCheck } = await supabase.rpc('check_room_creation_limit', { 
      p_user_id: session.user.id 
    });
    if (rateCheck && !rateCheck.allowed) {
      setError(`Prea multe camere create. Așteaptă ${rateCheck.retry_after_minutes} min.`);
      setLoading(false);
      return;
    }

    const { data: profile } = await supabase.from('profiles').select('username').eq('id', session.user.id).single();
    const hostName = profile?.username || 'Profesor';

    const chapter = CHAPTERS_LIST.find(c => c.id === selectedChapter);
    
    const { data: questions } = await supabase
      .from('questions')
      .select('id')
      .eq('chapter_id', selectedChapter);
    
    if (!questions || questions.length === 0) {
      setError('Nu exista intrebari pentru acest capitol.');
      setLoading(false);
      return;
    }

    const shuffled = [...questions].sort(() => Math.random() - 0.5).slice(0, questionCount);
    const questionIds = shuffled.map(q => q.id);

    let code = generateRoomCode();
    let attempts = 0;
    while (attempts < 5) {
      const { data: existing } = await supabase.from('multiplayer_rooms').select('id').eq('room_code', code).maybeSingle();
      if (!existing) break;
      code = generateRoomCode();
      attempts++;
    }

    const { data: room, error: roomError } = await supabase.from('multiplayer_rooms').insert({
      room_code: code,
      host_id: session.user.id,
      host_name: hostName,
      chapter_id: selectedChapter,
      chapter_name: chapter.name,
      chapter_emoji: chapter.emoji,
      question_count: questionCount,
      question_ids: questionIds,
      status: 'waiting'
    }).select().single();

    if (roomError) {
      setError('Eroare la crearea camerei: ' + roomError.message);
      setLoading(false);
      return;
    }

    // Ofer optiune de salvare template daca nu e deja salvat cu aceste setari
    const alreadySaved = savedRooms.some(r => r.chapter_id === selectedChapter && r.question_count === questionCount);
    if (isTeacher && !alreadySaved && savedRooms.length < 10) {
      setPendingRoom({ code, chapter, chapter_id: selectedChapter, question_count: questionCount });
      setShowSaveDialog(true);
      setLoading(false);
      return;
    }
    // Update last_used pentru template existent
    if (alreadySaved) {
      const existingTemplate = savedRooms.find(r => r.chapter_id === selectedChapter && r.question_count === questionCount);
      if (existingTemplate) {
        await supabase.from('teacher_rooms').update({ 
          times_used: existingTemplate.times_used + 1,
          last_used_at: new Date().toISOString()
        }).eq('id', existingTemplate.id);
      }
    }
    router.push(`/multiplayer/host/${code}`);
  }

  async function saveTemplate() {
    if (!pendingRoom || !saveRoomName.trim()) return;
    const { data: { session } } = await supabase.auth.getSession();
    await supabase.from('teacher_rooms').insert({
      user_id: session.user.id,
      room_name: saveRoomName.trim(),
      chapter_id: pendingRoom.chapter_id,
      question_count: pendingRoom.question_count,
      times_used: 1,
      last_used_at: new Date().toISOString()
    });
    setShowSaveDialog(false);
    router.push(`/multiplayer/host/${pendingRoom.code}`);
  }

  function skipSave() {
    setShowSaveDialog(false);
    router.push(`/multiplayer/host/${pendingRoom.code}`);
  }

  async function useTemplate(template) {
    setSelectedChapter(template.chapter_id);
    setQuestionCount(template.question_count);
    // Auto-scroll pentru feedback vizual
    window.scrollTo({ top: 300, behavior: 'smooth' });
  }

  async function deleteTemplate(templateId) {
    if (!confirm('Sigur vrei sa stergi acest template?')) return;
    await supabase.from('teacher_rooms').delete().eq('id', templateId);
    setSavedRooms(savedRooms.filter(r => r.id !== templateId));
  }

  async function createDuel() {
    setLoading(true);
    setError('');
    const { data: { session } } = await supabase.auth.getSession();
    if (!session) {
      setError('Trebuie sa fii autentificat pentru duel.');
      setLoading(false);
      return;
    }
    const { data: profile } = await supabase.from('profiles').select('username').eq('id', session.user.id).single();
    const hostName = profile?.username || 'Jucator';
    // Rate limit: max 10 dueluri per user/oră
    const { data: rateDuel } = await supabase.rpc('check_room_creation_limit', { 
      p_user_id: session.user.id 
    });
    if (rateDuel && !rateDuel.allowed) {
      setError(`Prea multe dueluri create. Așteaptă ${rateDuel.retry_after_minutes} min.`);
      setLoading(false);
      return;
    }
    const chapter = CHAPTERS_LIST.find(c => c.id === selectedChapter);
    const { data: questions } = await supabase.from('questions').select('id').eq('chapter_id', selectedChapter);
    if (!questions || questions.length < 10) {
      setError('Nu exista suficient intrebari pentru duel (min 10).');
      setLoading(false);
      return;
    }
    const shuffled = [...questions].sort(() => Math.random() - 0.5).slice(0, 10);
    const questionIds = shuffled.map(q => q.id);
    let code = generateRoomCode();
    let attempts = 0;
    while (attempts < 5) {
      const { data: existing } = await supabase.from('multiplayer_rooms').select('id').eq('room_code', code).maybeSingle();
      if (!existing) break;
      code = generateRoomCode();
      attempts++;
    }
    const { data: room, error: roomError } = await supabase.from('multiplayer_rooms').insert({
      room_code: code,
      host_id: session.user.id,
      host_name: hostName,
      chapter_id: selectedChapter,
      chapter_name: chapter.name,
      chapter_emoji: chapter.emoji,
      question_count: 10,
      question_ids: questionIds,
      status: 'waiting',
      is_duel: true,
      max_players: 2
    }).select().single();
    if (roomError) {
      setError('Eroare la crearea duelului: ' + roomError.message);
      setLoading(false);
      return;
    }
    router.push(`/multiplayer/host/${code}`);
  }

  async function joinRoom() {
    setLoading(true);
    setError('');

    if (roomCode.length !== 6) {
      setError('Codul trebuie sa aiba 6 cifre.');
      setLoading(false);
      return;
    }

    if (nickname.trim().length < 2) {
      setError('Numele trebuie sa aiba minim 2 caractere.');
      setLoading(false);
      return;
    }

    const { data: room } = await supabase
      .from('multiplayer_rooms')
      .select('*')
      .eq('room_code', roomCode)
      .maybeSingle();

    if (!room) {
      setError('Camera nu exista. Verifica codul.');
      setLoading(false);
      return;
    }

    if (room.status === 'finished') {
      setError('Aceasta camera s-a terminat deja.');
      setLoading(false);
      return;
    }

    // RECONECTARE HIBRIDA: verifica localStorage SI nickname
    const existingPlayerId = typeof window !== 'undefined' ? localStorage.getItem(`mp_player_${roomCode}`) : null;
    if (existingPlayerId) {
      const { data: existingPlayer } = await supabase
        .from('multiplayer_players')
        .select('*')
        .eq('id', existingPlayerId)
        .eq('room_id', room.id)
        .maybeSingle();
      
      // Reconectare DOAR daca tasteaza ACELASI nickname
      if (existingPlayer && existingPlayer.nickname.toLowerCase().trim() === nickname.toLowerCase().trim()) {
        router.push(`/multiplayer/play/${roomCode}`);
        return;
      }
      // Daca nickname diferit, sterge localStorage vechi si creeaza player nou
      if (typeof window !== 'undefined') {
        localStorage.removeItem(`mp_player_${roomCode}`);
      }
    }

    // VERIFICARE IN DB: exista deja un player cu acest nickname in camera?
    // (cazul cand localStorage a fost suprascris de alt elev pe acelasi device)
    const { data: playerByNickname } = await supabase
      .from('multiplayer_players')
      .select('*')
      .eq('room_id', room.id)
      .ilike('nickname', nickname.trim())
      .maybeSingle();
    
    if (playerByNickname) {
      // Player cu acest nickname exista deja - reconectare prin nickname
      if (typeof window !== 'undefined') {
        localStorage.setItem(`mp_player_${roomCode}`, playerByNickname.id);
      }
      router.push(`/multiplayer/play/${roomCode}`);
      return;
    }

    // Daca jocul a inceput deja si elevul nu are reconectare valida, accepta intrare noua
    // (elev intarziat care intra in timpul jocului)
    const { data: { session } } = await supabase.auth.getSession();
    
    const avatars = ['😀', '😎', '🤓', '😺', '🦊', '🐼', '🦁', '🐯', '🐸', '🦄', '🐳', '🦋', '🌟', '⚡', '🔥'];
    const avatar = avatars[Math.floor(Math.random() * avatars.length)];

    const { data: player, error: playerError } = await supabase.from('multiplayer_players').insert({
      room_id: room.id,
      user_id: session?.user?.id || null,
      nickname: nickname.trim(),
      avatar_emoji: avatar
    }).select().single();

    if (playerError) {
      setError('Eroare la conectare: ' + playerError.message);
      setLoading(false);
      return;
    }

    if (typeof window !== 'undefined') {
      localStorage.setItem(`mp_player_${roomCode}`, player.id);
    }

    router.push(`/multiplayer/play/${roomCode}`);
  }

  if (mode === 'choose') {
    return (
      <div style={{minHeight:'80vh', display:'flex', alignItems:'center', justifyContent:'center', padding:'2rem 1.5rem', background:'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'}}>
        <div style={{maxWidth:'500px', width:'100%'}}>
          <div style={{textAlign:'center', marginBottom:'2rem', color:'white'}}>
            <div style={{fontSize:'4rem'}}>🎮</div>
            <h1 style={{fontSize:'2.2rem', marginTop:'1rem'}}>Multiplayer</h1>
            <p style={{fontSize:'1.1rem', opacity:0.9}}>Joaca cu prietenii sau cu clasa ta!</p>
          </div>
          <div style={{background:'white', borderRadius:'20px', padding:'2rem', boxShadow:'0 10px 40px rgba(0,0,0,0.2)'}}>
            <button onClick={() => setMode('create')} style={{width:'100%', padding:'1.5rem', background:'linear-gradient(135deg, #8b5cf6, #6d28d9)', color:'white', border:'none', borderRadius:'12px', fontSize:'1.2rem', fontWeight:700, cursor:'pointer', marginBottom:'1rem', boxShadow:'0 4px 12px rgba(139, 92, 246, 0.4)'}}>
              👨‍🏫 Creeaza camera (host)
            </button>
            <button onClick={() => setMode('duel')} style={{width:'100%', padding:'1.5rem', background:'linear-gradient(135deg, #dc2626, #b91c1c)', color:'white', border:'none', borderRadius:'12px', fontSize:'1.2rem', fontWeight:700, cursor:'pointer', marginBottom:'1rem', boxShadow:'0 4px 12px rgba(220, 38, 38, 0.4)'}}>
              ⚔️ Duel 1v1 rapid
            </button>
            <button onClick={() => setMode('join')} style={{width:'100%', padding:'1.5rem', background:'linear-gradient(135deg, #10b981, #059669)', color:'white', border:'none', borderRadius:'12px', fontSize:'1.2rem', fontWeight:700, cursor:'pointer', boxShadow:'0 4px 12px rgba(16, 185, 129, 0.4)'}}>
              🎯 Intra cu cod
            </button>
            <Link href="/" style={{display:'block', textAlign:'center', marginTop:'1.5rem', color:'#64748b', textDecoration:'none', fontSize:'0.95rem'}}>
              ← Inapoi la pagina principala
            </Link>
          </div>
        </div>
      </div>
    );
  }

  if (mode === 'duel') {
    return (
      <div style={{minHeight:'80vh', padding:'2rem 1.5rem', background:'linear-gradient(135deg, #dc2626 0%, #7f1d1d 100%)'}}>
        <div style={{maxWidth:'500px', margin:'0 auto'}}>
          <div style={{textAlign:'center', marginBottom:'2rem', color:'white'}}>
            <div style={{fontSize:'4rem'}}>⚔️</div>
            <h1 style={{fontSize:'2rem'}}>Duel 1v1</h1>
            <p style={{opacity:0.9}}>10 întrebări. Cel mai bun câștigă!</p>
          </div>
          <div style={{background:'white', borderRadius:'20px', padding:'2rem', boxShadow:'0 10px 40px rgba(0,0,0,0.2)'}}>
            <div style={{background:'linear-gradient(135deg, #fef3c7, #fde68a)', padding:'1rem', borderRadius:'12px', marginBottom:'1.5rem', textAlign:'center'}}>
              <div style={{fontWeight:800, color:'#78350f', marginBottom:'0.25rem'}}>🎯 Cum funcționează</div>
              <div style={{fontSize:'0.9rem', color:'#78350f'}}>Alegi capitol → generezi cod → prietenul intră cu codul → 10 întrebări → câștigătorul primește puncte!</div>
            </div>
            <div style={{marginBottom:'1.5rem'}}>
              <label style={{fontWeight:600, color:'#1e293b', marginBottom:'0.5rem', display:'block'}}>Capitol:</label>
              <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(140px, 1fr))', gap:'0.5rem'}}>
                {CHAPTERS_LIST.map(c => (
                  <button key={c.id} onClick={() => setSelectedChapter(c.id)} style={{padding:'0.75rem', borderRadius:'8px', border: selectedChapter === c.id ? '2px solid #dc2626' : '2px solid #e2e8f0', background: selectedChapter === c.id ? '#fee2e2' : 'white', cursor:'pointer', fontSize:'0.9rem', fontWeight:600, color:'#1e293b'}}>
                    <div style={{fontSize:'1.5rem'}}>{c.emoji}</div>
                    <div>{c.name}</div>
                  </button>
                ))}
              </div>
            </div>
            {error && <div style={{padding:'0.75rem', background:'#fee2e2', color:'#991b1b', borderRadius:'8px', marginBottom:'1rem'}}>{error}</div>}
            <button onClick={createDuel} disabled={loading} style={{width:'100%', padding:'1rem', background:'linear-gradient(135deg, #dc2626, #b91c1c)', color:'white', border:'none', borderRadius:'12px', fontSize:'1.1rem', fontWeight:700, cursor: loading ? 'wait' : 'pointer'}}>
              {loading ? 'Se pregatește duelul...' : '⚔️ Start Duel'}
            </button>
            <button onClick={() => setMode('choose')} style={{width:'100%', padding:'0.75rem', marginTop:'0.5rem', background:'transparent', color:'#64748b', border:'none', cursor:'pointer', fontSize:'0.95rem'}}>
              ← Inapoi
            </button>
          </div>
        </div>
      </div>
    );
  }

    if (mode === 'create') {
    return (
      <div style={{minHeight:'80vh', padding:'2rem 1.5rem', background:'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'}}>
        <div style={{maxWidth:'600px', margin:'0 auto'}}>
          <div style={{textAlign:'center', marginBottom:'2rem', color:'white'}}>
            <h1 style={{fontSize:'2rem'}}>👨‍🏫 Creeaza camera</h1>
            <p style={{opacity:0.9}}>Alege capitolul si numarul de intrebari</p>
          </div>
          {savedRooms.length > 0 && (
            <div style={{background:'linear-gradient(135deg, #fef3c7, #fde68a)', borderRadius:'16px', padding:'1.25rem', marginBottom:'1rem', border:'2px solid #f59e0b'}}>
              <div style={{fontWeight:800, color:'#78350f', marginBottom:'0.75rem', fontSize:'0.95rem'}}>⭐ Camerele mele salvate</div>
              <div style={{display:'flex', flexDirection:'column', gap:'0.5rem'}}>
                {savedRooms.map(t => (
                  <div key={t.id} style={{background:'white', padding:'0.75rem 1rem', borderRadius:'10px', display:'flex', alignItems:'center', gap:'0.75rem', boxShadow:'0 2px 6px rgba(0,0,0,0.08)'}}>
                    <div style={{fontSize:'1.5rem'}}>{t.room_emoji || '🏫'}</div>
                    <div style={{flex:1}}>
                      <div style={{fontWeight:700, color:'#1e293b', fontSize:'0.95rem'}}>{t.room_name}</div>
                      <div style={{fontSize:'0.75rem', color:'#64748b'}}>{t.question_count} intrebari • folosit {t.times_used}x</div>
                    </div>
                    <button onClick={() => useTemplate(t)} style={{padding:'0.5rem 0.9rem', background:'linear-gradient(135deg, #8b5cf6, #6d28d9)', color:'white', border:'none', borderRadius:'8px', fontWeight:700, cursor:'pointer', fontSize:'0.85rem'}}>Folosește</button>
                    <button onClick={() => deleteTemplate(t.id)} style={{padding:'0.5rem 0.7rem', background:'#fee2e2', color:'#991b1b', border:'none', borderRadius:'8px', fontWeight:700, cursor:'pointer', fontSize:'0.85rem'}}>×</button>
                  </div>
                ))}
              </div>
            </div>
          )}
          {showSaveDialog && (
            <div style={{background:'linear-gradient(135deg, #ddd6fe, #c4b5fd)', borderRadius:'16px', padding:'1.5rem', marginBottom:'1rem', border:'2px solid #8b5cf6'}}>
              <div style={{fontWeight:800, color:'#5b21b6', marginBottom:'0.75rem', fontSize:'1rem'}}>💾 Salvează ca template?</div>
              <div style={{color:'#5b21b6', fontSize:'0.9rem', marginBottom:'1rem'}}>Vei putea folosi rapid data viitoare fără să alegi setările din nou.</div>
              <input type="text" placeholder='Ex: Clasa 12A - BAC' value={saveRoomName} onChange={e => setSaveRoomName(e.target.value)} style={{width:'100%', padding:'0.75rem', border:'2px solid #8b5cf6', borderRadius:'8px', marginBottom:'0.75rem', fontSize:'1rem'}} autoFocus />
              <div style={{display:'flex', gap:'0.5rem'}}>
                <button onClick={saveTemplate} disabled={!saveRoomName.trim()} style={{flex:1, padding:'0.85rem', background: saveRoomName.trim() ? 'linear-gradient(135deg, #8b5cf6, #6d28d9)' : '#e2e8f0', color: saveRoomName.trim() ? 'white' : '#94a3b8', border:'none', borderRadius:'10px', fontWeight:700, cursor: saveRoomName.trim() ? 'pointer' : 'not-allowed'}}>💾 Salvează</button>
                <button onClick={skipSave} style={{flex:1, padding:'0.85rem', background:'white', color:'#5b21b6', border:'2px solid #8b5cf6', borderRadius:'10px', fontWeight:700, cursor:'pointer'}}>Sari peste</button>
              </div>
            </div>
          )}
          <div style={{background:'white', borderRadius:'20px', padding:'2rem', boxShadow:'0 10px 40px rgba(0,0,0,0.2)'}}>
            <div style={{marginBottom:'1.5rem'}}>
              <label style={{fontWeight:600, color:'#1e293b', marginBottom:'0.5rem', display:'block'}}>Capitol:</label>
              <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(140px, 1fr))', gap:'0.5rem'}}>
                {CHAPTERS_LIST.map(c => (
                  <button key={c.id} onClick={() => setSelectedChapter(c.id)} style={{padding:'0.75rem', borderRadius:'8px', border: selectedChapter === c.id ? '2px solid #8b5cf6' : '2px solid #e2e8f0', background: selectedChapter === c.id ? '#ede9fe' : 'white', cursor:'pointer', fontSize:'0.9rem', fontWeight:600, color:'#1e293b'}}>
                    <div style={{fontSize:'1.5rem'}}>{c.emoji}</div>
                    <div>{c.name}</div>
                  </button>
                ))}
              </div>
            </div>
            <div style={{marginBottom:'1.5rem'}}>
              <label style={{fontWeight:600, color:'#1e293b', marginBottom:'0.5rem', display:'block'}}>Numar intrebari:</label>
              <div style={{display:'flex', gap:'0.5rem'}}>
                {[5, 10, 15, 20].map(n => (
                  <button key={n} onClick={() => setQuestionCount(n)} style={{flex:1, padding:'0.75rem', borderRadius:'8px', border: questionCount === n ? '2px solid #8b5cf6' : '2px solid #e2e8f0', background: questionCount === n ? '#ede9fe' : 'white', cursor:'pointer', fontSize:'1rem', fontWeight:700, color:'#1e293b'}}>
                    {n}
                  </button>
                ))}
              </div>
            </div>
            {error && <div style={{padding:'0.75rem', background:'#fee2e2', color:'#991b1b', borderRadius:'8px', marginBottom:'1rem'}}>{error}</div>}
            <button onClick={createRoom} disabled={loading} style={{width:'100%', padding:'1rem', background:'linear-gradient(135deg, #8b5cf6, #6d28d9)', color:'white', border:'none', borderRadius:'12px', fontSize:'1.1rem', fontWeight:700, cursor: loading ? 'wait' : 'pointer'}}>
              {loading ? 'Se creeaza...' : '🚀 Creeaza camera'}
            </button>
            <button onClick={() => setMode('choose')} style={{width:'100%', padding:'0.75rem', marginTop:'0.5rem', background:'transparent', color:'#64748b', border:'none', cursor:'pointer', fontSize:'0.95rem'}}>
              ← Inapoi
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={{minHeight:'80vh', display:'flex', alignItems:'center', justifyContent:'center', padding:'2rem 1.5rem', background:'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'}}>
      <div style={{maxWidth:'500px', width:'100%'}}>
        <div style={{textAlign:'center', marginBottom:'2rem', color:'white'}}>
          <div style={{fontSize:'4rem'}}>🎯</div>
          <h1 style={{fontSize:'2.2rem', marginTop:'1rem'}}>Intra in camera</h1>
          <p style={{opacity:0.9}}>Introdu codul de 6 cifre primit de la profesor</p>
        </div>
        <div style={{background:'white', borderRadius:'20px', padding:'2rem', boxShadow:'0 10px 40px rgba(0,0,0,0.2)'}}>
          <div style={{marginBottom:'1.5rem'}}>
            <label style={{fontWeight:600, color:'#1e293b', marginBottom:'0.5rem', display:'block'}}>Cod camera:</label>
            <input type="text" maxLength={6} placeholder="123456" value={roomCode} onChange={e => setRoomCode(e.target.value.replace(/\D/g, ''))} style={{width:'100%', padding:'1rem', fontSize:'2rem', textAlign:'center', letterSpacing:'0.5rem', fontWeight:700, border:'2px solid #e2e8f0', borderRadius:'12px', color:'#1e293b'}} />
          </div>
          <div style={{marginBottom:'1.5rem'}}>
            <label style={{fontWeight:600, color:'#1e293b', marginBottom:'0.5rem', display:'block'}}>Numele tau:</label>
            <input type="text" maxLength={20} placeholder="Ex: Andrei" value={nickname} onChange={e => setNickname(e.target.value)} style={{width:'100%', padding:'1rem', fontSize:'1.1rem', border:'2px solid #e2e8f0', borderRadius:'12px', color:'#1e293b'}} />
          </div>
          {error && <div style={{padding:'0.75rem', background:'#fee2e2', color:'#991b1b', borderRadius:'8px', marginBottom:'1rem'}}>{error}</div>}
          <button onClick={joinRoom} disabled={loading} style={{width:'100%', padding:'1rem', background:'linear-gradient(135deg, #10b981, #059669)', color:'white', border:'none', borderRadius:'12px', fontSize:'1.1rem', fontWeight:700, cursor: loading ? 'wait' : 'pointer'}}>
            {loading ? 'Se conecteaza...' : '🎮 Intra in joc'}
          </button>
          <button onClick={() => setMode('choose')} style={{width:'100%', padding:'0.75rem', marginTop:'0.5rem', background:'transparent', color:'#64748b', border:'none', cursor:'pointer', fontSize:'0.95rem'}}>
            ← Inapoi
          </button>
        </div>
      </div>
    </div>
  );
}
