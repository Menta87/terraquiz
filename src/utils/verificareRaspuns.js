// Normalizează un text: lowercase, fără diacritice, fără punctuație
function normalizeaza(text) {
  if (!text) return '';
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')  // elimină diacritice
    .replace(/[.,;:!?]/g, ' ')        // punctuație → spațiu
    .replace(/\s+/g, ' ')              // multiple spații → unul singur
    .trim();
}

// Cuvinte de legătură care trebuie ignorate la comparație
const CUVINTE_IGNORATE = ['si', 'cu', 'sau', 'iar', 'dar', 'apoi'];

// Împarte un text în "tokens" (cuvinte semnificative) ignorând cuvintele de legătură
function tokenize(text) {
  const normalizat = normalizeaza(text);
  return normalizat
    .split(/\s+/)
    .filter(w => w.length > 0 && !CUVINTE_IGNORATE.includes(w));
}

// Verifică dacă răspunsul user-ului se potrivește cu lista de răspunsuri acceptate
export function verificaRaspuns(raspunsUser, raspunsuriAcceptate, raspunsCorect) {
  if (!raspunsUser || !raspunsUser.trim()) return false;
  
  const lista = raspunsuriAcceptate && raspunsuriAcceptate.length 
    ? raspunsuriAcceptate 
    : [raspunsCorect];
  
  // PASUL 1: Comparație exactă normalizată (lowercase, fără diacritice)
  const userNorm = normalizeaza(raspunsUser);
  for (const r of lista) {
    if (normalizeaza(r) === userNorm) return true;
  }
  
  // PASUL 2: Comparație ca set de tokens (ignoră ordinea, "și", virgula)
  // Pentru răspunsuri cu mai multe elemente (ex: "Sardinia Sicilia")
  const userTokens = tokenize(raspunsUser).sort();
  if (userTokens.length === 0) return false;
  
  for (const r of lista) {
    const rTokens = tokenize(r).sort();
    if (rTokens.length === 0) continue;
    
    // Verifică dacă tokens user = tokens raspuns acceptat (ignorând ordinea)
    if (userTokens.length === rTokens.length && 
        userTokens.every((t, i) => t === rTokens[i])) {
      return true;
    }
  }
  
  return false;
}
