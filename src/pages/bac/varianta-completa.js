import { useState } from 'react';
import Link from 'next/link';
import Layout from '../../components/Layout';
import EuropeMap from '../../components/bac/EuropeMap';
import RomaniaInfo from '../../components/bac/RomaniaInfo';
import ExercitiuIdentificare from '../../components/bac/ExercitiuIdentificare';
import ExercitiuCompletare from '../../components/bac/ExercitiuCompletare';
import ExercitiuGrila from '../../components/bac/ExercitiuGrila';
import ExercitiuComparatie from '../../components/bac/ExercitiuComparatie';
import ExercitiuCauza from '../../components/bac/ExercitiuCauza';
import ExercitiuCalcul from '../../components/bac/ExercitiuCalcul';

export default function VariantaCompleta() {
  const [scor, setScor] = useState(0);
  const [raspunsuri, setRaspunsuri] = useState([]);
  const [subiectActiv, setSubiectActiv] = useState('I');
  
  function adaugaRaspuns(rezultat) {
    setRaspunsuri(function(prev) { return [...prev, rezultat]; });
    setScor(function(prev) { return prev + rezultat.puncte; });
  }
  
  // Calcul notă finală (90 puncte + 10 oficiu = 100, împărțit la 10 = nota)
  const punctajCuOficiu = scor + 10;
  const nota = punctajCuOficiu / 10;
  
  return (
    <Layout>
      <div style={{padding:'2rem 1rem', maxWidth:'850px', margin:'0 auto'}}>
        <h1 style={{textAlign:'center', color:'#1e293b', marginBottom:'0.5rem'}}>
          🎓 Variantă completă BAC
        </h1>
        <p style={{textAlign:'center', color:'#64748b', marginBottom:'1.5rem'}}>
          Subiect I + II + III · 90 puncte (+10 oficiu = nota 1-10)
        </p>
        
        {/* Scor live + notă estimată */}
        <div style={{
          position:'sticky', top:'1rem', zIndex:10,
          background:'linear-gradient(135deg, #fbbf24, #d97706)',
          color:'white', padding:'1rem',
          borderRadius:'12px', marginBottom:'1.5rem',
          boxShadow:'0 4px 12px rgba(251,191,36,0.4)',
        }}>
          <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', flexWrap:'wrap', gap:'0.5rem'}}>
            <div>
              <div style={{fontSize:'0.85rem', opacity:0.95}}>Punctaj curent:</div>
              <div style={{fontSize:'1.4rem', fontWeight:900}}>{scor} / 90 puncte</div>
            </div>
            <div style={{textAlign:'right'}}>
              <div style={{fontSize:'0.85rem', opacity:0.95}}>Nota estimată:</div>
              <div style={{fontSize:'1.8rem', fontWeight:900}}>{nota.toFixed(1)}</div>
            </div>
          </div>
          <div style={{
            marginTop:'0.5rem', height:'6px',
            background:'rgba(255,255,255,0.3)', borderRadius:'3px',
            overflow:'hidden',
          }}>
            <div style={{
              width:`${Math.min((scor/90)*100, 100)}%`,
              height:'100%',
              background:'white',
              transition:'width 0.3s',
            }}></div>
          </div>
        </div>
        
        {/* Navigare subiecte */}
        <div style={{
          display:'flex', gap:'0.5rem', marginBottom:'1.5rem',
          background:'#f1f5f9', padding:'0.5rem', borderRadius:'10px',
        }}>
          {['I', 'II', 'III'].map(function(s) {
            return (
              <button
                key={s}
                onClick={function() { setSubiectActiv(s); window.scrollTo({top: 0, behavior: 'smooth'}); }}
                style={{
                  flex:1, padding:'0.6rem',
                  background: subiectActiv === s ? '#0284c7' : 'white',
                  color: subiectActiv === s ? 'white' : '#1e293b',
                  border:'none', borderRadius:'8px',
                  fontWeight:700, fontSize:'0.9rem',
                  cursor:'pointer',
                }}>
                Subiect {s}
              </button>
            );
          })}
        </div>
        
        {/* SUBIECT I - Europa */}
        {subiectActiv === 'I' && (
          <div>
            <h2 style={{color:'#0c4a6e', fontSize:'1.5rem'}}>📋 Subiect I - Europa (30p)</h2>
            
            <EuropeMap varianta="Test_6" />
            
            <h3 style={{color:'#0c4a6e', marginTop:'1.5rem'}}>A. Precizați (4p):</h3>
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
            
            <h3 style={{color:'#0c4a6e', marginTop:'1.5rem'}}>B. Completează (6p):</h3>
            <ExercitiuCompletare
              enuntInainte="1. Capitala statului marcat, pe hartă, cu litera B este orașul"
              raspunsCorect="Berlin"
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
            
            <h3 style={{color:'#0c4a6e', marginTop:'1.5rem'}}>C. Grilă (10p):</h3>
            <ExercitiuGrila
              enunt="1. Care dintre statele marcate este Italia?"
              variante={{ a: "C", b: "E", c: "F", d: "G" }}
              raspunsCorect="c"
              punctaj={2}
              onRaspuns={adaugaRaspuns}
            />
            <ExercitiuGrila
              enunt="2. Care dintre statele marcate este Bulgaria?"
              variante={{ a: "F", b: "H", c: "I", d: "J" }}
              raspunsCorect="d"
              punctaj={2}
              onRaspuns={adaugaRaspuns}
            />
            <ExercitiuGrila
              enunt="3. Care dintre statele marcate este Germania?"
              variante={{ a: "A", b: "B", c: "C", d: "E" }}
              raspunsCorect="b"
              punctaj={2}
              onRaspuns={adaugaRaspuns}
            />
            <ExercitiuGrila
              enunt="4. Capitala statului D (Belgia) este orașul:"
              variante={{ a: "Amsterdam", b: "Bruxelles", c: "Copenhaga", d: "Haga" }}
              raspunsCorect="b"
              punctaj={2}
              onRaspuns={adaugaRaspuns}
            />
            <ExercitiuGrila
              enunt="5. Statul A (Suedia) are climă:"
              variante={{ a: "mediteraneană", b: "temperat-oceanică", c: "temperat-continentală", d: "subpolară" }}
              raspunsCorect="d"
              punctaj={2}
              onRaspuns={adaugaRaspuns}
            />
            
            <h3 style={{color:'#0c4a6e', marginTop:'1.5rem'}}>D. Compară (6p):</h3>
            <ExercitiuComparatie
              enunt="Precizați 3 deosebiri între clima statului D (Belgia) și clima statului H (Grecia)"
              raspunsExemplu={[
                "Belgia are climă temperat-oceanică, iar Grecia are climă mediteraneană",
                "Belgia are precipitații medii anuale mai mari (700-1000 mm), iar Grecia mai mici (400-700 mm)",
                "Belgia are amplitudine termică mai mică, iar Grecia mai mare datorită verilor toride",
              ]}
              punctajMaxim={6}
              onRaspuns={adaugaRaspuns}
            />
            
            <h3 style={{color:'#0c4a6e', marginTop:'1.5rem'}}>E. Cauze (4p):</h3>
            <ExercitiuCauza
              enunt="1. Prezentați o cauză pentru densitatea mică a populației din statul A (Suedia)"
              raspunsExemplu="Suedia are densitate mică a populației datorită climei reci subpolare în nord, reliefului muntos al Alpilor Scandinaviei și suprafeței mari acoperite de păduri și mlaștini."
              cuvinteCheie={["climă", "rece", "munți", "păduri", "nord"]}
              punctaj={2}
              onRaspuns={adaugaRaspuns}
            />
            <ExercitiuCauza
              enunt="2. Prezentați o cauză care favorizează cultura viței de vie în statul F (Italia)"
              raspunsExemplu="Italia favorizează cultura viței de vie datorită climei mediteraneene cu veri calde și uscate, precipitații moderate și soluri fertile."
              cuvinteCheie={["mediteranean", "soare", "uscat", "soluri"]}
              punctaj={2}
              onRaspuns={adaugaRaspuns}
            />
          </div>
        )}
        
        {/* SUBIECT II - România */}
        {subiectActiv === 'II' && (
          <div>
            <h2 style={{color:'#0c4a6e', fontSize:'1.5rem'}}>📋 Subiect II - România (30p)</h2>
            
            <RomaniaInfo varianta="Test_6" />
            
            <h3 style={{color:'#0c4a6e', marginTop:'1.5rem'}}>A. Precizați (4p):</h3>
            <ExercitiuIdentificare
              enunt="1. Numele orașului marcat cu numărul 12"
              raspunsCorect="Călărași"
              raspunsuriAcceptate={["calarasi", "Călărași", "Calarasi", "călărași"]}
              punctaj={2}
              onRaspuns={adaugaRaspuns}
            />
            <ExercitiuIdentificare
              enunt="2. Numele râului marcat cu numărul 6"
              raspunsCorect="Dunărea"
              raspunsuriAcceptate={["dunarea", "Dunărea", "Dunarea", "dunărea"]}
              punctaj={2}
              onRaspuns={adaugaRaspuns}
            />
            
            <h3 style={{color:'#0c4a6e', marginTop:'1.5rem'}}>B. Completează (6p):</h3>
            <ExercitiuCompletare
              enuntInainte="1. Orașul marcat cu numărul 8 se numește"
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
              enuntInainte="3. Unitatea de relief marcată cu litera E este"
              raspunsCorect="Subcarpații Curburii"
              raspunsuriAcceptate={["subcarpatii curburii", "Subcarpații Curburii", "Subcarpatii Curburii"]}
              punctaj={2}
              onRaspuns={adaugaRaspuns}
            />
            
            <h3 style={{color:'#0c4a6e', marginTop:'1.5rem'}}>C. Grilă (10p):</h3>
            <ExercitiuGrila
              enunt="1. În unitatea C (Munții Apuseni) există relief:"
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
              enunt="3. Influențe climatice baltice pătrund în unitatea de relief:"
              variante={{ a: "A", b: "B", c: "C", d: "F" }}
              raspunsCorect="a"
              punctaj={2}
              onRaspuns={adaugaRaspuns}
            />
            <ExercitiuGrila
              enunt="4. Etajul pădurilor de conifere există în unitatea:"
              variante={{ a: "A", b: "F", c: "G", d: "H" }}
              raspunsCorect="a"
              punctaj={2}
              onRaspuns={adaugaRaspuns}
            />
            <ExercitiuGrila
              enunt="5. Cea mai veche unitate de relief este:"
              variante={{ a: "A (Carpații Orientali)", b: "G (Podișul Moldovei)", c: "H (Podișul Transilvaniei)", d: "C (Munții Apuseni)" }}
              raspunsCorect="d"
              punctaj={2}
              onRaspuns={adaugaRaspuns}
            />
            
            <h3 style={{color:'#0c4a6e', marginTop:'1.5rem'}}>D. Compară (6p):</h3>
            <ExercitiuComparatie
              enunt="Precizați 3 deosebiri între relieful unității A (Carpații Orientali) și unității H (Podișul Transilvaniei)"
              raspunsExemplu={[
                "Carpații Orientali sunt formați prin orogeneza alpină, iar Podișul Transilvaniei prin sedimentare",
                "Carpații Orientali au altitudini mari (până la 2303 m), iar Podișul Transilvaniei mici (300-700 m)",
                "Carpații Orientali sunt alcătuiți din roci magmatice și metamorfice, iar Podișul Transilvaniei din roci sedimentare",
              ]}
              punctajMaxim={6}
              onRaspuns={adaugaRaspuns}
            />
            
            <h3 style={{color:'#0c4a6e', marginTop:'1.5rem'}}>E. Cauze (4p):</h3>
            <ExercitiuCauza
              enunt="1. Prezentați o cauză a frecvenței mai mari a hidrocentralelor în regiunea montană"
              raspunsExemplu="Hidrocentralele sunt mai frecvente în regiunea montană deoarece râurile au debite mari, pante accentuate și văi adânci, ceea ce permite construirea barajelor și creează energie hidraulică."
              cuvinteCheie={["pante", "debit", "munte", "energie"]}
              punctaj={2}
              onRaspuns={adaugaRaspuns}
            />
            <ExercitiuCauza
              enunt="2. Prezentați un avantaj sau dezavantaj al hidroenergiei"
              raspunsExemplu="Avantaj: hidroenergia este o sursă regenerabilă și nepoluantă. Dezavantaj: necesită investiții mari inițiale și schimbă ecosistemul local."
              cuvinteCheie={["regenerabil", "poluare", "investiții", "ecosistem"]}
              punctaj={2}
              onRaspuns={adaugaRaspuns}
            />
          </div>
        )}
        
        {/* SUBIECT III - Lumea contemporană */}
        {subiectActiv === 'III' && (
          <div>
            <h2 style={{color:'#0c4a6e', fontSize:'1.5rem'}}>📋 Subiect III - Lumea contemporană (30p)</h2>
            
            <div style={{background:'#eff6ff', padding:'1rem', borderRadius:'8px', marginBottom:'1rem', border:'2px solid #0284c7'}}>
              <h3 style={{margin:'0 0 0.5rem', color:'#0c4a6e'}}>📊 Tabel lungimea Dunării pe sectoare:</h3>
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
                  <tr><td style={{padding:'0.3rem'}}>România</td><td style={{padding:'0.3rem', textAlign:'center'}}>1075</td></tr>
                </tbody>
              </table>
            </div>
            
            <h3 style={{color:'#0c4a6e', marginTop:'1.5rem'}}>A. Precizați (4p):</h3>
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
            
            <h3 style={{color:'#0c4a6e', marginTop:'1.5rem'}}>B. Menționați (6p):</h3>
            <ExercitiuCompletare
              enuntInainte="1. O unitate de relief străbătută de Dunăre pe teritoriul României este"
              raspunsCorect="Câmpia Română"
              raspunsuriAcceptate={["campia romana", "Câmpia Română", "Campia Romana", "Podișul Dobrogei", "podisul dobrogei"]}
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
              enuntInainte="3. Un oraș cu peste 200.000 locuitori străbătut de Dunăre este"
              raspunsCorect="Belgrad"
              raspunsuriAcceptate={["belgrad", "Belgrad", "Beograd", "Viena", "viena", "Budapesta", "budapesta"]}
              punctaj={2}
              onRaspuns={adaugaRaspuns}
            />
            
            <h3 style={{color:'#0c4a6e', marginTop:'1.5rem'}}>C. Caracterizare Grupa Centrală Carpați Orientali (10p):</h3>
            <ExercitiuCompletare
              enuntInainte="1. Modul de formare:"
              raspunsCorect="cutare"
              raspunsuriAcceptate={["cutare", "Cutare", "orogeneza alpina", "orogeneza alpină", "orogeneza"]}
              punctaj={2}
              onRaspuns={adaugaRaspuns}
            />
            <ExercitiuCompletare
              enuntInainte="2. Un tip de rocă specific:"
              raspunsCorect="vulcanice"
              raspunsuriAcceptate={["vulcanice", "magmatice", "andezit", "bazalt", "metamorfice", "sisturi"]}
              punctaj={2}
              onRaspuns={adaugaRaspuns}
            />
            <ExercitiuCompletare
              enuntInainte="3. Un tip genetic de relief:"
              raspunsCorect="vulcanic"
              raspunsuriAcceptate={["vulcanic", "carstic", "glaciar"]}
              punctaj={2}
              onRaspuns={adaugaRaspuns}
            />
            <ExercitiuCompletare
              enuntInainte="4. Un etaj climatic prezent:"
              raspunsCorect="alpin"
              raspunsuriAcceptate={["alpin", "subalpin", "montan"]}
              punctaj={2}
              onRaspuns={adaugaRaspuns}
            />
            <ExercitiuCompletare
              enuntInainte="5. Un râu care izvorăște sau străbate zona:"
              raspunsCorect="Bistrița"
              raspunsuriAcceptate={["bistrita", "Bistrița", "Mureș", "mures", "Olt", "olt", "Trotuș", "trotus"]}
              punctaj={2}
              onRaspuns={adaugaRaspuns}
            />
            
            <h3 style={{color:'#0c4a6e', marginTop:'1.5rem'}}>D. Calcul temperaturi (6p):</h3>
            <div style={{background:'#eff6ff', padding:'0.8rem', borderRadius:'8px', marginBottom:'0.75rem', fontSize:'0.9rem', color:'#1e293b'}}>
              <strong>Temperaturi orașul A:</strong> Ianuarie: 5,0°C | Iulie: 15,2°C
            </div>
            <ExercitiuCalcul
              enunt="1. Calculați amplitudinea termică medie anuală"
              formula="Amplitudine = T iulie - T ianuarie"
              raspunsCorect={10.2}
              intervalAcceptat={[10.0, 10.4]}
              unitate="°C"
              punctaj={2}
              onRaspuns={adaugaRaspuns}
            />
            <ExercitiuGrila
              enunt="2. Care este orașul A?"
              variante={{ a: "București", b: "Dublin", c: "Moscova", d: "Roma" }}
              raspunsCorect="b"
              punctaj={2}
              onRaspuns={adaugaRaspuns}
            />
            <ExercitiuCauza
              enunt="3. Prezentați o cauză a temperaturilor pozitive iarna în acest oraș"
              raspunsExemplu="Influența Curentului Atlantic de Nord (Curentul Golfului) care încălzește iarna coastele Europei de Vest."
              cuvinteCheie={["curent", "Golfului", "ocean", "vest"]}
              punctaj={2}
              onRaspuns={adaugaRaspuns}
            />
            
            <h3 style={{color:'#0c4a6e', marginTop:'1.5rem'}}>E. Calcul demografic (4p):</h3>
            <div style={{background:'#fef3c7', padding:'0.8rem', borderRadius:'8px', marginBottom:'0.75rem', fontSize:'0.9rem', color:'#1e293b'}}>
              <strong>Populația Ucrainei 2000:</strong> 0-14 ani: 8.570.000 | 15-64 ani: 33.731.000 | 65+: 6.756.000
            </div>
            <ExercitiuCalcul
              enunt="1. Calculați populația totală a Ucrainei în 2000"
              formula="Total = grupa1 + grupa2 + grupa3"
              raspunsCorect={49057000}
              intervalAcceptat={[49050000, 49060000]}
              unitate="locuitori"
              punctaj={2}
              onRaspuns={adaugaRaspuns}
            />
            <ExercitiuCauza
              enunt="2. Prezentați o cauză a scăderii populației Ucrainei (2000-2010)"
              raspunsExemplu="Scăderea s-a datorat ratei scăzute a natalității, emigrației masive și condițiilor economice dificile."
              cuvinteCheie={["natalitate", "emigrație", "emigrare", "economic"]}
              punctaj={2}
              onRaspuns={adaugaRaspuns}
            />
          </div>
        )}
        
        {/* Rezultat final - apare doar pe Subiect III */}
        {subiectActiv === 'III' && (
          <div style={{
            marginTop:'2rem', padding:'2rem',
            background: nota >= 9 ? 'linear-gradient(135deg, #16a34a, #15803d)' :
                       nota >= 7 ? 'linear-gradient(135deg, #0284c7, #1e40af)' :
                       nota >= 5 ? 'linear-gradient(135deg, #fbbf24, #d97706)' :
                       'linear-gradient(135deg, #64748b, #475569)',
            color:'white', borderRadius:'16px',
            textAlign:'center',
          }}>
            <div style={{fontSize:'3rem', marginBottom:'0.5rem'}}>
              {nota >= 9 ? '🏆' : nota >= 7 ? '🎯' : nota >= 5 ? '👍' : '💪'}
            </div>
            <h2 style={{margin:'0 0 0.5rem', fontSize:'2rem'}}>
              Nota finală: {nota.toFixed(1)}
            </h2>
            <p style={{margin:'0 0 1rem', fontSize:'1.1rem', opacity:0.95}}>
              {scor} puncte + 10 puncte oficiu = {punctajCuOficiu} puncte
            </p>
            <p style={{margin:0, fontSize:'1rem', opacity:0.95}}>
              {nota >= 9 && 'Excelent! Ești pregătit pentru BAC!'}
              {nota >= 7 && nota < 9 && 'Foarte bine! Mai exersează puțin și vei lua nota mare!'}
              {nota >= 5 && nota < 7 && 'Bun început! Continuă să exersezi.'}
              {nota < 5 && raspunsuri.length > 5 && 'Mai exersează - vei progresa rapid!'}
              {raspunsuri.length === 0 && 'Răspunde la întrebări pentru a vedea progresul!'}
            </p>
            <div style={{marginTop:'1.5rem', display:'flex', gap:'0.5rem', justifyContent:'center', flexWrap:'wrap'}}>
              <Link href="/bac" style={{
                padding:'0.7rem 1.5rem',
                background:'white',
                color:'#1e293b',
                borderRadius:'8px',
                textDecoration:'none',
                fontWeight:700,
              }}>
                ← Alte variante
              </Link>
              <button
                onClick={function() { window.location.reload(); }}
                style={{
                  padding:'0.7rem 1.5rem',
                  background:'rgba(255,255,255,0.2)',
                  color:'white',
                  border:'2px solid white',
                  borderRadius:'8px',
                  fontWeight:700,
                  cursor:'pointer',
                }}>
                🔄 Începe din nou
              </button>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
}
