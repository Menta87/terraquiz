import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { supabase } from '../../lib/supabase';

export default function TeacherQuestions() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [questions, setQuestions] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');

  // Form fields
  const [qText, setQText] = useState('');
  const [qType, setQType] = useState('multiple_choice');
  const [optA, setOptA] = useState('');
  const [optB, setOptB] = useState('');
  const [optC, setOptC] = useState('');
  const [optD, setOptD] = useState('');
  const [correctLetter, setCorrectLetter] = useState('A');
  const [freeAnswer, setFreeAnswer] = useState('');
  const [classLevel, setClassLevel] = useState(8);
  const [explanation, setExplanation] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [imagePreview, setImagePreview] = useState('');

  useEffect(() => { load(); }, []);

  async function load() {
    const { data: { session } } = await supabase.auth.getSession();
    if (!session) { router.push('/login'); return; }
    const { data } = await supabase.from('teacher_questions').select('*').eq('teacher_id', session.user.id).order('created_at', { ascending: false });
    setQuestions(data || []);
    setLoading(false);
  }

  async function handleImageUpload(e) {
    const file = e.target.files[0];
    if (!file) return;
    setUploading(true);
    setError('');
    const { data: { session } } = await supabase.auth.getSession();
    const fileName = `${session.user.id}/${Date.now()}_${file.name.replace(/[^a-zA-Z0-9.]/g, '_')}`;
    const { data, error: uploadError } = await supabase.storage.from('teacher-images').upload(fileName, file);
    if (uploadError) {
      setError('Eroare upload: ' + uploadError.message);
      setUploading(false);
      return;
    }
    const { data: urlData } = supabase.storage.from('teacher-images').getPublicUrl(fileName);
    setImageUrl(urlData.publicUrl);
    setImagePreview(urlData.publicUrl);
    setUploading(false);
  }

  function resetForm() {
    setQText(''); setOptA(''); setOptB(''); setOptC(''); setOptD('');
    setCorrectLetter('A'); setFreeAnswer(''); setExplanation('');
    setImageUrl(''); setImagePreview(''); setQType('multiple_choice');
  }

  async function saveQuestion() {
    setError('');
    if (!qText.trim()) return setError('Scrie textul întrebării');
    if (qType === 'multiple_choice') {
      if (!optA.trim() || !optB.trim()) return setError('Completează cel puțin variantele A și B');
    } else {
      if (!freeAnswer.trim()) return setError('Scrie răspunsul corect');
    }

    setSaving(true);
    const { data: { session } } = await supabase.auth.getSession();

    const payload = {
      teacher_id: session.user.id,
      question_text: qText.trim(),
      type: qType,
      class_level: classLevel,
      explanation: explanation.trim() || null,
      image_url: imageUrl || null
    };

    if (qType === 'multiple_choice') {
      payload.option_a = optA.trim();
      payload.option_b = optB.trim();
      payload.option_c = optC.trim() || null;
      payload.option_d = optD.trim() || null;
      payload.correct_answer = correctLetter;
    } else {
      payload.correct_answer = freeAnswer.trim();
      payload.accepted_answers = [freeAnswer.trim()];
    }

    const { error: saveError } = await supabase.from('teacher_questions').insert(payload);
    if (saveError) {
      setError('Eroare: ' + saveError.message);
      setSaving(false);
      return;
    }

    resetForm();
    setShowForm(false);
    setSaving(false);
    load();
  }

  async function deleteQuestion(id) {
    if (!confirm('Sigur vrei să ștergi această întrebare?')) return;
    await supabase.from('teacher_questions').delete().eq('id', id);
    setQuestions(questions.filter(q => q.id !== id));
  }

  if (loading) return <div className="loading container">Se încarcă...</div>;

  return (
    <div className="container" style={{padding:'2rem 1.5rem', maxWidth:'900px'}}>
      <Link href="/profesor" style={{color:'#8b5cf6', textDecoration:'none', fontWeight:700}}>← Panou profesor</Link>

      <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', marginTop:'1rem', marginBottom:'1.5rem', flexWrap:'wrap', gap:'1rem'}}>
        <div>
          <h1 style={{color:'#5b21b6', margin:0}}>📚 Banca mea de întrebări</h1>
          <p style={{color:'#64748b', margin:'0.25rem 0'}}>Creează întrebări proprii, cu sau fără hărți/imagini</p>
        </div>
        <button onClick={() => setShowForm(!showForm)} style={{padding:'0.85rem 1.5rem', background:'linear-gradient(135deg, #0891b2, #0e7490)', color:'white', border:'none', borderRadius:'10px', fontWeight:700, cursor:'pointer'}}>
          {showForm ? '✕ Anulează' : '➕ Întrebare nouă'}
        </button>
      </div>

      {showForm && (
        <div style={{background:'white', padding:'2rem', borderRadius:'16px', marginBottom:'2rem', boxShadow:'0 4px 12px rgba(0,0,0,0.08)'}}>
          <div style={{marginBottom:'1rem'}}>
            <label style={{fontWeight:700, color:'#475569', display:'block', marginBottom:'0.5rem'}}>🎓 Clasa:</label>
            <div style={{display:'flex', gap:'0.5rem'}}>
              {[5,6,7,8,9,10,11,12].map(c => (
                <button key={c} onClick={() => setClassLevel(c)} style={{padding:'0.6rem 0.9rem', background: classLevel === c ? 'linear-gradient(135deg, #0891b2, #0e7490)' : '#f8fafc', color: classLevel === c ? 'white' : '#475569', border:'2px solid ' + (classLevel === c ? '#0891b2' : '#e2e8f0'), borderRadius:'8px', fontWeight:700, cursor:'pointer'}}>{c}</button>
              ))}
            </div>
          </div>

          <div style={{marginBottom:'1rem'}}>
            <label style={{fontWeight:700, color:'#475569', display:'block', marginBottom:'0.5rem'}}>📝 Tipul întrebării:</label>
            <div style={{display:'flex', gap:'0.5rem'}}>
              <button onClick={() => setQType('multiple_choice')} style={{flex:1, padding:'0.75rem', background: qType === 'multiple_choice' ? '#ede9fe' : 'white', border:'2px solid ' + (qType === 'multiple_choice' ? '#8b5cf6' : '#e2e8f0'), borderRadius:'10px', fontWeight:700, cursor:'pointer', color:'#1e293b'}}>🔘 Variante multiple</button>
              <button onClick={() => setQType('fill_in')} style={{flex:1, padding:'0.75rem', background: qType === 'fill_in' ? '#ede9fe' : 'white', border:'2px solid ' + (qType === 'fill_in' ? '#8b5cf6' : '#e2e8f0'), borderRadius:'10px', fontWeight:700, cursor:'pointer', color:'#1e293b'}}>✍️ Răspuns liber</button>
            </div>
          </div>

          <div style={{marginBottom:'1rem'}}>
            <label style={{fontWeight:700, color:'#475569', display:'block', marginBottom:'0.5rem'}}>❓ Textul întrebării:</label>
            <textarea value={qText} onChange={e => setQText(e.target.value)} placeholder="Ex: Identifică pe hartă forma de relief marcată cu litera X" rows={2} style={{width:'100%', padding:'0.85rem', border:'2px solid #e2e8f0', borderRadius:'10px', fontSize:'1rem'}} />
          </div>

          <div style={{marginBottom:'1rem'}}>
            <label style={{fontWeight:700, color:'#475569', display:'block', marginBottom:'0.5rem'}}>🗺️ Imagine / Hartă (opțional):</label>
            <input type="file" accept="image/*" onChange={handleImageUpload} disabled={uploading} style={{width:'100%', padding:'0.5rem', border:'2px dashed #e2e8f0', borderRadius:'10px'}} />
            {uploading && <div style={{color:'#0891b2', marginTop:'0.5rem'}}>Se încarcă imaginea...</div>}
            {imagePreview && (
              <div style={{marginTop:'0.75rem'}}>
                <img src={imagePreview} alt="Preview" style={{maxWidth:'100%', maxHeight:'250px', borderRadius:'10px', border:'2px solid #e2e8f0'}} />
                <button onClick={() => { setImageUrl(''); setImagePreview(''); }} style={{display:'block', marginTop:'0.5rem', padding:'0.4rem 0.85rem', background:'#fee2e2', color:'#991b1b', border:'none', borderRadius:'8px', fontWeight:700, cursor:'pointer'}}>✕ Elimină imaginea</button>
              </div>
            )}
          </div>

          {qType === 'multiple_choice' ? (
            <>
              <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'0.75rem', marginBottom:'1rem'}}>
                <div>
                  <label style={{fontWeight:700, color:'#475569', display:'block', marginBottom:'0.35rem'}}>Varianta A:</label>
                  <input type="text" value={optA} onChange={e => setOptA(e.target.value)} style={{width:'100%', padding:'0.7rem', border:'2px solid #e2e8f0', borderRadius:'8px'}} />
                </div>
                <div>
                  <label style={{fontWeight:700, color:'#475569', display:'block', marginBottom:'0.35rem'}}>Varianta B:</label>
                  <input type="text" value={optB} onChange={e => setOptB(e.target.value)} style={{width:'100%', padding:'0.7rem', border:'2px solid #e2e8f0', borderRadius:'8px'}} />
                </div>
                <div>
                  <label style={{fontWeight:700, color:'#475569', display:'block', marginBottom:'0.35rem'}}>Varianta C (opțional):</label>
                  <input type="text" value={optC} onChange={e => setOptC(e.target.value)} style={{width:'100%', padding:'0.7rem', border:'2px solid #e2e8f0', borderRadius:'8px'}} />
                </div>
                <div>
                  <label style={{fontWeight:700, color:'#475569', display:'block', marginBottom:'0.35rem'}}>Varianta D (opțional):</label>
                  <input type="text" value={optD} onChange={e => setOptD(e.target.value)} style={{width:'100%', padding:'0.7rem', border:'2px solid #e2e8f0', borderRadius:'8px'}} />
                </div>
              </div>
              <div style={{marginBottom:'1rem'}}>
                <label style={{fontWeight:700, color:'#475569', display:'block', marginBottom:'0.5rem'}}>✅ Răspunsul corect:</label>
                <div style={{display:'flex', gap:'0.5rem'}}>
                  {['A','B','C','D'].map(l => (
                    <button key={l} onClick={() => setCorrectLetter(l)} style={{flex:1, padding:'0.7rem', background: correctLetter === l ? '#10b981' : '#f8fafc', color: correctLetter === l ? 'white' : '#475569', border:'2px solid ' + (correctLetter === l ? '#10b981' : '#e2e8f0'), borderRadius:'8px', fontWeight:800, cursor:'pointer'}}>{l}</button>
                  ))}
                </div>
              </div>
            </>
          ) : (
            <div style={{marginBottom:'1rem'}}>
              <label style={{fontWeight:700, color:'#475569', display:'block', marginBottom:'0.5rem'}}>✅ Răspunsul corect (elevul scrie liber):</label>
              <input type="text" value={freeAnswer} onChange={e => setFreeAnswer(e.target.value)} placeholder="Ex: Munții Carpați" style={{width:'100%', padding:'0.85rem', border:'2px solid #e2e8f0', borderRadius:'10px'}} />
            </div>
          )}

          <div style={{marginBottom:'1rem'}}>
            <label style={{fontWeight:700, color:'#475569', display:'block', marginBottom:'0.5rem'}}>💡 Explicație (opțional, apare după răspuns):</label>
            <textarea value={explanation} onChange={e => setExplanation(e.target.value)} rows={2} style={{width:'100%', padding:'0.85rem', border:'2px solid #e2e8f0', borderRadius:'10px'}} />
          </div>

          {error && <div style={{padding:'0.85rem', background:'#fee2e2', color:'#991b1b', borderRadius:'10px', marginBottom:'1rem'}}>{error}</div>}

          <button onClick={saveQuestion} disabled={saving || uploading} style={{width:'100%', padding:'1rem', background:'linear-gradient(135deg, #10b981, #059669)', color:'white', border:'none', borderRadius:'10px', fontWeight:800, fontSize:'1.05rem', cursor:'pointer'}}>
            {saving ? 'Se salvează...' : '💾 Salvează întrebarea'}
          </button>
        </div>
      )}

      <h2 style={{color:'#1e293b'}}>📋 Întrebările mele ({questions.length})</h2>
      {questions.length === 0 ? (
        <div style={{padding:'3rem', textAlign:'center', background:'white', borderRadius:'12px', color:'#64748b'}}>
          Nu ai creat întrebări încă. Click pe „Întrebare nouă" pentru a începe.
        </div>
      ) : (
        <div style={{display:'flex', flexDirection:'column', gap:'0.75rem'}}>
          {questions.map(q => (
            <div key={q.id} style={{background:'white', padding:'1.25rem', borderRadius:'12px', boxShadow:'0 2px 6px rgba(0,0,0,0.05)'}}>
              <div style={{display:'flex', justifyContent:'space-between', alignItems:'start', gap:'1rem'}}>
                <div style={{flex:1}}>
                  <div style={{fontSize:'0.75rem', color:'#0891b2', fontWeight:700}}>Clasa {q.class_level} • {q.type === 'multiple_choice' ? '🔘 Variante' : '✍️ Liber'}</div>
                  <div style={{fontWeight:700, color:'#1e293b', marginTop:'0.25rem'}}>{q.question_text}</div>
                  {q.image_url && <img src={q.image_url} alt="" style={{maxWidth:'200px', maxHeight:'120px', borderRadius:'8px', marginTop:'0.5rem'}} />}
                </div>
                <button onClick={() => deleteQuestion(q.id)} style={{padding:'0.5rem 0.75rem', background:'#fee2e2', color:'#991b1b', border:'none', borderRadius:'8px', fontWeight:700, cursor:'pointer'}}>×</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
