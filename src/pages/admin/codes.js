import { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabase';

export default function AdminCodes() {
  const [codes, setCodes] = useState([]);
  const [selectedCode, setSelectedCode] = useState(null);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => { load(); }, []);
  useEffect(() => { if (selectedCode) loadUsers(selectedCode); }, [selectedCode]);

  async function load() {
    const { data: { session } } = await supabase.auth.getSession();
    if (!session) { window.location.href = '/login'; return; }
    
    // Verific email din auth (mai fiabil decât profiles.email care poate fi null)
    const userEmail = session.user.email;
    if (userEmail !== 'robert_menta@yahoo.com') {
      console.log('Email verificat:', userEmail);
      setLoading(false);
      return;
    }
    setIsAdmin(true);
    
    const { data } = await supabase.from('universal_promo_codes').select('*').order('created_at', { ascending: false });
    setCodes(data || []);
    if (data && data.length > 0) setSelectedCode(data[0].code);
    setLoading(false);
  }

  async function loadUsers(code) {
    const { data, error } = await supabase.rpc('get_promo_code_users', { p_code: code });
    if (error) console.error('RPC error:', error);
    setUsers(data || []);
  }

  async function toggleCodeStatus(codeId, isActive) {
    await supabase.from('universal_promo_codes').update({ is_active: !isActive }).eq('id', codeId);
    load();
  }

  if (loading) return <div className="loading container">Se încarcă...</div>;
  if (!isAdmin) return <div className="container" style={{padding:'4rem', textAlign:'center'}}><h2>Acces refuzat</h2></div>;

  const selected = codes.find(c => c.code === selectedCode);

  return (
    <div className="container" style={{padding:'2rem 1.5rem', maxWidth:'1200px'}}>
      <h1 style={{color:'#5b21b6', marginBottom:'0.5rem'}}>🎫 Admin - Coduri Promo</h1>
      <p style={{color:'#64748b', marginBottom:'2rem'}}>Monitorizare utilizări coduri promo universale</p>

      <div style={{display:'grid', gridTemplateColumns:'320px 1fr', gap:'1.5rem'}}>
        {/* Lista coduri */}
        <div>
          <h3 style={{color:'#1e293b', marginBottom:'0.75rem'}}>Toate codurile ({codes.length})</h3>
          <div style={{display:'flex', flexDirection:'column', gap:'0.5rem'}}>
            {codes.map(c => (
              <div key={c.id} onClick={() => setSelectedCode(c.code)} style={{
                padding:'1rem',
                background: selectedCode === c.code ? 'linear-gradient(135deg, #8b5cf6, #6d28d9)' : 'white',
                color: selectedCode === c.code ? 'white' : '#1e293b',
                borderRadius:'12px',
                cursor:'pointer',
                border: c.is_active ? '2px solid #10b981' : '2px solid #ef4444',
                boxShadow:'0 2px 6px rgba(0,0,0,0.08)'
              }}>
                <div style={{fontSize:'1.5rem'}}>{c.emoji}</div>
                <div style={{fontFamily:'monospace', fontWeight:800, fontSize:'0.9rem', marginTop:'0.25rem'}}>{c.code}</div>
                <div style={{fontSize:'0.8rem', opacity:0.9, marginTop:'0.25rem'}}>{c.name}</div>
                <div style={{fontSize:'0.75rem', marginTop:'0.5rem', display:'flex', justifyContent:'space-between'}}>
                  <span>{c.current_uses}/{c.max_uses} folosiri</span>
                  <span style={{background: c.is_active ? '#10b981' : '#ef4444', color:'white', padding:'0.15rem 0.5rem', borderRadius:'6px', fontSize:'0.7rem', fontWeight:700}}>{c.is_active ? 'ACTIV' : 'INACTIV'}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Detalii cod + Users */}
        <div>
          {selected && (
            <>
              <div style={{background:'linear-gradient(135deg, #ede9fe, #ddd6fe)', padding:'1.5rem', borderRadius:'16px', marginBottom:'1.5rem'}}>
                <div style={{display:'flex', justifyContent:'space-between', alignItems:'start'}}>
                  <div>
                    <div style={{fontSize:'0.85rem', color:'#5b21b6', fontWeight:700, textTransform:'uppercase'}}>Cod selectat</div>
                    <h2 style={{color:'#1e293b', margin:'0.25rem 0', fontFamily:'monospace'}}>{selected.code}</h2>
                    <div style={{color:'#475569'}}>{selected.name}</div>
                  </div>
                  <button onClick={() => toggleCodeStatus(selected.id, selected.is_active)} style={{
                    padding:'0.5rem 1rem',
                    background: selected.is_active ? '#ef4444' : '#10b981',
                    color:'white',
                    border:'none',
                    borderRadius:'8px',
                    fontWeight:700,
                    cursor:'pointer'
                  }}>{selected.is_active ? 'Dezactivează' : 'Activează'}</button>
                </div>
                
                <div style={{display:'grid', gridTemplateColumns:'repeat(4, 1fr)', gap:'1rem', marginTop:'1.5rem'}}>
                  <div style={{background:'white', padding:'0.75rem', borderRadius:'10px', textAlign:'center'}}>
                    <div style={{fontSize:'1.5rem', fontWeight:900, color:'#5b21b6'}}>{selected.current_uses}</div>
                    <div style={{fontSize:'0.75rem', color:'#64748b'}}>Utilizate</div>
                  </div>
                  <div style={{background:'white', padding:'0.75rem', borderRadius:'10px', textAlign:'center'}}>
                    <div style={{fontSize:'1.5rem', fontWeight:900, color:'#10b981'}}>{selected.max_uses - selected.current_uses}</div>
                    <div style={{fontSize:'0.75rem', color:'#64748b'}}>Rămase</div>
                  </div>
                  <div style={{background:'white', padding:'0.75rem', borderRadius:'10px', textAlign:'center'}}>
                    <div style={{fontSize:'1.5rem', fontWeight:900, color:'#f59e0b'}}>{selected.premium_days}</div>
                    <div style={{fontSize:'0.75rem', color:'#64748b'}}>Zile premium</div>
                  </div>
                  <div style={{background:'white', padding:'0.75rem', borderRadius:'10px', textAlign:'center'}}>
                    <div style={{fontSize:'0.9rem', fontWeight:700, color:'#dc2626'}}>{selected.expires_at ? new Date(selected.expires_at).toLocaleDateString('ro-RO') : 'Fără'}</div>
                    <div style={{fontSize:'0.75rem', color:'#64748b'}}>Expiră</div>
                  </div>
                </div>
                
                {/* Bara progres */}
                <div style={{marginTop:'1rem'}}>
                  <div style={{background:'white', height:'12px', borderRadius:'6px', overflow:'hidden'}}>
                    <div style={{background:'linear-gradient(90deg, #10b981, #8b5cf6)', height:'100%', width: (selected.current_uses / selected.max_uses * 100) + '%'}}></div>
                  </div>
                  <div style={{fontSize:'0.75rem', color:'#64748b', marginTop:'0.25rem', textAlign:'center'}}>
                    {Math.round(selected.current_uses / selected.max_uses * 100)}% utilizat
                  </div>
                </div>
              </div>

              <h3 style={{color:'#1e293b', marginBottom:'0.75rem'}}>👥 Utilizatori care au folosit codul ({users.length})</h3>
              {users.length === 0 ? (
                <div style={{padding:'2rem', textAlign:'center', background:'white', borderRadius:'12px', color:'#64748b'}}>
                  Nimeni nu a folosit încă acest cod
                </div>
              ) : (
                <div style={{background:'white', borderRadius:'12px', overflow:'hidden', boxShadow:'0 4px 12px rgba(0,0,0,0.05)'}}>
                  {users.map((u, i) => (
                    <div key={u.id} style={{
                      display:'grid',
                      gridTemplateColumns:'50px 1fr 1fr auto',
                      gap:'1rem',
                      padding:'1rem 1.25rem',
                      background: i % 2 === 0 ? '#f8fafc' : 'white',
                      borderBottom:'1px solid #e2e8f0',
                      alignItems:'center'
                    }}>
                      <div style={{fontWeight:800, color:'#5b21b6', textAlign:'center'}}>#{i+1}</div>
                      <div style={{fontWeight:700, color:'#1e293b'}}>{u.username || 'Anonim'}</div>
                      <div style={{fontSize:'0.85rem', color:'#64748b'}}>{u.email || '-'}</div>
                      <div style={{fontSize:'0.85rem', color:'#475569'}}>{new Date(u.used_at).toLocaleString('ro-RO')}</div>
                    </div>
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
