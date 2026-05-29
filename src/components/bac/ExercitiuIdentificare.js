import { useState } from 'react';
import { verificaRaspuns } from '../../utils/verificareRaspuns';


export default function ExercitiuIdentificare({ 
  enunt,                  // "Precizați numele statului marcat cu litera J"
  raspunsCorect,          // "Bulgaria"
  raspunsuriAcceptate,    // ["bulgaria", "Bulgaria", "Republica Bulgaria"]
  punctaj = 2,
  onRaspuns,              // callback când utilizatorul a răspuns
}) {
  const [raspunsUser, setRaspunsUser] = useState('');
  const [verificat, setVerificat] = useState(false);
  const [corect, setCorect] = useState(false);
  const [puncteObtinute, setPuncteObtinute] = useState(0);
  
  function verifica() {
    const esteCorect = verificaRaspuns(raspunsUser, raspunsuriAcceptate, raspunsCorect);

    
    setCorect(esteCorect);
    setPuncteObtinute(esteCorect ? punctaj : 0);
    setVerificat(true);
    
    if (onRaspuns) {
      onRaspuns({
        raspuns: raspunsUser,
        corect: esteCorect,
        puncte: esteCorect ? punctaj : 0,
      });
    }
  }
  
  return (
    <div style={{
      background: 'white',
      border: '2px solid #e2e8f0',
      borderRadius: '12px',
      padding: '1.25rem',
      marginBottom: '1rem',
    }}>
      <div style={{display:'flex', justifyContent:'space-between', alignItems:'flex-start', marginBottom:'0.75rem'}}>
        <p style={{margin:0, fontSize:'1rem', color:'#1e293b', fontWeight:500, flex:1}}>
          {enunt}
        </p>
        <span style={{
          background:'#dbeafe', color:'#1e40af',
          padding:'0.25rem 0.6rem', borderRadius:'6px',
          fontSize:'0.8rem', fontWeight:700, marginLeft:'1rem',
        }}>
          {punctaj}p
        </span>
      </div>
      
      <div style={{display:'flex', gap:'0.5rem'}}>
        <input
          type="text"
          value={raspunsUser}
          onChange={(e) => setRaspunsUser(e.target.value)}
          disabled={verificat}
          placeholder="Răspunsul tău..."
          style={{
            flex: 1,
            padding:'0.7rem 1rem',
            border: verificat ? `2px solid ${corect ? '#16a34a' : '#dc2626'}` : '2px solid #cbd5e1',
            borderRadius:'8px',
            fontSize:'0.95rem',
            outline:'none',
          }}
        />
        {!verificat && (
          <button
            onClick={verifica}
            disabled={!raspunsUser.trim()}
            style={{
              padding:'0.7rem 1.2rem',
              background: raspunsUser.trim() ? '#0284c7' : '#cbd5e1',
              color:'white', border:'none', borderRadius:'8px',
              fontWeight:700, fontSize:'0.9rem',
              cursor: raspunsUser.trim() ? 'pointer' : 'not-allowed',
            }}>
            Verifică
          </button>
        )}
      </div>
      
     {verificat && (
        <div style={{
          marginTop:'0.75rem', padding:'1rem',
          background: corect ? '#dcfce7' : '#fee2e2',
          border: `2px solid ${corect ? '#16a34a' : '#dc2626'}`,
          borderRadius:'8px',
          fontSize:'0.95rem',
        }}>
          {corect ? (
            <div>
              <strong style={{color:'#15803d', fontSize:'1.1rem'}}>✅ Corect! +{puncteObtinute} puncte</strong>
              <div style={{marginTop:'0.5rem', color:'#166534', fontSize:'0.9rem'}}>
                Răspunsul tău: <strong>{raspunsUser}</strong>
              </div>
            </div>
          ) : (
            <div>
              <strong style={{color:'#b91c1c', fontSize:'1.1rem'}}>❌ Răspuns greșit · 0 puncte</strong>
              <div style={{marginTop:'0.75rem', padding:'0.6rem', background:'#fef2f2', borderRadius:'6px', borderLeft:'4px solid #dc2626'}}>
                <span style={{color:'#7f1d1d'}}>📝 Răspunsul tău: <strong>{raspunsUser}</strong></span>
              </div>
              <div style={{marginTop:'0.5rem', padding:'0.6rem', background:'#f0fdf4', borderRadius:'6px', borderLeft:'4px solid #16a34a'}}>
                <span style={{color:'#166534'}}>✅ Răspuns corect: <strong>{raspunsCorect}</strong></span>
              </div>
            </div>
          )}
        </div>
      )}

    </div>
  );
}
