export const varianta17 = {
  id: 'varianta-17',
  nume: 'Varianta 17',
  bacSet: '2009',
  bacVariantNum: 2,
  totalPuncte: 90,
  
  subiectI: {
    titlu: 'Subiect I - Europa',
    
    A: [
      { tip: 'identificare', enunt: '1. Numele statului marcat cu litera C', raspunsCorect: 'Italia', raspunsuriAcceptate: ['Italia', 'italia'], punctaj: 2 },
      { tip: 'identificare', enunt: '2. Numele statului marcat cu litera D', raspunsCorect: 'Spania', raspunsuriAcceptate: ['Spania', 'spania'], punctaj: 2 },
      { tip: 'identificare', enunt: '3. Numele orașului-capitală marcat cu numărul 7', raspunsCorect: 'Londra', raspunsuriAcceptate: ['Londra', 'londra'], punctaj: 1 },
      { tip: 'identificare', enunt: '4. Numele orașului-capitală marcat cu numărul 12', raspunsCorect: 'Atena', raspunsuriAcceptate: ['Atena', 'atena'], punctaj: 1 },
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
        'Deosebire (mod de formare): Munții Alpi s-au format în orogeneza alpină, iar Munții Scandinaviei în orogeneza caledoniană',
        'Deosebire (altitudini): altitudinea maximă în Munții Alpi ajunge la 4807 m (Mont Blanc), iar în Munții Scandinaviei la 2469 m (Galdhopiggen)',
        'Asemănare: prezența reliefului glaciar în ambele unități montane',
      ], punctajMaxim: 6 },
    ],
    
    E: [
      { tip: 'cauza', enunt: '1. Cauză a prezenței ghețarilor actuali în Munții Pirinei', raspunsExemplu: 'Altitudinile de peste 3000 m (Pic dAneto 3404 m) care depășesc limita zăpezilor perene la latitudinea respectivă, permițând acumularea zăpezilor și formarea ghețarilor montani actuali.', cuvinteCheie: ['altitudini', '3000', 'zăpezi', 'perene'], punctaj: 2 },
      { tip: 'cauza', enunt: '2. Cauză a scăderii cantității de precipitații din vestul spre estul Europei', raspunsExemplu: 'Circulația predominant vestică a maselor de aer dinspre Oceanul Atlantic - vânturile de vest aduc precipitații abundente în vest, dar își pierd umiditatea spre est, iar continentalitatea crește.', cuvinteCheie: ['vestică', 'vânturi', 'umiditate', 'continentalitate'], punctaj: 2 },
    ],
  },
  
  subiectII: {
    titlu: 'Subiect II - România',
    
    A: [
      { tip: 'identificare', enunt: '1. Numele unității de relief marcată cu litera B', raspunsCorect: 'Munții Apuseni', raspunsuriAcceptate: ['Munții Apuseni', 'Apuseni', 'apuseni'], punctaj: 2 },
      { tip: 'identificare', enunt: '2. Numele unității de relief marcată cu litera D', raspunsCorect: 'Podișul Getic', raspunsuriAcceptate: ['Podișul Getic', 'Getic', 'Piemontul Getic', 'getic'], punctaj: 2 },
      { tip: 'identificare', enunt: '3. Numele orașului marcat cu numărul 1', raspunsCorect: 'Timișoara', raspunsuriAcceptate: ['Timișoara', 'Timisoara', 'timisoara'], punctaj: 1 },
      { tip: 'identificare', enunt: '4. Numele orașului marcat cu numărul 6', raspunsCorect: 'Brașov', raspunsuriAcceptate: ['Brașov', 'Brasov', 'brasov'], punctaj: 1 },
    ],
    
    B: [
      { tip: 'completare', enuntInainte: '1. Lacul vulcanic Sf. Ana este situat în unitatea de relief marcată cu litera', raspunsCorect: 'H', raspunsuriAcceptate: ['H', 'h'], punctaj: 2 },
      { tip: 'completare', enuntInainte: '2. Cel mai important centru siderurgic este orașul marcat cu numărul', raspunsCorect: '4', raspunsuriAcceptate: ['4'], punctaj: 2 },
      { tip: 'completare', enuntInainte: '3. Lacuri glaciare se găsesc în unitatea de relief marcată cu litera', raspunsCorect: 'E', raspunsuriAcceptate: ['E', 'e'], punctaj: 2 },
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
        'Tipuri de roci: Munții Banatului - roci cristaline și sedimentare (calcare); Grupa Nordică - roci cristaline, vulcanice și sedimentare cutate (fliș)',
        'Altitudini: Munții Banatului 1446 m (Munții Semenic); Grupa Nordică 2303 m (Munții Rodnei)',
        'Relief specific: în Munții Banatului este dezvoltat relieful carstic, iar în Grupa Nordică este prezent relieful glaciar',
      ], punctajMaxim: 6 },
    ],
    
    E: [
      { tip: 'cauza', enunt: '1. Cauză a densității reduse a populației în Munții Carpați', raspunsExemplu: 'Altitudinile ridicate, temperaturile scăzute, precipitațiile abundente, durata mare a perioadei de îngheț, pantele abrupte, stratul subțire de sol - toate determină condiții puțin favorabile pentru așezări umane.', cuvinteCheie: ['altitudini', 'temperaturi', 'pante', 'sol'], punctaj: 2 },
      { tip: 'cauza', enunt: '2. Cauză a precipitațiilor mai mari în partea vestică față de cea estică', raspunsExemplu: 'La latitudinea României, mișcarea generală a aerului se produce preponderent de la vest spre est. Aceasta determină repartiția descrescătoare a precipitațiilor de la vest la est. Relieful (Carpații) constituie barieră în calea maselor de aer oceanice.', cuvinteCheie: ['vest', 'oceanic', 'barieră', 'Carpați'], punctaj: 2 },
    ],
  },
  
  subiectIII: {
    titlu: 'Subiect III - Densitatea populației Europa 2005',
    hasDiagrama: true,
    hasTabele: false,
    
    A: [
      { tip: 'completare', enuntInainte: '1. Valoarea maximă a densității populației și statul', raspunsCorect: '1280 loc/km² Malta', raspunsuriAcceptate: ['1280 Malta', 'Malta', '1280', 'malta'], punctaj: 2 },
      { tip: 'completare', enuntInainte: '2. Valoarea minimă a densității populației și statul', raspunsCorect: '10 loc/km² Finlanda', raspunsuriAcceptate: ['10 Finlanda', 'Finlanda', '10', 'finlanda'], punctaj: 2 },
    ],
    
    B: [
      { tip: 'grila', enunt: '1. Argumentul care explică densitatea populației Olandei:', variante: { a: 'climat rece, păduri și lacuri', b: 'relief jos, climat temperat-oceanic, grad ridicat de urbanizare', c: 'relief muntos și climă tropicală', d: 'suprafață extrem de mică' }, raspunsCorect: 'b', punctaj: 2 },
      { tip: 'grila', enunt: '2. Argumentul care explică densitatea populației Finlandei:', variante: { a: 'climat rece, păduri și lacuri', b: 'relief jos, climat temperat-oceanic, grad ridicat de urbanizare', c: 'relief muntos și climă tropicală', d: 'suprafață extrem de mică' }, raspunsCorect: 'a', punctaj: 2 },
      { tip: 'grila', enunt: '3. Argumentul care explică densitatea populației Maltei:', variante: { a: 'climat rece, păduri și lacuri', b: 'relief jos, climat temperat-oceanic, grad ridicat de urbanizare', c: 'relief muntos și climă tropicală', d: 'suprafață extrem de mică' }, raspunsCorect: 'd', punctaj: 2 },
    ],
    
    C: [
      { tip: 'completare', enuntInainte: '1. Două unități de relief din Regatul Unit (separate prin virgulă)', raspunsCorect: 'Munții Grampian și Munții Penini', raspunsuriAcceptate: ['Munții Grampian', 'Grampian', 'Munții Penini', 'Penini', 'Câmpia Londrei', 'Grampian Penini', 'Grampian, Penini', 'Penini Londrei', 'Grampian si Penini'], punctaj: 2 },
      { tip: 'completare', enuntInainte: '2. Un râu sau fluviu din Regatul Unit', raspunsCorect: 'Tamisa', raspunsuriAcceptate: ['Tamisa', 'tamisa', 'Severn'], punctaj: 1 },
      { tip: 'completare', enuntInainte: '3. Două resurse ale subsolului (separate prin virgulă)', raspunsCorect: 'cărbuni și petrol', raspunsuriAcceptate: ['cărbuni', 'petrol', 'gaze naturale', 'minereu de fier', 'cărbuni petrol', 'carbuni petrol', 'carbuni gaze', 'petrol gaze'], punctaj: 2 },
      { tip: 'completare', enuntInainte: '4. Două orașe mari, altele decât capitala (separate prin virgulă)', raspunsCorect: 'Liverpool și Manchester', raspunsuriAcceptate: ['Liverpool', 'Leeds', 'Manchester', 'Birmingham', 'Glasgow', 'Edinburgh', 'Liverpool Manchester', 'Manchester Birmingham', 'Leeds Glasgow'], punctaj: 2 },
      { tip: 'completare', enuntInainte: '5. Trei ramuri industriale (separate prin virgulă)', raspunsCorect: 'aeronautică, textilă și chimică', raspunsuriAcceptate: ['aeronautică', 'textilă', 'chimică', 'auto', 'siderurgică', 'navală', 'aeronautica textila chimica', 'aeronautica auto siderurgica', 'aeronautica textila auto'], punctaj: 3 },
    ],
    
    D: [
      { tip: 'comparatie', enunt: 'Comparați cadrul natural al Serbiei cu cel al Ungariei (2 asemănări și o deosebire)', raspunsExemplu: [
        'Asemănare: în Serbia și Ungaria relieful este variat - câmpii, podișuri, munți',
        'Asemănare: cea mai importantă arteră hidrografică din ambele state este fluviul Dunărea',
        'Deosebire: clima Serbiei este temperat-continentală cu influențe mediteraneene, iar Ungariei este temperat-continentală cu influențe oceanice',
      ], punctajMaxim: 6 },
    ],
    
    E: [
      { tip: 'completare', enuntInainte: 'Patru surse de energie nepoluantă utilizate de UE (separate prin virgulă)', raspunsCorect: 'eoliană, solară, hidroenergie și geotermală', raspunsuriAcceptate: ['eoliană', 'solară', 'mareelor', 'maree', 'geotermală', 'hidroenergie', 'eoliana solara hidro geotermala', 'eoliana solara maree hidro'], punctaj: 4 },
    ],
  },
};
