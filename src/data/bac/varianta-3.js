export const varianta3 = {
  id: 'varianta-3',
  nume: 'Varianta 3',
  an: 2020,
  totalPuncte: 90,
  
  subiectI: {
    titlu: 'Subiect I - Europa',
    harta: 'Test_6',
    
    A: [
      {
        tip: 'identificare',
        enunt: '1. Numele statului marcat, pe hartă, cu litera C',
        raspunsCorect: 'Finlanda',
        raspunsuriAcceptate: ['finlanda', 'Finlanda'],
        punctaj: 2,
      },
      {
        tip: 'identificare',
        enunt: '2. Numele orașului-capitală marcat, pe hartă, cu numărul 6',
        raspunsCorect: 'București',
        raspunsuriAcceptate: ['bucuresti', 'București', 'Bucuresti'],
        punctaj: 2,
      },
    ],
    
    B: [
      {
        tip: 'completare',
        enuntInainte: '1. Orașul Reykjavik este capitala statului marcat, pe hartă, cu litera',
        raspunsCorect: 'J',
        raspunsuriAcceptate: ['J', 'j', 'Islanda', 'islanda'],
        punctaj: 2,
      },
      {
        tip: 'completare',
        enuntInainte: '2. Capitala statului marcat, pe hartă, cu litera E se numește',
        raspunsCorect: 'Viena',
        raspunsuriAcceptate: ['viena', 'Viena'],
        punctaj: 2,
      },
      {
        tip: 'completare',
        enuntInainte: '3. Orașul marcat, pe hartă, cu numărul 13 este capitala statului numit',
        raspunsCorect: 'Belarus',
        raspunsuriAcceptate: ['belarus', 'Belarus', 'Bielorusia'],
        punctaj: 2,
      },
    ],
    
    C: [
      {
        tip: 'grila',
        enunt: '1. Statul marcat, pe hartă, cu litera I se numește:',
        variante: { a: 'Andorra', b: 'Cipru', c: 'Malta', d: 'Monaco' },
        raspunsCorect: 'c',
        punctaj: 2,
      },
      {
        tip: 'grila',
        enunt: '2. Teritoriul statului marcat cu litera H nu este străbătut de:',
        variante: { a: 'Dunăre', b: 'Rhin', c: 'Rhône', d: 'Sena' },
        raspunsCorect: 'a',
        punctaj: 2,
      },
      {
        tip: 'grila',
        enunt: '3. Capitala statului marcat cu litera A se numește:',
        variante: { a: 'Minsk', b: 'Riga', c: 'Tallinn', d: 'Vilnius' },
        raspunsCorect: 'd',
        punctaj: 2,
      },
      {
        tip: 'grila',
        enunt: '4. Aglomerația urbană Randstad-Holland se află pe teritoriul statului marcat cu litera:',
        variante: { a: 'A', b: 'B', c: 'E', d: 'J' },
        raspunsCorect: 'b',
        punctaj: 2,
      },
      {
        tip: 'grila',
        enunt: '5. Petrol, cărbuni, gaze naturale, minereu de fier, mangan se exploatează din statul al cărui oraș-capitală este marcat cu numărul:',
        variante: { a: '9', b: '12', c: '13', d: '14' },
        raspunsCorect: 'd',
        punctaj: 2,
      },
    ],
    
    D: [
      {
        tip: 'comparatie',
        enunt: 'Precizați 3 deosebiri între clima statului D (Lituania) și clima statului F (Portugalia)',
        raspunsExemplu: [
          'Tip de climă: Lituania are climă temperat-continentală cu influențe baltice, iar Portugalia are climă mediteraneană',
          'Temperaturi: Lituania are temperaturi mai scăzute (iarnă: -4°C), iar Portugalia mai ridicate (iarnă: 10°C)',
          'Precipitații: Lituania are precipitații uniform distribuite (600-800 mm/an), iar Portugalia precipitații concentrate iarna (700-1000 mm/an)',
        ],
        punctajMaxim: 6,
      },
    ],
    
    E: [
      {
        tip: 'cauza',
        enunt: '1. Norvegia obține aproape 100% energie electrică din hidroenergie. Prezentați un factor natural care favorizează utilizarea acestui tip de energie',
        raspunsExemplu: 'Norvegia are relief muntos cu pante mari, râuri cu debite considerabile, precipitații abundente (1500-2000 mm/an) și văi glaciare adânci ideale pentru construirea barajelor și hidrocentralelor.',
        cuvinteCheie: ['relief', 'munte', 'pante', 'debit', 'precipitații'],
        punctaj: 2,
      },
      {
        tip: 'cauza',
        enunt: '2. Prezentați un factor natural care favorizează culturile de citrice din Europa Sudică',
        raspunsExemplu: 'Clima mediteraneană cu temperaturi blânde iarna (peste 5-10°C), veri calde și uscate, soluri terra-rosa favorabile și expunere bună la soare permit cultivarea citricelor.',
        cuvinteCheie: ['mediteraneană', 'temperaturi', 'soare', 'caldă', 'soluri'],
        punctaj: 2,
      },
    ],
  },
  
  subiectII: {
    titlu: 'Subiect II - România',
    harta: 'Test_6',
    
    A: [
      {
        tip: 'identificare',
        enunt: '1. Numele orașului marcat, pe hartă, cu numărul 12',
        raspunsCorect: 'Craiova',
        raspunsuriAcceptate: ['craiova', 'Craiova'],
        punctaj: 2,
      },
      {
        tip: 'identificare',
        enunt: '2. Numele râului marcat, pe hartă, cu numărul 5',
        raspunsCorect: 'Buzău',
        raspunsuriAcceptate: ['buzau', 'Buzău', 'Buzau'],
        punctaj: 2,
      },
    ],
    
    B: [
      {
        tip: 'completare',
        enuntInainte: '1. Râul marcat, pe hartă, cu numărul 3 se numește',
        raspunsCorect: 'Mureș',
        raspunsuriAcceptate: ['mures', 'Mureș', 'Mures'],
        punctaj: 2,
      },
      {
        tip: 'completare',
        enuntInainte: '2. Relief vulcanic s-a format în unitatea de relief marcată cu litera',
        raspunsCorect: 'C',
        raspunsuriAcceptate: ['C', 'c', 'Munții Apuseni', 'apuseni'],
        punctaj: 2,
      },
      {
        tip: 'completare',
        enuntInainte: '3. Orașul marcat, pe hartă, cu numărul 11 este străbătut de râul numit',
        raspunsCorect: 'Bega',
        raspunsuriAcceptate: ['bega', 'Bega'],
        punctaj: 2,
      },
    ],
    
    C: [
      {
        tip: 'grila',
        enunt: '1. Munți formați în orogeneza hercinică se află în unitatea de relief marcată cu litera:',
        variante: { a: 'C', b: 'D', c: 'F', d: 'G' },
        raspunsCorect: 'c',
        punctaj: 2,
      },
      {
        tip: 'grila',
        enunt: '2. Râul marcat cu numărul 1 se numește:',
        variante: { a: 'Cerna', b: 'Cibin', c: 'Lotru', d: 'Motru' },
        raspunsCorect: 'a',
        punctaj: 2,
      },
      {
        tip: 'grila',
        enunt: '3. În unitatea de relief marcată cu litera G nu există zona de vegetație alpină din cauza:',
        variante: { a: 'altitudinilor reduse', b: 'influențelor climatice baltice', c: 'reliefului glaciar', d: 'solurilor din clasa molisoluri' },
        raspunsCorect: 'a',
        punctaj: 2,
      },
      {
        tip: 'grila',
        enunt: '4. Influențe climatice de ariditate (continentale) pătrund în unitatea de relief marcată cu litera:',
        variante: { a: 'A', b: 'D', c: 'G', d: 'H' },
        raspunsCorect: 'b',
        punctaj: 2,
      },
      {
        tip: 'grila',
        enunt: '5. Orașul marcat cu numărul 9 se numește:',
        variante: { a: 'Buzău', b: 'Pitești', c: 'Ploiești', d: 'Târgoviște' },
        raspunsCorect: 'c',
        punctaj: 2,
      },
    ],
    
    D: [
      {
        tip: 'comparatie',
        enunt: 'Precizați 3 deosebiri între relieful unității E (Podișul Getic) și relieful unității H (Grupele Bucegi și Făgăraș)',
        raspunsExemplu: [
          'Mod de formare: Podișul Getic s-a format prin sedimentare, iar Grupele Bucegi și Făgăraș prin orogeneza alpină (cutare)',
          'Altitudini: Podișul Getic are altitudini mici (300-700 m), iar Grupele Bucegi și Făgăraș au altitudini mari (peste 2500 m - Vârful Moldoveanu)',
          'Tipuri de roci: Podișul Getic e alcătuit din roci sedimentare, iar Grupele Bucegi și Făgăraș din roci magmatice și metamorfice',
        ],
        punctajMaxim: 6,
      },
    ],
    
    E: [
      {
        tip: 'cauza',
        enunt: '1. Prezentați o cauză care determină producerea alunecărilor de teren în Subcarpați',
        raspunsExemplu: 'Subcarpații au pante semnificative, soluri argiloase îmbibate cu apă în urma precipitațiilor abundente, defrișări masive și activități antropice (construcții, drumuri), toate favorizând alunecările de teren.',
        cuvinteCheie: ['pante', 'argilă', 'precipitații', 'defrișări', 'sol'],
        punctaj: 2,
      },
      {
        tip: 'cauza',
        enunt: '2. Prezentați o cauză a temperaturii minime absolute înregistrate în Depresiunea Brașovului',
        raspunsExemplu: 'Depresiunea Brașovului este o depresiune intramontană în care, iarna, aerul rece coboară de pe munți și se acumulează în partea joasă (fenomen de inversiune termică), neputând să se evacueze ușor.',
        cuvinteCheie: ['depresiune', 'inversiune', 'termică', 'aer rece', 'munte'],
        punctaj: 2,
      },
    ],
  },
  
  subiectIII: {
    titlu: 'Subiect III - Lumea contemporană',
    
    A: [
      {
        tip: 'identificare',
        enunt: '1. Valoarea cea mai mare a precipitațiilor medii lunare și luna în care s-a înregistrat',
        raspunsCorect: '75 mm iunie',
        raspunsuriAcceptate: ['75 mm iunie', '75 iunie', '75mm iunie', 'iunie 75', '75', 'iunie'],
        punctaj: 2,
      },
      {
        tip: 'identificare',
        enunt: '2. Valoarea minimă a precipitațiilor medii lunare (între 27 și 29 mm) și luna în care s-a înregistrat (februarie)',
        raspunsCorect: '28 mm februarie',
        raspunsuriAcceptate: ['28 mm februarie', '28 februarie', 'februarie 28', '27 februarie', '29 februarie', 'februarie'],
        punctaj: 2,
      },
    ],
    
    B: [
      {
        tip: 'calcul',
        enunt: '1. Calculați diferența dintre precipitațiile din lunile noiembrie și decembrie (între 18 și 20 mm)',
        formula: 'Diferență noiembrie - decembrie',
        raspunsCorect: 19,
        intervalAcceptat: [18, 20],
        unitate: 'mm',
        punctaj: 2,
      },
      {
        tip: 'calcul',
        enunt: '2. Calculați diferența dintre valoarea maximă și minimă a precipitațiilor (între 46 și 48 mm)',
        formula: 'Max - Min',
        raspunsCorect: 47,
        intervalAcceptat: [46, 48],
        unitate: 'mm',
        punctaj: 2,
      },
      {
        tip: 'completare',
        enuntInainte: '3. Precizați o lună în care precipitațiile sunt între 60 și 65 mm',
        raspunsCorect: 'aprilie',
        raspunsuriAcceptate: ['aprilie', 'august', 'octombrie', 'noiembrie'],
        punctaj: 2,
      },
    ],
    
    C: [
      {
        tip: 'completare',
        enuntInainte: '1. Pentru Subcarpații Moldovei: modul de formare este',
        raspunsCorect: 'cutare',
        raspunsuriAcceptate: ['cutare', 'orogeneza alpină', 'orogeneza'],
        punctaj: 2,
      },
      {
        tip: 'completare',
        enuntInainte: '2. Pentru Subcarpații Moldovei: unitatea de relief vecină la nord este',
        raspunsCorect: 'Podișul Moldovei',
        raspunsuriAcceptate: ['Podișul Moldovei', 'podisul moldovei', 'Podișul Sucevei', 'Sucevei'],
        punctaj: 2,
      },
      {
        tip: 'completare',
        enuntInainte: '3. Pentru Subcarpații Moldovei: o influență climatică este',
        raspunsCorect: 'continentală',
        raspunsuriAcceptate: ['continentală', 'continentale', 'baltice', 'est-europene', 'scandinavo-baltice'],
        punctaj: 2,
      },
      {
        tip: 'completare',
        enuntInainte: '4. Pentru Subcarpații Moldovei: un râu care îi străbate este',
        raspunsCorect: 'Bistrița',
        raspunsuriAcceptate: ['Bistrița', 'bistrita', 'Trotuș', 'trotus', 'Moldova', 'moldova', 'Siret', 'siret'],
        punctaj: 2,
      },
      {
        tip: 'completare',
        enuntInainte: '5. Pentru Subcarpații Moldovei: o resursă de subsol este',
        raspunsCorect: 'petrol',
        raspunsuriAcceptate: ['petrol', 'sare', 'cărbuni', 'gaze', 'gaze naturale'],
        punctaj: 2,
      },
    ],
    
    D: [
      {
        tip: 'calcul',
        enunt: '1. Calculați bilanțul natural pentru Belgia (Natalitate: 11,7‰ - Mortalitate: 9,5‰)',
        formula: 'Natalitate - Mortalitate',
        raspunsCorect: 2.2,
        intervalAcceptat: [2.0, 2.4],
        unitate: '‰',
        punctaj: 2,
      },
      {
        tip: 'calcul',
        enunt: '2. Calculați bilanțul natural pentru România (Natalitate: 10,3‰ - Mortalitate: 11,8‰)',
        formula: 'Natalitate - Mortalitate',
        raspunsCorect: -1.5,
        intervalAcceptat: [-1.7, -1.3],
        unitate: '‰',
        punctaj: 2,
      },
      {
        tip: 'cauza',
        enunt: '3. Prezentați o cauză care explică mortalitatea redusă din Belgia',
        raspunsExemplu: 'Mortalitatea redusă din Belgia se explică prin nivelul de trai ridicat, sistemul de sănătate performant, accesul larg la servicii medicale și speranța de viață ridicată.',
        cuvinteCheie: ['nivelul', 'trai', 'sănătate', 'medical', 'speranța'],
        punctaj: 2,
      },
    ],
    
    E: [
      {
        tip: 'cauza',
        enunt: '1. Prezentați o caracteristică a apelor Mării Negre',
        raspunsExemplu: 'Marea Neagră are salinitate redusă (17-18‰, mai mică decât oceanele) datorită aportului mare de apă dulce din fluviile Dunăre, Don, Nipru, Nistru.',
        cuvinteCheie: ['salinitate', 'redus', 'fluvii', 'Dunăre', 'aport'],
        punctaj: 2,
      },
      {
        tip: 'cauza',
        enunt: '2. Prezentați o altă caracteristică a apelor Mării Negre',
        raspunsExemplu: 'Marea Neagră este o mare mediteraneană interioară cu adâncimi mari (2245 m max) și are sub 200 m apa stratificată în care lipsește oxigenul (zona azoică cu hidrogen sulfurat).',
        cuvinteCheie: ['adâncime', 'stratificată', 'oxigen', 'azoică', 'sulfurat'],
        punctaj: 2,
      },
    ],
  },
};
