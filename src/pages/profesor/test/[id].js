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
  const [className, setClassName] = useState('');

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
    setClassName(`Clasa a ${['V','VI','VII','VIII'][testData.class_level - 5]}-a`);
    
    const { data: resultsData } = await supabase.from('test_results').select('*').eq('test_id', id).order('student_name');
    setResults(resultsData || []);
    setLoading(false);
  }

  function printReport() {
    window.print();
  }

  function exportCSV() {
    const header = 'Nr.crt,Numele si prenumele elevului,Total punctaj,Nota\n';
    let rows = '';
    let idx = 1;
    combined.forEach(s => {
      if (s.result) {
        rows += `${idx},"${s.name}",${s.result.score_percent.toFixed(0)},${s.result.grade}\n`;
      } else {
        rows += `${idx},"${s.name}",-,ABSENT\n`;
      }
      idx++;
    });
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

  // Combin lista așteptată cu cei prezenți
  const expected = (test.expected_students || []);
  const presentByName = {};
  results.forEach(r => { presentByName[r.student_name.toLowerCase().trim()] = r; });
  
  // Elevii așteptați + cei prezenți NEașteptați
  const allStudents = new Map();
  expected.forEach(name => {
    allStudents.set(name.toLowerCase().trim(), { name, result: presentByName[name.toLowerCase().trim()] || null });
  });
  results.forEach(r => {
    const key = r.student_name.toLowerCase().trim();
    if (!allStudents.has(key)) {
      allStudents.set(key, { name: r.student_name, result: r });
    }
  });
  const combined = Array.from(allStudents.values()).sort((a, b) => a.name.localeCompare(b.name, 'ro'));
  
  const presentResults = results;
  const totalStudents = expected.length || presentResults.length;
  const testedCount = presentResults.length;
  const absentCount = totalStudents - testedCount;
  
  // Media generală (doar cei prezenți)
  const averageGrade = testedCount > 0 ? (presentResults.reduce((sum, r) => sum + parseFloat(r.grade), 0) / testedCount).toFixed(2) : 0;

  // Distribuție pe intervale
  const intervals = [
    { label: '1-3,99', min: 1, max: 3.99 },
    { label: '4-4,99', min: 4, max: 4.99 },
    { label: '5-5,99', min: 5, max: 5.99 },
    { label: '6-6,99', min: 6, max: 6.99 },
    { label: '7-7,99', min: 7, max: 7.99 },
    { label: '8-8,99', min: 8, max: 8.99 },
    { label: '9-9,99', min: 9, max: 9.99 },
    { label: '10', min: 10, max: 10 }
  ];
  
  const distribution = intervals.map(i => ({
    ...i,
    count: presentResults.filter(r => {
      const g = parseFloat(r.grade);
      return g >= i.min && g <= i.max;
    }).length
  }));

  return (
    <div style={{padding:'2rem 1.5rem', maxWidth:'900px', margin:'0 auto'}}>
      <style jsx global>{`
        @media print {
          .no-print { display: none !important; }
          body { background: white; }
          table { page-break-inside: avoid; }
        }
      `}</style>
      
      <div className="no-print" style={{marginBottom:'1rem'}}>
        <Link href="/profesor" style={{color:'#8b5cf6', textDecoration:'none', fontWeight:700}}>← Panou profesor</Link>
      </div>

      <div className="no-print" style={{display:'flex', gap:'0.75rem', marginBottom:'1.5rem', flexWrap:'wrap'}}>
        <button onClick={printReport} style={{padding:'0.75rem 1.25rem', background:'#5b21b6', color:'white', border:'none', borderRadius:'8px', fontWeight:700, cursor:'pointer'}}>🖨️ Print / PDF</button>
        <button onClick={exportCSV} style={{padding:'0.75rem 1.25rem', background:'#10b981', color:'white', border:'none', borderRadius:'8px', fontWeight:700, cursor:'pointer'}}>📥 Export CSV</button>
      </div>

      {/* Header raport */}
      <div style={{textAlign:'center', marginBottom:'2rem'}}>
        <h1 style={{fontSize:'1.5rem', margin:'0', color:'#1e293b', textTransform:'uppercase'}}>Interpretarea rezultatelor – Analiză statistică</h1>
        <div style={{marginTop:'0.5rem', color:'#475569'}}>{test.test_name}</div>
        <div style={{marginTop:'0.25rem', color:'#64748b', fontSize:'0.9rem'}}>Cod test: <strong>{test.test_code}</strong> • Data: {new Date().toLocaleDateString('ro-RO')}</div>
      </div>

      {/* Tabel elevi */}
      <table style={{width:'100%', borderCollapse:'collapse', marginBottom:'2rem', fontSize:'0.9rem'}}>
        <thead>
          <tr style={{background:'#f1f5f9'}}>
            <th style={{border:'1px solid #94a3b8', padding:'0.5rem', textAlign:'center', fontWeight:700}}>Nr.crt.</th>
            <th style={{border:'1px solid #94a3b8', padding:'0.5rem', textAlign:'left', fontWeight:700}}>Numele și prenumele elevului</th>
            <th style={{border:'1px solid #94a3b8', padding:'0.5rem', textAlign:'center', fontWeight:700}}>Total punctaj</th>
            <th style={{border:'1px solid #94a3b8', padding:'0.5rem', textAlign:'center', fontWeight:700}}>Nota</th>
          </tr>
        </thead>
        <tbody>
          {combined.map((s, i) => (
            <tr key={i}>
              <td style={{border:'1px solid #94a3b8', padding:'0.5rem', textAlign:'center'}}>{i + 1}.</td>
              <td style={{border:'1px solid #94a3b8', padding:'0.5rem'}}>{s.name}</td>
              <td style={{border:'1px solid #94a3b8', padding:'0.5rem', textAlign:'center'}}>
                {s.result ? `${s.result.correct_answers}/${s.result.total_questions}` : '-'}
              </td>
              <td style={{border:'1px solid #94a3b8', padding:'0.5rem', textAlign:'center', fontWeight: s.result ? 700 : 400, color: s.result ? '#1e293b' : '#dc2626'}}>
                {s.result ? s.result.grade : 'ABSENT'}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Statistici finale */}
      <div style={{marginTop:'2rem'}}>
        <div style={{fontWeight:800, color:'#1e293b', marginBottom:'0.5rem'}}>{className}</div>
        <div style={{marginBottom:'1rem'}}>- <strong>media generală a clasei:</strong> {averageGrade.replace('.', ',')}</div>
        
        <table style={{width:'100%', borderCollapse:'collapse', fontSize:'0.9rem'}}>
          <thead>
            <tr style={{background:'#f1f5f9'}}>
              <th rowSpan="2" style={{border:'1px solid #94a3b8', padding:'0.5rem', verticalAlign:'middle'}}>Clasa</th>
              <th rowSpan="2" style={{border:'1px solid #94a3b8', padding:'0.5rem', verticalAlign:'middle'}}>Nr. de elevi testați</th>
              <th colSpan="8" style={{border:'1px solid #94a3b8', padding:'0.5rem'}}>Note între</th>
            </tr>
            <tr style={{background:'#f8fafc'}}>
              {intervals.map(i => (
                <th key={i.label} style={{border:'1px solid #94a3b8', padding:'0.5rem', fontSize:'0.85rem'}}>{i.label}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{border:'1px solid #94a3b8', padding:'0.5rem', textAlign:'center', fontWeight:700}}>{className}</td>
              <td style={{border:'1px solid #94a3b8', padding:'0.5rem', textAlign:'center'}}>{testedCount}/{totalStudents}</td>
              {distribution.map(d => (
                <td key={d.label} style={{border:'1px solid #94a3b8', padding:'0.5rem', textAlign:'center'}}>
                  {d.count > 0 ? d.count : '-'}
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
      
      {absentCount > 0 && (
        <div style={{marginTop:'1.5rem', padding:'0.85rem', background:'#fef3c7', borderRadius:'8px', color:'#78350f'}}>
          <strong>Absenți:</strong> {absentCount} elev(i)
        </div>
      )}
    </div>
  );
}
