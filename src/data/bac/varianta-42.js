export const varianta42 = {
  id: 'varianta-42',
  nume: 'Varianta 42',
  bacSet: '2009',
  bacVariantNum: 27,
  totalPuncte: 90,
  
  subiectI: {
    titlu: 'Subiect I - Europa',
    
    A: [
      { tip: 'identificare', enunt: '1. Numele statului marcat cu litera B', raspunsCorect: 'Bulgaria', raspunsuriAcceptate: ['Bulgaria', 'bulgaria'], punctaj: 2 },
      { tip: 'identificare', enunt: '2. Numele statului marcat cu litera E', raspunsCorect: 'Regatul Unit', raspunsuriAcceptate: ['Regatul Unit', 'Marea Britanie', 'UK', 'Regatul Unit al Marii Britanii', 'Anglia'], punctaj: 2 },
      { tip: 'identificare', enunt: '3. Numele orașului-capitală marcat cu numărul 1', raspunsCorect: 'Bruxelles', raspunsuriAcceptate: ['Bruxelles', 'bruxelles', 'Brussels'], punctaj: 1 },
      { tip: 'identificare', enunt: '4. Numele orașului-capitală marcat cu numărul 3', raspunsCorect: 'Lisabona', raspunsuriAcceptate: ['Lisabona', 'lisabona'], punctaj: 1 },
    ],
    
    B: [
      { tip: 'completare', enuntInainte: '1. Orașul marcat cu numărul 11 este capitala statului numit', raspunsCorect: 'Ungaria', raspunsuriAcceptate: ['Ungaria', 'ungaria'], punctaj: 2 },
      { tip: 'completare', enuntInainte: '2. Munții Pirinei se află situat pe teritoriul statului marcat cu litera', raspunsCorect: 'A', raspunsuriAcceptate: ['A', 'a', 'Spania', 'spania'], punctaj: 2 },
      { tip: 'completare', enuntInainte: '3. Statul din Peninsula Scandinavă, membru al Uniunii Europene, este marcat cu litera', raspunsCorect: 'D', raspunsuriAcceptate: ['D', 'd', 'Suedia', 'suedia', 'Finlanda', 'finlanda'], punctaj: 2 },
    ],
    
    C: [
      { tip: 'grila', enunt: '1. Orașul Varșovia este capitala statului marcat cu litera:', variante: { a: 'A', b: 'D', c: 'F', d: 'J' }, raspunsCorect: 'd', punctaj: 2 },
      { tip: 'grila', enunt: '2. Munții Apenini se desfășoară pe teritoriul statului marcat cu litera:', variante: { a: 'B', b: 'E', c: 'H', d: 'I' }, raspunsCorect: 'c', punctaj: 2 },
      { tip: 'grila', enunt: '3. Capitala statului Finlanda este orașul marcat cu numărul:', variante: { a: '4', b: '6', c: '8', d: '14' }, raspunsCorect: 'b', punctaj: 2 },
      { tip: 'grila', enunt: '4. Fluviul Sena traversează orașul-capitală marcat cu numărul:', variante: { a: '2', b: '5', c: '10', d: '12' }, raspunsCorect: 'c', punctaj: 2 },
      { tip: 'grila', enunt: '5. Climatul temperat-oceanic este caracteristic în statul marcat cu litera:', variante: { a: 'C', b: 'E', c: 'G', d: 'H' }, raspunsCorect: 'b', punctaj: 2 },
    ],
    
    D: [
      { tip: 'comparatie', enunt: 'Precizați 2 deosebiri și o asemănare între relieful Alpilor Scandinavi și relieful Munților Alpi', raspunsExemplu: [
        'Deosebire (geneza): Munții Scandinaviei sunt formați în orogeneza caledonică, iar Munții Alpi în orogeneza alpină, de dată mai recentă',
        'Deosebire (altitudini): altitudinile din Munții Alpi sunt mult mai mari - 4807 m (Vârful Mont Blanc), iar în Munții Scandinaviei altitudinea maximă este de 2469 m (Vârful Galdhopiggen)',
        'Asemănare: în ambele unități există relief glaciar bine dezvoltat, cu forme specifice: circuri glaciare, văi glaciare, valuri de morene, creste ascuțite',
      ], punctajMaxim: 6 },
    ],
    
    E: [
      { tip: 'cauza', enunt: 'Două consecințe ale sporului natural redus din Europa', raspunsExemplu: 'Consecința 1: natalitatea scăzută (9-12 la mia de locuitori/an), ponderea scăzută a grupei de populație tânără și ponderea crescută a grupei de peste 65 de ani (între 15-20% din totalul populației) determină în Europa dramatismul demografic. Consecința 2: apar situații în care populațiile susținute de sistemele de pensii sunt foarte numeroase, iar populația activă se reduce, ceea ce poate duce la colapsul sistemelor respective.', cuvinteCheie: ['natalitate', 'îmbătrânită', 'pensii', 'populație activă'], punctaj: 4 },
    ],
  },
  
  subiectII: {
    titlu: 'Subiect II - România',
    
    A: [
      { tip: 'identificare', enunt: '1. Numele unității de relief marcată cu litera D', raspunsCorect: 'Munții Apuseni', raspunsuriAcceptate: ['Munții Apuseni', 'Apuseni', 'apuseni'], punctaj: 2 },
      { tip: 'identificare', enunt: '2. Numele unității de relief marcată cu litera G', raspunsCorect: 'Câmpia Moldovei', raspunsuriAcceptate: ['Câmpia Moldovei', 'Moldovei', 'moldovei'], punctaj: 2 },
      { tip: 'identificare', enunt: '3. Numele orașului marcat cu numărul 8', raspunsCorect: 'Cluj-Napoca', raspunsuriAcceptate: ['Cluj-Napoca', 'Cluj Napoca', 'Cluj', 'cluj'], punctaj: 1 },
      { tip: 'identificare', enunt: '4. Numele orașului marcat cu numărul 10', raspunsCorect: 'Timișoara', raspunsuriAcceptate: ['Timișoara', 'Timisoara', 'timisoara'], punctaj: 1 },
    ],
    
    B: [
      { tip: 'completare', enuntInainte: '1. Lacuri de crovuri s-au format în unitatea de relief marcată cu litera', raspunsCorect: 'C', raspunsuriAcceptate: ['C', 'c'], punctaj: 2 },
      { tip: 'completare', enuntInainte: '2. Râul marcat cu numărul 1 se numește', raspunsCorect: 'Barcău', raspunsuriAcceptate: ['Barcău', 'Barcau', 'barcau'], punctaj: 2 },
      { tip: 'completare', enuntInainte: '3. Utilaj petrolier se obține în orașul marcat cu numărul', raspunsCorect: '7', raspunsuriAcceptate: ['7', 'Ploiești', 'Ploiesti'], punctaj: 2 },
    ],
    
    C: [
      { tip: 'grila', enunt: '1. Orașul marcat cu numărul 12 se numește:', variante: { a: 'Alba Iulia', b: 'Deva', c: 'Hunedoara', d: 'Sibiu' }, raspunsCorect: 'a', punctaj: 2 },
      { tip: 'grila', enunt: '2. Structuri boltite sub formă de domuri există în unitatea de relief marcată cu litera:', variante: { a: 'A', b: 'B', c: 'C', d: 'H' }, raspunsCorect: 'a', punctaj: 2 },
      { tip: 'grila', enunt: '3. Cea mai redusă cantitate de precipitații medii anuale cade în unitatea de relief marcată cu litera:', variante: { a: 'D', b: 'E', c: 'F', d: 'H' }, raspunsCorect: 'b', punctaj: 2 },
      { tip: 'grila', enunt: '4. Râul marcat cu numărul 5 se numește:', variante: { a: 'Argeș', b: 'Dâmbovița', c: 'Ialomița', d: 'Prahova' }, raspunsCorect: 'a', punctaj: 2 },
      { tip: 'grila', enunt: '5. Vegetația de stepă este predominantă în unitatea de relief marcată cu litera:', variante: { a: 'B', b: 'C', c: 'E', d: 'F' }, raspunsCorect: 'b', punctaj: 2 },
    ],
    
    D: [
      { tip: 'comparatie', enunt: 'Precizați 2 deosebiri și o asemănare între relieful unității D (Munții Apuseni) și relieful unității H (Grupa de Nord a Carpaților Orientali)', raspunsExemplu: [
        'Asemănare: ambele unități montane s-au format prin cutare în orogeneza alpină; în Apuseni există roci sedimentare, vulcanice și șisturi cristaline la fel ca și în Grupa de Nord a Carpaților Orientali',
        'Deosebire (altitudini): altitudinile sunt mai mari în Grupa de Nord a Carpaților Orientali (Vârful Pietrosu Rodnei, 2303 m), decât în Munții Apuseni (Vârful Bihor, 1849 m)',
        'Deosebire (relief glaciar/carstic): în Grupa de Nord a Carpaților Orientali apar formele reliefului glaciar, iar în Munții Apuseni, datorită altitudinilor mai mici, glaciațiunile cuaternare nu s-au instalat; în Munții Apuseni apare un relief carstic foarte dezvoltat cu forme de endo și exocarst',
      ], punctajMaxim: 6 },
    ],
    
    E: [
      { tip: 'cauza', enunt: '1. Cauză a scăderii numărului de locuitori ai țării noastre, după 1990', raspunsExemplu: 'Scăderea natalității și apariția sporului natural negativ, la care se adaugă sporul migratoriu negativ - mulți români au emigrat în țările dezvoltate ale UE pentru muncă, fenomen accentuat după 1990 și mai ales după 2007 (aderarea României la UE).', cuvinteCheie: ['natalitate scăzută', 'spor natural negativ', 'migratoriu negativ', 'emigrare'], punctaj: 2 },
      { tip: 'cauza', enunt: '2. Factor care a determinat dezvoltarea industriei produselor clorosodice în Subcarpați', raspunsExemplu: 'Existența zăcămintelor de sare din Subcarpați (Slănic Prahova, Târgu Ocna, Ocna Mureș, Praid) - sarea este materia primă principală pentru industria produselor clorosodice (sodă caustică, sodă calcinată, hipoclorit de sodiu).', cuvinteCheie: ['zăcăminte sare', 'Subcarpați', 'sare', 'materia primă'], punctaj: 2 },
    ],
  },
  
  subiectIII: {
    titlu: 'Subiect III - Debit Siret + Cadru natural Franța/Moldova',
    hasDiagrama: true,
    hasTabele: false,
    
    A: [
      { tip: 'completare', enuntInainte: '1. Valoarea maximă a debitului lunar și luna în care se înregistrează', raspunsCorect: '355 m³/s mai', raspunsuriAcceptate: ['355 mai', '355', 'mai', '360 mai', '350 mai'], punctaj: 2 },
      { tip: 'completare', enuntInainte: '2. Valoarea minimă a debitului lunar și luna în care se înregistrează', raspunsCorect: '70 m³/s ianuarie', raspunsuriAcceptate: ['70 ianuarie', '70', 'ianuarie', '75 ianuarie', '80 ianuarie'], punctaj: 2 },
    ],
    
    B: [
      { tip: 'completare', enuntInainte: '1. Două luni în care debitul mediu lunar are aceleași valori (separate prin virgulă)', raspunsCorect: 'noiembrie și decembrie', raspunsuriAcceptate: ['noiembrie decembrie', 'noiembrie, decembrie', 'decembrie noiembrie', 'noiembrie si decembrie', 'iulie august', 'iulie, august'], punctaj: 2 },
      { tip: 'calcul', enunt: '2. Diferența dintre valoarea debitului în luna aprilie (350) și valoarea debitului în luna decembrie (90)', formula: 'aprilie - decembrie', raspunsCorect: 260, intervalAcceptat: [255, 265], unitate: 'm³/s', punctaj: 2 },
      { tip: 'cauza', enunt: '3. O cauză a creșterilor de debit în luna aprilie', raspunsExemplu: 'Topirea zăpezilor din zona montană în lunile de primăvară (martie-mai), care alimentează abundent râul Siret și afluenții săi. La aceasta se adaugă precipitațiile bogate de primăvară (cele mai mari ale anului) din zona temperat-continentală.', cuvinteCheie: ['topirea zăpezilor', 'montană', 'primăvară', 'precipitații'], punctaj: 2 },
    ],
    
    C: [
      { tip: 'completare', enuntInainte: '1. Două unități de relief din Spania (separate prin virgulă)', raspunsCorect: 'Podișul Meseta și Munții Pirinei', raspunsuriAcceptate: ['Podișul Meseta', 'Meseta', 'Munții Pirinei', 'Pirinei', 'Sierra Nevada', 'Sierra Morena', 'Meseta Pirinei', 'Meseta, Pirinei', 'Pirinei Meseta', 'Meseta Sierra Nevada'], punctaj: 2 },
      { tip: 'completare', enuntInainte: '2. O resursă naturală din Spania', raspunsCorect: 'huilă', raspunsuriAcceptate: ['huilă', 'huila', 'cărbune', 'carbune', 'fier', 'minereu de fier', 'mercur', 'plumb'], punctaj: 1 },
      { tip: 'completare', enuntInainte: '3. Trei orașe din Spania, altele decât capitala (separate prin virgulă)', raspunsCorect: 'Barcelona, Valencia și Sevilla', raspunsuriAcceptate: ['Barcelona', 'Valencia', 'Sevilla', 'Bilbao', 'Zaragoza', 'Granada', 'Toledo', 'Barcelona Valencia Sevilla', 'Barcelona, Valencia, Sevilla', 'Barcelona Valencia', 'Valencia Sevilla Barcelona', 'Barcelona Bilbao Valencia'], punctaj: 3 },
      { tip: 'completare', enuntInainte: '4. Două regiuni turistice din Spania (separate prin virgulă)', raspunsCorect: 'litoralul Mării Mediterane și Munții Pirinei', raspunsuriAcceptate: ['litoralul Mediteranei', 'Marea Mediterană', 'Pirinei', 'Costa del Sol', 'Costa Brava', 'Andaluzia', 'Mediterana Pirinei', 'Mediterana, Pirinei', 'Pirinei Mediterana', 'Costa del Sol Pirinei'], punctaj: 2 },
      { tip: 'completare', enuntInainte: '5. Două insule sau arhipelaguri care aparțin Spaniei (separate prin virgulă)', raspunsCorect: 'Insulele Baleare și Insulele Canare', raspunsuriAcceptate: ['Baleare', 'Canare', 'Insulele Baleare', 'Insulele Canare', 'Mallorca', 'Tenerife', 'Baleare Canare', 'Baleare, Canare', 'Canare Baleare', 'Insulele Baleare si Canare'], punctaj: 2 },
    ],
    
    D: [
      { tip: 'comparatie', enunt: 'Comparați cadrul natural al Franței cu cel al Republicii Moldova (3 deosebiri)', raspunsExemplu: [
        'Deosebire (relief): Relieful Franței are altitudini maxime mai mari (4807 m - Mont Blanc), pe când relieful Republicii Moldova este mai scund (429 m)',
        'Deosebire (climă): Clima Franței este variată (temperat-oceanic, mediteranean, montan), pe când cea a Republicii Moldova are caracter continental',
        'Deosebire (vegetație): Vegetația Franței este mult mai variată (specii mediteraneene, temperat-oceanice, montane), pe când vegetația Republicii Moldova este formată din stepă, silvostepă și păduri de foioase',
      ], punctajMaxim: 6 },
    ],
    
    E: [
      { tip: 'cauza', enunt: 'Două cauze ale natalității reduse din țările Europei de Est și Sud-Est', raspunsExemplu: 'Cauza 1: degradarea nivelului de trai - veniturile mici, lipsa locurilor de muncă bine plătite, costurile ridicate ale creșterii copilului determină familiile să aibă mai puțini copii sau să amâne nașterea. Cauza 2: migrația populației tinere spre țările cu un nivel de dezvoltare mai ridicat - persoanele tinere (de vârstă fertilă) emigrează masiv în vestul Europei, ceea ce reduce numărul nașterilor din țările de origine.', cuvinteCheie: ['nivel de trai', 'venituri mici', 'migrație', 'tineri'], punctaj: 4 },
    ],
  },
};
