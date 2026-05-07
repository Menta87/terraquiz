import { useState } from 'react';
import { ComposableMap, Geographies, Geography, Marker } from 'react-simple-maps';

// Date geografice Europa - URL public TopoJSON
const geoUrl = 'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json';

// State Europa cu litere BAC (configurabile per variantă)
const EUROPE_STATES = {
  'Test_6': {
    'A': { name: 'Suedia', code: 'SWE' },
    'B': { name: 'Germania', code: 'DEU' },
    'C': { name: 'Franța', code: 'FRA' },
    'D': { name: 'Belgia', code: 'BEL' },
    'E': { name: 'Austria', code: 'AUT' },
    'F': { name: 'Italia', code: 'ITA' },
    'G': { name: 'Spania', code: 'ESP' },
    'H': { name: 'Grecia', code: 'GRC' },
    'I': { name: 'Polonia', code: 'POL' },
    'J': { name: 'Bulgaria', code: 'BGR' },
  },
  'Test_10': {
    'A': { name: 'Norvegia', code: 'NOR' },
    'B': { name: 'Marea Britanie', code: 'GBR' },
    'C': { name: 'Olanda', code: 'NLD' },
    'D': { name: 'Portugalia', code: 'PRT' },
    'E': { name: 'Cehia', code: 'CZE' },
    'F': { name: 'Italia', code: 'ITA' },
    'G': { name: 'Republica Moldova', code: 'MDA' },
    'H': { name: 'România', code: 'ROU' },
    'I': { name: 'Polonia', code: 'POL' },
    'J': { name: 'Letonia', code: 'LVA' },
  }
};

// Capitale Europa cu numere BAC (configurabile per variantă)
const EUROPE_CAPITALS = {
  'Test_6': {
    1: { name: 'Madrid', coords: [-3.7, 40.4] },
    2: { name: 'Vaduz', coords: [9.5, 47.1] },
    3: { name: 'Lisabona', coords: [-9.1, 38.7] },
    4: { name: 'Riga', coords: [24.1, 56.9] },
    5: { name: 'Oslo', coords: [10.7, 59.9] },
    6: { name: 'Stockholm', coords: [18.0, 59.3] },
    7: { name: 'Helsinki', coords: [24.9, 60.1] },
    8: { name: 'Skopje', coords: [21.4, 42.0] },
    9: { name: 'Sofia', coords: [23.3, 42.7] },
    10: { name: 'București', coords: [26.1, 44.4] },
    11: { name: 'Roma', coords: [12.5, 41.9] },
    12: { name: 'Kiev', coords: [30.5, 50.4] },
    13: { name: 'Tallinn', coords: [24.7, 59.4] },
    14: { name: 'Berna', coords: [7.4, 46.9] },
    15: { name: 'Berlin', coords: [13.4, 52.5] },
  },
  'Test_10': {
    1: { name: 'Roma', coords: [12.5, 41.9] },
    2: { name: 'Atena', coords: [23.7, 37.9] },
    3: { name: 'Berlin', coords: [13.4, 52.5] },
    4: { name: 'Berna', coords: [7.4, 46.9] },
    5: { name: 'Podgorica', coords: [19.3, 42.4] },
    6: { name: 'Praga', coords: [14.4, 50.1] },
    7: { name: 'Vatican', coords: [12.5, 41.9] },
    8: { name: 'Vilnius', coords: [25.3, 54.7] },
    9: { name: 'Sofia', coords: [23.3, 42.7] },
    10: { name: 'Reykjavik', coords: [-21.8, 64.1] },
    11: { name: 'Helsinki', coords: [24.9, 60.1] },
    12: { name: 'Stockholm', coords: [18.0, 59.3] },
    13: { name: 'Oslo', coords: [10.7, 59.9] },
    14: { name: 'Madrid', coords: [-3.7, 40.4] },
    15: { name: 'Bruxelles', coords: [4.4, 50.8] },
  }
};

export default function EuropeMap({ varianta = 'Test_6', onStateClick = null, highlighted = null }) {
  const [hoveredState, setHoveredState] = useState(null);
  
  const states = EUROPE_STATES[varianta] || EUROPE_STATES['Test_6'];
  const capitals = EUROPE_CAPITALS[varianta] || EUROPE_CAPITALS['Test_6'];
  
  // Mapare inversă: cod țară → litera BAC
  const codeToLetter = {};
  Object.entries(states).forEach(([letter, info]) => {
    codeToLetter[info.code] = letter;
  });
  
  function handleStateClick(geo) {
    const code = geo.properties['ISO_A3'] || geo.id;
    const letter = codeToLetter[code];
    if (letter && onStateClick) {
      onStateClick(letter, states[letter].name);
    }
  }
  
  return (
    <div style={{
      width: '100%',
      maxWidth: '700px',
      margin: '0 auto',
      background: '#f0f9ff',
      border: '2px solid #0284c7',
      borderRadius: '12px',
      padding: '1rem',
      position: 'relative',
    }}>
      <div style={{textAlign:'center', marginBottom:'0.5rem', fontWeight:700, color:'#0c4a6e', fontSize:'0.9rem'}}>
        🗺️ Harta Europei - {varianta.replace('_', ' ')}
      </div>
      
      <ComposableMap
        projection="geoMercator"
        projectionConfig={{
          scale: 500,
          center: [15, 53],
        }}
        width={700}
        height={500}
        style={{ width: '100%', height: 'auto' }}
      >
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => {
              const code = geo.properties['ISO_A3'] || geo.id;
              const letter = codeToLetter[code];
              const isHighlighted = letter === highlighted;
              const isInBAC = !!letter;
              
              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  onClick={() => handleStateClick(geo)}
                  onMouseEnter={() => setHoveredState(letter || null)}
                  onMouseLeave={() => setHoveredState(null)}
                  style={{
                    default: {
                      fill: isHighlighted 
                        ? '#fbbf24' 
                        : (isInBAC ? '#94a3b8' : '#e2e8f0'),
                      stroke: '#fff',
                      strokeWidth: 0.5,
                      outline: 'none',
                      cursor: isInBAC ? 'pointer' : 'default',
                    },
                    hover: {
                      fill: isInBAC ? '#3b82f6' : '#e2e8f0',
                      outline: 'none',
                    },
                    pressed: {
                      fill: '#1e40af',
                      outline: 'none',
                    },
                  }}
                />
              );
            })
          }
        </Geographies>
        
        {/* Litere pe state */}
        {Object.entries(states).map(([letter, info]) => {
          // Aproximăm centrele - pentru implementare mai bună, calculăm centroide
          const stateCoords = getStateCoords(info.code);
          if (!stateCoords) return null;
          
          return (
            <Marker key={`letter-${letter}`} coordinates={stateCoords}>
              <text
                textAnchor="middle"
                y={5}
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
            </Marker>
          );
        })}
        
        {/* Numere pe capitale */}
        {Object.entries(capitals).map(([num, capital]) => (
          <Marker key={`capital-${num}`} coordinates={capital.coords}>
            <circle r={8} fill="#dc2626" stroke="#fff" strokeWidth={2} />
            <text
              textAnchor="middle"
              y={3}
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
          </Marker>
        ))}
      </ComposableMap>
      
      {hoveredState && (
        <div style={{
          position:'absolute', top:'1rem', right:'1rem',
          background:'#1e293b', color:'white',
          padding:'0.5rem 1rem', borderRadius:'8px',
          fontSize:'0.875rem', fontWeight:600,
        }}>
          {hoveredState}: {states[hoveredState].name}
        </div>
      )}
      
      <div style={{textAlign:'center', marginTop:'0.75rem', fontSize:'0.85rem', color:'#64748b'}}>
        💡 Tip: Click pe state pentru a le identifica · Cifre roșii = capitale
      </div>
    </div>
  );
}

// Helper - coordonate aproximative pentru fiecare țară (pentru poziționare litere)
function getStateCoords(code) {
  const COORDS = {
    'SWE': [16, 62], 'NOR': [9, 61], 'FIN': [26, 64], 'DNK': [10, 56],
    'GBR': [-1, 53], 'IRL': [-8, 53], 'ISL': [-19, 65],
    'DEU': [10, 51], 'FRA': [2, 47], 'ESP': [-4, 40], 'PRT': [-8, 39],
    'ITA': [12, 43], 'GRC': [22, 39], 'BGR': [25, 43], 'ROU': [25, 46],
    'POL': [19, 52], 'CZE': [15, 50], 'HUN': [19, 47], 'AUT': [14, 47],
    'CHE': [8, 47], 'BEL': [4, 50], 'NLD': [5, 52], 'LUX': [6, 49],
    'UKR': [31, 49], 'BLR': [28, 53], 'LVA': [25, 57], 'LTU': [24, 55],
    'EST': [25, 59], 'MDA': [29, 47], 'SRB': [21, 44], 'HRV': [16, 45],
    'SVN': [15, 46], 'BIH': [18, 44], 'MNE': [19, 43], 'ALB': [20, 41],
    'MKD': [21, 42], 'SVK': [19, 49], 'TUR': [35, 39], 'CYP': [33, 35],
    'MLT': [14, 36],
  };
  return COORDS[code];
}
