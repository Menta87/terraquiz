import { useState } from 'react';

// Unități de relief BAC pentru România
// Coordonate aproximative centrate pe forme stilizate
const RELIEF_UNITATI = {
  'Test_6': {
    'A': { name: 'Carpații Orientali', d: 'M340,80 L420,90 L450,180 L420,260 L380,250 L340,180 Z', textPos: [380, 170] },
    'B': { name: 'Carpații Meridionali', d: 'M250,250 L420,260 L420,310 L300,320 L240,290 Z', textPos: [320, 285] },
    'C': { name: 'Carpații Occidentali', d: 'M150,200 L240,210 L250,290 L180,310 L130,260 Z', textPos: [185, 250] },
    'D': { name: 'Subcarpații Moldovei', d: 'M420,90 L470,100 L490,200 L450,210 L420,180 Z', textPos: [455, 150] },
    'E': { name: 'Subcarpații Curburii', d: 'M450,210 L520,230 L530,290 L470,280 L440,250 Z', textPos: [485, 250] },
    'F': { name: 'Subcarpații Getici', d: 'M300,320 L420,330 L420,370 L320,380 L290,360 Z', textPos: [360, 350] },
    'G': { name: 'Podișul Moldovei', d: 'M470,100 L580,120 L590,200 L490,200 Z', textPos: [535, 155] },
    'H': { name: 'Podișul Transilvaniei', d: 'M180,160 L380,170 L380,250 L240,260 L160,210 Z', textPos: [270, 210] },
    'I': { name: 'Câmpia Română', d: 'M260,400 L580,400 L590,460 L260,460 Z', textPos: [420, 430] },
    'J': { name: 'Dobrogea', d: 'M580,200 L640,210 L630,360 L590,360 L580,300 Z', textPos: [610, 280] },
  }
};

const RAURI = {
  'Test_6': {
    1: { name: 'Mureș', d: 'M180,210 Q280,220 380,250' },
    2: { name: 'Olt', d: 'M340,180 Q360,300 380,400' },
    3: { name: 'Argeș', d: 'M380,300 Q400,360 420,420' },
    4: { name: 'Siret', d: 'M450,100 Q480,250 510,400' },
    5: { name: 'Prut', d: 'M510,100 Q550,250 580,400' },
    6: { name: 'Dunărea', d: 'M180,440 Q400,460 620,440' },
  }
};

const ORASE = {
  'Test_6': {
    7: { name: 'Cluj-Napoca', coords: [240, 200] },
    8: { name: 'Brașov', coords: [380, 270] },
    9: { name: 'Iași', coords: [540, 130] },
    10: { name: 'Timișoara', coords: [140, 260] },
    11: { name: 'Constanța', coords: [620, 320] },
    12: { name: 'Călărași', coords: [510, 430] },
  }
};

export default function RomaniaMap({ varianta = 'Test_6', onUnitClick = null, highlighted = null, mode = 'relief' }) {
  const [hoveredUnit, setHoveredUnit] = useState(null);
  
  const relief = RELIEF_UNITATI[varianta] || RELIEF_UNITATI['Test_6'];
  const rauri = RAURI[varianta] || RAURI['Test_6'];
  const orase = ORASE[varianta] || ORASE['Test_6'];
  
  function handleUnitClick(letter) {
    if (onUnitClick) {
      onUnitClick(letter, relief[letter].name);
    }
  }
  
  return (
    <div style={{
      width: '100%',
      maxWidth: '700px',
      margin: '0 auto',
      background: '#fef3c7',
      border: '2px solid #d97706',
      borderRadius: '12px',
      padding: '1rem',
      position: 'relative',
    }}>
      <div style={{textAlign:'center', marginBottom:'0.5rem', fontWeight:700, color:'#78350f', fontSize:'0.9rem'}}>
        🇷🇴 Harta României - {varianta.replace('_', ' ')}
      </div>
      
      <svg viewBox="0 0 700 500" style={{ width: '100%', height: 'auto', background: '#dbeafe', borderRadius: '8px' }}>
        {/* Granițele țării (conturul) */}
        <path 
          d="M120,160 L180,100 L300,80 L450,90 L580,100 L620,150 L650,250 L640,360 L600,440 L520,470 L380,470 L240,460 L150,420 L100,340 L90,250 Z"
          fill="#fffbeb"
          stroke="#78350f"
          strokeWidth="2"
        />
        
        {/* Unități de relief */}
        {Object.entries(relief).map(([letter, info]) => {
          const isHighlighted = letter === highlighted;
          const isHovered = letter === hoveredUnit;
          
          return (
            <g key={`unit-${letter}`}>
              <path
                d={info.d}
                fill={isHighlighted ? '#fbbf24' : (isHovered ? '#3b82f6' : '#94a3b8')}
                stroke="#fff"
                strokeWidth="1.5"
                onClick={() => handleUnitClick(letter)}
                onMouseEnter={() => setHoveredUnit(letter)}
                onMouseLeave={() => setHoveredUnit(null)}
                style={{ cursor: 'pointer', transition: 'fill 0.2s' }}
              />
              <text
                x={info.textPos[0]}
                y={info.textPos[1]}
                textAnchor="middle"
                style={{
                  fontFamily: 'system-ui',
                  fontSize: 16,
                  fontWeight: 'bold',
                  fill: '#1e293b',
                  pointerEvents: 'none',
                }}
              >
                {letter}
              </text>
            </g>
          );
        })}
        
        {/* Râuri */}
        {Object.entries(rauri).map(([num, river]) => (
          <g key={`river-${num}`}>
            <path
              d={river.d}
              fill="none"
              stroke="#1e40af"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            {/* Numărul râului - calculat din path */}
            <circle
              cx={parseFloat(river.d.match(/Q(\d+)/)?.[1] || 300)}
              cy={parseFloat(river.d.match(/Q\d+,(\d+)/)?.[1] || 250)}
              r={9}
              fill="#1e40af"
              stroke="#fff"
              strokeWidth={1.5}
            />
            <text
              x={parseFloat(river.d.match(/Q(\d+)/)?.[1] || 300)}
              y={parseFloat(river.d.match(/Q\d+,(\d+)/)?.[1] || 250) + 3}
              textAnchor="middle"
              style={{
                fontFamily: 'system-ui',
                fontSize: 10,
                fontWeight: 'bold',
                fill: '#fff',
                pointerEvents: 'none',
              }}
            >
              {num}
            </text>
          </g>
        ))}
        
        {/* Orașe */}
        {Object.entries(orase).map(([num, oras]) => (
          <g key={`city-${num}`}>
            <circle
              cx={oras.coords[0]}
              cy={oras.coords[1]}
              r={8}
              fill="#dc2626"
              stroke="#fff"
              strokeWidth={2}
            />
            <text
              x={oras.coords[0]}
              y={oras.coords[1] + 3}
              textAnchor="middle"
              style={{
                fontFamily: 'system-ui',
                fontSize: 9,
                fontWeight: 'bold',
                fill: '#fff',
                pointerEvents: 'none',
              }}
            >
              {num}
            </text>
          </g>
        ))}
      </svg>
      
      {hoveredUnit && (
        <div style={{
          position:'absolute', top:'1rem', right:'1rem',
          background:'#1e293b', color:'white',
          padding:'0.5rem 1rem', borderRadius:'8px',
          fontSize:'0.875rem', fontWeight:600,
          zIndex: 10,
        }}>
          {hoveredUnit}: {relief[hoveredUnit].name}
        </div>
      )}
      
      <div style={{textAlign:'center', marginTop:'0.75rem', fontSize:'0.85rem', color:'#78350f'}}>
        💡 Litere = unități de relief · Cifre albastre = râuri · Cifre roșii = orașe
      </div>
    </div>
  );
}
