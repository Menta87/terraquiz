export const varianta2 = {
  id: 'varianta-2',
  nume: 'Varianta 2',
  testNumber: 7,
  totalPuncte: 90,
  
  subiectI: {
    titlu: 'Subiect I - Europa',
    
    A: [
      { tip: 'identificare', enunt: '1. Numele statului marcat cu litera I', raspunsCorect: 'Danemarca', raspunsuriAcceptate: ['Danemarca', 'danemarca'], punctaj: 2 },
      { tip: 'identificare', enunt: '2. Numele orașului-capitală marcat cu numărul 7', raspunsCorect: 'Helsinki', raspunsuriAcceptate: ['Helsinki', 'helsinki'], punctaj: 2 },
    ],
    
    B: [
      { tip: 'completare', enuntInainte: '1. Capitala statului marcat cu litera C se numește', raspunsCorect: 'Budapesta', raspunsuriAcceptate: ['Budapesta', 'budapesta'], punctaj: 2 },
      { tip: 'completare', enuntInainte: '2. Versantul sudic al Munților Pirinei se găsește pe teritoriul statului marcat cu litera', raspunsCorect: 'H', raspunsuriAcceptate: ['H', 'h', 'Spania', 'spania'], punctaj: 2 },
      { tip: 'completare', enuntInainte: '3. Statul marcat cu litera D se numește', raspunsCorect: 'Lituania', raspunsuriAcceptate: ['Lituania', 'lituania'], punctaj: 2 },
    ],
    
    C: [
      { tip: 'grila', enunt: '1. Cel mai mare oraș din Europa (ca număr de locuitori) este marcat cu numărul:', variante: { a: '1', b: '8', c: '13', d: '14' }, raspunsCorect: 'a', punctaj: 2 },
      { tip: 'grila', enunt: '2. Statul marcat cu litera G se numește:', variante: { a: 'Albania', b: 'Muntenegru', c: 'Republica Macedonia de Nord', d: 'Slovenia' }, raspunsCorect: 'b', punctaj: 2 },
      { tip: 'grila', enunt: '3. Capitala statului marcat cu litera B se numește:', variante: { a: 'Berna', b: 'Ljubljana', c: 'Praga', d: 'Viena' }, raspunsCorect: 'd', punctaj: 2 },
      { tip: 'grila', enunt: '4. Statele ale căror orașe-capitale sunt marcate cu numerele 2, 3 și 11 au în comun:', variante: { a: 'clima temperat oceanică', b: 'fluviul Dunărea', c: 'forma de guvernământ monarhie', d: 'Munții Alpi' }, raspunsCorect: 'b', punctaj: 2 },
      { tip: 'grila', enunt: '5. Clima mediteraneeană este specifică orașelor marcate cu numerele:', variante: { a: '5 și 6', b: '8 și 9', c: '12 și 15', d: '13 și 14' }, raspunsCorect: 'a', punctaj: 2 },
    ],
    
    D: [
      { tip: 'comparatie', enunt: 'Precizați 2 deosebiri și o asemănare între clima statului A (Regatul Unit) și clima statului H (Spania)', raspunsExemplu: [
        'Deosebire: Regatul Unit are climă temperat-oceanică, iar Spania are climă mediteraneană în sud și oceanică în nord',
        'Deosebire: temperaturile medii anuale în Regatul Unit sunt 8-12°C, iar în Spania 12-18°C (mai ridicate)',
        'Asemănare: ambele state primesc precipitații abundente în regiunile vestice, sub influența vânturilor de vest dinspre Atlantic',
      ], punctajMaxim: 6 },
    ],
    
    E: [
      { tip: 'cauza', enunt: '1. Prezența vulcanilor activi în statul a cărui capitală este marcată cu numărul 10 (Italia)', raspunsExemplu: 'Italia este situată la limita a două plăci tectonice (Africană și Eurasiatică), iar subducția determină topirea materialului din astenosferă, generând magma care alimentează vulcanii activi (Vezuviu, Etna, Stromboli).', cuvinteCheie: ['plăci', 'subducție', 'magma', 'tectonic'], punctaj: 2 },
      { tip: 'cauza', enunt: '2. Densitatea mare a populației în statul F (Olanda)', raspunsExemplu: 'Olanda are suprafață mică (41.500 km²), economie dezvoltată cu industrie, comerț, agricultură intensivă, porturi mari (Rotterdam). Relieful plan și clima oceanică favorabilă au atras o populație numeroasă.', cuvinteCheie: ['suprafață', 'economie', 'porturi', 'plan'], punctaj: 2 },
    ],
  },
  
  subiectII: {
    titlu: 'Subiect II - România',
    
    A: [
      { tip: 'identificare', enunt: '1. Numele orașului marcat cu numărul 10', raspunsCorect: 'Bistrița', raspunsuriAcceptate: ['Bistrița', 'Bistrita', 'bistrita'], punctaj: 2 },
      { tip: 'identificare', enunt: '2. Numele râului marcat cu numărul 6', raspunsCorect: 'Bârlad', raspunsuriAcceptate: ['Bârlad', 'Barlad', 'barlad'], punctaj: 2 },
    ],
    
    B: [
      { tip: 'completare', enuntInainte: '1. Râul marcat cu numărul 3 se numește', raspunsCorect: 'Timiș', raspunsuriAcceptate: ['Timiș', 'Timis', 'timis'], punctaj: 2 },
      { tip: 'completare', enuntInainte: '2. Orașul marcat cu numărul 12 se numește', raspunsCorect: 'Giurgiu', raspunsuriAcceptate: ['Giurgiu', 'giurgiu'], punctaj: 2 },
      { tip: 'completare', enuntInainte: '3. Este situat în Subcarpații Getici orașul marcat cu numărul', raspunsCorect: '7', raspunsuriAcceptate: ['7'], punctaj: 2 },
    ],
    
    C: [
      { tip: 'grila', enunt: '1. Artera hidrografică marcată cu numărul 2 se numește:', variante: { a: 'Brațul Borcea', b: 'Brațul Chilia', c: 'Canalul Dunăre-Marea Neagră', d: 'Canalul Sulina' }, raspunsCorect: 'c', punctaj: 2 },
      { tip: 'grila', enunt: '2. Soluri din clasa spodosoluri (de tip podzol) se găsesc în unitatea de relief marcată cu litera:', variante: { a: 'B', b: 'C', c: 'D', d: 'F' }, raspunsCorect: 'a', punctaj: 2 },
      { tip: 'grila', enunt: '3. Influențe climatice continentale (est-europene/de ariditate) pătrund în unitățile de relief marcate cu literele:', variante: { a: 'A și B', b: 'C și H', c: 'D și F', d: 'E și G' }, raspunsCorect: 'c', punctaj: 2 },
      { tip: 'grila', enunt: '4. Orașul marcat cu numărul 11 se numește:', variante: { a: 'Baia Mare', b: 'Oradea', c: 'Satu Mare', d: 'Zalău' }, raspunsCorect: 'c', punctaj: 2 },
      { tip: 'grila', enunt: '5. Râul marcat cu numărul 1:', variante: { a: 'formează limita între Munții Banatului și Grupa Retezat-Godeanu', b: 'izvorăște din Munții Parâng', c: 'străbate orașul Petroșani', d: 'străbate un bazin carbonifer' }, raspunsCorect: 'd', punctaj: 2 },
    ],
    
    D: [
      { tip: 'comparatie', enunt: 'Precizați 3 deosebiri între relieful unității B (Grupa Sudică a Carpaților Orientali - Carpații Curburii) și relieful unității E (Dealurile Silvaniei)', raspunsExemplu: [
        'Mod de formare: B s-a format prin orogeneza alpină (cutare), iar E prin sedimentare în depresiune',
        'Altitudini: B are altitudini de 1500-2000 m (Vf. Ciucaș 1954 m), iar E are 200-600 m (deal)',
        'Tipuri de roci: B are roci sedimentare cutate (fliș, gresii, marne), iar E are roci sedimentare orizontale (argile, nisipuri)',
      ], punctajMaxim: 6 },
    ],
    
    E: [
      { tip: 'cauza', enunt: 'Două elemente naturale care favorizează cultivarea cerealelor în unitatea C (Câmpia Română)', raspunsExemplu: 'Solurile fertile (cernoziom), relieful plan favorabil mecanizării, clima temperat-continentală cu veri călduroase, precipitațiile suficiente (500-600 mm), perioada vegetativă lungă.', cuvinteCheie: ['cernoziom', 'plan', 'veri calde', 'precipitații'], punctaj: 4 },
    ],
  },
  
  subiectIII: {
    titlu: 'Subiect III - Lumea contemporană',
    hasDiagrama: true,
    hasTabele: true,
    
    A: [
      { tip: 'completare', enuntInainte: '1. Numărul de imigranți în anul 1998', raspunsCorect: '11500', raspunsuriAcceptate: ['11000', '12000', '12500', '11500', '13000', '10000'], punctaj: 1 },
      { tip: 'completare', enuntInainte: '2. Numărul de emigranți în anul 2011', raspunsCorect: '18500', raspunsuriAcceptate: ['18000', '19000', '20000', '18500', '19500'], punctaj: 1 },
      { tip: 'calcul', enunt: '3. Calculați cu cât a crescut numărul de emigranți în anul 2011 față de 2010', formula: 'emigranți 2011 - emigranți 2010', raspunsCorect: 10000, intervalAcceptat: [9000, 11000], unitate: 'persoane', punctaj: 2 },
    ],
    
    B: [
      { tip: 'calcul', enunt: '1. Calculați bilanțul migratoriu pentru anul 2007', formula: 'imigranți - emigranți (2007)', raspunsCorect: 0, intervalAcceptat: [-200, 200], unitate: 'persoane', punctaj: 2 },
      { tip: 'calcul', enunt: '2. Calculați bilanțul migratoriu pentru anul 1991', formula: 'imigranți - emigranți (1991)', raspunsCorect: -43500, intervalAcceptat: [-44000, -43000], unitate: 'persoane', punctaj: 2 },
      { tip: 'cauza', enunt: '3. Un efect social-economic al numărului mare de emigranți', raspunsExemplu: 'Scăderea forței de muncă disponibile pe piața internă, reducerea natalității, îmbătrânirea populației, creșterea cantității de remitențe trimise în țară, dezechilibre pe piața muncii.', cuvinteCheie: ['forță muncă', 'natalitate', 'îmbătrânire', 'remitențe'], punctaj: 2 },
    ],
    
    C: [
      { tip: 'completare', enuntInainte: '1. Numele a 3 unități de relief cu care se învecinează Podișul Mehedinți', raspunsCorect: 'Carpații Meridionali', raspunsuriAcceptate: ['Carpații Meridionali', 'Podișul Getic', 'Câmpia Olteniei', 'Munții Mehedinți'], punctaj: 3 },
      { tip: 'completare', enuntInainte: '2. Modul de formare al Podișului Mehedinți', raspunsCorect: 'epirogenetic', raspunsuriAcceptate: ['epirogenetic', 'cutare', 'sedimentare', 'orogeneza alpină'], punctaj: 1 },
      { tip: 'completare', enuntInainte: '3. Un tip de roci', raspunsCorect: 'calcare', raspunsuriAcceptate: ['calcare', 'șisturi cristaline', 'gresii', 'conglomerate'], punctaj: 1 },
      { tip: 'completare', enuntInainte: '4. Un tip genetic de relief', raspunsCorect: 'carstic', raspunsuriAcceptate: ['carstic', 'fluviatil', 'structural'], punctaj: 1 },
      { tip: 'completare', enuntInainte: '5. O influență climatică', raspunsCorect: 'submediteraneene', raspunsuriAcceptate: ['submediteraneene', 'mediteraneene', 'oceanice'], punctaj: 1 },
      { tip: 'completare', enuntInainte: '6. Numele a 2 cursuri de apă care îl delimitează', raspunsCorect: 'Dunărea', raspunsuriAcceptate: ['Dunărea', 'Cerna', 'Motru', 'Topolnița'], punctaj: 2 },
      { tip: 'completare', enuntInainte: '7. Un tip de vegetație', raspunsCorect: 'foioase', raspunsuriAcceptate: ['foioase', 'mediteraneană', 'stejar', 'fag', 'submediteraneană'], punctaj: 1 },
    ],
    
    D: [
      { tip: 'cauza', enunt: '1. Suprafața mare ocupată de terenuri arabile în Călărași', raspunsExemplu: 'Județul Călărași e situat în Câmpia Bărăganului cu relief plan, soluri fertile (cernoziom), climă temperat-continentală cu veri călduroase - condiții ideale pentru cultivarea cerealelor și plantelor tehnice.', cuvinteCheie: ['Bărăgan', 'plan', 'cernoziom', 'cereale'], punctaj: 2 },
      { tip: 'cauza', enunt: '2. Suprafața mare ocupată de pășuni și fânețe în Harghita', raspunsExemplu: 'Harghita este județ montan cu altitudini mari (Carpații Orientali), pante accentuate, climă mai rece - condiții improprii agriculturii cerealiere, dar favorabile creșterii animalelor pe pajiști naturale.', cuvinteCheie: ['montan', 'altitudine', 'pante', 'pajiști'], punctaj: 2 },
      { tip: 'cauza', enunt: '3. Suprafața mare ocupată cu livezi și viță de vie în Vrancea', raspunsExemplu: 'Vrancea are relief de dealuri (Subcarpații Curburii), versanți însoriți, climă moderată cu veri calde, precipitații suficiente - condiții ideale pentru viticultură (Cotnari, Odobești) și pomicultură.', cuvinteCheie: ['dealuri', 'versanți', 'viticultură', 'Subcarpați'], punctaj: 2 },
    ],
    
    E: [
      { tip: 'cauza', enunt: '1. Cauză a producției mari de oțel din Suedia', raspunsExemplu: 'Suedia dispune de mari rezerve de minereu de fier (zona Kiruna), resurse energetice (hidroenergie), tradiție industrială veche în siderurgie, tehnologie avansată și forță de muncă calificată.', cuvinteCheie: ['fier', 'Kiruna', 'hidroenergie', 'tradiție'], punctaj: 2 },
      { tip: 'completare', enuntInainte: '2. Două resurse de subsol utilizate la fabricarea oțelului', raspunsCorect: 'minereu de fier', raspunsuriAcceptate: ['minereu de fier', 'fier', 'cărbune', 'cocs', 'mangan', 'crom', 'nichel'], punctaj: 2 },
    ],
  },
};
