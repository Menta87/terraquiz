export const varianta15 = {
  id: 'varianta-15',
  nume: 'Varianta 15',
  testNumber: 20,
  totalPuncte: 90,
  
  subiectI: {
    titlu: 'Subiect I - Europa',
    
    A: [
      { tip: 'identificare', enunt: '1. Numele statului marcat cu litera A', raspunsCorect: 'Norvegia', raspunsuriAcceptate: ['Norvegia', 'norvegia'], punctaj: 2 },
      { tip: 'identificare', enunt: '2. Numele orașului-capitală marcat cu numărul 10', raspunsCorect: 'Roma', raspunsuriAcceptate: ['Roma', 'roma'], punctaj: 2 },
    ],
    
    B: [
      { tip: 'completare', enuntInainte: '1. Orașul-capitală Minsk este marcat cu numărul', raspunsCorect: '13', raspunsuriAcceptate: ['13'], punctaj: 2 },
      { tip: 'completare', enuntInainte: '2. Statul marcat cu litera C se numește', raspunsCorect: 'Polonia', raspunsuriAcceptate: ['Polonia', 'polonia'], punctaj: 2 },
      { tip: 'completare', enuntInainte: '3. Orașul-capitală marcat cu numărul 15 se numește', raspunsCorect: 'Madrid', raspunsuriAcceptate: ['Madrid', 'madrid'], punctaj: 2 },
    ],
    
    C: [
      { tip: 'grila', enunt: '1. Capitala statului marcat cu litera E se numește:', variante: { a: 'Berlin', b: 'Praga', c: 'Varșovia', d: 'Viena' }, raspunsCorect: 'd', punctaj: 2 },
      { tip: 'grila', enunt: '2. Munții Pirinei reprezintă granița dintre statele:', variante: { a: 'B și F', b: 'D și G', c: 'H și I', d: 'G și B' }, raspunsCorect: 'd', punctaj: 2 },
      { tip: 'grila', enunt: '3. Insula Sardinia aparține statului marcat cu litera:', variante: { a: 'B', b: 'F', c: 'H', d: 'J' }, raspunsCorect: 'b', punctaj: 2 },
      { tip: 'grila', enunt: '4. Orașul marcat cu numărul 4 este capitala statului:', variante: { a: 'Belgia', b: 'Estonia', c: 'Letonia', d: 'Lituania' }, raspunsCorect: 'a', punctaj: 2 },
      { tip: 'grila', enunt: '5. Vulcani activi se găsesc în statul marcat cu litera:', variante: { a: 'A', b: 'D', c: 'F', d: 'I' }, raspunsCorect: 'c', punctaj: 2 },
    ],
    
    D: [
      { tip: 'comparatie', enunt: 'Precizați 3 deosebiri între clima statului B (Suedia) și clima statului H (Grecia)', raspunsExemplu: [
        'Tip de climă: B (Suedia) are climă temperată oceanică (subpolară în nord), iar H (Grecia) climă mediteraneană',
        'Temperaturi: Suedia 2-7°C medie anuală cu ierni reci (-10°C), Grecia 15-18°C cu ierni blânde (8-12°C)',
        'Precipitații: Suedia 500-1000 mm distribuite uniform cu zăpadă, Grecia 400-1000 mm concentrate iarna, veri uscate',
      ], punctajMaxim: 6 },
    ],
    
    E: [
      { tip: 'cauza', enunt: '1. Cauză a producției ridicate de cereale în Ucraina', raspunsExemplu: 'Ucraina are solurile cernoziom (cele mai fertile din lume) acoperind cca 40% din teritoriu, relief plan al Câmpiei Europei de Est ușor de mecanizat, climă temperat-continentală cu veri calde favorabile cerealelor. Este "grânarul Europei".', cuvinteCheie: ['cernoziom', 'plan', 'mecanizat', 'continentală'], punctaj: 2 },
      { tip: 'cauza', enunt: '2. Cauză a populației mai mici în Norvegia decât în alte state', raspunsExemplu: 'Norvegia are climă rece subpolară-oceanică cu ierni lungi și aspre, relief muntos al Alpilor Scandinaviei, fjorduri, ghețari - mari suprafețe sunt nelocuibile sau improprii agriculturii.', cuvinteCheie: ['rece', 'muntos', 'fiorduri', 'nelocuibile'], punctaj: 2 },
    ],
  },
  
  subiectII: {
    titlu: 'Subiect II - România',
    
    A: [
      { tip: 'identificare', enunt: '1. Numele orașului marcat cu numărul 12', raspunsCorect: 'Brașov', raspunsuriAcceptate: ['Brașov', 'Brasov', 'brasov'], punctaj: 2 },
      { tip: 'identificare', enunt: '2. Numele râului marcat cu numărul 1', raspunsCorect: 'Someș', raspunsuriAcceptate: ['Someș', 'Somes', 'somes'], punctaj: 2 },
    ],
    
    B: [
      { tip: 'completare', enuntInainte: '1. Munții Bucegi se află în subunitatea de relief marcată cu litera', raspunsCorect: 'D', raspunsuriAcceptate: ['D', 'd'], punctaj: 2 },
      { tip: 'completare', enuntInainte: '2. Orașul marcat cu numărul 9 se numește', raspunsCorect: 'Timișoara', raspunsuriAcceptate: ['Timișoara', 'Timisoara', 'timisoara'], punctaj: 2 },
      { tip: 'completare', enuntInainte: '3. Râul marcat cu numărul 4 se numește', raspunsCorect: 'Olt', raspunsuriAcceptate: ['Olt', 'olt'], punctaj: 2 },
    ],
    
    C: [
      { tip: 'grila', enunt: '1. Soluri din clasa molisoluri (cernoziom) se găsesc în unitatea marcată cu litera:', variante: { a: 'B', b: 'F', c: 'G', d: 'H' }, raspunsCorect: 'c', punctaj: 2 },
      { tip: 'grila', enunt: '2. Râul marcat cu numărul 5 se numește:', variante: { a: 'Argeș', b: 'Buzău', c: 'Ialomița', d: 'Prahova' }, raspunsCorect: 'c', punctaj: 2 },
      { tip: 'grila', enunt: '3. Munți vulcanici se află în unitatea de relief marcată cu litera:', variante: { a: 'A', b: 'C', c: 'D', d: 'E' }, raspunsCorect: 'a', punctaj: 2 },
      { tip: 'grila', enunt: '4. Influențe climatice submediteraneene pătrund în unitatea marcată cu litera:', variante: { a: 'A', b: 'B', c: 'F', d: 'H' }, raspunsCorect: 'c', punctaj: 2 },
      { tip: 'grila', enunt: '5. Cărbuni se exploatează din unitatea de relief marcată cu litera:', variante: { a: 'B', b: 'D', c: 'E', d: 'G' }, raspunsCorect: 'b', punctaj: 2 },
    ],
    
    D: [
      { tip: 'comparatie', enunt: 'Precizați 3 deosebiri între relieful unității B (Podișul Transilvaniei) și relieful unității H (Câmpia Română)', raspunsExemplu: [
        'Mod de formare: B (Podișul Transilvaniei) prin sedimentare în mare interioară, H (Câmpia Română) prin sedimentare fluvio-lacustră',
        'Altitudini: Podișul Transilvaniei are 300-800 m, iar Câmpia Română 10-300 m',
        'Tipuri de relief: Podișul Transilvaniei are relief structural cu domuri și cute diapire de sare, iar Câmpia Română are relief plan cu loess, crovuri și grinduri',
      ], punctajMaxim: 6 },
    ],
    
    E: [
      { tip: 'cauza', enunt: 'Două activități industriale tradiționale în Subcarpați', raspunsExemplu: 'Activitate 1: extracția petrolului și gazelor naturale (rafinării la Ploiești, Pitești, Câmpina) - Subcarpații sunt principalul bazin petrolifer al României. Activitate 2: industria materialelor de construcții (ciment, var, ceramică) bazată pe calcare și argile abundente, plus extracția sării (Slănic Prahova, Târgu Ocna).', cuvinteCheie: ['petrol', 'rafinării', 'ciment', 'sare'], punctaj: 4 },
    ],
  },
  
  subiectIII: {
    titlu: 'Subiect III - Lumea contemporană',
    hasDiagrama: true,
    hasTabele: true,
    
    A: [
      { tip: 'completare', enuntInainte: '1. Statul cu cea mai mare densitate medie', raspunsCorect: 'Italia', raspunsuriAcceptate: ['Italia', 'italia'], punctaj: 2 },
      { tip: 'completare', enuntInainte: '2. Statul cu cea mai mică densitate medie', raspunsCorect: 'Finlanda', raspunsuriAcceptate: ['Finlanda', 'finlanda'], punctaj: 2 },
    ],
    
    B: [
      { tip: 'cauza', enunt: '1. Doi factori naturali care explică densitatea mare a populației în Italia', raspunsExemplu: 'Factor 1: clima mediteraneană blândă cu veri calde și ierni moderate favorizează locuirea pe litoral și în câmpiile peninsulare. Factor 2: solurile vulcanice fertile (în jurul Vezuviului, Etnei), câmpiile largi (Padul, Câmpia Apulia) și relieful peninsular cu acces la mare au atras populație numeroasă din antichitate.', cuvinteCheie: ['mediteraneană', 'vulcanice', 'litoral', 'fertile'], punctaj: 4 },
      { tip: 'cauza', enunt: '2. Doi factori care explică densitatea mică în Finlanda', raspunsExemplu: 'Factor 1: clima rece subpolară cu ierni lungi (5-6 luni cu temperaturi sub 0°C, până la -30°C în nord) face dificilă locuirea. Factor 2: relieful glaciar cu mii de lacuri (Finlanda - "țara celor 1000 lacuri"), păduri de conifere și soluri sărace nu favorizează agricultura.', cuvinteCheie: ['rece', 'lacuri', 'subpolară', 'sărace'], punctaj: 2 },
    ],
    
    C: [
      { tip: 'completare', enuntInainte: '1. Două unități de relief vecine cu Podișul Sucevei', raspunsCorect: 'Subcarpații Moldovei', raspunsuriAcceptate: ['Subcarpații Moldovei', 'Câmpia Moldovei', 'Carpații Orientali', 'Podișul Moldovei'], punctaj: 2 },
      { tip: 'completare', enuntInainte: '2. Modul de formare', raspunsCorect: 'sedimentare', raspunsuriAcceptate: ['sedimentare', 'depunere', 'sedimentar'], punctaj: 1 },
      { tip: 'completare', enuntInainte: '3. Două tipuri de roci', raspunsCorect: 'gresii', raspunsuriAcceptate: ['gresii', 'argile', 'marne', 'nisipuri', 'calcare'], punctaj: 2 },
      { tip: 'completare', enuntInainte: '4. Un tip genetic de relief', raspunsCorect: 'structural', raspunsuriAcceptate: ['structural', 'cueste', 'fluviatil', 'alunecări'], punctaj: 1 },
      { tip: 'completare', enuntInainte: '5. O influență climatică', raspunsCorect: 'baltice', raspunsuriAcceptate: ['baltice', 'scandinavo-baltice', 'continentale'], punctaj: 1 },
      { tip: 'completare', enuntInainte: '6. Două râuri care îl străbat sau îl limitează', raspunsCorect: 'Suceava', raspunsuriAcceptate: ['Suceava', 'Moldova', 'Siret', 'Bistrița'], punctaj: 2 },
      { tip: 'completare', enuntInainte: '7. Un oraș-reședință de județ situat în această subunitate', raspunsCorect: 'Suceava', raspunsuriAcceptate: ['Suceava', 'suceava'], punctaj: 1 },
    ],
    
    D: [
      { tip: 'cauza', enunt: '1. Două cauze ale diferenței de temperatură între Constanța și Suceava', raspunsExemplu: 'Cauza 1: Constanța se află la Marea Neagră (litoral) - influența moderatoare a mării reduce amplitudinile termice și mențin ierni mai blânde, temperaturi medii mai mari. Cauza 2: Constanța are climă temperat-continentală cu influențe pontice, iar Suceava are climă continentală mai pronunțată, cu altitudine mai mare (300-500 m) și influențe baltice (mai reci).', cuvinteCheie: ['mare', 'moderatoare', 'pontice', 'baltice'], punctaj: 4 },
      { tip: 'completare', enuntInainte: '2. Tipul de climă al Bucureștiului', raspunsCorect: 'temperat-continentală', raspunsuriAcceptate: ['temperat-continentală', 'continentală', 'temperat continentală'], punctaj: 2 },
    ],
    
    E: [
      { tip: 'cauza', enunt: 'Două argumente pentru potențialul turistic al României', raspunsExemplu: 'Argument 1: Patrimoniu cultural unic - 9 situri UNESCO (mănăstirile pictate din Bucovina, fortificațiile dacice, satele cu biserici fortificate din Transilvania, Delta Dunării), castele medievale (Bran, Peleș), tradiții populare vii. Argument 2: Cadru natural variat - Carpații pentru drumeții/schi (Sinaia, Poiana Brașov), litoralul Mării Negre pentru turism estival, Delta Dunării (rezervație UNESCO), peșteri (Scărișoara), zone montane sălbatice (Apusenii).', cuvinteCheie: ['UNESCO', 'Bucovina', 'Carpați', 'Delta'], punctaj: 4 },
    ],
  },
};
