import { useState } from 'react';

export default function ExercitiuCauza({
  enunt,
  raspunsExemplu,
  cuvinteCheie,
  punctaj,
  onRaspuns,
}) {
  const [raspunsUser, setRaspunsUser] = useState('');
  const [verificat, setVerificat] = useState(false);
  const [autoEval, setAutoEval] = useState(null);
  const [scorSalvat, setScorSalvat] = useState(false);
  
  const punctajFinal = punctaj || 2;
  
  function arataRaspuns() {
    if (!raspunsUser.trim()) return;
    setVerificat(true);
  }
  
  function calculeazaPunctaj() {
    if (autoEval === 'corect') return punctajFinal;
    if (autoEval === 'partial') return punctajFinal / 2;
    return 0;
  }
  
  function finalizeaza() {
    const puncte = calculeazaPunctaj();
    setScorSalvat(true);
    if (onRaspuns) {
      onRaspuns({
        raspuns: raspunsUser,
        corect: autoEval === 'corect',
        puncte: puncte,
      });
    }
  }
  
  function verificaCuvinteCheie() {
    if (!cuvinteCheie || cuvinteCheie.length === 0) return null;
    const textLower = raspunsUser.toLowerCase();
    const gasite = cuvinteCheie.filter(function(c) {
      return textLower.includes(c.toLowerCase());
    });
    return gasite;
  }
  
  const cuvinteGasite = verificaCuvinteCheie();
  
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
        }}>
          {punctajFinal}p
        </span>
      </div>
      
      <textarea
        value={raspunsUser}
        onChange={function(e) { setRaspunsUser(e.target.value); }}
        disabled={verificat}
        placeholder="Scrie cauza/explicația ta aici..."
        rows={3}
        style={{
          width:'100%',
          padding:'0.7rem',
          border:'2px solid #cbd5e1',
          borderRadius:'8px',
          fontSize:'0.95rem',
          fontFamily:'inherit',
          resize:'vertical',
          marginBottom:'0.75rem',
        }}
      />
      
      {!verificat && (
        <button
          onClick={arataRaspuns}
          disabled={!raspunsUser.trim()}
          style={{
            width:'100%', padding:'0.7rem',
            background: raspunsUser.trim() ? '#0284c7' : '#cbd5e1',
            color:'white', border:'none', borderRadius:'8px',
            fontWeight:700, fontSize:'0.95rem',
            cursor: raspunsUser.trim() ? 'pointer' : 'not-allowed',
          }}>
          📋 Verifică (vezi exemplu de răspuns)
        </button>
      )}
      
      {verificat && (
        <>
          <div style={{
            padding:'1rem',
            background:'#eff6ff',
            border:'2px solid #0284c7',
            borderRadius:'8px',
            marginBottom:'0.75rem',
          }}>
            <h4 style={{margin:'0 0 0.5rem', color:'#0c4a6e', fontSize:'0.95rem'}}>
              📚 Răspuns corect/exemplu:
            </h4>
            <p style={{margin:0, color:'#1e293b', fontSize:'0.9rem', lineHeight:1.6}}>
              {raspunsExemplu}
            </p>
            
            {cuvinteGasite && cuvinteGasite.length > 0 && (
              <div style={{marginTop:'0.75rem', padding:'0.6rem', background:'#dcfce7', borderRadius:'6px'}}>
                <strong style={{color:'#15803d', fontSize:'0.85rem'}}>
                  💡 Cuvinte-cheie găsite în răspunsul tău: 
                </strong>
                <span style={{color:'#166534', fontSize:'0.85rem'}}>
                  {' '}{cuvinteGasite.join(', ')}
                </span>
              </div>
            )}
          </div>
          
          {!scorSalvat && (
            <>
              <div style={{
                padding:'0.6rem', background:'#fef3c7',
                borderRadius:'6px', marginBottom:'0.5rem',
                fontSize:'0.85rem', color:'#92400e',
                textAlign:'center', fontStyle:'italic',
              }}>
                💡 Compară răspunsul tău cu exemplul. Cum te-ai punctat?
              </div>
              
              <div style={{display:'flex', gap:'0.4rem'}}>
                <button
                  onClick={function() { setAutoEval('corect'); }}
                  style={{
                    flex:1, padding:'0.5rem',
                    background: autoEval === 'corect' ? '#16a34a' : '#dcfce7',
                    color: autoEval === 'corect' ? 'white' : '#15803d',
                    border:'none', borderRadius:'6px',
                    fontWeight:600, fontSize:'0.85rem', cursor:'pointer',
                  }}>
                  ✅ Complet ({punctajFinal}p)
                </button>
                <button
                  onClick={function() { setAutoEval('partial'); }}
                  style={{
                    flex:1, padding:'0.5rem',
                    background: autoEval === 'partial' ? '#d97706' : '#fef3c7',
                    color: autoEval === 'partial' ? 'white' : '#92400e',
                    border:'none', borderRadius:'6px',
                    fontWeight:600, fontSize:'0.85rem', cursor:'pointer',
                  }}>
                  🟡 Parțial ({punctajFinal/2}p)
                </button>
                <button
                  onClick={function() { setAutoEval('gresit'); }}
                  style={{
                    flex:1, padding:'0.5rem',
                    background: autoEval === 'gresit' ? '#dc2626' : '#fee2e2',
                    color: autoEval === 'gresit' ? 'white' : '#b91c1c',
                    border:'none', borderRadius:'6px',
                    fontWeight:600, fontSize:'0.85rem', cursor:'pointer',
                  }}>
                  ❌ Greșit (0p)
                </button>
              </div>
              
              {autoEval && (
                <div style={{marginTop:'0.75rem', textAlign:'center'}}>
                  <button
                    onClick={finalizeaza}
                    style={{
                      padding:'0.6rem 1.5rem',
                      background:'linear-gradient(135deg, #fbbf24, #d97706)',
                      color:'white', border:'none', borderRadius:'6px',
                      fontWeight:700, cursor:'pointer', fontSize:'0.95rem',
                    }}>
                    ✅ Salvează scorul ({calculeazaPunctaj()}p)
                  </button>
                </div>
              )}
            </>
          )}
          
          {scorSalvat && (
            <div style={{
              padding:'1rem',
              background:'#dcfce7',
              border:'2px solid #16a34a',
              borderRadius:'8px',
              textAlign:'center',
            }}>
              <strong style={{color:'#15803d', fontSize:'1rem'}}>
                ✅ Scor salvat: {calculeazaPunctaj()} / {punctajFinal} puncte
              </strong>
            </div>
          )}
        </>
      )}
    </div>
  );
}
