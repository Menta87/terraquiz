export const varianta1 = {
  id: 'varianta-1',
  nume: 'Varianta 1',
  an: 2009,
  totalPuncte: 90,
  
  subiectI: {
    titlu: 'Subiect I - Europa',
    harta: 'Test_6',
    
    A: [
      { tip: 'identificare', enunt: '1. Numele statului marcat cu litera D', raspunsCorect: 'Danemarca', raspunsuriAcceptate: ['danemarca', 'Danemarca'], punctaj: 2 },
      { tip: 'identificare', enunt: '2. Numele statului marcat cu litera G', raspunsCorect: 'Estonia', raspunsuriAcceptate: ['estonia', 'Estonia'], punctaj: 2 },
      { tip: 'identificare', enunt: '3. Numele orașului-capitală marcat cu numărul 1', raspunsCorect: 'Madrid', raspunsuriAcceptate: ['madrid', 'Madrid'], punctaj: 2 },
      { tip: 'identificare', enunt: '4. Numele orașului-capitală marcat cu numărul 4', raspunsCorect: 'Berlin', raspunsuriAcceptate: ['berlin', 'Berlin'], punctaj: 2 },
    ],
    
    B: [
      { tip: 'completare', enuntInainte: '1. Lisabona este capitala statului marcat cu litera', raspunsCorect: 'A', raspunsuriAcceptate: ['A', 'a', 'Portugalia', 'portugalia'], punctaj: 2 },
      { tip: 'completare', enuntInainte: '2. Orașul-capitală marcat cu numărul 11 se numește', raspunsCorect: 'Praga', raspunsuriAcceptate: ['praga', 'Praga'], punctaj: 2 },
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
        'Tip de climă: în Europa Nordică sunt prezente climatele subpolar și temperat-oceanic, iar în Europa Sudică climatul subtropical (mediteraneean)',
        'Temperaturi: Europa Nordică are temperaturi medii anuale între 5 și -5°C, iar Europa Sudică în jur de 15°C',
        'Influențe: în Europa Nordică apar influențe oceanice și polare, iar în Europa Sudică predomină influențele mediteraneene și nord-africane',
      ], punctajMaxim: 6 },
    ],
    
    E: [
      { tip: 'cauza', enunt: '1. Prezentați o cauză a prezenței lacurilor glaciare în Peninsula Scandinavă', raspunsExemplu: 'Prezența ghețarilor cuaternari de calotă, datorită latitudinii ridicate, și a ghețarilor montani datorită reliefului înalt, a creat depresiuni care s-au umplut cu apă formând lacuri glaciare.', cuvinteCheie: ['ghețari', 'cuaternar', 'calotă', 'latitudine'], punctaj: 2 },
      { tip: 'cauza', enunt: '2. Prezentați o cauză a fenomenului de îmbătrânire a populației Europei', raspunsExemplu: 'Bilanțul natural negativ datorită scăderii natalității, mortalitatea redusă și creșterea speranței de viață au dus la creșterea ponderii populației vârstnice.', cuvinteCheie: ['natalitate', 'speranță de viață', 'bilanț natural'], punctaj: 2 },
    ],
  },
  
  subiectII: {
    titlu: 'Subiect II - România',
    harta: 'Test_6',
    
    A: [
      { tip: 'identificare', enunt: '1. Numele unității de relief marcate cu litera E', raspunsCorect: 'Podișul Someșan', raspunsuriAcceptate: ['Podișul Someșan', 'Someșan', 'podisul somesan'], punctaj: 2 },
      { tip: 'identificare', enunt: '2. Numele unității de relief marcate cu litera F', raspunsCorect: 'Podișul Bârladului', raspunsuriAcceptate: ['Podișul Bârladului', 'Bârladului', 'podisul barladului'], punctaj: 2 },
      { tip: 'identificare', enunt: '3. Numele râului marcat cu numărul 8', raspunsCorect: 'Motru', raspunsuriAcceptate: ['Motru', 'motru'], punctaj: 2 },
      { tip: 'identificare', enunt: '4. Numele râului marcat cu numărul 11', raspunsCorect: 'Someșul Mic', raspunsuriAcceptate: ['Someșul Mic', 'somesul mic', 'Someș Mic'], punctaj: 2 },
    ],
    
    B: [
      { tip: 'completare', enuntInainte: '1. Șisturi verzi se găsesc în unitatea de relief marcată cu litera', raspunsCorect: 'C', raspunsuriAcceptate: ['C', 'c', 'Dobrogea', 'Podișul Dobrogei'], punctaj: 2 },
      { tip: 'completare', enuntInainte: '2. Lacuri glaciare se găsesc în unitatea de relief marcată cu litera', raspunsCorect: 'B', raspunsuriAcceptate: ['B', 'b', 'Carpații Meridionali'], punctaj: 2 },
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
        'Altitudini: Munții Apuseni se situează sub 2000 m (max 1849 m - Vârful Bihor), iar Grupa Făgăraș depășește frecvent 2000 m, atingând 2544 m (Vârful Moldoveanu)',
        'Relief glaciar: în Grupa Făgăraș este bine dezvoltat relieful glaciar (circuri, văi), iar în Munții Apuseni lipsește, fiind bine reprezentat relieful carstic',
        'Gradul de fragmentare: Munții Apuseni au fragmentare mai mare datorită "depresiunilor-golf" și densității rețelei hidrografice, iar Grupa Făgăraș are masivitate mai mare',
      ], punctajMaxim: 6 },
    ],
    
    E: [
      { tip: 'cauza', enunt: '1. Prezentați o cauză a existenței numeroaselor centre ale industriei produselor lactate în Carpații Orientali', raspunsExemplu: 'În Carpații Orientali sunt numeroase centre ale industriei produselor lactate datorită creșterii bovinelor pentru lapte pe baza pășunilor montane bogate și tradițiilor legate de prelucrarea laptelui.', cuvinteCheie: ['bovine', 'pășuni', 'tradiții', 'lapte'], punctaj: 2 },
      { tip: 'cauza', enunt: '2. Prezentați o altă cauză', raspunsExemplu: 'Obținerea unor produse renumite la nivel național (cașcaval, brânzeturi de Bucovina, telemea), care creează cerere și susțin economic dezvoltarea acestei industrii în zonă.', cuvinteCheie: ['produse', 'renumite', 'cașcaval'], punctaj: 2 },
    ],
  },
  
  subiectIII: {
    titlu: 'Subiect III - Lumea contemporană',
    
    A: [
      { tip: 'identificare', enunt: '1. Valoarea minimă a precipitațiilor și luna', raspunsCorect: '5 iulie', raspunsuriAcceptate: ['5 iulie', 'iulie', '5', '5mm iulie'], punctaj: 2 },
      { tip: 'identificare', enunt: '2. Valoarea maximă a temperaturii din luna ianuarie', raspunsCorect: '27', raspunsuriAcceptate: ['27', '27°C', '27 C', 'iulie 27'], punctaj: 2 },
    ],
    
    B: [
      { tip: 'grila', enunt: '1. Tipul de climă în care se înregistrează valorile menționate este:', variante: { a: 'ecuatorial', b: 'mediteraneean (subtropical)', c: 'temperat-oceanic', d: 'subpolar' }, raspunsCorect: 'b', punctaj: 2 },
      { tip: 'grila', enunt: '2. Cea mai mare cantitate de precipitații se înregistrează în intervalul:', variante: { a: 'aprilie-iunie', b: 'noiembrie-ianuarie', c: 'iulie-august', d: 'septembrie-noiembrie' }, raspunsCorect: 'b', punctaj: 2 },
      { tip: 'grila', enunt: '3. Temperaturile au valori ridicate în anotimpul de vară datorită maselor de aer:', variante: { a: 'ecuatorial', b: 'polar maritim', c: 'polar continental', d: 'tropical' }, raspunsCorect: 'd', punctaj: 2 },
    ],
    
    C: [
      { tip: 'completare', enuntInainte: '1. Pentru Italia: așezarea geografică este', raspunsCorect: 'Europa Sudică', raspunsuriAcceptate: ['Europa Sudică', 'sud', 'sudul Europei', 'Peninsula Italică'], punctaj: 2 },
      { tip: 'completare', enuntInainte: '2. Pentru Italia: o unitate de relief este', raspunsCorect: 'Munții Alpi', raspunsuriAcceptate: ['Munții Alpi', 'Alpi', 'Apenini', 'Munții Apenini', 'Câmpia Padului'], punctaj: 2 },
      { tip: 'completare', enuntInainte: '3. Pentru Italia: un tip de climat este', raspunsCorect: 'mediteraneean', raspunsuriAcceptate: ['mediteraneean', 'mediteranean', 'subtropical'], punctaj: 2 },
      { tip: 'completare', enuntInainte: '4. Pentru Italia: o insulă este', raspunsCorect: 'Sicilia', raspunsuriAcceptate: ['Sicilia', 'sicilia', 'Sardinia', 'sardinia'], punctaj: 2 },
      { tip: 'completare', enuntInainte: '5. Pentru Italia: o ramură industrială este', raspunsCorect: 'construcții de mașini', raspunsuriAcceptate: ['construcții de mașini', 'auto', 'chimică', 'textilă', 'electronică'], punctaj: 2 },
    ],
    
    D: [
      { tip: 'comparatie', enunt: 'Precizați 3 deosebiri între economia Ungariei și economia Republicii Moldova', raspunsExemplu: [
        'Agricultura: Ungaria are agricultură dezvoltată și diversificată (cereale, plante tehnice, legumicultură, pomicultură), iar Republica Moldova este specializată în viticultură, tutun, floarea-soarelui',
        'Industria: Republica Moldova are industrie slab dezvoltată specializată pe alimentară (vinuri, conserve), iar Ungaria are industrie variată și performantă (auto, chimie, electronică)',
        'Turismul: turismul în Republica Moldova este mai puțin dezvoltat decât în Ungaria, țară ex-comunistă cu venituri mari din turism',
      ], punctajMaxim: 6 },
    ],
    
    E: [
      { tip: 'cauza', enunt: '1. Două state ale UE cu ieșire la Marea Baltică', raspunsExemplu: 'Suedia și Polonia (alte răspunsuri acceptate: Danemarca, Finlanda, Germania, Estonia, Letonia, Lituania).', cuvinteCheie: ['Suedia', 'Polonia', 'Finlanda', 'Germania', 'Estonia', 'Letonia', 'Lituania'], punctaj: 2 },
      { tip: 'cauza', enunt: '2. Cele două state care au aderat la UE în 2007', raspunsExemplu: 'Bulgaria și România au aderat la Uniunea Europeană în anul 2007.', cuvinteCheie: ['Bulgaria', 'România'], punctaj: 2 },
    ],
  },
};
