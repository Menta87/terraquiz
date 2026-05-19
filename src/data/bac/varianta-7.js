export const varianta7 = {
  id: 'varianta-7',
  nume: 'Varianta 7',
  testNumber: 12,
  totalPuncte: 90,
  
  subiectI: {
    titlu: 'Subiect I - Europa',
    
    A: [
      { tip: 'identificare', enunt: '1. Numele statului marcat cu litera H', raspunsCorect: 'Irlanda', raspunsuriAcceptate: ['Irlanda', 'irlanda'], punctaj: 2 },
      { tip: 'identificare', enunt: '2. Numele orașului-capitală marcat cu numărul 1', raspunsCorect: 'Varșovia', raspunsuriAcceptate: ['Varșovia', 'Varsovia', 'varsovia'], punctaj: 2 },
    ],
    
    B: [
      { tip: 'completare', enuntInainte: '1. Este traversat de fluviul Dunărea orașul marcat cu numărul', raspunsCorect: '6', raspunsuriAcceptate: ['6'], punctaj: 2 },
      { tip: 'completare', enuntInainte: '2. Statul marcat cu litera B se numește', raspunsCorect: 'Slovacia', raspunsuriAcceptate: ['Slovacia', 'slovacia'], punctaj: 2 },
      { tip: 'completare', enuntInainte: '3. Capitala statului marcat cu litera C se numește', raspunsCorect: 'Atena', raspunsuriAcceptate: ['Atena', 'atena', 'Athena'], punctaj: 2 },
    ],
    
    C: [
      { tip: 'grila', enunt: '1. Zăcăminte de cărbuni și minereu de fier se exploatează în statul a cărui capitală este marcată cu numărul:', variante: { a: '9', b: '10', c: '11', d: '12' }, raspunsCorect: 'c', punctaj: 2 },
      { tip: 'grila', enunt: '2. Pădurile de conifere ocupă cea mai mare parte a statului marcat cu litera:', variante: { a: 'C', b: 'E', c: 'F', d: 'H' }, raspunsCorect: 'b', punctaj: 2 },
      { tip: 'grila', enunt: '3. O câmpie de origine fluvio-glaciară se află în nordul statului marcat cu litera:', variante: { a: 'A', b: 'D', c: 'C', d: 'I' }, raspunsCorect: 'a', punctaj: 2 },
      { tip: 'grila', enunt: '4. Tamisa traversează orașul-capitală marcat cu numărul:', variante: { a: '4', b: '8', c: '14', d: '15' }, raspunsCorect: 'a', punctaj: 2 },
      { tip: 'grila', enunt: '5. Orașul marcat cu numărul 5 se numește:', variante: { a: 'Barcelona', b: 'Lisabona', c: 'Madrid', d: 'Valletta' }, raspunsCorect: 'b', punctaj: 2 },
    ],
    
    D: [
      { tip: 'comparatie', enunt: 'Precizați 3 deosebiri între clima statului F (Islanda) și clima statului I (Spania)', raspunsExemplu: [
        'Tip de climă: F (Islanda) are climă subpolară-oceanică, iar I (Spania) climă mediteraneană (oceanică în NV)',
        'Temperaturi: Islanda 4-6°C medie anuală (iarna 0°C), Spania 14-18°C cu ierni blânde (10-12°C)',
        'Precipitații: Islanda 800-1500 mm cu zăpadă, Spania 300-1000 mm concentrate iarna, veri secetoase',
      ], punctajMaxim: 6 },
    ],
    
    E: [
      { tip: 'cauza', enunt: 'Două cauze ale diversității peisajelor agricole din Europa', raspunsExemplu: 'Cauza 1: diversitatea climatică - oceanic în vest, continental în est, mediteranean în sud, polar în nord - determină culturi diferite (citrice în sud, cereale în câmpii, păstorit în nord). Cauza 2: relieful variat - câmpii (agricultură intensivă), dealuri (viticultură, pomicultură), munți (creșterea animalelor) - generează specializări agricole regionale.', cuvinteCheie: ['climă', 'relief', 'culturi', 'specializare'], punctaj: 4 },
    ],
  },
  
  subiectII: {
    titlu: 'Subiect II - România',
    
    A: [
      { tip: 'identificare', enunt: '1. Numele orașului marcat cu numărul 9', raspunsCorect: 'Focșani', raspunsuriAcceptate: ['Focșani', 'Focsani', 'focsani'], punctaj: 2 },
      { tip: 'identificare', enunt: '2. Numele râului marcat cu numărul 1', raspunsCorect: 'Ialomița', raspunsuriAcceptate: ['Ialomița', 'Ialomita', 'ialomita'], punctaj: 2 },
    ],
    
    B: [
      { tip: 'completare', enuntInainte: '1. Cele mai mari altitudini se înregistrează în unitatea de relief marcată cu litera', raspunsCorect: 'G', raspunsuriAcceptate: ['G', 'g'], punctaj: 2 },
      { tip: 'completare', enuntInainte: '2. Este traversată de râul Jijia unitatea de relief marcată cu litera', raspunsCorect: 'F', raspunsuriAcceptate: ['F', 'f'], punctaj: 2 },
      { tip: 'completare', enuntInainte: '3. Gaz metan se exploatează din unitatea de relief marcată cu litera', raspunsCorect: 'D', raspunsuriAcceptate: ['D', 'd'], punctaj: 2 },
    ],
    
    C: [
      { tip: 'grila', enunt: '1. Grinduri s-au format în unitatea de relief marcată cu litera:', variante: { a: 'D', b: 'E', c: 'F', d: 'H' }, raspunsCorect: 'b', punctaj: 2 },
      { tip: 'grila', enunt: '2. Râul marcat cu numărul 2 se numește:', variante: { a: 'Barcău', b: 'Crișul Alb', c: 'Crișul Negru', d: 'Crișul Repede' }, raspunsCorect: 'b', punctaj: 2 },
      { tip: 'grila', enunt: '3. Minereuri auro-argentifere se extrag din unitatea de relief marcată cu litera:', variante: { a: 'A', b: 'C', c: 'D', d: 'G' }, raspunsCorect: 'a', punctaj: 2 },
      { tip: 'grila', enunt: '4. Petrol se exploatează din unitatea de relief marcată cu litera:', variante: { a: 'A', b: 'B', c: 'F', d: 'G' }, raspunsCorect: 'b', punctaj: 2 },
      { tip: 'grila', enunt: '5. Este situat într-o unitate subcarpatică orașul marcat cu numărul:', variante: { a: '7', b: '9', c: '10', d: '11' }, raspunsCorect: 'c', punctaj: 2 },
    ],
    
    D: [
      { tip: 'comparatie', enunt: 'Precizați 2 asemănări și o deosebire între relieful unității C (Câmpia de Vest la sud de Mureș) și relieful unității H (Câmpia Olteniei)', raspunsExemplu: [
        'Asemănare (mod de formare): ambele unități s-au format prin sedimentare (depuneri fluvio-lacustre)',
        'Asemănare (altitudine): ambele au altitudini reduse, sub 200 m, cu relief plan',
        'Deosebire: Câmpia de Vest are subsidență activă (lăsare), iar Câmpia Olteniei e o câmpie piemontană (slab înclinată) cu loess',
      ], punctajMaxim: 6 },
    ],
    
    E: [
      { tip: 'cauza', enunt: '1. Cauză a debitului mare al Dunării în perioada martie-iunie', raspunsExemplu: 'În martie-iunie se topesc zăpezile din Alpi, Carpați, Munții Balcanici și plouă abundent în bazinul Dunării - apele alimentează fluviul, generând debite maxime de primăvară (cca 7000 m³/s la Olteniţa).', cuvinteCheie: ['topire', 'zăpezi', 'precipitații', 'munți'], punctaj: 2 },
      { tip: 'cauza', enunt: '2. Cauză a numeroaselor centre de prelucrare a lemnului în Carpații Orientali', raspunsExemplu: 'Carpații Orientali sunt acoperiți cu păduri întinse de conifere (molid, brad) și foioase (fag) - resursă lemnoasă imensă. Aproape de exploatări s-au amplasat fabrici de cherestea (Vatra Dornei, Câmpulung, Reghin) pentru a reduce costurile de transport.', cuvinteCheie: ['conifere', 'păduri', 'cherestea', 'transport'], punctaj: 2 },
    ],
  },
  
  subiectIII: {
    titlu: 'Subiect III - Lumea contemporană',
    hasDiagrama: true,
    hasTabele: true,
    
    A: [
      { tip: 'completare', enuntInainte: '1. Cea mai mare cantitate de precipitații și luna', raspunsCorect: '235 mm octombrie', raspunsuriAcceptate: ['235 octombrie', '230 octombrie', '240 octombrie', '245 octombrie', 'octombrie', '235', '230', '240', '245'], punctaj: 2 },
      { tip: 'completare', enuntInainte: '2. Cea mai redusă cantitate de precipitații și luna', raspunsCorect: '65 mm iunie', raspunsuriAcceptate: ['65 iunie', '60 iunie', '70 iunie', 'iunie', '65', '60', '70'], punctaj: 2 },
    ],
    
    B: [
      { tip: 'grila', enunt: '1. Cantitatea cea mai mare de precipitații se înregistrează în anotimpul de:', variante: { a: 'iarna', b: 'primăvara', c: 'toamna', d: 'vara' }, raspunsCorect: 'c', punctaj: 2 },
      { tip: 'grila', enunt: '2. Repartiția pe luni a cantității de precipitații corespunde climatului:', variante: { a: 'continental', b: 'mediteraneean', c: 'polar', d: 'temperat-oceanic' }, raspunsCorect: 'b', punctaj: 2 },
      { tip: 'grila', enunt: '3. Precipitațiile sunt predominant sub forma de:', variante: { a: 'lapoviță', b: 'lapoviță și ninsoare', c: 'ploaie', d: 'ninsoare' }, raspunsCorect: 'c', punctaj: 2 },
    ],
    
    C: [
      { tip: 'completare', enuntInainte: '1. Două unități de relief vecine cu Munții Banatului și Munții Poiana Ruscă', raspunsCorect: 'Câmpia de Vest', raspunsuriAcceptate: ['Câmpia de Vest', 'Carpații Meridionali', 'Dealurile de Vest', 'Munții Apuseni', 'Munții Retezat-Godeanu'], punctaj: 2 },
      { tip: 'completare', enuntInainte: '2. Modul de formare', raspunsCorect: 'orogeneza hercinică (cutare)', raspunsuriAcceptate: ['hercinică', 'orogeneza hercinică', 'cutare', 'caledoniană'], punctaj: 1 },
      { tip: 'completare', enuntInainte: '3. Două tipuri de roci', raspunsCorect: 'șisturi cristaline', raspunsuriAcceptate: ['șisturi cristaline', 'cristaline', 'calcare', 'granite', 'gresii'], punctaj: 2 },
      { tip: 'completare', enuntInainte: '4. Un tip genetic de relief', raspunsCorect: 'carstic', raspunsuriAcceptate: ['carstic', 'structural', 'fluviatil', 'glaciar'], punctaj: 1 },
      { tip: 'completare', enuntInainte: '5. Numele unui vânt care bate', raspunsCorect: 'Coșava', raspunsuriAcceptate: ['Coșava', 'Cosava', 'cosava', 'austrul', 'foehn'], punctaj: 1 },
      { tip: 'completare', enuntInainte: '6. Un etaj de vegetație', raspunsCorect: 'foioase', raspunsuriAcceptate: ['foioase', 'fag', 'stejar', 'pădure', 'submediteraneană'], punctaj: 1 },
      { tip: 'completare', enuntInainte: '7. Două resurse naturale', raspunsCorect: 'cărbuni', raspunsuriAcceptate: ['cărbuni', 'huilă', 'minereuri', 'fier', 'minereu de fier', 'cupru'], punctaj: 2 },
    ],
    
    D: [
      { tip: 'calcul', enunt: '1. Bilanțul natural în 1977', formula: 'natalitate - mortalitate', raspunsCorect: 10.0, intervalAcceptat: [9.8, 10.2], unitate: '‰', punctaj: 2 },
      { tip: 'calcul', enunt: '2. Bilanțul natural în 1998', formula: 'natalitate - mortalitate', raspunsCorect: -1.5, intervalAcceptat: [-1.7, -1.3], unitate: '‰', punctaj: 2 },
      { tip: 'calcul', enunt: '3. Bilanțul natural în 2004', formula: 'natalitate - mortalitate', raspunsCorect: -1.9, intervalAcceptat: [-2.1, -1.7], unitate: '‰', punctaj: 2 },
    ],
    
    E: [
      { tip: 'cauza', enunt: 'Două cauze ale bilanțului natural negativ înregistrat după 1998', raspunsExemplu: 'Cauza 1: Natalitatea scăzută drastic (sub 10‰) datorită emigrării tinerelor cupluri, scăderii nivelului de trai, dificultății întemeierii unei familii, schimbării mentalității generaționale. Cauza 2: Mortalitatea ridicată (peste 11‰) datorită îmbătrânirii populației, sistemului medical deficitar, bolilor cardiovasculare și oncologice, alimentației și stilului de viață nesănătos.', cuvinteCheie: ['natalitate', 'emigrare', 'îmbătrânire', 'medical'], punctaj: 4 },
    ],
  },
};
