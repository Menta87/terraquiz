import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { supabase } from '../lib/supabase';

export default function Register() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);

  async function handleRegister(e) {
    e.preventDefault();
    setLoading(true);
    setMessage(null);
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: { data: { username } }
    });
    setLoading(false);
    if (error) {
      setMessage({ type: 'error', text: error.message });
    } else {
      setMessage({ type: 'success', text: 'Cont creat cu succes! Te conectezi automat...' });
      setTimeout(() => router.push('/'), 1500);
    }
  }

  return (
    <div className="container">
      <div className="form-container">
        <h1>Creează cont</h1>
        <p className="subtitle">Alătură-te comunității TerraQuiz</p>
        <form onSubmit={handleRegister}>
          <div className="form-group">
            <label>Nume utilizator</label>
            <input
              type="text"
              required
              minLength={3}
              value={username}
              onChange={e => setUsername(e.target.value)}
              placeholder="ex: AndreiPopescu"
            />
          </div>
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
            <label>Parolă (min 6 caractere)</label>
            <input
              type="password"
              required
              minLength={6}
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="••••••••"
            />
          </div>
          <button type="submit" disabled={loading} className="btn btn-primary btn-block btn-large">
            {loading ? 'Se înregistrează...' : 'Creează cont'}
          </button>
          {message && (
            <div className={`form-message ${message.type}`}>{message.text}</div>
          )}
        </form>
        <p className="form-link">
          Ai deja cont? <Link href="/login">Conectează-te</Link>
        </p>
      </div>
    </div>
  );
}
