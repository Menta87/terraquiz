export const varianta10 = {
  id: 'varianta-10',
  nume: 'Varianta 10',
  testNumber: 15,
  totalPuncte: 90,
  
  subiectI: {
    titlu: 'Subiect I - Europa',
    
    A: [
      { tip: 'identificare', enunt: '1. Numele statului marcat cu litera D', raspunsCorect: 'Irlanda', raspunsuriAcceptate: ['Irlanda', 'irlanda'], punctaj: 2 },
      { tip: 'identificare', enunt: '2. Numele orașului-capitală marcat cu numărul 10', raspunsCorect: 'Paris', raspunsuriAcceptate: ['Paris', 'paris'], punctaj: 2 },
    ],
    
    B: [
      { tip: 'completare', enuntInainte: '1. Orașul marcat cu numărul 6 este capitala statului numit', raspunsCorect: 'Belgia', raspunsuriAcceptate: ['Belgia', 'belgia'], punctaj: 2 },
      { tip: 'completare', enuntInainte: '2. Statul marcat cu litera F se numește', raspunsCorect: 'Austria', raspunsuriAcceptate: ['Austria', 'austria'], punctaj: 2 },
      { tip: 'completare', enuntInainte: '3. Orașul marcat cu numărul 1 se numește', raspunsCorect: 'Oslo', raspunsuriAcceptate: ['Oslo', 'oslo'], punctaj: 2 },
    ],
    
    C: [
      { tip: 'grila', enunt: '1. Capitala Slovaciei este orașul marcat cu numărul:', variante: { a: '2', b: '4', c: '8', d: '14' }, raspunsCorect: 'b', punctaj: 2 },
      { tip: 'grila', enunt: '2. Orașul Minsk este capitala statului marcat cu litera:', variante: { a: 'A', b: 'F', c: 'G', d: 'H' }, raspunsCorect: 'd', punctaj: 2 },
      { tip: 'grila', enunt: '3. Statul marcat cu litera J se numește:', variante: { a: 'Andorra', b: 'Liechtenstein', c: 'Luxemburg', d: 'Monaco' }, raspunsCorect: 'c', punctaj: 2 },
      { tip: 'grila', enunt: '4. Munții Pirinei constituie granița statului marcat cu litera:', variante: { a: 'C', b: 'E', c: 'F', d: 'I' }, raspunsCorect: 'b', punctaj: 2 },
      { tip: 'grila', enunt: '5. Capitala statului marcat cu litera I se numește:', variante: { a: 'Atena', b: 'Belgrad', c: 'Sofia', d: 'Zagreb' }, raspunsCorect: 'd', punctaj: 2 },
    ],
    
    D: [
      { tip: 'comparatie', enunt: 'Precizați 3 deosebiri între clima statului B (Olanda) și clima statului E (Spania)', raspunsExemplu: [
        'Tip de climă: B (Olanda) are climă temperat-oceanică, iar E (Spania) climă mediteraneană (oceanică în nord-vest)',
        'Temperaturi: Olanda 9-12°C medie anuală, Spania 14-18°C cu ierni blânde și veri foarte calde (peste 25°C în sud)',
        'Precipitații: Olanda 700-800 mm uniform, Spania 300-600 mm concentrate iarna, veri secetoase',
      ], punctajMaxim: 6 },
    ],
    
    E: [
      { tip: 'cauza', enunt: '1. Prezența vegetației de stepă în Ucraina', raspunsExemplu: 'Clima temperat-continentală cu precipitații reduse (300-500 mm/an) și veri secetoase, soluri fertile (cernoziom) și relieful plan al Câmpiei Europei de Est favorizează vegetația de stepă cu ierburi.', cuvinteCheie: ['continentală', 'precipitații', 'cernoziom', 'plan'], punctaj: 2 },
      { tip: 'cauza', enunt: '2. Înlocuirea stepei cu cereale și plante tehnice', raspunsExemplu: 'Solurile de cernoziom sunt extrem de fertile, ideale pentru culturile agricole. Relieful plan permite mecanizarea, iar clima cu veri calde favorizează grâul, porumbul, floarea-soarelui. Ucraina este "grânarul Europei".', cuvinteCheie: ['cernoziom', 'fertile', 'mecanizare', 'grâu'], punctaj: 2 },
    ],
  },
  
  subiectII: {
    titlu: 'Subiect II - România',
    
    A: [
      { tip: 'identificare', enunt: '1. Numele orașului marcat cu numărul 10', raspunsCorect: 'Tulcea', raspunsuriAcceptate: ['Tulcea', 'tulcea'], punctaj: 2 },
      { tip: 'identificare', enunt: '2. Numele râului marcat cu numărul 1', raspunsCorect: 'Bistrița', raspunsuriAcceptate: ['Bistrița', 'Bistrita', 'bistrita'], punctaj: 2 },
    ],
    
    B: [
      { tip: 'completare', enuntInainte: '1. Cel mai mare oraș străbătut de râul marcat cu numărul 2', raspunsCorect: 'Timișoara', raspunsuriAcceptate: ['Timișoara', 'Timisoara', 'timisoara'], punctaj: 2 },
      { tip: 'completare', enuntInainte: '2. Râul marcat cu numărul 3 se numește', raspunsCorect: 'Buzău', raspunsuriAcceptate: ['Buzău', 'Buzau', 'buzau'], punctaj: 2 },
      { tip: 'completare', enuntInainte: '3. Orașul marcat cu numărul 8 se numește', raspunsCorect: 'Suceava', raspunsuriAcceptate: ['Suceava', 'suceava'], punctaj: 2 },
    ],
    
    C: [
      { tip: 'grila', enunt: '1. Orașul marcat cu numărul 11 este străbătut de râul:', variante: { a: 'Cibin', b: 'Lotru', c: 'Sadu', d: 'Strei' }, raspunsCorect: 'a', punctaj: 2 },
      { tip: 'grila', enunt: '2. Trotușul este afluent al râului marcat cu numărul:', variante: { a: '2', b: '3', c: '4', d: '6' }, raspunsCorect: 'd', punctaj: 2 },
      { tip: 'grila', enunt: '3. În unitatea de relief marcată cu litera E formele mai înalte poartă numele de:', variante: { a: 'crovuri', b: 'cueste', c: 'domuri', d: 'grinduri' }, raspunsCorect: 'd', punctaj: 2 },
      { tip: 'grila', enunt: '4. În unitatea de relief marcată cu litera B pătrund influențe climatice:', variante: { a: 'baltice', b: 'continentale', c: 'oceanice', d: 'pontice' }, raspunsCorect: 'b', punctaj: 2 },
      { tip: 'grila', enunt: '5. Râul marcat cu numărul 5 se numește:', variante: { a: 'Barcău', b: 'Crișul Alb', c: 'Crișul Negru', d: 'Crișul Repede' }, raspunsCorect: 'c', punctaj: 2 },
    ],
    
    D: [
      { tip: 'comparatie', enunt: 'Precizați 3 deosebiri între relieful unității A (Subcarpații Moldovei) și relieful unității C (Munții Apuseni)', raspunsExemplu: [
        'Mod de formare: A (Subcarpații Moldovei) s-au format prin cutare ulterioară Carpaților, iar C (Munții Apuseni) prin orogeneza hercinică și alpină',
        'Altitudini: Subcarpații Moldovei au 400-800 m, iar Munții Apuseni ating 1849 m (Vf. Bihor) - relief montan',
        'Tipuri de relief: Subcarpații au dealuri cu alunecări și diapire de sare, iar Apusenii au relief carstic dezvoltat (peșteri, chei) și cristalin',
      ], punctajMaxim: 6 },
    ],
    
    E: [
      { tip: 'cauza', enunt: '1. Motiv al construirii unui centru siderurgic la Galați', raspunsExemplu: 'Galați este port la Dunăre cu acces fluvio-maritim - permite importul ieftin de minereu de fier și cărbuni cocsificabili (din Ucraina, Rusia, peste mări) pe calea apei, care e cea mai economică pentru materii prime grele.', cuvinteCheie: ['port', 'Dunăre', 'import', 'fier'], punctaj: 2 },
      { tip: 'cauza', enunt: '2. Cauză a scăderii populației urbane după 1990', raspunsExemplu: 'Migrația externă masivă a populației urbane (în special tineri calificați) spre Europa Vestică pentru locuri de muncă mai bine plătite, dezindustrializarea (închiderea fabricilor a forțat unii să se reîntoarcă la sat), sporul natural negativ.', cuvinteCheie: ['migrație', 'externă', 'dezindustrializare', 'tineri'], punctaj: 2 },
    ],
  },
  
  subiectIII: {
    titlu: 'Subiect III - Lumea contemporană',
    hasDiagrama: true,
    hasTabele: true,
    
    A: [
      { tip: 'cauza', enunt: 'Doi factori care determină debitele mai mici ale Prutului', raspunsExemplu: 'Factor 1: bazinul hidrografic mai mic (cca 28.000 km²) cu suprafață redusă de captare a precipitațiilor. Factor 2: clima continentală cu precipitații mai reduse în zona de est (450-550 mm/an) și aporturi reduse din afluenți (râuri mici din Podișul Moldovei).', cuvinteCheie: ['bazin', 'continentală', 'precipitații', 'afluenți'], punctaj: 4 },
    ],
    
    B: [
      { tip: 'cauza', enunt: '1. Doi factori care determină debitele mari ale Oltului și Mureșului', raspunsExemplu: 'Factor 1: bazine hidrografice mari (Mureș 27.890 km², Olt 24.300 km²) cu numeroși afluenți. Factor 2: izvorăsc din Carpați - zonă cu precipitații abundente (800-1200 mm/an) și topirea zăpezilor montane alimentează debitele primăvara.', cuvinteCheie: ['bazin', 'Carpați', 'precipitații', 'afluenți'], punctaj: 4 },
      { tip: 'calcul', enunt: '2. Diferența dintre debitul Mureșului și Prutului', formula: 'Mureș - Prut', raspunsCorect: 90, intervalAcceptat: [80, 100], unitate: 'm³/s', punctaj: 2 },
    ],
    
    C: [
      { tip: 'completare', enuntInainte: '1. Două unități de relief vecine cu Subcarpații Curburii', raspunsCorect: 'Carpații Curburii', raspunsuriAcceptate: ['Carpații Curburii', 'Carpații Orientali', 'Câmpia Română', 'Podișul Getic'], punctaj: 2 },
      { tip: 'completare', enuntInainte: '2. Modul de formare', raspunsCorect: 'cutare ulterioară', raspunsuriAcceptate: ['cutare', 'orogeneza alpină', 'alpină', 'cutare ulterioară'], punctaj: 1 },
      { tip: 'completare', enuntInainte: '3. Două tipuri de roci', raspunsCorect: 'argile', raspunsuriAcceptate: ['argile', 'marne', 'gresii', 'nisipuri', 'pietrișuri', 'roci sedimentare'], punctaj: 2 },
      { tip: 'completare', enuntInainte: '4. Trei râuri care îi străbat sau îi limitează', raspunsCorect: 'Buzău', raspunsuriAcceptate: ['Buzău', 'Prahova', 'Teleajen', 'Slănic', 'Ialomița', 'Putna', 'Râmnicu Sărat'], punctaj: 3 },
      { tip: 'completare', enuntInainte: '5. Două resurse de subsol utilizate în industria energetică', raspunsCorect: 'petrol', raspunsuriAcceptate: ['petrol', 'gaze naturale', 'cărbuni', 'lignit'], punctaj: 2 },
    ],
    
    D: [
      { tip: 'calcul', enunt: '1. Populația rurală a Italiei', formula: 'populație totală - populație urbană', raspunsCorect: 19204477, intervalAcceptat: [19200000, 19210000], unitate: 'locuitori', punctaj: 2 },
      { tip: 'calcul', enunt: '1. Populația rurală a Finlandei', formula: 'populație totală - populație urbană', raspunsCorect: 1731666, intervalAcceptat: [1730000, 1735000], unitate: 'locuitori', punctaj: 2 },
      { tip: 'completare', enuntInainte: '2. Statul cu densitatea medie mai mare', raspunsCorect: 'Italia', raspunsuriAcceptate: ['Italia', 'italia'], punctaj: 2 },
    ],
    
    E: [
      { tip: 'cauza', enunt: 'Doi factori care explică diferența mare de densitate între Italia și Finlanda', raspunsExemplu: 'Factor 1: clima diferită - Italia are climă mediteraneană favorabilă locuirii și agriculturii, iar Finlanda are climă subpolară cu ierni lungi și aspre (-20°C) care limitează expansiunea umană. Factor 2: dezvoltarea economică - Italia este economie dezvoltată cu tradiție istorică, urbanizare antică, agricultură intensivă; Finlanda are economie modernă dar populație mică, dezvoltată recent.', cuvinteCheie: ['climă', 'mediteraneană', 'subpolară', 'urbanizare'], punctaj: 4 },
    ],
  },
};
