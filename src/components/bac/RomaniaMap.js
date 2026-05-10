import { useState } from 'react';

const RELIEF_DATA = {
  'Test_6': {
    'A': { 
      name: 'Carpații Orientali',
      path: 'M 380,180 L 410,170 L 440,180 L 460,210 L 470,250 L 460,290 L 440,320 L 420,330 L 410,320 L 405,290 L 400,260 L 395,230 L 388,210 Z',
      textPos: [430, 250],
    },
    'B': { 
      name: 'Carpații Meridionali',
      path: 'M 280,340 L 340,335 L 400,340 L 440,345 L 440,375 L 400,380 L 340,380 L 290,378 L 270,360 Z',
      textPos: [355, 360],
    },
    'C': { 
      name: 'Munții Apuseni',
      path: 'M 220,260 L 270,255 L 300,275 L 310,310 L 290,340 L 250,345 L 215,330 L 200,300 L 205,275 Z',
      textPos: [255, 300],
    },
    'D': { 
      name: 'Subcarpații Moldovei',
      path: 'M 460,180 L 490,180 L 500,220 L 495,260 L 480,290 L 470,300 L 465,260 L 462,220 Z',
      textPos: [482, 235],
    },
    'E': { 
      name: 'Subcarpații Curburii',
      path: 'M 440,320 L 480,320 L 495,340 L 490,365 L 470,375 L 445,370 L 440,345 Z',
      textPos: [465, 345],
    },
    'F': { 
      name: 'Subcarpații Getici',
      path: 'M 280,380 L 340,380 L 400,380 L 430,385 L 425,415 L 390,420 L 340,420 L 290,415 L 275,395 Z',
      textPos: [350, 400],
    },
    'G': { 
      name: 'Podișul Moldovei',
      path: 'M 490,180 L 540,175 L 555,210 L 555,260 L 545,300 L 525,320 L 510,310 L 500,280 L 495,240 L 492,210 Z',
      textPos: [525, 245],
    },
    'H': { 
      name: 'Podișul Transilvaniei',
      path: 'M 270,255 L 310,260 L 350,270 L 380,280 L 400,300 L 390,330 L 360,335 L 320,335 L 290,330 L 270,310 L 265,280 Z',
      textPos: [330, 295],
    },
    'I': { 
      name: 'Câmpia Română',
      path: 'M 230,430 L 280,425 L 340,425 L 400,425 L 460,425 L 510,420 L 550,415 L 580,420 L 595,440 L 585,460 L 540,470 L 480,475 L 420,475 L 360,475 L 300,470 L 250,465 L 220,450 Z',
      textPos: [410, 450],
    },
    'J': { 
      name: 'Dobrogea',
      path: 'M 555,300 L 590,290 L 615,310 L 620,360 L 615,400 L 595,420 L 575,415 L 560,395 L 555,360 L 555,330 Z',
      textPos: [588, 360],
    },
  }
};

const RAURI_DATA = {
  'Test_6': {
    1: { name: 'Mureș', path: 'M 200,290 Q 280,300 360,310 Q 410,315 460,325', labelPos: [280, 305] },
    2: { name: 'Olt', path: 'M 410,250 Q 415,330 420,400 Q 425,440 430,470', labelPos: [425, 380] },
    3: { name: 'Argeș', path: 'M 400,360 Q 410,400 420,440 Q 425,460 430,475', labelPos: [415, 420] },
    4: { name: 'Siret', path: 'M 470,180 Q 490,280 510,380 Q 520,430 530,470', labelPos: [510, 380] },
    5: { name: 'Prut', path: 'M 540,180 Q 555,280 565,380 Q 570,430 575,470', labelPos: [565, 380] },
    6: { name: 'Dunărea', path: 'M 200,450 Q 350,475 500,470 Q 580,465 620,430', labelPos: [400, 477] },
  }
};

const ORASE_DATA = {
  'Test_6': {
    7: { name: 'Cluj-Napoca', coords: [310, 280] },
    8: { name: 'Brașov', coords: [400, 340] },
    9: { name: 'Iași', coords: [530, 220] },
    10: { name: 'Timișoara', coords: [220, 340] },
    11: { name: 'Constanța', coords: [605, 380] },
    12: { name: 'Călărași', coords: [510, 460] },
  }
};

// Contur aproximativ România (granițe stilizate)
const ROMANIA_BORDER = 'M 200,180 L 240,160 L 300,150 L 380,155 L 460,160 L 530,165 L 580,180 L 600,210 L 610,260 L 625,310 L 630,370 L 620,420 L 590,460 L 540,485 L 470,490 L 400,488 L 320,485 L 250,475 L 200,455 L 170,420 L 160,370 L 165,310 L 175,250 L 185,210 Z';

export default function RomaniaMap({ varianta = 'Test_6', onUnitClick = null, highlighted = null }) {
  const [hoveredUnit, setHoveredUnit] = useState(null);
  const [hoveredRiver, setHoveredRiver] = useState(null);
  const [hoveredCity, setHoveredCity] = useState(null);
  
  const relief = RELIEF_DATA[varianta] || RELIEF_DATA['Test_6'];
  const rauri = RAURI_DATA[varianta] || RAURI_DATA['Test_6'];
  const orase = ORASE_DATA[varianta] || ORASE_DATA['Test_6'];
  
  function handleUnitClick(letter) {
    if (onUnitClick) {
      onUnitClick(letter, relief[letter].name);
    }
  }
  
  return (
    <div style={{
      width: '100%',
      maxWidth: '750px',
      margin: '0 auto',
      background: '#dbeafe',
      border: '2px solid #0284c7',
      borderRadius: '12px',
      padding: '1rem',
      position: 'relative',
    }}>
      <div style={{textAlign:'center', marginBottom:'0.5rem', fontWeight:700, color:'#0c4a6e', fontSize:'0.95rem'}}>
        🇷🇴 Harta României - {varianta.replace('_', ' ')}
      </div>
      
      <svg viewBox="100 130 560 380" style={{ width: '100%', height: 'auto', background: '#e0f2fe', borderRadius: '8px' }}>
        {/* Conturul țării */}
        <path 
          d={ROMANIA_BORDER}
          fill="#fef3c7"
          stroke="#78350f"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />
        
        {/* Unități de relief */}
        {Object.entries(relief).map(function(entry) {
          const letter = entry[0];
          const info = entry[1];
          const isHighlighted = letter === highlighted;
          const isHovered = letter === hoveredUnit;
          
          let fillColor = '#a3a3a3';
          if (isHighlighted) fillColor = '#fbbf24';
          else if (isHovered) fillColor = '#3b82f6';
          else if (letter === 'I') fillColor = '#86efac'; // Câmpia - verde deschis
          else if (letter === 'J') fillColor = '#fde68a'; // Dobrogea - galben deschis
          else if (['A','B','C'].includes(letter)) fillColor = '#94a3b8'; // Munți - gri închis
          else if (['D','E','F'].includes(letter)) fillColor = '#cbd5e1'; // Subcarpați - gri deschis
          else fillColor = '#a7f3d0'; // Podișuri - verde foarte deschis
          
          return (
            <g key={'unit-' + letter}>
              <path
                d={info.path}
                fill={fillColor}
                stroke="#1e293b"
                strokeWidth="1"
                onClick={function() { handleUnitClick(letter); }}
                onMouseEnter={function() { setHoveredUnit(letter); }}
                onMouseLeave={function() { setHoveredUnit(null); }}
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
                  fill: '#000',
                  stroke: '#fff',
                  strokeWidth: 3,
                  paintOrder: 'stroke',
                  pointerEvents: 'none',
                }}
              >
                {letter}
              </text>
            </g>
          );
        })}
        
        {/* Râuri */}
        {Object.entries(rauri).map(function(entry) {
          const num = entry[0];
          const river = entry[1];
          return (
            <g key={'river-' + num}>
              <path
                d={river.path}
                fill="none"
                stroke="#1e40af"
                strokeWidth="3"
                strokeLinecap="round"
                opacity="0.85"
                onMouseEnter={function() { setHoveredRiver(num); }}
                onMouseLeave={function() { setHoveredRiver(null); }}
                style={{cursor:'help'}}
              />
              <circle
                cx={river.labelPos[0]}
                cy={river.labelPos[1]}
                r={10}
                fill="#1e40af"
                stroke="#fff"
                strokeWidth={2}
                onMouseEnter={function() { setHoveredRiver(num); }}
                onMouseLeave={function() { setHoveredRiver(null); }}
                style={{cursor:'help'}}
              />
              <text
                x={river.labelPos[0]}
                y={river.labelPos[1] + 4}
                textAnchor="middle"
                style={{
                  fontFamily: 'system-ui',
                  fontSize: 11,
                  fontWeight: 'bold',
                  fill: '#fff',
                  pointerEvents: 'none',
                }}
              >
                {num}
              </text>
            </g>
          );
        })}
        
        {/* Orașe */}
        {Object.entries(orase).map(function(entry) {
          const num = entry[0];
          const oras = entry[1];
          return (
            <g key={'city-' + num}>
              <circle
                cx={oras.coords[0]}
                cy={oras.coords[1]}
                r={10}
                fill="#dc2626"
                stroke="#fff"
                strokeWidth={2}
                onMouseEnter={function() { setHoveredCity(num); }}
                onMouseLeave={function() { setHoveredCity(null); }}
                style={{cursor:'help'}}
              />
              <text
                x={oras.coords[0]}
                y={oras.coords[1] + 4}
                textAnchor="middle"
                style={{
                  fontFamily: 'system-ui',
                  fontSize: 11,
                  fontWeight: 'bold',
                  fill: '#fff',
                  pointerEvents: 'none',
                }}
              >
                {num}
              </text>
            </g>
          );
        })}
      </svg>
      
      {/* Tooltip hover */}
      {(hoveredUnit || hoveredRiver || hoveredCity) && (
        <div style={{
          position:'absolute', top:'1rem', right:'1rem',
          background:'#1e293b', color:'white',
          padding:'0.5rem 1rem', borderRadius:'8px',
          fontSize:'0.875rem', fontWeight:600,
          zIndex: 10,
          boxShadow:'0 4px 12px rgba(0,0,0,0.2)',
        }}>
          {hoveredUnit && relief[hoveredUnit] && (
            <span>🏔️ {hoveredUnit}: {relief[hoveredUnit].name}</span>
          )}
          {hoveredRiver && rauri[hoveredRiver] && (
            <span>💧 {hoveredRiver}: {rauri[hoveredRiver].name}</span>
          )}
          {hoveredCity && orase[hoveredCity] && (
            <span>🏙️ {hoveredCity}: {orase[hoveredCity].name}</span>
          )}
        </div>
      )}
      
      <div style={{
        marginTop:'0.75rem', padding:'0.6rem',
        background:'white', borderRadius:'6px',
        fontSize:'0.8rem', color:'#475569',
        textAlign:'center',
      }}>
        💡 <strong>Litere</strong> = unități de relief · <strong>Cifre albastre</strong> = râuri · <strong>Cifre roșii</strong> = orașe
      </div>
    </div>
  );
}
