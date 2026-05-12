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
  'A': { name: 'Carpatii Orientali', color: '#78716c', letterPos: [395, 145] },
  'B': { name: 'Carpatii Meridionali', color: '#57534e', letterPos: [275, 280] },
  'C': { name: 'Muntii Apuseni', color: '#44403c', letterPos: [195, 195] },
  'D': { name: 'Subcarpatii Moldovei', color: '#a8a29e', letterPos: [430, 195] },
  'E': { name: 'Subcarpatii Curburii', color: '#a8a29e', letterPos: [395, 275] },
  'F': { name: 'Subcarpatii Getici', color: '#a8a29e', letterPos: [320, 315] },
  'G': { name: 'Podisul Moldovei', color: '#84cc16', letterPos: [475, 165] },
  'H': { name: 'Podisul Transilvaniei', color: '#a3e635', letterPos: [275, 200] },
  'I': { name: 'Campia Romana', color: '#fde047', letterPos: [330, 380] },
  'J': { name: 'Dobrogea', color: '#fbbf24', letterPos: [555, 290] },
};

const RAURI_DATA = {
  'Test_6': {
    1: { name: 'Mures', labelPos: [240, 175] },
    2: { name: 'Olt', labelPos: [318, 295] },
    3: { name: 'Arges', labelPos: [370, 345] },
    4: { name: 'Siret', labelPos: [410, 230] },
    5: { name: 'Prut', labelPos: [515, 180] },
    6: { name: 'Dunarea', labelPos: [310, 410] },
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
  const [hoveredRelief, setHoveredRelief] = useState(null);
  
  const rauri = RAURI_DATA[varianta] || RAURI_DATA['Test_6'];
  const orase = ORASE_DATA[varianta] || ORASE_DATA['Test_6'];
  
  function getJudetColor(judetId) {
    const relief = JUDET_TO_RELIEF[judetId];
    if (!relief) return '#e5e7eb';
    if (relief === highlighted) return '#fbbf24';
    if (relief === hoveredRelief) return '#fcd34d';
    return RELIEF_INFO[relief].color;
  }
  
  function handleJudetClick(judet) {
    const relief = JUDET_TO_RELIEF[judet.id];
    if (relief && onUnitClick) {
      onUnitClick(relief, RELIEF_INFO[relief].name);
    }
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
      <svg 
        viewBox={romaniaMap.viewBox} 
        style={{ width: '100%', height: 'auto', background: '#e0f2fe', borderRadius: '8px' }}
      >
        {romaniaMap.locations.map(function(judet) {
          const baseColor = getJudetColor(judet.id);
          
          return (
            <path
              key={judet.id}
              d={judet.path}
              fill={baseColor}
              stroke="#1e293b"
              strokeWidth="0.5"
              onClick={function() { handleJudetClick(judet); }}
              style={{ cursor: 'pointer', transition: 'fill 0.2s' }}
            />
          );
        })}
        
        {/* Litere A-J pe unitatile de relief */}
        {Object.entries(RELIEF_INFO).map(function(entry) {
          const letter = entry[0];
          const info = entry[1];
          return (
            <g 
              key={'letter-' + letter}
              onMouseEnter={function() { setHoveredRelief(letter); }}
              onMouseLeave={function() { setHoveredRelief(null); }}
              style={{cursor: 'pointer'}}
            >
              <circle
                cx={info.letterPos[0]}
                cy={info.letterPos[1]}
                r={14}
                fill="#fff"
                stroke="#1e293b"
                strokeWidth={2}
              />
              <text
                x={info.letterPos[0]}
                y={info.letterPos[1] + 5}
                textAnchor="middle"
                style={{
                  fontFamily: 'system-ui',
                  fontSize: 14,
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
        
        {/* Numere pentru rauri */}
        {Object.entries(rauri).map(function(entry) {
          const num = entry[0];
          const river = entry[1];
          return (
            <g key={'river-' + num}>
              <circle
                cx={river.labelPos[0]}
                cy={river.labelPos[1]}
                r={10}
                fill="#1e40af"
                stroke="#fff"
                strokeWidth={2}
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
        
        {/* Numere pentru orase */}
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
      
      <div style={{
        marginTop: '0.75rem',
        padding: '0.6rem',
        background: 'white',
        borderRadius: '6px',
        fontSize: '0.8rem',
        color: '#475569',
        textAlign: 'center',
      }}>
        💡 Litere A-J = unitati de relief · Cifre albastre = rauri · Cifre rosii = orase
      </div>
    </div>
  );
}
