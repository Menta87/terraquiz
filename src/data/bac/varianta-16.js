export const varianta16 = {
  id: 'varianta-16',
  nume: 'Varianta 16',
  bacSet: '2009',
  bacVariantNum: 1,
  totalPuncte: 90,
  
  subiectI: {
    titlu: 'Subiect I - Europa',
    
    A: [
      { tip: 'identificare', enunt: '1. Numele statului marcat cu litera D', raspunsCorect: 'Danemarca', raspunsuriAcceptate: ['Danemarca', 'danemarca'], punctaj: 2 },
      { tip: 'identificare', enunt: '2. Numele statului marcat cu litera G', raspunsCorect: 'Estonia', raspunsuriAcceptate: ['Estonia', 'estonia'], punctaj: 2 },
      { tip: 'identificare', enunt: '3. Numele orașului-capitală marcat cu numărul 1', raspunsCorect: 'Madrid', raspunsuriAcceptate: ['Madrid', 'madrid'], punctaj: 1 },
      { tip: 'identificare', enunt: '4. Numele orașului-capitală marcat cu numărul 4', raspunsCorect: 'Berlin', raspunsuriAcceptate: ['Berlin', 'berlin'], punctaj: 1 },
    ],
    
    B: [
      { tip: 'completare', enuntInainte: '1. Lisabona este capitala statului marcat cu litera', raspunsCorect: 'A', raspunsuriAcceptate: ['A', 'a', 'Portugalia', 'portugalia'], punctaj: 2 },
      { tip: 'completare', enuntInainte: '2. Orașul-capitală marcat cu numărul 11 se numește', raspunsCorect: 'Praga', raspunsuriAcceptate: ['Praga', 'praga'], punctaj: 2 },
      { tip: 'completare', enuntInainte: '3. Munții Penini se găsesc în statul marcat cu litera', raspunsCorect: 'C', raspunsuriAcceptate: ['C', 'c', 'Marea Britanie', 'UK'], punctaj: 2 },
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
        'Tip de climă: în Europa Nordică sunt prezente tipurile de climă subpolar și temperat-oceanic, iar în Europa Sudică, cel subtropical (mediteranean)',
        'Temperaturi: temperatura medie anuală este mai scăzută în Europa Nordică (între -5 și +5°C), iar în Europa Sudică este de cca 15°C',
        'Influențe: în Europa Nordică apar influențe oceanice și polare, iar în Europa Sudică sunt pregnante influențele mediteraneene și nord-africane',
      ], punctajMaxim: 6 },
    ],
    
    E: [
      { tip: 'cauza', enunt: '1. Cauză a prezenței lacurilor glaciare în Peninsula Scandinavă', raspunsExemplu: 'Prezența ghețarilor cuaternari de calotă (în Pleistocen), datorită latitudinii ridicate, și a ghețarilor montani datorită reliefului - aceștia au erodat puternic relieful, formând circuri și văi glaciare care, după topire, au fost umplute cu apă formând lacurile glaciare.', cuvinteCheie: ['ghețari', 'calotă', 'latitudine', 'circuri'], punctaj: 2 },
      { tip: 'cauza', enunt: '2. Cauză a fenomenului de îmbătrânire a populației Europei', raspunsExemplu: 'Bilanțul natural negativ datorită scăderii natalității (sub 10‰), schimbării mentalității (carieră înainte de familie), emigrării tinerelor cupluri, plus creșterea speranței de viață peste 80 ani datorită nivelului ridicat de trai și sistemului medical avansat.', cuvinteCheie: ['natalitate', 'emigrare', 'speranță', 'medical'], punctaj: 2 },
    ],
  },
  user@MacBook-Air terraquiz % sed -n '160,170p' src/pages/bac/index.js

    nivel: 'BAC complet',
    culoare: '#dc2626',
    href: '/bac/varianta/varianta-16',
    disponibil: true,
  },
];



export default function BacIndex() {
  return (
  
  subiectIII: {
    titlu: 'Subiect III - Lumea contemporană',
    hasDiagrama: false,
    hasTabele: false,
    
    A: [
      { tip: 'cauza', enunt: '1. Două caracteristici ale Italiei ca stat al Uniunii Europene', raspunsExemplu: 'Caracteristică 1: Italia este membră fondatoare a CEE/UE (1957), economie dezvoltată din G7, cu industrie puternică (auto - FIAT, modă - Milano, design). Caracteristică 2: Peninsulă mediteraneană cu 49 situri UNESCO, populație de 60 milioane locuitori, capitala Roma, monedă euro (€) din 1999.', cuvinteCheie: ['fondatoare', 'G7', 'UNESCO', 'euro'], punctaj: 4 },
    ],
    
    B: [
      { tip: 'completare', enuntInainte: '1. Numele capitalei Italiei', raspunsCorect: 'Roma', raspunsuriAcceptate: ['Roma', 'roma'], punctaj: 1 },
      { tip: 'completare', enuntInainte: '2. Două orașe importante din Italia', raspunsCorect: 'Milano', raspunsuriAcceptate: ['Milano', 'Torino', 'Napoli', 'Genova', 'Florența', 'Veneția', 'Bologna'], punctaj: 2 },
      { tip: 'completare', enuntInainte: '3. Numele monedei naționale a Italiei', raspunsCorect: 'euro', raspunsuriAcceptate: ['euro', 'EUR', 'Euro'], punctaj: 1 },
      { tip: 'completare', enuntInainte: '4. Două ramuri industriale dezvoltate în Italia', raspunsCorect: 'industria auto', raspunsuriAcceptate: ['auto', 'modă', 'siderurgie', 'chimică', 'construcții', 'textilă'], punctaj: 2 },
    ],
    
    C: [
      { tip: 'cauza', enunt: '1. Două avantaje economice ale Italiei ca membră UE', raspunsExemplu: 'Avantaj 1: piața comună UE permite exporturi fără bariere către 27 de state, ceea ce favorizează industria italiană (auto, modă, alimentară) și agricultura mediteraneană. Avantaj 2: fondurile europene structurale și de coeziune ajută la dezvoltarea zonelor mai puțin dezvoltate (sudul Italiei - Mezzogiorno), infrastructură, mediu.', cuvinteCheie: ['piață', 'export', 'fonduri', 'Mezzogiorno'], punctaj: 4 },
      { tip: 'cauza', enunt: '2. Două dezavantaje pentru un stat membru UE', raspunsExemplu: 'Dezavantaj 1: pierderea suveranității în multe domenii (politici monetare prin euro, comerciale, agricole - PAC) - statele membre cedează putere instituțiilor europene. Dezavantaj 2: concurența mai puternică pentru companiile naționale din piața unică, plus contribuții financiare la bugetul UE (Italia plătește anual miliarde euro).', cuvinteCheie: ['suveranitate', 'euro', 'concurență', 'contribuții'], punctaj: 4 },
    ],
    
    D: [
      { tip: 'cauza', enunt: 'Două probleme actuale ale Uniunii Europene', raspunsExemplu: 'Problemă 1: criza migrației - presiunea migranților din Africa și Orientul Mijlociu pe statele de frontieră (Italia, Grecia, Spania) generează tensiuni interne și politice. Problemă 2: diferențele economice mari între statele vestice (Germania, Franța) și estice (România, Bulgaria) determină migrație internă masivă a forței de muncă și dezechilibre demografice.', cuvinteCheie: ['migrație', 'tensiuni', 'diferențe', 'demografice'], punctaj: 4 },
    ],
    
    E: [
      { tip: 'cauza', enunt: 'Două perspective ale Uniunii Europene', raspunsExemplu: 'Perspectivă 1: aprofundarea integrării politice și fiscale - uniune bancară, armată comună europeană, politică externă unitară, pentru consolidarea poziției UE pe scena mondială față de SUA și China. Perspectivă 2: tranziția ecologică (Green Deal) cu obiectivul neutralității climatice până în 2050, digitalizarea economiei, plus extinderea cu noi state din Balcanii de Vest și Ucraina.', cuvinteCheie: ['integrare', 'armată', 'Green Deal', 'extindere'], punctaj: 4 },
    ],
  },
};
