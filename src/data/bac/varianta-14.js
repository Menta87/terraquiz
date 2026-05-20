export const varianta14 = {
  id: 'varianta-14',
  nume: 'Varianta 14',
  testNumber: 19,
  totalPuncte: 90,
  
  subiectI: {
    titlu: 'Subiect I - Europa',
    
    A: [
      { tip: 'identificare', enunt: '1. Numele statului marcat cu litera C', raspunsCorect: 'Cehia', raspunsuriAcceptate: ['Cehia', 'cehia', 'Republica Cehă'], punctaj: 2 },
      { tip: 'identificare', enunt: '2. Numele orașului-capitală marcat cu numărul 7', raspunsCorect: 'Berlin', raspunsuriAcceptate: ['Berlin', 'berlin'], punctaj: 2 },
    ],
    
    B: [
      { tip: 'completare', enuntInainte: '1. Skopje este orașul-capitală marcat cu numărul', raspunsCorect: '8', raspunsuriAcceptate: ['8'], punctaj: 2 },
      { tip: 'completare', enuntInainte: '2. Statul marcat cu litera J se numește', raspunsCorect: 'Croația', raspunsuriAcceptate: ['Croația', 'Croatia', 'croatia'], punctaj: 2 },
      { tip: 'completare', enuntInainte: '3. Orașul-capitală marcat cu numărul 15 se numește', raspunsCorect: 'Tallinn', raspunsuriAcceptate: ['Tallinn', 'tallinn'], punctaj: 2 },
    ],
    
    C: [
      { tip: 'grila', enunt: '1. Orașul Minsk este capitala statului marcat cu litera:', variante: { a: 'B', b: 'D', c: 'G', d: 'I' }, raspunsCorect: 'd', punctaj: 2 },
      { tip: 'grila', enunt: '2. Orașul marcat cu numărul 4 este capitala statului:', variante: { a: 'Austria', b: 'Cehia', c: 'Slovacia', d: 'Slovenia' }, raspunsCorect: 'c', punctaj: 2 },
      { tip: 'grila', enunt: '3. Capitala statului marcat cu litera B se numește:', variante: { a: 'Riga', b: 'Stockholm', c: 'Tallinn', d: 'Vilnius' }, raspunsCorect: 'a', punctaj: 2 },
      { tip: 'grila', enunt: '4. Statul marcat cu litera I este situat în Peninsula:', variante: { a: 'Balcanică', b: 'Iberică', c: 'Italică', d: 'Scandinavă' }, raspunsCorect: 'a', punctaj: 2 },
      { tip: 'grila', enunt: '5. Statele marcate cu literele E, H și J au în comun:', variante: { a: 'Munții Alpi', b: 'Munții Pirinei', c: 'fluviul Rin', d: 'fluviul Dunărea' }, raspunsCorect: 'd', punctaj: 2 },
    ],
    
    D: [
      { tip: 'comparatie', enunt: 'Precizați 3 deosebiri între clima statului F (Marea Britanie) și clima statului H (Italia)', raspunsExemplu: [
        'Tip de climă: F (Marea Britanie) are climă temperat-oceanică, iar H (Italia) climă mediteraneană (alpină în nord)',
        'Temperaturi: Marea Britanie 8-12°C medie anuală cu ierni blânde și veri răcoroase, Italia 12-18°C cu ierni blânde și veri călduroase',
        'Precipitații: Marea Britanie 700-1500 mm distribuite uniform tot anul, Italia 600-1200 mm concentrate iarna, veri secetoase în sud',
      ], punctajMaxim: 6 },
    ],
    
    E: [
      { tip: 'cauza', enunt: '1. Cauză a diferențelor mici de temperatură vară-iarnă în climatul temperat-oceanic', raspunsExemplu: 'Influența oceanică moderatoare prin Curentul Atlanticului de Nord și vânturile de vest dinspre Atlantic - oceanul se încălzește și se răcește lent, transferând căldură atmosferei și mențind amplitudini termice mici (sub 15°C).', cuvinteCheie: ['ocean', 'curent', 'vânturi', 'moderatoare'], punctaj: 2 },
      { tip: 'cauza', enunt: '2. Cauză a prezenței reliefului glaciar în Peninsula Scandinavă', raspunsExemplu: 'În Pleistocen (acum 2 milioane - 10.000 ani), Peninsula Scandinavă a fost acoperită de o calotă glaciară enormă. Ghețarii au erodat puternic relieful, formând circuri glaciare, văi glaciare, fjorduri, morene - rămase vizibile și astăzi.', cuvinteCheie: ['Pleistocen', 'calotă', 'erodat', 'fiorduri'], punctaj: 2 },
    ],
  },
  
  subiectII: {
    titlu: 'Subiect II - România',
    
    A: [
      { tip: 'identificare', enunt: '1. Numele orașului marcat cu numărul 11', raspunsCorect: 'Iași', raspunsuriAcceptate: ['Iași', 'Iasi', 'iasi'], punctaj: 2 },
      { tip: 'identificare', enunt: '2. Numele râului marcat cu numărul 1', raspunsCorect: 'Mureș', raspunsuriAcceptate: ['Mureș', 'Mures', 'mures'], punctaj: 2 },
    ],
    
    B: [
      { tip: 'completare', enuntInainte: '1. Munții Retezat se află în subunitatea de relief marcată cu litera', raspunsCorect: 'D', raspunsuriAcceptate: ['D', 'd'], punctaj: 2 },
      { tip: 'completare', enuntInainte: '2. Orașul marcat cu numărul 10 se numește', raspunsCorect: 'Bistrița', raspunsuriAcceptate: ['Bistrița', 'Bistrita', 'bistrita'], punctaj: 2 },
      { tip: 'completare', enuntInainte: '3. Râul marcat cu numărul 2 se numește', raspunsCorect: 'Olt', raspunsuriAcceptate: ['Olt', 'olt'], punctaj: 2 },
    ],
    
    C: [
      { tip: 'grila', enunt: '1. Influențe climatice oceanice pătrund în subunitatea de relief marcată cu litera:', variante: { a: 'B', b: 'C', c: 'F', d: 'G' }, raspunsCorect: 'a', punctaj: 2 },
      { tip: 'grila', enunt: '2. Râul marcat cu numărul 5:', variante: { a: 'este amenajat hidroenergetic', b: 'izvorăște din Grupa Făgăraș', c: 'străbate Subcarpații Getici', d: 'străbate un bazin carbonifer' }, raspunsCorect: 'd', punctaj: 2 },
      { tip: 'grila', enunt: '3. Orașul marcat cu numărul 8 se numește:', variante: { a: 'Botoșani', b: 'Iași', c: 'Piatra Neamț', d: 'Suceava' }, raspunsCorect: 'd', punctaj: 2 },
      { tip: 'grila', enunt: '4. Râul marcat cu numărul 3 străbate orașul:', variante: { a: 'Baia Mare', b: 'Bistrița', c: 'Cluj-Napoca', d: 'Zalău' }, raspunsCorect: 'c', punctaj: 2 },
      { tip: 'grila', enunt: '5. Petrol, gaze naturale și cărbuni se exploatează din unitatea de relief marcată cu litera:', variante: { a: 'A', b: 'B', c: 'D', d: 'F' }, raspunsCorect: 'b', punctaj: 2 },
    ],
    
    D: [
      { tip: 'comparatie', enunt: 'Precizați 3 deosebiri între relieful unității C (Carpații Orientali) și relieful unității H (Câmpia Română)', raspunsExemplu: [
        'Mod de formare: C (Carpații Orientali) s-au format prin orogeneza alpină (cutare), iar H (Câmpia Română) prin sedimentare fluvio-lacustră',
        'Altitudini: Carpații Orientali ating 2303 m (Pietrosul Rodnei), Câmpia Română are 10-300 m',
        'Tipuri de relief: Carpații Orientali au relief vulcanic, glaciar, structural, iar Câmpia Română are relief plan cu loess, crovuri și grinduri',
      ], punctajMaxim: 6 },
    ],
    
    E: [
      { tip: 'cauza', enunt: 'Două cauze ale absenței amenajărilor hidroenergetice pe râurile din unitatea F (Câmpia Română)', raspunsExemplu: 'Cauza 1: relieful plan cu altitudini reduse (10-300 m) nu permite cădere de apă suficientă pentru baraje și hidrocentrale - lipsesc pantele necesare. Cauza 2: râurile au debite mai mici și variabile (frecvent secate vara), iar costurile construcției ar fi mari față de producția mică de energie - economic neavantajos.', cuvinteCheie: ['plan', 'pante', 'debite', 'cost'], punctaj: 4 },
    ],
  },
  
  subiectIII: {
    titlu: 'Subiect III - Lumea contemporană',
    hasDiagrama: true,
    hasTabele: true,
    
    A: [
      { tip: 'completare', enuntInainte: '1. Valoarea maximă lunară a debitului și lunile', raspunsCorect: '200 m³/s aprilie-mai', raspunsuriAcceptate: ['200 aprilie mai', '200', 'aprilie', 'mai', 'aprilie-mai', '180', '190', '210', '220'], punctaj: 2 },
      { tip: 'completare', enuntInainte: '2. Luna cu cea mai scăzută valoare a debitului', raspunsCorect: 'septembrie', raspunsuriAcceptate: ['septembrie', 'octombrie', 'august', 'noiembrie'], punctaj: 2 },
    ],
    
    B: [
      { tip: 'calcul', enunt: '1. Diferența dintre debitul maxim și minim al Mureșului', formula: 'max - min', raspunsCorect: 150, intervalAcceptat: [130, 170], unitate: 'm³/s', punctaj: 2 },
      { tip: 'cauza', enunt: '2. Două cauze ale debitelor ridicate la sfârșitul primăverii și începutul verii', raspunsExemplu: 'Cauza 1: topirea zăpezilor din Carpați și Munții Apuseni - aprilie-mai apele se scurg în Mureș, alimentând debite mari. Cauza 2: precipitațiile maxime de primăvară-vară din zona montană (ploi convective) - mai-iunie cad cantități mari de apă în bazinul Mureșului.', cuvinteCheie: ['topire', 'zăpezi', 'precipitații', 'convective'], punctaj: 4 },
    ],
    
    C: [
      { tip: 'completare', enuntInainte: '1. Unitatea majoră din care face parte Podișul Târnavelor', raspunsCorect: 'Depresiunea Colinară a Transilvaniei', raspunsuriAcceptate: ['Depresiunea Colinară a Transilvaniei', 'Podișul Transilvaniei', 'Transilvaniei', 'Depresiunea Transilvaniei'], punctaj: 1 },
      { tip: 'completare', enuntInainte: '2. Modul de formare', raspunsCorect: 'sedimentare', raspunsuriAcceptate: ['sedimentare', 'mare interioară', 'depunere', 'sedimentar'], punctaj: 1 },
      { tip: 'completare', enuntInainte: '3. Un tip de roci', raspunsCorect: 'argile', raspunsuriAcceptate: ['argile', 'marne', 'nisipuri', 'gresii', 'tufuri', 'sare'], punctaj: 1 },
      { tip: 'completare', enuntInainte: '4. O influență climatică', raspunsCorect: 'oceanice', raspunsuriAcceptate: ['oceanice', 'continentale', 'submediteraneene'], punctaj: 1 },
      { tip: 'completare', enuntInainte: '5. Trei râuri care îl străbat sau îl limitează', raspunsCorect: 'Târnava Mare', raspunsuriAcceptate: ['Târnava Mare', 'Târnava Mică', 'Târnava', 'Mureș', 'Olt', 'Tarnava'], punctaj: 3 },
      { tip: 'completare', enuntInainte: '6. O resursă de subsol', raspunsCorect: 'gaz metan', raspunsuriAcceptate: ['gaz metan', 'gaze naturale', 'sare', 'tufuri'], punctaj: 1 },
      { tip: 'completare', enuntInainte: '7. Două orașe-reședință de județ', raspunsCorect: 'Sibiu', raspunsuriAcceptate: ['Sibiu', 'Târgu Mureș', 'Targu Mures', 'Alba Iulia', 'Mediaș', 'Medias'], punctaj: 2 },
    ],
    
    D: [
      { tip: 'calcul', enunt: '1. Bilanțul migratoriu pentru Regatul Unit', formula: 'imigranți - emigranți', raspunsCorect: 185000, intervalAcceptat: [184000, 186000], unitate: 'persoane', punctaj: 2 },
      { tip: 'calcul', enunt: '2. Bilanțul migratoriu pentru Polonia', formula: 'imigranți - emigranți', raspunsCorect: -251900, intervalAcceptat: [-252000, -251800], unitate: 'persoane', punctaj: 2 },
      { tip: 'cauza', enunt: '3. Cauză a bilanțului migratoriu în Polonia', raspunsExemplu: 'După aderarea Poloniei la UE (2004), milioane de polonezi au emigrat spre Regatul Unit, Germania, Irlanda în căutarea de locuri de muncă mai bine plătite. Salariile mai mari în Vest, oportunitățile profesionale și libera circulație au generat masivă emigrație.', cuvinteCheie: ['UE', '2004', 'salarii', 'emigrare'], punctaj: 2 },
    ],
    
    E: [
      { tip: 'cauza', enunt: 'Două argumente pentru potențialul turistic important al Spaniei', raspunsExemplu: 'Argument 1: Patrimoniu cultural unic - 49 situri UNESCO (Alhambra din Granada, Catedrala din Toledo, Sagrada Familia din Barcelona), tradiție culturală (flamenco, tauromahie). Argument 2: Litoral mediteranean atractiv - Costa Brava, Costa del Sol, Insulele Baleare (Mallorca, Ibiza) cu 8000 km de plaje și climă blândă tot anul; turism balnear pe Insulele Canare.', cuvinteCheie: ['UNESCO', 'Alhambra', 'Costa', 'Baleare'], punctaj: 4 },
    ],
  },
};
