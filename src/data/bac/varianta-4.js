export const varianta4 = {
  id: 'varianta-4',
  nume: 'Varianta 4',
  testNumber: 9,
  totalPuncte: 90,
  
  subiectI: {
    titlu: 'Subiect I - Europa',
    
    A: [
      { tip: 'identificare', enunt: '1. Numele statului marcat cu litera C', raspunsCorect: 'Irlanda', raspunsuriAcceptate: ['Irlanda', 'irlanda'], punctaj: 2 },
      { tip: 'identificare', enunt: '2. Numele orașului-capitală marcat cu numărul 15', raspunsCorect: 'Londra', raspunsuriAcceptate: ['Londra', 'londra', 'London'], punctaj: 2 },
    ],
    
    B: [
      { tip: 'completare', enuntInainte: '1. Orașul marcat cu numărul 9 este capitala statului numit', raspunsCorect: 'Danemarca', raspunsuriAcceptate: ['Danemarca', 'danemarca'], punctaj: 2 },
      { tip: 'completare', enuntInainte: '2. Capitala statului marcat cu litera H este orașul numit', raspunsCorect: 'Lisabona', raspunsuriAcceptate: ['Lisabona', 'lisabona', 'Lisbon'], punctaj: 2 },
      { tip: 'completare', enuntInainte: '3. Statul marcat cu litera I se numește', raspunsCorect: 'Croația', raspunsuriAcceptate: ['Croația', 'Croatia', 'croatia'], punctaj: 2 },
    ],
    
    C: [
      { tip: 'grila', enunt: '1. Orașul marcat cu numărul 11 este capitala statului numit:', variante: { a: 'Bosnia și Herțegovina', b: 'Croația', c: 'Muntenegru', d: 'Slovenia' }, raspunsCorect: 'a', punctaj: 2 },
      { tip: 'grila', enunt: '2. Munți formați în orogeneza caledoniană se află în statul marcat cu litera:', variante: { a: 'D', b: 'F', c: 'H', d: 'I' }, raspunsCorect: 'a', punctaj: 2 },
      { tip: 'grila', enunt: '3. Orașul marcat cu numărul 6 se numește:', variante: { a: 'Monaco', b: 'Nicosia', c: 'San Marino', d: 'Valletta' }, raspunsCorect: 'd', punctaj: 2 },
      { tip: 'grila', enunt: '4. Statul Vatican este o enclavă situată în orașul marcat cu numărul:', variante: { a: '4', b: '8', c: '12', d: '13' }, raspunsCorect: 'b', punctaj: 2 },
      { tip: 'grila', enunt: '5. Cel mai mare oraș european (ca număr de locuitori) este marcat cu numărul:', variante: { a: '2', b: '3', c: '12', d: '13' }, raspunsCorect: 'a', punctaj: 2 },
    ],
    
    D: [
      { tip: 'comparatie', enunt: 'Precizați 3 deosebiri între clima statului E (Islanda) și clima statului G (Franța)', raspunsExemplu: [
        'Tip de climă: Islanda are climă subpolară-oceanică, iar Franța climă temperat-oceanică (mediteraneană în sud)',
        'Temperaturi: Islanda 4-6°C medie anuală (iarna 0°C, vara 11°C), Franța 11-15°C (iarna 5°C, vara 20°C)',
        'Precipitații: Islanda 800-1500 mm cu zăpadă abundentă, Franța 600-1000 mm distribuite uniform, iarna mai ploioasă',
      ], punctajMaxim: 6 },
    ],
    
    E: [
      { tip: 'cauza', enunt: '1. Explicați faptul că, deși în statul F (Olanda) predomină relieful de câmpie, această țară nu este o mare producătoare de cereale', raspunsExemplu: 'Olanda are suprafață mică (41.500 km²), populație densă care reduce terenul agricol, iar producția se orientează spre culturi intensive cu valoare adăugată mare (legume, flori, lactate) în solare și ferme moderne, nu spre cereale extensive.', cuvinteCheie: ['suprafață', 'populație', 'intensive', 'flori'], punctaj: 2 },
      { tip: 'cauza', enunt: '2. Cauză a existenței vegetației de stepă în statul A (Ucraina)', raspunsExemplu: 'Ucraina are climă temperat-continentală cu precipitații reduse (300-500 mm/an) și veri secetoase. Combinat cu solurile bogate (cernoziom) și relieful plan (Câmpia Europei de Est), aceste condiții favorizează vegetația de stepă.', cuvinteCheie: ['continentală', 'precipitații', 'cernoziom', 'plan'], punctaj: 2 },
    ],
  },
  
  subiectII: {
    titlu: 'Subiect II - România',
    
    A: [
      { tip: 'identificare', enunt: '1. Numele orașului marcat cu numărul 10', raspunsCorect: 'Constanța', raspunsuriAcceptate: ['Constanța', 'Constanta', 'constanta'], punctaj: 2 },
      { tip: 'identificare', enunt: '2. Numele arterei hidrografice marcate cu numărul 4', raspunsCorect: 'Dunăre', raspunsuriAcceptate: ['Dunăre', 'Dunarea', 'dunarea', 'Dunărea'], punctaj: 2 },
    ],
    
    B: [
      { tip: 'completare', enuntInainte: '1. Orașul marcat cu numărul 7 se numește', raspunsCorect: 'Slatina', raspunsuriAcceptate: ['Slatina', 'slatina'], punctaj: 2 },
      { tip: 'completare', enuntInainte: '2. Râul marcat cu numărul 2 se numește', raspunsCorect: 'Bârlad', raspunsuriAcceptate: ['Bârlad', 'Barlad', 'barlad'], punctaj: 2 },
      { tip: 'completare', enuntInainte: '3. Orașul Botoșani este situat în unitatea de relief marcată cu litera', raspunsCorect: 'A', raspunsuriAcceptate: ['A', 'a', 'Podișul Moldovei'], punctaj: 2 },
    ],
    
    C: [
      { tip: 'grila', enunt: '1. Lacuri glaciare există în unitatea de relief marcată cu litera:', variante: { a: 'A', b: 'C', c: 'E', d: 'F' }, raspunsCorect: 'c', punctaj: 2 },
      { tip: 'grila', enunt: '2. Râul marcat cu numărul 3 se numește:', variante: { a: 'Mureș', b: 'Olt', c: 'Târnava Mare', d: 'Târnava Mică' }, raspunsCorect: 'c', punctaj: 2 },
      { tip: 'grila', enunt: '3. Soluri din clasa molisoluri (cernoziom) s-au format pe suprafețe mari în unitatea de relief marcată cu litera:', variante: { a: 'D', b: 'E', c: 'F', d: 'G' }, raspunsCorect: 'a', punctaj: 2 },
      { tip: 'grila', enunt: '4. Orașul marcat cu numărul 11 se numește:', variante: { a: 'Baia Mare', b: 'Oradea', c: 'Satu Mare', d: 'Zalău' }, raspunsCorect: 'd', punctaj: 2 },
      { tip: 'grila', enunt: '5. Influențe climatice submediteraneene pătrund în unitatea de relief marcată cu litera:', variante: { a: 'A', b: 'C', c: 'D', d: 'H' }, raspunsCorect: 'd', punctaj: 2 },
    ],
    
    D: [
      { tip: 'comparatie', enunt: 'Precizați 3 deosebiri între relieful unității F (Subcarpații Moldovei) și relieful unității G (Grupa Nordică a Carpaților Orientali)', raspunsExemplu: [
        'Mod de formare: F (Subcarpații Moldovei) s-au format prin cutare ulterioară Carpaților, iar G prin orogeneza alpină (cutare principală)',
        'Altitudini: Subcarpații Moldovei au 400-800 m, Grupa Nordică a Carpaților Orientali atinge 2303 m (Pietrosul Rodnei)',
        'Tipuri de relief: în F predomină dealurile cu alunecări de teren, în G relief montan cu glaciar, structural, vulcanic',
      ], punctajMaxim: 6 },
    ],
    
    E: [
      { tip: 'cauza', enunt: '1. Absența amenajărilor hidroenergetice de pe râul marcat cu numărul 5 (Prut)', raspunsExemplu: 'Râul Prut are debit redus și fluctuant, pante mici (curge în Câmpia Moldovei), formează graniță cu Republica Moldova - lucrările hidrotehnice ar necesita acord internațional. Există doar lacul Stânca-Costești.', cuvinteCheie: ['debit', 'pante', 'graniță', 'Stânca'], punctaj: 2 },
      { tip: 'cauza', enunt: '2. Prezența vegetației de silvostepă în unitatea de relief A (Podișul Moldovei)', raspunsExemplu: 'Podișul Moldovei are climă temperat-continentală cu precipitații moderate (450-600 mm) și veri calde, soluri fertile (cernoziom). Combinarea acestor factori favorizează silvostepa - tranziție între pădure și stepă.', cuvinteCheie: ['continentală', 'precipitații', 'cernoziom', 'tranziție'], punctaj: 2 },
    ],
  },
  
  subiectIII: {
    titlu: 'Subiect III - Lumea contemporană',
    hasDiagrama: true,
    hasTabele: true,
    
    A: [
      { tip: 'completare', enuntInainte: '1. Statul cu cea mai ridicată producție de energie nucleară și valoarea', raspunsCorect: 'Franța 425.000 GWh', raspunsuriAcceptate: ['Franța 425.000 GWh', 'Franța', 'Franta', '425.000', '425000', 'Franța 425000'], punctaj: 2 },
      { tip: 'completare', enuntInainte: '2. Valoarea producției obținute din combustibili fosili în Marea Britanie', raspunsCorect: '290.000 GWh', raspunsuriAcceptate: ['290.000', '280.000', '285.000', '290000', '280000', '285000', '295000', '295.000'], punctaj: 1 },
      { tip: 'completare', enuntInainte: '3. Valoarea producției din hidroenergie în Franța', raspunsCorect: '65.000 GWh', raspunsuriAcceptate: ['65.000', '60.000', '70.000', '65000', '60000', '70000'], punctaj: 1 },
    ],
    
    B: [
      { tip: 'cauza', enunt: '1. Explicați faptul că în Marea Britanie hidroenergia are ponderea cea mai redusă', raspunsExemplu: 'Marea Britanie are relief preponderent de câmpie și dealuri joase, fără pante mari montane. Râurile sunt scurte și au debite reduse - condiții improprii hidroenergiei. Statul produce energie din cărbuni, gaze naturale și nucleară.', cuvinteCheie: ['relief', 'pante', 'debit', 'cărbuni'], punctaj: 2 },
      { tip: 'cauza', enunt: '2. Explicați ponderea ridicată a combustibililor fosili în Germania', raspunsExemplu: 'Germania dispune de rezerve mari de cărbune (huilă în Ruhr, lignit în est) - tradițional exploatate. Industria germană extrem de dezvoltată cere multă energie, iar centralele termoelectrice asigură baza producției energetice.', cuvinteCheie: ['cărbune', 'Ruhr', 'lignit', 'industrie'], punctaj: 2 },
      { tip: 'completare', enuntInainte: '3. Două surse regenerabile de energie utilizate în Germania', raspunsCorect: 'eoliană', raspunsuriAcceptate: ['eoliană', 'solară', 'biomasă', 'hidroenergie', 'geotermală'], punctaj: 2 },
    ],
    
    C: [
      { tip: 'completare', enuntInainte: '1. O unitate de relief vecină la nord cu Câmpia Română sectorul estic', raspunsCorect: 'Podișul Dobrogei', raspunsuriAcceptate: ['Podișul Dobrogei', 'Dobrogei', 'Subcarpații Curburii', 'Câmpia Bărăganului'], punctaj: 1 },
      { tip: 'completare', enuntInainte: '2. Modul de formare', raspunsCorect: 'sedimentare', raspunsuriAcceptate: ['sedimentare', 'fluvio-lacustră', 'colmatare', 'aluvionare'], punctaj: 1 },
      { tip: 'completare', enuntInainte: '3. O influență climatică', raspunsCorect: 'continentală (de ariditate)', raspunsuriAcceptate: ['continentală', 'ariditate', 'est-europene', 'pontice'], punctaj: 1 },
      { tip: 'completare', enuntInainte: '4. O zonă de vegetație', raspunsCorect: 'stepă', raspunsuriAcceptate: ['stepă', 'silvostepă'], punctaj: 1 },
      { tip: 'completare', enuntInainte: '5. O clasă sau tip de sol', raspunsCorect: 'molisoluri (cernoziom)', raspunsuriAcceptate: ['molisoluri', 'cernoziom', 'cernoziomuri', 'soluri bălane'], punctaj: 1 },
      { tip: 'completare', enuntInainte: '6. Două resurse de subsol', raspunsCorect: 'petrol', raspunsuriAcceptate: ['petrol', 'gaze naturale', 'sare', 'nisipuri'], punctaj: 2 },
      { tip: 'completare', enuntInainte: '7. Trei orașe-reședință de județ porturi la Dunăre', raspunsCorect: 'Călărași', raspunsuriAcceptate: ['Călărași', 'Călăraşi', 'Calarasi', 'Giurgiu', 'Olt', 'Slobozia', 'Brăila', 'Galați'], punctaj: 3 },
    ],
    
    D: [
      { tip: 'cauza', enunt: '1. Cauză a procentului relativ mic de populație 0-14 ani în România', raspunsExemplu: 'Natalitatea scăzută (sub 10‰), emigrarea masivă a tinerilor în UE, scăderea nivelului de trai în perioada de tranziție, lipsa locurilor de muncă stabile - toate au redus dramatic numărul de copii.', cuvinteCheie: ['natalitate', 'emigrare', 'trai', 'tineri'], punctaj: 2 },
      { tip: 'cauza', enunt: '2. Factor pentru procentul ridicat de populație peste 65 ani în Belgia', raspunsExemplu: 'Belgia are sistem medical avansat și nivel ridicat de trai, ceea ce duce la speranță de viață mare (peste 81 ani). Natalitatea scăzută din ultimele decenii a redus tinerii, iar populația vârstnică s-a mărit proporțional.', cuvinteCheie: ['medical', 'speranță', 'trai', 'natalitate'], punctaj: 2 },
      { tip: 'cauza', enunt: '3. Procent ridicat 0-14 ani în Franța comparativ cu celelalte state', raspunsExemplu: 'Franța are politici familiale generoase (alocații, concedii parentale lungi), imigrație tânără din Africa și Magreb cu natalitate ridicată, tradiție culturală mai favorabilă familiei numeroase decât în alte state europene.', cuvinteCheie: ['alocații', 'imigrație', 'politici', 'familie'], punctaj: 2 },
    ],
    
    E: [
      { tip: 'cauza', enunt: 'Două cauze pentru distribuția inegală a căilor de comunicație în Europa', raspunsExemplu: 'Cauza 1: relieful diferit (zonele montane - Carpați, Alpi - au densitate redusă, câmpiile au densitate mare). Cauza 2: dezvoltarea economică inegală (Europa Vestică - rețele dense; Europa de Est - rețele mai puține și învechite).', cuvinteCheie: ['relief', 'montan', 'economic', 'vestică'], punctaj: 4 },
    ],
  },
};
