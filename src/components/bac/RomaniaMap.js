import { useState } from 'react';
import romaniaMap from '@svg-maps/romania';

const JUDET_TO_RELIEF = {
  'ro-mm': 'A', 'ro-sm': 'A', 'ro-sv': 'A', 'ro-bn': 'A',
  'ro-hr': 'A', 'ro-cv': 'A',
  'ro-hd': 'B', 'ro-sb': 'B',
  'ro-bh': 'C', 'ro-ar': 'C', 'ro-cs': 'C',
  'ro-nt': 'D', 'ro-bc': 'D',
  'ro-ph': 'E', 'ro-bz': 'E', 'ro-vn': 'E',
  'ro-ag': 'F', 'ro-vl': 'F', 'ro-gj': 'F',
  'ro-is': 'G', 'ro-bt': 'G', 'ro-vs': 'G', 'ro-gl': 'G',
  'ro-cj': 'H', 'ro-ms': 'H', 'ro-ab': 'H', 'ro-sj': 'H', 'ro-bv': 'H',
  'ro-b': 'I', 'ro-if': 'I', 'ro-gr': 'I', 'ro-cl': 'I',
  'ro-tr': 'I', 'ro-ot': 'I', 'ro-dj': 'I', 'ro-mh': 'I',
  'ro-il': 'I', 'ro-br': 'I',
  'ro-ct': 'J', 'ro-tl': 'J',
  'ro-tm': 'I',
};

const RELIEF_INFO = {
  'A': { name: 'Carpatii Orientali', color: '#78716c' },
  'B': { name: 'Carpatii Meridionali', color: '#57534e' },
  'C': { name: 'Muntii Apuseni', color: '#44403c' },
  'D': { name: 'Subcarpatii Moldovei', color: '#a8a29e' },
  'E': { name: 'Subcarpatii Curburii', color: '#a8a29e' },
  'F': { name: 'Subcarpatii Getici', color: '#a8a29e' },
  'G': { name: 'Podisul Moldovei', color: '#84cc16' },
  'H': { name: 'Podisul Transilvaniei', color: '#a3e635' },
  'I': { name: 'Campia Romana', color: '#fde047' },
  'J': { name: 'Dobrogea', color: '#fbbf24' },
};

const RAURI_DATA = {
  'Test_6': {
    1: { name: 'Mures', labelPos: [240, 175], path: 'M 290,115 Q 270,135 250,160 Q 230,180 200,210 Q 165,225 130,235' },
    2: { name: 'Olt', labelPos: [318, 295], path: 'M 305,180 Q 312,220 320,260 Q 322,290 320,320 Q 318,360 315,395' },
    3: { name: 'Arges', labelPos: [370, 345], path: 'M 340,260 Q 355,295 370,325 Q 385,360 405,390' },
    4: { name: 'Siret', labelPos: [410, 230], path: 'M 460,60 Q 445,110 432,160 Q 420,210 410,260 Q 400,320 395,380 Q 395,395 400,405' },
    5: { name: 'Prut', labelPos: [515, 180], path: 'M 500,50 Q 503,90 506,140 Q 510,200 515,260 Q 518,310 520,355 Q 520,375 515,395' },
    6: { name: 'Dunarea', labelPos: [310, 410], path: 'M 100,355 Q 180,395 260,405 Q 340,415 420,410 Q 480,405 530,385 Q 555,365 565,335 Q 575,310 580,290' },
  }
};

const ORASE_DATA = {
  'Test_6': {
    7: { name: 'Cluj-Napoca', coords: [218, 138] },
    8: { name: 'Brasov', coords: [332, 240] },
    9: { name: 'Iasi', coords: [469, 109] },
    10: { name: 'Timisoara', coords: [102, 231] },
    11: { name: 'Constanta', coords: [555, 340] },
    12: { name: 'Calarasi', coords: [443, 360] },
  }
};

export default function RomaniaMap({ varianta = 'Test_6', onUnitClick = null, highlighted = null }) {
  const [hoveredJudet, setHoveredJudet] = useState(null);
  const [hoveredRiver, setHoveredRiver] = useState(null);
  const [hoveredCity, setHoveredCity] = useState(null);
  
  const rauri = RAURI_DATA[varianta] || RAURI_DATA['Test_6'];
  const orase = ORASE_DATA[varianta] || ORASE_DATA['Test_6'];
  
  function getJudetColor(judetId) {
    const relief = JUDET_TO_RELIEF[judetId];
    if (!relief) return '#e5e7eb';
    if (relief === highlighted) return '#fbbf24';
    return RELIEF_INFO[relief].color;
  }
  
  function handleJudetClick(judet) {
    const relief = JUDET_TO_RELIEF[judet.id];
    if (relief && onUnitClick) {
      onUnitClick(relief, RELIEF_INFO[relief].name);
    }
  }
  
  let hoverText = null;
  if (hoveredJudet) {
    const relief = JUDET_TO_RELIEF[hoveredJudet.id];
    if (relief) {
      hoverText = hoveredJudet.name + ' (' + relief + ': ' + RELIEF_INFO[relief].name + ')';
    } else {
      hoverText = hoveredJudet.name;
    }
  } else if (hoveredRiver) {
    hoverText = hoveredRiver + ': ' + rauri[hoveredRiver].name;
  } else if (hoveredCity) {
    hoverText = hoveredCity + ': ' + orase[hoveredCity].name;
  }
  
  return (
    <div style={{
      width: '100%',
      maxWidth: '800px',
      margin: '0 auto',
      background: '#dbeafe',
      border: '2px solid #0284c7',
      borderRadius: '12px',
      padding: '1rem',
      position: 'relative',
    }}>
      <div style={{textAlign:'center', marginBottom:'0.5rem', fontWeight:700, color:'#0c4a6e', fontSize:'0.95rem'}}>
        Harta Romaniei
      </div>
      
      <svg 
        viewBox={romaniaMap.viewBox} 
        style={{ width: '100%', height: 'auto', background: '#e0f2fe', borderRadius: '8px' }}
      >
        {romaniaMap.locations.map(function(judet) {
          const isHovered = hoveredJudet && hoveredJudet.id === judet.id;
          const baseColor = getJudetColor(judet.id);
          
          return (
            <path
              key={judet.id}
              d={judet.path}
              fill={isHovered ? '#3b82f6' : baseColor}
              stroke="#1e293b"
              strokeWidth="0.5"
              onClick={function() { handleJudetClick(judet); }}
              onMouseEnter={function() { setHoveredJudet(judet); }}
              onMouseLeave={function() { setHoveredJudet(null); }}
              style={{ cursor: 'pointer', transition: 'fill 0.2s' }}
            />
          );
        })}
        
        {Object.entries(rauri).map(function(entry) {
          const num = entry[0];
          const river = entry[1];
          return (
            <g key={'river-' + num}>
              <path
                d={river.path}
                fill="none"
                stroke="#1e40af"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                opacity="0.85"
                style={{pointerEvents: 'none'}}
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
                style={{cursor: 'help'}}
              />
              <text
                x={river.labelPos[0]}
                y={river.labelPos[1] + 3}
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
        
        {Object.entries(orase).map(function(entry) {
          const num = entry[0];
          const oras = entry[1];
          return (
            <g key={'city-' + num}>
              <circle
                cx={oras.coords[0]}
                cy={oras.coords[1]}
                r={9}
                fill="#dc2626"
                stroke="#fff"
                strokeWidth={2}
                onMouseEnter={function() { setHoveredCity(num); }}
                onMouseLeave={function() { setHoveredCity(null); }}
                style={{cursor: 'help'}}
              />
              <text
                x={oras.coords[0]}
                y={oras.coords[1] + 3}
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
          );
        })}
      </svg>
      
      {hoverText && (
        <div style={{
          position: 'absolute',
          top: '1rem',
          right: '1rem',
          background: '#1e293b',
          color: 'white',
          padding: '0.5rem 1rem',
          borderRadius: '8px',
          fontSize: '0.875rem',
          fontWeight: 600,
          zIndex: 10,
          boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
        }}>
          {hoverText}
        </div>
      )}
      
      <div style={{
        marginTop: '0.75rem',
        padding: '0.6rem',
        background: 'white',
        borderRadius: '6px',
        fontSize: '0.8rem',
        color: '#475569',
        textAlign: 'center',
      }}>
        💡 Hover pe judete pentru relief · Cifre albastre = rauri · Cifre rosii = orase
      </div>
    </div>
  );
}
