import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { supabase } from '../../lib/supabase';

const CLASS_NAMES = {
  5: { name: 'Clasa a V-a', emoji: '🌍', subtitle: 'Terra. Elemente de geografie fizică' },
  6: { name: 'Clasa a VI-a', emoji: '🇪🇺', subtitle: 'Geografie umană. Europa' },
  7: { name: 'Clasa a VII-a', emoji: '🌎', subtitle: 'Continentele extraeuropene' },
  8: { name: 'Clasa a VIII-a', emoji: '🇷🇴', subtitle: 'Geografia României' },
  9: { name: 'Clasa a IX-a', emoji: '🏔️', subtitle: 'Geografie fizică generală' },
  10: { name: 'Clasa a X-a', emoji: '👥', subtitle: 'Geografie umană' },
  11: { name: 'Clasa a XI-a', emoji: '🌐', subtitle: 'Probleme contemporane' },
  12: { name: 'Clasa a XII-a', emoji: '🎓', subtitle: 'BAC - Europa, România, UE' },
};

export default function ClassDetail() {
  const router = useRouter();
  const { classLevel } = router.query;
  const [chapters, setChapters] = useState([]);
  const [isPremium, setIsPremium] = useState(false);
  const [loading, setLoading] = useState(true);
  const [needLogin, setNeedLogin] = useState(false);

  useEffect(() => { if (classLevel) load(); }, [classLevel]);

  async function load() {
    setLoading(true);
    const { data: { session } } = await supabase.auth.getSession();
    if (!session) { setNeedLogin(true); setLoading(false); return; }
    try {
      const res = await fetch('/api/subscription-status?userId=' + session.user.id);
      const data = await res.json();
      setIsPremium(data.isPremium === true);
    } catch (e) {}
    const { data: chs } = await supabase
      .from('school_chapters')
      .select('*')
      .eq('class_level', parseInt(classLevel))
      .order('order_idx');
    setChapters(chs || []);
    setLoading(false);
  }

  const classInfo = CLASS_NAMES[parseInt(classLevel)] || { name: 'Clasa ' + classLevel, emoji: '📚', subtitle: '' };

  if (loading) return <div style={{padding:'4rem',textAlign:'center'}}>Se încarcă...</div>;

  if (needLogin) {
    return (
      <div style={{minHeight:'80vh',display:'flex',alignItems:'center',justifyContent:'center',padding:'2rem',background:'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'}}>
        <div style={{background:'white',padding:'2.5rem',borderRadius:'20px',maxWidth:'480px',textAlign:'center'}}>
          <div style={{fontSize:'4rem'}}>🔐</div>
          <h2 style={{color:'#1e293b',marginTop:'1rem'}}>Autentifică-te</h2>
          <p style={{color:'#64748b',marginTop:'1rem'}}>Trebuie să fii conectat pentru a accesa secțiunea școală.</p>
          <Link href="/login" style={{display:'inline-block',background:'linear-gradient(135deg, #8b5cf6, #6d28d9)',color:'white',padding:'0.85rem 2rem',borderRadius:'10px',textDecoration:'none',fontWeight:700,marginTop:'1rem'}}>Conectare</Link>
        </div>
      </div>
    );
  }

  if (!isPremium) {
    return (
      <div style={{minHeight:'80vh',padding:'2rem 1rem',background:'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'}}>
        <div style={{maxWidth:'600px',margin:'0 auto',background:'white',borderRadius:'20px',padding:'2.5rem',textAlign:'center',boxShadow:'0 10px 40px rgba(0,0,0,0.2)'}}>
          <div style={{fontSize:'5rem'}}>{classInfo.emoji}</div>
          <h1 style={{color:'#1e293b',fontSize:'1.8rem',marginTop:'1rem'}}>{classInfo.name}</h1>
          <p style={{color:'#5b21b6',fontWeight:700,fontSize:'1.1rem'}}>{classInfo.subtitle}</p>
          <div style={{background:'#fef3c7',borderRadius:'12px',padding:'1.25rem',marginTop:'1.5rem',color:'#78350f'}}>
            <p style={{margin:0,fontSize:'1rem',lineHeight:1.6}}>
              📚 {chapters.length > 0 ? chapters.length + ' capitole disponibile' : 'Capitolele sunt în pregătire'}<br/>
              🎯 15 întrebări per capitol<br/>
              ✨ Conform programei OM 3393/28.02.2017
            </p>
          </div>
          <div style={{background:'linear-gradient(135deg, #8b5cf6, #6d28d9)',color:'white',borderRadius:'16px',padding:'1.75rem',marginTop:'1.5rem'}}>
            <div style={{fontSize:'3rem'}}>👑</div>
            <h2 style={{margin:'0.5rem 0',fontSize:'1.5rem'}}>Conținut Premium</h2>
            <p style={{fontSize:'0.95rem',opacity:0.95,marginBottom:'1.5rem',lineHeight:1.6}}>Toate cele 8 clase + variante BAC<br/>Jocuri NELIMITATE</p>
            <Link href="/premium" style={{display:'inline-block',background:'white',color:'#6d28d9',padding:'0.95rem 2rem',borderRadius:'10px',fontWeight:800,textDecoration:'none',fontSize:'1.05rem'}}>👑 Vezi Premium - 9.90 RON/lună</Link>
          </div>
          <div style={{marginTop:'1.5rem'}}>
            <Link href="/scoala" style={{padding:'0.75rem 1.25rem',background:'#f1f5f9',color:'#475569',borderRadius:'10px',textDecoration:'none',fontWeight:600,display:'inline-block'}}>← Înapoi la clase</Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={{minHeight:'90vh',padding:'2rem 1rem',background:'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'}}>
      <div style={{maxWidth:'900px',margin:'0 auto'}}>
        <div style={{textAlign:'center',color:'white',marginBottom:'2rem'}}>
          <div style={{fontSize:'4rem'}}>{classInfo.emoji}</div>
          <h1 style={{fontSize:'2.2rem',marginTop:'0.5rem',fontWeight:900}}>{classInfo.name}</h1>
          <p style={{fontSize:'1.05rem',opacity:0.95}}>{classInfo.subtitle}</p>
          <div style={{display:'inline-block',background:'rgba(255,255,255,0.2)',color:'white',padding:'0.4rem 1rem',borderRadius:'20px',marginTop:'0.75rem',fontSize:'0.9rem'}}>
            👑 Premium activat · {chapters.length} {chapters.length === 1 ? 'capitol' : 'capitole'}
          </div>
        </div>
        {chapters.length === 0 ? (
          <div style={{background:'white',borderRadius:'16px',padding:'2.5rem',textAlign:'center'}}>
            <div style={{fontSize:'3rem'}}>⏳</div>
            <h3 style={{color:'#1e293b',marginTop:'1rem'}}>Capitolele sunt în pregătire</h3>
            <p style={{color:'#64748b',marginTop:'0.5rem'}}>Această clasă va fi disponibilă în curând!</p>
          </div>
        ) : (
          <div style={{display:'grid',gap:'1rem'}}>
            {chapters.map((ch, idx) => (
              <Link key={ch.id} href={'/scoala/quiz/' + ch.id} style={{textDecoration:'none'}}>
                <div style={{background:'white',borderRadius:'14px',padding:'1.25rem 1.5rem',boxShadow:'0 4px 16px rgba(0,0,0,0.1)',cursor:'pointer'}}>
                  <div style={{display:'flex',alignItems:'center',gap:'1rem'}}>
                    <div style={{fontSize:'2.5rem'}}>{ch.chapter_emoji}</div>
                    <div style={{flex:1}}>
                      <div style={{color:'#94a3b8',fontSize:'0.8rem',fontWeight:600}}>Capitolul {idx + 1}</div>
                      <h3 style={{color:'#1e293b',margin:'0.15rem 0',fontSize:'1.15rem'}}>{ch.chapter_name}</h3>
                      {ch.description && <p style={{color:'#64748b',fontSize:'0.85rem',margin:0,lineHeight:1.4}}>{ch.description}</p>}
                    </div>
                    <div style={{background:'linear-gradient(135deg, #8b5cf6, #6d28d9)',color:'white',padding:'0.5rem 1rem',borderRadius:'8px',fontWeight:700,fontSize:'0.9rem',whiteSpace:'nowrap'}}>{ch.question_count} întrebări →</div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
        <div style={{textAlign:'center',marginTop:'2rem'}}>
          <Link href="/scoala" style={{display:'inline-block',background:'white',color:'#5b21b6',padding:'0.85rem 1.75rem',borderRadius:'10px',textDecoration:'none',fontWeight:700}}>← Toate clasele</Link>
        </div>
      </div>
    </div>
  );
}
