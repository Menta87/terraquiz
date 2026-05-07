import { useState } from 'react';
import EuropeMap from '../../components/bac/EuropeMap';
import Layout from '../../components/Layout';

export default function TestHarta() {
  const [varianta, setVarianta] = useState('Test_6');
  const [identificat, setIdentificat] = useState(null);
  
  function handleStateClick(letter, name) {
    setIdentificat({ letter, name });
  }
  
  return (
    <Layout>
      <div style={{padding:'2rem 1rem', maxWidth:'900px', margin:'0 auto'}}>
        <h1 style={{textAlign:'center', color:'#1e293b', marginBottom:'1rem'}}>
          🎓 Test Hartă Europa - BAC
        </h1>
        
        <div style={{textAlign:'center', marginBottom:'1.5rem'}}>
          <button 
            onClick={() => setVarianta('Test_6')}
            style={{
              padding:'0.5rem 1rem', margin:'0 0.5rem',
              background: varianta === 'Test_6' ? '#0284c7' : '#e2e8f0',
              color: varianta === 'Test_6' ? 'white' : '#1e293b',
              border:'none', borderRadius:'8px', cursor:'pointer', fontWeight:600,
            }}>
            Test 6
          </button>
          <button 
            onClick={() => setVarianta('Test_10')}
            style={{
              padding:'0.5rem 1rem', margin:'0 0.5rem',
              background: varianta === 'Test_10' ? '#0284c7' : '#e2e8f0',
              color: varianta === 'Test_10' ? 'white' : '#1e293b',
              border:'none', borderRadius:'8px', cursor:'pointer', fontWeight:600,
            }}>
            Test 10
          </button>
        </div>
        
        <EuropeMap 
          varianta={varianta} 
          onStateClick={handleStateClick}
          highlighted={identificat?.letter}
        />
        
        {identificat && (
          <div style={{
            marginTop:'1.5rem', padding:'1rem',
            background:'#dcfce7', border:'2px solid #16a34a',
            borderRadius:'8px', textAlign:'center',
          }}>
            ✅ Ai identificat: <strong>{identificat.letter}</strong> = <strong>{identificat.name}</strong>
          </div>
        )}
        
        <div style={{marginTop:'2rem', padding:'1rem', background:'#fef3c7', borderRadius:'8px', fontSize:'0.9rem'}}>
          <strong>📋 Pentru testat:</strong>
          <ul style={{marginTop:'0.5rem', paddingLeft:'1.5rem'}}>
            <li>Hover pe orice țară din Europa - apare numele în colț</li>
            <li>Click pe țările cu litere (A-J) → apare confirmare</li>
            <li>Cifrele roșii sunt capitalele numerotate (1-15)</li>
            <li>Schimbă între Test 6 și Test 10 cu butoanele</li>
          </ul>
        </div>
      </div>
    </Layout>
  );
}
