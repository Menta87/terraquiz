import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { supabase } from '../lib/supabase';

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);

  async function handleLogin(e) {
    e.preventDefault();
    setLoading(true);
    setMessage(null);
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    setLoading(false);
    if (error) {
      setMessage({ type: 'error', text: 'Email sau parolă greșită!' });
    } else {
      const redirect = router.query.redirect || '/';
      router.push(redirect);
    }
  }

  return (
    <div className="container">
      <div className="form-container">
        <h1>Bine ai revenit!</h1>
        <p className="subtitle">Conectează-te pentru a continua</p>
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              required
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="email@exemplu.ro"
            />
          </div>
          <div className="form-group">
            <label>Parolă</label>
            <input
              type="password"
              required
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="••••••••"
            />
          </div>
          <button type="submit" disabled={loading} className="btn btn-primary btn-block btn-large">
            {loading ? 'Se conectează...' : 'Conectare'}
          </button>
          {message && (
            <div className={`form-message ${message.type}`}>{message.text}</div>
          )}
        </form>
                <p className="form-link" style={{marginTop: '1rem'}}>
          <Link href="/reset-password" style={{color: '#0284c7', textDecoration: 'underline'}}>
            🔑 Am uitat parola
          </Link>
        </p>
        <p className="form-link">
          Nu ai cont? <Link href="/register">Înregistrează-te</Link>
        </p>

      </div>
    </div>
  );
}
