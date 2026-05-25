export const varianta25 = {
  id: 'varianta-25',
  nume: 'Varianta 25',
  bacSet: '2009',
  bacVariantNum: 10,
  totalPuncte: 90,
  
  subiectI: {
    titlu: 'Subiect I - Europa',
    
    A: [
      { tip: 'identificare', enunt: '1. Numele statului marcat cu litera D', raspunsCorect: 'Franța', raspunsuriAcceptate: ['Franța', 'Franta', 'franta'], punctaj: 2 },
      { tip: 'identificare', enunt: '2. Numele statului marcat cu litera H', raspunsCorect: 'Elveția', raspunsuriAcceptate: ['Elveția', 'Elvetia', 'elvetia'], punctaj: 2 },
      { tip: 'identificare', enunt: '3. Numele orașului-capitală marcat cu numărul 3', raspunsCorect: 'Reykjavik', raspunsuriAcceptate: ['Reykjavik', 'reykjavik'], punctaj: 1 },
      { tip: 'identificare', enunt: '4. Numele orașului-capitală marcat cu numărul 7', raspunsCorect: 'Zagreb', raspunsuriAcceptate: ['Zagreb', 'zagreb'], punctaj: 1 },
    ],
    
    B: [
      { tip: 'completare', enuntInainte: '1. Statul marcat cu litera B se numește', raspunsCorect: 'Irlanda', raspunsuriAcceptate: ['Irlanda', 'irlanda'], punctaj: 2 },
      { tip: 'completare', enuntInainte: '2. Orașul Riga este capitala statului marcat cu litera', raspunsCorect: 'G', raspunsuriAcceptate: ['G', 'g', 'Letonia', 'letonia'], punctaj: 2 },
      { tip: 'completare', enuntInainte: '3. Orașul marcat cu numărul 6 se numește', raspunsCorect: 'Lisabona', raspunsuriAcceptate: ['Lisabona', 'lisabona'], punctaj: 2 },
    ],
    
    C: [
      { tip: 'grila', enunt: '1. Orașul Vilnius este marcat cu numărul:', variante: { a: '2', b: '4', c: '5', d: '9' }, raspunsCorect: 'a', punctaj: 2 },
      { tip: 'grila', enunt: '2. Se află în fiordul cu același nume, orașul marcat cu numărul:', variante: { a: '2', b: '7', c: '9', d: '10' }, raspunsCorect: 'c', punctaj: 2 },
      { tip: 'grila', enunt: '3. Este o monarhie, statul marcat cu litera:', variante: { a: 'A', b: 'C', c: 'E', d: 'G' }, raspunsCorect: 'a', punctaj: 2 },
      { tip: 'grila', enunt: '4. Orașul Bruxelles este marcat cu numărul:', variante: { a: '3', b: '4', c: '7', d: '9' }, raspunsCorect: 'b', punctaj: 2 },
      { tip: 'grila', enunt: '5. Fluviul Dunărea traversează statul marcat cu litera:', variante: { a: 'C', b: 'D', c: 'E', d: 'H' }, raspunsCorect: 'c', punctaj: 2 },
    ],
    
    D: [
      { tip: 'comparatie', enunt: 'Precizați 3 deosebiri între clima statului marcat cu litera B (Irlanda) și clima statului marcat cu litera H (Elveția)', raspunsExemplu: [
        'Tip de climă: în Irlanda este caracteristic climatul temperat-oceanic, iar în Elveția climatul temperat-continental',
        'Amplitudine termică: în Irlanda amplitudinea termică este mult mai redusă valoric decât în Elveția',
        'Vânturi: în Irlanda își fac simțită prezența vânturile de vest care aduc precipitații bogate, iar în Elveția influența acestora este nesemnificativă',
      ], punctajMaxim: 6 },
    ],
    
    E: [
      { tip: 'cauza', enunt: 'Doi factori care influențează regimul hidrologic al fluviului Rin', raspunsExemplu: 'Factor 1: Rinul are un regim hidrologic complex deoarece străbate regiuni variate din punct de vedere morfologic și climatic (Munții Alpi, Câmpia Germană, Marea Nordului). Factor 2: în cursul superior topirea zăpezii și a ghețarilor în lunile de primăvară și vară determină debite bogate; în cursul inferior precipitațiile abundente din climatul temperat-oceanic alimentează permanent fluviul.', cuvinteCheie: ['variate', 'morfologic', 'topire', 'zăpadă'], punctaj: 4 },
    ],
  },
  
  subiectII: {
    titlu: 'Subiect II - România',
    
    A: [
      { tip: 'identificare', enunt: '1. Numele unității de relief marcată cu litera A', raspunsCorect: 'Grupa Retezat-Godeanu', raspunsuriAcceptate: ['Grupa Retezat-Godeanu', 'Retezat-Godeanu', 'Retezat', 'Godeanu'], punctaj: 2 },
      { tip: 'identificare', enunt: '2. Numele unității de relief marcată cu litera G', raspunsCorect: 'Câmpia Olteniei', raspunsuriAcceptate: ['Câmpia Olteniei', 'Olteniei', 'olteniei', 'campia olteniei'], punctaj: 2 },
      { tip: 'identificare', enunt: '3. Numele orașului marcat cu numărul 1', raspunsCorect: 'Călărași', raspunsuriAcceptate: ['Călărași', 'Calarasi', 'calarasi'], punctaj: 1 },
      { tip: 'identificare', enunt: '4. Numele orașului marcat cu numărul 2', raspunsCorect: 'Ploiești', raspunsuriAcceptate: ['Ploiești', 'Ploiesti', 'ploiesti'], punctaj: 1 },
    ],
    
    B: [
      { tip: 'completare', enuntInainte: '1. Unitatea de relief marcată cu litera D s-a format prin', raspunsCorect: 'cutarea sedimentelor', raspunsuriAcceptate: ['cutarea sedimentelor', 'cutare', 'cutarea', 'sedimentar', 'sedimentare', 'cutarea straturilor', 'cutarea depozitelor sedimentare'], punctaj: 2 },
      { tip: 'completare', enuntInainte: '2. Gaz metan se extrage din unitatea de relief marcată cu litera', raspunsCorect: 'F', raspunsuriAcceptate: ['F', 'f'], punctaj: 2 },
      { tip: 'completare', enuntInainte: '3. Orașul marcat cu numărul 3 este reședința județului', raspunsCorect: 'Mehedinți', raspunsuriAcceptate: ['Mehedinți', 'Mehedinti', 'mehedinti'], punctaj: 2 },
    ],
    
    C: [
      { tip: 'grila', enunt: '1. Râul marcat cu numărul 10 se numește:', variante: { a: 'Bârlad', b: 'Moldova', c: 'Suceava', d: 'Trotuș' }, raspunsCorect: 'd', punctaj: 2 },
      { tip: 'grila', enunt: '2. Relief eolian se află în unitatea de relief marcată cu litera:', variante: { a: 'A', b: 'D', c: 'E', d: 'G' }, raspunsCorect: 'd', punctaj: 2 },
      { tip: 'grila', enunt: '3. Lacul Izvorul Muntelui se află situat pe râul marcat cu numărul:', variante: { a: '7', b: '8', c: '10', d: '11' }, raspunsCorect: 'b', punctaj: 2 },
      { tip: 'grila', enunt: '4. Munți formați în orogeneza hercinică se află în unitatea de relief marcată cu litera:', variante: { a: 'A', b: 'B', c: 'C', d: 'H' }, raspunsCorect: 'c', punctaj: 2 },
      { tip: 'grila', enunt: '5. Ape geotermale se găsesc în apropierea orașului marcat cu numărul:', variante: { a: '1', b: '2', c: '5', d: '6' }, raspunsCorect: 'd', punctaj: 2 },
    ],
    
    D: [
      { tip: 'comparatie', enunt: 'Precizați 3 deosebiri între clima unității G (Câmpia Olteniei) și clima unității H (Podișul Bârladului)', raspunsExemplu: [
        'Etaj climatic: Câmpia Olteniei are un climat de câmpie, iar Podișul Bârladului un climat de dealuri și podișuri',
        'Influențe climatice: în Câmpia Olteniei sunt influențe submediteraneene (climat blând), în Podișul Bârladului sunt influențe de ariditate (climat continental)',
        'Vânturi: în Câmpia Olteniei bate Austrul, iar în Podișul Bârladului iarna bate Crivățul',
      ], punctajMaxim: 6 },
    ],
    
    E: [
      { tip: 'cauza', enunt: '1. Argument pentru "originalitatea Mării Negre"', raspunsExemplu: 'Unicitatea Mării Negre constă în existența a două straturi distincte de apă: unul la suprafață, cu o grosime de aproximativ 180-200 m, salinitate de 18-19‰, oxigenat, care asigură existența viețuitoarelor, și alt strat la adâncimi mai mari de 200 m, lipsit de oxigen, bogat în hidrogen sulfurat - gaz toxic care nu favorizează existența viețuitoarelor.', cuvinteCheie: ['două straturi', 'salinitate', 'oxigen', 'hidrogen sulfurat'], punctaj: 2 },
      { tip: 'cauza', enunt: '2. Factor natural care face Câmpia de Vest o regiune agricolă importantă', raspunsExemplu: 'Câmpia de Vest este o importantă regiune agricolă deoarece în cadrul ei se întâlnesc soluri fertile - molisoluri cu conținut ridicat de humus și soluri aluvionare (de luncă) cu umiditate ridicată care favorizează cultura plantelor.', cuvinteCheie: ['soluri fertile', 'molisoluri', 'humus', 'aluvionare'], punctaj: 2 },
    ],
  },
  
  subiectIII: {
    titlu: 'Subiect III - Debit Vistula + Tabel Franța/Norvegia/Suedia',
    hasDiagrama: true,
    hasTabele: true,
    
    A: [
      { tip: 'completare', enuntInainte: '1. Valoarea maximă a debitului mediu lunar și luna', raspunsCorect: '330 m³/s mai', raspunsuriAcceptate: ['330 mai', '330', 'mai', '320', '340'], punctaj: 2 },
      { tip: 'completare', enuntInainte: '2. Valoarea minimă a debitului mediu lunar și luna', raspunsCorect: '60 m³/s octombrie', raspunsuriAcceptate: ['60 octombrie', '60', 'octombrie', '50', '70'], punctaj: 2 },
    ],
    
    B: [
      { tip: 'grila', enunt: '1. Fluviul Vistula străbate orașul-capitală:', variante: { a: 'Bratislava', b: 'Minsk', c: 'Praga', d: 'Varșovia' }, raspunsCorect: 'd', punctaj: 2 },
      { tip: 'grila', enunt: '2. Debitele mai bogate ale fluviului Vistula în perioada martie-iulie sunt o consecință a:', variante: { a: 'alimentării subterane', b: 'pantelor line', c: 'ploilor bogate și topirii zăpezilor', d: 'temperaturilor ridicate' }, raspunsCorect: 'c', punctaj: 2 },
      { tip: 'grila', enunt: '3. Fluviul Vistula se varsă în Marea:', variante: { a: 'Albă', b: 'Baltică', c: 'Nordului', d: 'Norvegiei' }, raspunsCorect: 'b', punctaj: 2 },
    ],
    
    C: [
      { tip: 'completare', enuntInainte: '1. Două state vecine Serbiei, membre UE (separate prin virgulă)', raspunsCorect: 'România, Bulgaria și Ungaria', raspunsuriAcceptate: ['România', 'Bulgaria', 'Ungaria', 'Romania Bulgaria', 'Romania Ungaria', 'Bulgaria Ungaria', 'Romania, Bulgaria', 'Bulgaria Romania', 'Romania si Ungaria'], punctaj: 2 },
      { tip: 'completare', enuntInainte: '2. Două unități de relief din Serbia (separate prin virgulă)', raspunsCorect: 'Câmpia Voivodinei și Alpii Dinarici', raspunsuriAcceptate: ['Câmpia Voivodinei', 'Voivodinei', 'Alpii Dinarici', 'Dinarici', 'Voivodinei Dinarici', 'Voivodinei, Dinarici', 'Campia Voivodinei Alpii Dinarici', 'Voivodinei Alpii Dinarici'], punctaj: 2 },
      { tip: 'completare', enuntInainte: '3. O resursă naturală a Serbiei', raspunsCorect: 'minereu de cupru', raspunsuriAcceptate: ['minereu de cupru', 'cupru', 'carbuni', 'cărbuni', 'carbuni inferiori'], punctaj: 1 },
      { tip: 'completare', enuntInainte: '4. Tipul de climă din Serbia', raspunsCorect: 'temperat-continental', raspunsuriAcceptate: ['temperat-continental', 'temperat continental', 'continental'], punctaj: 1 },
      { tip: 'completare', enuntInainte: '5. Două zone de vegetație din Serbia (separate prin virgulă)', raspunsCorect: 'stepa și silvostepa în nord, păduri în sud', raspunsuriAcceptate: ['stepa', 'silvostepa', 'paduri', 'păduri', 'stepa silvostepa', 'stepa paduri', 'silvostepa paduri', 'stepa, paduri'], punctaj: 2 },
      { tip: 'completare', enuntInainte: '6. Un râu sau fluviu din Serbia', raspunsCorect: 'Dunărea', raspunsuriAcceptate: ['Dunărea', 'Dunarea', 'Tisa', 'Sava', 'Drava', 'Morava', 'Timock'], punctaj: 1 },
      { tip: 'completare', enuntInainte: '7. Un oraș din Serbia', raspunsCorect: 'Belgrad', raspunsuriAcceptate: ['Belgrad', 'Subotica', 'Novi Sad', 'Pancevo', 'Kragujevac', 'Bor'], punctaj: 1 },
    ],
    
    D: [
      { tip: 'calcul', enunt: '1. Producția de energie electrică pe cap de locuitor pentru Franța (pop = 62.752.136; energie = 71,6 mld kWh)', formula: 'energie / populație', raspunsCorect: 1140.9, intervalAcceptat: [1100, 1180], unitate: 'kWh/loc', punctaj: 2 },
      { tip: 'calcul', enunt: '2. Producția de energie electrică pe cap de locuitor pentru Norvegia (pop = 4.516.000; energie = 120,0 mld kWh)', formula: 'energie / populație', raspunsCorect: 26572, intervalAcceptat: [26000, 27000], unitate: 'kWh/loc', punctaj: 2 },
      { tip: 'completare', enuntInainte: '3. Două forme de energie alternativă folosite în Franța (separate prin virgulă)', raspunsCorect: 'energie solară și energie mareo-motrică', raspunsuriAcceptate: ['energie solară', 'solară', 'mareo-motrică', 'mareelor', 'eoliană', 'hidroenergie', 'solara mareelor', 'solara eoliana', 'eoliana mareelor', 'solara, eoliana'], punctaj: 2 },
    ],
    
    E: [
      { tip: 'cauza', enunt: 'Două efecte negative ale dezvoltării accentuate a transporturilor terestre asupra mediului din statele UE', raspunsExemplu: 'Efect 1: poluarea aerului prin evacuarea necontrolată în atmosferă a gazelor de eșapament - dioxid de carbon, oxizi de azot, particule fine - care contribuie la efectul de seră și problemele respiratorii ale populației. Efect 2: creșterea alarmantă a numărului accidentelor de circulație în urma cărora își pierd viața anual un număr mare de cetățeni; plus fragmentarea habitatelor naturale prin construcția de autostrăzi.', cuvinteCheie: ['poluare', 'gaze', 'accidente', 'habitate'], punctaj: 4 },
    ],
  },
};
