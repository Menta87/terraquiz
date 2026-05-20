import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Layout from '../../../components/Layout';
import BacImageMap from '../../../components/bac/BacImageMap';
import VariantaRenderer from '../../../components/bac/VariantaRenderer';

import { varianta1 } from '../../../data/bac/varianta-1';
import { varianta2 } from '../../../data/bac/varianta-2';
import { varianta3 } from '../../../data/bac/varianta-3';
import { varianta4 } from '../../../data/bac/varianta-4';
import { varianta5 } from '../../../data/bac/varianta-5';
import { varianta6 } from '../../../data/bac/varianta-6';
import { varianta7 } from '../../../data/bac/varianta-7';
import { varianta8 } from '../../../data/bac/varianta-8';
import { varianta9 } from '../../../data/bac/varianta-9';
import { varianta10 } from '../../../data/bac/varianta-10';
import { varianta11 } from '../../../data/bac/varianta-11';
import { varianta12 } from '../../../data/bac/varianta-12';
import { varianta13 } from '../../../data/bac/varianta-13';
import { varianta14 } from '../../../data/bac/varianta-14';
import { varianta15 } from '../../../data/bac/varianta-15';



const VARIANTE = {
  'varianta-1': varianta1,
  'varianta-2': varianta2,
  'varianta-3': varianta3,
  'varianta-4': varianta4,
  'varianta-5': varianta5,
   'varianta-6': varianta6,
  'varianta-7': varianta7,
  'varianta-8': varianta8,
  'varianta-9': varianta9,
    'varianta-10': varianta10,
  'varianta-11': varianta11,
  'varianta-12': varianta12,
  'varianta-13': varianta13,
  'varianta-14': varianta14,
  'varianta-15': varianta15,
};



export default function VariantaPage() {
  const router = useRouter();
  const { id } = router.query;
  const [raspunsuri, setRaspunsuri] = useState({});
  
  if (!id) return <Layout><div style={{padding:'2rem', textAlign:'center'}}>Se încarcă...</div></Layout>;
  
  const varianta = VARIANTE[id];
  
  if (!varianta) {
    return (
      <Layout>
        <div style={{padding:'3rem', textAlign:'center'}}>
          <h1>Varianta nu există</h1>
          <Link href="/bac" style={{color:'#0284c7', textDecoration:'underline'}}>← Înapoi la BAC</Link>
        </div>
      </Layout>
    );
  }
  
  function handleRaspuns(data) {
    setRaspunsuri(function(prev) { return { ...prev, [Date.now()]: data }; });
  }
  
  function combineExercises(subiect) {
    if (!subiect) return [];
    const all = [];
    ['A', 'B', 'C', 'D', 'E'].forEach(function(key) {
      if (Array.isArray(subiect[key])) {
        subiect[key].forEach(function(ex) { all.push(ex); });
      }
    });
    return all;
  }
  
  const exercitiiI = combineExercises(varianta.subiectI);
  const exercitiiII = combineExercises(varianta.subiectII);
  const exercitiiIII = combineExercises(varianta.subiectIII);
  
  const testNum = varianta.testNumber || 6;
  
  return (
    <Layout>
      <div style={{maxWidth: '1000px', margin: '0 auto', padding: '2rem 1rem'}}>
        <Link href="/bac" style={{color:'#0284c7', textDecoration:'underline', fontSize:'0.9rem'}}>← Înapoi la BAC</Link>
        
        <h1 style={{fontSize: '2rem', fontWeight: 900, margin: '1rem 0', color: '#1e293b'}}>
          🎓 {varianta.nume}
        </h1>
        
        {/* SUBIECT I */}
        <section style={{marginTop: '2rem'}}>
          <h2 style={{fontSize: '1.5rem', fontWeight: 800, color: '#1e3a8a', marginBottom: '1rem'}}>
            Subiect I - Europa (30 puncte)
          </h2>
          <div style={{marginBottom: '1.5rem'}}>
            <BacImageMap test={testNum} tip="europa" />
          </div>
          <VariantaRenderer exercitii={exercitiiI} onRaspuns={handleRaspuns} />
        </section>
        
        {/* SUBIECT II */}
        <section style={{marginTop: '3rem'}}>
          <h2 style={{fontSize: '1.5rem', fontWeight: 800, color: '#1e3a8a', marginBottom: '1rem'}}>
            Subiect II - România (30 puncte)
          </h2>
          <div style={{marginBottom: '1.5rem'}}>
            <BacImageMap test={testNum} tip="romania" />
          </div>
          <VariantaRenderer exercitii={exercitiiII} onRaspuns={handleRaspuns} />
        </section>
        
        {/* SUBIECT III */}
        <section style={{marginTop: '3rem'}}>
          <h2 style={{fontSize: '1.5rem', fontWeight: 800, color: '#1e3a8a', marginBottom: '1rem'}}>
            Subiect III - Lumea contemporană (30 puncte)
          </h2>
            {varianta.subiectIII && varianta.subiectIII.hasDiagrama && (
            <div style={{marginBottom: '1.5rem'}}>
              <BacImageMap test={testNum} tip="diagrama" />
            </div>
          )}
          {varianta.subiectIII && varianta.subiectIII.hasTabele && (
            <div style={{marginBottom: '1.5rem'}}>
              <BacImageMap test={testNum} tip="tabele" />
            </div>
          )}
          <VariantaRenderer exercitii={exercitiiIII} onRaspuns={handleRaspuns} />

        </section>
      </div>
    </Layout>
  );
}
