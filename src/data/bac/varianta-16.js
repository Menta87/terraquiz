export const varianta16 = {
  id: 'varianta-16',
  nume: 'Varianta 16',
  bacSet: '2009',
  bacVariantNum: 1,
  totalPuncte: 90,
  
  subiectI: {
    titlu: 'Subiect I - Europa',
    
    A: [
      { tip: 'identificare', enunt: '1. Numele statului marcat cu litera D', raspunsCorect: 'Danemarca', raspunsuriAcceptate: ['Danemarca', 'danemarca'], punctaj: 2 },
      { tip: 'identificare', enunt: '2. Numele statului marcat cu litera G', raspunsCorect: 'Estonia', raspunsuriAcceptate: ['Estonia', 'estonia'], punctaj: 2 },
      { tip: 'identificare', enunt: '3. Numele orașului-capitală marcat cu numărul 1', raspunsCorect: 'Madrid', raspunsuriAcceptate: ['Madrid', 'madrid'], punctaj: 1 },
      { tip: 'identificare', enunt: '4. Numele orașului-capitală marcat cu numărul 4', raspunsCorect: 'Berlin', raspunsuriAcceptate: ['Berlin', 'berlin'], punctaj: 1 },
    ],
    
    B: [
      { tip: 'completare', enuntInainte: '1. Lisabona este capitala statului marcat cu litera', raspunsCorect: 'A', raspunsuriAcceptate: ['A', 'a', 'Portugalia', 'portugalia'], punctaj: 2 },
      { tip: 'completare', enuntInainte: '2. Orașul-capitală marcat cu numărul 11 se numește', raspunsCorect: 'Praga', raspunsuriAcceptate: ['Praga', 'praga'], punctaj: 2 },
      { tip: 'completare', enuntInainte: '3. Munții Penini se găsesc în statul marcat cu litera', raspunsCorect: 'C', raspunsuriAcceptate: ['C', 'c', 'Marea Britanie', 'UK', 'Regatul Unit'], punctaj: 2 },
    ],
    
    C: [
      { tip: 'grila', enunt: '1. Țărmurile cu fiorduri sunt specifice statului marcat cu litera:', variante: { a: 'A', b: 'B', c: 'F', d: 'J' }, raspunsCorect: 'c', punctaj: 2 },
      { tip: 'grila', enunt: '2. Fluviul Pad este situat în statul a cărui capitală este orașul marcat cu numărul:', variante: { a: '5', b: '9', c: '11', d: '14' }, raspunsCorect: 'b', punctaj: 2 },
      { tip: 'grila', enunt: '3. Viticultura se practică pe suprafețe întinse în statul marcat cu litera:', variante: { a: 'B', b: 'F', c: 'G', d: 'H' }, raspunsCorect: 'a', punctaj: 2 },
      { tip: 'grila', enunt: '4. Capitala Sloveniei este orașul marcat cu numărul:', variante: { a: '11', b: '12', c: '14', d: '15' }, raspunsCorect: 'd', punctaj: 2 },
      { tip: 'grila', enunt: '5. Formațiuni vegetale de tip maquis sau gariga sunt specifice pe teritoriul statului marcat cu litera:', variante: { a: 'B', b: 'C', c: 'G', d: 'H' }, raspunsCorect: 'a', punctaj: 2 },
    ],
    
    D: [
      { tip: 'comparatie', enunt: 'Precizați 3 deosebiri între clima Europei Nordice și clima Europei Sudice', raspunsExemplu: [
        'Tip de climă: în Europa Nordică sunt prezente tipurile de climă subpolar și temperat-oceanic, iar în Europa Sudică, cel subtropical (mediteranean)',
        'Temperaturi: temperatura medie anuală este mai scăzută în Europa Nordică (între -5 și +5°C), iar în Europa Sudică este de cca 15°C',
        'Influențe: în Europa Nordică apar influențe oceanice și polare, iar în Europa Sudică sunt pregnante influențele mediteraneene și nord-africane',
      ], punctajMaxim: 6 },
    ],
    
    E: [
      { tip: 'cauza', enunt: '1. Cauză a prezenței lacurilor glaciare în Peninsula Scandinavă', raspunsExemplu: 'Prezența ghețarilor cuaternari de calotă (în Pleistocen), datorită latitudinii ridicate, și a ghețarilor montani datorită reliefului - aceștia au erodat puternic relieful, formând circuri și văi glaciare care, după topire, au fost umplute cu apă formând lacurile glaciare.', cuvinteCheie: ['ghețari', 'calotă', 'latitudine', 'circuri'], punctaj: 2 },
      { tip: 'cauza', enunt: '2. Cauză a fenomenului de îmbătrânire a populației Europei', raspunsExemplu: 'Bilanțul natural negativ datorită scăderii natalității (sub 10‰), schimbării mentalității (carieră înainte de familie), emigrării tinerelor cupluri, plus creșterea speranței de viață peste 80 ani datorită nivelului ridicat de trai și sistemului medical avansat.', cuvinteCheie: ['natalitate', 'emigrare', 'speranță', 'medical'], punctaj: 2 },
    ],
  },
  
  subiectII: {
    titlu: 'Subiect II - România',
    
    A: [
      { tip: 'identificare', enunt: '1. Numele unității de relief marcată cu litera E', raspunsCorect: 'Podișul Someșan', raspunsuriAcceptate: ['Podișul Someșan', 'Someșan', 'somesan'], punctaj: 2 },
      { tip: 'identificare', enunt: '2. Numele unității de relief marcată cu litera F', raspunsCorect: 'Podișul Bârladului', raspunsuriAcceptate: ['Podișul Bârladului', 'Bârladului', 'Barladului', 'barladului'], punctaj: 2 },
      { tip: 'identificare', enunt: '3. Numele râului marcat cu numărul 8', raspunsCorect: 'Motru', raspunsuriAcceptate: ['Motru', 'motru'], punctaj: 1 },
      { tip: 'identificare', enunt: '4. Numele râului marcat cu numărul 11', raspunsCorect: 'Someșul Mic', raspunsuriAcceptate: ['Someșul Mic', 'Somesul Mic', 'somesul mic', 'Someș Mic'], punctaj: 1 },
    ],
    
    B: [
      { tip: 'completare', enuntInainte: '1. Șisturi verzi se găsesc în unitatea de relief marcată cu litera', raspunsCorect: 'C', raspunsuriAcceptate: ['C', 'c'], punctaj: 2 },
      { tip: 'completare', enuntInainte: '2. Lacuri glaciare se găsesc în unitatea de relief marcată cu litera', raspunsCorect: 'B', raspunsuriAcceptate: ['B', 'b'], punctaj: 2 },
      { tip: 'completare', enuntInainte: '3. Port la Dunăre este orașul marcat cu numărul', raspunsCorect: '5', raspunsuriAcceptate: ['5'], punctaj: 2 },
    ],
    
    C: [
      { tip: 'grila', enunt: '1. Silvostepa este prezentă în unitatea de relief marcată cu litera:', variante: { a: 'A', b: 'D', c: 'E', d: 'G' }, raspunsCorect: 'd', punctaj: 2 },
      { tip: 'grila', enunt: '2. Un important combinat siderurgic este în orașul marcat cu numărul:', variante: { a: '1', b: '4', c: '5', d: '6' }, raspunsCorect: 'd', punctaj: 2 },
      { tip: 'grila', enunt: '3. Resurse de huilă se găsesc în unitatea de relief marcată cu litera:', variante: { a: 'A', b: 'B', c: 'E', d: 'F' }, raspunsCorect: 'b', punctaj: 2 },
      { tip: 'grila', enunt: '4. Este reședința județului Sălaj orașul marcat cu numărul:', variante: { a: '2', b: '3', c: '4', d: '6' }, raspunsCorect: 'b', punctaj: 2 },
      { tip: 'grila', enunt: '5. Domuri gazeifere se întâlnesc în unitatea de relief marcată cu litera:', variante: { a: 'A', b: 'C', c: 'F', d: 'H' }, raspunsCorect: 'd', punctaj: 2 },
    ],
    
    D: [
      { tip: 'comparatie', enunt: 'Precizați 3 deosebiri între relieful Munților Apuseni și relieful Grupei Făgăraș', raspunsExemplu: [
        'Altitudini: Munții Apuseni au altitudini sub 2000 m (Vf. Bihor 1849 m), iar Grupa Făgăraș depășește 2500 m (Vf. Moldoveanu 2544 m)',
        'Relief glaciar: în Grupa Făgăraș este bine dezvoltat relieful glaciar, iar în Munții Apuseni lipsește, fiind bine reprezentat relieful carstic',
        'Fragmentare: gradul de fragmentare este mai mic în Grupa Făgăraș și mai mare în Munții Apuseni datorită prezenței "depresiunilor-golf"',
      ], punctajMaxim: 6 },
    ],
    
    E: [
      { tip: 'cauza', enunt: 'Două cauze pentru numeroasele centre ale industriei produselor lactate din Carpații Orientali', raspunsExemplu: 'Cauza 1: creșterea bovinelor pentru lapte pe baza pășunilor și fânețelor naturale extinse din zonele montane și subcarpatice ale Carpaților Orientali - pajiști de bună calitate, climă favorabilă. Cauza 2: tradițiile vechi legate de prelucrarea laptelui și obținerea unor produse renumite la nivel național (cașcaval, brânză, smântână).', cuvinteCheie: ['bovine', 'pășuni', 'tradiții', 'cașcaval'], punctaj: 4 },
    ],
  },
  
  subiectIII: {
    titlu: 'Subiect III - Italia (UE)',
    hasDiagrama: false,
    hasTabele: false,
    
    A: [
      { tip: 'cauza', enunt: 'Două caracteristici ale Italiei ca stat al Uniunii Europene', raspunsExemplu: 'Caracteristică 1: Italia este membră fondatoare a CEE/UE (1957), economie dezvoltată din G7, cu industrie puternică (auto - FIAT, modă - Milano, design). Caracteristică 2: Peninsulă mediteraneană cu 49 situri UNESCO, populație de 60 milioane locuitori, capitala Roma, monedă euro (€) din 1999.', cuvinteCheie: ['fondatoare', 'G7', 'UNESCO', 'euro'], punctaj: 4 },
    ],
    
    B: [
      { tip: 'completare', enuntInainte: '1. Numele capitalei Italiei', raspunsCorect: 'Roma', raspunsuriAcceptate: ['Roma', 'roma'], punctaj: 1 },
      { tip: 'completare', enuntInainte: '2. Două orașe importante din Italia (separate prin virgulă)', raspunsCorect: 'Milano și Torino', raspunsuriAcceptate: ['Milano', 'Torino', 'Napoli', 'Genova', 'Florența', 'Veneția', 'Bologna', 'Milano Torino', 'Milano, Torino', 'Milano Napoli', 'Napoli Florenta', 'Milano si Torino'], punctaj: 2 },
      { tip: 'completare', enuntInainte: '3. Numele monedei naționale a Italiei', raspunsCorect: 'euro', raspunsuriAcceptate: ['euro', 'EUR', 'Euro'], punctaj: 1 },
      { tip: 'completare', enuntInainte: '4. Două ramuri industriale dezvoltate în Italia (separate prin virgulă)', raspunsCorect: 'industria auto și modă', raspunsuriAcceptate: ['auto', 'modă', 'siderurgie', 'chimică', 'construcții', 'textilă', 'auto modă', 'auto, moda', 'siderurgie chimica', 'auto textila'], punctaj: 2 },
    ],
    
    C: [
      { tip: 'cauza', enunt: '1. Două avantaje economice ale Italiei ca membră UE', raspunsExemplu: 'Avantaj 1: piața comună UE permite exporturi fără bariere către 27 de state. Avantaj 2: fondurile europene structurale ajută la dezvoltarea zonelor mai puțin dezvoltate.', cuvinteCheie: ['piață', 'export', 'fonduri', 'dezvoltare'], punctaj: 4 },
      { tip: 'cauza', enunt: '2. Două dezavantaje pentru un stat membru UE', raspunsExemplu: 'Dezavantaj 1: pierderea suveranității în multe domenii. Dezavantaj 2: concurența mai puternică pentru companiile naționale plus contribuții financiare la bugetul UE.', cuvinteCheie: ['suveranitate', 'concurență', 'contribuții'], punctaj: 4 },
    ],
    
    D: [
      { tip: 'cauza', enunt: 'Două probleme actuale ale Uniunii Europene', raspunsExemplu: 'Problemă 1: criza migrației din Africa și Orientul Mijlociu pe statele de frontieră. Problemă 2: diferențele economice mari între statele vestice și estice determină migrație internă masivă.', cuvinteCheie: ['migrație', 'tensiuni', 'diferențe'], punctaj: 4 },
    ],
    
    E: [
      { tip: 'cauza', enunt: 'Două perspective ale Uniunii Europene', raspunsExemplu: 'Perspectivă 1: aprofundarea integrării politice și fiscale - uniune bancară, armată comună europeană. Perspectivă 2: tranziția ecologică (Green Deal) cu obiectivul neutralității climatice până în 2050.', cuvinteCheie: ['integrare', 'armată', 'Green Deal'], punctaj: 4 },
    ],
  },
};
