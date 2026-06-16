import Link from 'next/link';

const CLASS_LEVELS = [
  { level: 5, name: 'Clasa a V-a', emoji: '🌍', subtitle: 'Geografie generală', topic: 'Terra ca planetă, mișcări, geosfere' },
  { level: 6, name: 'Clasa a VI-a', emoji: '🇪🇺', subtitle: 'Europa', topic: 'Continent, populație, Uniunea Europeană' },
  { level: 7, name: 'Clasa a VII-a', emoji: '🌎', subtitle: 'Continentele extraeuropene', topic: 'Asia, Africa, Americile, Oceania' },
  { level: 8, name: 'Clasa a VIII-a', emoji: '🇷🇴', subtitle: 'Geografia României', topic: 'Relief, climă, populație, economie' },
  { level: 9, name: 'Clasa a IX-a', emoji: '🏔️', subtitle: 'Geografie fizică', topic: 'Atmosferă, hidrosferă, litosferă, biosferă' },
  { level: 10, name: 'Clasa a X-a', emoji: '👥', subtitle: 'Geografie umană', topic: 'Populație, așezări, economie' },
  { level: 11, name: 'Clasa a XI-a', emoji: '🌐', subtitle: 'Probleme contemporane', topic: 'Mediul, geopolitică, dezvoltare' },
  { level: 12, name: 'Clasa a XII-a', emoji: '🎓', subtitle: 'BAC - Europa, România, UE', topic: 'Pregătire pentru bacalaureat' },
];

export default function ScoalaIndex() {
  return (
    <div style={{minHeight:'90vh', padding:'2rem 1rem', background:'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'}}>
      <div style={{maxWidth:'1200px', margin:'0 auto'}}>
        <div style={{textAlign:'center', color:'white', marginBottom:'2.5rem'}}>
          <div style={{fontSize:'4rem'}}>🎓</div>
          <h1 style={{fontSize:'2.4rem', marginTop:'0.5rem', fontWeight:900}}>Programa școlară</h1>
          <p style={{fontSize:'1.1rem', opacity:0.95, marginTop:'0.5rem'}}>Quiz-uri pe capitolele oficiale, clasele V-XII</p>
          <div style={{display:'inline-block', background:'linear-gradient(135deg, #fbbf24, #f59e0b)', color:'#78350f', padding:'0.5rem 1.25rem', borderRadius:'24px', marginTop:'1rem', fontWeight:800, fontSize:'0.95rem'}}>
            👑 Conținut Premium
          </div>
        </div>

        <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(280px, 1fr))', gap:'1.25rem'}}>
          {CLASS_LEVELS.map(c => (
            <Link key={c.level} href={`/scoala/${c.level}`} style={{textDecoration:'none'}}>
              <div style={{background:'white', borderRadius:'16px', padding:'1.75rem', boxShadow:'0 8px 32px rgba(0,0,0,0.15)', position:'relative', cursor:'pointer', transition:'transform 0.2s, box-shadow 0.2s'}}
                   onMouseEnter={e => e.currentTarget.style.transform='translateY(-4px)'}
                   onMouseLeave={e => e.currentTarget.style.transform='translateY(0)'}>
                <div style={{position:'absolute', top:'1rem', right:'1rem', background:'linear-gradient(135deg, #fbbf24, #f59e0b)', color:'#78350f', padding:'0.25rem 0.6rem', borderRadius:'12px', fontSize:'0.7rem', fontWeight:800}}>👑 PREMIUM</div>
                <div style={{fontSize:'3.5rem'}}>{c.emoji}</div>
                <h3 style={{color:'#1e293b', margin:'0.75rem 0 0.25rem', fontSize:'1.3rem'}}>{c.name}</h3>
                <div style={{color:'#5b21b6', fontWeight:700, fontSize:'1rem', marginBottom:'0.5rem'}}>{c.subtitle}</div>
                <p style={{color:'#64748b', fontSize:'0.85rem', lineHeight:1.5, margin:0}}>{c.topic}</p>
              </div>
            </Link>
          ))}
        </div>

        <div style={{marginTop:'2.5rem', textAlign:'center'}}>
          <Link href="/" style={{display:'inline-block', background:'white', color:'#5b21b6', padding:'0.85rem 1.75rem', borderRadius:'10px', textDecoration:'none', fontWeight:700, fontSize:'1rem'}}>← Înapoi acasă</Link>
        </div>
      </div>
    </div>
  );
}
