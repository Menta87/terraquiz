export const varianta5 = {
  id: 'varianta-5',
  nume: 'Varianta 5',
  testNumber: 10,
  totalPuncte: 90,
  
  subiectI: {
    titlu: 'Subiect I - Europa',
    
    A: [
      { tip: 'identificare', enunt: '1. Numele statului marcat cu litera J', raspunsCorect: 'Letonia', raspunsuriAcceptate: ['Letonia', 'letonia'], punctaj: 2 },
      { tip: 'identificare', enunt: '2. Numele orașului-capitală marcat cu numărul 14', raspunsCorect: 'Madrid', raspunsuriAcceptate: ['Madrid', 'madrid'], punctaj: 2 },
    ],
    
    B: [
      { tip: 'completare', enuntInainte: '1. Roma este orașul-capitală marcat cu numărul', raspunsCorect: '1', raspunsuriAcceptate: ['1'], punctaj: 2 },
      { tip: 'completare', enuntInainte: '2. Copenhaga este capitala statului marcat cu litera', raspunsCorect: 'B', raspunsuriAcceptate: ['B', 'b', 'Danemarca', 'danemarca'], punctaj: 2 },
      { tip: 'completare', enuntInainte: '3. Fluviile Sena și Ron (Rhône) străbat teritoriul statului marcat cu litera', raspunsCorect: 'I', raspunsuriAcceptate: ['I', 'i', 'Franța', 'Franta', 'franta'], punctaj: 2 },
    ],
    
    C: [
      { tip: 'grila', enunt: '1. Capitala statului marcat cu litera E este orașul:', variante: { a: 'Bratislava', b: 'Budapesta', c: 'Praga', d: 'Viena' }, raspunsCorect: 'c', punctaj: 2 },
      { tip: 'grila', enunt: '2. Alpii Dinarici se desfășoară pe teritoriul statului marcat cu litera:', variante: { a: 'B', b: 'C', c: 'E', d: 'I' }, raspunsCorect: 'b', punctaj: 2 },
      { tip: 'grila', enunt: '3. Vegetația de tip frigana (maquis) este specifică în statul marcat cu litera:', variante: { a: 'A', b: 'B', c: 'F', d: 'H' }, raspunsCorect: 'd', punctaj: 2 },
      { tip: 'grila', enunt: '4. Orașul marcat cu numărul 7 se numește:', variante: { a: 'Andorra la Vella', b: 'Nicosia', c: 'San Marino', d: 'Valetta' }, raspunsCorect: 'd', punctaj: 2 },
      { tip: 'grila', enunt: '5. Orașul marcat cu numărul 5 este capitala statului:', variante: { a: 'Albania', b: 'Muntenegru', c: 'Slovacia', d: 'Slovenia' }, raspunsCorect: 'd', punctaj: 2 },
    ],
    
    D: [
      { tip: 'comparatie', enunt: 'Precizați 3 deosebiri între clima statului D (Portugalia) și clima statului G (Republica Moldova)', raspunsExemplu: [
        'Tip de climă: D (Portugalia) are climă mediteraneană, iar G (Republica Moldova) climă temperat-continentală',
        'Temperaturi: Portugalia are 15-18°C medie anuală cu ierni blânde, Moldova 8-11°C cu ierni reci (-5°C)',
        'Precipitații: Portugalia 600-1500 mm concentrate iarna, veri secetoase; Moldova 400-600 mm distribuite uniform',
      ], punctajMaxim: 6 },
    ],
    
    E: [
      { tip: 'cauza', enunt: '1. Cauză a prezenței vulcanilor activi în statul F (Italia)', raspunsExemplu: 'Italia este situată la limita a două plăci tectonice (Africană și Eurasiatică). Subducția plăcii africane sub cea eurasiatică determină topirea materialului din astenosferă, generând magma vulcanilor activi (Vezuviu, Etna, Stromboli).', cuvinteCheie: ['plăci', 'subducție', 'magma', 'Africană'], punctaj: 2 },
      { tip: 'cauza', enunt: '2. Cauză a prezenței lacurilor glaciare în statul A (Norvegia)', raspunsExemplu: 'Norvegia a fost acoperită de calote glaciare în Pleistocen. Glaciațiunile au erodat puternic relieful montan, creând circuri și văi glaciare. La topirea ghețarilor, aceste depresiuni au fost umplute cu apă, formând numeroase lacuri glaciare.', cuvinteCheie: ['glaciar', 'Pleistocen', 'eroziune', 'circuri'], punctaj: 2 },
    ],
  },
  
  subiectII: {
    titlu: 'Subiect II - România',
    
    A: [
      { tip: 'identificare', enunt: '1. Numele orașului marcat cu numărul 12', raspunsCorect: 'Iași', raspunsuriAcceptate: ['Iași', 'Iasi', 'iasi'], punctaj: 2 },
      { tip: 'identificare', enunt: '2. Numele râului marcat cu numărul 6', raspunsCorect: 'Someș', raspunsuriAcceptate: ['Someș', 'Somes', 'somes'], punctaj: 2 },
    ],
    
    B: [
      { tip: 'completare', enuntInainte: '1. Munți vulcanici se găsesc în unitatea de relief marcată cu litera', raspunsCorect: 'H', raspunsuriAcceptate: ['H', 'h'], punctaj: 2 },
      { tip: 'completare', enuntInainte: '2. Râul Crișul Alb este marcat cu numărul', raspunsCorect: '5', raspunsuriAcceptate: ['5'], punctaj: 2 },
      { tip: 'completare', enuntInainte: '3. Cea mai nouă unitate de relief este marcată cu litera', raspunsCorect: 'C', raspunsuriAcceptate: ['C', 'c', 'Câmpia Română'], punctaj: 2 },
    ],
    
    C: [
      { tip: 'grila', enunt: '1. Relief glaciar și relief carstic există în unitatea de relief marcată cu litera:', variante: { a: 'B', b: 'E', c: 'F', d: 'G' }, raspunsCorect: 'd', punctaj: 2 },
      { tip: 'grila', enunt: '2. Este situat în Depresiunea Brașov orașul marcat cu numărul:', variante: { a: '8', b: '9', c: '11', d: '12' }, raspunsCorect: 'c', punctaj: 2 },
      { tip: 'grila', enunt: '3. Râurile marcate cu numerele 3 și 4:', variante: { a: 'străbat bazine carbonifere', b: 'străbat regiuni de câmpie', c: 'sunt amenajate hidroenergetic', d: 'sunt afluenți ai Oltului' }, raspunsCorect: 'c', punctaj: 2 },
      { tip: 'grila', enunt: '4. O resursă de subsol din unitatea D o constituie:', variante: { a: 'cărbunii', b: 'gazul metan', c: 'minereul de fier', d: 'petrolul' }, raspunsCorect: 'b', punctaj: 2 },
      { tip: 'grila', enunt: '5. Orașul marcat cu numărul 7 se numește:', variante: { a: 'Baia Mare', b: 'Cluj-Napoca', c: 'Oradea', d: 'Zalău' }, raspunsCorect: 'd', punctaj: 2 },
    ],
    
    D: [
      { tip: 'comparatie', enunt: 'Precizați 2 deosebiri și o asemănare între relieful unității A (Subcarpații Moldovei) și relieful unității E (Munții Poiana Ruscă)', raspunsExemplu: [
        'Deosebire (mod de formare): A (Subcarpații Moldovei) s-au format prin cutare ulterioară Carpaților, iar E (Munții Poiana Ruscă) prin orogeneza hercinică (cutare veche)',
        'Deosebire (altitudini): Subcarpații Moldovei au 400-800 m, Munții Poiana Ruscă ating 1382 m (Vf. Padeș)',
        'Asemănare: ambele unități prezintă fragmentare a reliefului prin văi adânci ale râurilor și au alunecări de teren în versanți',
      ], punctajMaxim: 6 },
    ],
    
    E: [
      { tip: 'cauza', enunt: '1. Cauză a alunecărilor de teren în Podișul Getic', raspunsExemplu: 'Podișul Getic are structură geologică din argile și marne (roci impermeabile), pante accentuate ale dealurilor și văilor, precipitații abundente și despăduriri care expun solul la eroziune - condiții ideale pentru alunecări.', cuvinteCheie: ['argile', 'pante', 'precipitații', 'despăduriri'], punctaj: 2 },
      { tip: 'cauza', enunt: '2. Factor care determină fertilitatea scăzută a solurilor în Munții Carpați', raspunsExemplu: 'Pantele accentuate determină eroziunea intensă a stratului fertil. Clima rece și umedă cu temperaturi scăzute încetinesc descompunerea materiei organice. Rocile mamă cristaline (sărace în nutrienți) și humus puțin contribuie la fertilitate redusă.', cuvinteCheie: ['eroziune', 'temperaturi', 'cristaline', 'humus'], punctaj: 2 },
    ],
  },
  
  subiectIII: {
    titlu: 'Subiect III - Lumea contemporană',
    hasDiagrama: true,
    hasTabele: true,
    
    A: [
      { tip: 'completare', enuntInainte: '1. Statul cu cea mai scăzută rată a natalității și valoarea', raspunsCorect: 'Letonia 8,5‰', raspunsuriAcceptate: ['Letonia 8.5', 'Letonia', '8.5', '8,5', 'letonia'], punctaj: 2 },
      { tip: 'completare', enuntInainte: '2. Statul cu cea mai ridicată rată a mortalității și valoarea', raspunsCorect: 'Bulgaria 14,5‰', raspunsuriAcceptate: ['Bulgaria 14.5', 'Bulgaria', '14.5', '14,5', 'bulgaria'], punctaj: 2 },
    ],
    
    B: [
      { tip: 'calcul', enunt: '1. Sporul (bilanțul) natural pentru Finlanda', formula: 'natalitate - mortalitate', raspunsCorect: 2, intervalAcceptat: [1.8, 2.2], unitate: '‰', punctaj: 2 },
      { tip: 'calcul', enunt: '2. Sporul (bilanțul) natural pentru Letonia', formula: 'natalitate - mortalitate', raspunsCorect: -4.9, intervalAcceptat: [-5, -4.8], unitate: '‰', punctaj: 2 },
      { tip: 'completare', enuntInainte: '3. Statul cu cea mai mare valoare a sporului natural', raspunsCorect: 'Spania', raspunsuriAcceptate: ['Spania', 'spania'], punctaj: 2 },
    ],
    
    C: [
      { tip: 'completare', enuntInainte: '1. Numele a 3 unități de relief vecine cu Dealurile de Vest', raspunsCorect: 'Câmpia de Vest', raspunsuriAcceptate: ['Câmpia de Vest', 'Munții Apuseni', 'Munții Banatului', 'Munții Poiana Ruscă', 'Munții Codru-Moma', 'Munții Zarand'], punctaj: 3 },
      { tip: 'completare', enuntInainte: '2. Modul de formare', raspunsCorect: 'sedimentare piemontană', raspunsuriAcceptate: ['sedimentare', 'piemontană', 'depuneri', 'sedimentare piemontană'], punctaj: 1 },
      { tip: 'completare', enuntInainte: '3. Două tipuri de roci', raspunsCorect: 'argile', raspunsuriAcceptate: ['argile', 'nisipuri', 'pietrișuri', 'marne', 'gresii'], punctaj: 2 },
      { tip: 'completare', enuntInainte: '4. Două influențe climatice', raspunsCorect: 'oceanice', raspunsuriAcceptate: ['oceanice', 'submediteraneene', 'continentale', 'mediteraneene'], punctaj: 2 },
      { tip: 'completare', enuntInainte: '5. Două orașe-reședință de județ', raspunsCorect: 'Oradea', raspunsuriAcceptate: ['Oradea', 'Zalău', 'Zalau'], punctaj: 2 },
    ],
    
    D: [
      { tip: 'calcul', enunt: '1. Diferența dintre lungimile totale ale rețelei feroviare', formula: 'Germania - Norvegia', raspunsCorect: 29422, intervalAcceptat: [29420, 29425], unitate: 'km', punctaj: 2 },
      { tip: 'cauza', enunt: '2. Două cauze care explică lungimea redusă a rețelei feroviare în Norvegia', raspunsExemplu: 'Cauza 1: Relieful montan al Alpilor Scandinaviei și prezența fjordurilor fac extrem de scump construirea de căi ferate (multe tuneluri, poduri). Cauza 2: Densitatea redusă a populației (mai puțini locuitori pe km²) și concentrarea în zone costiere reduc cererea de transport feroviar intern.', cuvinteCheie: ['relief', 'fiorduri', 'densitate', 'tuneluri'], punctaj: 4 },
    ],
    
    E: [
      { tip: 'cauza', enunt: '1. Un avantaj și un dezavantaj al producerii energiei electrice din surse neregenerabile', raspunsExemplu: 'Avantaj: producție mare, constantă și controlabilă, costuri inițiale relativ mici, tehnologie matură. Dezavantaj: emisii de CO2 și poluare, resurse epuizabile, dependență de importuri pentru multe state europene.', cuvinteCheie: ['producție', 'CO2', 'poluare', 'epuizabile'], punctaj: 2 },
      { tip: 'cauza', enunt: '2. Cauză a bilanțului migratoriu negativ în țările Europei de Est', raspunsExemplu: 'Diferențele economice mari față de Europa Vestică (salarii de 3-5 ori mai mici), lipsa locurilor de muncă bine plătite, lipsa de perspective profesionale - determină tineretul calificat să emigreze spre Germania, Italia, Spania, Marea Britanie.', cuvinteCheie: ['salarii', 'locuri', 'perspective', 'emigrare'], punctaj: 2 },
    ],
  },
};
