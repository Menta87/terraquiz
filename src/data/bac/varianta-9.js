export const varianta9 = {
  id: 'varianta-9',
  nume: 'Varianta 9',
  an: 2020,
  totalPuncte: 90,
  
  subiectI: {
    titlu: 'Subiect I - Europa',
    harta: 'Test_6',
    
    A: [
      { tip: 'identificare', enunt: '1. Numele statului marcat cu litera H', raspunsCorect: 'Suedia', raspunsuriAcceptate: ['suedia', 'Suedia'], punctaj: 2 },
      { tip: 'identificare', enunt: '2. Numele orașului-capitală marcat cu numărul 10', raspunsCorect: 'Sarajevo', raspunsuriAcceptate: ['sarajevo', 'Sarajevo'], punctaj: 2 },
    ],
    
    B: [
      { tip: 'completare', enuntInainte: '1. Orașul marcat cu numărul 15 este capitala statului', raspunsCorect: 'Elveția', raspunsuriAcceptate: ['elvetia', 'Elveția', 'Elvetia', 'Berna'], punctaj: 2 },
      { tip: 'completare', enuntInainte: '2. Statul marcat cu litera B se numește', raspunsCorect: 'Irlanda', raspunsuriAcceptate: ['irlanda', 'Irlanda'], punctaj: 2 },
      { tip: 'completare', enuntInainte: '3. Orașul marcat cu numărul 1 se numește', raspunsCorect: 'Riga', raspunsuriAcceptate: ['riga', 'Riga'], punctaj: 2 },
    ],
    
    C: [
      { tip: 'grila', enunt: '1. Orașul marcat cu numărul 3 este capitala statului:', variante: { a: 'Estonia', b: 'Finlanda', c: 'Letonia', d: 'Lituania' }, raspunsCorect: 'd', punctaj: 2 },
      { tip: 'grila', enunt: '2. Peninsula Kola este situată pe teritoriul statului marcat cu litera:', variante: { a: 'B', b: 'F', c: 'H', d: 'J' }, raspunsCorect: 'd', punctaj: 2 },
      { tip: 'grila', enunt: '3. Vegetația de stepă (pustă) este caracteristică statului marcat cu litera:', variante: { a: 'A', b: 'B', c: 'C', d: 'I' }, raspunsCorect: 'd', punctaj: 2 },
      { tip: 'grila', enunt: '4. Numeroase lacuri glaciare s-au format în nordul statului marcat cu litera:', variante: { a: 'B', b: 'C', c: 'G', d: 'I' }, raspunsCorect: 'c', punctaj: 2 },
      { tip: 'grila', enunt: '5. Rezerve importante de minereu de fier se găsesc în subsolul statului marcat cu litera:', variante: { a: 'B', b: 'C', c: 'I', d: 'J' }, raspunsCorect: 'd', punctaj: 2 },
    ],
    
    D: [
      { tip: 'comparatie', enunt: 'Precizați 2 asemănări și o deosebire între clima statului D (Franța) și clima statului E (Italia)', raspunsExemplu: [
        'Asemănare: Ambele au climă mediteraneană în zonele sudice',
        'Asemănare: Ambele sunt influențate de Marea Mediterană (clima caldă)',
        'Deosebire: Franța are climă oceanică în vest, iar Italia are predominant mediteraneană',
      ], punctajMaxim: 6 },
    ],
    
    E: [
      { tip: 'cauza', enunt: '1. Prezentați o cauză a valorilor scăzute ale densității populației în țările Peninsulei Scandinave', raspunsExemplu: 'Climă rece subpolară și polară, ierni lungi, soluri sărace, relief muntos al Alpilor Scandinaviei, suprafețe mari acoperite de păduri și mlaștini, care fac dificilă locuirea.', cuvinteCheie: ['climă', 'rece', 'munți', 'păduri'], punctaj: 2 },
      { tip: 'cauza', enunt: '2. Prezentați o altă cauză', raspunsExemplu: 'Iarna lungă (6-8 luni) cu temperaturi foarte scăzute (-20 până la -30°C în nord) și ore puține de soare, ceea ce limitează activitățile economice și agricultura.', cuvinteCheie: ['iarna', 'lungă', 'temperaturi', 'soare'], punctaj: 2 },
    ],
  },
  
  subiectII: {
    titlu: 'Subiect II - România',
    harta: 'Test_6',
    
    A: [
      { tip: 'identificare', enunt: '1. Numele orașului marcat cu numărul 8', raspunsCorect: 'Brașov', raspunsuriAcceptate: ['brasov', 'Brașov', 'Brasov'], punctaj: 2 },
      { tip: 'identificare', enunt: '2. Numele râului marcat cu numărul 1', raspunsCorect: 'Jiu', raspunsuriAcceptate: ['jiu', 'Jiu'], punctaj: 2 },
    ],
    
    B: [
      { tip: 'completare', enuntInainte: '1. Someșul Mic străbate orașul marcat cu numărul', raspunsCorect: '9', raspunsuriAcceptate: ['9'], punctaj: 2 },
      { tip: 'completare', enuntInainte: '2. Râul marcat cu numărul 2 se numește', raspunsCorect: 'Olt', raspunsuriAcceptate: ['olt', 'Olt'], punctaj: 2 },
      { tip: 'completare', enuntInainte: '3. Orașul marcat cu numărul 11 se numește', raspunsCorect: 'Reșița', raspunsuriAcceptate: ['resita', 'Reșița', 'Resita'], punctaj: 2 },
    ],
    
    C: [
      { tip: 'grila', enunt: '1. Râul marcat cu numărul 4 străbate orașul:', variante: { a: 'București', b: 'Pitești', c: 'Ploiești', d: 'Târgoviște' }, raspunsCorect: 'a', punctaj: 2 },
      { tip: 'grila', enunt: '2. Relieful pe structuri de tip „dom" este specific unității marcate cu litera:', variante: { a: 'C', b: 'D', c: 'E', d: 'H' }, raspunsCorect: 'b', punctaj: 2 },
      { tip: 'grila', enunt: '3. În unitatea de relief marcată cu litera G pătrund influențe climatice:', variante: { a: 'baltice', b: 'oceanice', c: 'pontice', d: 'submediteraneene' }, raspunsCorect: 'c', punctaj: 2 },
      { tip: 'grila', enunt: '4. La cea mai joasă altitudine se află orașul marcat cu numărul:', variante: { a: '7', b: '8', c: '9', d: '11' }, raspunsCorect: 'a', punctaj: 2 },
      { tip: 'grila', enunt: '5. Etajul pădurilor de conifere ocupă suprafețe mari în unitatea marcată cu litera:', variante: { a: 'B', b: 'C', c: 'G', d: 'H' }, raspunsCorect: 'd', punctaj: 2 },
    ],
    
    D: [
      { tip: 'comparatie', enunt: 'Precizați o asemănare și 2 deosebiri între relieful unității A (Subcarpații Getici) și unității C (Podișul Getic)', raspunsExemplu: [
        'Asemănare: Ambele s-au format prin sedimentare și au altitudini medii-mici',
        'Deosebire: Subcarpații au altitudini ușor mai mari (300-1000 m), iar Podișul Getic sub 600 m',
        'Deosebire: Subcarpații au structură mai cutată, iar Podișul Getic este mai puțin fragmentat',
      ], punctajMaxim: 6 },
    ],
    
    E: [
      { tip: 'cauza', enunt: '1. Prezentați un argument pentru importanța fondului forestier în România', raspunsExemplu: 'Pădurile au rol de protecție împotriva eroziunii solului, prevenirea alunecărilor de teren și inundațiilor, mențin biodiversitatea și produc oxigen.', cuvinteCheie: ['protecție', 'eroziune', 'biodiversitate'], punctaj: 2 },
      { tip: 'cauza', enunt: '2. Prezentați un alt argument', raspunsExemplu: 'Pădurile furnizează lemn pentru construcții, mobilă, industrie, și sunt sursă de venit prin turism (păduri, parcuri naționale) și produse forestiere (ciuperci, fructe de pădure).', cuvinteCheie: ['lemn', 'industrie', 'turism'], punctaj: 2 },
    ],
  },
  
  subiectIII: {
    titlu: 'Subiect III - Lumea contemporană',
    
    A: [
      { tip: 'identificare', enunt: '1. Valoarea maximă a precipitațiilor la Cernavodă (65 mm) și luna (iunie)', raspunsCorect: '65 iunie', raspunsuriAcceptate: ['65 iunie', 'iunie', '65', 'iunie 65'], punctaj: 2 },
      { tip: 'identificare', enunt: '2. Valoarea minimă a precipitațiilor la Constanța (între 23-24,5 mm) și luna (martie)', raspunsCorect: '24 martie', raspunsuriAcceptate: ['24 martie', 'martie', '23 martie', '24', '23'], punctaj: 2 },
    ],
    
    B: [
      { tip: 'calcul', enunt: '1. Calculați diferența între precipitațiile celor două stații în luna iulie (între 18 și 20 mm)', formula: 'Cernavodă - Constanța', raspunsCorect: 19, intervalAcceptat: [18, 20], unitate: 'mm', punctaj: 2 },
      { tip: 'cauza', enunt: '2. Prezentați o cauză a valorilor reduse de precipitații în zona Constanța-Cernavodă', raspunsExemplu: 'Influența climei continentale aride din est și prezența Mării Negre relativ mici care nu furnizează multă umiditate, plus relieful de câmpie/podiș lipsit de masive montane care să forțeze precipitațiile.', cuvinteCheie: ['ariditate', 'continentală', 'mare', 'relief'], punctaj: 2 },
      { tip: 'cauza', enunt: '3. Prezentați o altă cauză', raspunsExemplu: 'Bariera Munților Carpați împiedică pătrunderea maselor de aer umede atlantice spre estul țării, ducând la precipitații reduse în Dobrogea și Câmpia Bărăganului.', cuvinteCheie: ['Carpați', 'barieră', 'atlantic'], punctaj: 2 },
    ],
    
    C: [
      { tip: 'completare', enuntInainte: '1. Pentru Carpații Meridionali (Grupele Bucegi și Făgăraș): unitatea de relief vecină la nord este', raspunsCorect: 'Depresiunea Făgărașului', raspunsuriAcceptate: ['Depresiunea Făgărașului', 'Făgărașului', 'Depresiunea Brașovului', 'Brașovului', 'Depresiunea Transilvaniei'], punctaj: 2 },
      { tip: 'completare', enuntInainte: '2. Pentru Carpații Meridionali: modul de formare este', raspunsCorect: 'cutare', raspunsuriAcceptate: ['cutare', 'orogeneza alpină', 'orogeneza'], punctaj: 2 },
      { tip: 'completare', enuntInainte: '3. Pentru Carpații Meridionali: altitudinea maximă (m) și vârful', raspunsCorect: '2544 Moldoveanu', raspunsuriAcceptate: ['2544', 'Moldoveanu', '2544 Moldoveanu', 'Vârful Moldoveanu'], punctaj: 2 },
      { tip: 'completare', enuntInainte: '4. Pentru Carpații Meridionali: un tip de lac glaciar este', raspunsCorect: 'Bâlea',  raspunsuriAcceptate: ['Bâlea', 'balea', 'Capra', 'capra', 'Galeș'], punctaj: 2 },
      { tip: 'completare', enuntInainte: '5. Pentru Carpații Meridionali: o șosea de altitudine este', raspunsCorect: 'Transfăgărășan', raspunsuriAcceptate: ['Transfăgărășan', 'transfagarasan', 'Transbucegi'], punctaj: 2 },
    ],
    
    D: [
      { tip: 'calcul', enunt: '1. Calculați procentul populației ocupate în agricultură în Bulgaria (100 - 35,2 - 57,7)', formula: '100 - Industrie - Servicii', raspunsCorect: 7.1, intervalAcceptat: [6.9, 7.3], unitate: '%', punctaj: 2 },
      { tip: 'calcul', enunt: '2. Calculați procentul populației ocupate în Servicii în Grecia (100 - 12,4 - 22,4)', formula: '100 - Agricultură - Industrie', raspunsCorect: 65.2, intervalAcceptat: [65.0, 65.4], unitate: '%', punctaj: 2 },
      { tip: 'cauza', enunt: '3. Explicați procentul ridicat al populației ocupate în Servicii în Belgia', raspunsExemplu: 'Belgia are economie modernă, urbanizare mare (peste 95% urban), sediul UE și NATO la Bruxelles, industrie de servicii financiare, comerț, transport și logistică foarte dezvoltată.', cuvinteCheie: ['urban', 'UE', 'NATO', 'financiar'], punctaj: 2 },
    ],
    
    E: [
      { tip: 'cauza', enunt: '1. Prezentați un argument pentru potențialul turistic al Italiei', raspunsExemplu: 'Italia are patrimoniu cultural UNESCO bogat (Roma, Florența, Veneția, Pompei), monumente antice romane (Colosseum, Forul Roman), arta renascentistă (Capela Sixtină, David al lui Michelangelo).', cuvinteCheie: ['UNESCO', 'Roma', 'Renaștere', 'monumente'], punctaj: 2 },
      { tip: 'cauza', enunt: '2. Prezentați un al doilea argument', raspunsExemplu: 'Italia oferă peisaje naturale variate (Alpii, Lacurile Italiene, Coasta Amalfi, insulele Sicilia și Sardinia), climă mediteraneană plăcută și gastronomie internațional recunoscută (pizza, paste, vinuri).', cuvinteCheie: ['Alpii', 'mediteraneană', 'gastronomie', 'plaje'], punctaj: 2 },
    ],
  },
};
