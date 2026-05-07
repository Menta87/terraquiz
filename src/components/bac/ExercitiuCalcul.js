import { useState } from 'react';

export default function ExercitiuCalcul({
  enunt,
  formula,
  raspunsCorect,
  intervalAcceptat,
  unitate,
  punctaj,
  onRaspuns,
}) {
  const [raspunsUser, setRaspunsUser] = useState('');
  const [verificat, setVerificat] = useState(false);
  const [corect, setCorect] = useState(false);
  
  const punctajFinal = punctaj || 2;
  const unitateText = unitate || '';
  
  function verifica() {
    if (!raspunsUser.trim()) return;
    
    const valoare = parseFloat(raspunsUser.replace(',', '.'));
    
    if (isNaN(valoare)) {
      setCorect(false);
      setVerificat(true);
      if (onRaspuns) onRaspuns({ raspuns: raspunsUser, corect: false, puncte: 0 });
      return;
    }
    
    let esteCorect = false;
    
    if (intervalAcceptat && intervalAcceptat.length === 2) {
      esteCorect = valoare >= intervalAcceptat[0] && valoare <= intervalAcceptat[1];
    } else {
      esteCorect = valoare === parseFloat(raspunsCorect);
    }
    
    setCorect(esteCorect);
    setVerificat(true);
    
    if (onRaspuns) {
      onRaspuns({
        raspuns: raspunsUser,
        corect: esteCorect,
        puncte: esteCorect ? punctajFinal : 0,
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
        <p style={{margin:0, fontSize:'1rem', color:'#1e293b', fontWeight:500, flex:1, lineHeight:1.5}}>
          {enunt}
        </p>
        <span style={{
          background:'#dbeafe', color:'#1e40af',
          padding:'0.25rem 0.6rem', borderRadius:'6px',
          fontSize:'0.8rem', fontWeight:700, marginLeft:'1rem',
          whiteSpace:'nowrap',
          height:'fit-content',
        }}>
          {punctajFinal}p
        </span>
      </div>
      
      {formula && (
        <div style={{
          background:'#f1f5f9', padding:'0.75rem 1rem',
          borderRadius:'8px', marginBottom:'0.75rem',
          fontSize:'0.9rem', color:'#475569',
          fontFamily:'monospace',
          borderLeft:'4px solid #0284c7',
        }}>
          📐 Formulă: <strong>{formula}</strong>
        </div>
      )}
      
      <div style={{display:'flex', gap:'0.5rem', alignItems:'center'}}>
        <input
          type="text"
          value={raspunsUser}
          onChange={function(e) { setRaspunsUser(e.target.value); }}
          disabled={verificat}
          placeholder="Răspunsul..."
          style={{
            flex:1,
            padding:'0.7rem 1rem',
            border: verificat ? (corect ? '2px solid #16a34a' : '2px solid #dc2626') : '2px solid #cbd5e1',
            borderRadius:'8px',
            fontSize:'0.95rem',
            outline:'none',
            fontWeight:600,
          }}
        />
        {unitateText && (
          <span style={{
            padding:'0.7rem 0.8rem',
            background:'#f1f5f9',
            borderRadius:'8px',
            fontSize:'0.95rem',
            fontWeight:700,
            color:'#475569',
          }}>
            {unitateText}
          </span>
        )}
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
          border: corect ? '2px solid #16a34a' : '2px solid #dc2626',
          borderRadius:'8px',
          fontSize:'0.95rem',
        }}>
          {corect ? (
            <div>
              <strong style={{color:'#15803d', fontSize:'1.1rem'}}>
                ✅ Corect! +{punctajFinal} puncte
              </strong>
              {intervalAcceptat && (
                <div style={{marginTop:'0.5rem', fontSize:'0.85rem', color:'#166534'}}>
                  📊 Interval acceptat: {intervalAcceptat[0]} - {intervalAcceptat[1]} {unitateText}
                </div>
              )}
            </div>
          ) : (
            <div>
              <strong style={{color:'#b91c1c', fontSize:'1.1rem'}}>
                ❌ Răspuns greșit · 0 puncte
              </strong>
              <div style={{marginTop:'0.75rem', padding:'0.6rem', background:'#fef2f2', borderRadius:'6px', borderLeft:'4px solid #dc2626'}}>
                <span style={{color:'#7f1d1d'}}>
                  📝 Răspunsul tău: <strong>{raspunsUser} {unitateText}</strong>
                </span>
              </div>
              <div style={{marginTop:'0.5rem', padding:'0.6rem', background:'#f0fdf4', borderRadius:'6px', borderLeft:'4px solid #16a34a'}}>
                <span style={{color:'#166534'}}>
                  ✅ Răspuns corect: <strong>{raspunsCorect} {unitateText}</strong>
                  {intervalAcceptat && ` (interval: ${intervalAcceptat[0]} - ${intervalAcceptat[1]})`}
                </span>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
