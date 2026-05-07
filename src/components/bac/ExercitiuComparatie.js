import { useState } from 'react';

export default function ExercitiuComparatie({
  enunt,
  raspunsExemplu,
  punctajMaxim = 6,
  onRaspuns,
}) {
  const [deosebiri, setDeosebiri] = useState(['', '', '']);
  const [verificat, setVerificat] = useState(false);
  const [autoEval, setAutoEval] = useState([null, null, null]);
  const [scorSalvat, setScorSalvat] = useState(false);
  
  function setDeosebire(index, valoare) {
    const noi = [...deosebiri];
    noi[index] = valoare;
    setDeosebiri(noi);
  }
  
  function setEval(index, valoare) {
    const noi = [...autoEval];
    noi[index] = valoare;
    setAutoEval(noi);
  }
  
  function arataRaspuns() {
    setVerificat(true);
  }
  
  function calculeazaPunctaj() {
    const punctePerDeosebire = punctajMaxim / 3;
    return autoEval.reduce((total, ev) => {
      if (ev === 'corect') return total + punctePerDeosebire;
      if (ev === 'partial') return total + punctePerDeosebire / 2;
      return total;
    }, 0);
  }
  
  function finalizeaza() {
    const puncte = calculeazaPunctaj();
    setScorSalvat(true);
    if (onRaspuns) {
      onRaspuns({
        raspuns: deosebiri,
        corect: puncte === punctajMaxim,
        puncte: puncte,
      });
    }
  }
  
  const puncteCalculate = calculeazaPunctaj();
  const toateAutoEvaluate = autoEval.every(e => e !== null);
  
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
          {punctajMaxim}p
        </span>
      </div>
      
      <div style={{fontSize:'0.85rem', color:'#64748b', marginBottom:'0.75rem', fontStyle:'italic'}}>
        💡 Scrie 3 deosebiri (fiecare valorează {punctajMaxim/3} puncte)
      </div>
      
      {[0, 1, 2].map((index) => (
        <div key={index} style={{marginBottom:'0.75rem'}}>
          <label style={{display:'block', fontSize:'0.85rem', fontWeight:600, color:'#475569', marginBottom:'0.25rem'}}>
            Deosebirea {index + 1}:
          </label>
          <textarea
            value={deosebiri[index]}
            onChange={(e) => setDeosebire(index, e.target.value)}
            disabled={verificat}
            placeholder="Scrie deosebirea aici..."
            rows={2}
            style={{
              width:'100%',
              padding:'0.6rem',
              border:'2px solid #cbd5e1',
              borderRadius:'8px',
              fontSize:'0.9rem',
              fontFamily:'inherit',
              resize:'vertical',
            }}
          />
          
          {verificat && !scorSalvat && (
            <div style={{display:'flex', gap:'0.4rem', marginTop:'0.4rem'}}>
              <button
                onClick={() => setEval(index, 'corect')}
                style={{
                  flex:1, padding:'0.4rem',
                  background: autoEval[index] === 'corect' ? '#16a34a' : '#dcfce7',
                  color: autoEval[index] === 'corect' ? 'white' : '#15803d',
                  border:'none', borderRadius:'6px',
                  fontWeight:600, fontSize:'0.8rem', cursor:'pointer',
                }}>
                ✅ Corect ({punctajMaxim/3}p)
              </button>
              <button
                onClick={() => setEval(index, 'partial')}
                style={{
                  flex:1, padding:'0.4rem',
                  background: autoEval[index] === 'partial' ? '#d97706' : '#fef3c7',
                  color: autoEval[index] === 'partial' ? 'white' : '#92400e',
                  border:'none', borderRadius:'6px',
                  fontWeight:600, fontSize:'0.8rem', cursor:'pointer',
                }}>
                🟡 Parțial ({punctajMaxim/6}p)
              </button>
              <button
                onClick={() => setEval(index, 'gresit')}
                style={{
                  flex:1, padding:'0.4rem',
                  background: autoEval[index] === 'gresit' ? '#dc2626' : '#fee2e2',
                  color: autoEval[index] === 'gresit' ? 'white' : '#b91c1c',
                  border:'none', borderRadius:'6px',
                  fontWeight:600, fontSize:'0.8rem', cursor:'pointer',
                }}>
                ❌ Greșit (0p)
              </button>
            </div>
          )}
        </div>
      ))}
      
      {!verificat && (
        <button
          onClick={arataRaspuns}
          disabled={deosebiri.every(d => !d.trim())}
          style={{
            width:'100%', padding:'0.7rem',
            background: deosebiri.some(d => d.trim()) ? '#0284c7' : '#cbd5e1',
            color:'white', border:'none', borderRadius:'8px',
            fontWeight:700, fontSize:'0.95rem',
            cursor: deosebiri.some(d => d.trim()) ? 'pointer' : 'not-allowed',
            marginTop:'0.5rem',
          }}>
          📋 Verifică (vezi exemplu de răspuns)
        </button>
      )}
      
      {verificat && (
        <>
          <div style={{
            marginTop:'1rem', padding:'1rem',
            background:'#eff6ff',
            border:'2px solid #0284c7',
            borderRadius:'8px',
          }}>
            <h4 style={{margin:'0 0 0.5rem', color:'#0c4a6e', fontSize:'0.95rem'}}>
              📚 Exemplu de răspuns corect:
            </h4>
            <ul style={{margin:0, paddingLeft:'1.2rem', color:'#1e293b', fontSize:'0.9rem', lineHeight:1.6}}>
              {raspunsExemplu.map((r, i) => (
                <li key={i}>{r}</li>
              ))}
            </ul>
            <p style={{margin:'0.5rem 0 0', fontSize:'0.8rem', color:'#475569', fontStyle:'italic'}}>
              💡 Compară-ți răspunsurile cu acest exemplu și auto-evaluează-te corect!
            </p>
          </div>
          
          {toateAutoEvaluate && !scorSalvat && (
            <div style={{
              marginTop:'1rem', padding:'1rem',
              background:'linear-gradient(135deg, #fbbf24, #d97706)',
              color:'white', borderRadius:'8px',
              textAlign:'center',
            }}>
              <strong style={{fontSize:'1.1rem'}}>
                🎯 Punctaj: {puncteCalculate} / {punctajMaxim} puncte
              </strong>
              <div style={{marginTop:'0.5rem'}}>
                <button
                  onClick={finalizeaza}
                  style={{
                    padding:'0.5rem 1rem',
                    background:'white', color:'#d97706',
                    border:'none', borderRadius:'6px',
                    fontWeight:700, cursor:'pointer',
                  }}>
                  ✅ Salvează scorul
                </button>
              </div>
            </div>
          )}
          
          {scorSalvat && (
            <div style={{
              marginTop:'1rem', padding:'1rem',
              background:'#dcfce7',
              border:'2px solid #16a34a',
              borderRadius:'8px',
              textAlign:'center',
            }}>
              <strong style={{color:'#15803d', fontSize:'1rem'}}>
                ✅ Scor salvat: {puncteCalculate} / {punctajMaxim} puncte
              </strong>
            </div>
          )}
        </>
      )}
    </div>
  );
}
