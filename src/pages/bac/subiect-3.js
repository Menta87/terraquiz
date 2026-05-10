import { useState } from 'react';
import Layout from '../../components/Layout';
import ExercitiuIdentificare from '../../components/bac/ExercitiuIdentificare';
import ExercitiuCompletare from '../../components/bac/ExercitiuCompletare';
import ExercitiuGrila from '../../components/bac/ExercitiuGrila';
import ExercitiuCalcul from '../../components/bac/ExercitiuCalcul';
import ExercitiuCauza from '../../components/bac/ExercitiuCauza';

export default function Subiect3() {
  const [scor, setScor] = useState(0);
  const [raspunsuri, setRaspunsuri] = useState([]);
  
  function adaugaRaspuns(rezultat) {
    setRaspunsuri(function(prev) { return [...prev, rezultat]; });
    setScor(function(prev) { return prev + rezultat.puncte; });
  }
  
  return (
    <Layout>
      <div style={{padding: '2rem 1rem', maxWidth: '800px', margin: '0 auto'}}>
        <h1 style={{textAlign: 'center', color: '#1e293b', marginBottom: '0.5rem'}}>
          🎓 BAC - Subiect III
        </h1>
        <p style={{textAlign: 'center', color: '#64748b', marginBottom: '1.5rem'}}>
          Lumea contemporană - 30 puncte
        </p>
        
        <div style={{
          position: 'sticky', top: '1rem',
          background: '#fbbf24', color: '#78350f',
          padding: '0.75rem 1rem', borderRadius: '10px',
          fontWeight: 800, textAlign: 'center',
          marginBottom: '1.5rem', fontSize: '1.1rem',
          boxShadow: '0 4px 12px rgba(251,191,36,0.3)',
          zIndex: 10,
        }}>
          Scor: {scor} / 30 puncte
        </div>
        
        {/* A - Citire grafic Dunărea */}
        <div style={{background:'#eff6ff', padding:'1rem', borderRadius:'8px', marginBottom:'1rem', border:'2px solid #0284c7'}}>
          <h3 style={{margin:'0 0 0.5rem', color:'#0c4a6e'}}>📊 Date pentru subiectul A (Lungimea Dunării pe sectoare):</h3>
          <table style={{width:'100%', fontSize:'0.85rem', borderCollapse:'collapse'}}>
            <thead>
              <tr style={{background:'#0284c7', color:'white'}}>
                <th style={{padding:'0.4rem', textAlign:'left'}}>Sector</th>
                <th style={{padding:'0.4rem'}}>Lungime (km)</th>
              </tr>
            </thead>
            <tbody>
              <tr><td style={{padding:'0.3rem'}}>Germania</td><td style={{padding:'0.3rem', textAlign:'center'}}>647</td></tr>
              <tr style={{background:'#dbeafe'}}><td style={{padding:'0.3rem'}}>Austria</td><td style={{padding:'0.3rem', textAlign:'center'}}>358</td></tr>
              <tr><td style={{padding:'0.3rem'}}>Ungaria</td><td style={{padding:'0.3rem', textAlign:'center'}}>275</td></tr>
              <tr style={{background:'#dbeafe'}}><td style={{padding:'0.3rem'}}>Serbia</td><td style={{padding:'0.3rem', textAlign:'center'}}>588</td></tr>
              <tr><td style={{padding:'0.3rem'}}>România (graniță + interior)</td><td style={{padding:'0.3rem', textAlign:'center'}}>1075</td></tr>
            </tbody>
          </table>
        </div>
        
        <h2 style={{color: '#0c4a6e', marginTop: '2rem'}}>A. Precizați (4p):</h2>
        
        <ExercitiuIdentificare
          enunt="1. Numele sectorului celui mai lung al Dunării"
          raspunsCorect="România"
          raspunsuriAcceptate={["romania", "România", "Romania"]}
          punctaj={2}
          onRaspuns={adaugaRaspuns}
        />
        
        <ExercitiuIdentificare
          enunt="2. Sectorul care străbate Germania are lungimea (în km)"
          raspunsCorect="647"
          raspunsuriAcceptate={["647", "647 km"]}
          punctaj={2}
          onRaspuns={adaugaRaspuns}
        />
        
        {/* B - Memorare */}
        <h2 style={{color: '#0c4a6e', marginTop: '2rem'}}>B. Menționați (6p):</h2>
        
        <ExercitiuCompletare
          enuntInainte="1. O unitate de relief străbătută de Dunăre pe teritoriul României este"
          raspunsCorect="Câmpia Română"
          raspunsuriAcceptate={["campia romana", "Câmpia Română", "Campia Romana", "câmpia română", "Podișul Dobrogei", "podisul dobrogei"]}
          punctaj={2}
          onRaspuns={adaugaRaspuns}
        />
        
        <ExercitiuCompletare
          enuntInainte="2. Un afluent direct al Dunării pe teritoriul României este"
          raspunsCorect="Olt"
          raspunsuriAcceptate={["olt", "Olt", "Argeș", "arges", "Siret", "siret", "Jiu", "jiu", "Prut", "prut"]}
          punctaj={2}
          onRaspuns={adaugaRaspuns}
        />
        
        <ExercitiuCompletare
          enuntInainte="3. Un oraș cu peste 200.000 de locuitori străbătut de Dunăre este"
          raspunsCorect="Belgrad"
          raspunsuriAcceptate={["belgrad", "Belgrad", "Beograd", "Viena", "viena", "Budapesta", "budapesta", "Bratislava", "bratislava"]}
          punctaj={2}
          onRaspuns={adaugaRaspuns}
        />
        
        {/* C - Caracterizare regiune */}
        <h2 style={{color: '#0c4a6e', marginTop: '2rem'}}>C. Caracterizare regiune (10p):</h2>
        
        <div style={{background:'#fef3c7', padding:'1rem', borderRadius:'8px', marginBottom:'1rem', border:'2px solid #d97706'}}>
          <strong style={{color:'#78350f'}}>Pentru Grupa Centrală a Carpaților Orientali (Carpații Moldo-Transilvani):</strong>
        </div>
        
        <ExercitiuCompletare
          enuntInainte="1. Modul de formare este"
          raspunsCorect="cutare"
          raspunsuriAcceptate={["cutare", "Cutare", "orogeneza alpina", "orogeneza alpină", "orogeneza"]}
          punctaj={1}
          onRaspuns={adaugaRaspuns}
        />
        
        <ExercitiuCompletare
          enuntInainte="2. Un tip de rocă specific:"
          raspunsCorect="roci vulcanice"
          raspunsuriAcceptate={["roci vulcanice", "vulcanice", "magmatice", "andezit", "bazalt", "roci cristaline", "cristaline", "metamorfice", "sisturi"]}
          punctaj={1}
          onRaspuns={adaugaRaspuns}
        />
        
        <ExercitiuCompletare
          enuntInainte="3. Un tip genetic de relief specific zonei este relieful"
          raspunsCorect="vulcanic"
          raspunsuriAcceptate={["vulcanic", "Vulcanic", "carstic", "Carstic", "glaciar"]}
          punctaj={1}
          onRaspuns={adaugaRaspuns}
        />
        
        <ExercitiuCompletare
          enuntInainte="4. Un etaj climatic prezent este"
          raspunsCorect="alpin"
          raspunsuriAcceptate={["alpin", "Alpin", "subalpin", "Subalpin", "munte", "montan", "Montan"]}
          punctaj={1}
          onRaspuns={adaugaRaspuns}
        />
        
        <ExercitiuCompletare
          enuntInainte="5. Un râu care izvorăște sau străbate zona este"
          raspunsCorect="Bistrița"
          raspunsuriAcceptate={["bistrita", "Bistrița", "Bistrita", "bistrița", "Mureș", "mures", "Olt", "olt", "Trotuș", "trotus"]}
          punctaj={1}
          onRaspuns={adaugaRaspuns}
        />
        
        {/* D - Calcule */}
        <h2 style={{color: '#0c4a6e', marginTop: '2rem'}}>D. Calcule temperaturi (6p):</h2>
        
        <div style={{background:'#eff6ff', padding:'1rem', borderRadius:'8px', marginBottom:'1rem', border:'2px solid #0284c7'}}>
          <strong style={{color:'#0c4a6e'}}>📊 Temperaturile medii lunare pentru un oraș-capitală european:</strong>
          <p style={{margin:'0.5rem 0', fontSize:'0.9rem', color:'#1e293b'}}>
            Ianuarie: 5,0°C | Februarie: 5,0°C | Iulie: 15,2°C | August: 14,9°C
          </p>
        </div>
        
        <ExercitiuCalcul
          enunt="1. Calculați valoarea amplitudinii termice medii anuale (T max - T min)"
          formula="Amplitudine = T iulie - T ianuarie"
          raspunsCorect={10.2}
          intervalAcceptat={[10.0, 10.4]}
          unitate="°C"
          punctaj={2}
          onRaspuns={adaugaRaspuns}
        />
        
        <ExercitiuGrila
          enunt="2. Care este orașul A (climă blândă, temperaturi minime peste 5°C)?"
          variante={{ a: "București", b: "Dublin", c: "Moscova", d: "Roma" }}
          raspunsCorect="b"
          punctaj={2}
          onRaspuns={adaugaRaspuns}
        />
        
        <ExercitiuCauza
          enunt="3. Prezentați o cauză a faptului că nu se înregistrează temperaturi negative iarna în acest oraș"
          raspunsExemplu="Influența Curentului Atlantic de Nord (Curentul Golfului) și a maselor de aer oceanice cu umiditate ridicată care încălzesc iarna coastele Europei de Vest, în special Irlanda și Marea Britanie."
          cuvinteCheie={["curent", "Golfului", "ocean", "vest", "umiditate"]}
          punctaj={2}
          onRaspuns={adaugaRaspuns}
        />
        
        {/* E - Calcul demografic */}
        <h2 style={{color: '#0c4a6e', marginTop: '2rem'}}>E. Calcule demografice (4p):</h2>
        
        <div style={{background:'#fef3c7', padding:'1rem', borderRadius:'8px', marginBottom:'1rem', border:'2px solid #d97706'}}>
          <strong style={{color:'#78350f'}}>📊 Populația Ucrainei în anul 2000 pe grupe de vârstă:</strong>
          <ul style={{margin:'0.5rem 0 0', paddingLeft:'1.5rem', fontSize:'0.9rem', color:'#1e293b'}}>
            <li>0-14 ani: 8.570.000 locuitori</li>
            <li>15-64 ani: 33.731.000 locuitori</li>
            <li>65 ani și peste: 6.756.000 locuitori</li>
          </ul>
        </div>
        
        <ExercitiuCalcul
          enunt="1. Calculați populația totală a Ucrainei în anul 2000"
          formula="Total = grupa1 + grupa2 + grupa3"
          raspunsCorect={49057000}
          intervalAcceptat={[49050000, 49060000]}
          unitate="locuitori"
          punctaj={2}
          onRaspuns={adaugaRaspuns}
        />
        
        <ExercitiuCauza
          enunt="2. Prezentați o cauză a evoluției numerice a populației Ucrainei în perioada 2000-2010 (scăzând)"
          raspunsExemplu="Scăderea populației Ucrainei s-a datorat ratei scăzute a natalității (mai mică decât rata mortalității), emigrației masive a populației tinere către alte țări europene pentru muncă, condițiilor economice dificile și scăderii nivelului de trai după destrămarea URSS."
          cuvinteCheie={["natalitate", "mortalitate", "emigrație", "emigrare", "economic", "scădere"]}
          punctaj={2}
          onRaspuns={adaugaRaspuns}
        />
        
        {/* Final */}
        <div style={{
          marginTop: '2rem', padding: '1.5rem',
          background: 'linear-gradient(135deg, #fbbf24, #d97706)',
          color: 'white', borderRadius: '12px',
          textAlign: 'center',
        }}>
          <h2 style={{margin: 0, fontSize: '1.5rem'}}>Total: {scor} / 30 puncte</h2>
          <p style={{margin: '0.5rem 0 0', opacity: 0.95, fontSize: '0.95rem'}}>
            {raspunsuri.length} răspunsuri verificate
          </p>
        </div>
      </div>
    </Layout>
  );
}
