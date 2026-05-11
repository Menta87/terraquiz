import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Layout from '../../../components/Layout';
import EuropeMap from '../../../components/bac/EuropeMap';
import RomaniaMap from '../../../components/bac/RomaniaMap';
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
import { varianta16 } from '../../../data/bac/varianta-16';
import { varianta17 } from '../../../data/bac/varianta-17';
import { varianta18 } from '../../../data/bac/varianta-18';
import { varianta19 } from '../../../data/bac/varianta-19';


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
};







export default function VariantaPage() {
  const router = useRouter();
  const { id } = router.query;
  
  const [scor, setScor] = useState(0);
  const [raspunsuri, setRaspunsuri] = useState([]);
  const [subiectActiv, setSubiectActiv] = useState('I');
  
  const varianta = VARIANTE[id];
  
  if (!varianta) {
    return (
      <Layout>
        <div style={{padding:'3rem 1rem', textAlign:'center'}}>
          <h1>Varianta nu există</h1>
          <Link href="/bac" style={{color:'#0284c7'}}>← Înapoi la lista de variante</Link>
        </div>
      </Layout>
    );
  }
  
  function adaugaRaspuns(rezultat) {
    setRaspunsuri(function(prev) { return [...prev, rezultat]; });
    setScor(function(prev) { return prev + rezultat.puncte; });
  }
  
  const punctajCuOficiu = scor + 10;
  const nota = punctajCuOficiu / 10;
  
  const subiectCurent = subiectActiv === 'I' ? varianta.subiectI 
                      : subiectActiv === 'II' ? varianta.subiectII 
                      : varianta.subiectIII;
  
  return (
    <Layout>
      <div style={{padding:'2rem 1rem', maxWidth:'850px', margin:'0 auto'}}>
        <h1 style={{textAlign:'center', color:'#1e293b', marginBottom:'0.5rem'}}>
          🎓 {varianta.nume}
        </h1>
        <p style={{textAlign:'center', color:'#64748b', marginBottom:'1.5rem'}}>
          Total: {varianta.totalPuncte} puncte + 10 oficiu = nota 1-10
        </p>
        
        {/* Scor live + notă */}
        <div style={{
          position:'sticky', top:'1rem', zIndex:10,
          background:'linear-gradient(135deg, #fbbf24, #d97706)',
          color:'white', padding:'1rem',
          borderRadius:'12px', marginBottom:'1.5rem',
          boxShadow:'0 4px 12px rgba(251,191,36,0.4)',
        }}>
          <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', flexWrap:'wrap', gap:'0.5rem'}}>
            <div>
              <div style={{fontSize:'0.85rem', opacity:0.95}}>Punctaj:</div>
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
        
        {/* Subiect activ */}
        <h2 style={{color:'#0c4a6e', fontSize:'1.5rem', marginBottom:'1rem'}}>
          📋 {subiectCurent.titlu}
        </h2>
        
        {/* Hartă dacă subiectul are */}
        {subiectActiv === 'I' && (
          <div style={{marginBottom:'1.5rem'}}>
            <EuropeMap varianta={subiectCurent.harta || 'Test_6'} />
          </div>
        )}
        {subiectActiv === 'II' && (
          <div style={{marginBottom:'1.5rem'}}>
            <RomaniaMap varianta={subiectCurent.harta || 'Test_6'} />
          </div>
        )}
        
        {/* Punctele A-E */}
        {['A', 'B', 'C', 'D', 'E'].map(function(punct) {
          if (!subiectCurent[punct] || subiectCurent[punct].length === 0) return null;
          
          const titluPunct = {
            A: 'A. Precizați:',
            B: 'B. Completează:',
            C: 'C. Grilă - selectați răspunsul corect:',
            D: 'D. Compară:',
            E: 'E. Cauze:',
          };
          
          return (
            <div key={punct}>
              <h3 style={{color:'#0c4a6e', marginTop:'1.5rem', fontSize:'1.15rem'}}>
                {titluPunct[punct]}
              </h3>
              <VariantaRenderer 
                exercitii={subiectCurent[punct]}
                onRaspuns={adaugaRaspuns}
              />
            </div>
          );
        })}
        
        {/* Rezultat final - pe Subiect III */}
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
              Nota: {nota.toFixed(1)}
            </h2>
            <p style={{margin:'0 0 1rem', fontSize:'1.1rem', opacity:0.95}}>
              {scor} + 10 oficiu = {punctajCuOficiu} puncte
            </p>
            <p style={{margin:0, fontSize:'1rem', opacity:0.95}}>
              {nota >= 9 && 'Excelent! Ești pregătit pentru BAC!'}
              {nota >= 7 && nota < 9 && 'Foarte bine! Mai exersează puțin!'}
              {nota >= 5 && nota < 7 && 'Bun început! Continuă să exersezi.'}
              {nota < 5 && raspunsuri.length > 5 && 'Mai exersează - vei progresa!'}
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
