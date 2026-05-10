import { useState } from 'react';
import Layout from '../../components/Layout';
import RomaniaMap from '../../components/bac/RomaniaMap';

import ExercitiuIdentificare from '../../components/bac/ExercitiuIdentificare';
import ExercitiuCompletare from '../../components/bac/ExercitiuCompletare';
import ExercitiuGrila from '../../components/bac/ExercitiuGrila';
import ExercitiuComparatie from '../../components/bac/ExercitiuComparatie';
import ExercitiuCauza from '../../components/bac/ExercitiuCauza';

export default function Subiect2() {
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
          🎓 BAC - Subiect II
        </h1>
        <p style={{textAlign: 'center', color: '#64748b', marginBottom: '1.5rem'}}>
          Geografia României - 30 puncte
        </p>
        
        {/* Scor live */}
        <div style={{
          position: 'sticky', top: '1rem',
          background: '#fbbf24', color: '#78350f',
          padding: '0.75rem 1rem', borderRadius: '10px',
          fontWeight: 800, textAlign: 'center',
          marginBottom: '1.5rem', fontSize: '1.1rem',
          boxShadow: '0 4px 12px rgba(251,191,36,0.3)',
          zIndex: 10,
        }}>
          Scor: {scor} / 30 puncte - {raspunsuri.length} răspunsuri verificate
        </div>
        
        {/* Legenda România */}
            <RomaniaMap varianta="Test_6" />

        
        {/* Subiect II A - Identificare */}
        <h2 style={{color: '#0c4a6e', marginTop: '2rem'}}>A. Precizați (4p):</h2>
        
        <ExercitiuIdentificare
          enunt="1. Numele orașului marcat, pe hartă, cu numărul 12"
          raspunsCorect="Călărași"
          raspunsuriAcceptate={["calarasi", "Călărași", "Calarasi", "călărași"]}
          punctaj={2}
          onRaspuns={adaugaRaspuns}
        />
        
        <ExercitiuIdentificare
          enunt="2. Numele râului marcat, pe hartă, cu numărul 6"
          raspunsCorect="Dunărea"
          raspunsuriAcceptate={["dunarea", "Dunărea", "Dunarea", "dunărea"]}
          punctaj={2}
          onRaspuns={adaugaRaspuns}
        />
        
        {/* Subiect II B - Completare */}
        <h2 style={{color: '#0c4a6e', marginTop: '2rem'}}>B. Completează propozițiile (6p):</h2>
        
        <ExercitiuCompletare
          enuntInainte="1. Capitala județului marcat cu numărul 8 este orașul"
          raspunsCorect="Brașov"
          raspunsuriAcceptate={["brasov", "Brașov", "Brasov"]}
          punctaj={2}
          onRaspuns={adaugaRaspuns}
        />
        
        <ExercitiuCompletare
          enuntInainte="2. Orașul marcat cu numărul 9 se numește"
          raspunsCorect="Iași"
          raspunsuriAcceptate={["iasi", "Iași", "Iasi", "iași"]}
          punctaj={2}
          onRaspuns={adaugaRaspuns}
        />
        
        <ExercitiuCompletare
          enuntInainte="3. Unitatea de relief E reprezintă"
          enuntDupa=""
          raspunsCorect="Subcarpații Curburii"
          raspunsuriAcceptate={["subcarpatii curburii", "Subcarpații Curburii", "Subcarpatii Curburii"]}
          punctaj={2}
          onRaspuns={adaugaRaspuns}
        />
        
        {/* Subiect II C - Grilă */}
        <h2 style={{color: '#0c4a6e', marginTop: '2rem'}}>C. Selectați răspunsul corect (10p):</h2>
        
        <ExercitiuGrila
          enunt="1. În unitatea de relief marcată cu litera C (Munții Apuseni) există relief:"
          variante={{ a: "carstic", b: "eolian", c: "glaciar", d: "vulcanic" }}
          raspunsCorect="a"
          punctaj={2}
          onRaspuns={adaugaRaspuns}
        />
        
        <ExercitiuGrila
          enunt="2. Râul marcat cu numărul 2 se numește:"
          variante={{ a: "Argeș", b: "Dâmbovița", c: "Olt", d: "Vedea" }}
          raspunsCorect="c"
          punctaj={2}
          onRaspuns={adaugaRaspuns}
        />
        
        <ExercitiuGrila
          enunt="3. Influențe climatice baltice pătrund în unitatea de relief marcată cu litera:"
          variante={{ a: "A", b: "B", c: "C", d: "F" }}
          raspunsCorect="a"
          punctaj={2}
          onRaspuns={adaugaRaspuns}
        />
        
        <ExercitiuGrila
          enunt="4. Etajul pădurilor de conifere există în unitatea de relief marcată cu litera:"
          variante={{ a: "A", b: "F", c: "G", d: "H" }}
          raspunsCorect="a"
          punctaj={2}
          onRaspuns={adaugaRaspuns}
        />
        
        <ExercitiuGrila
          enunt="5. Cea mai veche unitate de relief din cele marcate este:"
          variante={{ a: "A (Carpații Orientali)", b: "G (Podișul Moldovei)", c: "H (Podișul Transilvaniei)", d: "C (Munții Apuseni)" }}
          raspunsCorect="d"
          punctaj={2}
          onRaspuns={adaugaRaspuns}
        />
        
        {/* Subiect II D - Comparație */}
        <h2 style={{color: '#0c4a6e', marginTop: '2rem'}}>D. Compară (6p):</h2>
        
        <ExercitiuComparatie
          enunt="Precizați trei deosebiri între relieful unității marcate cu litera A (Carpații Orientali) și relieful unității marcate cu litera H (Podișul Transilvaniei)"
          raspunsExemplu={[
            "Carpații Orientali sunt formați prin orogeneza alpină (cutare), iar Podișul Transilvaniei prin sedimentare în bazinul intramontan",
            "Carpații Orientali au altitudini mari (până la 2303 m), iar Podișul Transilvaniei are altitudini mici (300-700 m)",
            "Carpații Orientali sunt alcătuiți din roci magmatice și metamorfice, iar Podișul Transilvaniei din roci sedimentare (argile, marne, calcare)",
          ]}
          punctajMaxim={6}
          onRaspuns={adaugaRaspuns}
        />
        
        {/* Subiect II E - Cauze */}
        <h2 style={{color: '#0c4a6e', marginTop: '2rem'}}>E. Prezintă cauze (4p):</h2>
        
        <ExercitiuCauza
          enunt="Prezentați o cauză care explică frecvența mult mai mare a hidrocentralelor în regiunea montană decât în regiunea de câmpie"
          raspunsExemplu="Hidrocentralele sunt mai frecvente în regiunea montană deoarece aici râurile au debite mari, pante accentuate și văi adânci, ceea ce permite construirea barajelor și creează energie hidraulică prin căderea apei. În câmpie, râurile au pante mici și debite reduse."
          cuvinteCheie={["pante", "debit", "munte", "energie", "căderea"]}
          punctaj={2}
          onRaspuns={adaugaRaspuns}
        />
        
        <ExercitiuCauza
          enunt="Prezentați un avantaj sau un dezavantaj al utilizării hidroenergiei pentru obținerea energiei electrice"
          raspunsExemplu="Avantaj: hidroenergia este o sursă regenerabilă și nepoluantă, costuri reduse de exploatare după construcție. Dezavantaj: necesită investiții mari inițiale, schimbă ecosistemul local, depinde de cantitatea de precipitații."
          cuvinteCheie={["regenerabil", "poluare", "investiții", "ecosistem", "precipitații"]}
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
          {scor >= 25 && (
            <p style={{margin: '0.5rem 0 0', fontSize: '1.05rem', fontWeight: 700}}>
              🎉 Excelent! Ești pregătit pentru BAC!
            </p>
          )}
          {scor >= 15 && scor < 25 && (
            <p style={{margin: '0.5rem 0 0', fontSize: '1.05rem', fontWeight: 700}}>
              👍 Bun! Mai exersează și vei fi gata!
            </p>
          )}
          {scor < 15 && raspunsuri.length > 5 && (
            <p style={{margin: '0.5rem 0 0', fontSize: '1.05rem', fontWeight: 700}}>
              💪 Continuă să exersezi - vei progresa rapid!
            </p>
          )}
        </div>
      </div>
    </Layout>
  );
}
