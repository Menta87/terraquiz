import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';

export default function HartiPage() {
  const [maps, setMaps] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => { load(); }, []);

  async function load() {
    const { data } = await supabase.from('map_downloads').select('*').order('region').order('order_idx');
    setMaps(data || []);
    setLoading(false);
  }

  if (loading) return <div className="loading container">Se încarcă...</div>;

  const regions = [...new Set(maps.map(m => m.region))];

  return (
    <div className="container" style={{padding:'2rem 1.5rem', maxWidth:'1000px'}}>
      <h1 style={{textAlign:'center', color:'#5b21b6', marginBottom:'0.5rem'}}>🗺️ Hărți de descărcat</h1>
      <p style={{textAlign:'center', color:'#64748b', marginBottom:'2rem'}}>Hărți fizice și politice, gratuite, pentru toți utilizatorii</p>

      {regions.length === 0 ? (
        <div style={{padding:'3rem', textAlign:'center', background:'white', borderRadius:'16px', color:'#64748b'}}>
          🗺️ Hărțile vor fi disponibile în curând.
        </div>
      ) : (
        regions.map(region => {
          const regionMaps = maps.filter(m => m.region === region);
          return (
            <div key={region} style={{marginBottom:'2rem'}}>
              <h2 style={{color:'#1e293b', marginBottom:'1rem'}}>{regionMaps[0]?.region_emoji} {region}</h2>
              <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(260px, 1fr))', gap:'1rem'}}>
                {regionMaps.map(m => (
                  <div key={m.id} style={{background:'white', borderRadius:'14px', overflow:'hidden', boxShadow:'0 2px 8px rgba(0,0,0,0.08)'}}>
                    <img src={m.image_url} alt={m.title} style={{width:'100%', height:'160px', objectFit:'cover', display:'block', background:'#f1f5f9'}} />
                    <div style={{padding:'1rem'}}>
                      <div style={{fontSize:'0.75rem', color: m.map_type === 'physical' ? '#059669' : '#dc2626', fontWeight:700, textTransform:'uppercase'}}>{m.map_type === 'physical' ? '🏔️ Fizică' : '🏛️ Politică'}</div>
                      <div style={{fontWeight:700, color:'#1e293b', marginTop:'0.25rem'}}>{m.title}</div>
                      {m.source_attribution && <div style={{fontSize:'0.75rem', color:'#94a3b8', marginTop:'0.25rem'}}>{m.source_attribution}</div>}
                      <a href={m.image_url} download target="_blank" rel="noreferrer" style={{display:'block', textAlign:'center', marginTop:'0.75rem', padding:'0.6rem', background:'linear-gradient(135deg, #8b5cf6, #6d28d9)', color:'white', borderRadius:'8px', textDecoration:'none', fontWeight:700, fontSize:'0.9rem'}}>⬇️ Descarcă</a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })
      )}
    </div>
  );
}
