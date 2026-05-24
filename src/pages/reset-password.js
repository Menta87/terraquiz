import { useState } from 'react';
import Link from 'next/link';
import { supabase } from '../lib/supabase';
import Layout from '../components/Layout';

export default function ResetPassword() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/update-password`,
    });
    
    if (error) {
      setError(error.message);
    } else {
      setSent(true);
    }
    setLoading(false);
  }

  return (
    <Layout>
      <div style={{maxWidth: '450px', margin: '0 auto', padding: '3rem 1.5rem'}}>
        <div style={{textAlign: 'center', marginBottom: '2rem'}}>
          <div style={{fontSize: '4rem', marginBottom: '1rem'}}>🔑</div>
          <h1 style={{fontSize: '1.75rem', fontWeight: 900, color: '#1e293b'}}>
            Resetare parolă
          </h1>
          <p style={{color: '#64748b', marginTop: '0.5rem'}}>
            Introdu emailul și-ți trimitem un link de resetare
          </p>
        </div>

        {sent ? (
          <div style={{background: '#d1fae5', padding: '1.5rem', borderRadius: '12px', textAlign: 'center'}}>
            <div style={{fontSize: '3rem'}}>📧</div>
            <h2 style={{color: '#065f46', marginTop: '1rem'}}>Email trimis!</h2>
            <p style={{color: '#065f46', marginTop: '0.5rem', lineHeight: 1.6}}>
              Verifică inbox-ul (și folderul spam) pentru linkul de resetare.
              Linkul este valabil 1 oră.
            </p>
            <Link href="/login" style={{
              display: 'inline-block', marginTop: '1.5rem',
              padding: '0.75rem 1.5rem', background: '#10b981',
              color: 'white', borderRadius: '8px',
              textDecoration: 'none', fontWeight: 700,
            }}>
              ← Înapoi la Login
            </Link>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{background: 'white', padding: '2rem', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)'}}>
            <label style={{display: 'block', marginBottom: '0.5rem', color: '#1e293b', fontWeight: 600}}>
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
              placeholder="exemplu@email.com"
              style={{
                width: '100%', padding: '0.75rem',
                border: '2px solid #e2e8f0', borderRadius: '8px',
                fontSize: '1rem', marginBottom: '1rem',
              }}
            />
            
            {error && (
              <div style={{padding: '0.75rem', background: '#fee2e2', color: '#991b1b', borderRadius: '8px', marginBottom: '1rem', fontSize: '0.9rem'}}>
                {error}
              </div>
            )}
            
            <button
              type="submit"
              disabled={loading}
              style={{
                width: '100%', padding: '0.9rem',
                background: 'linear-gradient(135deg, #0284c7, #1e40af)',
                color: 'white', border: 'none', borderRadius: '8px',
                fontSize: '1.05rem', fontWeight: 700, cursor: 'pointer',
              }}
            >
              {loading ? 'Se trimite...' : '📧 Trimite link de resetare'}
            </button>
            
            <div style={{textAlign: 'center', marginTop: '1.5rem'}}>
              <Link href="/login" style={{color: '#0284c7', textDecoration: 'underline'}}>
                ← Înapoi la Login
              </Link>
            </div>
          </form>
        )}
      </div>
    </Layout>
  );
}
