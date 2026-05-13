import { useState } from 'react';
import { ComposableMap, Geographies, Geography, Marker } from 'react-simple-maps';

const geoUrl = 'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json';

const EUROPE_STATES = {
  'Test_6': {
    'A': { name: 'Suedia', englishName: 'Sweden' },
    'B': { name: 'Germania', englishName: 'Germany' },
    'C': { name: 'Franța', englishName: 'France' },
    'D': { name: 'Belgia', englishName: 'Belgium' },
    'E': { name: 'Austria', englishName: 'Austria' },
    'F': { name: 'Italia', englishName: 'Italy' },
    'G': { name: 'Spania', englishName: 'Spain' },
    'H': { name: 'Grecia', englishName: 'Greece' },
    'I': { name: 'Polonia', englishName: 'Poland' },
    'J': { name: 'Bulgaria', englishName: 'Bulgaria' },
  },
  'Test_10': {
    'A': { name: 'Norvegia', englishName: 'Norway' },
    'B': { name: 'Marea Britanie', englishName: 'United Kingdom' },
    'C': { name: 'Olanda', englishName: 'Netherlands' },
    'D': { name: 'Portugalia', englishName: 'Portugal' },
    'E': { name: 'Cehia', englishName: 'Czechia' },
    'F': { name: 'Italia', englishName: 'Italy' },
    'G': { name: 'Republica Moldova', englishName: 'Moldova' },
    'H': { name: 'România', englishName: 'Romania' },
    'I': { name: 'Polonia', englishName: 'Poland' },
    'J': { name: 'Letonia', englishName: 'Latvia' },
  }
};

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

const COORDS = {
  'Sweden': [16, 62], 'Norway': [9, 61], 'Finland': [26, 64], 'Denmark': [10, 56],
  'United Kingdom': [-1, 53], 'Ireland': [-8, 53], 'Iceland': [-19, 65],
  'Germany': [10, 51], 'France': [2, 47], 'Spain': [-4, 40], 'Portugal': [-8, 39],
  'Italy': [12, 43], 'Greece': [22, 39], 'Bulgaria': [25, 43], 'Romania': [25, 46],
  'Poland': [19, 52], 'Czechia': [15, 50], 'Hungary': [19, 47], 'Austria': [14, 47],
  'Switzerland': [8, 47], 'Belgium': [4, 50], 'Netherlands': [5, 52], 'Luxembourg': [6, 49],
  'Ukraine': [31, 49], 'Belarus': [28, 53], 'Latvia': [25, 57], 'Lithuania': [24, 55],
  'Estonia': [25, 59], 'Moldova': [29, 47], 'Serbia': [21, 44], 'Croatia': [16, 45],
  'Slovenia': [15, 46], 'Bosnia and Herz.': [18, 44], 'Montenegro': [19, 43], 'Albania': [20, 41],
  'North Macedonia': [21, 42], 'Slovakia': [19, 49], 'Turkey': [35, 39], 'Cyprus': [33, 35],
  'Malta': [14, 36],
};

export default function EuropeMap({ varianta = 'Test_6', onStateClick = null, highlighted = null }) {
  const [hoveredInfo, setHoveredInfo] = useState(null);
  
  const states = EUROPE_STATES[varianta] || EUROPE_STATES['Test_6'];
  const capitals = EUROPE_CAPITALS[varianta] || EUROPE_CAPITALS['Test_6'];
  
  const nameToLetter = {};
  Object.entries(states).forEach(([letter, info]) => {
    nameToLetter[info.englishName] = letter;
  });
  
  function handleStateClick(geo) {
    const countryName = geo.properties.name;
    const letter = nameToLetter[countryName];
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
              const countryName = geo.properties.name;
              const letter = nameToLetter[countryName];
              const isHighlighted = letter === highlighted;
              const isInBAC = !!letter;
              
              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  onClick={() => handleStateClick(geo)}
                  onMouseEnter={() => setHoveredInfo({ letter, name: countryName })}
                  onMouseLeave={() => setHoveredInfo(null)}
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
                      fill: isInBAC ? '#3b82f6' : '#cbd5e1',
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
        
        {Object.entries(states).map(([letter, info]) => {
          const stateCoords = COORDS[info.englishName];
          if (!stateCoords) return null;
          
          return (
            <Marker key={`letter-${letter}`} coordinates={stateCoords}>
              <text
                textAnchor="middle"
                y={5}
                style={{
                  fontFamily: 'system-ui',
                 fontSize: 18,
                  fontWeight: 900,
                  fill: '#000',
                  stroke: '#fff',
                  strokeWidth: 3,
                  paintOrder: 'stroke',

                  pointerEvents: 'none',
                }}
              >
                {letter}
              </text>
            </Marker>
          );
        })}
        
       {Object.entries(capitals).map(([num, capital]) => (
          <Marker key={`capital-${num}`} coordinates={capital.coords}>
            <circle r={9} fill="#dc2626" stroke="#fff" strokeWidth={2} cy={12} />
            <text
              textAnchor="middle"
              y={15}
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
          </Marker>
        ))}

      </ComposableMap>
      
      {hoveredInfo && (
        <div style={{
          position:'absolute', top:'1rem', right:'1rem',
          background:'#1e293b', color:'white',
          padding:'0.5rem 1rem', borderRadius:'8px',
          fontSize:'0.875rem', fontWeight:600,
          zIndex: 10,
        }}>
          {hoveredInfo.letter ? `${hoveredInfo.letter}: ${states[hoveredInfo.letter].name}` : hoveredInfo.name}
        </div>
      )}
      
      <div style={{textAlign:'center', marginTop:'0.75rem', fontSize:'0.85rem', color:'#64748b'}}>
        💡 Tip: Click pe state pentru a le identifica · Cifre roșii = capitale
      </div>
    </div>
  );
}
