export const varianta12 = {
  id: 'varianta-12',
  nume: 'Varianta 12',
  testNumber: 17,
  totalPuncte: 90,
  
  subiectI: {
    titlu: 'Subiect I - Europa',
    
    A: [
      { tip: 'identificare', enunt: '1. Numele statului marcat cu litera J', raspunsCorect: 'Polonia', raspunsuriAcceptate: ['Polonia', 'polonia'], punctaj: 2 },
      { tip: 'identificare', enunt: '2. Numele orașului-capitală marcat cu numărul 7', raspunsCorect: 'București', raspunsuriAcceptate: ['București', 'Bucuresti', 'bucuresti'], punctaj: 2 },
    ],
    
    B: [
      { tip: 'completare', enuntInainte: '1. Orașul-capitală Reykjavik este marcat cu numărul', raspunsCorect: '14', raspunsuriAcceptate: ['14'], punctaj: 2 },
      { tip: 'completare', enuntInainte: '2. Cel mai mic stat din Europa (Vatican) este o enclavă pe teritoriul statului marcat cu litera', raspunsCorect: 'E', raspunsuriAcceptate: ['E', 'e', 'Italia', 'italia'], punctaj: 2 },
      { tip: 'completare', enuntInainte: '3. Capitala statului marcat cu litera G se numește', raspunsCorect: 'Madrid', raspunsuriAcceptate: ['Madrid', 'madrid'], punctaj: 2 },
    ],
    
    C: [
      { tip: 'grila', enunt: '1. Capitala statului marcat cu litera H se numește:', variante: { a: 'Riga', b: 'Tallinn', c: 'Varșovia', d: 'Vilnius' }, raspunsCorect: 'a', punctaj: 2 },
      { tip: 'grila', enunt: '2. Pe teritoriul statului marcat cu litera F se află Munții:', variante: { a: 'Alpii Scandinaviei', b: 'Alpii Dinarici', c: 'Apenini', d: 'Pirinei' }, raspunsCorect: 'a', punctaj: 2 },
      { tip: 'grila', enunt: '3. Orașul marcat cu numărul 13 este capitala statului:', variante: { a: 'Albania', b: 'Bosnia și Herțegovina', c: 'Macedonia de Nord', d: 'Muntenegru' }, raspunsCorect: 'a', punctaj: 2 },
      { tip: 'grila', enunt: '4. Cel mai mare port fluvial al Europei (Rotterdam) este situat în statul marcat cu litera:', variante: { a: 'B', b: 'E', c: 'I', d: 'J' }, raspunsCorect: 'a', punctaj: 2 },
      { tip: 'grila', enunt: '5. Câmpia Panonică se află pe teritoriul statului marcat cu litera:', variante: { a: 'A', b: 'B', c: 'D', d: 'F' }, raspunsCorect: 'c', punctaj: 2 },
    ],
    
    D: [
      { tip: 'comparatie', enunt: 'Precizați 3 deosebiri între clima statului C (Spania) și clima statului E (Italia)', raspunsExemplu: [
        'Influențe climatice: Spania are influențe oceanice pronunțate în nord, climă aridă în interior (Meseta); Italia are influențe alpine în nord, mediteraneene în sud',
        'Temperaturi: Spania are veri foarte calde în interior (peste 30°C în Meseta), Italia are veri mai moderate datorită apropierii de mare',
        'Precipitații: Spania interioară primește sub 400 mm/an (climă semiaridă), Italia primește 700-1500 mm distribuite mai uniform',
      ], punctajMaxim: 6 },
    ],
    
    E: [
      { tip: 'cauza', enunt: '1. Bilanțul natural negativ în majoritatea statelor europene', raspunsExemplu: 'Natalitatea redusă datorită schimbării mentalității (carieră înainte de familie), emigrării tinerelor cupluri, costurilor mari pentru creșterea copiilor, plus mortalitatea ridicată din cauza îmbătrânirii populației.', cuvinteCheie: ['natalitate', 'îmbătrânire', 'carieră', 'emigrare'], punctaj: 2 },
      { tip: 'cauza', enunt: '2. Pondere ridicată a energiei termice convenționale în Rusia', raspunsExemplu: 'Rusia are rezerve uriașe de gaze naturale, petrol și cărbuni (Siberia) - centralele termoelectrice sunt cea mai ieftină sursă de energie. Plus tradiția industrială sovietică și economia bazată pe combustibili fosili.', cuvinteCheie: ['gaze', 'petrol', 'cărbuni', 'Siberia'], punctaj: 2 },
    ],
  },
  
  subiectII: {
    titlu: 'Subiect II - România',
    
    A: [
      { tip: 'identificare', enunt: '1. Numele orașului marcat cu numărul 8', raspunsCorect: 'Cluj-Napoca', raspunsuriAcceptate: ['Cluj-Napoca', 'Cluj', 'cluj'], punctaj: 2 },
      { tip: 'identificare', enunt: '2. Numele râului marcat cu numărul 5', raspunsCorect: 'Mureș', raspunsuriAcceptate: ['Mureș', 'Mures', 'mures'], punctaj: 2 },
    ],
    
    B: [
      { tip: 'completare', enuntInainte: '1. Orașul marcat cu numărul 9 este străbătut de râul numit', raspunsCorect: 'Olt', raspunsuriAcceptate: ['Olt', 'olt'], punctaj: 2 },
      { tip: 'completare', enuntInainte: '2. Orașul Drobeta-Turnu Severin este marcat cu numărul', raspunsCorect: '11', raspunsuriAcceptate: ['11'], punctaj: 2 },
      { tip: 'completare', enuntInainte: '3. Râul marcat cu numărul 6 se numește', raspunsCorect: 'Dunărea', raspunsuriAcceptate: ['Dunărea', 'Dunarea', 'dunarea'], punctaj: 2 },
    ],
    
    C: [
      { tip: 'grila', enunt: '1. Peșteri și chei se găsesc în unitatea de relief marcată cu litera:', variante: { a: 'B', b: 'D', c: 'F', d: 'H' }, raspunsCorect: 'a', punctaj: 2 },
      { tip: 'grila', enunt: '2. Orașul marcat cu numărul 12 este străbătut de:', variante: { a: 'Jiu', b: 'Lotru', c: 'Motru', d: 'Olt' }, raspunsCorect: 'a', punctaj: 2 },
      { tip: 'grila', enunt: '3. Vegetația alpină este bine reprezentată în unitatea de relief marcată cu litera:', variante: { a: 'E', b: 'F', c: 'G', d: 'H' }, raspunsCorect: 'd', punctaj: 2 },
      { tip: 'grila', enunt: '4. Râul marcat cu numărul 3 se numește:', variante: { a: 'Bârlad', b: 'Buzău', c: 'Siret', d: 'Trotuș' }, raspunsCorect: 'c', punctaj: 2 },
      { tip: 'grila', enunt: '5. Munți vulcanici se găsesc în unitatea de relief marcată cu litera:', variante: { a: 'A', b: 'C', c: 'E', d: 'G' }, raspunsCorect: 'a', punctaj: 2 },
    ],
    
    D: [
      { tip: 'comparatie', enunt: 'Precizați 3 deosebiri între relieful unității G (Câmpia Română) și relieful unității H (Carpații Meridionali)', raspunsExemplu: [
        'Mod de formare: G (Câmpia Română) prin sedimentare fluvio-lacustră, iar H (Carpații Meridionali) prin orogeneza alpină (cutare)',
        'Altitudini: Câmpia Română 10-300 m, Carpații Meridionali peste 2500 m (Vf. Moldoveanu 2544 m)',
        'Tipuri de relief: Câmpia Română are relief plan cu loess, crovuri și grinduri, iar Carpații Meridionali au relief glaciar și alpin',
      ], punctajMaxim: 6 },
    ],
    
    E: [
      { tip: 'cauza', enunt: 'Două cauze care explică debitul scăzut al râului 2 (Bârlad)', raspunsExemplu: 'Cauza 1: izvorăște din Podișul Bârladului cu altitudini reduse (sub 500 m) - bazin hidrografic mic, fără izvoare montane. Cauza 2: clima temperat-continentală cu precipitații reduse (400-500 mm/an) în estul țării și veri secetoase determină alimentare modestă.', cuvinteCheie: ['bazin', 'altitudini', 'continentală', 'precipitații'], punctaj: 4 },
    ],
  },
  
  subiectIII: {
    titlu: 'Subiect III - Lumea contemporană',
    hasDiagrama: true,
    hasTabele: true,
    
    A: [
      { tip: 'completare', enuntInainte: '1. Valoarea maximă a temperaturii medii lunare și luna', raspunsCorect: '20°C iulie', raspunsuriAcceptate: ['20 iulie', '19 iulie', '21 iulie', 'iulie', '20'], punctaj: 2 },
      { tip: 'completare', enuntInainte: '2. Valoarea minimă a temperaturii medii lunare și luna', raspunsCorect: '-6°C ianuarie', raspunsuriAcceptate: ['-6 ianuarie', '-5 ianuarie', '-7 ianuarie', 'ianuarie', '-6'], punctaj: 2 },
    ],
    
    B: [
      { tip: 'calcul', enunt: '1. Amplitudinea termică medie anuală', formula: 'max - min', raspunsCorect: 26, intervalAcceptat: [25, 27], unitate: '°C', punctaj: 2 },
      { tip: 'cauza', enunt: '2. Explicați valoarea ridicată a amplitudinii termice', raspunsExemplu: 'Kiev se află în Câmpia Europei de Est, departe de oceanele moderatoare. Clima temperat-continentală cu influențe puternice de uscat - aerul continental se încălzește puternic vara (peste 30°C) și se răcește iarna (-15°C), generând amplitudini mari.', cuvinteCheie: ['continentală', 'uscat', 'oceane', 'aer'], punctaj: 2 },
      { tip: 'completare', enuntInainte: '3. Tipul de climă al orașului Kiev', raspunsCorect: 'temperat-continentală', raspunsuriAcceptate: ['temperat-continentală', 'continentală', 'temperat continentală'], punctaj: 2 },
    ],
    
    C: [
      { tip: 'completare', enuntInainte: '1. Două orogeneze ale Masivului Dobrogei de Nord', raspunsCorect: 'hercinică', raspunsuriAcceptate: ['hercinică', 'caledoniană', 'kimerică'], punctaj: 2 },
      { tip: 'completare', enuntInainte: '2. Două tipuri de roci', raspunsCorect: 'șisturi verzi', raspunsuriAcceptate: ['șisturi verzi', 'șisturi', 'granite', 'cristaline', 'cuarțite', 'roci magmatice'], punctaj: 2 },
      { tip: 'completare', enuntInainte: '3. Numele unei subdiviziuni', raspunsCorect: 'Munții Măcin', raspunsuriAcceptate: ['Munții Măcin', 'Măcin', 'Podișul Babadag', 'Podișul Tulcei', 'Dealurile Tulcei'], punctaj: 1 },
      { tip: 'completare', enuntInainte: '4. O influență climatică', raspunsCorect: 'pontice', raspunsuriAcceptate: ['pontice', 'continentale', 'submediteraneene'], punctaj: 1 },
      { tip: 'completare', enuntInainte: '5. Un tip genetic de lac', raspunsCorect: 'limane fluviatile', raspunsuriAcceptate: ['limane fluviatile', 'limane', 'lagune', 'lac Razim', 'Razim'], punctaj: 1 },
      { tip: 'completare', enuntInainte: '6. O zonă de vegetație', raspunsCorect: 'silvostepă', raspunsuriAcceptate: ['silvostepă', 'stepă', 'foioase'], punctaj: 1 },
      { tip: 'completare', enuntInainte: '7. O clasă sau un tip de sol', raspunsCorect: 'molisoluri (cernoziom)', raspunsuriAcceptate: ['molisoluri', 'cernoziom', 'soluri bălane'], punctaj: 1 },
      { tip: 'completare', enuntInainte: '8. Cel mai mare oraș ca număr de locuitori', raspunsCorect: 'Tulcea', raspunsuriAcceptate: ['Tulcea', 'tulcea'], punctaj: 1 },
    ],
    
    D: [
      { tip: 'completare', enuntInainte: '1. Statul cu cea mai mare pondere a sectorului terțiar', raspunsCorect: 'Franța', raspunsuriAcceptate: ['Franța', 'Franta', 'franta'], punctaj: 2 },
      { tip: 'completare', enuntInainte: '2. Statul cu cea mai mică pondere a sectorului terțiar', raspunsCorect: 'Bulgaria', raspunsuriAcceptate: ['Bulgaria', 'bulgaria'], punctaj: 2 },
      { tip: 'completare', enuntInainte: '3. Statul cu cea mai mică pondere a populației ocupate în sectorul primar', raspunsCorect: 'Slovenia', raspunsuriAcceptate: ['Slovenia', 'slovenia'], punctaj: 2 },
    ],
    
    E: [
      { tip: 'cauza', enunt: '1. Cauză a ponderii ridicate a populației ocupate în sectorul primar în Bulgaria', raspunsExemplu: 'Bulgaria are economie mai puțin dezvoltată, mecanizare slabă a agriculturii, proprietate agricolă fărâmițată cu multe gospodării mici. Industrializarea redusă a forțat populația să rămână la sat și în agricultură.', cuvinteCheie: ['economie', 'mecanizare', 'fărâmițată', 'rural'], punctaj: 2 },
      { tip: 'cauza', enunt: '2. Cauză a ponderii scăzute în sectorul primar în Franța', raspunsExemplu: 'Franța are agricultură extrem de mecanizată (cea mai mare suprafață arabilă din UE), ferme mari cu productivitate ridicată, economie dezvoltată cu sectoare puternice de servicii și industrie care absorb forța de muncă.', cuvinteCheie: ['mecanizată', 'ferme', 'servicii', 'productivitate'], punctaj: 2 },
    ],
  },
};
