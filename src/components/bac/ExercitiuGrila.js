import { useState } from 'react';

export default function ExercitiuGrila({
  enunt,
  variante,            // {a: "Bratislava", b: "Budapesta", c: "Praga", d: "Viena"}
  raspunsCorect,       // "d"
  punctaj = 2,
  onRaspuns,
}) {
  const [selectie, setSelectie] = useState(null);
  const [verificat, setVerificat] = useState(false);
  const [corect, setCorect] = useState(false);
  
  function verifica() {
    const esteCorect = selectie === raspunsCorect;
    setCorect(esteCorect);
    setVerificat(true);
    
    if (onRaspuns) {
      onRaspuns({
        raspuns: selectie,
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
      
      <div style={{display:'flex', flexDirection:'column', gap:'0.4rem', marginBottom:'0.75rem'}}>
        {Object.entries(variante).map(([litera, text]) => {
          const esteSelectata = selectie === litera;
          const esteCorectaAfisata = verificat && litera === raspunsCorect;
          const esteGresita = verificat && esteSelectata && !corect;
          
          let bg = 'white';
          let border = '#cbd5e1';
          let color = '#1e293b';
          
          if (esteCorectaAfisata) { bg = '#dcfce7'; border = '#16a34a'; color = '#15803d'; }
          else if (esteGresita) { bg = '#fee2e2'; border = '#dc2626'; color = '#b91c1c'; }
          else if (esteSelectata) { bg = '#dbeafe'; border = '#0284c7'; color = '#1e40af'; }
          
          return (
            <button
              key={litera}
              onClick={() => !verificat && setSelectie(litera)}
              disabled={verificat}
              style={{
                background: bg, border: `2px solid ${border}`, color: color,
                padding: '0.7rem 1rem', borderRadius: '8px',
                textAlign: 'left', cursor: verificat ? 'default' : 'pointer',
                fontSize: '0.95rem', fontWeight: 500,
                transition: 'all 0.2s',
              }}>
              <strong>{litera})</strong> {text}
            </button>
          );
        })}
      </div>
      
      {!verificat && (
        <button
          onClick={verifica}
          disabled={!selectie}
          style={{
            width:'100%', padding:'0.7rem',
            background: selectie ? '#0284c7' : '#cbd5e1',
            color:'white', border:'none', borderRadius:'8px',
            fontWeight:700, fontSize:'0.95rem',
            cursor: selectie ? 'pointer' : 'not-allowed',
          }}>
          Verifică răspunsul
        </button>
      )}
      
      {verificat && (
        <div style={{
          padding:'0.75rem',
          background: corect ? '#dcfce7' : '#fee2e2',
          border: `1px solid ${corect ? '#16a34a' : '#dc2626'}`,
          borderRadius:'8px',
          fontSize:'0.9rem',
        }}>
          {corect ? (
            <strong style={{color:'#15803d'}}>✅ Corect! +{punctaj}p</strong>
          ) : (
            <>
              <strong style={{color:'#b91c1c'}}>❌ Greșit. </strong>
              <span style={{color:'#1e293b'}}>Corect: <strong>{raspunsCorect}) {variante[raspunsCorect]}</strong></span>
            </>
          )}
        </div>
      )}
    </div>
  );
}
