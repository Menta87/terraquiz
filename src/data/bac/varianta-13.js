export const varianta13 = {
  id: 'varianta-13',
  nume: 'Varianta 13',
  testNumber: 18,
  totalPuncte: 90,
  
  subiectI: {
    titlu: 'Subiect I - Europa',
    
    A: [
      { tip: 'identificare', enunt: '1. Numele statului marcat cu litera F', raspunsCorect: 'Italia', raspunsuriAcceptate: ['Italia', 'italia'], punctaj: 2 },
      { tip: 'identificare', enunt: '2. Numele orașului-capitală marcat cu numărul 13', raspunsCorect: 'Moscova', raspunsuriAcceptate: ['Moscova', 'moscova', 'Moscow'], punctaj: 2 },
    ],
    
    B: [
      { tip: 'completare', enuntInainte: '1. Atena este orașul-capitală marcat cu numărul', raspunsCorect: '8', raspunsuriAcceptate: ['8'], punctaj: 2 },
      { tip: 'completare', enuntInainte: '2. Statul marcat cu litera J se numește', raspunsCorect: 'Ucraina', raspunsuriAcceptate: ['Ucraina', 'ucraina'], punctaj: 2 },
      { tip: 'completare', enuntInainte: '3. Orașul-capitală marcat cu numărul 15 se numește', raspunsCorect: 'Stockholm', raspunsuriAcceptate: ['Stockholm', 'stockholm'], punctaj: 2 },
    ],
    
    C: [
      { tip: 'grila', enunt: '1. Orașul-port Rotterdam se află în statul marcat cu litera:', variante: { a: 'A', b: 'D', c: 'E', d: 'H' }, raspunsCorect: 'a', punctaj: 2 },
      { tip: 'grila', enunt: '2. Insula Corsica aparține statului marcat cu litera:', variante: { a: 'A', b: 'D', c: 'F', d: 'H' }, raspunsCorect: 'b', punctaj: 2 },
      { tip: 'grila', enunt: '3. Statul marcat cu litera E se numește:', variante: { a: 'Belarus', b: 'Estonia', c: 'Letonia', d: 'Lituania' }, raspunsCorect: 'a', punctaj: 2 },
      { tip: 'grila', enunt: '4. Orașul-capitală marcat cu numărul 5 se numește:', variante: { a: 'Podgorița', b: 'Sarajevo', c: 'Skopje', d: 'Tirana' }, raspunsCorect: 'b', punctaj: 2 },
      { tip: 'grila', enunt: '5. Bazinul carbonifer Silezia este localizat în statul marcat cu litera:', variante: { a: 'A', b: 'B', c: 'E', d: 'J' }, raspunsCorect: 'b', punctaj: 2 },
    ],
    
    D: [
      { tip: 'comparatie', enunt: 'Precizați 3 deosebiri între clima statului D (Franța) și clima statului G (Spania)', raspunsExemplu: [
        'Tip de climă: D (Franța) are climă temperat-oceanică (mediteraneană în sud), G (Spania) are climă mediteraneană (oceanică în NV)',
        'Temperaturi: Franța 11-15°C medie anuală, Spania 14-18°C, cu veri mai călduroase (peste 25°C)',
        'Precipitații: Franța primește 600-1000 mm distribuite uniform, Spania 300-600 mm concentrate iarna, veri secetoase',
      ], punctajMaxim: 6 },
    ],
    
    E: [
      { tip: 'cauza', enunt: 'Două argumente pentru producția mare de ulei de măsline în Spania, Italia, Grecia', raspunsExemplu: 'Argument 1: clima mediteraneană cu veri calde și uscate, ierni blânde, insolație puternică - ideal pentru cultivarea măslinilor (Olea europaea), arbore termofil rezistent la secetă. Argument 2: solurile calcaroase și relieful de dealuri din sudul peninsular permit dezvoltarea măslinilor pe versanți însoriți; tradiția milenară de cultivare și prelucrare a uleiului din antichitate.', cuvinteCheie: ['mediteraneană', 'măslin', 'calcaroase', 'tradiție'], punctaj: 4 },
    ],
  },
  
  subiectII: {
    titlu: 'Subiect II - România',
    
    A: [
      { tip: 'identificare', enunt: '1. Numele orașului marcat cu numărul 12', raspunsCorect: 'Constanța', raspunsuriAcceptate: ['Constanța', 'Constanta', 'constanta'], punctaj: 2 },
      { tip: 'identificare', enunt: '2. Numele râului marcat cu numărul 5', raspunsCorect: 'Bistrița', raspunsuriAcceptate: ['Bistrița', 'Bistrita', 'bistrita'], punctaj: 2 },
    ],
    
    B: [
      { tip: 'completare', enuntInainte: '1. Munții Bucegi se află în subunitatea de relief marcată cu litera', raspunsCorect: 'D', raspunsuriAcceptate: ['D', 'd'], punctaj: 2 },
      { tip: 'completare', enuntInainte: '2. Orașul marcat cu numărul 11 se numește', raspunsCorect: 'Galați', raspunsuriAcceptate: ['Galați', 'Galati', 'galati'], punctaj: 2 },
      { tip: 'completare', enuntInainte: '3. Râul marcat cu numărul 3 se numește', raspunsCorect: 'Olt', raspunsuriAcceptate: ['Olt', 'olt'], punctaj: 2 },
    ],
    
    C: [
      { tip: 'grila', enunt: '1. Sunt amenajate hidroenergetic râurile marcate cu numerele:', variante: { a: '1 și 2', b: '3 și 4', c: '3 și 5', d: '4 și 6' }, raspunsCorect: 'c', punctaj: 2 },
      { tip: 'grila', enunt: '2. Râul marcat cu numărul 6 se numește:', variante: { a: 'Cerna', b: 'Lotru', c: 'Motru', d: 'Timiș' }, raspunsCorect: 'd', punctaj: 2 },
      { tip: 'grila', enunt: '3. Din subsolul unității de relief marcate cu litera G se exploatează:', variante: { a: 'ape geotermale', b: 'cărbuni', c: 'gaz metan', d: 'petrol' }, raspunsCorect: 'd', punctaj: 2 },
      { tip: 'grila', enunt: '4. Orașul marcat cu numărul 7 se numește:', variante: { a: 'Bârlad', b: 'Buzău', c: 'Focșani', d: 'Slobozia' }, raspunsCorect: 'c', punctaj: 2 },
      { tip: 'grila', enunt: '5. Cele mai mari cantități de precipitații medii anuale cad în unitatea de relief marcată cu litera:', variante: { a: 'A', b: 'C', c: 'F', d: 'H' }, raspunsCorect: 'd', punctaj: 2 },
    ],
    
    D: [
      { tip: 'comparatie', enunt: 'Precizați 3 deosebiri între relieful unității E (Podișul Dobrogei) și relieful unității H (Carpații Meridionali)', raspunsExemplu: [
        'Mod de formare: E (Dobrogea) s-a format prin orogenezele hercinică și caledoniană (foarte veche), iar H prin orogeneza alpină (relativ recent)',
        'Altitudini: Podișul Dobrogei are 200-467 m (Vf. Țuțuiatu), iar Carpații Meridionali depășesc 2500 m (Vf. Moldoveanu 2544 m)',
        'Tipuri de roci: Dobrogea are roci foarte vechi (șisturi verzi, granite, cristaline), iar Carpații Meridionali au cristaline, calcare, conglomerate',
      ], punctajMaxim: 6 },
    ],
    
    E: [
      { tip: 'cauza', enunt: '1. Argument pentru "Podișul Dobrogei este cea mai veche unitate de relief"', raspunsExemplu: 'Munții Măcin (Podișul Dobrogei de Nord) s-au format în orogenezele caledoniană și hercinică (350-280 milioane ani) - cea mai veche orogeneză din România. Rocile sunt cristaline foarte vechi (șisturi verzi), erodate puternic, având aspect de coline (sub 500 m).', cuvinteCheie: ['hercinică', 'caledoniană', 'cristaline', 'erodate'], punctaj: 2 },
      { tip: 'cauza', enunt: '2. Argument pentru "Delta Dunării este o câmpie în formare prin aluvionare"', raspunsExemplu: 'Dunărea transportă peste 50 milioane tone de aluviuni anual, depuse la vărsare. Delta crește cu cca 40 m/an spre est, formând grinduri, ostroave, lacuri, prin colmatare. Acest proces continuă în prezent.', cuvinteCheie: ['aluviuni', 'grinduri', 'colmatare', 'formare'], punctaj: 2 },
    ],
  },
  
  subiectIII: {
    titlu: 'Subiect III - Lumea contemporană',
    hasDiagrama: true,
    hasTabele: true,
    
    A: [
      { tip: 'completare', enuntInainte: '1. Valoarea cea mai mică a ratei natalității și statul', raspunsCorect: 'Germania 8‰', raspunsuriAcceptate: ['Germania 8', 'Germania', '8', 'germania'], punctaj: 2 },
      { tip: 'completare', enuntInainte: '2. Valoarea cea mai mică a ratei mortalității și statul', raspunsCorect: 'Franța 8.5‰', raspunsuriAcceptate: ['Franța 8.5', 'Franța', '8.5', 'franta', 'Olanda'], punctaj: 2 },
    ],
    
    B: [
      { tip: 'calcul', enunt: '1. Bilanțul natural în Franța', formula: 'natalitate - mortalitate', raspunsCorect: 4, intervalAcceptat: [3.5, 4.5], unitate: '‰', punctaj: 2 },
      { tip: 'calcul', enunt: '2. Bilanțul natural în Germania', formula: 'natalitate - mortalitate', raspunsCorect: -2, intervalAcceptat: [-2.5, -1.5], unitate: '‰', punctaj: 2 },
      { tip: 'calcul', enunt: '3. Bilanțul natural în Ungaria', formula: 'natalitate - mortalitate', raspunsCorect: -3.5, intervalAcceptat: [-4, -3], unitate: '‰', punctaj: 2 },
    ],
    
    C: [
      { tip: 'completare', enuntInainte: '1. Unitatea majoră de relief din care face parte Podișul Bârladului', raspunsCorect: 'Podișul Moldovei', raspunsuriAcceptate: ['Podișul Moldovei', 'Moldovei', 'Pod. Moldovei'], punctaj: 1 },
      { tip: 'completare', enuntInainte: '2. Unitatea de relief vecină în sud', raspunsCorect: 'Câmpia Română', raspunsuriAcceptate: ['Câmpia Română', 'Câmpia Siretului', 'Subcarpații Curburii'], punctaj: 1 },
      { tip: 'completare', enuntInainte: '3. Un tip de roci', raspunsCorect: 'argile', raspunsuriAcceptate: ['argile', 'marne', 'nisipuri', 'gresii', 'sedimentare'], punctaj: 1 },
      { tip: 'completare', enuntInainte: '4. Un tip genetic de relief', raspunsCorect: 'structural (cueste)', raspunsuriAcceptate: ['structural', 'cueste', 'fluviatil', 'alunecări'], punctaj: 1 },
      { tip: 'completare', enuntInainte: '5. O influență climatică', raspunsCorect: 'continentale', raspunsuriAcceptate: ['continentale', 'continentală', 'baltice', 'pontice'], punctaj: 1 },
      { tip: 'completare', enuntInainte: '6. Trei râuri care îl străbat', raspunsCorect: 'Bârlad', raspunsuriAcceptate: ['Bârlad', 'Barlad', 'Prut', 'Siret', 'Vaslui', 'Bahlui'], punctaj: 3 },
      { tip: 'completare', enuntInainte: '7. O zonă sau etaj de vegetație', raspunsCorect: 'silvostepă', raspunsuriAcceptate: ['silvostepă', 'stepă', 'foioase', 'pădure'], punctaj: 1 },
      { tip: 'completare', enuntInainte: '8. Un oraș situat în această subunitate', raspunsCorect: 'Vaslui', raspunsuriAcceptate: ['Vaslui', 'Bârlad', 'Barlad', 'Huși', 'Husi'], punctaj: 1 },
    ],
    
    D: [
      { tip: 'cauza', enunt: '1. Cauză a climatului blând la 50-70° latitudine nord în vestul Europei', raspunsExemplu: 'Curentul cald al Golfului (Gulf Stream) transportă ape calde din Caraibe spre Europa de Nord-Vest. Combinat cu vânturile de vest dominante, transferă căldură atmosferei, ridicând temperaturile cu 5-10°C peste media latitudinii.', cuvinteCheie: ['Gulf Stream', 'curent', 'cald', 'vânturi'], punctaj: 2 },
      { tip: 'completare', enuntInainte: '2. Două activități economice favorizate', raspunsCorect: 'pescuit', raspunsuriAcceptate: ['pescuit', 'agricultură', 'creșterea animalelor', 'silvicultură', 'turism'], punctaj: 2 },
      { tip: 'completare', enuntInainte: '3. Un stat la această latitudine cu acest climat', raspunsCorect: 'Norvegia', raspunsuriAcceptate: ['Norvegia', 'Marea Britanie', 'Irlanda', 'Islanda', 'Suedia'], punctaj: 2 },
    ],
    
    E: [
      { tip: 'cauza', enunt: '1. Lipsa viețuitoarelor în Marea Neagră sub 200 m adâncime', raspunsExemplu: 'Sub 200 m, apele Mării Negre conțin hidrogen sulfurat (H2S) toxic, formate prin descompunerea anaerobă a materiei organice. Marea Neagră este cea mai mare mare anoxică din lume - stratificare termo-halină puternică împiedică oxigenarea apelor adânci.', cuvinteCheie: ['hidrogen sulfurat', 'anoxică', 'oxigen', 'stratificare'], punctaj: 2 },
      { tip: 'cauza', enunt: '2. Cauza precipitațiilor mai mari în vestul Europei față de est', raspunsExemplu: 'Vestul Europei e sub influența directă a vânturilor de vest dinspre Atlantic, care aduc mase de aer umede oceanice. Estul Europei e mai departe de Atlantic - aerul își pierde umiditatea pe drum, ajungând uscat - climă continentală cu precipitații reduse.', cuvinteCheie: ['vânturi', 'Atlantic', 'umidă', 'continentală'], punctaj: 2 },
    ],
  },
};
