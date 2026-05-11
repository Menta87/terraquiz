export const varianta4 = {
  id: 'varianta-4',
  nume: 'Varianta 4',
  an: 2020,
  totalPuncte: 90,
  
  subiectI: {
    titlu: 'Subiect I - Europa',
    harta: 'Test_6',
    
    A: [
      {
        tip: 'identificare',
        enunt: '1. Numele statului marcat, pe hartă, cu litera C',
        raspunsCorect: 'Irlanda',
        raspunsuriAcceptate: ['irlanda', 'Irlanda'],
        punctaj: 2,
      },
      {
        tip: 'identificare',
        enunt: '2. Numele orașului-capitală marcat, pe hartă, cu numărul 15',
        raspunsCorect: 'Londra',
        raspunsuriAcceptate: ['londra', 'Londra', 'London'],
        punctaj: 2,
      },
    ],
    
    B: [
      {
        tip: 'completare',
        enuntInainte: '1. Orașul marcat cu numărul 9 este capitala statului numit',
        raspunsCorect: 'Lisabona',
        raspunsuriAcceptate: ['lisabona', 'Lisabona', 'Portugalia', 'portugalia'],
        punctaj: 2,
      },
      {
        tip: 'completare',
        enuntInainte: '2. Capitala statului marcat cu litera H este orașul numit',
        raspunsCorect: 'Danemarca',
        raspunsuriAcceptate: ['danemarca', 'Danemarca', 'Copenhaga', 'copenhaga'],
        punctaj: 2,
      },
      {
        tip: 'completare',
        enuntInainte: '3. Statul marcat cu litera I se numește',
        raspunsCorect: 'Croația',
        raspunsuriAcceptate: ['croatia', 'Croația', 'Croatia', 'croația'],
        punctaj: 2,
      },
    ],
    
    C: [
      {
        tip: 'grila',
        enunt: '1. Orașul marcat cu numărul 11 este capitala statului numit:',
        variante: { a: 'Bosnia și Herțegovina', b: 'Croația', c: 'Muntenegru', d: 'Slovenia' },
        raspunsCorect: 'a',
        punctaj: 2,
      },
      {
        tip: 'grila',
        enunt: '2. Munți formați în orogeneza caledoniană se află în statul marcat cu litera:',
        variante: { a: 'D', b: 'F', c: 'H', d: 'I' },
        raspunsCorect: 'a',
        punctaj: 2,
      },
      {
        tip: 'grila',
        enunt: '3. Orașul marcat cu numărul 6 se numește:',
        variante: { a: 'Monaco', b: 'Nicosia', c: 'San Marino', d: 'Valletta' },
        raspunsCorect: 'd',
        punctaj: 2,
      },
      {
        tip: 'grila',
        enunt: '4. Statul Vatican este o enclavă situată în orașul marcat cu numărul:',
        variante: { a: '4', b: '8', c: '12', d: '13' },
        raspunsCorect: 'b',
        punctaj: 2,
      },
      {
        tip: 'grila',
        enunt: '5. Cel mai mare oraș european ca număr de locuitori este marcat cu numărul:',
        variante: { a: '2', b: '3', c: '12', d: '13' },
        raspunsCorect: 'a',
        punctaj: 2,
      },
    ],
    
    D: [
      {
        tip: 'comparatie',
        enunt: 'Precizați 3 deosebiri între clima statului E (Islanda) și clima statului G (Franța)',
        raspunsExemplu: [
          'Tip de climă: Islanda are climă subpolară oceanică, iar Franța are climă temperat-oceanică (în vest) și mediteraneană (în sud)',
          'Temperaturi: Islanda are temperaturi mai scăzute (medie anuală 4-5°C), iar Franța mai ridicate (medie anuală 11-15°C)',
          'Influențe genetice: Islanda este influențată de Curentul Labrador (rece), iar Franța de Curentul Golfului (cald)',
        ],
        punctajMaxim: 6,
      },
    ],
    
    E: [
      {
        tip: 'cauza',
        enunt: '1. Explicați faptul că, deși în statul F (Olanda) predomină relieful de câmpie, această țară nu este o mare producătoare de cereale',
        raspunsExemplu: 'Olanda are suprafață mică, soluri argilo-nisipoase nu foarte fertile pentru cereale, populație numeroasă care preferă cultivarea legumelor și florilor (mai profitabile), specializare în zootehnie (lapte, brânză) și flori.',
        cuvinteCheie: ['suprafață', 'mică', 'sol', 'zootehnie', 'flori'],
        punctaj: 2,
      },
      {
        tip: 'cauza',
        enunt: '2. Prezentați o cauză a existenței vegetației de stepă în statul A (Ucraina/Belarus)',
        raspunsExemplu: 'Vegetația de stepă există datorită climei temperat-continentale cu precipitații reduse (300-500 mm/an), verilor calde și uscate, solurilor de tip cernoziom și absenței pădurilor naturale în zonele de câmpie joasă.',
        cuvinteCheie: ['continental', 'precipitații', 'reduse', 'cernoziom', 'uscat'],
        punctaj: 2,
      },
    ],
  },
  
  subiectII: {
    titlu: 'Subiect II - România',
    harta: 'Test_6',
    
    A: [
      {
        tip: 'identificare',
        enunt: '1. Numele orașului marcat, pe hartă, cu numărul 10',
        raspunsCorect: 'Constanța',
        raspunsuriAcceptate: ['constanta', 'Constanța', 'Constanta'],
        punctaj: 2,
      },
      {
        tip: 'identificare',
        enunt: '2. Numele arterei hidrografice marcate, pe hartă, cu numărul 4',
        raspunsCorect: 'Dunăre',
        raspunsuriAcceptate: ['dunarea', 'Dunărea', 'Dunărea', 'Dunăre', 'dunare'],
        punctaj: 2,
      },
    ],
    
    B: [
      {
        tip: 'completare',
        enuntInainte: '1. Orașul marcat, pe hartă, cu numărul 7 se numește',
        raspunsCorect: 'Slatina',
        raspunsuriAcceptate: ['slatina', 'Slatina'],
        punctaj: 2,
      },
      {
        tip: 'completare',
        enuntInainte: '2. Râul marcat, pe hartă, cu numărul 2 se numește',
        raspunsCorect: 'Bârlad',
        raspunsuriAcceptate: ['barlad', 'Bârlad', 'Barlad'],
        punctaj: 2,
      },
      {
        tip: 'completare',
        enuntInainte: '3. Orașul Botoșani este situat în unitatea de relief marcată cu litera',
        raspunsCorect: 'A',
        raspunsuriAcceptate: ['A', 'a', 'Podișul Moldovei', 'Sucevei'],
        punctaj: 2,
      },
    ],
    
    C: [
      {
        tip: 'grila',
        enunt: '1. Lacuri glaciare există în unitatea de relief marcată cu litera:',
        variante: { a: 'A', b: 'C', c: 'E', d: 'F' },
        raspunsCorect: 'c',
        punctaj: 2,
      },
      {
        tip: 'grila',
        enunt: '2. Râul marcat cu numărul 3 se numește:',
        variante: { a: 'Mureș', b: 'Olt', c: 'Târnava Mare', d: 'Târnava Mică' },
        raspunsCorect: 'c',
        punctaj: 2,
      },
      {
        tip: 'grila',
        enunt: '3. Soluri din clasa molisoluri (de tip cernoziom) s-au format pe suprafețe mari în unitatea de relief marcată cu litera:',
        variante: { a: 'D', b: 'E', c: 'F', d: 'G' },
        raspunsCorect: 'a',
        punctaj: 2,
      },
      {
        tip: 'grila',
        enunt: '4. Orașul marcat cu numărul 11 se numește:',
        variante: { a: 'Baia Mare', b: 'Oradea', c: 'Satu Mare', d: 'Zalău' },
        raspunsCorect: 'd',
        punctaj: 2,
      },
      {
        tip: 'grila',
        enunt: '5. Influențe climatice submediteraneene pătrund în unitatea de relief marcată cu litera:',
        variante: { a: 'A', b: 'C', c: 'D', d: 'H' },
        raspunsCorect: 'd',
        punctaj: 2,
      },
    ],
    
    D: [
      {
        tip: 'comparatie',
        enunt: 'Precizați 3 deosebiri între relieful unității F (Subcarpații Moldovei) și unității G (Grupa Nordică a Carpaților Orientali - Maramureș și Bucovina)',
        raspunsExemplu: [
          'Mod de formare: Subcarpații s-au format prin cutarea sedimentelor, iar Carpații Maramureșului prin orogeneza alpină',
          'Altitudini: Subcarpații au altitudini mici (300-1000 m), iar Carpații Maramureșului mari (peste 2000 m - Vârful Pietrosu)',
          'Roci: Subcarpații sunt din roci sedimentare, iar Carpații Maramureșului din roci magmatice și metamorfice',
        ],
        punctajMaxim: 6,
      },
    ],
    
    E: [
      {
        tip: 'cauza',
        enunt: '1. Explicați absența amenajărilor hidroenergetice pe râul marcat cu numărul 5 (Prut/Siret)',
        raspunsExemplu: 'Absența amenajărilor hidroenergetice se datorează regimului fluvial variabil (debite mici vara), reliefului de câmpie cu pante mici care nu permit căderea apei pentru hidrocentrale, și costurilor mari nejustificate de potențialul redus.',
        cuvinteCheie: ['debit', 'pante', 'câmpie', 'cădere', 'potențial'],
        punctaj: 2,
      },
      {
        tip: 'cauza',
        enunt: '2. Explicați prezența vegetației de silvostepă în unitatea de relief marcată cu litera A (Podișul Moldovei)',
        raspunsExemplu: 'Vegetația de silvostepă este prezentă datorită climei temperat-continentale cu influențe est-europene (de ariditate), precipitațiilor reduse (500-600 mm/an), reliefului de podiș scund și solurilor de tip cernoziom levigat.',
        cuvinteCheie: ['continental', 'precipitații', 'cernoziom', 'ariditate', 'levigat'],
        punctaj: 2,
      },
    ],
  },
  
  subiectIII: {
    titlu: 'Subiect III - Lumea contemporană',
    
    A: [
      {
        tip: 'identificare',
        enunt: '1. Statul cu cea mai ridicată producție de energie nucleară (răspuns + valoare ~425.000 GWh)',
        raspunsCorect: 'Franța',
        raspunsuriAcceptate: ['franta', 'Franța', 'Franta', 'Franța 425.000'],
        punctaj: 2,
      },
      {
        tip: 'calcul',
        enunt: '2. Producția obținută din combustibili fosili în Marea Britanie (între 280.000 și 295.000 GWh)',
        formula: 'Valoare din grafic',
        raspunsCorect: 287000,
        intervalAcceptat: [280000, 295000],
        unitate: 'GWh',
        punctaj: 1,
      },
      {
        tip: 'calcul',
        enunt: '3. Producția obținută din hidroenergie în Franța (între 60.000 și 70.000 GWh)',
        formula: 'Valoare din grafic',
        raspunsCorect: 65000,
        intervalAcceptat: [60000, 70000],
        unitate: 'GWh',
        punctaj: 1,
      },
    ],
    
    B: [
      {
        tip: 'cauza',
        enunt: '1. Explicați faptul că în Marea Britanie hidroenergia are ponderea cea mai redusă',
        raspunsExemplu: 'Marea Britanie are relief jos și ondulat, fără munți înalți cu pante mari, râuri scurte cu debite reduse, lipsa cascadelor naturale. Are însă alte resurse abundente (petrol Marea Nordului, cărbuni, energie nucleară) care domină producția.',
        cuvinteCheie: ['relief', 'jos', 'pante', 'petrol', 'cărbuni'],
        punctaj: 2,
      },
      {
        tip: 'cauza',
        enunt: '2. Explicați faptul că în Germania energia din combustibili fosili are ponderea cea mai ridicată',
        raspunsExemplu: 'Germania dispune de zăcăminte mari de cărbuni (Bazinul Ruhr, lignit din Lusatia), industrie puternică cu consum ridicat de energie, tradiție industrială veche și capacitate ridicată de producție termoelectrică.',
        cuvinteCheie: ['cărbuni', 'Ruhr', 'lignit', 'industrie', 'termoelectric'],
        punctaj: 2,
      },
      {
        tip: 'completare',
        enuntInainte: '3. Precizați o sursă regenerabilă de energie utilizată în Germania',
        raspunsCorect: 'eoliană',
        raspunsuriAcceptate: ['eoliana', 'eoliană', 'solară', 'solar', 'biomasă', 'geotermală', 'hidroenergie'],
        punctaj: 2,
      },
    ],
    
    C: [
      {
        tip: 'completare',
        enuntInainte: '1. Pentru Câmpia Română la est de Argeș: o unitate de relief vecină la nord este',
        raspunsCorect: 'Subcarpații Curburii',
        raspunsuriAcceptate: ['subcarpatii curburii', 'Subcarpații Curburii', 'Subcarpatii Curburii', 'Podișul Getic'],
        punctaj: 2,
      },
      {
        tip: 'completare',
        enuntInainte: '2. Pentru Câmpia Română la est de Argeș: modul de formare este',
        raspunsCorect: 'sedimentare',
        raspunsuriAcceptate: ['sedimentare', 'aluvionar', 'colmatare', 'depunere'],
        punctaj: 2,
      },
      {
        tip: 'completare',
        enuntInainte: '3. Pentru Câmpia Română la est de Argeș: o influență climatică este',
        raspunsCorect: 'continentală',
        raspunsuriAcceptate: ['continentală', 'continentale', 'est-europene', 'ariditate', 'submediteraneană'],
        punctaj: 2,
      },
      {
        tip: 'completare',
        enuntInainte: '4. Pentru Câmpia Română la est de Argeș: o zonă de vegetație este',
        raspunsCorect: 'stepă',
        raspunsuriAcceptate: ['stepă', 'stepa', 'silvostepa', 'silvostepă'],
        punctaj: 1,
      },
      {
        tip: 'completare',
        enuntInainte: '5. Pentru Câmpia Română la est de Argeș: un oraș-port la Dunăre este',
        raspunsCorect: 'Călărași',
        raspunsuriAcceptate: ['Călărași', 'calarasi', 'Giurgiu', 'giurgiu', 'Brăila', 'braila', 'Galați', 'galati'],
        punctaj: 1,
      },
    ],
    
    D: [
      {
        tip: 'cauza',
        enunt: '1. Prezentați o cauză a procentului mic de populație 0-14 ani din România',
        raspunsExemplu: 'Natalitatea scăzută datorită emigrației masive a populației tinere, dificultăților economice, schimbării mentalității (familii cu un singur copil), creșterii nivelului de educație al femeilor și amânării vârstei la prima naștere.',
        cuvinteCheie: ['natalitate', 'emigrație', 'economic', 'educație'],
        punctaj: 2,
      },
      {
        tip: 'cauza',
        enunt: '2. Prezentați un factor care determină procentul ridicat al populației peste 65 ani din Belgia',
        raspunsExemplu: 'Speranța de viață ridicată datorită sistemului de sănătate performant, nivelului de trai ridicat, accesului la servicii medicale de calitate și condițiilor sociale favorabile.',
        cuvinteCheie: ['speranța', 'viață', 'sănătate', 'trai', 'medical'],
        punctaj: 2,
      },
      {
        tip: 'cauza',
        enunt: '3. Explicați procentul mai ridicat al populației 0-14 ani din Franța',
        raspunsExemplu: 'Franța are politici familiale active (alocații generoase, concedii parentale lungi), imigrație tânără semnificativă din Africa de Nord și fosta colonii, care contribuie la natalitate ridicată.',
        cuvinteCheie: ['politici', 'familiale', 'imigrație', 'natalitate'],
        punctaj: 2,
      },
    ],
    
    E: [
      {
        tip: 'cauza',
        enunt: '1. Prezentați o cauză a distribuției inegale a rețelei rutiere și feroviare în Europa',
        raspunsExemplu: 'Densitatea reliefului - în regiunile montane (Alpi, Carpați) construirea infrastructurii este dificilă și costisitoare, pe când în câmpiile vestice (Câmpia Europei) rețeaua este mai densă.',
        cuvinteCheie: ['relief', 'munte', 'câmpie', 'construire'],
        punctaj: 2,
      },
      {
        tip: 'cauza',
        enunt: '2. Prezentați o altă cauză a distribuției inegale a rețelei',
        raspunsExemplu: 'Dezvoltarea economică - statele dezvoltate din vestul Europei au investit masiv în infrastructură (Germania, Franța, Olanda), pe când statele est-europene au rețele mai puțin dezvoltate.',
        cuvinteCheie: ['economic', 'dezvoltare', 'investiții', 'vest', 'est'],
        punctaj: 2,
      },
    ],
  },
};
