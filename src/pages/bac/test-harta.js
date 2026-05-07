import { useState } from 'react';
import EuropeMap from '../../components/bac/EuropeMap';
import RomaniaMap from '../../components/bac/RomaniaMap';
import Layout from '../../components/Layout';

export default function TestHarta() {
  const [continent, setContinent] = useState('europa');
  const [varianta, setVarianta] = useState('Test_6');
  const [identificat, setIdentificat] = useState(null);
  
  function handleClick(letter, name) {
    setIdentificat({ letter, name });
  }
  
  return (
    <Layout>
      <div style={{padding:'2rem 1rem', maxWidth:'900px', margin:'0 auto'}}>
        <h1 style={{textAlign:'center', color:'#1e293b', marginBottom:'1rem'}}>
          🎓 Test Hărți BAC
        </h1>
        
        {/* Switch continent */}
        <div style={{textAlign:'center', marginBottom:'1rem'}}>
          <button 
            onClick={() => { setContinent('europa'); setIdentificat(null); }}
            style={{
              padding:'0.6rem 1.2rem', margin:'0 0.5rem',
              background: continent === 'europa' ? '#0284c7' : '#e2e8f0',
              color: continent === 'europa' ? 'white' : '#1e293b',
              border:'none', borderRadius:'8px', cursor:'pointer', fontWeight:700, fontSize:'1rem',
            }}>
            🌍 Europa
          </button>
          <button 
            onClick={() => { setContinent('romania'); setIdentificat(null); }}
            style={{
              padding:'0.6rem 1.2rem', margin:'0 0.5rem',
              background: continent === 'romania' ? '#d97706' : '#e2e8f0',
              color: continent === 'romania' ? 'white' : '#1e293b',
              border:'none', borderRadius:'8px', cursor:'pointer', fontWeight:700, fontSize:'1rem',
            }}>
            🇷🇴 România
          </button>
        </div>
        
        {/* Switch variantă */}
        <div style={{textAlign:'center', marginBottom:'1.5rem'}}>
          <button 
            onClick={() => setVarianta('Test_6')}
            style={{
              padding:'0.4rem 0.9rem', margin:'0 0.3rem',
              background: varianta === 'Test_6' ? '#1e293b' : '#cbd5e1',
              color: varianta === 'Test_6' ? 'white' : '#1e293b',
              border:'none', borderRadius:'6px', cursor:'pointer', fontWeight:600, fontSize:'0.9rem',
            }}>
            Test 6
          </button>
          <button 
            onClick={() => setVarianta('Test_10')}
            style={{
              padding:'0.4rem 0.9rem', margin:'0 0.3rem',
              background: varianta === 'Test_10' ? '#1e293b' : '#cbd5e1',
              color: varianta === 'Test_10' ? 'white' : '#1e293b',
              border:'none', borderRadius:'6px', cursor:'pointer', fontWeight:600, fontSize:'0.9rem',
            }}>
            Test 10
          </button>
        </div>
        
        {/* Hartă */}
        {continent === 'europa' ? (
          <EuropeMap 
            varianta={varianta} 
            onStateClick={handleClick}
            highlighted={identificat?.letter}
          />
        ) : (
          <RomaniaMap 
            varianta={varianta} 
            onUnitClick={handleClick}
            highlighted={identificat?.letter}
          />
        )}
        
        {identificat && (
          <div style={{
            marginTop:'1.5rem', padding:'1rem',
            background:'#dcfce7', border:'2px solid #16a34a',
            borderRadius:'8px', textAlign:'center',
          }}>
            ✅ Ai identificat: <strong>{identificat.letter}</strong> = <strong>{identificat.name}</strong>
          </div>
        )}
      </div>
    </Layout>
  );
}
