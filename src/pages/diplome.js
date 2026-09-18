import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { supabase } from '../lib/supabase';

const THEME_COLORS = {
  chapter:    { grad: ['#0ea5e9', '#0369a1'], light: ['#e0f2fe', '#bae6fd'], text: '#0c4a6e', accent: '#0284c7' },
  cumulative: { grad: ['#f59e0b', '#b45309'], light: ['#fef3c7', '#fde68a'], text: '#78350f', accent: '#d97706' },
  progress:   { grad: ['#10b981', '#047857'], light: ['#d1fae5', '#a7f3d0'], text: '#064e3b', accent: '#059669' },
  special:    { grad: ['#8b5cf6', '#6d28d9'], light: ['#ede9fe', '#ddd6fe'], text: '#4c1d95', accent: '#7c3aed' },
  bac:        { grad: ['#dc2626', '#991b1b'], light: ['#fee2e2', '#fecaca'], text: '#7f1d1d', accent: '#b91c1c' },
};

const ALL_DIPLOMAS = [
  { code: 'romania_master', name: 'Cunoscatorul Romaniei', emoji: '🇷🇴', desc: 'Termini Quiz Romania cu peste 80%', type: 'chapter' },
  { code: 'europe_explorer', name: 'Exploratorul Europei', emoji: '🇪🇺', desc: 'Termini capitolul Europa cu peste 80%', type: 'chapter' },
  { code: 'asia_master', name: 'Maestru al Asiei', emoji: '🏯', desc: 'Termini capitolul Asia cu peste 80%', type: 'chapter' },
  { code: 'africa_conqueror', name: 'Cuceritorul Africii', emoji: '🦁', desc: 'Termini capitolul Africa cu peste 80%', type: 'chapter' },
  { code: 'north_america_pioneer', name: 'Pionier al Americii de Nord', emoji: '🗽', desc: 'Termini capitolul America de Nord cu peste 80%', type: 'chapter' },
  { code: 'south_america_adventurer', name: 'Aventurier in America de Sud', emoji: '🌴', desc: 'Termini capitolul America de Sud cu peste 80%', type: 'chapter' },
  { code: 'oceania_navigator', name: 'Navigator in Oceania', emoji: '🏝️', desc: 'Termini capitolul Oceania cu peste 80%', type: 'chapter' },
  { code: 'antarctica_explorer', name: 'Explorator al Antarcticii', emoji: '🐧', desc: 'Termini capitolul Antarctica cu peste 80%', type: 'chapter' },
  { code: 'flag_hunter', name: 'Vanator de Steaguri', emoji: '🚩', desc: 'Termini capitolul Steaguri cu peste 80%', type: 'chapter' },
  { code: 'bac_master', name: 'Maestru BAC', emoji: '🎓', desc: 'Termini capitolul Bacalaureat cu peste 80%', type: 'chapter' },
  { code: 'beginner', name: 'Incepator', emoji: '🌱', desc: 'Acumuleaza 100 puncte totale', type:'cumulative' },
  { code: 'enthusiast', name: 'Pasionat', emoji: '⭐', desc: 'Acumuleaza 1000 puncte totale', type: 'cumulative' },
  { code: 'expert', name: 'Expert Geograf', emoji: '🧭', desc: 'Acumuleaza 5000 puncte totale', type: 'cumulative' },
  { code: 'supreme_master', name: 'Maestru Suprem', emoji: '👑', desc: 'Acumuleaza 10000 puncte totale', type: 'cumulative' },
  { code: 'legendary_geographer', name: 'Legenda Geografiei', emoji: '🏆', desc: 'Acumuleaza 25000 puncte totale', type: 'cumulative' },
  { code: 'eternal_geographer', name: 'Geograf Etern', emoji: '💎', desc: 'Acumuleaza 50000 puncte totale', type: 'cumulative' },
  { code: 'world_master', name: 'Maestru al Lumii', emoji: '🌍', desc: 'Termini Geografie Generala cu peste 80%', type: 'chapter' },
  { code: 'first_steps', name: 'Primii Pasi', emoji: '👣', desc: 'Joaca primele 10 jocuri', type:'progress' },
  { code: 'dedicated_player', name: 'Jucator Dedicat', emoji: '🎯', desc: 'Joaca 50 jocuri', type: 'progress' },
  { code: 'marathon_geographer', name: 'Maraton Geografic', emoji: '🏃', desc: 'Joaca 100 jocuri', type: 'progress' },
  { code: 'veteran_terraquiz', name: 'Veteran TerraQuiz', emoji: '🎖️', desc: 'Joaca 500 jocuri', type: 'progress' },
  { code: 'living_legend', name: 'Legenda Vie', emoji: '🔥', desc: 'Joaca 1000 jocuri', type: 'progress' },
  { code: 'premium_subscriber', name: 'Abonat Premium', emoji: '💫', desc: 'Ai abonament Premium activ', type: 'special' },
  { code: 'multiplayer_hero', name: 'Erou Multiplayer', emoji: '⚔️', desc: 'Termini top 3 in jocul multiplayer', type: 'special' },
  { code: 'whole_world', name: 'Lume Intreaga', emoji: '🌐', desc: 'Castiga diplome la toate cele10 capitole', type: 'special' },
  { code: 'bac_extreme_master', name: 'Maestru BAC Extreme', emoji: '📜', desc: 'Termini 25 variante BAC cu peste 80%', type: 'bac' },
];

export default function Diplome() {
  const router = useRouter();
  const [earned, setEarned] = useState([]);
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => { load(); }, []);

  async function load() {
    const { data: { session } } = await supabase.auth.getSession();
    if (!session) { router.push('/login'); return; }
    
    const { data: prof } = await supabase.from('profiles').select('*').eq('id', session.user.id).single();
    setProfile(prof);
    
    const { data: diplomas } = await supabase
      .from('diplomas')
      .select('*')
      .eq('user_id', session.user.id);
    setEarned(diplomas || []);
    setLoading(false);
  }

  function isEarned(code) {
    return earned.find(e => e.diploma_code === code);
  }

  async function downloadPDF(diploma) {
    // Load jsPDF dynamically
    if (!window.jspdf) {
      await new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js';
        script.onload = resolve;
        script.onerror = reject;
        document.head.appendChild(script);
      });
    }
    
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF({ orientation: 'landscape', unit: 'mm', format: 'a4' });

    const THEME_HEX = {
      chapter:    { main: [14, 165, 233], dark: [3, 105, 161], bg: [224, 242, 254], text: [12, 74, 110] },
      cumulative: { main: [245, 158, 11], dark: [180, 83, 9],  bg: [254, 243, 199], text: [120, 53, 15] },
      progress:   { main: [16, 185, 129], dark: [4, 120, 87],  bg: [209, 250, 229], text: [6, 78, 59] },
      special:    { main: [139, 92, 246], dark: [109, 40, 217],bg: [237, 233, 254], text: [76, 29, 149] },
      bac:        { main: [220, 38, 38], dark: [153, 27, 27],  bg: [254, 226, 226], text: [127, 29, 29] },
    };
    const th = THEME_HEX[diploma.diploma_type] || THEME_HEX.chapter;

    // Fundal tematic
    doc.setFillColor(...th.bg);
    doc.rect(0, 0, 297, 210, 'F');

    // Chenar dublu decorativ
    doc.setDrawColor(...th.dark);
    doc.setLineWidth(3);
    doc.rect(10, 10, 277, 190);
    doc.setLineWidth(0.8);
    doc.rect(15, 15, 267, 180);

    // Glob decorativ discret (meridiane/paralele) - centru, in spatele textului
    doc.setDrawColor(...th.main);
    doc.setLineWidth(0.4);
    const gx = 148.5, gy = 108, gr = 55;
    doc.circle(gx, gy, gr);
    doc.ellipse(gx, gy, gr * 0.42, gr);
    doc.ellipse(gx, gy, gr * 0.8, gr);
    doc.line(gx - gr, gy, gx + gr, gy);
    doc.line(gx - gr, gy - gr * 0.35, gx + gr, gy - gr * 0.35);
    doc.line(gx - gr, gy + gr * 0.35, gx + gr, gy + gr * 0.35);

    // Busola decorativa, colt stanga-jos
    const cx = 32, cy = 178, cr = 12;
    doc.setDrawColor(...th.dark);
    doc.setLineWidth(0.6);
    doc.circle(cx, cy, cr);
    doc.circle(cx, cy, cr - 2.5);
    doc.setFillColor(...th.dark);
    doc.triangle(cx, cy - cr + 3, cx - 2.2, cy, cx + 2.2, cy, 'F');
    doc.setFillColor(255, 255, 255);
    doc.triangle(cx, cy + cr - 3, cx - 2.2, cy, cx + 2.2, cy, 'F');
    doc.setFontSize(6);
    doc.setTextColor(...th.dark);
    doc.setFont('helvetica', 'bold');
    doc.text('N', cx, cy - cr - 1.5, { align: 'center' });

    // Busola oglindita, colt dreapta-jos
    const cx2 = 265;
    doc.setDrawColor(...th.dark);
    doc.circle(cx2, cy, cr);
    doc.circle(cx2, cy, cr - 2.5);
    doc.setFillColor(...th.dark);
    doc.triangle(cx2, cy - cr + 3, cx2 - 2.2, cy, cx2 + 2.2, cy, 'F');
    doc.setFillColor(255, 255, 255);
    doc.triangle(cx2, cy + cr - 3, cx2 - 2.2, cy, cx2 + 2.2, cy, 'F');
    doc.text('N', cx2, cy - cr - 1.5, { align: 'center' });

    // TerraQuiz logo / title (top)
    doc.setFontSize(14);
    doc.setTextColor(...th.text);
    doc.setFont('helvetica', 'bold');
    doc.text('🌍 TERRAQUIZ', 148.5, 30, { align: 'center' });
    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    doc.text('Aplicatie educationala de geografie', 148.5, 36, { align: 'center' });
    
    // Decorative line
    doc.setDrawColor(...th.main);
    doc.setLineWidth(0.5);
    doc.line(80, 42, 217, 42);
    
    // Main title
    doc.setFontSize(36);
    doc.setTextColor(...th.text);
    doc.setFont('helvetica', 'bold');
    doc.text('DIPLOMA', 148.5, 65, { align: 'center' });
    
    // Subtitle
    doc.setFontSize(14);
    doc.setTextColor(...th.dark);
    doc.setFont('helvetica', 'normal');
    doc.text('Se acorda cu deosebita consideratie lui', 148.5, 80, { align: 'center' });
    
    // Name (large)
    doc.setFontSize(28);
    doc.setTextColor(...th.text);
    doc.setFont('helvetica', 'bold');
    const userName = profile?.username || 'Utilizator';
    doc.text(userName, 148.5, 100, { align: 'center' });
    
    // Underline name
    const nameWidth = doc.getTextWidth(userName);
    doc.setDrawColor(...th.main);
    doc.setLineWidth(0.5);
    doc.line(148.5 - nameWidth/2 - 5, 103, 148.5 + nameWidth/2 + 5, 103);
    
    // For
    doc.setFontSize(14);
    doc.setTextColor(...th.dark);
    doc.setFont('helvetica', 'normal');
    doc.text('pentru obtinerea titlului de', 148.5, 115, { align: 'center' });
    
    // Diploma name (large)
    doc.setFontSize(24);
    doc.setTextColor(...th.dark);
    doc.setFont('helvetica', 'bolditalic');
    doc.text('"' + diploma.diploma_name + '"', 148.5, 130, { align: 'center' });
    
    // Score
    if (diploma.earned_score) {
      doc.setFontSize(12);
      doc.setTextColor(...th.text);
      doc.setFont('helvetica', 'normal');
      let scoreText = '';
      if (diploma.diploma_type === 'chapter') {
        scoreText = 'cu o acuratete de ' + diploma.earned_score + '%';
      } else if (diploma.diploma_type === 'cumulative') {
        scoreText = 'cu un total de ' + diploma.earned_score + ' puncte';
      } else if (diploma.diploma_type === 'progress') {
        scoreText = 'pentru dedicare si perseverenta';
      } else if (diploma.diploma_type === 'special') {
        scoreText = 'pentru realizare deosebita';
      } else if (diploma.diploma_type === 'bac') {
        scoreText = 'pentru maiestrie la variantele BAC';
      } else {
        scoreText = 'pentru rezultate excelente';
      }
      doc.text(scoreText, 148.5, 145, { align: 'center' });
    }

    // Linie ondulata decorativa (coasta) deasupra datei
    doc.setDrawColor(...th.main);
    doc.setLineWidth(0.6);
    doc.lines(
      [[8, -2], [8, 2], [8, -2], [8, 2], [8, -2], [8, 2]],
      148.5 - 24, 155, [1, 1], 'S'
    );

    // Date
    const date = new Date(diploma.earned_at).toLocaleDateString('ro-RO', { year: 'numeric', month: 'long', day: 'numeric' });
    doc.setFontSize(11);
    doc.setTextColor(...th.text);
    doc.text('Eliberata la data de ' + date, 148.5, 165, { align: 'center' });
    
    // Footer
    doc.setFontSize(10);
    doc.setTextColor(...th.dark);
    doc.text('🌐 terraquiz.ro', 148.5, 185, { align: 'center' });
    
    // Save
    doc.save('Diploma_' + diploma.diploma_name.replace(/ /g, '_') + '.pdf');
  }

  if (loading) return <div className="loading container">Se incarca...</div>;

  return (
    <div className="container" style={{padding:'2rem 1.5rem', maxWidth:'1100px'}}>
      <div style={{
        background:'linear-gradient(135deg, #fef3c7, #fcd34d)',
        padding:'2rem',
        borderRadius:'16px',
        marginBottom:'2rem',
        border:'2px solid #d97706',
        textAlign:'center'
      }}>
        <div style={{fontSize:'3rem'}}>🏆</div>
        <h1 style={{color:'#78350f', margin:'0.5rem 0'}}>Diplomele mele</h1>
        <p style={{color:'#92400e'}}>
          Ai obtinut <strong>{earned.length}</strong> din <strong>{ALL_DIPLOMAS.length}</strong> diplome
        </p>
        {profile && (
          <p style={{color:'#92400e', marginTop:'0.5rem'}}>
            Punctaj total: <strong>{profile.total_score || 0}</strong> puncte
          </p>
        )}
      </div>

      <h2 style={{color:'var(--primary-dark)', marginBottom:'1rem'}}>Diplome pentru capitole</h2>
      <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(280px, 1fr))', gap:'1rem', marginBottom:'2.5rem'}}>
        {ALL_DIPLOMAS.filter(d => d.type === 'chapter').map(d => {
          const e = isEarned(d.code);
          return (
            <DiplomaCard key={d.code} diploma={d} earned={e} onDownload={() => e && downloadPDF(e)} />
          );
        })}
      </div>

      <h2 style={{color:'var(--primary-dark)', marginBottom:'1rem'}}>Diplome cumulative (puncte)</h2>
      <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(280px, 1fr))', gap:'1rem', marginBottom:'2.5rem'}}>
        {ALL_DIPLOMAS.filter(d => d.type === 'cumulative').map(d => {
          const e = isEarned(d.code);
          return (
            <DiplomaCard key={d.code} diploma={d} earned={e} onDownload={() => e && downloadPDF(e)} />
          );
        })}
      </div>

      <h2 style={{color:'var(--primary-dark)', marginBottom:'1rem'}}>📈 Diplome de progres (jocuri jucate)</h2>
      <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(280px, 1fr))', gap:'1rem', marginBottom:'2.5rem'}}>
        {ALL_DIPLOMAS.filter(d => d.type === 'progress').map(d => {
          const e = isEarned(d.code);
          return (
            <DiplomaCard key={d.code} diploma={d} earned={e} onDownload={() => e && downloadPDF(e)} />
          );
        })}
      </div>

      <h2 style={{color:'var(--primary-dark)', marginBottom:'1rem'}}>✨ Diplome speciale</h2>
      <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(280px, 1fr))', gap:'1rem', marginBottom:'2.5rem'}}>
        {ALL_DIPLOMAS.filter(d => d.type === 'special').map(d => {
          const e = isEarned(d.code);
          return (
            <DiplomaCard key={d.code} diploma={d} earned={e} onDownload={() => e && downloadPDF(e)} />
          );
        })}
      </div>

      <h2 style={{color:'var(--primary-dark)', marginBottom:'1rem'}}>🎓 Diplome BAC</h2>
      <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(280px, 1fr))', gap:'1rem'}}>
        {ALL_DIPLOMAS.filter(d => d.type === 'bac').map(d => {
          const e = isEarned(d.code);
          return (
            <DiplomaCard key={d.code} diploma={d} earned={e} onDownload={() => e && downloadPDF(e)} />
          );
        })}
      </div>
    </div>
  );
}

function DiplomaCard({ diploma, earned, onDownload }) {
  const isUnlocked = !!earned;
  const theme = THEME_COLORS[diploma.type] || THEME_COLORS.chapter;

  return (
    <div style={{
      position:'relative',
      overflow:'hidden',
      background: isUnlocked ? `linear-gradient(135deg, ${theme.light[0]}, ${theme.light[1]})` : '#f1f5f9',
      padding:'1.5rem',
      borderRadius:'16px',
      border: isUnlocked ? `2px solid ${theme.accent}` : '2px solid #cbd5e1',
      opacity: isUnlocked ? 1 : 0.65,
      transition:'transform 0.2s, box-shadow 0.2s',
      boxShadow: isUnlocked ? '0 4px 14px rgba(0,0,0,0.08)' : 'none'
    }}>
      {/* Decor: linii de meridiane discrete pe fundal */}
      {isUnlocked && (
        <svg width="100%" height="100%" style={{position:'absolute', top:0, left:0, opacity:0.08, pointerEvents:'none'}} viewBox="0 0 200 200">
          <ellipse cx="100" cy="100" rx="90" ry="40" stroke={theme.accent} strokeWidth="1.5" fill="none" />
          <ellipse cx="100" cy="100" rx="90" ry="70" stroke={theme.accent} strokeWidth="1.5" fill="none" />
          <line x1="10" y1="100" x2="190" y2="100" stroke={theme.accent} strokeWidth="1.5" />
        </svg>
      )}

      <div style={{
        position:'relative',
        fontSize:'2.2rem',
        marginBottom:'0.75rem',
        textAlign:'center',
        background: isUnlocked ? `linear-gradient(135deg, ${theme.grad[0]}, ${theme.grad[1]})` : '#cbd5e1',
        width:'68px', height:'68px',
        borderRadius:'50%',
        display:'flex', alignItems:'center', justifyContent:'center',
        margin:'0 auto 1rem',
        boxShadow: isUnlocked ? `0 4px 10px ${theme.grad[1]}66` : 'none',
        border: isUnlocked ? '3px solid white' : 'none'
      }}>
        {isUnlocked ? diploma.emoji : '🔒'}
      </div>
      <h3 style={{position:'relative', color: isUnlocked ? theme.text : '#475569', textAlign:'center', marginBottom:'0.5rem'}}>
        {diploma.name}
      </h3>
      <p style={{position:'relative', color: isUnlocked ? theme.text : '#64748b', opacity:0.85, fontSize:'0.9rem', textAlign:'center', marginBottom:'1rem'}}>
        {diploma.desc}
      </p>
      {isUnlocked ? (
        <>
          <p style={{position:'relative', fontSize:'0.85rem', color: theme.text, opacity:0.85, textAlign:'center', marginBottom:'0.75rem'}}>
            🗓️ Obtinuta la {new Date(earned.earned_at).toLocaleDateString('ro-RO')}
          </p>
          <button onClick={onDownload} style={{
            position:'relative', width:'100%',
            background: `linear-gradient(135deg, ${theme.grad[0]}, ${theme.grad[1]})`,
            color:'white', padding:'0.65rem', borderRadius:'10px', fontWeight:700,
            border:'none', cursor:'pointer', fontSize:'0.9rem'
          }}>📜 Descarca PDF</button>
        </>
      ) : (
        <div style={{position:'relative', textAlign:'center', color:'#64748b', fontSize:'0.85rem', fontStyle:'italic'}}>
          Inca neobtinuta
        </div>
      )}
    </div>
  );
}
