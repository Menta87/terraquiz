import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { supabase } from '../../../lib/supabase';

export default function TestReport() {
  const router = useRouter();
  const { id } = router.query;
  const [loading, setLoading] = useState(true);
  const [test, setTest] = useState(null);
  const [results, setResults] = useState([]);

  useEffect(() => { if (id) load(); }, [id]);

  async function load() {
    const { data: { session } } = await supabase.auth.getSession();
    if (!session) { router.push('/login'); return; }
    
    const { data: testData } = await supabase.from('teacher_tests').select('*').eq('id', id).eq('teacher_id', session.user.id).maybeSingle();
    if (!testData) {
      setLoading(false);
      return;
    }
    setTest(testData);
    
    const { data: resultsData } = await supabase.from('test_results').select('*').eq('test_id', id).order('grade', { ascending: false });
    setResults(resultsData || []);
    setLoading(false);
  }

  function exportCSV() {
    const header = 'Nume,Nota,Corecte,Total,Timp (min),Data\n';
    const rows = results.map(r => `"${r.student_name}",${r.grade},${r.correct_answers},${r.total_questions},${Math.round((r.time_taken_seconds || 0) / 60)},${new Date(r.finished_at || r.started_at).toLocaleString('ro-RO')}`).join('\n');
    const csv = header + rows;
    const blob = new Blob(['\ufeff' + csv], { type: 'text/csv;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `raport-${test.test_name.replace(/[^a-zA-Z0-9]/g, '_')}.csv`;
    a.click();
  }

  if (loading) return <div className="loading container">Se încarcă...</div>;
  if (!test) return <div className="container" style={{padding:'4rem', textAlign:'center'}}><h2>Test negăsit</h2><Link href="/profesor" className="btn btn-primary">← Înapoi</Link></div>;

  // Statistici
  const totalStudents = results.length;
  const averageGrade = totalStudents > 0 ? (results.reduce((sum, r) => sum + parseFloat(r.grade), 0) / totalStudents).toFixed(2) : 0;
  const highestGrade = totalStudents > 0 ? Math.max(...results.map(r => parseFloat(r.grade))).toFixed(2) : 0;
  const lowestGrade = totalStudents > 0 ? Math.min(...results.map(r => parseFloat(r.grade))).toFixed(2) : 0;

  // Distribuție pe intervale
  const intervals = [
    { label: '1 - 3.99', min: 1, max: 3.99, color: '#dc2626' },
    { label: '4 - 4.99', min: 4, max: 4.99, color: '#f97316' },
    { label: '5 - 5.99', min: 5, max: 5.99, color: '#eab308' },
    { label: '6 - 6.99', min: 6, max: 6.99, color: '#84cc16' },
    { label: '7 - 7.99', min: 7, max: 7.99, color: '#10b981' },
    { label: '8 - 8.99', min: 8, max: 8.99, color: '#06b6d4' },
    { label: '9 - 9.99', min: 9, max: 9.99, color: '#3b82f6' },
    { label: '10', min: 10, max: 10, color: '#8b5cf6' }
  ];
  
  const distribution = intervals.map(i => ({
    ...i,
    count: results.filter(r => {
      const g = parseFloat(r.grade);
      return g >= i.min && g <= i.max;
    }).length
  }));

  // Elevi absenți
  const presentNames = results.map(r => r.student_name.toLowerCase().trim());
  const absentStudents = (test.expected_students || []).filter(s => !presentNames.includes(s.toLowerCase().trim()));

  return (
    <div className="container" style={{padding:'2rem 1.5rem', maxWidth:'1000px'}}>
      <Link href="/profesor" style={{color:'#8b5cf6', textDecoration:'none', fontWeight:700}}>← Panou profesor</Link>
      
      <div style={{background:'linear-gradient(135deg, #8b5cf6, #6d28d9)', color:'white', padding:'2rem', borderRadius:'16px', marginTop:'1rem'}}>
        <h1 style={{margin:0, color:'white'}}>{test.test_name}</h1>
        <div style={{opacity:0.9, marginTop:'0.5rem'}}>Clasa {test.class_level} • {test.question_count} întrebări • {test.duration_minutes} min</div>
        <div style={{marginTop:'1rem', background:'rgba(255,255,255,0.2)', padding:'0.75rem', borderRadius:'10px', display:'inline-block', fontFamily:'monospace', fontWeight:900, fontSize:'1.4rem'}}>Cod: {test.test_code}</div>
      </div>

      {/* KPI */}
      <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(180px, 1fr))', gap:'1rem', marginTop:'2rem'}}>
        <div style={{background:'white', padding:'1.25rem', borderRadius:'12px', boxShadow:'0 2px 6px rgba(0,0,0,0.05)'}}>
          <div style={{fontSize:'0.85rem', color:'#64748b', textTransform:'uppercase', fontWeight:700}}>Elevi prezenți</div>
          <div style={{fontSize:'2rem', fontWeight:900, color:'#5b21b6', marginTop:'0.25rem'}}>{totalStudents}</div>
        </div>
        <div style={{background:'white', padding:'1.25rem', borderRadius:'12px', boxShadow:'0 2px 6px rgba(0,0,0,0.05)'}}>
          <div style={{fontSize:'0.85rem', color:'#64748b', textTransform:'uppercase', fontWeight:700}}>Media clasei</div>
          <div style={{fontSize:'2rem', fontWeight:900, color:'#10b981', marginTop:'0.25rem'}}>{averageGrade}</div>
        </div>
        <div style={{background:'white', padding:'1.25rem', borderRadius:'12px', boxShadow:'0 2px 6px rgba(0,0,0,0.05)'}}>
          <div style={{fontSize:'0.85rem', color:'#64748b', textTransform:'uppercase', fontWeight:700}}>Nota max</div>
          <div style={{fontSize:'2rem', fontWeight:900, color:'#8b5cf6', marginTop:'0.25rem'}}>{highestGrade}</div>
        </div>
        <div style={{background:'white', padding:'1.25rem', borderRadius:'12px', boxShadow:'0 2px 6px rgba(0,0,0,0.05)'}}>
          <div style={{fontSize:'0.85rem', color:'#64748b', textTransform:'uppercase', fontWeight:700}}>Nota min</div>
          <div style={{fontSize:'2rem', fontWeight:900, color:'#dc2626', marginTop:'0.25rem'}}>{lowestGrade}</div>
        </div>
      </div>

      {/* Distribuție note */}
      <h2 style={{color:'#1e293b', marginTop:'2rem'}}>📊 Distribuție note</h2>
      <div style={{background:'white', padding:'1.5rem', borderRadius:'12px', boxShadow:'0 2px 6px rgba(0,0,0,0.05)'}}>
        {distribution.map(d => {
          const pct = totalStudents > 0 ? (d.count / totalStudents) * 100 : 0;
          return (
            <div key={d.label} style={{marginBottom:'0.75rem'}}>
              <div style={{display:'flex', justifyContent:'space-between', marginBottom:'0.25rem'}}>
                <span style={{fontWeight:700, color:'#1e293b'}}>{d.label}</span>
                <span style={{color:'#64748b', fontWeight:700}}>{d.count} elevi ({pct.toFixed(0)}%)</span>
              </div>
              <div style={{background:'#f1f5f9', height:'24px', borderRadius:'8px', overflow:'hidden'}}>
                <div style={{background: d.color, height:'100%', width: Math.max(pct, 1) + '%', transition:'width 0.5s'}}></div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Elevi absenți */}
      {absentStudents.length > 0 && (
        <>
          <h2 style={{color:'#dc2626', marginTop:'2rem'}}>⚠️ Elevi absenți ({absentStudents.length})</h2>
          <div style={{background:'#fee2e2', padding:'1.25rem', borderRadius:'12px'}}>
            {absentStudents.map((name, i) => (
              <div key={i} style={{padding:'0.5rem', color:'#991b1b', fontWeight:600}}>❌ {name}</div>
            ))}
          </div>
        </>
      )}

      {/* Lista elevi prezenți */}
      <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', marginTop:'2rem'}}>
        <h2 style={{color:'#1e293b', margin:0}}>👥 Rezultate elevi ({results.length})</h2>
        {results.length > 0 && <button onClick={exportCSV} style={{padding:'0.75rem 1.25rem', background:'#10b981', color:'white', border:'none', borderRadius:'10px', fontWeight:700, cursor:'pointer'}}>📥 Export CSV</button>}
      </div>
      
      {results.length === 0 ? (
        <div style={{padding:'3rem', textAlign:'center', background:'white', borderRadius:'12px', color:'#64748b', marginTop:'1rem'}}>
          Niciun elev nu a susținut testul încă.
          <br /><br />
          Trimite codul <strong style={{color:'#5b21b6', fontFamily:'monospace'}}>{test.test_code}</strong> elevilor și rugă-i să intre pe <strong>terraquiz.ro/test-elev</strong>
        </div>
      ) : (
        <div style={{background:'white', borderRadius:'12px', overflow:'hidden', marginTop:'1rem', boxShadow:'0 2px 6px rgba(0,0,0,0.05)'}}>
          {results.map((r, i) => {
            const grade = parseFloat(r.grade);
            const bg = grade >= 9 ? '#dcfce7' : grade >= 7 ? '#dbeafe' : grade >= 5 ? '#fef3c7' : '#fee2e2';
            const gradeColor = grade >= 9 ? '#166534' : grade >= 7 ? '#1e40af' : grade >= 5 ? '#78350f' : '#991b1b';
            return (
              <div key={r.id} style={{display:'grid', gridTemplateColumns:'40px 1fr auto auto', gap:'1rem', padding:'1rem 1.25rem', borderBottom:'1px solid #e2e8f0', alignItems:'center', background: i % 2 === 0 ? 'white' : '#f8fafc'}}>
                <div style={{fontWeight:800, color:'#5b21b6', textAlign:'center'}}>#{i+1}</div>
                <div style={{fontWeight:700, color:'#1e293b'}}>{r.student_name}</div>
                <div style={{color:'#64748b', fontSize:'0.85rem'}}>{r.correct_answers}/{r.total_questions} corecte</div>
                <div style={{background: bg, color: gradeColor, padding:'0.5rem 1rem', borderRadius:'8px', fontWeight:900, fontSize:'1.2rem', minWidth:'70px', textAlign:'center'}}>{r.grade}</div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
