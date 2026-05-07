import { useState } from 'react';

export default function ExercitiuCompletare({
  enuntInainte,        // "Capitala statului marcat, pe hartă, cu litera B se numește"
  enuntDupa = "",      // "" sau "...și are populația..."
  raspunsCorect,
  raspunsuriAcceptate,
  punctaj = 2,
  onRaspuns,
}) {
  const [raspunsUser, setRaspunsUser] = useState('');
  const [verificat, setVerificat] = useState(false);
  const [corect, setCorect] = useState(false);
  
  function verifica() {
    const raspunsCurat = raspunsUser.trim().toLowerCase();
    const accepta = (raspunsuriAcceptate || [raspunsCorect]).map(r => r.toLowerCase());
    const esteCorect = accepta.includes(raspunsCurat);
    
    setCorect(esteCorect);
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
        <div style={{flex:1, fontSize:'1rem', color:'#1e293b', lineHeight:1.6}}>
          {enuntInainte}{' '}
          <input
            type="text"
            value={raspunsUser}
            onChange={(e) => setRaspunsUser(e.target.value)}
            disabled={verificat}
            placeholder="..."
            style={{
              padding:'0.3rem 0.6rem',
              border: verificat ? `2px solid ${corect ? '#16a34a' : '#dc2626'}` : '2px solid #cbd5e1',
              borderRadius:'6px',
              fontSize:'0.95rem',
              width:'180px',
              outline:'none',
              fontWeight:600,
              color: verificat ? (corect ? '#15803d' : '#b91c1c') : '#1e293b',
            }}
          />{' '}
          {enuntDupa}
        </div>
        <span style={{
          background:'#dbeafe', color:'#1e40af',
          padding:'0.25rem 0.6rem', borderRadius:'6px',
          fontSize:'0.8rem', fontWeight:700, marginLeft:'1rem',
          whiteSpace:'nowrap',
        }}>
          {punctaj}p
        </span>
      </div>
      
      {!verificat && (
        <button
          onClick={verifica}
          disabled={!raspunsUser.trim()}
          style={{
            padding:'0.6rem 1.2rem',
            background: raspunsUser.trim() ? '#0284c7' : '#cbd5e1',
            color:'white', border:'none', borderRadius:'8px',
            fontWeight:700, fontSize:'0.9rem',
            cursor: raspunsUser.trim() ? 'pointer' : 'not-allowed',
          }}>
          Verifică
        </button>
      )}
      
      {verificat && (
        <div style={{
          marginTop:'0.5rem', padding:'1rem',
          background: corect ? '#dcfce7' : '#fee2e2',
          border: `2px solid ${corect ? '#16a34a' : '#dc2626'}`,
          borderRadius:'8px',
          fontSize:'0.95rem',
        }}>
          {corect ? (
            <div>
              <strong style={{color:'#15803d', fontSize:'1.1rem'}}>✅ Corect! +{punctaj} puncte</strong>
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
