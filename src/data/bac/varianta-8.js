export const varianta8 = {
  id: 'varianta-8',
  nume: 'Varianta 8',
  testNumber: 13,
  totalPuncte: 90,
  
  subiectI: {
    titlu: 'Subiect I - Europa',
    
    A: [
      { tip: 'identificare', enunt: '1. Numele statului marcat cu litera A', raspunsCorect: 'Ucraina', raspunsuriAcceptate: ['Ucraina', 'ucraina'], punctaj: 2 },
      { tip: 'identificare', enunt: '2. Numele orașului-capitală marcat cu numărul 14', raspunsCorect: 'Minsk', raspunsuriAcceptate: ['Minsk', 'minsk'], punctaj: 2 },
    ],
    
    B: [
      { tip: 'completare', enuntInainte: '1. Insulele Sicilia și Sardinia aparțin statului marcat cu litera', raspunsCorect: 'E', raspunsuriAcceptate: ['E', 'e', 'Italia', 'italia'], punctaj: 2 },
      { tip: 'completare', enuntInainte: '2. Statul marcat cu litera B se numește', raspunsCorect: 'Lituania', raspunsuriAcceptate: ['Lituania', 'lituania'], punctaj: 2 },
      { tip: 'completare', enuntInainte: '3. Orașul-capitală marcat cu numărul 9 se numește', raspunsCorect: 'Zagreb', raspunsuriAcceptate: ['Zagreb', 'zagreb'], punctaj: 2 },
    ],
    
    C: [
      { tip: 'grila', enunt: '1. Zăcăminte de petrol și gaze naturale se exploatează în statul a cărui capitală este marcată cu numărul:', variante: { a: '3', b: '4', c: '10', d: '15' }, raspunsCorect: 'd', punctaj: 2 },
      { tip: 'grila', enunt: '2. Vegetația de tundră este specifică pe țărmurile statului al cărui oraș-capitală este marcat cu numărul:', variante: { a: '1', b: '2', c: '3', d: '11' }, raspunsCorect: 'a', punctaj: 2 },
      { tip: 'grila', enunt: '3. Statul marcat cu litera D se numește:', variante: { a: 'Republica Albania', b: 'Republica Elenă (Grecia)', c: 'Republica Macedonia de Nord', d: 'Republica Serbia' }, raspunsCorect: 'c', punctaj: 2 },
      { tip: 'grila', enunt: '4. Munții Apenini se află în statul marcat cu litera:', variante: { a: 'E', b: 'F', c: 'H', d: 'I' }, raspunsCorect: 'a', punctaj: 2 },
      { tip: 'grila', enunt: '5. Orașul marcat cu numărul 13 se numește:', variante: { a: 'Helsinki', b: 'Riga', c: 'Tallinn', d: 'Vilnius' }, raspunsCorect: 'c', punctaj: 2 },
    ],
    
    D: [
      { tip: 'comparatie', enunt: 'Precizați 2 asemănări și o deosebire între clima statului H (Franța) și clima statului I (Regatul Unit)', raspunsExemplu: [
        'Asemănare: ambele state sunt sub influența vânturilor de vest dinspre Atlantic care aduc precipitații abundente',
        'Asemănare: ambele au climă temperat-oceanică în mare parte din teritoriu, cu ierni blânde și veri răcoroase',
        'Deosebire: Franța are amplitudine termică mai mare (15-18°C) datorită extinderii continentale, iar Regatul Unit are amplitudini mai mici (8-10°C) datorită poziției insulare',
      ], punctajMaxim: 6 },
    ],
    
    E: [
      { tip: 'cauza', enunt: '1. Cauză a reducerii natalității în țările Europei de Est și Sud-Est', raspunsExemplu: 'Migrația tinerelor cupluri în Europa Vestică pentru locuri de muncă mai bine plătite, scăderea nivelului de trai după 1990, schimbarea mentalității (carieră înainte de familie), creșterea costurilor pentru creșterea copiilor.', cuvinteCheie: ['migrație', 'trai', 'mentalitate', 'costuri'], punctaj: 2 },
      { tip: 'cauza', enunt: '2. Argument pentru "Viena - capitală cu acces atât la Marea Neagră cât și Marea Nordului"', raspunsExemplu: 'Viena se află pe fluviul Dunărea (varsă în Marea Neagră). Prin Canalul Dunăre-Main-Rin (deschis în 1992), Dunărea este conectată cu fluviul Rin, care se varsă în Marea Nordului - asigură astfel acces fluvial spre ambele mări.', cuvinteCheie: ['Dunărea', 'canal', 'Rin', 'fluvial'], punctaj: 2 },
    ],
  },
  
  subiectII: {
    titlu: 'Subiect II - România',
    
    A: [
      { tip: 'identificare', enunt: '1. Numele orașului marcat cu numărul 9', raspunsCorect: 'Deva', raspunsuriAcceptate: ['Deva', 'deva'], punctaj: 2 },
      { tip: 'identificare', enunt: '2. Numele râului marcat cu numărul 1', raspunsCorect: 'Timiș', raspunsuriAcceptate: ['Timiș', 'Timis', 'timis'], punctaj: 2 },
    ],
    
    B: [
      { tip: 'completare', enuntInainte: '1. În unitatea de relief marcată cu litera F se resimt influențe climatice', raspunsCorect: 'submediteraneene', raspunsuriAcceptate: ['submediteraneene', 'mediteraneene', 'submediterane'], punctaj: 2 },
      { tip: 'completare', enuntInainte: '2. Râul marcat cu numărul 4 se numește', raspunsCorect: 'Olt', raspunsuriAcceptate: ['Olt', 'olt'], punctaj: 2 },
      { tip: 'completare', enuntInainte: '3. Orașul marcat cu numărul 12 este străbătut de râul numit', raspunsCorect: 'Bistrița', raspunsuriAcceptate: ['Bistrița', 'Bistrita', 'bistrita'], punctaj: 2 },
    ],
    
    C: [
      { tip: 'grila', enunt: '1. Orașul marcat cu numărul 11 se numește:', variante: { a: 'Brașov', b: 'Focșani', c: 'Miercurea Ciuc', d: 'Sfântu Gheorghe' }, raspunsCorect: 'a', punctaj: 2 },
      { tip: 'grila', enunt: '2. Alunecări de teren se produc în unitatea de relief marcată cu litera:', variante: { a: 'B', b: 'D', c: 'E', d: 'H' }, raspunsCorect: 'd', punctaj: 2 },
      { tip: 'grila', enunt: '3. Grupa montană marcată cu litera C se numește:', variante: { a: 'Bucegi', b: 'Făgăraș', c: 'Parâng', d: 'Retezat-Godeanu' }, raspunsCorect: 'c', punctaj: 2 },
      { tip: 'grila', enunt: '4. Brațul Dunării marcat cu numărul 6 se numește:', variante: { a: 'Chilia', b: 'Sfântu Gheorghe', c: 'Sulina', d: 'Tulcea' }, raspunsCorect: 'b', punctaj: 2 },
      { tip: 'grila', enunt: '5. Soluri din clasa molisoluri (cernoziom) ocupă suprafețe întinse în unitatea marcată cu litera:', variante: { a: 'A', b: 'B', c: 'C', d: 'F' }, raspunsCorect: 'b', punctaj: 2 },
    ],
    
    D: [
      { tip: 'comparatie', enunt: 'Precizați 3 deosebiri între relieful unității A (Subcarpații Curburii) și relieful unității D (Câmpia de Vest la nord de Mureș)', raspunsExemplu: [
        'Mod de formare: A (Subcarpații Curburii) s-au format prin cutare ulterioară Carpaților, iar D (Câmpia de Vest) prin sedimentare fluvio-lacustră',
        'Altitudini: Subcarpații Curburii au 400-1000 m, iar Câmpia de Vest are 100-200 m (relief plan)',
        'Tipuri de relief: Subcarpații au alunecări de teren, structuri cutate, iar Câmpia de Vest are interfluvii largi, subsidență și loess',
      ], punctajMaxim: 6 },
    ],
    
    E: [
      { tip: 'cauza', enunt: 'Două cauze ale diversității vegetației pe teritoriul României', raspunsExemplu: 'Cauza 1: diversitatea climatică - climă temperat-continentală cu influențe oceanice (vest), submediteraneene (sud-vest), continentale (est), baltice (nord), pontice (est) - generează multiple zone și etaje de vegetație. Cauza 2: diversitatea reliefului - de la câmpii (stepă, silvostepă) la dealuri (pădure de foioase) la munți (conifere, alpină) - fiecare cu vegetație adaptată.', cuvinteCheie: ['climă', 'relief', 'etaje', 'zone'], punctaj: 4 },
    ],
  },
  
  subiectIII: {
    titlu: 'Subiect III - Lumea contemporană',
    hasDiagrama: true,
    hasTabele: true,
    
    A: [
      { tip: 'completare', enuntInainte: '1. Valoarea minimă a temperaturii medii lunare și luna', raspunsCorect: '-11°C februarie', raspunsuriAcceptate: ['-11 februarie', '-11.5 februarie', '-10.5 februarie', '-11', 'februarie'], punctaj: 2 },
      { tip: 'completare', enuntInainte: '2. Valoarea maximă a temperaturii medii lunare și luna', raspunsCorect: '13°C iulie', raspunsuriAcceptate: ['13 iulie', '12.5 iulie', '12 iulie', '13', 'iulie'], punctaj: 2 },
    ],
    
    B: [
      { tip: 'grila', enunt: '1. Amplitudinea termică este de aproximativ:', variante: { a: '2°C', b: '15°C', c: '20°C', d: '24°C' }, raspunsCorect: 'd', punctaj: 2 },
      { tip: 'grila', enunt: '2. Temperaturile mici din anotimpul de iarnă sunt determinate de masele de aer de origine:', variante: { a: 'mediteraneeană', b: 'oceanică', c: 'polară', d: 'tropicală' }, raspunsCorect: 'c', punctaj: 2 },
      { tip: 'grila', enunt: '3. Tipul de climă în care se înregistrează valorile menționate este:', variante: { a: 'mediteraneean (subtropical)', b: 'polar', c: 'subpolar', d: 'temperat-continental' }, raspunsCorect: 'c', punctaj: 2 },
    ],
    
    C: [
      { tip: 'completare', enuntInainte: '1. Trei unități de relief vecine cu Podișul Someșan', raspunsCorect: 'Câmpia de Vest', raspunsuriAcceptate: ['Câmpia de Vest', 'Munții Apuseni', 'Dealurile Crișanei', 'Câmpia Transilvaniei', 'Podișul Sucevei'], punctaj: 3 },
      { tip: 'completare', enuntInainte: '2. Modul de formare', raspunsCorect: 'sedimentare', raspunsuriAcceptate: ['sedimentare', 'epirogeneză', 'sedimentar'], punctaj: 1 },
      { tip: 'completare', enuntInainte: '3. Două tipuri de roci', raspunsCorect: 'argile', raspunsuriAcceptate: ['argile', 'gresii', 'marne', 'calcare', 'nisipuri'], punctaj: 2 },
      { tip: 'completare', enuntInainte: '4. O influență climatică', raspunsCorect: 'oceanice', raspunsuriAcceptate: ['oceanice', 'continentale', 'submediteraneene'], punctaj: 1 },
      { tip: 'completare', enuntInainte: '5. Două râuri care îl străbat sau îl limitează', raspunsCorect: 'Someșul', raspunsuriAcceptate: ['Someșul', 'Someș', 'Almașul', 'Crasna'], punctaj: 2 },
      { tip: 'completare', enuntInainte: '6. Un etaj de vegetație', raspunsCorect: 'foioase', raspunsuriAcceptate: ['foioase', 'fag', 'stejar', 'pădure'], punctaj: 1 },
    ],
    
    D: [
      { tip: 'calcul', enunt: '1. Procentul populației ocupate în agricultură în Belgia', formula: '100 - 25 - 73', raspunsCorect: 2, intervalAcceptat: [1.8, 2.2], unitate: '%', punctaj: 2 },
      { tip: 'calcul', enunt: '2. Procentul populației ocupate în Servicii în Spania', formula: '100 - 4.2 - 24', raspunsCorect: 71.8, intervalAcceptat: [71.5, 72], unitate: '%', punctaj: 2 },
      { tip: 'cauza', enunt: '3. Procentul ridicat al populației ocupate în Servicii în Franța', raspunsExemplu: 'Franța este economie dezvoltată cu sectoare puternice de Servicii: turism (cea mai vizitată țară din lume), comerț, transport, finanțe, IT, sănătate, învățământ, administrație publică. Industria și agricultura sunt mecanizate, deci absorb puțină forță de muncă.', cuvinteCheie: ['turism', 'finanțe', 'mecanizate', 'sectoare'], punctaj: 2 },
    ],
    
    E: [
      { tip: 'cauza', enunt: '1. Procentul ridicat al populației ocupate în agricultură în România', raspunsExemplu: 'Mecanizarea slabă a agriculturii, fărâmițarea proprietății agricole (multe gospodării mici cu autoconsum), nivelul redus de dezvoltare economică, lipsa industrializării rurale - mențin populație numeroasă pe sat și în agricultură.', cuvinteCheie: ['mecanizare slabă', 'fărâmițare', 'rural', 'gospodării'], punctaj: 2 },
      { tip: 'cauza', enunt: '2. Procentul mic în agricultură în Regatul Unit', raspunsExemplu: 'Mecanizare extrem de avansată (ferme mari, tractoare moderne), proprietate consolidată în exploatații mari, importuri ieftine din colonii și UE, economie dezvoltată cu accent pe industrie și servicii - reduc nevoia de forță de muncă agricolă.', cuvinteCheie: ['mecanizare', 'ferme mari', 'importuri', 'servicii'], punctaj: 2 },
    ],
  },
};
