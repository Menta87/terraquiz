import { useState } from 'react';
import romaniaMap from '@svg-maps/romania';

// Maparea celor 42 județe la 10 unități de relief BAC
const JUDET_TO_RELIEF = {
  // A - Carpații Orientali
  'ro-mm': 'A', 'ro-sm': 'A', 'ro-sv': 'A', 'ro-bn': 'A',
  'ro-hr': 'A', 'ro-cv': 'A',
  
  // B - Carpații Meridionali
  'ro-hd': 'B', 'ro-sb': 'B',
  
  // C - Munții Apuseni
  'ro-bh': 'C', 'ro-ar': 'C', 'ro-cs': 'C',
  
  // D - Subcarpații Moldovei
  'ro-nt': 'D', 'ro-bc': 'D',
  
  // E - Subcarpații Curburii
  'ro-ph': 'E', 'ro-bz': 'E', 'ro-vn': 'E',
  
  // F - Subcarpații Getici
  'ro-ag': 'F', 'ro-vl': 'F', 'ro-gj': 'F',
  
  // G - Podișul Moldovei
  'ro-is': 'G', 'ro-bt': 'G', 'ro-vs': 'G', 'ro-gl': 'G',
  
  // H - Podișul Transilvaniei
  'ro-cj': 'H', 'ro-ms': 'H', 'ro-ab': 'H', 'ro-sj': 'H', 'ro-bv': 'H',
  
  // I - Câmpia Română
  'ro-b': 'I', 'ro-if': 'I', 'ro-gr': 'I', 'ro-cl': 'I',
  'ro-tr': 'I', 'ro-ot': 'I', 'ro-dj': 'I', 'ro-mh': 'I',
  'ro-il': 'I', 'ro-br': 'I',
  
  // J - Dobrogea
  'ro-ct': 'J', 'ro-tl': 'J',
  
  // Timiș - între Câmpia de Vest și Banat (asignăm la Câmpie pentru simplitate)
  'ro-tm': 'I',
};

// Cele 10 unități de relief BAC
const RELIEF_INFO = {
  'A': { name: 'Carpații Orientali', color: '#78716c' },
  'B': { name: 'Carpații Meridionali', color: '#57534e' },
  'C': { name: 'Munții Apuseni', color: '#44403c' },
  'D': { name: 'Subcarpații Moldovei', color: '#a8a29e' },
  'E': { name: 'Subcarpații Curburii', color: '#a8a29e' },
  'F': { name: 'Subcarpații Getici', color: '#a8a29e' },
  'G': { name: 'Podișul Moldovei', color: '#84cc16' },
  'H': { name: 'Podișul Transilvaniei', color: '#a3e635' },
  'I': { name: 'Câmpia Română', color: '#fde047' },
  'J': { name: 'Dobrogea', color: '#fbbf24' },
};

// Râuri principale (pe baza viewBox 613x433)
const RAURI_DATA = {
  'Test_6': {
    1: { name: 'Mureș', labelPos: [280, 165] },
    2: { name: 'Olt', labelPos: [305, 280] },
    3: { name: 'Argeș', labelPos: [345, 320] },
    4: { name: 'Siret', labelPos: [430, 200] },
    5: { name: 'Prut', labelPos: [490, 140] },
    6: { name: 'Dunărea', labelPos: [330, 380] },
  }
};

// Orașe importante
const ORASE_DATA = {
  'Test_6': {
    7: { name: 'Cluj-Napoca', coords: [220, 160] },
    8: { name: 'Brașov', coords: [320, 235] },
    9: { name: 'Iași', coords: [475, 130] },
    10: { name: 'Timișoara', coords: [105, 220] },
    11: { name: 'Constanța', coords: [530, 320] },
    12: { name: 'Călărași', coords: [430, 350] },
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
    if (!relief) return '#e5e7eb'; // gri pentru județe nemapate
    
    const isHighlighted = relief === highlighted;
    if (isHighlighted) return '#fbbf24';
    
    return RELIEF_INFO[relief]?.color || '#e5e7eb';
  }
  
  function handleJudetClick(judet) {
    const relief = JUDET_TO_RELIEF[judet.id];
    if (relief && onUnitClick) {
      onUnitClick(relief, RELIEF_INFO[relief].name);
    }
  }
  
  // Găsim hover info
  let hoverText = null;
  if (hoveredJudet) {
    const relief = JUDET_TO_RELIEF[hoveredJudet.id];
    if (relief) {
      hoverText = `🏔️ ${relief}: ${RELIEF_INFO[relief].name} (${hoveredJudet.name})`;
    } else {
      hoverText = `📍 ${hoveredJudet.name}`;
    }
  } else if (hoveredRiver) {
    hoverText = `💧 ${hoveredRiver}: ${rauri[hoveredRiver].name}`;
  } else if (hoveredCity) {
    hoverText = `🏙️ ${hoveredCity}: ${orase[hoveredCity].name}`;
  }
  
  // Calculează poziția centrală pentru fiecare unitate de relief (pentru a desena litera)
  const reliefCenters = {};
  Object.entries(JUDET_TO_RELIEF).forEach(function(entry) {
    const judetId = entry[0];
    const relief = entry[1];
    if (!reliefCenters[relief]) reliefCenters[relief] = { count: 0, judetIds: [] };
    reliefCenters[relief].judetIds.push(judetId);
    reliefCenters[relief].count++;
  });
  
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
        🇷🇴 Harta României - {varianta.replace('_', ' ')}
      </div>
      
      <svg viewBox={romaniaMap.viewBox} style={{ width: '100%', height: 'auto', background: '#e0f2fe', borderRadius: '8px' }}>
        {/* Județele cu coloring pe unități de relief */}
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
        
        {/* Litere pentru unități de relief - poziționate pe primul județ din grupare */}
        {Object.entries(RELIEF_INFO).map(function(entry) {
          const letter = entry[0];
          const centers = reliefCenters[letter];
          if (!centers || centers.count === 0) return null;
          
          // Găsim primul județ pentru calculul centrului
          const firstJudetId = centers.judetIds[0];
          const judet = romaniaMap.locations.find(function(j) { return j.id === firstJudetId; });
          if (!judet) return null;
          
          // Aproximăm centrul județului din primele coordonate ale path-ului
          const pathMatch = judet.path.match(/^[Mm]\s*([\d.-]+)[,\s]+([\d.-]+)/);
          if (!pathMatch) return null;
          
          const cx = parseFloat(pathMatch[1]);
          const cy = parseFloat(pathMatch[2]);
          
          return (
            <text
              key={'label-' + letter}
              x={cx}
              y={cy}
              textAnchor="middle"
              style={{
                fontFamily: 'system-ui',
                fontSize: 14,
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
          );
        })}
        
        {/* Râuri - cifre albastre */}
        {Object.entries(rauri).map(function(entry) {
          const num = entry[0];
          const river = entry[1];
          return (
            <g key={'river-' + num}>
              <circle
                cx={river.labelPos[0]}
                cy={river.labelPos[1]}
                r={9}
                fill="#1e40af"
                stroke="#fff"
                strokeWidth={2}
                onMouseEnter={function() { setHoveredRiver(num); }}
                onMouseLeave={function() { setHoveredRiver(null); }}
                style={{cursor:'help'}}
              />
              <text
                x={river.labelPos[0]}
                y={river.labelPos[1] + 3}
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
        
        {/* Orașe - cifre roșii */}
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
                style={{cursor:'help'}}
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
      
      {/* Tooltip */}
      {hoverText && (
        <div style={{
          position:'absolute', top:'1rem', right:'1rem',
          background:'#1e293b', color:'white',
          padding:'0.5rem 1rem', borderRadius:'8px',
          fontSize:'0.875rem', fontWeight:600,
          zIndex: 10,
          boxShadow:'0 4px 12px rgba(0,0,0,0.2)',
        }}>
          {hoverText}
        </div>
      )}
      
      {/* Legendă */}
      <div style={{
        marginTop:'0.75rem', padding:'0.6rem',
        background:'white', borderRadius:'6px',
        fontSize:'0.8rem', color:'#475569',
      }}>
        <div style={{textAlign:'center', marginBottom:'0.4rem', fontWeight:600}}>
          🗺️ Hover pe județe pentru identificare
        </div>
        <div style={{display:'flex', justifyContent:'center', gap:'0.75rem', flexWrap:'wrap', fontSize:'0.75rem'}}>
          <span><strong style={{color:'#44403c'}}>■</strong> Munți (A,B,C)</span>
          <span><strong style={{color:'#a8a29e'}}>■</strong> Subcarpați (D,E,F)</span>
          <span><strong style={{color:'#84cc16'}}>■</strong> Podișuri (G,H)</span>
          <span><strong style={{color:'#fde047'}}>■</strong> Câmpie (I)</span>
          <span><strong style={{color:'#fbbf24'}}>■</strong> Dobrogea (J)</span>
        </div>
        <div style={{textAlign:'center', marginTop:'0.4rem', fontSize:'0.7rem'}}>
          <strong style={{color:'#1e40af'}}>● 1-6</strong> râuri · <strong style={{color:'#dc2626'}}>● 7-12</strong> orașe
        </div>
      </div>
    </div>
  );
}
