import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { supabase } from '../lib/supabase';
import Layout from '../components/Layout';

export default function UpdatePassword() {
  const router = useRouter();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');
  const [validSession, setValidSession] = useState(false);

  useEffect(() => {
    async function checkSession() {
      const { data: { session } } = await supabase.auth.getSession();
      if (session) {
        setValidSession(true);
      } else {
        setError('Link expirat sau invalid. Te rog cere un nou link de resetare.');
      }
    }
    checkSession();
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    setError('');

    if (password.length < 6) {
      setError('Parola trebuie să aibă minim 6 caractere');
      return;
    }
    if (password !== confirmPassword) {
      setError('Parolele nu se potrivesc');
      return;
    }

    setLoading(true);
    const { error } = await supabase.auth.updateUser({ password });
    
    if (error) {
      setError(error.message);
    } else {
      setSuccess(true);
      setTimeout(() => router.push('/profile'), 2500);
    }
    setLoading(false);
  }

  return (
    <Layout>
      <div style={{maxWidth: '450px', margin: '0 auto', padding: '3rem 1.5rem'}}>
        <div style={{textAlign: 'center', marginBottom: '2rem'}}>
          <div style={{fontSize: '4rem', marginBottom: '1rem'}}>🔐</div>
          <h1 style={{fontSize: '1.75rem', fontWeight: 900, color: '#1e293b'}}>
            Setează parola nouă
          </h1>
        </div>

        {success ? (
          <div style={{background: '#d1fae5', padding: '1.5rem', borderRadius: '12px', textAlign: 'center'}}>
            <div style={{fontSize: '3rem'}}>✅</div>
            <h2 style={{color: '#065f46', marginTop: '1rem'}}>Parolă schimbată!</h2>
            <p style={{color: '#065f46', marginTop: '0.5rem'}}>Te redirecționăm la profil...</p>
          </div>
        ) : !validSession ? (
          <div style={{background: '#fee2e2', padding: '1.5rem', borderRadius: '12px', textAlign: 'center'}}>
            <div style={{fontSize: '3rem'}}>⚠️</div>
            <h2 style={{color: '#991b1b', marginTop: '1rem'}}>Link invalid</h2>
            <p style={{color: '#991b1b', marginTop: '0.5rem', lineHeight: 1.6}}>
              {error || 'Te rog cere un nou link de resetare.'}
            </p>
            <Link href="/reset-password" style={{
              display: 'inline-block', marginTop: '1.5rem',
              padding: '0.75rem 1.5rem', background: '#dc2626',
              color: 'white', borderRadius: '8px',
              textDecoration: 'none', fontWeight: 700,
            }}>
              Cere un link nou
            </Link>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{background: 'white', padding: '2rem', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)'}}>
            <label style={{display: 'block', marginBottom: '0.5rem', color: '#1e293b', fontWeight: 600}}>
              Parolă nouă (min 6 caractere)
            </label>
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
              minLength={6}
              style={{
                width: '100%', padding: '0.75rem',
                border: '2px solid #e2e8f0', borderRadius: '8px',
                fontSize: '1rem', marginBottom: '1rem',
              }}
            />

            <label style={{display: 'block', marginBottom: '0.5rem', color: '#1e293b', fontWeight: 600}}>
              Confirmă parola
            </label>
            <input
              type="password"
              value={confirmPassword}
              onChange={e => setConfirmPassword(e.target.value)}
              required
              minLength={6}
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
                background: 'linear-gradient(135deg, #10b981, #059669)',
                color: 'white', border: 'none', borderRadius: '8px',
                fontSize: '1.05rem', fontWeight: 700, cursor: 'pointer',
              }}
            >
              {loading ? 'Se salvează...' : '🔐 Setează parola nouă'}
            </button>
          </form>
        )}
      </div>
    </Layout>
  );
}
