export const varianta1 = {
  id: 'varianta-1',
  nume: 'Varianta 1',
  an: 2020,
  totalPuncte: 90,
  
  subiectI: {
    titlu: 'Subiect I - Europa',
    harta: 'Test_6',
    
    A: [
      {
        tip: 'identificare',
        enunt: '1. Numele statului marcat, pe hartă, cu litera J',
        raspunsCorect: 'Bulgaria',
        raspunsuriAcceptate: ['bulgaria', 'Bulgaria'],
        punctaj: 2,
      },
      {
        tip: 'identificare',
        enunt: '2. Numele orașului-capitală marcat, pe hartă, cu numărul 12',
        raspunsCorect: 'Kiev',
        raspunsuriAcceptate: ['kiev', 'Kiev', 'Kyiv'],
        punctaj: 2,
      },
    ],
    
    B: [
      {
        tip: 'completare',
        enuntInainte: '1. Capitala statului marcat, pe hartă, cu litera B este orașul',
        raspunsCorect: 'Berlin',
        raspunsuriAcceptate: ['berlin', 'Berlin'],
        punctaj: 2,
      },
      {
        tip: 'completare',
        enuntInainte: '2. Capitala statului marcat, pe hartă, cu litera C este orașul',
        raspunsCorect: 'Paris',
        raspunsuriAcceptate: ['paris', 'Paris'],
        punctaj: 2,
      },
      {
        tip: 'completare',
        enuntInainte: '3. Capitala statului marcat, pe hartă, cu litera J este orașul',
        raspunsCorect: 'Sofia',
        raspunsuriAcceptate: ['sofia', 'Sofia'],
        punctaj: 2,
      },
    ],
    
    C: [
      {
        tip: 'grila',
        enunt: '1. Care dintre statele marcate este Italia?',
        variante: { a: 'C', b: 'E', c: 'F', d: 'G' },
        raspunsCorect: 'c',
        punctaj: 2,
      },
      {
        tip: 'grila',
        enunt: '2. Care dintre statele marcate este Bulgaria?',
        variante: { a: 'F', b: 'H', c: 'I', d: 'J' },
        raspunsCorect: 'd',
        punctaj: 2,
      },
      {
        tip: 'grila',
        enunt: '3. Care dintre statele marcate este Germania?',
        variante: { a: 'A', b: 'B', c: 'C', d: 'E' },
        raspunsCorect: 'b',
        punctaj: 2,
      },
      {
        tip: 'grila',
        enunt: '4. Capitala statului D (Belgia) este orașul:',
        variante: { a: 'Amsterdam', b: 'Bruxelles', c: 'Copenhaga', d: 'Haga' },
        raspunsCorect: 'b',
        punctaj: 2,
      },
      {
        tip: 'grila',
        enunt: '5. Statul A (Suedia) are climă:',
        variante: { a: 'mediteraneană', b: 'temperat-oceanică', c: 'temperat-continentală', d: 'subpolară' },
        raspunsCorect: 'd',
        punctaj: 2,
      },
    ],
    
    D: [
      {
        tip: 'comparatie',
        enunt: 'Precizați 3 deosebiri între clima statului D (Belgia) și clima statului H (Grecia)',
        raspunsExemplu: [
          'Belgia are climă temperat-oceanică, iar Grecia are climă mediteraneană',
          'Belgia are precipitații medii anuale mai mari (700-1000 mm), iar Grecia mai mici (400-700 mm)',
          'Belgia are amplitudine termică mai mică, iar Grecia mai mare',
        ],
        punctajMaxim: 6,
      },
    ],
    
    E: [
      {
        tip: 'cauza',
        enunt: '1. Prezentați o cauză pentru densitatea mică a populației din statul A (Suedia)',
        raspunsExemplu: 'Suedia are densitate mică datorită climei reci subpolare, reliefului muntos și suprafeței mari acoperite de păduri.',
        cuvinteCheie: ['climă', 'rece', 'munți', 'păduri', 'nord'],
        punctaj: 2,
      },
      {
        tip: 'cauza',
        enunt: '2. Prezentați o cauză care favorizează cultura viței de vie în statul F (Italia)',
        raspunsExemplu: 'Italia favorizează cultura viței de vie datorită climei mediteraneene cu veri calde și uscate, precipitații moderate și soluri fertile.',
        cuvinteCheie: ['mediteranean', 'soare', 'uscat', 'soluri'],
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
        enunt: '1. Numele orașului marcat cu numărul 12',
        raspunsCorect: 'Călărași',
        raspunsuriAcceptate: ['calarasi', 'Călărași', 'Calarasi', 'călărași'],
        punctaj: 2,
      },
      {
        tip: 'identificare',
        enunt: '2. Numele râului marcat cu numărul 6',
        raspunsCorect: 'Dunărea',
        raspunsuriAcceptate: ['dunarea', 'Dunărea', 'Dunarea', 'dunărea'],
        punctaj: 2,
      },
    ],
    
    B: [
      {
        tip: 'completare',
        enuntInainte: '1. Orașul marcat cu numărul 8 se numește',
        raspunsCorect: 'Brașov',
        raspunsuriAcceptate: ['brasov', 'Brașov', 'Brasov'],
        punctaj: 2,
      },
      {
        tip: 'completare',
        enuntInainte: '2. Orașul marcat cu numărul 9 se numește',
        raspunsCorect: 'Iași',
        raspunsuriAcceptate: ['iasi', 'Iași', 'Iasi', 'iași'],
        punctaj: 2,
      },
      {
        tip: 'completare',
        enuntInainte: '3. Unitatea de relief marcată cu litera E este',
        raspunsCorect: 'Subcarpații Curburii',
        raspunsuriAcceptate: ['subcarpatii curburii', 'Subcarpații Curburii', 'Subcarpatii Curburii'],
        punctaj: 2,
      },
    ],
    
    C: [
      {
        tip: 'grila',
        enunt: '1. În unitatea C (Munții Apuseni) există relief:',
        variante: { a: 'carstic', b: 'eolian', c: 'glaciar', d: 'vulcanic' },
        raspunsCorect: 'a',
        punctaj: 2,
      },
      {
        tip: 'grila',
        enunt: '2. Râul marcat cu numărul 2 se numește:',
        variante: { a: 'Argeș', b: 'Dâmbovița', c: 'Olt', d: 'Vedea' },
        raspunsCorect: 'c',
        punctaj: 2,
      },
      {
        tip: 'grila',
        enunt: '3. Influențe baltice pătrund în unitatea:',
        variante: { a: 'A', b: 'B', c: 'C', d: 'F' },
        raspunsCorect: 'a',
        punctaj: 2,
      },
      {
        tip: 'grila',
        enunt: '4. Etajul pădurilor de conifere există în unitatea:',
        variante: { a: 'A', b: 'F', c: 'G', d: 'H' },
        raspunsCorect: 'a',
        punctaj: 2,
      },
      {
        tip: 'grila',
        enunt: '5. Cea mai veche unitate de relief este:',
        variante: { a: 'A (Carpații Orientali)', b: 'G (Podișul Moldovei)', c: 'H (Podișul Transilvaniei)', d: 'C (Munții Apuseni)' },
        raspunsCorect: 'd',
        punctaj: 2,
      },
    ],
    
    D: [
      {
        tip: 'comparatie',
        enunt: 'Precizați 3 deosebiri între relieful unității A și unității H',
        raspunsExemplu: [
          'Carpații Orientali sunt formați prin orogeneza alpină, iar Podișul Transilvaniei prin sedimentare',
          'Carpații Orientali au altitudini mari (până la 2303 m), iar Podișul Transilvaniei mici (300-700 m)',
          'Carpații Orientali sunt alcătuiți din roci magmatice, iar Podișul Transilvaniei din roci sedimentare',
        ],
        punctajMaxim: 6,
      },
    ],
    
    E: [
      {
        tip: 'cauza',
        enunt: '1. Prezentați o cauză a frecvenței mai mari a hidrocentralelor în regiunea montană',
        raspunsExemplu: 'Hidrocentralele sunt mai frecvente în regiunea montană deoarece râurile au debite mari, pante accentuate și văi adânci.',
        cuvinteCheie: ['pante', 'debit', 'munte', 'energie'],
        punctaj: 2,
      },
      {
        tip: 'cauza',
        enunt: '2. Prezentați un avantaj sau dezavantaj al hidroenergiei',
        raspunsExemplu: 'Avantaj: hidroenergia este sursă regenerabilă și nepoluantă. Dezavantaj: necesită investiții mari inițiale.',
        cuvinteCheie: ['regenerabil', 'poluare', 'investiții', 'ecosistem'],
        punctaj: 2,
      },
    ],
  },
  
  subiectIII: {
    titlu: 'Subiect III - Lumea contemporană',
    
    A: [
      {
        tip: 'identificare',
        enunt: '1. Numele sectorului celui mai lung al Dunării',
        raspunsCorect: 'România',
        raspunsuriAcceptate: ['romania', 'România', 'Romania'],
        punctaj: 2,
      },
      {
        tip: 'identificare',
        enunt: '2. Sectorul care străbate Germania are lungimea (în km)',
        raspunsCorect: '647',
        raspunsuriAcceptate: ['647', '647 km'],
        punctaj: 2,
      },
    ],
    
    B: [
      {
        tip: 'completare',
        enuntInainte: '1. O unitate de relief străbătută de Dunăre în România este',
        raspunsCorect: 'Câmpia Română',
        raspunsuriAcceptate: ['campia romana', 'Câmpia Română', 'Campia Romana', 'Podișul Dobrogei'],
        punctaj: 2,
      },
      {
        tip: 'completare',
        enuntInainte: '2. Un afluent direct al Dunării în România este',
        raspunsCorect: 'Olt',
        raspunsuriAcceptate: ['olt', 'Olt', 'Argeș', 'Siret', 'Jiu', 'Prut'],
        punctaj: 2,
      },
      {
        tip: 'completare',
        enuntInainte: '3. Un oraș peste 200.000 locuitori străbătut de Dunăre este',
        raspunsCorect: 'Belgrad',
        raspunsuriAcceptate: ['belgrad', 'Belgrad', 'Viena', 'Budapesta'],
        punctaj: 2,
      },
    ],
    
    C: [
      {
        tip: 'completare',
        enuntInainte: '1. Modul de formare al Carpaților Centrali:',
        raspunsCorect: 'cutare',
        raspunsuriAcceptate: ['cutare', 'Cutare', 'orogeneza alpină', 'orogeneza'],
        punctaj: 2,
      },
      {
        tip: 'completare',
        enuntInainte: '2. Un tip de rocă specific Carpaților:',
        raspunsCorect: 'vulcanice',
        raspunsuriAcceptate: ['vulcanice', 'magmatice', 'andezit', 'metamorfice'],
        punctaj: 2,
      },
      {
        tip: 'completare',
        enuntInainte: '3. Un tip genetic de relief în Carpați:',
        raspunsCorect: 'vulcanic',
        raspunsuriAcceptate: ['vulcanic', 'carstic', 'glaciar'],
        punctaj: 2,
      },
      {
        tip: 'completare',
        enuntInainte: '4. Un etaj climatic în Carpați:',
        raspunsCorect: 'alpin',
        raspunsuriAcceptate: ['alpin', 'subalpin', 'montan'],
        punctaj: 2,
      },
      {
        tip: 'completare',
        enuntInainte: '5. Un râu care străbate Carpații:',
        raspunsCorect: 'Bistrița',
        raspunsuriAcceptate: ['bistrita', 'Bistrița', 'Mureș', 'Olt', 'Trotuș'],
        punctaj: 2,
      },
    ],
    
    D: [
      {
        tip: 'calcul',
        enunt: '1. Calculați amplitudinea termică (Iulie 15,2°C - Ianuarie 5,0°C)',
        formula: 'T iulie - T ianuarie',
        raspunsCorect: 10.2,
        intervalAcceptat: [10.0, 10.4],
        unitate: '°C',
        punctaj: 2,
      },
      {
        tip: 'grila',
        enunt: '2. Care este orașul A (climă blândă, temperaturi pozitive iarna)?',
        variante: { a: 'București', b: 'Dublin', c: 'Moscova', d: 'Roma' },
        raspunsCorect: 'b',
        punctaj: 2,
      },
      {
        tip: 'cauza',
        enunt: '3. Prezentați o cauză a temperaturilor pozitive iarna în acest oraș',
        raspunsExemplu: 'Influența Curentului Atlantic de Nord (Curentul Golfului) care încălzește iarna coastele Europei de Vest.',
        cuvinteCheie: ['curent', 'Golfului', 'ocean', 'vest'],
        punctaj: 2,
      },
    ],
    
    E: [
      {
        tip: 'calcul',
        enunt: '1. Calculați populația totală Ucraina 2000 (8.570.000 + 33.731.000 + 6.756.000)',
        formula: 'Sumă grupe vârstă',
        raspunsCorect: 49057000,
        intervalAcceptat: [49050000, 49060000],
        unitate: 'locuitori',
        punctaj: 2,
      },
      {
        tip: 'cauza',
        enunt: '2. Prezentați o cauză a scăderii populației Ucrainei (2000-2010)',
        raspunsExemplu: 'Scăderea s-a datorat ratei scăzute a natalității, emigrației masive și condițiilor economice dificile.',
        cuvinteCheie: ['natalitate', 'emigrație', 'emigrare', 'economic'],
        punctaj: 2,
      },
    ],
  },
};
