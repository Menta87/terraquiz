export const varianta10 = {
  id: 'varianta-10',
  nume: 'Varianta 10',
  an: 2020,
  totalPuncte: 90,
  
  subiectI: {
    titlu: 'Subiect I - Europa',
    harta: 'Test_6',
    
    A: [
      { tip: 'identificare', enunt: '1. Numele statului marcat cu litera D', raspunsCorect: 'Irlanda', raspunsuriAcceptate: ['irlanda', 'Irlanda'], punctaj: 2 },
      { tip: 'identificare', enunt: '2. Numele orașului-capitală marcat cu numărul 10', raspunsCorect: 'Paris', raspunsuriAcceptate: ['paris', 'Paris'], punctaj: 2 },
    ],
    
    B: [
      { tip: 'completare', enuntInainte: '1. Orașul marcat cu numărul 6 este capitala statului numit', raspunsCorect: 'Belgia', raspunsuriAcceptate: ['belgia', 'Belgia', 'Bruxelles'], punctaj: 2 },
      { tip: 'completare', enuntInainte: '2. Statul marcat cu litera F se numește', raspunsCorect: 'Austria', raspunsuriAcceptate: ['austria', 'Austria'], punctaj: 2 },
      { tip: 'completare', enuntInainte: '3. Orașul marcat cu numărul 1 se numește', raspunsCorect: 'Oslo', raspunsuriAcceptate: ['oslo', 'Oslo'], punctaj: 2 },
    ],
    
    C: [
      { tip: 'grila', enunt: '1. Capitala Slovaciei este orașul marcat cu numărul:', variante: { a: '2', b: '4', c: '8', d: '14' }, raspunsCorect: 'b', punctaj: 2 },
      { tip: 'grila', enunt: '2. Orașul Minsk este capitala statului marcat cu litera:', variante: { a: 'A', b: 'F', c: 'G', d: 'H' }, raspunsCorect: 'd', punctaj: 2 },
      { tip: 'grila', enunt: '3. Statul marcat cu litera J se numește:', variante: { a: 'Andorra', b: 'Liechtenstein', c: 'Luxemburg', d: 'Monaco' }, raspunsCorect: 'c', punctaj: 2 },
      { tip: 'grila', enunt: '4. Munții Pirinei constituie granița statului marcat cu litera:', variante: { a: 'C', b: 'E', c: 'F', d: 'I' }, raspunsCorect: 'b', punctaj: 2 },
      { tip: 'grila', enunt: '5. Capitala statului marcat cu litera I se numește:', variante: { a: 'Atena', b: 'Belgrad', c: 'Sofia', d: 'Zagreb' }, raspunsCorect: 'd', punctaj: 2 },
    ],
    
    D: [
      { tip: 'comparatie', enunt: 'Precizați 3 deosebiri între clima statului B (Țările de Jos/Olanda) și clima statului E (Spania)', raspunsExemplu: [
        'Tip de climă: Olanda are climă temperat-oceanică, iar Spania are predominant climă mediteraneană',
        'Temperaturi: Olanda are veri răcoroase (17-19°C) și ierni blânde (2-4°C), Spania veri caniculare (25-30°C) și ierni blânde (8-12°C)',
        'Precipitații: Olanda are precipitații uniforme tot anul (700-900 mm), iar Spania concentrate iarna (400-700 mm)',
      ], punctajMaxim: 6 },
    ],
    
    E: [
      { tip: 'cauza', enunt: '1. Explicați prezența vegetației de stepă în Ucraina', raspunsExemplu: 'Vegetația de stepă există datorită climei temperat-continentale cu precipitații reduse (300-500 mm/an), verilor calde și uscate, solurilor fertile de tip cernoziom și reliefului plan de câmpie.', cuvinteCheie: ['continental', 'cernoziom', 'uscat', 'câmpie'], punctaj: 2 },
      { tip: 'cauza', enunt: '2. Explicați înlocuirea stepei, pe mari suprafețe, cu cereale și plante tehnice', raspunsExemplu: 'Solurile fertile de cernoziom și relieful plan permit cultivarea pe scară largă a cerealelor (grâu, porumb) și plantelor tehnice (floarea-soarelui, sfeclă de zahăr), făcând zona "grânar al Europei".', cuvinteCheie: ['cernoziom', 'fertile', 'cereale', 'plan'], punctaj: 2 },
    ],
  },
  
  subiectII: {
    titlu: 'Subiect II - România',
    harta: 'Test_6',
    
    A: [
      { tip: 'identificare', enunt: '1. Numele orașului marcat cu numărul 10', raspunsCorect: 'Tulcea', raspunsuriAcceptate: ['tulcea', 'Tulcea'], punctaj: 2 },
      { tip: 'identificare', enunt: '2. Numele râului marcat cu numărul 1', raspunsCorect: 'Bistrița', raspunsuriAcceptate: ['bistrita', 'Bistrița', 'Bistrita'], punctaj: 2 },
    ],
    
    B: [
      { tip: 'completare', enuntInainte: '1. Cel mai mare oraș străbătut de râul marcat cu numărul 2 se numește', raspunsCorect: 'Timișoara', raspunsuriAcceptate: ['timisoara', 'Timișoara', 'Timisoara'], punctaj: 2 },
      { tip: 'completare', enuntInainte: '2. Râul marcat cu numărul 3 se numește', raspunsCorect: 'Buzău', raspunsuriAcceptate: ['buzau', 'Buzău', 'Buzau'], punctaj: 2 },
      { tip: 'completare', enuntInainte: '3. Orașul marcat cu numărul 8 se numește', raspunsCorect: 'Suceava', raspunsuriAcceptate: ['suceava', 'Suceava'], punctaj: 2 },
    ],
    
    C: [
      { tip: 'grila', enunt: '1. Orașul marcat cu numărul 11 este străbătut de râul:', variante: { a: 'Cibin', b: 'Lotru', c: 'Sadu', d: 'Strei' }, raspunsCorect: 'a', punctaj: 2 },
      { tip: 'grila', enunt: '2. Trotușul este afluent al râului marcat cu numărul:', variante: { a: '2', b: '3', c: '4', d: '6' }, raspunsCorect: 'd', punctaj: 2 },
      { tip: 'grila', enunt: '3. În unitatea de relief E formele de relief mai înalte poartă numele de:', variante: { a: 'crovuri', b: 'cueste', c: 'domuri', d: 'grinduri' }, raspunsCorect: 'd', punctaj: 2 },
      { tip: 'grila', enunt: '4. În unitatea de relief B pătrund influențe climatice:', variante: { a: 'baltice', b: 'continentale', c: 'oceanice', d: 'pontice' }, raspunsCorect: 'b', punctaj: 2 },
      { tip: 'grila', enunt: '5. Râul marcat cu numărul 5 se numește:', variante: { a: 'Barcău', b: 'Crișul Alb', c: 'Crișul Negru', d: 'Crișul Repede' }, raspunsCorect: 'c', punctaj: 2 },
    ],
    
    D: [
      { tip: 'comparatie', enunt: 'Precizați 3 deosebiri între relieful unității A (Subcarpații Moldovei) și unității C (Munții Apuseni)', raspunsExemplu: [
        'Mod de formare: Subcarpații Moldovei prin cutare alpină recentă, Apusenii prin orogeneza alpină + hercinică',
        'Altitudini: Subcarpații au 300-1000 m, Apusenii au până la 1849 m (Vârful Bihor)',
        'Roci: Subcarpații - roci sedimentare cutate (gresii, marne), Apusenii - magmatice, metamorfice și sedimentare',
      ], punctajMaxim: 6 },
    ],
    
    E: [
      { tip: 'cauza', enunt: '1. Prezentați un motiv al construirii unui centru siderurgic la Galați', raspunsExemplu: 'Galați este port la Dunăre cu acces la căi de transport ieftine pentru materii prime (minereu de fier importat) și pentru export de produse finite, are forța de muncă disponibilă și apa necesară procesului industrial.', cuvinteCheie: ['port', 'Dunăre', 'transport', 'apă'], punctaj: 2 },
      { tip: 'cauza', enunt: '2. Prezentați o cauză a scăderii populației urbane în România după 1990', raspunsExemplu: 'Emigrația masivă din orașe către alte țări europene (Italia, Spania, Germania), scăderea natalității, închiderea fabricilor industriale care a dus la șomaj și migrație din orașe către sate.', cuvinteCheie: ['emigrație', 'natalitate', 'fabrici', 'șomaj'], punctaj: 2 },
    ],
  },
  
  subiectIII: {
    titlu: 'Subiect III - Lumea contemporană',
    
    A: [
      { tip: 'cauza', enunt: '1. Prezentați un factor care determină debitele mai mici ale Prutului', raspunsExemplu: 'Prutul izvorăște din zone mai joase (Carpații Păduroși), are bazin hidrografic mai redus, traversează zone cu climă mai aridă (Podișul Moldovei) și are mai puțini afluenți importanți comparativ cu Mureșul și Oltul.', cuvinteCheie: ['izvoare', 'bazin', 'climă', 'afluenți'], punctaj: 2 },
      { tip: 'cauza', enunt: '2. Prezentați un al doilea factor', raspunsExemplu: 'Prutul traversează regiuni cu precipitații reduse (450-550 mm/an), spre deosebire de Mureș și Olt care traversează Carpații cu precipitații abundente (peste 1000 mm/an).', cuvinteCheie: ['precipitații', 'reduse', 'Carpați'], punctaj: 2 },
    ],
    
    B: [
      { tip: 'cauza', enunt: '1. Prezentați un factor care determină debitele mari ale râurilor Olt și Mureș', raspunsExemplu: 'Ambele râuri izvorăsc din Carpați (zone montane înalte) și colectează numeroși afluenți, având bazine hidrografice mari (Mureș 28.000 km², Olt 24.300 km²).', cuvinteCheie: ['Carpați', 'munte', 'afluenți', 'bazin'], punctaj: 2 },
      { tip: 'cauza', enunt: '2. Prezentați un al doilea factor', raspunsExemplu: 'Precipitațiile abundente din zonele montane traversate (peste 1000 mm/an în zonele alpine), topirea zăpezilor primăvara și existența numeroaselor amenajări hidroenergetice care reglează debitul.', cuvinteCheie: ['precipitații', 'topire', 'zăpadă', 'hidroenergetice'], punctaj: 2 },
      { tip: 'calcul', enunt: '3. Calculați diferența între debitul Mureșului și cel al Prutului (între 80 și 100 m³/s)', formula: 'Debit Mureș - Debit Prut', raspunsCorect: 90, intervalAcceptat: [80, 100], unitate: 'm³/s', punctaj: 2 },
    ],
    
    C: [
      { tip: 'completare', enuntInainte: '1. Pentru Subcarpații Curburii: o unitate de relief vecină este', raspunsCorect: 'Carpații Curburii', raspunsuriAcceptate: ['Carpații Curburii', 'curburii', 'Câmpia Română', 'Subcarpații Getici', 'Subcarpații Moldovei'], punctaj: 2 },
      { tip: 'completare', enuntInainte: '2. Pentru Subcarpații Curburii: modul de formare este', raspunsCorect: 'cutare', raspunsuriAcceptate: ['cutare', 'orogeneza alpină', 'orogeneza'], punctaj: 2 },
      { tip: 'completare', enuntInainte: '3. Pentru Subcarpații Curburii: un tip de rocă este', raspunsCorect: 'gresie', raspunsuriAcceptate: ['gresie', 'gresii', 'marne', 'argile', 'roci sedimentare'], punctaj: 2 },
      { tip: 'completare', enuntInainte: '4. Pentru Subcarpații Curburii: un râu care îi străbate este', raspunsCorect: 'Buzău', raspunsuriAcceptate: ['Buzău', 'buzau', 'Prahova', 'Teleajen', 'Putna'], punctaj: 2 },
      { tip: 'completare', enuntInainte: '5. Pentru Subcarpații Curburii: o resursă de subsol energetică este', raspunsCorect: 'petrol', raspunsuriAcceptate: ['petrol', 'gaze naturale', 'cărbuni'], punctaj: 2 },
    ],
    
    D: [
      { tip: 'calcul', enunt: '1. Calculați populația rurală a Italiei (58.133.509 - 38.929.032)', formula: 'Populație totală - Urbană', raspunsCorect: 19204477, intervalAcceptat: [19200000, 19210000], unitate: 'locuitori', punctaj: 2 },
      { tip: 'calcul', enunt: '2. Calculați populația rurală a Finlandei (5.231.372 - 3.499.706)', formula: 'Populație totală - Urbană', raspunsCorect: 1731666, intervalAcceptat: [1731000, 1732000], unitate: 'locuitori', punctaj: 2 },
      { tip: 'identificare', enunt: '3. Statul cu densitate medie a populației mai mare', raspunsCorect: 'Italia', raspunsuriAcceptate: ['italia', 'Italia'], punctaj: 2 },
    ],
    
    E: [
      { tip: 'cauza', enunt: '1. Prezentați un factor care explică diferența mare de densitate dintre Italia și Finlanda', raspunsExemplu: 'Italia are climă mediteraneană plăcută, soluri fertile și o tradiție îndelungată de urbanizare (de la epoca romană). Finlanda are climă rece subpolară cu ierni lungi care fac dificilă locuirea.', cuvinteCheie: ['mediteraneană', 'soluri', 'tradiție', 'rece'], punctaj: 2 },
      { tip: 'cauza', enunt: '2. Prezentați un al doilea factor', raspunsExemplu: 'Italia este situată central în Europa, beneficiind de poziție strategică pentru comerț și schimburi culturale. Finlanda este o țară mai izolată în nord, cu populație tradițional mai mică și economie mai puțin diversificată.', cuvinteCheie: ['poziție', 'comerț', 'izolată', 'nord'], punctaj: 2 },
    ],
  },
};
