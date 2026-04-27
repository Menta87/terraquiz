import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { supabase } from '../lib/supabase';

export default function Home() {
  const [chapters, setChapters] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    loadChapters();
  }, []);

  async function loadChapters() {
    const { data, error } = await supabase
      .from('chapters')
      .select('*')
      .order('order_num');
    if (!error && data) setChapters(data);
    setLoading(false);
  }

  async function startQuiz(chapterId) {
    const { data: { session } } = await supabase.auth.getSession();
    if (!session) {
      router.push(`/login?redirect=/play/${chapterId}`);
    } else {
      router.push(`/play/${chapterId}`);
    }
  }

  return (
    <>
      <section className="hero">
        <div className="container">
          <h1>🌍 TerraQuiz</h1>
          <p>Testează-ți cunoștințele de geografie cu peste 880 de întrebări din întreaga lume. Pentru elevi, studenți și pasionați.</p>
          <div className="hero-stats">
            <div className="hero-stat">
              <div className="num">883+</div>
              <div className="label">Întrebări</div>
            </div>
            <div className="hero-stat">
              <div className="num">9</div>
              <div className="label">Capitole</div>
            </div>
            <div className="hero-stat">
              <div className="num">∞</div>
              <div className="label">Joacă</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>Alege un capitol</h2>
          <p className="subtitle">Selectează tema preferată și începe să joci</p>

          {loading ? (
            <div className="loading">Se încarcă...</div>
          ) : (
            <div className="chapters-grid">
              {chapters.map(c => (
                <div key={c.id} className="chapter-card" onClick={() => startQuiz(c.id)}>
                  <div className="emoji">{c.emoji}</div>
                  <h3>{c.name}</h3>
                  <p className="meta">{c.description}</p>
                  <div className="play-btn">▶ Începe</div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
