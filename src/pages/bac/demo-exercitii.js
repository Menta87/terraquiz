import { useState } from 'react';
import Layout from '../../components/Layout';
import EuropeMap from '../../components/bac/EuropeMap';
import ExercitiuIdentificare from '../../components/bac/ExercitiuIdentificare';
import ExercitiuGrila from '../../components/bac/ExercitiuGrila';
import ExercitiuCompletare from '../../components/bac/ExercitiuCompletare';
import ExercitiuComparatie from '../../components/bac/ExercitiuComparatie';

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
          BAC - Subiect I (demo)
        </h1>
        <p style={{textAlign:'center', color:'#64748b', marginBottom:'1.5rem'}}>
          Variantă demonstrativă - Europa
        </p>
        
        <div style={{
          position:'sticky', top:'1rem',
          background:'#fbbf24', color:'#78350f',
          padding:'0.75rem 1rem', borderRadius:'10px',
          fontWeight:800, textAlign:'center',
          marginBottom:'1.5rem', fontSize:'1.1rem',
          boxShadow:'0 4px 12px rgba(251,191,36,0.3)',
          zIndex: 10,
        }}>
          Scor: {scor} puncte - {raspunsuri.length} răspunsuri verificate
        </div>
        
        <div style={{marginBottom:'1.5rem'}}>
          <EuropeMap varianta="Test_6" />
        </div>
        
        <h2 style={{color:'#0c4a6e', marginTop:'2rem'}}>A. Precizați:</h2>
        
        <ExercitiuIdentificare
          enunt="1. Numele statului marcat, pe hartă, cu litera J"
          raspunsCorect="Bulgaria"
          raspunsuriAcceptate={["bulgaria", "Bulgaria"]}
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
        
        <h2 style={{color:'#0c4a6e', marginTop:'2rem'}}>B. Completează propozițiile:</h2>
        
        <ExercitiuCompletare
                    raspunsCorect="Berlin"enuntInainte="1. Capitala statului marcat, pe hartă, cu litera B este orașul"


          raspunsuriAcceptate={["berlin", "Berlin"]}
          punctaj={2}
          onRaspuns={adaugaRaspuns}
        />
        
        <ExercitiuCompletare
          enuntInainte="2. Capitala statului marcat, pe hartă, cu litera C este orașul"

          raspunsCorect="Paris"
          raspunsuriAcceptate={["paris", "Paris"]}
          punctaj={2}
          onRaspuns={adaugaRaspuns}
        />
        
        <ExercitiuCompletare
          enuntInainte="3. Capitala statului marcat, pe hartă, cu litera J este orașul"

          raspunsCorect="Sofia"
          raspunsuriAcceptate={["sofia", "Sofia"]}
          punctaj={2}
          onRaspuns={adaugaRaspuns}
        />
        
        <h2 style={{color:'#0c4a6e', marginTop:'2rem'}}>C. Selectați răspunsul corect:</h2>
        
        <ExercitiuGrila
          enunt="1. Care dintre statele marcate pe hartă cu literele de mai jos este Italia?"
          variante={{ a: "C", b: "E", c: "F", d: "G" }}
          raspunsCorect="c"
          punctaj={2}
          onRaspuns={adaugaRaspuns}
        />
        
        <ExercitiuGrila
          enunt="2. Care dintre statele marcate pe hartă cu literele de mai jos este Bulgaria?"
          variante={{ a: "F", b: "H", c: "I", d: "J" }}
          raspunsCorect="d"
          punctaj={2}
          onRaspuns={adaugaRaspuns}
        />
        
        <ExercitiuGrila
          enunt="3. Care dintre statele marcate pe hartă cu literele de mai jos este Germania?"
          variante={{ a: "A", b: "B", c: "C", d: "E" }}
          raspunsCorect="b"
          punctaj={2}
          onRaspuns={adaugaRaspuns}
        />
        
        <h2 style={{color:'#0c4a6e', marginTop:'2rem'}}>D. Compară:</h2>
        
        <ExercitiuComparatie
          enunt="Precizați trei deosebiri între clima statului D (Belgia) și clima statului H (Grecia)"
          raspunsExemplu={[
            "Belgia are climă temperat-oceanică, iar Grecia are climă mediteraneană",
            "Belgia are precipitații medii anuale mai mari (700-1000 mm), iar Grecia mai mici (400-700 mm)",
            "Belgia are amplitudine termică mai mică, iar Grecia mai mare datorită verilor toride",
          ]}
          punctajMaxim={6}
          onRaspuns={adaugaRaspuns}
        />
        
        <div style={{
          marginTop:'2rem', padding:'1.5rem',
          background:'linear-gradient(135deg, #fbbf24, #d97706)',
          color:'white', borderRadius:'12px',
          textAlign:'center',
        }}>
          <h2 style={{margin:0, fontSize:'1.5rem'}}>Total scor: {scor} puncte</h2>
          <p style={{margin:'0.5rem 0 0', opacity:0.95, fontSize:'0.95rem'}}>
            Din {raspunsuri.length * 2} puncte posibile pentru exercițiile încercate
          </p>
        </div>
      </div>
    </Layout>
  );
}
