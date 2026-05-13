export const varianta2 = {
  id: 'varianta-2',
  nume: 'Varianta 2',
  an: 2009,
  totalPuncte: 90,
  
  subiectI: {
    titlu: 'Subiect I - Europa',
    harta: 'Test_6',
    
    A: [
      { tip: 'identificare', enunt: '1. Numele statului marcat cu litera C', raspunsCorect: 'Italia', raspunsuriAcceptate: ['italia', 'Italia'], punctaj: 2 },
      { tip: 'identificare', enunt: '2. Numele statului marcat cu litera D', raspunsCorect: 'Spania', raspunsuriAcceptate: ['spania', 'Spania'], punctaj: 2 },
      { tip: 'identificare', enunt: '3. Numele orașului-capitală marcat cu numărul 7', raspunsCorect: 'Londra', raspunsuriAcceptate: ['londra', 'Londra'], punctaj: 2 },
      { tip: 'identificare', enunt: '4. Numele orașului-capitală marcat cu numărul 12', raspunsCorect: 'Atena', raspunsuriAcceptate: ['atena', 'Atena'], punctaj: 2 },
    ],
    
    B: [
      { tip: 'completare', enuntInainte: '1. Munții Alpi se găsesc în nordul statului marcat cu litera', raspunsCorect: 'C', raspunsuriAcceptate: ['C', 'c', 'Italia', 'italia'], punctaj: 2 },
      { tip: 'completare', enuntInainte: '2. Podișul Meseta este situat în statul marcat cu litera', raspunsCorect: 'D', raspunsuriAcceptate: ['D', 'd', 'Spania', 'spania'], punctaj: 2 },
      { tip: 'completare', enuntInainte: '3. Climatul rece este caracteristic în statul marcat cu litera', raspunsCorect: 'J', raspunsuriAcceptate: ['J', 'j', 'Finlanda', 'finlanda'], punctaj: 2 },
    ],
    
    C: [
      { tip: 'grila', enunt: '1. Este situat într-un stat insular orașul-capitală marcat cu numărul:', variante: { a: '2', b: '3', c: '14', d: '15' }, raspunsCorect: 'b', punctaj: 2 },
      { tip: 'grila', enunt: '2. Sunt traversate de Dunăre orașele-capitală marcate cu numerele:', variante: { a: '1 și 5', b: '6 și 9', c: '9 și 14', d: '1 și 13' }, raspunsCorect: 'd', punctaj: 2 },
      { tip: 'grila', enunt: '3. Stepa se dezvoltă în statul marcat cu litera:', variante: { a: 'A', b: 'E', c: 'H', d: 'G' }, raspunsCorect: 'c', punctaj: 2 },
      { tip: 'grila', enunt: '4. Podișul Boemiei este situat în statul marcat cu litera:', variante: { a: 'C', b: 'E', c: 'G', d: 'H' }, raspunsCorect: 'b', punctaj: 2 },
      { tip: 'grila', enunt: '5. Statul San Marino este o enclavă în cadrul statului marcat cu litera:', variante: { a: 'A', b: 'C', c: 'D', d: 'I' }, raspunsCorect: 'b', punctaj: 2 },
    ],
    
    D: [
      { tip: 'comparatie', enunt: 'Precizați 2 deosebiri și o asemănare între relieful Munților Alpi și relieful Munților Scandinaviei', raspunsExemplu: [
        'Deosebire: Munții Alpi s-au format în orogeneza alpină, iar Munții Scandinaviei în orogeneza caledoniană',
        'Deosebire: altitudinea maximă în Munții Alpi ajunge la 4807 m (Vf. Mont Blanc), iar în Munții Scandinaviei la 2469 m (Vf. Galdhopiggen)',
        'Asemănare: prezența reliefului glaciar în ambele unități montane (circuri glaciare, văi în U)',
      ], punctajMaxim: 6 },
    ],
    
    E: [
      { tip: 'cauza', enunt: '1. Prezentați o cauză a prezenței ghețarilor actuali în Munții Pirinei', raspunsExemplu: 'Altitudinile ridicate de peste 3000 m (Pic Aneto - 3404 m) creează condiții pentru menținerea zăpezii și formarea ghețarilor permanenți.', cuvinteCheie: ['altitudine', '3000', 'zăpadă'], punctaj: 2 },
      { tip: 'cauza', enunt: '2. Prezentați o cauză a scăderii precipitațiilor din vest spre est în Europa', raspunsExemplu: 'Circulația predominant vestică a maselor de aer încărcate cu umiditate dinspre Atlantic; intensitatea vânturilor de vest scade de la vest la est, iar continentalitatea crește.', cuvinteCheie: ['circulație', 'vest', 'mase de aer', 'continentalitate'], punctaj: 2 },
    ],
  },
  
  subiectII: {
    titlu: 'Subiect II - România',
    harta: 'Test_6',
    
    A: [
      { tip: 'identificare', enunt: '1. Numele unității de relief marcate cu litera B', raspunsCorect: 'Munții Apuseni', raspunsuriAcceptate: ['Munții Apuseni', 'apuseni', 'muntii apuseni'], punctaj: 2 },
      { tip: 'identificare', enunt: '2. Numele unității de relief marcate cu litera D', raspunsCorect: 'Podișul Getic', raspunsuriAcceptate: ['Podișul Getic', 'getic', 'Piemontul Getic'], punctaj: 2 },
      { tip: 'identificare', enunt: '3. Numele orașului marcat cu numărul 1', raspunsCorect: 'Timișoara', raspunsuriAcceptate: ['Timișoara', 'timisoara'], punctaj: 2 },
      { tip: 'identificare', enunt: '4. Numele orașului marcat cu numărul 6', raspunsCorect: 'Brașov', raspunsuriAcceptate: ['Brașov', 'brasov'], punctaj: 2 },
    ],
    
    B: [
      { tip: 'completare', enuntInainte: '1. Lacul vulcanic Sf. Ana este situat în unitatea de relief marcată cu litera', raspunsCorect: 'H', raspunsuriAcceptate: ['H', 'h', 'Carpații Orientali'], punctaj: 2 },
      { tip: 'completare', enuntInainte: '2. Cel mai important centru siderurgic este orașul marcat cu numărul', raspunsCorect: '4', raspunsuriAcceptate: ['4'], punctaj: 2 },
      { tip: 'completare', enuntInainte: '3. Lacuri glaciare se găsesc în unitatea de relief marcată cu litera', raspunsCorect: 'E', raspunsuriAcceptate: ['E', 'e', 'Carpații Meridionali'], punctaj: 2 },
    ],
    
    C: [
      { tip: 'grila', enunt: '1. Stepa se întâlnește în unitatea de relief marcată cu litera:', variante: { a: 'C', b: 'D', c: 'E', d: 'G' }, raspunsCorect: 'd', punctaj: 2 },
      { tip: 'grila', enunt: '2. Este situat într-o unitate de câmpie orașul marcat cu numărul:', variante: { a: '1', b: '2', c: '3', d: '6' }, raspunsCorect: 'a', punctaj: 2 },
      { tip: 'grila', enunt: '3. Este un piemont unitatea de relief notată cu litera:', variante: { a: 'A', b: 'D', c: 'G', d: 'F' }, raspunsCorect: 'b', punctaj: 2 },
      { tip: 'grila', enunt: '4. Influențe climatice oceanice pătrund în unitatea de relief notată cu litera:', variante: { a: 'A', b: 'B', c: 'D', d: 'G' }, raspunsCorect: 'b', punctaj: 2 },
      { tip: 'grila', enunt: '5. Importante resurse de lignit se găsesc în unitatea de relief notată cu litera:', variante: { a: 'B', b: 'D', c: 'E', d: 'F' }, raspunsCorect: 'b', punctaj: 2 },
    ],
    
    D: [
      { tip: 'comparatie', enunt: 'Precizați 3 deosebiri între relieful Munților Banatului și relieful Grupei Nordice a Carpaților Orientali', raspunsExemplu: [
        'Roci: Munții Banatului s-au format pe roci predominant cristaline și sedimentare (calcare), iar Grupa Nordică a Carpaților Orientali pe roci cristaline, vulcanice și sedimentare cutate (fliș)',
        'Altitudini: Munții Banatului au altitudinea maximă de 1446 m (Munții Semenic), iar Grupa Nordică ajunge la 2303 m (Munții Rodnei)',
        'Dispunere: Munții Banatului au două sectoare (unul în est mai înalt, altul în vest fragmentat), iar Grupa Nordică se dispune sub formă de trei șiruri paralele orientate NV-SE',
      ], punctajMaxim: 6 },
    ],
    
    E: [
      { tip: 'cauza', enunt: '1. Prezentați o cauză a densității reduse a populației în Munții Carpați', raspunsExemplu: 'Carpații, prin altitudini ridicate, temperaturi scăzute, precipitații abundente, durata mare a perioadei de îngheț, pantele abrupte și stratul subțire de sol, determină condiții puțin favorabile pentru așezările umane.', cuvinteCheie: ['altitudine', 'temperaturi', 'pante', 'sol'], punctaj: 2 },
      { tip: 'cauza', enunt: '2. Prezentați o cauză a precipitațiilor mai mari în vestul țării', raspunsExemplu: 'La latitudinea României, mișcarea generală a aerului se produce de la vest spre est, aducând mase de aer umede din Atlantic. Carpații formează o barieră, iar influențele oceanice nu depășesc Carpații Orientali.', cuvinteCheie: ['vest', 'mase aer', 'Atlantic', 'barieră'], punctaj: 2 },
    ],
  },
  
  subiectIII: {
    titlu: 'Subiect III - Lumea contemporană',
    
    A: [
      { tip: 'identificare', enunt: '1. Valoarea maximă a densității și statul', raspunsCorect: '1280 Malta', raspunsuriAcceptate: ['1280 Malta', 'Malta', '1280', 'malta'], punctaj: 2 },
      { tip: 'identificare', enunt: '2. Valoarea minimă a densității și statul', raspunsCorect: '10 Finlanda', raspunsuriAcceptate: ['10 Finlanda', 'Finlanda', '10', 'finlanda'], punctaj: 2 },
    ],
    
    B: [
      { tip: 'completare', enuntInainte: '1. Pentru Finlanda, argumentul care explică densitatea este', raspunsCorect: '1', raspunsuriAcceptate: ['1', 'climat rece', 'păduri'], punctaj: 2 },
      { tip: 'completare', enuntInainte: '2. Pentru Olanda, argumentul care explică densitatea este', raspunsCorect: '2', raspunsuriAcceptate: ['2', 'relief jos', 'urbanizare'], punctaj: 2 },
      { tip: 'completare', enuntInainte: '3. Pentru Malta, argumentul care explică densitatea este', raspunsCorect: '4', raspunsuriAcceptate: ['4', 'suprafață mică'], punctaj: 2 },
    ],
    
    C: [
      { tip: 'completare', enuntInainte: '1. Pentru Regatul Unit: o unitate de relief este', raspunsCorect: 'Munții Grampian', raspunsuriAcceptate: ['Munții Grampian', 'Grampian', 'Munții Penini', 'Penini'], punctaj: 2 },
      { tip: 'completare', enuntInainte: '2. Pentru Regatul Unit: un râu este', raspunsCorect: 'Tamisa', raspunsuriAcceptate: ['Tamisa', 'tamisa', 'Severn', 'severn'], punctaj: 2 },
      { tip: 'completare', enuntInainte: '3. Pentru Regatul Unit: o resursă de subsol este', raspunsCorect: 'cărbuni', raspunsuriAcceptate: ['cărbuni', 'petrol', 'gaze naturale'], punctaj: 2 },
      { tip: 'completare', enuntInainte: '4. Pentru Regatul Unit: un oraș mare (altul decât capitala) este', raspunsCorect: 'Liverpool', raspunsuriAcceptate: ['Liverpool', 'Manchester', 'Leeds', 'Birmingham', 'Glasgow'], punctaj: 2 },
      { tip: 'completare', enuntInainte: '5. Pentru Regatul Unit: o ramură industrială este', raspunsCorect: 'aeronautică', raspunsuriAcceptate: ['aeronautică', 'textilă', 'chimică', 'auto'], punctaj: 2 },
    ],
    
    D: [
      { tip: 'comparatie', enunt: 'Precizați 2 asemănări și o deosebire între cadrul natural al Serbiei și cel al Ungariei', raspunsExemplu: [
        'Asemănare: în ambele state relieful este variat, cuprinzând toate treptele: câmpii, podișuri, munți',
        'Asemănare: cea mai importantă arteră hidrografică din Serbia și din Ungaria este fluviul Dunărea',
        'Deosebire: clima Serbiei este temperat-continentală cu influențe mediteraneene, iar clima Ungariei este temperat-continentală cu influențe oceanice',
      ], punctajMaxim: 6 },
    ],
    
    E: [
      { tip: 'cauza', enunt: '1. Prima sursă de energie nepoluantă', raspunsExemplu: 'Energia eoliană (vântul), produsă de turbine eoliene în zonele cu vânt constant (țărmuri, podișuri).', cuvinteCheie: ['eoliană', 'vânt'], punctaj: 1 },
      { tip: 'cauza', enunt: '2. A doua sursă de energie nepoluantă', raspunsExemplu: 'Energia solară (panouri fotovoltaice), energia mareelor (țărmuri oceanice), energia geotermală (Islanda).', cuvinteCheie: ['solară', 'mareelor', 'geotermală'], punctaj: 3 },
    ],
  },
};
