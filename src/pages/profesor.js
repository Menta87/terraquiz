import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { supabase } from '../lib/supabase';

const CHAPTERS_BY_CLASS = {
  5: [1,2,3,4,5],
  6: [11,12,13],
  7: [14,15,16,72,17,73,18],
  8: [19,20,21,22,23,24,25]
};

export default function ProfesorPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [isTeacher, setIsTeacher] = useState(false);
  const [activating, setActivating] = useState(false);
  const [tests, setTests] = useState([]);
  const [chapters, setChapters] = useState([]);
  
  // Form state
  const [showForm, setShowForm] = useState(false);
  const [testName, setTestName] = useState('');
  const [selectedClass, setSelectedClass] = useState(8);
  const [selectedChapters, setSelectedChapters] = useState([]);
  const [questionCount, setQuestionCount] = useState(20);
  const [duration, setDuration] = useState(40);
  const [expectedStudents, setExpectedStudents] = useState('');
  const [creating, setCreating] = useState(false);
  const [error, setError] = useState('');
  const [questionSource, setQuestionSource] = useState('bank');
  const [myQuestions, setMyQuestions] = useState([]);
  const [selectedMyQuestions, setSelectedMyQuestions] = useState([]);

  useEffect(() => { load(); }, []);
  useEffect(() => { if (selectedClass) loadChapters(selectedClass); }, [selectedClass]);

  async function becomeTeacher() {
    setActivating(true);
    const { data: { session } } = await supabase.auth.getSession();
    if (!session) { router.push('/login'); return; }
    await supabase.from('profiles').update({ is_teacher: true }).eq('id', session.user.id);
    setIsTeacher(true);
    setActivating(false);
  }

  async function loadMyQuestions(teacherId) {
    const { data } = await supabase.from('teacher_questions').select('*').eq('teacher_id', teacherId).order('created_at', { ascending: false });
    setMyQuestions(data || []);
  }

  async function load() {
    const { data: { session } } = await supabase.auth.getSession();
    if (!session) { router.push('/login'); return; }
    
    const { data: profile } = await supabase.from('profiles').select('is_teacher, username').eq('id', session.user.id).single();
    if (!profile?.is_teacher) {
      setLoading(false);
      return;
    }
    setIsTeacher(true);
    loadMyQuestions(session.user.id);
    
    const { data: myTests } = await supabase.from('teacher_tests').select('*').eq('teacher_id', session.user.id).order('created_at', { ascending: false });
    setTests(myTests || []);
    setLoading(false);
  }

  async function loadChapters(classLevel) {
    const ids = CHAPTERS_BY_CLASS[classLevel] || [];
    const { data } = await supabase.from('school_chapters').select('id, chapter_name, chapter_emoji, question_count').in('id', ids).order('order_idx');
    setChapters(data || []);
    setSelectedChapters([]);
  }

  function toggleChapter(id) {
    setSelectedChapters(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]);
  }

  function toggleMyQuestion(id) {
    setSelectedMyQuestions(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]);
  }

  function generateCode() {
    return Math.random().toString(36).substring(2, 8).toUpperCase();
  }

  async function deleteTest(testId, testName) {
    if (!confirm(`Sigur vrei să ștergi testul "${testName}"? Se vor șterge și rezultatele elevilor asociate.`)) return;
    await supabase.from('teacher_tests').delete().eq('id', testId);
    load();
  }

  async function createTest() {
    setError('');
    if (!testName.trim()) return setError('Introdu numele testului');
    
    setCreating(true);
    const { data: { session } } = await supabase.auth.getSession();
    
    let questionIds = [];
    let chapterIdsToSave = null;
    let finalQuestionCount = questionCount;
    
    if (questionSource === 'bank') {
      if (selectedChapters.length === 0) { setError('Alege cel puțin un capitol'); setCreating(false); return; }
      const { data: allQuestions } = await supabase.from('school_questions').select('id').in('school_chapter_id', selectedChapters);
      if (!allQuestions || allQuestions.length < questionCount) {
        setError(`Nu există suficiente întrebări (disponibile: ${allQuestions?.length || 0}, cerute: ${questionCount})`);
        setCreating(false);
        return;
      }
      const shuffled = allQuestions.sort(() => Math.random() - 0.5).slice(0, questionCount);
      questionIds = shuffled.map(q => q.id);
      chapterIdsToSave = selectedChapters;
    } else {
      if (selectedMyQuestions.length === 0) { setError('Alege cel puțin o întrebare din banca ta'); setCreating(false); return; }
      questionIds = selectedMyQuestions;
      finalQuestionCount = selectedMyQuestions.length;
      chapterIdsToSave = [];
    }
    
    let code = generateCode();
    let attempts = 0;
    while (attempts < 5) {
      const { data: existing } = await supabase.from('teacher_tests').select('id').eq('test_code', code).maybeSingle();
      if (!existing) break;
      code = generateCode();
      attempts++;
    }
    
    const studentList = expectedStudents.split(/\n/).map(s => s.trim()).filter(s => s.length > 0);
    
    const { data: newTest, error: testError } = await supabase.from('teacher_tests').insert({
      teacher_id: session.user.id,
      test_name: testName.trim(),
      test_code: code,
      class_level: selectedClass,
      chapter_ids: chapterIdsToSave,
      question_count: finalQuestionCount,
      duration_minutes: duration,
      question_ids: questionIds,
      question_source: questionSource,
      expected_students: studentList
    }).select().single();
    
    if (testError) {
      setError('Eroare: ' + testError.message);
      setCreating(false);
      return;
    }
    
    setShowForm(false);
    setTestName('');
    setSelectedChapters([]);
    setSelectedMyQuestions([]);
    setExpectedStudents('');
    load();
    setCreating(false);
    alert('✅ Test creat! Cod: ' + code);
  }

  if (loading) return <div className="loading container">Se încarcă...</div>;
  
  if (!isTeacher) {
    return (
      <div className="container" style={{padding:'4rem 1.5rem', textAlign:'center', maxWidth:'600px'}}>
        <div style={{fontSize:'5rem'}}>🎓</div>
        <h1 style={{color:'#5b21b6'}}>Panou Profesor</h1>
        <p style={{color:'#64748b', fontSize:'1.1rem'}}>Ești cadru didactic? Activează panoul de profesor pentru a crea teste și a vedea rapoarte pentru clasele tale.</p>
        <button onClick={becomeTeacher} disabled={activating} style={{marginTop:'1.5rem', padding:'1rem 2rem', background:'linear-gradient(135deg, #0891b2, #0e7490)', color:'white', border:'none', borderRadius:'12px', fontWeight:800, fontSize:'1.05rem', cursor: activating ? 'wait' : 'pointer'}}>
          {activating ? 'Se activează...' : '🎓 Sunt profesor - Activează'}
        </button>
        <div style={{marginTop:'1rem'}}>
          <Link href="/" style={{color:'#64748b', textDecoration:'none', fontSize:'0.95rem'}}>← Înapoi la pagina principală</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container" style={{padding:'2rem 1.5rem', maxWidth:'1000px'}}>
      <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:'1.5rem', flexWrap:'wrap', gap:'1rem'}}>
        <div>
          <h1 style={{color:'#5b21b6', margin:0}}>🎓 Panou Profesor</h1>
          <p style={{color:'#64748b', margin:'0.25rem 0'}}>Creează teste și vizualizează rezultatele elevilor</p>
        </div>
        <div style={{display:'flex', gap:'0.75rem', flexWrap:'wrap'}}>
          <Link href="/profesor/intrebari" style={{padding:'0.85rem 1.5rem', background:'linear-gradient(135deg, #0891b2, #0e7490)', color:'white', borderRadius:'10px', fontWeight:700, textDecoration:'none', display:'inline-block'}}>📚 Banca mea de întrebări</Link>
          <button onClick={() => setShowForm(!showForm)} style={{padding:'0.85rem 1.5rem', background:'linear-gradient(135deg, #8b5cf6, #6d28d9)', color:'white', border:'none', borderRadius:'10px', fontWeight:700, cursor:'pointer', fontSize:'1rem'}}>
            {showForm ? '✕ Anulează' : '➕ Test nou'}
          </button>
        </div>
      </div>

      {showForm && (
        <div style={{background:'white', padding:'2rem', borderRadius:'16px', marginBottom:'2rem', boxShadow:'0 4px 12px rgba(0,0,0,0.08)'}}>
          <h2 style={{color:'#1e293b', marginTop:0}}>Creează test nou</h2>
          
          <div style={{marginBottom:'1rem'}}>
            <label style={{fontWeight:700, color:'#475569', display:'block', marginBottom:'0.5rem'}}>📝 Numele testului:</label>
            <input type="text" value={testName} onChange={e => setTestName(e.target.value)} placeholder="Ex: Test Recapitulare Europa - Clasa VI" style={{width:'100%', padding:'0.85rem', border:'2px solid #e2e8f0', borderRadius:'10px', fontSize:'1rem'}} />
          </div>

          <div style={{marginBottom:'1rem'}}>
            <label style={{fontWeight:700, color:'#475569', display:'block', marginBottom:'0.5rem'}}>🎓 Clasa:</label>
            <div style={{display:'flex', gap:'0.5rem'}}>
              {[5, 6, 7, 8].map(c => (
                <button key={c} onClick={() => setSelectedClass(c)} style={{flex:1, padding:'0.85rem', background: selectedClass === c ? 'linear-gradient(135deg, #8b5cf6, #6d28d9)' : '#f8fafc', color: selectedClass === c ? 'white' : '#475569', border:'2px solid ' + (selectedClass === c ? '#8b5cf6' : '#e2e8f0'), borderRadius:'10px', fontWeight:700, cursor:'pointer'}}>Clasa {c}</button>
              ))}
            </div>
          </div>

          <div style={{marginBottom:'1rem'}}>
            <label style={{fontWeight:700, color:'#475569', display:'block', marginBottom:'0.5rem'}}>🗂️ Sursa întrebărilor:</label>
            <div style={{display:'flex', gap:'0.5rem'}}>
              <button onClick={() => setQuestionSource('bank')} style={{flex:1, padding:'0.85rem', background: questionSource === 'bank' ? 'linear-gradient(135deg, #8b5cf6, #6d28d9)' : '#f8fafc', color: questionSource === 'bank' ? 'white' : '#475569', border:'2px solid ' + (questionSource === 'bank' ? '#8b5cf6' : '#e2e8f0'), borderRadius:'10px', fontWeight:700, cursor:'pointer'}}>📖 Banca TerraQuiz</button>
              <button onClick={() => setQuestionSource('custom')} style={{flex:1, padding:'0.85rem', background: questionSource === 'custom' ? 'linear-gradient(135deg, #0891b2, #0e7490)' : '#f8fafc', color: questionSource === 'custom' ? 'white' : '#475569', border:'2px solid ' + (questionSource === 'custom' ? '#0891b2' : '#e2e8f0'), borderRadius:'10px', fontWeight:700, cursor:'pointer'}}>✍️ Întrebările mele</button>
            </div>
          </div>

          {questionSource === 'bank' ? (
            <div style={{marginBottom:'1rem'}}>
              <label style={{fontWeight:700, color:'#475569', display:'block', marginBottom:'0.5rem'}}>📚 Capitole ({selectedChapters.length} selectate):</label>
              <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(200px, 1fr))', gap:'0.5rem'}}>
                {chapters.map(c => (
                  <button key={c.id} onClick={() => toggleChapter(c.id)} style={{padding:'0.75rem', background: selectedChapters.includes(c.id) ? '#ede9fe' : 'white', color:'#1e293b', border:'2px solid ' + (selectedChapters.includes(c.id) ? '#8b5cf6' : '#e2e8f0'), borderRadius:'10px', cursor:'pointer', textAlign:'left', fontSize:'0.9rem'}}>
                    <div style={{fontSize:'1.25rem'}}>{c.chapter_emoji}</div>
                    <div style={{fontWeight:700, marginTop:'0.25rem'}}>{c.chapter_name}</div>
                    <div style={{fontSize:'0.75rem', color:'#64748b', marginTop:'0.25rem'}}>{c.question_count} întrebări</div>
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div style={{marginBottom:'1rem'}}>
              <label style={{fontWeight:700, color:'#475569', display:'block', marginBottom:'0.5rem'}}>✍️ Alege întrebările ({selectedMyQuestions.length} selectate din {myQuestions.length}):</label>
              {myQuestions.length === 0 ? (
                <div style={{padding:'1.5rem', background:'#f8fafc', borderRadius:'10px', textAlign:'center', color:'#64748b'}}>
                  Nu ai întrebări create încă. <Link href="/profesor/intrebari" style={{color:'#0891b2', fontWeight:700}}>Creează prima ta întrebare →</Link>
                </div>
              ) : (
                <div style={{display:'flex', flexDirection:'column', gap:'0.5rem', maxHeight:'350px', overflowY:'auto'}}>
                  {myQuestions.map(q => (
                    <button key={q.id} onClick={() => toggleMyQuestion(q.id)} style={{padding:'0.85rem', background: selectedMyQuestions.includes(q.id) ? '#ecfeff' : 'white', border:'2px solid ' + (selectedMyQuestions.includes(q.id) ? '#0891b2' : '#e2e8f0'), borderRadius:'10px', cursor:'pointer', textAlign:'left', display:'flex', gap:'0.75rem', alignItems:'center'}}>
                      <div style={{fontSize:'1.3rem'}}>{selectedMyQuestions.includes(q.id) ? '✅' : '⬜'}</div>
                      <div style={{flex:1}}>
                        <div style={{fontSize:'0.75rem', color:'#0891b2', fontWeight:700}}>Clasa {q.class_level} • {q.type === 'multiple_choice' ? '🔘' : '✍️'}{q.image_url ? ' 🗺️' : ''}</div>
                        <div style={{fontWeight:600, color:'#1e293b', fontSize:'0.9rem'}}>{q.question_text}</div>
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}

          <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'1rem', marginBottom:'1rem'}}>
            {questionSource === 'bank' && (
              <div>
                <label style={{fontWeight:700, color:'#475569', display:'block', marginBottom:'0.5rem'}}>❓ Număr întrebări:</label>
                <input type="number" min="5" max="50" value={questionCount} onChange={e => setQuestionCount(parseInt(e.target.value) || 20)} style={{width:'100%', padding:'0.85rem', border:'2px solid #e2e8f0', borderRadius:'10px', fontSize:'1rem'}} />
              </div>
            )}
            <div>
              <label style={{fontWeight:700, color:'#475569', display:'block', marginBottom:'0.5rem'}}>⏱️ Durată (minute):</label>
              <input type="number" min="10" max="120" value={duration} onChange={e => setDuration(parseInt(e.target.value) || 40)} style={{width:'100%', padding:'0.85rem', border:'2px solid #e2e8f0', borderRadius:'10px', fontSize:'1rem'}} />
            </div>
          </div>

          <div style={{marginBottom:'1rem'}}>
            <label style={{fontWeight:700, color:'#475569', display:'block', marginBottom:'0.5rem'}}>👥 Lista elevilor (opțional - pentru detectare absenți):</label>
            <textarea value={expectedStudents} onChange={e => setExpectedStudents(e.target.value)} placeholder="Un nume pe fiecare linie:&#10;Popescu Andrei&#10;Ionescu Maria&#10;Georgescu Alex" rows={6} style={{width:'100%', padding:'0.85rem', border:'2px solid #e2e8f0', borderRadius:'10px', fontSize:'0.95rem', fontFamily:'monospace'}} />
          </div>

          {error && <div style={{padding:'0.85rem', background:'#fee2e2', color:'#991b1b', borderRadius:'10px', marginBottom:'1rem'}}>{error}</div>}

          <button onClick={createTest} disabled={creating} style={{width:'100%', padding:'1rem', background:'linear-gradient(135deg, #10b981, #059669)', color:'white', border:'none', borderRadius:'10px', fontWeight:800, fontSize:'1.05rem', cursor: creating ? 'wait' : 'pointer'}}>
            {creating ? 'Se creează...' : '🚀 Creează testul'}
          </button>
        </div>
      )}

      <h2 style={{color:'#1e293b'}}>📋 Testele mele ({tests.length})</h2>
      {tests.length === 0 ? (
        <div style={{padding:'3rem', textAlign:'center', background:'white', borderRadius:'12px', color:'#64748b'}}>
          Nu ai creat teste încă. Click pe „Test nou" pentru a începe.
        </div>
      ) : (
        <div style={{display:'flex', flexDirection:'column', gap:'0.75rem'}}>
          {tests.map(t => (
            <div key={t.id} style={{background:'white', padding:'1.25rem', borderRadius:'12px', boxShadow:'0 2px 6px rgba(0,0,0,0.05)', display:'grid', gridTemplateColumns:'1fr auto auto', gap:'1rem', alignItems:'center'}}>
              <Link href={`/profesor/test/${t.id}`} style={{textDecoration:'none', color:'inherit'}}>
                <div style={{fontWeight:800, color:'#1e293b', fontSize:'1.05rem'}}>{t.test_name}</div>
                <div style={{color:'#64748b', fontSize:'0.85rem', marginTop:'0.25rem'}}>Clasa {t.class_level} • {t.question_count} întrebări • {t.duration_minutes} min • Creat: {new Date(t.created_at).toLocaleDateString('ro-RO')}</div>
              </Link>
              <Link href={`/profesor/test/${t.id}`} style={{textAlign:'right', textDecoration:'none'}}>
                <div style={{background:'linear-gradient(135deg, #ede9fe, #ddd6fe)', padding:'0.5rem 0.85rem', borderRadius:'8px', fontFamily:'monospace', fontWeight:900, color:'#5b21b6', fontSize:'1.1rem'}}>{t.test_code}</div>
                <div style={{color:'#8b5cf6', marginTop:'0.5rem', fontSize:'0.85rem', fontWeight:700}}>Vezi rezultate →</div>
              </Link>
              <button onClick={() => deleteTest(t.id, t.test_name)} style={{padding:'0.6rem 0.8rem', background:'#fee2e2', color:'#991b1b', border:'none', borderRadius:'8px', fontWeight:700, cursor:'pointer', height:'fit-content'}}>🗑️</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
