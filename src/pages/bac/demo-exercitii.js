import { useState } from 'react';
import Layout from '../../components/Layout';
import EuropeMap from '../../components/bac/EuropeMap';
import ExercitiuIdentificare from '../../components/bac/ExercitiuIdentificare';
import ExercitiuGrila from '../../components/bac/ExercitiuGrila';

export default function DemoExercitii() {
  const [scor, setScor] = useState(0);
  const [raspunsuri, setRaspunsuri] = useState([]);
  
  function adaugaRaspuns(rezultat) {
    setRaspunsuri(prev => [...prev, rezultat]);
    setScor(prev => prev + rezultat.puncte);
  }
  
  return (
    <Layout>
      <div style={{padding:'2rem 1rem', maxWidth:'800px', margin:'0 auto'}}>
        <h1 style={{textAlign:'center', color:'#1e293b', marginBottom:'0.5rem'}}>
          🎓 BAC - Subiect I (demo)
        </h1>
        <p style={{textAlign:'center', color:'#64748b', marginBottom:'1.5rem'}}>
          Test 6 - 2020 · Europa
        </p>
        
        {/* Scor live */}
        <div style={{
          position:'sticky', top:'1rem',
          background:'#fbbf24', color:'#78350f',
          padding:'0.75rem 1rem', borderRadius:'10px',
          fontWeight:800, textAlign:'center',
          marginBottom:'1.5rem', fontSize:'1.1rem',
          boxShadow:'0 4px 12px rgba(251,191,36,0.3)',
          zIndex: 10,
        }}>
          📊 Scor: {scor} puncte · {raspunsuri.length} răspunsuri verificate
        </div>
        
        {/* Hartă Europa */}
        <div style={{marginBottom:'1.5rem'}}>
          <EuropeMap varianta="Test_6" />
        </div>
        
        {/* Subiect I A - Identificare */}
        <h2 style={{color:'#0c4a6e', marginTop:'2rem'}}>A. Precizați:</h2>
        
        <ExercitiuIdentificare
          enunt="1. Numele statului marcat, pe hartă, cu litera J"
          raspunsCorect="Bulgaria"
          raspunsuriAcceptate={["bulgaria", "Bulgaria", "Republica Bulgaria"]}
          punctaj={2}
          onRaspuns={adaugaRaspuns}
        />
        
        <ExercitiuIdentificare
          enunt="2. Numele orașului-capitală marcat, pe hartă, cu numărul 12"
          raspunsCorect="Kiev"
          raspunsuriAcceptate={["kiev", "Kiev", "Kyiv"]}
          punctaj={2}
          onRaspuns={adaugaRaspuns}
        />
        
        {/* Subiect I C - Grilă */}
        <h2 style={{color:'#0c4a6e', marginTop:'2rem'}}>C. Selectați răspunsul corect:</h2>
        
        <ExercitiuGrila
          enunt="1. Orașul-capitală Riga este marcat, pe hartă, cu numărul:"
          variante={{ a: "4", b: "11", c: "13", d: "15" }}
          raspunsCorect="a"
          punctaj={2}
          onRaspuns={adaugaRaspuns}
        />
        
        <ExercitiuGrila
          enunt="2. Munții Alpii Dinarici se desfășoară pe teritoriul statului marcat, pe hartă, cu litera:"
          variante={{ a: "C", b: "E", c: "F", d: "I" }}
          raspunsCorect="d"
          punctaj={2}
          onRaspuns={adaugaRaspuns}
        />
        
        <ExercitiuGrila
          enunt="3. Capitala statului marcat, pe hartă, cu litera G este orașul:"
          variante={{ a: "Amsterdam", b: "Bruxelles", c: "Copenhaga", d: "Haga" }}
          raspunsCorect="b"
          punctaj={2}
          onRaspuns={adaugaRaspuns}
        />
        
        {/* Final */}
        <div style={{
          marginTop:'2rem', padding:'1.5rem',
          background:'linear-gradient(135deg, #fbbf24, #d97706)',
          color:'white', borderRadius:'12px',
          textAlign:'center',
        }}>
          <h2 style={{margin:0, fontSize:'1.5rem'}}>🎯 Total scor: {scor} puncte</h2>
          <p style={{margin:'0.5rem 0 0', opacity:0.95, fontSize:'0.95rem'}}>
            Din {raspunsuri.length * 2} puncte posibile pentru exercițiile încercate
          </p>
        </div>
      </div>
    </Layout>
  );
}
