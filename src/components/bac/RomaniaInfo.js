export default function RomaniaInfo({ varianta = 'Test_6' }) {
  const DATA = {
    'Test_6': {
      reliefuri: [
        { litera: 'A', nume: 'Carpații Orientali' },
        { litera: 'B', nume: 'Carpații Meridionali' },
        { litera: 'C', nume: 'Munții Apuseni (Carpații Occidentali)' },
        { litera: 'D', nume: 'Subcarpații Moldovei' },
        { litera: 'E', nume: 'Subcarpații Curburii' },
        { litera: 'F', nume: 'Subcarpații Getici' },
        { litera: 'G', nume: 'Podișul Moldovei' },
        { litera: 'H', nume: 'Podișul Transilvaniei' },
      ],
      rauri: [
        { numar: 1, nume: 'Mureș' },
        { numar: 2, nume: 'Olt' },
        { numar: 3, nume: 'Argeș' },
        { numar: 4, nume: 'Siret' },
        { numar: 5, nume: 'Prut' },
        { numar: 6, nume: 'Dunărea' },
      ],
      orase: [
        { numar: 7, nume: 'Cluj-Napoca' },
        { numar: 8, nume: 'Brașov' },
        { numar: 9, nume: 'Iași' },
        { numar: 10, nume: 'Timișoara' },
        { numar: 11, nume: 'Constanța' },
        { numar: 12, nume: 'Călărași' },
      ],
    },
  };
  
  const data = DATA[varianta] || DATA['Test_6'];
  
  return (
    <div style={{
      background: 'linear-gradient(135deg, #fef3c7, #fde68a)',
      border: '2px solid #d97706',
      borderRadius: '12px',
      padding: '1.5rem',
      marginBottom: '1.5rem',
    }}>
      <h3 style={{
        margin: '0 0 1rem',
        color: '#78350f',
        fontSize: '1.15rem',
        fontWeight: 800,
        textAlign: 'center',
      }}>
        🇷🇴 Harta României - Subiect II
      </h3>
      
      <div style={{
        background: 'white',
        padding: '1rem',
        borderRadius: '8px',
        marginBottom: '1rem',
        textAlign: 'center',
        border: '1px dashed #d97706',
      }}>
        <p style={{margin: 0, color: '#78350f', fontSize: '0.9rem', fontStyle: 'italic'}}>
          📌 Notă: Răspunde la întrebări folosind legenda de mai jos (echivalentă cu harta din BAC oficial)
        </p>
      </div>
      
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
        gap: '1rem',
      }}>
        {/* Unități de relief */}
        <div style={{
          background: 'white',
          padding: '1rem',
          borderRadius: '8px',
          border: '1px solid #fbbf24',
        }}>
          <h4 style={{margin: '0 0 0.5rem', color: '#78350f', fontSize: '0.95rem'}}>
            🏔️ Unități de relief
          </h4>
          <ul style={{margin: 0, padding: 0, listStyle: 'none', fontSize: '0.85rem'}}>
            {data.reliefuri.map(function(r) {
              return (
                <li key={r.litera} style={{padding: '0.2rem 0', color: '#1e293b'}}>
                  <strong style={{color: '#92400e'}}>{r.litera}</strong> - {r.nume}
                </li>
              );
            })}
          </ul>
        </div>
        
        {/* Râuri */}
        <div style={{
          background: 'white',
          padding: '1rem',
          borderRadius: '8px',
          border: '1px solid #0284c7',
        }}>
          <h4 style={{margin: '0 0 0.5rem', color: '#0c4a6e', fontSize: '0.95rem'}}>
            💧 Râuri (cifre albastre)
          </h4>
          <ul style={{margin: 0, padding: 0, listStyle: 'none', fontSize: '0.85rem'}}>
            {data.rauri.map(function(r) {
              return (
                <li key={r.numar} style={{padding: '0.2rem 0', color: '#1e293b'}}>
                  <strong style={{color: '#1e40af'}}>{r.numar}</strong> - {r.nume}
                </li>
              );
            })}
          </ul>
        </div>
        
        {/* Orașe */}
        <div style={{
          background: 'white',
          padding: '1rem',
          borderRadius: '8px',
          border: '1px solid #dc2626',
        }}>
          <h4 style={{margin: '0 0 0.5rem', color: '#7f1d1d', fontSize: '0.95rem'}}>
            🏙️ Orașe (cifre roșii)
          </h4>
          <ul style={{margin: 0, padding: 0, listStyle: 'none', fontSize: '0.85rem'}}>
            {data.orase.map(function(o) {
              return (
                <li key={o.numar} style={{padding: '0.2rem 0', color: '#1e293b'}}>
                  <strong style={{color: '#b91c1c'}}>{o.numar}</strong> - {o.nume}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
