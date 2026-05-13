import Link from 'next/link';
import Layout from '../components/Layout';

export default function PremiumPage() {
  return (
    <Layout>
      <div style={{
        maxWidth: '700px',
        margin: '0 auto',
        padding: '4rem 1.5rem',
        textAlign: 'center',
      }}>
        <div style={{fontSize: '4rem', marginBottom: '1rem'}}>🎁</div>
        <h1 style={{fontSize: '2rem', fontWeight: 900, color: '#1e293b', marginBottom: '1rem'}}>
          Totul este GRATUIT!
        </h1>
        <p style={{fontSize: '1.1rem', color: '#64748b', lineHeight: 1.7, marginBottom: '2rem'}}>
          Toate variantele BAC, exercițiile interactive, hărțile și diagramele sunt disponibile <strong>gratuit</strong> pentru toți utilizatorii.
        </p>
        <p style={{fontSize: '1rem', color: '#64748b', lineHeight: 1.7, marginBottom: '2.5rem'}}>
          Bucură-te de toate funcționalitățile aplicației și pregătește-te pentru BAC fără limite!
        </p>
        <Link href="/bac" style={{
          display: 'inline-block',
          padding: '0.9rem 2rem',
          background: 'linear-gradient(135deg, #0284c7, #1e40af)',
          color: 'white',
          borderRadius: '10px',
          textDecoration: 'none',
          fontWeight: 700,
          fontSize: '1.05rem',
        }}>
          🎓 Începe pregătirea pentru BAC
        </Link>
      </div>
    </Layout>
  );
}
