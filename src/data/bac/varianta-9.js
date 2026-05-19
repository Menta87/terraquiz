export const varianta9 = {
  id: 'varianta-9',
  nume: 'Varianta 9',
  testNumber: 14,
  totalPuncte: 90,
  
  subiectI: {
    titlu: 'Subiect I - Europa',
    
    A: [
      { tip: 'identificare', enunt: '1. Numele statului marcat cu litera H', raspunsCorect: 'Suedia', raspunsuriAcceptate: ['Suedia', 'suedia'], punctaj: 2 },
      { tip: 'identificare', enunt: '2. Numele orașului-capitală marcat cu numărul 10', raspunsCorect: 'Praga', raspunsuriAcceptate: ['Praga', 'praga'], punctaj: 2 },
    ],
    
    B: [
      { tip: 'completare', enuntInainte: '1. Orașul marcat cu numărul 15 este capitala statului numit', raspunsCorect: 'Slovenia', raspunsuriAcceptate: ['Slovenia', 'slovenia'], punctaj: 2 },
      { tip: 'completare', enuntInainte: '2. Statul marcat cu litera B se numește', raspunsCorect: 'Croația', raspunsuriAcceptate: ['Croația', 'Croatia', 'croatia'], punctaj: 2 },
      { tip: 'completare', enuntInainte: '3. Orașul marcat cu numărul 1 se numește', raspunsCorect: 'Madrid', raspunsuriAcceptate: ['Madrid', 'madrid'], punctaj: 2 },
    ],
    
    C: [
      { tip: 'grila', enunt: '1. Orașul marcat cu numărul 3 este capitala statului:', variante: { a: 'Estonia', b: 'Finlanda', c: 'Letonia', d: 'Lituania' }, raspunsCorect: 'd', punctaj: 2 },
      { tip: 'grila', enunt: '2. Peninsula Kola este situată pe teritoriul statului marcat cu litera:', variante: { a: 'B', b: 'F', c: 'H', d: 'J' }, raspunsCorect: 'd', punctaj: 2 },
      { tip: 'grila', enunt: '3. Vegetația de stepă (pustă) este caracteristică statului marcat cu litera:', variante: { a: 'A', b: 'B', c: 'C', d: 'I' }, raspunsCorect: 'a', punctaj: 2 },
      { tip: 'grila', enunt: '4. Numeroase lacuri glaciare s-au format în nordul statului marcat cu litera:', variante: { a: 'B', b: 'C', c: 'G', d: 'I' }, raspunsCorect: 'c', punctaj: 2 },
      { tip: 'grila', enunt: '5. Rezerve importante de minereu de fier se găsesc în subsolul statului marcat cu litera:', variante: { a: 'B', b: 'C', c: 'I', d: 'J' }, raspunsCorect: 'd', punctaj: 2 },
    ],
    
    D: [
      { tip: 'comparatie', enunt: 'Precizați 2 asemănări și o deosebire între clima statului D (Germania) și clima statului E (Polonia)', raspunsExemplu: [
        'Asemănare: ambele au climă temperat-continentală în mare parte din teritoriu',
        'Asemănare: ambele primesc precipitații moderate (500-800 mm/an), distribuite uniform',
        'Deosebire: Germania are climă mai oceanică în vest (influențe atlantice), iar Polonia are climă mai continentală cu amplitudini termice mai mari (ierni mai reci, veri mai calde)',
      ], punctajMaxim: 6 },
    ],
    
    E: [
      { tip: 'cauza', enunt: 'Două cauze ale densității scăzute a populației în Peninsula Scandinavă', raspunsExemplu: 'Cauza 1: clima rece subpolară și polară cu ierni lungi și aspre (-15°C la -30°C), face dificilă locuirea pe scară largă. Cauza 2: relieful muntos (Alpii Scandinaviei) cu pante accentuate, fjorduri, ghețari și păduri de conifere limitează zonele locuibile și agricole.', cuvinteCheie: ['climă rece', 'ierni', 'muntos', 'fiorduri'], punctaj: 4 },
    ],
  },
  
  subiectII: {
    titlu: 'Subiect II - România',
    
    A: [
      { tip: 'identificare', enunt: '1. Numele orașului marcat cu numărul 8', raspunsCorect: 'Iași', raspunsuriAcceptate: ['Iași', 'Iasi', 'iasi'], punctaj: 2 },
      { tip: 'identificare', enunt: '2. Numele râului marcat cu numărul 1', raspunsCorect: 'Mureș', raspunsuriAcceptate: ['Mureș', 'Mures', 'mures'], punctaj: 2 },
    ],
    
    B: [
      { tip: 'completare', enuntInainte: '1. Someșul Mic străbate orașul marcat cu numărul', raspunsCorect: '7', raspunsuriAcceptate: ['7'], punctaj: 2 },
      { tip: 'completare', enuntInainte: '2. Râul marcat cu numărul 2 se numește', raspunsCorect: 'Olt', raspunsuriAcceptate: ['Olt', 'olt'], punctaj: 2 },
      { tip: 'completare', enuntInainte: '3. Orașul marcat cu numărul 11 se numește', raspunsCorect: 'Pitești', raspunsuriAcceptate: ['Pitești', 'Pitesti', 'pitesti'], punctaj: 2 },
    ],
    
    C: [
      { tip: 'grila', enunt: '1. Râul marcat cu numărul 4 străbate orașul:', variante: { a: 'București', b: 'Pitești', c: 'Ploiești', d: 'Târgoviște' }, raspunsCorect: 'a', punctaj: 2 },
      { tip: 'grila', enunt: '2. Relieful pe structuri de tip "dom" este specific unității marcate cu litera:', variante: { a: 'C', b: 'D', c: 'E', d: 'H' }, raspunsCorect: 'a', punctaj: 2 },
      { tip: 'grila', enunt: '3. În unitatea de relief marcată cu litera G pătrund influențe climatice:', variante: { a: 'baltice', b: 'oceanice', c: 'pontice', d: 'submediteraneene' }, raspunsCorect: 'c', punctaj: 2 },
      { tip: 'grila', enunt: '4. La cea mai joasă altitudine se află orașul marcat cu numărul:', variante: { a: '7', b: '8', c: '9', d: '11' }, raspunsCorect: 'b', punctaj: 2 },
      { tip: 'grila', enunt: '5. Etajul pădurilor de conifere ocupă suprafețe mari în unitatea de relief marcată cu litera:', variante: { a: 'B', b: 'C', c: 'G', d: 'H' }, raspunsCorect: 'd', punctaj: 2 },
    ],
    
    D: [
      { tip: 'comparatie', enunt: 'Precizați o asemănare și 2 deosebiri între relieful unității A și relieful unității C', raspunsExemplu: [
        'Asemănare: ambele unități s-au format prin orogeneza alpină (cutare) și prezintă fragmentare a reliefului',
        'Deosebire (altitudini): unitatea A are altitudini mai mari decât C',
        'Deosebire (tipuri de relief): unitatea A are relief glaciar și conifere, iar C are relief structural cu domuri și diapire de sare',
      ], punctajMaxim: 6 },
    ],
    
    E: [
      { tip: 'cauza', enunt: 'Două argumente pentru importanța fondului forestier pentru România', raspunsExemplu: 'Argument 1: Pădurea oferă resursă lemnoasă importantă (construcții, mobilă, hârtie) și produse forestiere (fructe de pădure, ciuperci, vânat). Argument 2: Are rol ecologic crucial - menține echilibrul climatic, previne eroziunea solului, reglează scurgerea apelor, conservă biodiversitatea, produce oxigen.', cuvinteCheie: ['lemnos', 'ecologic', 'eroziune', 'biodiversitate'], punctaj: 4 },
    ],
  },
  
  subiectIII: {
    titlu: 'Subiect III - Lumea contemporană',
    hasDiagrama: true,
    hasTabele: true,
    
    A: [
      { tip: 'completare', enuntInainte: '1. Valoarea maximă a precipitațiilor la Cernavodă și luna', raspunsCorect: '50 mm iunie', raspunsuriAcceptate: ['50 iunie', '50', 'iunie', '48 iunie', '52 iunie'], punctaj: 2 },
      { tip: 'completare', enuntInainte: '2. Valoarea minimă a precipitațiilor la Constanța și luna', raspunsCorect: '15 mm februarie', raspunsuriAcceptate: ['15 februarie', '15', 'februarie', '17 februarie', '13 februarie'], punctaj: 2 },
    ],
    
    B: [
      { tip: 'calcul', enunt: '1. Diferența dintre cantitățile medii de precipitații în iulie (Cernavodă vs Constanța)', formula: 'Cernavodă iulie - Constanța iulie', raspunsCorect: 20, intervalAcceptat: [15, 25], unitate: 'mm', punctaj: 2 },
      { tip: 'cauza', enunt: '2. Două cauze ale precipitațiilor reduse la cele două stații', raspunsExemplu: 'Cauza 1: Influențele climatice pontice (de continentalitate) - aerul uscat dinspre Marea Neagră reduce cantitatea de precipitații. Cauza 2: Poziția în extremitatea estică a țării, departe de influențele oceanice atlantice care aduc precipitații abundente în vestul Europei.', cuvinteCheie: ['pontice', 'continental', 'Marea Neagră', 'oceanice'], punctaj: 4 },
    ],
    
    C: [
      { tip: 'completare', enuntInainte: '1. Unitatea de relief vecină în nord cu Grupele Bucegi-Făgăraș', raspunsCorect: 'Depresiunea Brașov', raspunsuriAcceptate: ['Depresiunea Brașov', 'Brașov', 'Depresiunea Făgăraș', 'Podișul Transilvaniei'], punctaj: 1 },
      { tip: 'completare', enuntInainte: '2. Modul de formare', raspunsCorect: 'orogeneza alpină (cutare)', raspunsuriAcceptate: ['orogeneza alpină', 'alpină', 'cutare'], punctaj: 1 },
      { tip: 'completare', enuntInainte: '3. Două tipuri de roci', raspunsCorect: 'șisturi cristaline', raspunsuriAcceptate: ['șisturi cristaline', 'cristaline', 'calcare', 'conglomerate', 'granite'], punctaj: 2 },
      { tip: 'completare', enuntInainte: '4. Altitudinea maximă și vârful', raspunsCorect: '2544 m Vârful Moldoveanu', raspunsuriAcceptate: ['2544 Moldoveanu', '2544', 'Moldoveanu', 'Vf. Moldoveanu'], punctaj: 2 },
      { tip: 'completare', enuntInainte: '5. Două tipuri genetice de lacuri', raspunsCorect: 'glaciare', raspunsuriAcceptate: ['glaciare', 'antropice', 'baraj', 'hidrocentrale', 'naturale'], punctaj: 2 },
      { tip: 'completare', enuntInainte: '6. O resursă naturală', raspunsCorect: 'lemn', raspunsuriAcceptate: ['lemn', 'păduri', 'hidroenergie', 'apă', 'roci de construcție'], punctaj: 1 },
      { tip: 'completare', enuntInainte: '7. Numele unei șosele de altitudine', raspunsCorect: 'Transfăgărășan', raspunsuriAcceptate: ['Transfăgărășan', 'Transfagarasan', 'transfagarasan'], punctaj: 1 },
    ],
    
    D: [
      { tip: 'calcul', enunt: '1. Procentul populației ocupate în agricultură în Bulgaria', formula: '100 - 35.2 - 57.7', raspunsCorect: 7.1, intervalAcceptat: [6.9, 7.3], unitate: '%', punctaj: 2 },
      { tip: 'calcul', enunt: '2. Procentul populației ocupate în Servicii în Grecia', formula: '100 - 12.4 - 22.4', raspunsCorect: 65.2, intervalAcceptat: [65, 65.5], unitate: '%', punctaj: 2 },
      { tip: 'cauza', enunt: '3. Procentul ridicat al populației ocupate în Servicii în Belgia', raspunsExemplu: 'Belgia are economie dezvoltată cu sectoare puternice de servicii: financiar-bancar (Bruxelles - capitală UE), administrație publică europeană (sediu Comisia Europeană, NATO), comerț, turism, transport, IT. Industria și agricultura sunt mecanizate.', cuvinteCheie: ['Bruxelles', 'UE', 'NATO', 'mecanizate'], punctaj: 2 },
    ],
    
    E: [
      { tip: 'cauza', enunt: 'Două argumente pentru potențialul turistic important al Italiei', raspunsExemplu: 'Argument 1: Patrimoniu cultural unic - cel mai mare număr de situri UNESCO din lume (55), monumente antice (Colosseum, Forul Roman), Renașterea italiană (Florența, Veneția, Roma), Vaticanul. Argument 2: Cadru natural variat - litoral mediteranean atractiv (Riviera, Coasta Amalfitană), Munții Alpi pentru schi, lacuri pitorești (Como, Garda), insule (Sicilia, Sardinia, Capri).', cuvinteCheie: ['UNESCO', 'Renaștere', 'Mediterana', 'Alpii'], punctaj: 4 },
    ],
  },
};
