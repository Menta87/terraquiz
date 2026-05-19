export const varianta3 = {
  id: 'varianta-3',
  nume: 'Varianta 3',
  testNumber: 8,
  totalPuncte: 90,
  
  subiectI: {
    titlu: 'Subiect I - Europa',
    
    A: [
      { tip: 'identificare', enunt: '1. Numele statului marcat cu litera C', raspunsCorect: 'Finlanda', raspunsuriAcceptate: ['Finlanda', 'finlanda'], punctaj: 2 },
      { tip: 'identificare', enunt: '2. Numele orașului-capitală marcat cu numărul 6', raspunsCorect: 'București', raspunsuriAcceptate: ['București', 'Bucuresti', 'bucuresti'], punctaj: 2 },
    ],
    
    B: [
      { tip: 'completare', enuntInainte: '1. Orașul Reykjavik este capitala statului marcat cu litera', raspunsCorect: 'J', raspunsuriAcceptate: ['J', 'j', 'Islanda', 'islanda'], punctaj: 2 },
      { tip: 'completare', enuntInainte: '2. Capitala statului marcat cu litera E se numește', raspunsCorect: 'Viena', raspunsuriAcceptate: ['Viena', 'viena'], punctaj: 2 },
      { tip: 'completare', enuntInainte: '3. Orașul marcat cu numărul 13 este capitala statului numit', raspunsCorect: 'Belarus', raspunsuriAcceptate: ['Belarus', 'belarus'], punctaj: 2 },
    ],
    
    C: [
      { tip: 'grila', enunt: '1. Statul marcat cu litera I se numește:', variante: { a: 'Andorra', b: 'Cipru', c: 'Malta', d: 'Monaco' }, raspunsCorect: 'c', punctaj: 2 },
      { tip: 'grila', enunt: '2. Teritoriul statului marcat cu litera H nu este străbătut de:', variante: { a: 'Dunăre', b: 'Rhin', c: 'Rhône', d: 'Sena' }, raspunsCorect: 'a', punctaj: 2 },
      { tip: 'grila', enunt: '3. Capitala statului marcat cu litera A se numește:', variante: { a: 'Minsk', b: 'Riga', c: 'Tallinn', d: 'Vilnius' }, raspunsCorect: 'd', punctaj: 2 },
      { tip: 'grila', enunt: '4. Aglomerația urbană Randstad-Holland se află pe teritoriul statului marcat cu litera:', variante: { a: 'A', b: 'B', c: 'E', d: 'J' }, raspunsCorect: 'b', punctaj: 2 },
      { tip: 'grila', enunt: '5. Petrol, cărbuni, gaze naturale, minereu de fier, mangan se exploatează din statul al cărui oraș-capitală este marcat cu numărul:', variante: { a: '9', b: '12', c: '13', d: '14' }, raspunsCorect: 'd', punctaj: 2 },
    ],
    
    D: [
      { tip: 'comparatie', enunt: 'Precizați 3 deosebiri între clima statului D (Ucraina) și clima statului F (Portugalia)', raspunsExemplu: [
        'Tip de climă: D (Ucraina) are climă temperat-continentală, iar F (Portugalia) climă mediteraneană (temperat-oceanică în nord)',
        'Temperaturi: Ucraina 5-10°C medie anuală cu ierni reci (-5°C), Portugalia 15-18°C cu ierni blânde (10°C)',
        'Precipitații: Ucraina 400-600 mm uniform pe an, Portugalia 600-1000 mm concentrate iarna, veri secetoase',
      ], punctajMaxim: 6 },
    ],
    
    E: [
      { tip: 'cauza', enunt: '1. Factor natural care favorizează utilizarea hidroenergiei în Norvegia', raspunsExemplu: 'Relieful muntos (Alpii Scandinaviei) cu pante mari, precipitațiile abundente (1000-2000 mm/an), prezența numeroaselor lacuri glaciare și fiordurilor adânci oferă potențial hidroenergetic enorm.', cuvinteCheie: ['muntos', 'pante', 'precipitații', 'fiorduri'], punctaj: 2 },
      { tip: 'cauza', enunt: '2. Factor natural care favorizează culturile de citrice din Europa Sudică', raspunsExemplu: 'Clima mediteraneană cu veri calde (25-30°C), ierni blânde (peste 10°C), insolație puternică, lipsa înghețului prelungit și solurile fertile sunt ideale pentru cultivarea citricelor (portocale, lămâi, mandarine).', cuvinteCheie: ['mediteraneană', 'cald', 'ierni blânde', 'insolație'], punctaj: 2 },
    ],
  },
  
  subiectII: {
    titlu: 'Subiect II - România',
    
    A: [
      { tip: 'identificare', enunt: '1. Numele orașului marcat cu numărul 12', raspunsCorect: 'Craiova', raspunsuriAcceptate: ['Craiova', 'craiova'], punctaj: 2 },
      { tip: 'identificare', enunt: '2. Numele râului marcat cu numărul 5', raspunsCorect: 'Buzău', raspunsuriAcceptate: ['Buzău', 'Buzau', 'buzau'], punctaj: 2 },
    ],
    
    B: [
      { tip: 'completare', enuntInainte: '1. Râul marcat cu numărul 3 se numește', raspunsCorect: 'Mureș', raspunsuriAcceptate: ['Mureș', 'Mures', 'mures'], punctaj: 2 },
      { tip: 'completare', enuntInainte: '2. Relief vulcanic s-a format în unitatea de relief marcată cu litera', raspunsCorect: 'C', raspunsuriAcceptate: ['C', 'c'], punctaj: 2 },
      { tip: 'completare', enuntInainte: '3. Orașul marcat cu numărul 11 este străbătut de râul numit', raspunsCorect: 'Bega', raspunsuriAcceptate: ['Bega', 'bega'], punctaj: 2 },
    ],
    
    C: [
      { tip: 'grila', enunt: '1. Munți formați în orogeneza hercinică se află în unitatea de relief marcată cu litera:', variante: { a: 'C', b: 'D', c: 'F', d: 'G' }, raspunsCorect: 'c', punctaj: 2 },
      { tip: 'grila', enunt: '2. Râul marcat cu numărul 1 se numește:', variante: { a: 'Cerna', b: 'Cibin', c: 'Lotru', d: 'Motru' }, raspunsCorect: 'a', punctaj: 2 },
      { tip: 'grila', enunt: '3. În unitatea G nu există zona alpină din cauza:', variante: { a: 'altitudinilor reduse', b: 'influențelor climatice baltice', c: 'reliefului glaciar', d: 'solurilor din clasa molisoluri' }, raspunsCorect: 'a', punctaj: 2 },
      { tip: 'grila', enunt: '4. Influențe climatice de ariditate (continentale) pătrund în unitatea de relief marcată cu litera:', variante: { a: 'A', b: 'D', c: 'G', d: 'H' }, raspunsCorect: 'b', punctaj: 2 },
      { tip: 'grila', enunt: '5. Orașul marcat cu numărul 9 se numește:', variante: { a: 'Buzău', b: 'Pitești', c: 'Ploiești', d: 'Târgoviște' }, raspunsCorect: 'c', punctaj: 2 },
    ],
    
    D: [
      { tip: 'comparatie', enunt: 'Precizați 3 deosebiri între relieful unității E (Podișul Getic) și relieful unității H (Grupele Bucegi și Făgăraș)', raspunsExemplu: [
        'Mod de formare: E (Podișul Getic) s-a format prin sedimentare piemontană, iar H (Bucegi-Făgăraș) prin orogeneza alpină (cutare)',
        'Altitudini: Podișul Getic are 200-700 m, iar Grupele Bucegi-Făgăraș depășesc 2500 m (Vf. Moldoveanu 2544 m)',
        'Tipuri de roci: Podișul Getic are roci sedimentare (argile, pietrișuri, nisipuri), iar Bucegi-Făgăraș au cristaline, conglomerate, calcare',
      ], punctajMaxim: 6 },
    ],
    
    E: [
      { tip: 'cauza', enunt: '1. Cauză care determină alunecările de teren în Subcarpați', raspunsExemplu: 'Subcarpații au structură geologică din argile și marne (roci impermeabile) care, îmbibate cu apă, devin instabile. Despăduririle, pantele accentuate și precipitațiile abundente declanșează alunecările.', cuvinteCheie: ['argile', 'marne', 'pante', 'despăduriri'], punctaj: 2 },
      { tip: 'cauza', enunt: '2. Cauză care a determinat temperatura minimă absolută în Depresiunea Brașovului', raspunsExemplu: 'Depresiunea Brașovului este o regiune închisă montană unde aerul rece, mai dens, se acumulează la fund (inversiune termică). Iarna se înregistrează frecvent -30°C, iar recordul -38,5°C la Bod (1942).', cuvinteCheie: ['inversiune', 'aer rece', 'depresiune', 'închisă'], punctaj: 2 },
    ],
  },
  
  subiectIII: {
    titlu: 'Subiect III - Lumea contemporană',
    hasDiagrama: true,
    hasTabele: true,
    
    A: [
      { tip: 'identificare', enunt: '1. Valoarea cea mai mare a precipitațiilor medii lunare și luna', raspunsCorect: '75 mm iunie', raspunsuriAcceptate: ['75 mm iunie', '75 iunie', 'iunie 75', 'iunie', '75'], punctaj: 2 },
      { tip: 'identificare', enunt: '2. Valoarea minimă a precipitațiilor medii lunare și luna', raspunsCorect: '28 mm februarie', raspunsuriAcceptate: ['28 mm februarie', '28 februarie', 'februarie 28', 'februarie', '28', '27', '29'], punctaj: 2 },
    ],
    
    B: [
      { tip: 'calcul', enunt: '1. Diferența dintre precipitațiile din noiembrie și decembrie', formula: 'noi - dec', raspunsCorect: 19, intervalAcceptat: [18, 20], unitate: 'mm', punctaj: 2 },
      { tip: 'calcul', enunt: '2. Diferența între maxima și minima precipitațiilor medii lunare', formula: 'max - min', raspunsCorect: 47, intervalAcceptat: [46, 48], unitate: 'mm', punctaj: 2 },
      { tip: 'completare', enuntInainte: '3. Două luni în care precipitațiile sunt între 60 și 65 mm', raspunsCorect: 'aprilie august', raspunsuriAcceptate: ['aprilie august', 'aprilie', 'august', 'octombrie', 'noiembrie', 'aprilie noiembrie'], punctaj: 2 },
    ],
    
    C: [
      { tip: 'completare', enuntInainte: '1. Modul de formare al Subcarpaților Moldovei', raspunsCorect: 'orogeneza alpină (cutare)', raspunsuriAcceptate: ['orogeneza alpină', 'cutare', 'alpină'], punctaj: 1 },
      { tip: 'completare', enuntInainte: '2. Vecini la nord și la sud', raspunsCorect: 'Podișul Sucevei la N și Subcarpații Curburii la S', raspunsuriAcceptate: ['Podișul Sucevei', 'Subcarpații Curburii', 'Sucevei', 'Curburii'], punctaj: 2 },
      { tip: 'completare', enuntInainte: '3. O influență climatică', raspunsCorect: 'baltice (scandinavo-baltice)', raspunsuriAcceptate: ['baltice', 'scandinavo-baltice', 'continentale', 'est-europene'], punctaj: 1 },
      { tip: 'completare', enuntInainte: '4. Două râuri care îi străbat sau îi limitează', raspunsCorect: 'Moldova', raspunsuriAcceptate: ['Moldova', 'Bistrița', 'Siret', 'Trotuș', 'Tazlău'], punctaj: 2 },
      { tip: 'completare', enuntInainte: '5. Un etaj de vegetație', raspunsCorect: 'foioase (fag)', raspunsuriAcceptate: ['foioase', 'fag', 'stejar', 'pădure'], punctaj: 1 },
      { tip: 'completare', enuntInainte: '6. Două resurse de subsol', raspunsCorect: 'petrol', raspunsuriAcceptate: ['petrol', 'sare', 'cărbuni', 'gaze naturale', 'lignit'], punctaj: 2 },
      { tip: 'completare', enuntInainte: '7. Un oraș-reședință de județ', raspunsCorect: 'Piatra Neamț', raspunsuriAcceptate: ['Piatra Neamț', 'Piatra Neamt', 'Bacău', 'Bacau'], punctaj: 1 },
    ],
    
    D: [
      { tip: 'calcul', enunt: '1. Sporul natural Belgia', formula: 'natalitate - mortalitate', raspunsCorect: 2.2, intervalAcceptat: [2.0, 2.4], unitate: '‰', punctaj: 2 },
      { tip: 'calcul', enunt: '1. Sporul natural România', formula: 'natalitate - mortalitate', raspunsCorect: -1.5, intervalAcceptat: [-1.7, -1.3], unitate: '‰', punctaj: 2 },
      { tip: 'cauza', enunt: '2. Cauză a mortalității reduse din Belgia', raspunsExemplu: 'Belgia are sistem medical performant, nivel de trai ridicat, condiții bune de igienă și alimentație, acces ușor la îngrijiri medicale, speranță de viață mare (peste 80 ani).', cuvinteCheie: ['medical', 'trai', 'igienă', 'speranță'], punctaj: 2 },
    ],
    
    E: [
      { tip: 'cauza', enunt: 'Două caracteristici ale apelor Mării Negre', raspunsExemplu: 'Salinitate redusă (17-22‰, jumătate față de Oceanul Planetar) din cauza aportului fluvial mare. Stratificare verticală cu apă oxigenată la suprafață și apă sulfhidrică (anoxică) la adâncimi sub 200 m, fiind cea mai mare mare anoxică din lume.', cuvinteCheie: ['salinitate', 'fluvial', 'sulfhidrică', 'anoxică', 'stratificare'], punctaj: 4 },
    ],
  },
};
