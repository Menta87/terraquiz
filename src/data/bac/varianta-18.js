export const varianta18 = {
  id: 'varianta-18',
  nume: 'Varianta 18',
  bacSet: '2009',
  bacVariantNum: 3,
  totalPuncte: 90,
  
  subiectI: {
    titlu: 'Subiect I - Europa',
    
    A: [
      { tip: 'identificare', enunt: '1. Numele statului marcat cu litera B', raspunsCorect: 'Portugalia', raspunsuriAcceptate: ['Portugalia', 'portugalia'], punctaj: 2 },
      { tip: 'identificare', enunt: '2. Numele statului marcat cu litera D', raspunsCorect: 'Marea Britanie', raspunsuriAcceptate: ['Marea Britanie', 'Regatul Unit', 'UK', 'Marea Britanie si Irlanda de Nord'], punctaj: 2 },
      { tip: 'identificare', enunt: '3. Numele orașului-capitală marcat cu numărul 3', raspunsCorect: 'Madrid', raspunsuriAcceptate: ['Madrid', 'madrid'], punctaj: 1 },
      { tip: 'identificare', enunt: '4. Numele orașului-capitală marcat cu numărul 10', raspunsCorect: 'Moscova', raspunsuriAcceptate: ['Moscova', 'moscova', 'Moscow'], punctaj: 1 },
    ],
    
    B: [
      { tip: 'completare', enuntInainte: '1. Sena străbate orașul-capitală marcat cu numărul', raspunsCorect: '15', raspunsuriAcceptate: ['15', 'Paris'], punctaj: 2 },
      { tip: 'completare', enuntInainte: '2. Câmpia Panonică se desfășoară în statul marcat cu litera', raspunsCorect: 'I', raspunsuriAcceptate: ['I', 'i', 'Ungaria', 'ungaria'], punctaj: 2 },
      { tip: 'completare', enuntInainte: '3. Vulcani activi există în statul marcat cu litera', raspunsCorect: 'F', raspunsuriAcceptate: ['F', 'f', 'Islanda', 'islanda'], punctaj: 2 },
    ],
    
    C: [
      { tip: 'grila', enunt: '1. Climatul mediteranean este caracteristic în nordul statului marcat cu litera:', variante: { a: 'A', b: 'B', c: 'F', d: 'J' }, raspunsCorect: 'b', punctaj: 2 },
      { tip: 'grila', enunt: '2. Cel mai mare port european este situat în statul marcat cu litera:', variante: { a: 'B', b: 'F', c: 'G', d: 'D' }, raspunsCorect: 'c', punctaj: 2 },
      { tip: 'grila', enunt: '3. Orașul Tallinn este capitala statului marcat cu litera:', variante: { a: 'C', b: 'E', c: 'H', d: 'J' }, raspunsCorect: 'a', punctaj: 2 },
      { tip: 'grila', enunt: '4. Carpații se desfășoară pe teritoriul statului marcat cu litera:', variante: { a: 'A', b: 'C', c: 'F', d: 'H' }, raspunsCorect: 'd', punctaj: 2 },
      { tip: 'grila', enunt: '5. Vegetația de tip stepă (pustă) este caracteristică în statul marcat cu litera:', variante: { a: 'A', b: 'B', c: 'I', d: 'J' }, raspunsCorect: 'c', punctaj: 2 },
    ],
    
    D: [
      { tip: 'comparatie', enunt: 'Precizați 3 deosebiri între clima Europei Nordice și clima Europei Sudice', raspunsExemplu: [
        'Tip de climă: în Nordul Europei se întâlnește climatul subpolar, iar în sudul Europei climatul subtropical (mediteranean)',
        'Temperaturi: temperatura medie anuală este mai scăzută în Europa Nordică (între -5 și +5°C), iar în Europa Sudică este de cca 15°C',
        'Precipitații: în climatul subpolar sunt 500-800 mm/an, predominant sub formă de ninsoare; în climatul subtropical 600-900 mm/an, dominant în octombrie-aprilie',
      ], punctajMaxim: 6 },
    ],
    
    E: [
      { tip: 'cauza', enunt: '1. Cauză a folosirii forței de muncă externe în unele state europene', raspunsExemplu: 'În unele state europene îmbătrânirea demografică a determinat un deficit de forță de muncă, de aceea s-a apelat la forța de muncă externă (din Africa, Asia, Europa de Est). Plus costul mai scăzut al forței de muncă externe.', cuvinteCheie: ['îmbătrânire', 'deficit', 'externă', 'cost'], punctaj: 2 },
      { tip: 'cauza', enunt: '2. Cauză a diferenței dintre vegetația din Norvegia și cea din Groenlanda', raspunsExemplu: 'Clima temperat-oceanică din Norvegia, influențată de Curentul Golfului, la care se adaugă natura substratului muntos - favorizează prezența pădurilor. În Groenlanda clima subpolară și polară, cu vânturi puternice și temperaturi foarte scăzute, a favorizat instalarea ghețarilor.', cuvinteCheie: ['Curentul Golfului', 'oceanică', 'polară', 'ghețari'], punctaj: 2 },
    ],
  },
  
  subiectII: {
    titlu: 'Subiect II - România',
    
    A: [
      { tip: 'identificare', enunt: '1. Numele unității de relief marcată cu litera E', raspunsCorect: 'Grupa Parâng', raspunsuriAcceptate: ['Grupa Parâng', 'Parâng', 'parang'], punctaj: 2 },
      { tip: 'identificare', enunt: '2. Numele unității de relief marcată cu litera G', raspunsCorect: 'Câmpia Bărăganului', raspunsuriAcceptate: ['Câmpia Bărăganului', 'Bărăganului', 'baraganului'], punctaj: 2 },
      { tip: 'identificare', enunt: '3. Numele râului marcat cu numărul 7', raspunsCorect: 'Jijia', raspunsuriAcceptate: ['Jijia', 'jijia'], punctaj: 1 },
      { tip: 'identificare', enunt: '4. Numele râului marcat cu numărul 11', raspunsCorect: 'Bega', raspunsuriAcceptate: ['Bega', 'bega'], punctaj: 1 },
    ],
    
    B: [
      { tip: 'completare', enuntInainte: '1. Lacuri glaciare se găsesc în unitatea de relief marcată cu litera', raspunsCorect: 'B', raspunsuriAcceptate: ['B', 'b'], punctaj: 2 },
      { tip: 'completare', enuntInainte: '2. Cel mai important port la Dunăre este orașul marcat cu numărul', raspunsCorect: '9', raspunsuriAcceptate: ['9'], punctaj: 2 },
      { tip: 'completare', enuntInainte: '3. Relief carstic dezvoltat se găsește în Munții', raspunsCorect: 'Munții Banatului', raspunsuriAcceptate: ['Munții Banatului', 'Banatului', 'banatului'], punctaj: 2 },
    ],
    
    C: [
      { tip: 'grila', enunt: '1. Soluri din clasa molisoluri (cernoziom) se găsesc în unitatea de relief marcată cu litera:', variante: { a: 'A', b: 'G', c: 'D', d: 'F' }, raspunsCorect: 'b', punctaj: 2 },
      { tip: 'grila', enunt: '2. Influențe climatice submediteraneene pătrund în unitatea de relief marcată cu litera:', variante: { a: 'A', b: 'B', c: 'C', d: 'D' }, raspunsCorect: 'd', punctaj: 2 },
      { tip: 'grila', enunt: '3. O resursă de subsol importantă în unitatea de relief marcată cu litera E:', variante: { a: 'gaz metan', b: 'minereu de fier', c: 'petrol', d: 'cărbuni' }, raspunsCorect: 'd', punctaj: 2 },
      { tip: 'grila', enunt: '4. Stepa este prezentă în unitatea de relief marcată cu litera:', variante: { a: 'G', b: 'B', c: 'C', d: 'F' }, raspunsCorect: 'a', punctaj: 2 },
      { tip: 'grila', enunt: '5. Domurile gazeifere se află în unitatea de relief marcată cu litera:', variante: { a: 'A', b: 'C', c: 'F', d: 'H' }, raspunsCorect: 'a', punctaj: 2 },
    ],
    
    D: [
      { tip: 'comparatie', enunt: 'Precizați 2 asemănări și o deosebire între relieful Grupei Retezat-Godeanu și relieful Grupei Făgăraș', raspunsExemplu: [
        'Asemănare: ambele unități s-au format prin cutarea scoarței terestre în orogeneza alpină',
        'Asemănare: altitudinile sunt mari, depășind 2000 de metri în ambele grupe + prezența reliefului glaciar',
        'Deosebire: Grupa Făgăraș se prezintă sub forma a două culmi principale (nordică masivă peste 2000 m și sudică sub 2000 m), iar Grupa Retezat-Godeanu are culmi paralele despărțite de rețeaua hidrografică; în Retezat-Godeanu există relief carstic care nu apare în Făgăraș',
      ], punctajMaxim: 6 },
    ],
    
    E: [
      { tip: 'cauza', enunt: '1. Cauză a amenajărilor hidroenergetice predominant în zona montană', raspunsExemplu: 'Potențialul hidroenergetic al râurilor este mai mare în cursul superior (zona de munte) datorită pantei accentuate care determină viteză și forță mari. Amenajările sunt propice în munți pentru că albia este îngustă și adâncă, rocile sunt foarte dure (rezistă presiunii), iar forța apei asigură funcționarea turbinelor. Majoritatea hidrocentralelor sunt în munți: Porțile de Fier I și II, Vidraru, hidrocentralele de pe Bistrița. În câmpie, amenajările sunt dificile din cauza pantei slabe și solurilor sedimentare permeabile.', cuvinteCheie: ['munte', 'pantă', 'Porțile de Fier', 'Vidraru'], punctaj: 2 },
      { tip: 'cauza', enunt: '2. Cauză a diferenței de temperatură nord-sud în România', raspunsExemplu: 'Așezarea României pe 5° de latitudine determină diferențe de temperatură: temperatura medie anuală scade de la sud la nord cu cca 2,5°C (gradient normal latitudinal). La aceasta se adaugă influența reliefului - în sud câmpie (până la 300 m), în nord munți (peste 2000 m).', cuvinteCheie: ['latitudine', 'gradient', 'relief', 'altitudine'], punctaj: 2 },
    ],
  },
  
  subiectIII: {
    titlu: 'Subiect III - Climograma stație europeană',
    hasDiagrama: true,
    hasTabele: false,
    
    A: [
      { tip: 'completare', enuntInainte: '1. Valoarea maximă a temperaturii medii lunare și lunile', raspunsCorect: '15°C iulie și august', raspunsuriAcceptate: ['15 iulie august', '15 iulie', '15 august', 'iulie', 'august', '15'], punctaj: 2 },
      { tip: 'completare', enuntInainte: '2. Cantitatea minimă de precipitații și luna', raspunsCorect: '80 mm mai', raspunsuriAcceptate: ['80 mai', '80', 'mai', '75 mai', '85 mai'], punctaj: 2 },
    ],
    
    B: [
      { tip: 'grila', enunt: '1. Tipul de climă din diagramă este:', variante: { a: 'ecuatorial', b: 'subpolar', c: 'mediteranean (subtropical)', d: 'temperat-oceanic' }, raspunsCorect: 'd', punctaj: 2 },
      { tip: 'grila', enunt: '2. Valoarea maximă a temperaturii se înregistrează în lunile:', variante: { a: 'august și mai', b: 'august și iulie', c: 'iulie și iunie', d: 'iulie și mai' }, raspunsCorect: 'b', punctaj: 2 },
      { tip: 'grila', enunt: '3. Cantitățile mari de precipitații medii anuale sunt o consecință a:', variante: { a: 'altitudinii reduse', b: 'regimului radiației solare', c: 'regimului temperaturii aerului', d: 'circulației vestice a maselor de aer' }, raspunsCorect: 'd', punctaj: 2 },
    ],
    
    C: [
      { tip: 'completare', enuntInainte: '1. Peninsula în care este situată Spania', raspunsCorect: 'Iberică', raspunsuriAcceptate: ['Iberică', 'Iberica', 'iberica'], punctaj: 2 },
      { tip: 'completare', enuntInainte: '2. Două unități montane din Spania', raspunsCorect: 'Munții Cantabrici', raspunsuriAcceptate: ['Cantabrici', 'Munții Cantabrici', 'Iberici', 'Munții Iberici', 'Pirinei', 'Sierra Nevada'], punctaj: 2 },
      { tip: 'completare', enuntInainte: '3. Două tipuri de climă', raspunsCorect: 'mediteraneană', raspunsuriAcceptate: ['mediteraneană', 'oceanică', 'temperat-oceanică'], punctaj: 2 },
      { tip: 'completare', enuntInainte: '4. Trei orașe mari din Spania, altele decât capitala', raspunsCorect: 'Sevilla', raspunsuriAcceptate: ['Sevilla', 'Barcelona', 'Valencia', 'Bilbao', 'Malaga'], punctaj: 2 },
      { tip: 'completare', enuntInainte: '5. Două regiuni turistice', raspunsCorect: 'Madrid', raspunsuriAcceptate: ['Madrid', 'Palma de Mallorca', 'Mallorca', 'Costa del Sol', 'Costa Brava'], punctaj: 2 },
    ],
    
    D: [
      { tip: 'comparatie', enunt: 'Comparați cadrul natural al Ucrainei cu cel al Bulgariei (2 asemănări și o deosebire)', raspunsExemplu: [
        'Asemănare: în Ucraina și Bulgaria relieful este variat - câmpii, podișuri, munți; solurile din câmpie sunt fertile (molisoluri)',
        'Asemănare: rețeaua hidrografică din ambele state este tributară Mării Negre',
        'Deosebire: clima Ucrainei este temperat-continentală cu nuanțe excesive în est și mediteraneană în sud; clima Bulgariei este temperat-continentală în nord și mediteraneană în sud',
      ], punctajMaxim: 6 },
    ],
    
    E: [
      { tip: 'cauza', enunt: 'Factori care favorizează producția mare de cereale în Franța', raspunsExemplu: 'Suprafața arabilă foarte mare, fertilitatea solurilor (lutoase, brunoide), mecanizarea lucrărilor agricole, soiurile performante de plante, structura modernă a proprietății agricole, plus subvențiile agricole din PAC (Politica Agricolă Comună a UE).', cuvinteCheie: ['arabilă', 'fertile', 'mecanizare', 'PAC'], punctaj: 4 },
    ],
  },
};
