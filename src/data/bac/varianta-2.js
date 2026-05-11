export const varianta2 = {
  id: 'varianta-2',
  nume: 'Varianta 2 - Test 7 BAC 2020',
  an: 2020,
  totalPuncte: 90,
  
  subiectI: {
    titlu: 'Subiect I - Europa',
    harta: 'Test_6',
    
    A: [
      {
        tip: 'identificare',
        enunt: '1. Numele statului marcat, pe hartă, cu litera I',
        raspunsCorect: 'Danemarca',
        raspunsuriAcceptate: ['danemarca', 'Danemarca'],
        punctaj: 2,
      },
      {
        tip: 'identificare',
        enunt: '2. Numele orașului-capitală marcat, pe hartă, cu numărul 7',
        raspunsCorect: 'Helsinki',
        raspunsuriAcceptate: ['helsinki', 'Helsinki'],
        punctaj: 2,
      },
    ],
    
    B: [
      {
        tip: 'completare',
        enuntInainte: '1. Capitala statului marcat, pe hartă, cu litera C se numește',
        raspunsCorect: 'Budapesta',
        raspunsuriAcceptate: ['budapesta', 'Budapesta'],
        punctaj: 2,
      },
      {
        tip: 'completare',
        enuntInainte: '2. Versantul sudic al Munților Pirinei se găsește pe teritoriul statului marcat cu litera',
        raspunsCorect: 'H',
        raspunsuriAcceptate: ['H', 'h', 'Spania', 'spania'],
        punctaj: 2,
      },
      {
        tip: 'completare',
        enuntInainte: '3. Statul marcat, pe hartă, cu litera D se numește',
        raspunsCorect: 'Lituania',
        raspunsuriAcceptate: ['lituania', 'Lituania'],
        punctaj: 2,
      },
    ],
    
    C: [
      {
        tip: 'grila',
        enunt: '1. Cel mai mare oraș din Europa, ca număr de locuitori, este marcat cu numărul:',
        variante: { a: '1', b: '8', c: '13', d: '14' },
        raspunsCorect: 'c',
        punctaj: 2,
      },
      {
        tip: 'grila',
        enunt: '2. Statul marcat cu litera G se numește:',
        variante: { a: 'Albania', b: 'Muntenegru', c: 'Republica Macedonia de Nord', d: 'Slovenia' },
        raspunsCorect: 'b',
        punctaj: 2,
      },
      {
        tip: 'grila',
        enunt: '3. Capitala statului marcat cu litera B se numește:',
        variante: { a: 'Berna', b: 'Ljubljana', c: 'Praga', d: 'Viena' },
        raspunsCorect: 'd',
        punctaj: 2,
      },
      {
        tip: 'grila',
        enunt: '4. Statele ale căror orașe-capitale sunt marcate cu numerele 2, 3 și 11 au în comun:',
        variante: { a: 'clima temperat oceanică', b: 'fluviul Dunărea', c: 'forma de guvernământ monarhie', d: 'Munții Alpi' },
        raspunsCorect: 'b',
        punctaj: 2,
      },
      {
        tip: 'grila',
        enunt: '5. Clima mediteraneeană este specifică orașelor marcate cu numerele:',
        variante: { a: '5 și 6', b: '8 și 9', c: '12 și 15', d: '13 și 14' },
        raspunsCorect: 'a',
        punctaj: 2,
      },
    ],
    
    D: [
      {
        tip: 'comparatie',
        enunt: 'Precizați 2 deosebiri și o asemănare între clima statului A (Regatul Unit) și clima statului H (Spania)',
        raspunsExemplu: [
          'Deosebire: Regatul Unit are climă temperat-oceanică, iar Spania are climă mediteraneană',
          'Deosebire: Regatul Unit are precipitații mai abundente (1000-2000 mm), iar Spania mai puține (400-700 mm)',
          'Asemănare: Ambele state au climă temperată (în general), influențată de Oceanul Atlantic',
        ],
        punctajMaxim: 6,
      },
    ],
    
    E: [
      {
        tip: 'cauza',
        enunt: '1. Explicați prezența vulcanilor activi în statul a cărui capitală este orașul marcat cu numărul 10 (Italia)',
        raspunsExemplu: 'Italia este situată la contactul plăcilor tectonice africană și europeană (eurasiatică). Coliziunea acestora generează magmatism, ceea ce explică existența vulcanilor activi precum Vezuviu, Etna, Stromboli.',
        cuvinteCheie: ['plăci', 'tectonice', 'coliziune', 'magmatism', 'subducție'],
        punctaj: 2,
      },
      {
        tip: 'cauza',
        enunt: '2. Explicați densitatea mare a populației în statul marcat cu litera F (Olanda/Belgia)',
        raspunsExemplu: 'Densitatea mare a populației este cauzată de relieful jos și plan favorabil locuirii, clima blândă temperat-oceanică, industria dezvoltată, comerțul activ datorită porturilor la Marea Nordului și tradiția urbană veche.',
        cuvinteCheie: ['câmpie', 'relief', 'industrie', 'porturi', 'comerț'],
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
        enunt: '1. Numele orașului marcat, pe hartă, cu numărul 10',
        raspunsCorect: 'Bistrița',
        raspunsuriAcceptate: ['bistrita', 'Bistrița', 'Bistrita'],
        punctaj: 2,
      },
      {
        tip: 'identificare',
        enunt: '2. Numele râului marcat, pe hartă, cu numărul 6',
        raspunsCorect: 'Bârlad',
        raspunsuriAcceptate: ['barlad', 'Bârlad', 'Barlad'],
        punctaj: 2,
      },
    ],
    
    B: [
      {
        tip: 'completare',
        enuntInainte: '1. Râul marcat, pe hartă, cu numărul 3 se numește',
        raspunsCorect: 'Timiș',
        raspunsuriAcceptate: ['timis', 'Timiș', 'Timis'],
        punctaj: 2,
      },
      {
        tip: 'completare',
        enuntInainte: '2. Orașul marcat, pe hartă, cu numărul 12 se numește',
        raspunsCorect: 'Giurgiu',
        raspunsuriAcceptate: ['giurgiu', 'Giurgiu'],
        punctaj: 2,
      },
      {
        tip: 'completare',
        enuntInainte: '3. Este situat în Subcarpații Getici orașul marcat, pe hartă, cu numărul',
        raspunsCorect: '7',
        raspunsuriAcceptate: ['7'],
        punctaj: 2,
      },
    ],
    
    C: [
      {
        tip: 'grila',
        enunt: '1. Artera hidrografică marcată, pe hartă, cu numărul 2 se numește:',
        variante: { a: 'Brațul Borcea', b: 'Brațul Chilia', c: 'Canalul Dunăre-Marea Neagră', d: 'Canalul Sulina' },
        raspunsCorect: 'a',
        punctaj: 2,
      },
      {
        tip: 'grila',
        enunt: '2. Soluri din clasa spodosoluri (de tip podzol) se găsesc în unitatea de relief marcată cu litera:',
        variante: { a: 'B', b: 'C', c: 'D', d: 'F' },
        raspunsCorect: 'a',
        punctaj: 2,
      },
      {
        tip: 'grila',
        enunt: '3. Influențe climatice continentale (est-europene/de ariditate) pătrund în unitățile de relief marcate cu literele:',
        variante: { a: 'A și B', b: 'C și H', c: 'D și F', d: 'E și G' },
        raspunsCorect: 'c',
        punctaj: 2,
      },
      {
        tip: 'grila',
        enunt: '4. Orașul marcat, pe hartă, cu numărul 11 se numește:',
        variante: { a: 'Baia Mare', b: 'Oradea', c: 'Satu Mare', d: 'Zalău' },
        raspunsCorect: 'c',
        punctaj: 2,
      },
      {
        tip: 'grila',
        enunt: '5. Râul marcat, pe hartă, cu numărul 1:',
        variante: { a: 'formează limita între Munții Banatului și Grupa Retezat-Godeanu', b: 'izvorăște din Munții Parâng', c: 'străbate orașul Petroșani', d: 'străbate un bazin carbonifer' },
        raspunsCorect: 'd',
        punctaj: 2,
      },
    ],
    
    D: [
      {
        tip: 'comparatie',
        enunt: 'Precizați 3 deosebiri între relieful unității B (Carpații Curburii) și relieful unității E (Dealurile Silvaniei)',
        raspunsExemplu: [
          'Mod de formare: Carpații Curburii s-au format prin orogeneza alpină (cutare), iar Dealurile Silvaniei prin sedimentare',
          'Altitudini: Carpații Curburii au altitudini mari (1900 m - Vârful Ciucaș), iar Dealurile Silvaniei au altitudini mici (300-700 m)',
          'Tipuri de roci: Carpații Curburii sunt alcătuiți din fliș și roci metamorfice, iar Dealurile Silvaniei din roci sedimentare (argile, marne, nisipuri)',
        ],
        punctajMaxim: 6,
      },
    ],
    
    E: [
      {
        tip: 'cauza',
        enunt: '1. Prezentați un element natural care favorizează cultivarea cerealelor în unitatea de relief marcată cu litera C (Câmpia Română)',
        raspunsExemplu: 'Relieful plan, lipsit de pante semnificative, și solurile fertile de tip cernoziom, bogate în humus, favorizează cultivarea cerealelor.',
        cuvinteCheie: ['relief', 'plan', 'cernoziom', 'soluri', 'fertile'],
        punctaj: 2,
      },
      {
        tip: 'cauza',
        enunt: '2. Prezentați un al doilea element natural care favorizează cultivarea cerealelor în Câmpia Română',
        raspunsExemplu: 'Clima temperat-continentală cu veri calde, precipitații suficiente (500-600 mm/an) și un număr mare de ore de soare favorizează maturarea cerealelor.',
        cuvinteCheie: ['climă', 'temperatura', 'precipitații', 'soare', 'veri'],
        punctaj: 2,
      },
    ],
  },
  
  subiectIII: {
    titlu: 'Subiect III - Lumea contemporană',
    
    A: [
      {
        tip: 'identificare',
        enunt: '1. Numărul de imigranți în anul 1998 (între 10.000 și 13.000 persoane)',
        raspunsCorect: '11000',
        raspunsuriAcceptate: ['11000', '12000', '10000', '13000', '11.000', '12.000'],
        punctaj: 1,
      },
      {
        tip: 'identificare',
        enunt: '2. Numărul de emigranți în anul 2011 (între 18.000 și 20.000 persoane)',
        raspunsCorect: '19000',
        raspunsuriAcceptate: ['19000', '18000', '20000', '19.000', '18.000', '20.000'],
        punctaj: 1,
      },
      {
        tip: 'calcul',
        enunt: '3. Calculați cu cât a crescut numărul de emigranți în anul 2011 față de 2010',
        formula: 'Diferență 2011-2010',
        raspunsCorect: 10000,
        intervalAcceptat: [9000, 11000],
        unitate: 'persoane',
        punctaj: 2,
      },
    ],
    
    B: [
      {
        tip: 'calcul',
        enuntInainte: '1. Calculați bilanțul migratoriu pentru anul 2007',
        enunt: '1. Calculați bilanțul migratoriu pentru anul 2007 (imigranți - emigranți)',
        formula: 'Imigranți - Emigranți',
        raspunsCorect: 0,
        intervalAcceptat: [-100, 100],
        unitate: 'persoane',
        punctaj: 2,
      },
      {
        tip: 'calcul',
        enunt: '2. Calculați bilanțul migratoriu pentru anul 1991 (între 43.000 și 44.000)',
        formula: 'Imigranți - Emigranți',
        raspunsCorect: 43500,
        intervalAcceptat: [43000, 44000],
        unitate: 'persoane',
        punctaj: 2,
      },
      {
        tip: 'cauza',
        enunt: '3. Precizați un efect social-economic al numărului mare de emigranți',
        raspunsExemplu: 'Scăderea forței de muncă tinere și calificate, depopularea anumitor zone, scăderea natalității, dar și creșterea remitențelor (banii trimiși de emigranți în țară) care contribuie la economie.',
        cuvinteCheie: ['forță', 'muncă', 'depopulare', 'remitențe', 'natalitate'],
        punctaj: 2,
      },
    ],
    
    C: [
      {
        tip: 'completare',
        enuntInainte: '1. Pentru Podișul Mehedinți: o unitate de relief vecină este',
        raspunsCorect: 'Subcarpații Getici',
        raspunsuriAcceptate: ['subcarpatii getici', 'Subcarpații Getici', 'Podișul Getic', 'Munții Mehedinți', 'Câmpia Română'],
        punctaj: 2,
      },
      {
        tip: 'completare',
        enuntInainte: '2. Pentru Podișul Mehedinți: modul de formare este',
        raspunsCorect: 'cutare',
        raspunsuriAcceptate: ['cutare', 'orogeneza', 'orogeneza alpină', 'orogeneza hercinică'],
        punctaj: 2,
      },
      {
        tip: 'completare',
        enuntInainte: '3. Pentru Podișul Mehedinți: un tip de rocă este',
        raspunsCorect: 'calcar',
        raspunsuriAcceptate: ['calcar', 'calcare', 'sisturi cristaline', 'sisturi', 'roci metamorfice'],
        punctaj: 2,
      },
      {
        tip: 'completare',
        enuntInainte: '4. Pentru Podișul Mehedinți: un tip genetic de relief specific este',
        raspunsCorect: 'carstic',
        raspunsuriAcceptate: ['carstic', 'Carstic', 'relief carstic', 'fluvial'],
        punctaj: 2,
      },
      {
        tip: 'completare',
        enuntInainte: '5. Pentru Podișul Mehedinți: o influență climatică este',
        raspunsCorect: 'submediteraneană',
        raspunsuriAcceptate: ['submediteraneană', 'submediteranean', 'submediteraneene'],
        punctaj: 2,
      },
    ],
    
    D: [
      {
        tip: 'cauza',
        enunt: '1. Explicați suprafața mare ocupată de terenuri arabile în județul Călărași',
        raspunsExemplu: 'Județul Călărași este situat în Câmpia Română, având relief plan, soluri fertile de tip cernoziom și climă favorabilă cerealelor, ceea ce permite cultivarea unor suprafețe mari de terenuri arabile.',
        cuvinteCheie: ['câmpie', 'plan', 'cernoziom', 'fertile', 'cereale'],
        punctaj: 2,
      },
      {
        tip: 'cauza',
        enunt: '2. Explicați suprafața mare ocupată de pășuni și fânețe în județul Harghita',
        raspunsExemplu: 'Județul Harghita este situat în zona montană (Carpații Orientali), cu altitudini mari, climă rece și soluri puțin fertile pentru agricultura intensivă, dar favorabile pășunilor naturale și fânețelor.',
        cuvinteCheie: ['munte', 'altitudini', 'rece', 'pășuni', 'păstorit'],
        punctaj: 2,
      },
      {
        tip: 'cauza',
        enunt: '3. Explicați suprafața mare ocupată cu livezi și viță de vie în județul Vrancea',
        raspunsExemplu: 'Județul Vrancea este situat în Subcarpații Curburii, cu relief deluros, climă temperat-continentală cu influențe submediteraneene, soluri brune favorabile pomiculturii și viticulturii (zona Cotnari-Odobești).',
        cuvinteCheie: ['dealuri', 'climă', 'sol', 'viță', 'viticultură'],
        punctaj: 2,
      },
    ],
    
    E: [
      {
        tip: 'cauza',
        enunt: '1. Prezentați o cauză care determină producția mare de oțel în Suedia',
        raspunsExemplu: 'Suedia dispune de zăcăminte importante de minereu de fier (Kiruna), de hidroenergie ieftină pentru procesare și de tradiție industrială veche în siderurgie.',
        cuvinteCheie: ['fier', 'minereu', 'hidroenergie', 'siderurgie', 'tradiție'],
        punctaj: 2,
      },
      {
        tip: 'cauza',
        enunt: '2. Precizați două resurse de subsol utilizate la fabricarea oțelului',
        raspunsExemplu: 'Pentru fabricarea oțelului se utilizează: minereu de fier (resursa principală) și cărbune (pentru cocs metalurgic). Alte resurse: mangan, crom, nichel.',
        cuvinteCheie: ['fier', 'cărbune', 'mangan', 'cocs', 'nichel'],
        punctaj: 2,
      },
    ],
  },
};
