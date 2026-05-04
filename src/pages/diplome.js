import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { supabase } from '../lib/supabase';

const ALL_DIPLOMAS = [
  // Per chapter
  { code: 'romania_master', name: 'Cunoscatorul Romaniei', emoji: 'RO', desc: 'Termini Quiz Romania cu peste 80%', type: 'chapter' },
  { code: 'europe_explorer', name: 'Exploratorul Europei', emoji: 'EU', desc: 'Termini capitolul Europa cu peste 80%', type: 'chapter' },
  { code: 'asia_master', name: 'Maestru al Asiei', emoji: 'AS', desc: 'Termini capitolul Asia cu peste 80%', type: 'chapter' },
  { code: 'africa_conqueror', name: 'Cuceritorul Africii', emoji: 'AF', desc: 'Termini capitolul Africa cu peste 80%', type: 'chapter' },
  { code: 'north_america_pioneer', name: 'Pionier al Americii de Nord', emoji: 'NA', desc: 'Termini capitolul America de Nord cu peste 80%', type: 'chapter' },
  { code: 'south_america_adventurer', name: 'Aventurier in America de Sud', emoji: 'SA', desc: 'Termini capitolul America de Sud cu peste 80%', type: 'chapter' },
  { code: 'oceania_navigator', name: 'Navigator in Oceania', emoji: 'OC', desc: 'Termini capitolul Oceania cu peste 80%', type: 'chapter' },
  { code: 'antarctica_explorer', name: 'Explorator al Antarcticii', emoji: 'AN', desc: 'Termini capitolul Antarctica cu peste 80%', type: 'chapter' },
  { code: 'flag_hunter', name: 'Vanator de Steaguri', emoji: 'FL', desc: 'Termini capitolul Steaguri cu peste 80%', type: 'chapter' },
  { code: 'bac_master', name: 'Maestru BAC', emoji: 'BAC', desc: 'Termini capitolul Bacalaureat cu peste 80%', type: 'chapter' },
  // Cumulative
  { code: 'beginner', name: 'Incepator', emoji: 'IN', desc: 'Acumuleaza 100 puncte totale', type: 'cumulative' },
  { code: 'enthusiast', name: 'Pasionat', emoji: 'PS', desc: 'Acumuleaza 1000 puncte totale', type: 'cumulative' },
  { code: 'expert', name: 'Expert Geograf', emoji: 'EX', desc: 'Acumuleaza 5000 puncte totale', type: 'cumulative' },
  { code: 'supreme_master', name: 'Maestru Suprem', emoji: 'MS', desc: 'Acumuleaza 10000 puncte totale', type: 'cumulative' },
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
    
    // Background gradient (simulated with rectangles)
    doc.setFillColor(254, 243, 199);
    doc.rect(0, 0, 297, 210, 'F');
    
    // Border decorative
    doc.setDrawColor(217, 119, 6);
    doc.setLineWidth(3);
    doc.rect(10, 10, 277, 190);
    doc.setLineWidth(1);
    doc.rect(15, 15, 267, 180);
    
    // TerraQuiz logo / title (top)
    doc.setFontSize(14);
    doc.setTextColor(120, 53, 15);
    doc.setFont('helvetica', 'bold');
    doc.text('TERRAQUIZ', 148.5, 30, { align: 'center' });
    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    doc.text('Aplicatie educationala de geografie', 148.5, 36, { align: 'center' });
    
    // Decorative line
    doc.setDrawColor(217, 119, 6);
    doc.setLineWidth(0.5);
    doc.line(80, 42, 217, 42);
    
    // Main title
    doc.setFontSize(36);
    doc.setTextColor(120, 53, 15);
    doc.setFont('helvetica', 'bold');
    doc.text('DIPLOMA', 148.5, 65, { align: 'center' });
    
    // Subtitle
    doc.setFontSize(14);
    doc.setTextColor(146, 64, 14);
    doc.setFont('helvetica', 'normal');
    doc.text('Se acorda cu deosebita consideratie lui', 148.5, 80, { align: 'center' });
    
    // Name (large)
    doc.setFontSize(28);
    doc.setTextColor(120, 53, 15);
    doc.setFont('helvetica', 'bold');
    const userName = profile?.username || 'Utilizator';
    doc.text(userName, 148.5, 100, { align: 'center' });
    
    // Underline name
    const nameWidth = doc.getTextWidth(userName);
    doc.setLineWidth(0.5);
    doc.line(148.5 - nameWidth/2 - 5, 103, 148.5 + nameWidth/2 + 5, 103);
    
    // For
    doc.setFontSize(14);
    doc.setFont('helvetica', 'normal');
    doc.text('pentru obtinerea titlului de', 148.5, 115, { align: 'center' });
    
    // Diploma name (large)
    doc.setFontSize(24);
    doc.setTextColor(180, 83, 9);
    doc.setFont('helvetica', 'bolditalic');
    doc.text('"' + diploma.diploma_name + '"', 148.5, 130, { align: 'center' });
    
    // Score
    if (diploma.earned_score) {
      doc.setFontSize(12);
      doc.setTextColor(146, 64, 14);
      doc.setFont('helvetica', 'normal');
      const scoreText = diploma.diploma_type === 'cumulative' 
        ? 'cu un total de ' + diploma.earned_score + ' puncte'
        : 'cu o acuratete de ' + diploma.earned_score + '%';
      doc.text(scoreText, 148.5, 145, { align: 'center' });
    }
    
    // Date
    const date = new Date(diploma.earned_at).toLocaleDateString('ro-RO', { year: 'numeric', month: 'long', day: 'numeric' });
    doc.setFontSize(11);
    doc.setTextColor(120, 53, 15);
    doc.text('Eliberata la data de ' + date, 148.5, 165, { align: 'center' });
    
    // Footer
    doc.setFontSize(10);
    doc.setTextColor(146, 64, 14);
    doc.text('terraquiz.ro', 148.5, 185, { align: 'center' });
    
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
      <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(280px, 1fr))', gap:'1rem'}}>
        {ALL_DIPLOMAS.filter(d => d.type === 'cumulative').map(d => {
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
  return (
    <div style={{
      background: isUnlocked ? 'linear-gradient(135deg, #fef3c7, #fde68a)' : '#f1f5f9',
      padding:'1.5rem',
      borderRadius:'12px',
      border: isUnlocked ? '2px solid #d97706' : '2px solid #cbd5e1',
      opacity: isUnlocked ? 1 : 0.7,
      transition:'all 0.2s'
    }}>
      <div style={{
        fontSize:'2rem',
        fontWeight:700,
        marginBottom:'0.5rem',
        color: isUnlocked ? '#78350f' : '#64748b',
        textAlign:'center',
        background: isUnlocked ? '#fbbf24' : '#cbd5e1',
        width:'60px',height:'60px',
        borderRadius:'50%',
        display:'flex',alignItems:'center',justifyContent:'center',
        margin:'0 auto 1rem'
      }}>
        {diploma.emoji}
      </div>
      <h3 style={{color: isUnlocked ? '#78350f' : '#475569', textAlign:'center', marginBottom:'0.5rem'}}>
        {diploma.name}
      </h3>
      <p style={{color: isUnlocked ? '#92400e' : '#64748b', fontSize:'0.9rem', textAlign:'center', marginBottom:'1rem'}}>
        {diploma.desc}
      </p>
      {isUnlocked ? (
        <>
          <p style={{fontSize:'0.85rem', color:'#92400e', textAlign:'center', marginBottom:'0.75rem'}}>
            Obtinuta la {new Date(earned.earned_at).toLocaleDateString('ro-RO')}
          </p>
          <button onClick={onDownload} style={{
            width:'100%', background:'#d97706', color:'white',
            padding:'0.6rem', borderRadius:'8px', fontWeight:600,
            border:'none', cursor:'pointer'
          }}>Descarca PDF</button>
        </>
      ) : (
        <div style={{textAlign:'center', color:'#64748b', fontSize:'0.85rem', fontStyle:'italic'}}>
          Inca neobtinuta
        </div>
      )}
    </div>
  );
}
