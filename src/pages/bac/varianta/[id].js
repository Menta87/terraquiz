import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Layout from '../../../components/Layout';
import BacImageMap from '../../../components/bac/BacImageMap';
import VariantaRenderer from '../../../components/bac/VariantaRenderer';
import { supabase } from '../../../lib/supabase';

// Lista variantelor PREMIUM (Var 6-22). Var 1-5 sunt FREE.
const PREMIUM_VARIANTS = [
  'varianta-6', 'varianta-7', 'varianta-8', 'varianta-9', 'varianta-10',
  'varianta-11', 'varianta-12', 'varianta-13', 'varianta-14', 'varianta-15',
  'varianta-16', 'varianta-17', 'varianta-18', 'varianta-19', 'varianta-20',
     'varianta-21', 'varianta-22', 'varianta-23', 'varianta-24', 'varianta-25', 'varianta-26', 'varianta-27', 'varianta-28', 'varianta-29', 'varianta-30', 'varianta-31', 'varianta-32', 'varianta-33', 'varianta-34', 'varianta-35', 'varianta-36', 'varianta-37', 'varianta-38', 'varianta-39', 'varianta-40', 'varianta-41', 'varianta-42', 'varianta-43', 'varianta-44', 'varianta-45', 'varianta-46', 'varianta-47', 'varianta-48', 'varianta-49', 'varianta-50'

];








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
import { varianta16 } from '../../../data/bac/varianta-16';
import { varianta17 } from '../../../data/bac/varianta-17';
import { varianta18 } from '../../../data/bac/varianta-18';
import { varianta19 } from '../../../data/bac/varianta-19';
import { varianta20 } from '../../../data/bac/varianta-20';
import { varianta21 } from '../../../data/bac/varianta-21';
import { varianta22 } from '../../../data/bac/varianta-22';
import { varianta23 } from '../../../data/bac/varianta-23';
import { varianta24 } from '../../../data/bac/varianta-24';
import { varianta25 } from '../../../data/bac/varianta-25';
import { varianta26 } from '../../../data/bac/varianta-26';
import { varianta27 } from '../../../data/bac/varianta-27';
import { varianta28 } from '../../../data/bac/varianta-28';
import { varianta29 } from '../../../data/bac/varianta-29';
import { varianta30 } from '../../../data/bac/varianta-30';
import { varianta31 } from '../../../data/bac/varianta-31';
import { varianta32 } from '../../../data/bac/varianta-32';
import { varianta33 } from '../../../data/bac/varianta-33';
import { varianta34 } from '../../../data/bac/varianta-34';
import { varianta35 } from '../../../data/bac/varianta-35';
import { varianta36 } from '../../../data/bac/varianta-36';
import { varianta37 } from '../../../data/bac/varianta-37';
import { varianta38 } from '../../../data/bac/varianta-38';
import { varianta39 } from '../../../data/bac/varianta-39';
import { varianta40 } from '../../../data/bac/varianta-40';
import { varianta41 } from '../../../data/bac/varianta-41';
import { varianta42 } from '../../../data/bac/varianta-42';
import { varianta43 } from '../../../data/bac/varianta-43';
import { varianta44 } from '../../../data/bac/varianta-44';
import { varianta45 } from '../../../data/bac/varianta-45';
import { varianta46 } from '../../../data/bac/varianta-46';
import { varianta47 } from '../../../data/bac/varianta-47';
import { varianta48 } from '../../../data/bac/varianta-48';
import { varianta49 } from '../../../data/bac/varianta-49';
import { varianta50 } from '../../../data/bac/varianta-50';


















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
   'varianta-16': varianta16,
   'varianta-17': varianta17,
  'varianta-18': varianta18,
  'varianta-19': varianta19,
   'varianta-20': varianta20,
    'varianta-21': varianta21,
    'varianta-22': varianta22,
    'varianta-23': varianta23,
    'varianta-24': varianta24,
    'varianta-25': varianta25,
    'varianta-26': varianta26,
  'varianta-27': varianta27,
    'varianta-28': varianta28,
    'varianta-29': varianta29,
    'varianta-30': varianta30,
    'varianta-31': varianta31,
    'varianta-32': varianta32,
    'varianta-33': varianta33,
    'varianta-34': varianta34,
    'varianta-35': varianta35,
    'varianta-36': varianta36,
    'varianta-37': varianta37,
    'varianta-38': varianta38,
    'varianta-39': varianta39,
    'varianta-40': varianta40,
    'varianta-41': varianta41,
    'varianta-42': varianta42,
    'varianta-43': varianta43,
    'varianta-44': varianta44,
    'varianta-45': varianta45,
    'varianta-46': varianta46,
    'varianta-47': varianta47,
    'varianta-48': varianta48,
    'varianta-49': varianta49,
    'varianta-50': varianta50,
};













export default function VariantaPage() {
  const router = useRouter();
  const { id } = router.query;
  const [raspunsuri, setRaspunsuri] = useState({});
  const [isPremium, setIsPremium] = useState(false);
  const [checkingPremium, setCheckingPremium] = useState(true);
  
  useEffect(() => {
    async function checkUser() {
      const { data: { session } } = await supabase.auth.getSession();
      if (session) {
        try {
          const res = await fetch('/api/subscription-status?userId=' + session.user.id);
          const data = await res.json();
          setIsPremium(data.isPremium || false);
        } catch (e) {}
      }
      setCheckingPremium(false);
    }
    checkUser();
  }, []);
  
  if (!id) return <Layout><div style={{padding:'2rem', textAlign:'center'}}>Se încarcă...</div></Layout>;
  
  // Check Premium pentru variantele Premium
  const isPremiumVariant = PREMIUM_VARIANTS.includes(id);
  
  if (isPremiumVariant && !checkingPremium && !isPremium) {
    return (
      <Layout>
        <div style={{maxWidth: '600px', margin: '0 auto', padding: '4rem 1.5rem', textAlign: 'center'}}>
          <div style={{fontSize: '5rem', marginBottom: '1rem'}}>🔒</div>
          <h1 style={{fontSize: '2rem', fontWeight: 900, color: '#1e293b', marginBottom: '1rem'}}>
            Această variantă este Premium
          </h1>
          <p style={{fontSize: '1.1rem', color: '#64748b', lineHeight: 1.7, marginBottom: '2rem'}}>
            Variantele 6-22 sunt disponibile doar pentru abonații Premium.
            Variantele 1-5 rămân gratuite pentru toți utilizatorii.
          </p>
          <div style={{display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap'}}>
            <Link href="/premium" style={{
              padding: '0.9rem 2rem',
              background: 'linear-gradient(135deg, #f59e0b, #d97706)',
              color: 'white', borderRadius: '10px',
              textDecoration: 'none', fontWeight: 700,
              fontSize: '1.05rem',
            }}>
              👑 Deblochează Premium - 9,90 RON/lună
            </Link>
            <Link href="/bac" style={{
              padding: '0.9rem 2rem',
              background: 'white',
              color: '#1e293b', borderRadius: '10px',
              textDecoration: 'none', fontWeight: 700,
              fontSize: '1.05rem',
              border: '2px solid #e2e8f0',
            }}>
              ← Înapoi la BAC
            </Link>
          </div>
        </div>
      </Layout>
    );
  }
  
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
            <BacImageMap 
              test={testNum} 
              tip="europa"
              set={varianta.bacSet || '2020'}
              varianta={varianta.bacVariantNum || 1}
            />
          </div>

          <VariantaRenderer exercitii={exercitiiI} onRaspuns={handleRaspuns} />
        </section>
        
        {/* SUBIECT II */}
        <section style={{marginTop: '3rem'}}>
          <h2 style={{fontSize: '1.5rem', fontWeight: 800, color: '#1e3a8a', marginBottom: '1rem'}}>
            Subiect II - România (30 puncte)
          </h2>
                  <div style={{marginBottom: '1.5rem'}}>
            <BacImageMap 
              test={testNum} 
              tip="romania"
              set={varianta.bacSet || '2020'}
              varianta={varianta.bacVariantNum || 1}
            />
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
                        <BacImageMap 
                test={testNum} 
                tip="diagrama"
                set={varianta.bacSet || '2020'}
                varianta={varianta.bacVariantNum || 1}
              />

            </div>
          )}
          {varianta.subiectIII && varianta.subiectIII.hasTabele && (
            <div style={{marginBottom: '1.5rem'}}>
                         <BacImageMap 
                test={testNum} 
                tip="tabele"
                set={varianta.bacSet || '2020'}
                varianta={varianta.bacVariantNum || 1}
              />

            </div>
          )}
          <VariantaRenderer exercitii={exercitiiIII} onRaspuns={handleRaspuns} />

        </section>
      </div>
    </Layout>
  );
}
