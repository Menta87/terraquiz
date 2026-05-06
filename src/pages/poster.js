import { useEffect } from 'react';
import Head from 'next/head';

export default function Poster() {
  useEffect(() => {
    // Auto-print on Cmd+P / Ctrl+P
    document.title = 'TerraQuiz - Poster A4';
  }, []);

  return (
    <>
      <Head>
        <style>{`
          @page {
            size: A4;
            margin: 0;
          }
          @media print {
            body { margin: 0; padding: 0; }
            .no-print { display: none !important; }
            .poster { 
              width: 210mm; 
              height: 297mm; 
              page-break-after: always;
            }
          }
          @media screen {
            body { background: #475569; }
          }
        `}</style>
      </Head>
      
      <div className="no-print" style={{
        position:'fixed', top:0, left:0, right:0,
        background:'#1e293b', color:'white',
        padding:'1rem', textAlign:'center',
        zIndex:1000,
      }}>
        <strong>📄 Pentru a printa / salva ca PDF: Apasă Cmd + P (Mac) sau Ctrl + P (Windows)</strong>
        <br />
        <small style={{opacity:0.8}}>Setări recomandate: A4, fără margini, color</small>
      </div>

      <div className="poster" style={{
        width:'210mm',
        height:'297mm',
        margin:'4rem auto 2rem',
        background:'linear-gradient(135deg, #1e3a8a 0%, #5b21b6 50%, #7c3aed 100%)',
        color:'white',
        padding:'15mm 12mm',
        boxSizing:'border-box',
        boxShadow:'0 20px 60px rgba(0,0,0,0.3)',
        display:'flex',
        flexDirection:'column',
        position:'relative',
        overflow:'hidden',
      }}>
        {/* Decorative circles */}
        <div style={{position:'absolute', top:'-50mm', right:'-50mm', width:'150mm', height:'150mm', borderRadius:'50%', background:'radial-gradient(circle, rgba(251,191,36,0.3), transparent)'}}></div>
        <div style={{position:'absolute', bottom:'-30mm', left:'-30mm', width:'100mm', height:'100mm', borderRadius:'50%', background:'radial-gradient(circle, rgba(236,72,153,0.2), transparent)'}}></div>
        
        {/* Header */}
        <div style={{textAlign:'center', position:'relative', zIndex:2}}>
          <div style={{fontSize:'80mm', lineHeight:1, filter:'drop-shadow(0 4px 8px rgba(0,0,0,0.3))'}}>🌍</div>
          <h1 style={{fontSize:'18mm', fontWeight:900, margin:'2mm 0 1mm', letterSpacing:'-0.5mm', textShadow:'0 2px 8px rgba(0,0,0,0.3)'}}>TerraQuiz</h1>
          <p style={{fontSize:'5mm', opacity:0.95, margin:0, fontWeight:500}}>Quiz educațional de geografie</p>
        </div>

        {/* Main message */}
        <div style={{textAlign:'center', margin:'8mm 0', position:'relative', zIndex:2}}>
          <div style={{
            display:'inline-block',
            background:'rgba(255,255,255,0.15)',
            backdropFilter:'blur(10px)',
            padding:'4mm 8mm',
            borderRadius:'8mm',
            border:'1px solid rgba(255,255,255,0.3)',
          }}>
            <p style={{fontSize:'7mm', fontWeight:700, margin:0}}>
              💯 Gratis · 🇷🇴 În română · 📱 Pe orice telefon
            </p>
          </div>
        </div>

        {/* Stats grid */}
        <div style={{
          display:'grid',
          gridTemplateColumns:'repeat(2, 1fr)',
          gap:'3mm',
          margin:'4mm 0',
          position:'relative',
          zIndex:2,
        }}>
          <StatBox emoji="📚" number="1100+" label="Întrebări" />
          <StatBox emoji="🌎" number="11" label="Capitole" />
          <StatBox emoji="🏆" number="14" label="Diplome" />
          <StatBox emoji="🎮" number="50+" label="Multiplayer" />
        </div>

        {/* Features */}
        <div style={{
          background:'rgba(255,255,255,0.1)',
          backdropFilter:'blur(10px)',
          padding:'5mm 6mm',
          borderRadius:'5mm',
          margin:'3mm 0',
          border:'1px solid rgba(255,255,255,0.2)',
          position:'relative',
          zIndex:2,
        }}>
          <h2 style={{fontSize:'6mm', fontWeight:800, margin:'0 0 3mm', textAlign:'center'}}>✨ Ce găsești?</h2>
          <div style={{fontSize:'4mm', lineHeight:1.6}}>
           🎯 <strong>Mod multiplayer stil Kahoot</strong> — joacă live cu colegii<br/>

            🎓 <strong>Pregătire Bacalaureat</strong> — 150 întrebări BAC<br/>
            🗺️ <strong>Hărți interactive</strong> — politice și fizice<br/>
            🚩 <strong>Steaguri din toată lumea</strong> — 100 întrebări<br/>
            🏅 <strong>Diplome PDF</strong> — pentru recompensă<br/>
            🏆 <strong>Clasament</strong> — concurează cu prietenii
          </div>
        </div>

        {/* QR + URL */}
        <div style={{
          marginTop:'auto',
          background:'white',
          padding:'5mm 6mm',
          borderRadius:'5mm',
          textAlign:'center',
          color:'#1e293b',
          position:'relative',
          zIndex:2,
        }}>
          <div style={{display:'flex', alignItems:'center', justifyContent:'center', gap:'5mm'}}>
            {/* QR Code via API */}
            <img 
              src="https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=https%3A%2F%2Fterraquiz.ro&color=1e293b&bgcolor=ffffff&margin=0&format=svg"
              alt="QR Code terraquiz.ro"
              style={{width:'30mm', height:'30mm'}}
            />
            <div style={{textAlign:'left'}}>
              <div style={{fontSize:'4mm', color:'#64748b', marginBottom:'1mm'}}>Scanează codul sau intră pe:</div>
              <div style={{fontSize:'9mm', fontWeight:900, color:'#5b21b6', lineHeight:1, letterSpacing:'-0.5mm'}}>terraquiz.ro</div>
              <div style={{fontSize:'3.5mm', color:'#64748b', marginTop:'2mm'}}>Fără cont · Fără plată · Începe acum!</div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div style={{
          textAlign:'center',
          fontSize:'3mm',
          opacity:0.7,
          marginTop:'3mm',
          position:'relative',
          zIndex:2,
        }}>
          🇷🇴 Aplicație românească pentru elevi de gimnaziu și liceu
        </div>
      </div>
    </>
  );
}

function StatBox({ emoji, number, label }) {
  return (
    <div style={{
      background:'rgba(255,255,255,0.15)',
      backdropFilter:'blur(10px)',
      padding:'4mm',
      borderRadius:'4mm',
      textAlign:'center',
      border:'1px solid rgba(255,255,255,0.2)',
    }}>
      <div style={{fontSize:'10mm', lineHeight:1, marginBottom:'1mm'}}>{emoji}</div>
      <div style={{fontSize:'10mm', fontWeight:900, lineHeight:1, color:'#fbbf24', textShadow:'0 2px 4px rgba(0,0,0,0.2)'}}>{number}</div>
      <div style={{fontSize:'3.5mm', opacity:0.9, fontWeight:600}}>{label}</div>
    </div>
  );
}
