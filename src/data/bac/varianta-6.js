export const varianta6 = {
  id: 'varianta-6',
  nume: 'Varianta 6',
  testNumber: 11,
  totalPuncte: 90,
  
  subiectI: {
    titlu: 'Subiect I - Europa',
    
    A: [
      { tip: 'identificare', enunt: '1. Numele statului marcat cu litera D', raspunsCorect: 'Serbia', raspunsuriAcceptate: ['Serbia', 'serbia'], punctaj: 2 },
      { tip: 'identificare', enunt: '2. Numele orașului-capitală marcat cu numărul 8', raspunsCorect: 'Zagreb', raspunsuriAcceptate: ['Zagreb', 'zagreb'], punctaj: 2 },
    ],
    
    B: [
      { tip: 'completare', enuntInainte: '1. Skopje este orașul-capitală marcat cu numărul', raspunsCorect: '2', raspunsuriAcceptate: ['2'], punctaj: 2 },
      { tip: 'completare', enuntInainte: '2. Prin capitala statului marcat cu litera F trece fluviul numit', raspunsCorect: 'Sena', raspunsuriAcceptate: ['Sena', 'sena', 'Seine'], punctaj: 2 },
      { tip: 'completare', enuntInainte: '3. Orașul-capitală marcat cu numărul 15 se numește', raspunsCorect: 'Budapesta', raspunsuriAcceptate: ['Budapesta', 'budapesta'], punctaj: 2 },
    ],
    
    C: [
      { tip: 'grila', enunt: '1. Orașul Stockholm este capitala statului marcat cu litera:', variante: { a: 'A', b: 'B', c: 'C', d: 'J' }, raspunsCorect: 'd', punctaj: 2 },
      { tip: 'grila', enunt: '2. Climatul temperat continental este specific în statul a cărui capitală este orașul marcat cu numărul:', variante: { a: '1', b: '3', c: '12', d: '13' }, raspunsCorect: 'a', punctaj: 2 },
      { tip: 'grila', enunt: '3. Vulcani activi se găsesc în statele ale căror capitale sunt marcate cu numerele:', variante: { a: '1 și 10', b: '2 și 12', c: '3 și 13', d: '4 și 14' }, raspunsCorect: 'c', punctaj: 2 },
      { tip: 'grila', enunt: '4. Fluviul Rin traversează teritoriul statului a cărui capitală este orașul marcat cu numărul:', variante: { a: '6', b: '7', c: '8', d: '9' }, raspunsCorect: 'd', punctaj: 2 },
      { tip: 'grila', enunt: '5. Vegetația de tundră este specifică în nordul statului marcat cu litera:', variante: { a: 'C', b: 'E', c: 'F', d: 'G' }, raspunsCorect: 'd', punctaj: 2 },
    ],
    
    D: [
      { tip: 'comparatie', enunt: 'Precizați 2 asemănări și o deosebire între clima statului E (Regatul Unit) și clima statului F (Franța)', raspunsExemplu: [
        'Asemănare: ambele state se află sub influența vânturilor de vest dinspre Atlantic care aduc precipitații',
        'Asemănare: ambele au climă temperat-oceanică în mare parte din teritoriu',
        'Deosebire: Regatul Unit are amplitudine termică mai mică (8-10°C) datorită poziției insulare, iar Franța are amplitudini mai mari (15-18°C) datorită continentalității',
      ], punctajMaxim: 6 },
    ],
    
    E: [
      { tip: 'cauza', enunt: 'Două cauze care au determinat valorile reduse ale densității populației în Europa de Nord', raspunsExemplu: 'Cauza 1: clima rece subpolară și polară, cu ierni lungi și aspre (-15°C până la -30°C), care face dificilă locuirea. Cauza 2: relieful muntos (Alpii Scandinaviei) și prezența fjordurilor, ghețarilor și pădurilor de conifere limitează zonele locuibile.', cuvinteCheie: ['climă', 'rece', 'fiorduri', 'munte'], punctaj: 4 },
    ],
  },
  
  subiectII: {
    titlu: 'Subiect II - România',
    
    A: [
      { tip: 'identificare', enunt: '1. Numele orașului marcat cu numărul 8', raspunsCorect: 'Arad', raspunsuriAcceptate: ['Arad', 'arad'], punctaj: 2 },
      { tip: 'identificare', enunt: '2. Numele râului marcat cu numărul 6', raspunsCorect: 'Someș', raspunsuriAcceptate: ['Someș', 'Somes', 'somes'], punctaj: 2 },
    ],
    
    B: [
      { tip: 'completare', enuntInainte: '1. Orașele marcate cu numerele 9 și 10 sunt porturi la', raspunsCorect: 'Dunăre', raspunsuriAcceptate: ['Dunăre', 'Dunarea', 'dunarea'], punctaj: 2 },
      { tip: 'completare', enuntInainte: '2. Râul Prahova este marcat cu numărul', raspunsCorect: '3', raspunsuriAcceptate: ['3'], punctaj: 2 },
      { tip: 'completare', enuntInainte: '3. Cea mai nouă unitate de relief este marcată cu litera', raspunsCorect: 'G', raspunsuriAcceptate: ['G', 'g'], punctaj: 2 },
    ],
    
    C: [
      { tip: 'grila', enunt: '1. Strat de loess există în subunitatea de relief marcată cu litera:', variante: { a: 'A', b: 'B', c: 'E', d: 'G' }, raspunsCorect: 'c', punctaj: 2 },
      { tip: 'grila', enunt: '2. Orașul marcat cu numărul 12 este străbătut de râul:', variante: { a: 'Bârlad', b: 'Jijia', c: 'Siret', d: 'Vaslui' }, raspunsCorect: 'a', punctaj: 2 },
      { tip: 'grila', enunt: '3. Râul marcat cu numărul 1:', variante: { a: 'este amenajat hidroenergetic', b: 'este afluent al Trotușului', c: 'străbate orașul Miercurea Ciuc', d: 'străbate Subcarpații Curburii' }, raspunsCorect: 'a', punctaj: 2 },
      { tip: 'grila', enunt: '4. O resursă de subsol din unitatea de relief marcată cu litera F:', variante: { a: 'cărbunii', b: 'gazul metan', c: 'minereul de fier', d: 'petrolul' }, raspunsCorect: 'a', punctaj: 2 },
      { tip: 'grila', enunt: '5. Orașul marcat cu numărul 11 se numește:', variante: { a: 'Bistrița', b: 'Cluj-Napoca', c: 'Reghin', d: 'Târgu Mureș' }, raspunsCorect: 'd', punctaj: 2 },
    ],
    
    D: [
      { tip: 'comparatie', enunt: 'Precizați 3 deosebiri între relieful unității B (Câmpia Moldovei) și relieful unității C (Munții Apuseni)', raspunsExemplu: [
        'Mod de formare: B (Câmpia Moldovei) s-a format prin sedimentare, iar C (Munții Apuseni) prin orogeneza hercinică și alpină (cutare)',
        'Altitudini: B are 100-250 m, iar C atinge 1849 m (Vf. Bihor) - cu peste 1500 m diferență',
        'Tipuri de relief: B are relief plan cu interfluvii largi, iar C are relief carstic dezvoltat (peșteri, chei) și cristalin',
      ], punctajMaxim: 6 },
    ],
    
    E: [
      { tip: 'cauza', enunt: 'Două cauze pentru creșterea animalelor mai mult decât cultura plantelor în regiunile montane', raspunsExemplu: 'Cauza 1: relieful muntos cu pante accentuate face dificilă agricultura cu plante, dar pajiștile naturale (pășuni, fânețe) sunt abundente și permit creșterea animalelor. Cauza 2: clima rece și solurile mai puțin fertile (cambisoluri, spodosoluri) sunt improprii cerealelor, dar suficient pentru pajiști care hrănesc oile, vacile, caprele.', cuvinteCheie: ['pante', 'pajiști', 'rece', 'soluri'], punctaj: 4 },
    ],
  },
  
  subiectIII: {
    titlu: 'Subiect III - Lumea contemporană',
    hasDiagrama: true,
    hasTabele: true,
    
    A: [
      { tip: 'completare', enuntInainte: '1. Valoarea maximă a defrișărilor și statul', raspunsCorect: 'Spania 85-87%', raspunsuriAcceptate: ['Spania 85', 'Spania 86', 'Spania 87', 'Spania', '85', '86', '87', 'spania'], punctaj: 2 },
      { tip: 'completare', enuntInainte: '2. Valoarea minimă a defrișărilor și statul', raspunsCorect: 'Austria 47-49%', raspunsuriAcceptate: ['Austria 47', 'Austria 48', 'Austria 49', 'Austria', '47', '48', '49', 'austria'], punctaj: 2 },
    ],
    
    B: [
      { tip: 'cauza', enunt: '1. Două cauze care au condus la defrișările masive', raspunsExemplu: 'Cauza 1: extinderea terenurilor agricole pentru creșterea populației (defrișări pentru a crea câmpuri arabile și pășuni). Cauza 2: utilizarea masivă a lemnului pentru construcții, încălzire, industrie (în special siderurgie tradițională).', cuvinteCheie: ['agricultură', 'lemn', 'industrie', 'construcții'], punctaj: 4 },
      { tip: 'cauza', enunt: '2. O consecință a defrișărilor masive', raspunsExemplu: 'Eroziunea solurilor pe pante accentuate (alunecări, ravene), reducerea biodiversității, modificarea climatului local, inundații datorită lipsei pădurii care reglează scurgerea apei.', cuvinteCheie: ['eroziune', 'biodiversitate', 'climă', 'inundații'], punctaj: 2 },
    ],
    
    C: [
      { tip: 'completare', enuntInainte: '1. Două unități de relief vecine cu Câmpia de Vest', raspunsCorect: 'Dealurile de Vest', raspunsuriAcceptate: ['Dealurile de Vest', 'Munții Banatului', 'Munții Apuseni', 'Munții Poiana Ruscă'], punctaj: 2 },
      { tip: 'completare', enuntInainte: '2. Numele câmpiei europene din care face parte', raspunsCorect: 'Câmpia Panonică', raspunsuriAcceptate: ['Câmpia Panonică', 'Panonică', 'panonica'], punctaj: 1 },
      { tip: 'completare', enuntInainte: '3. Un tip de roci', raspunsCorect: 'argile', raspunsuriAcceptate: ['argile', 'nisipuri', 'pietrișuri', 'loess'], punctaj: 1 },
      { tip: 'completare', enuntInainte: '4. Un tip genetic de relief', raspunsCorect: 'fluvio-lacustru', raspunsuriAcceptate: ['fluvio-lacustru', 'fluviatil', 'sedimentar', 'aluvionar'], punctaj: 1 },
      { tip: 'completare', enuntInainte: '5. Două subdiviziuni', raspunsCorect: 'Câmpia Banatului', raspunsuriAcceptate: ['Câmpia Banatului', 'Câmpia Crișurilor', 'Câmpia Someșului', 'Câmpia Aradului'], punctaj: 2 },
      { tip: 'completare', enuntInainte: '6. Două influențe climatice', raspunsCorect: 'oceanice', raspunsuriAcceptate: ['oceanice', 'submediteraneene', 'continentale'], punctaj: 2 },
      { tip: 'completare', enuntInainte: '7. Zona de vegetație', raspunsCorect: 'silvostepă', raspunsuriAcceptate: ['silvostepă', 'stepă', 'pădure de foioase'], punctaj: 1 },
    ],
    
    D: [
      { tip: 'calcul', enunt: '1. Bilanțul natural în anul 1956', formula: 'natalitate - mortalitate', raspunsCorect: 14.3, intervalAcceptat: [14.1, 14.5], unitate: '‰', punctaj: 2 },
      { tip: 'calcul', enunt: '2. Diferența ratelor natalității între 1977 și 1998', formula: '1977 - 1998', raspunsCorect: 9.1, intervalAcceptat: [8.9, 9.3], unitate: '‰', punctaj: 2 },
      { tip: 'calcul', enunt: '3. Diferența ratelor mortalității între 1977 și 1998', formula: '1998 - 1977', raspunsCorect: 2.4, intervalAcceptat: [2.2, 2.6], unitate: '‰', punctaj: 2 },
    ],
    
    E: [
      { tip: 'cauza', enunt: 'Două argumente pentru "Turismul cultural este o caracteristică a orașului Roma"', raspunsExemplu: 'Argument 1: Roma adăpostește monumente antice unice - Colosseum, Forumul Roman, Panteon, ruinele Imperiului Roman atrag milioane de turiști pentru valoarea istorică. Argument 2: Vaticanul (cu Bazilica Sf. Petru, Capela Sixtină) este centrul mondial al catolicismului și destinație de pelerinaj, plus muzee cu artă renascentistă.', cuvinteCheie: ['Colosseum', 'Vatican', 'antice', 'pelerinaj'], punctaj: 4 },
    ],
  },
};
