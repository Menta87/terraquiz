// TEMPLATE VARIANTĂ BAC
// Copy-paste acest fișier ca varianta-X.js și completează
// IMPORTANT: 30 puncte / subiect = 90 total + 10 oficiu = nota 1-10

export const variantaX = {
  id: 'varianta-X',           // <- ÎNLOCUIEȘTE X
  nume: 'Varianta X',          // <- ÎNLOCUIEȘTE X
  an: 2024,
  totalPuncte: 90,
  
  // ============================================
  // SUBIECT I - EUROPA (30 PUNCTE)
  // ============================================
  subiectI: {
    titlu: 'Subiect I - Europa',
    harta: 'Test_6',  // sau Test_10 pentru altă hartă (le pot adăuga)
    
    // A. Precizați (4 puncte = 2 + 2)
    A: [
      {
        tip: 'identificare',
        enunt: '1. Numele statului marcat, pe hartă, cu litera ___',
        raspunsCorect: '___',
        raspunsuriAcceptate: ['varianta1', 'varianta2'],
        punctaj: 2,
      },
      {
        tip: 'identificare',
        enunt: '2. Numele orașului-capitală marcat cu numărul ___',
        raspunsCorect: '___',
        raspunsuriAcceptate: ['varianta1', 'varianta2'],
        punctaj: 2,
      },
    ],
    
    // B. Completează (6 puncte = 3 x 2)
    B: [
      {
        tip: 'completare',
        enuntInainte: '1. Capitala statului marcat cu litera ___ este',
        raspunsCorect: '___',
        raspunsuriAcceptate: ['varianta1'],
        punctaj: 2,
      },
      {
        tip: 'completare',
        enuntInainte: '2. ___',
        raspunsCorect: '___',
        raspunsuriAcceptate: ['varianta1'],
        punctaj: 2,
      },
      {
        tip: 'completare',
        enuntInainte: '3. ___',
        raspunsCorect: '___',
        raspunsuriAcceptate: ['varianta1'],
        punctaj: 2,
      },
    ],
    
    // C. Grilă (10 puncte = 5 x 2)
    C: [
      {
        tip: 'grila',
        enunt: '1. ___?',
        variante: { a: '___', b: '___', c: '___', d: '___' },
        raspunsCorect: 'a',  // a, b, c sau d
        punctaj: 2,
      },
      {
        tip: 'grila',
        enunt: '2. ___?',
        variante: { a: '___', b: '___', c: '___', d: '___' },
        raspunsCorect: 'b',
        punctaj: 2,
      },
      {
        tip: 'grila',
        enunt: '3. ___?',
        variante: { a: '___', b: '___', c: '___', d: '___' },
        raspunsCorect: 'c',
        punctaj: 2,
      },
      {
        tip: 'grila',
        enunt: '4. ___?',
        variante: { a: '___', b: '___', c: '___', d: '___' },
        raspunsCorect: 'd',
        punctaj: 2,
      },
      {
        tip: 'grila',
        enunt: '5. ___?',
        variante: { a: '___', b: '___', c: '___', d: '___' },
        raspunsCorect: 'a',
        punctaj: 2,
      },
    ],
    
    // D. Comparație (6 puncte = 1 ex x 6)
    D: [
      {
        tip: 'comparatie',
        enunt: 'Precizați 3 deosebiri între ___ și ___',
        raspunsExemplu: [
          'Deosebirea 1: ___',
          'Deosebirea 2: ___',
          'Deosebirea 3: ___',
        ],
        punctajMaxim: 6,
      },
    ],
    
    // E. Cauze (4 puncte = 2 x 2)
    E: [
      {
        tip: 'cauza',
        enunt: '1. Prezentați o cauză a ___',
        raspunsExemplu: 'Cauza este ___',
        cuvinteCheie: ['cuvant1', 'cuvant2', 'cuvant3'],
        punctaj: 2,
      },
      {
        tip: 'cauza',
        enunt: '2. Prezentați o cauză a ___',
        raspunsExemplu: 'Cauza este ___',
        cuvinteCheie: ['cuvant1', 'cuvant2'],
        punctaj: 2,
      },
    ],
  },
  
  // ============================================
  // SUBIECT II - ROMÂNIA (30 PUNCTE)
  // ============================================
  subiectII: {
    titlu: 'Subiect II - România',
    harta: 'Test_6',
    
    // A. Precizați (4 puncte)
    A: [
      {
        tip: 'identificare',
        enunt: '1. Numele orașului marcat cu numărul ___',
        raspunsCorect: '___',
        raspunsuriAcceptate: ['varianta1'],
        punctaj: 2,
      },
      {
        tip: 'identificare',
        enunt: '2. Numele râului marcat cu numărul ___',
        raspunsCorect: '___',
        raspunsuriAcceptate: ['varianta1'],
        punctaj: 2,
      },
    ],
    
    // B. Completează (6 puncte)
    B: [
      {
        tip: 'completare',
        enuntInainte: '1. ___',
        raspunsCorect: '___',
        raspunsuriAcceptate: ['varianta1'],
        punctaj: 2,
      },
      {
        tip: 'completare',
        enuntInainte: '2. ___',
        raspunsCorect: '___',
        raspunsuriAcceptate: ['varianta1'],
        punctaj: 2,
      },
      {
        tip: 'completare',
        enuntInainte: '3. ___',
        raspunsCorect: '___',
        raspunsuriAcceptate: ['varianta1'],
        punctaj: 2,
      },
    ],
    
    // C. Grilă (10 puncte)
    C: [
      {
        tip: 'grila',
        enunt: '1. ___?',
        variante: { a: '___', b: '___', c: '___', d: '___' },
        raspunsCorect: 'a',
        punctaj: 2,
      },
      {
        tip: 'grila',
        enunt: '2. ___?',
        variante: { a: '___', b: '___', c: '___', d: '___' },
        raspunsCorect: 'b',
        punctaj: 2,
      },
      {
        tip: 'grila',
        enunt: '3. ___?',
        variante: { a: '___', b: '___', c: '___', d: '___' },
        raspunsCorect: 'c',
        punctaj: 2,
      },
      {
        tip: 'grila',
        enunt: '4. ___?',
        variante: { a: '___', b: '___', c: '___', d: '___' },
        raspunsCorect: 'd',
        punctaj: 2,
      },
      {
        tip: 'grila',
        enunt: '5. ___?',
        variante: { a: '___', b: '___', c: '___', d: '___' },
        raspunsCorect: 'a',
        punctaj: 2,
      },
    ],
    
    // D. Comparație (6 puncte)
    D: [
      {
        tip: 'comparatie',
        enunt: 'Precizați 3 deosebiri între ___ și ___',
        raspunsExemplu: [
          'Deosebirea 1: ___',
          'Deosebirea 2: ___',
          'Deosebirea 3: ___',
        ],
        punctajMaxim: 6,
      },
    ],
    
    // E. Cauze (4 puncte)
    E: [
      {
        tip: 'cauza',
        enunt: '1. ___',
        raspunsExemplu: '___',
        cuvinteCheie: ['cuvant1', 'cuvant2'],
        punctaj: 2,
      },
      {
        tip: 'cauza',
        enunt: '2. ___',
        raspunsExemplu: '___',
        cuvinteCheie: ['cuvant1', 'cuvant2'],
        punctaj: 2,
      },
    ],
  },
  
  // ============================================
  // SUBIECT III - LUMEA CONTEMPORANĂ (30 PUNCTE)
  // ============================================
  subiectIII: {
    titlu: 'Subiect III - Lumea contemporană',
    
    // A. Precizați (4 puncte)
    A: [
      {
        tip: 'identificare',
        enunt: '1. ___',
        raspunsCorect: '___',
        raspunsuriAcceptate: ['varianta1'],
        punctaj: 2,
      },
      {
        tip: 'identificare',
        enunt: '2. ___',
        raspunsCorect: '___',
        raspunsuriAcceptate: ['varianta1'],
        punctaj: 2,
      },
    ],
    
    // B. Menționați (6 puncte)
    B: [
      {
        tip: 'completare',
        enuntInainte: '1. ___',
        raspunsCorect: '___',
        raspunsuriAcceptate: ['varianta1', 'varianta2', 'varianta3'],
        punctaj: 2,
      },
      {
        tip: 'completare',
        enuntInainte: '2. ___',
        raspunsCorect: '___',
        raspunsuriAcceptate: ['varianta1', 'varianta2'],
        punctaj: 2,
      },
      {
        tip: 'completare',
        enuntInainte: '3. ___',
        raspunsCorect: '___',
        raspunsuriAcceptate: ['varianta1'],
        punctaj: 2,
      },
    ],
    
    // C. Caracterizare regiune (10 puncte = 5 x 2)
    C: [
      {
        tip: 'completare',
        enuntInainte: '1. Modul de formare:',
        raspunsCorect: '___',
        raspunsuriAcceptate: ['varianta1', 'varianta2'],
        punctaj: 2,
      },
      {
        tip: 'completare',
        enuntInainte: '2. Un tip de rocă:',
        raspunsCorect: '___',
        raspunsuriAcceptate: ['varianta1', 'varianta2'],
        punctaj: 2,
      },
      {
        tip: 'completare',
        enuntInainte: '3. Un tip de relief:',
        raspunsCorect: '___',
        raspunsuriAcceptate: ['varianta1'],
        punctaj: 2,
      },
      {
        tip: 'completare',
        enuntInainte: '4. Un etaj climatic:',
        raspunsCorect: '___',
        raspunsuriAcceptate: ['varianta1', 'varianta2'],
        punctaj: 2,
      },
      {
        tip: 'completare',
        enuntInainte: '5. Un râu:',
        raspunsCorect: '___',
        raspunsuriAcceptate: ['varianta1', 'varianta2'],
        punctaj: 2,
      },
    ],
    
    // D. Calcule + grilă + cauză (6 puncte)
    D: [
      {
        tip: 'calcul',
        enunt: '1. Calculați ___',
        formula: 'Formula: ___',
        raspunsCorect: 0,         // valoare numerică
        intervalAcceptat: [0, 0], // interval de toleranță
        unitate: '___',
        punctaj: 2,
      },
      {
        tip: 'grila',
        enunt: '2. ___?',
        variante: { a: '___', b: '___', c: '___', d: '___' },
        raspunsCorect: 'a',
        punctaj: 2,
      },
      {
        tip: 'cauza',
        enunt: '3. ___',
        raspunsExemplu: '___',
        cuvinteCheie: ['cuvant1', 'cuvant2'],
        punctaj: 2,
      },
    ],
    
    // E. Calcul demografic + cauză (4 puncte)
    E: [
      {
        tip: 'calcul',
        enunt: '1. Calculați ___',
        formula: '___',
        raspunsCorect: 0,
        intervalAcceptat: [0, 0],
        unitate: 'locuitori',
        punctaj: 2,
      },
      {
        tip: 'cauza',
        enunt: '2. ___',
        raspunsExemplu: '___',
        cuvinteCheie: ['cuvant1', 'cuvant2'],
        punctaj: 2,
      },
    ],
  },
};
