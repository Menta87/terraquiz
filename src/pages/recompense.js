import { useEffect, useState } from 'react';
import Link from 'next/link';
import { supabase } from '../lib/supabase';

export default function RewardsPage() {
  const [rewards, setRewards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [redeemCode, setRedeemCode] = useState('');
  const [message, setMessage] = useState(null);
  const [userId, setUserId] = useState(null);

  useEffect(() => { load(); }, []);

  async function load() {
    const { data: { session } } = await supabase.auth.getSession();
    if (!session) { window.location.href = '/login'; return; }
    setUserId(session.user.id);
    const { data } = await supabase.from('user_rewards').select('*').eq('user_id', session.user.id).order('earned_at', { ascending: false });
    setRewards(data || []);
    setLoading(false);
  }

  async function handleRedeem() {
    if (!redeemCode.trim() || !userId) return;
    setMessage(null);
    const { data } = await supabase.rpc('redeem_promo_code', {
      p_user_id: userId,
      p_code: redeemCode.trim().toUpperCase()
    });
    if (data?.success) {
      setMessage({ type: 'success', text: `🎉 ${data.reward_name} - ${data.premium_days} zile Premium activate!` });
      setRedeemCode('');
      load();
    } else {
      setMessage({ type: 'error', text: data?.error || 'Eroare la redimare' });
    }
  }

  if (loading) return <div className="loading container">Se încarcă...</div>;

  const activeRewards = rewards.filter(r => !r.is_redeemed && new Date(r.expires_at) > new Date());
  const usedRewards = rewards.filter(r => r.is_redeemed);

  return (
    <div className="container" style={{padding:'2rem 1.5rem', maxWidth:'800px'}}>
      <h1 style={{textAlign:'center', color:'#5b21b6', marginBottom:'0.5rem'}}>🎁 Recompensele mele</h1>
      <p style={{textAlign:'center', color:'#64748b', marginBottom:'2rem'}}>Câștigă Premium GRATUIT prin turnee, streak-uri și clasament!</p>

      {/* Redeem cod manual */}
      <div style={{background:'linear-gradient(135deg, #fef3c7, #fde68a)', borderRadius:'16px', padding:'1.5rem', marginBottom:'2rem', border:'2px solid #f59e0b'}}>
        <h3 style={{color:'#78350f', marginTop:0}}>🎫 Ai un cod promo?</h3>
        <div style={{display:'flex', gap:'0.5rem', marginTop:'0.75rem'}}>
          <input type="text" placeholder="TERRA-XXXX-XXXX-XXXX" value={redeemCode} onChange={e => setRedeemCode(e.target.value)} style={{flex:1, padding:'0.85rem', border:'2px solid #f59e0b', borderRadius:'10px', fontSize:'0.95rem', fontFamily:'monospace', textTransform:'uppercase'}} />
          <button onClick={handleRedeem} style={{padding:'0.85rem 1.5rem', background:'linear-gradient(135deg, #f59e0b, #d97706)', color:'white', border:'none', borderRadius:'10px', fontWeight:800, cursor:'pointer'}}>Aplică</button>
        </div>
        {message && (
          <div style={{marginTop:'0.75rem', padding:'0.75rem', background: message.type === 'success' ? '#d1fae5' : '#fee2e2', color: message.type === 'success' ? '#065f46' : '#991b1b', borderRadius:'10px', fontWeight:600}}>
            {message.text}
          </div>
        )}
      </div>

      {/* Recompense active */}
      <h2 style={{color:'#1e293b', marginBottom:'1rem'}}>✨ Recompense disponibile ({activeRewards.length})</h2>
      {activeRewards.length === 0 ? (
        <div style={{padding:'2rem', textAlign:'center', background:'white', borderRadius:'16px', color:'#64748b'}}>
          🎯 Nu ai recompense active. Câștigă-le prin:
          <div style={{marginTop:'1rem', textAlign:'left', display:'inline-block'}}>
            <div>🏆 Câștigător turneu → 30 zile Premium</div>
            <div>🔥 Streak 30 zile → 30 zile Premium</div>
            <div>🥇 #1 leaderboard săptămânal → 7 zile Premium</div>
          </div>
        </div>
      ) : (
        <div style={{display:'flex', flexDirection:'column', gap:'0.75rem', marginBottom:'2rem'}}>
          {activeRewards.map(r => (
            <div key={r.id} style={{background:'linear-gradient(135deg, #d1fae5, #a7f3d0)', padding:'1.25rem', borderRadius:'14px', border:'2px solid #10b981'}}>
              <div style={{display:'flex', alignItems:'center', gap:'0.75rem'}}>
                <div style={{fontSize:'2.5rem'}}>{r.reward_emoji}</div>
                <div style={{flex:1}}>
                  <div style={{fontWeight:800, color:'#065f46', fontSize:'1.05rem'}}>{r.reward_name}</div>
                  <div style={{color:'#047857', fontSize:'0.9rem', marginTop:'0.25rem'}}>+{r.premium_days} zile Premium</div>
                </div>
              </div>
              <div style={{marginTop:'0.75rem', padding:'0.75rem', background:'white', borderRadius:'10px', fontFamily:'monospace', fontSize:'0.9rem', color:'#1e293b', border:'2px dashed #10b981'}}>
                Cod: <strong>{r.promo_code}</strong>
              </div>
              <div style={{fontSize:'0.8rem', color:'#64748b', marginTop:'0.5rem'}}>Expiră: {new Date(r.expires_at).toLocaleDateString('ro-RO')}</div>
            </div>
          ))}
        </div>
      )}

      {/* Recompense folosite */}
      {usedRewards.length > 0 && (
        <>
          <h2 style={{color:'#1e293b', marginBottom:'1rem'}}>✅ Recompense folosite ({usedRewards.length})</h2>
          <div style={{display:'flex', flexDirection:'column', gap:'0.5rem'}}>
            {usedRewards.map(r => (
              <div key={r.id} style={{background:'#f8fafc', padding:'1rem', borderRadius:'12px', opacity:0.7, display:'flex', alignItems:'center', gap:'0.75rem'}}>
                <div style={{fontSize:'1.5rem'}}>{r.reward_emoji}</div>
                <div style={{flex:1}}>
                  <div style={{fontWeight:700, color:'#475569'}}>{r.reward_name}</div>
                  <div style={{color:'#94a3b8', fontSize:'0.85rem'}}>{r.premium_days} zile • folosit {new Date(r.redeemed_at).toLocaleDateString('ro-RO')}</div>
                </div>
                <div style={{color:'#10b981', fontWeight:700}}>✓</div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
