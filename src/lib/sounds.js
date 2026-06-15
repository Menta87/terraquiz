// TerraQuiz - Sunete generate programatic cu Web Audio API
// Functioneaza pe orice browser fara descarcari

let audioCtx = null;

function getAudioContext() {
  if (typeof window === 'undefined') return null;
  if (!audioCtx) {
    try {
      audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    } catch (e) {
      return null;
    }
  }
  if (audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
}

// Helper: generare ton simplu cu envelope (atac, decay, release)
function playTone(freq, duration, type = 'sine', volume = 0.3, attack = 0.01, release = 0.05) {
  const ctx = getAudioContext();
  if (!ctx) return;
  
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  
  osc.type = type;
  osc.frequency.value = freq;
  
  const now = ctx.currentTime;
  gain.gain.setValueAtTime(0, now);
  gain.gain.linearRampToValueAtTime(volume, now + attack);
  gain.gain.setValueAtTime(volume, now + duration - release);
  gain.gain.linearRampToValueAtTime(0, now + duration);
  
  osc.connect(gain);
  gain.connect(ctx.destination);
  
  osc.start(now);
  osc.stop(now + duration);
}

// Helper: secventa de tonuri (melodie)
function playSequence(notes) {
  notes.forEach(({ freq, duration, type, volume, delay }) => {
    setTimeout(() => playTone(freq, duration, type || 'sine', volume || 0.3), delay || 0);
  });
}

// 🎵 SUNETE EXPORTATE

// Click pe răspuns - tick subtil
export function playClick() {
  playTone(800, 0.05, 'square', 0.1);
}

// Răspuns trimis - swoosh ascendent
export function playSubmit() {
  const ctx = getAudioContext();
  if (!ctx) return;
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.type = 'sine';
  osc.frequency.setValueAtTime(300, ctx.currentTime);
  osc.frequency.exponentialRampToValueAtTime(900, ctx.currentTime + 0.2);
  gain.gain.setValueAtTime(0.2, ctx.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.2);
  osc.connect(gain);
  gain.connect(ctx.destination);
  osc.start();
  osc.stop(ctx.currentTime + 0.2);
}

// Corect - "ding-ding!" vesel (C5 + E5 + G5)
export function playCorrect() {
  playSequence([
    { freq: 523.25, duration: 0.15, type: 'sine', volume: 0.35, delay: 0 },     // C5
    { freq: 659.25, duration: 0.15, type: 'sine', volume: 0.35, delay: 100 },   // E5
    { freq: 783.99, duration: 0.3, type: 'sine', volume: 0.4, delay: 200 },     // G5
  ]);
}

// Greșit - "buzz" descendent trist (E3 → A2)
export function playWrong() {
  playSequence([
    { freq: 164.81, duration: 0.2, type: 'sawtooth', volume: 0.2, delay: 0 },   // E3
    { freq: 110, duration: 0.3, type: 'sawtooth', volume: 0.2, delay: 150 },    // A2
  ]);
}

// Timp expirat - 3 ticuri urgente
export function playTimeUp() {
  playSequence([
    { freq: 880, duration: 0.1, type: 'square', volume: 0.25, delay: 0 },
    { freq: 880, duration: 0.1, type: 'square', volume: 0.25, delay: 200 },
    { freq: 440, duration: 0.3, type: 'sawtooth', volume: 0.25, delay: 400 },
  ]);
}

// Start joc - intro fanfare scurt
export function playGameStart() {
  playSequence([
    { freq: 392, duration: 0.15, type: 'triangle', volume: 0.3, delay: 0 },     // G4
    { freq: 523.25, duration: 0.15, type: 'triangle', volume: 0.3, delay: 150 },// C5
    { freq: 659.25, duration: 0.3, type: 'triangle', volume: 0.35, delay: 300 },// E5
  ]);
}

// Următoarea întrebare - "ding" scurt
export function playNextQuestion() {
  playTone(659.25, 0.2, 'triangle', 0.25);
}

// Victorie - fanfare lung
export function playVictory() {
  playSequence([
    { freq: 523.25, duration: 0.15, type: 'triangle', volume: 0.4, delay: 0 },   // C5
    { freq: 659.25, duration: 0.15, type: 'triangle', volume: 0.4, delay: 150 }, // E5
    { freq: 783.99, duration: 0.15, type: 'triangle', volume: 0.4, delay: 300 }, // G5
    { freq: 1046.5, duration: 0.4, type: 'triangle', volume: 0.45, delay: 450 }, // C6
  ]);
}

// Toggle global sound on/off (stocat in localStorage)
export function isSoundEnabled() {
  if (typeof window === 'undefined') return true;
  return localStorage.getItem('terraquiz_sound') !== 'off';
}

export function toggleSound() {
  if (typeof window === 'undefined') return true;
  const current = isSoundEnabled();
  localStorage.setItem('terraquiz_sound', current ? 'off' : 'on');
  return !current;
}

// Wrapper care verifica setarea inainte de a reda sunetul
export function safePlay(soundFn) {
  if (isSoundEnabled()) soundFn();
}
