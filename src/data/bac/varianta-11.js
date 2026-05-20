export const varianta11 = {
  id: 'varianta-11',
  nume: 'Varianta 11',
  testNumber: 16,
  totalPuncte: 90,
  
  subiectI: {
    titlu: 'Subiect I - Europa',
    
    A: [
      { tip: 'identificare', enunt: '1. Numele statului marcat cu litera E', raspunsCorect: 'Germania', raspunsuriAcceptate: ['Germania', 'germania'], punctaj: 2 },
      { tip: 'identificare', enunt: '2. Numele orașului-capitală marcat cu numărul 13', raspunsCorect: 'Stockholm', raspunsuriAcceptate: ['Stockholm', 'stockholm'], punctaj: 2 },
    ],
    
    B: [
      { tip: 'completare', enuntInainte: '1. Sofia este orașul-capitală marcat cu numărul', raspunsCorect: '8', raspunsuriAcceptate: ['8'], punctaj: 2 },
      { tip: 'completare', enuntInainte: '2. Prin capitala statului marcat cu litera B trece fluviul numit', raspunsCorect: 'Dunărea', raspunsuriAcceptate: ['Dunărea', 'Dunarea', 'dunarea'], punctaj: 2 },
      { tip: 'completare', enuntInainte: '3. Orașul-capitală marcat cu numărul 12 se numește', raspunsCorect: 'Lisabona', raspunsuriAcceptate: ['Lisabona', 'lisabona'], punctaj: 2 },
    ],
    
    C: [
      { tip: 'grila', enunt: '1. Alpii Scandinaviei se găsesc în statul marcat cu litera:', variante: { a: 'A', b: 'B', c: 'E', d: 'H' }, raspunsCorect: 'a', punctaj: 2 },
      { tip: 'grila', enunt: '2. Orașul-capitală marcat cu numărul 4 se numește:', variante: { a: 'Ljubljana', b: 'Podgorița', c: 'Sarajevo', d: 'Zagreb' }, raspunsCorect: 'd', punctaj: 2 },
      { tip: 'grila', enunt: '3. Rezerve de minereu de fier se găsesc în subsolul statului marcat cu litera:', variante: { a: 'C', b: 'F', c: 'G', d: 'J' }, raspunsCorect: 'b', punctaj: 2 },
      { tip: 'grila', enunt: '4. Lacurile Ladoga și Onega se află pe teritoriul statului a cărui capitală este orașul marcat cu numărul:', variante: { a: '11', b: '13', c: '14', d: '15' }, raspunsCorect: 'd', punctaj: 2 },
      { tip: 'grila', enunt: '5. Peninsula în care este situat statul marcat cu litera G se numește:', variante: { a: 'Balcanică', b: 'Iberică', c: 'Kola', d: 'Yutlanda' }, raspunsCorect: 'b', punctaj: 2 },
    ],
    
    D: [
      { tip: 'comparatie', enunt: 'Precizați 2 asemănări și o deosebire între clima statului G (Spania) și clima statului H (Italia)', raspunsExemplu: [
        'Asemănare: ambele state au climă mediteraneană în sud (subtropicală)',
        'Asemănare: ambele primesc precipitații concentrate iarna, cu veri secetoase și călduroase',
        'Deosebire: Spania are climă mai aridă în interior (Meseta Castiliană, sub 400 mm/an), iar Italia are climă mai umedă, cu influențe oceanice și alpine în nord',
      ], punctajMaxim: 6 },
    ],
    
    E: [
      { tip: 'cauza', enunt: 'Două cauze pentru care statul A (Norvegia) obține energie aproape în totalitate din hidroenergie', raspunsExemplu: 'Cauza 1: relieful muntos (Alpii Scandinaviei) cu pante mari, fjorduri adânci și văi glaciare oferă potențial hidroenergetic uriaș. Cauza 2: precipitațiile abundente (1000-2000 mm/an), numeroase lacuri glaciare și râuri scurte cu debit constant fac hidroenergia ieftină și disponibilă tot anul.', cuvinteCheie: ['muntos', 'pante', 'precipitații', 'fiorduri'], punctaj: 4 },
    ],
  },
  
  subiectII: {
    titlu: 'Subiect II - România',
    
    A: [
      { tip: 'identificare', enunt: '1. Numele orașului marcat cu numărul 11', raspunsCorect: 'Bacău', raspunsuriAcceptate: ['Bacău', 'Bacau', 'bacau'], punctaj: 2 },
      { tip: 'identificare', enunt: '2. Numele râului marcat cu numărul 1', raspunsCorect: 'Olt', raspunsuriAcceptate: ['Olt', 'olt'], punctaj: 2 },
    ],
    
    B: [
      { tip: 'completare', enuntInainte: '1. Râul Bega este marcat cu numărul', raspunsCorect: '4', raspunsuriAcceptate: ['4'], punctaj: 2 },
      { tip: 'completare', enuntInainte: '2. Orașul marcat cu numărul 12 se numește', raspunsCorect: 'Brașov', raspunsuriAcceptate: ['Brașov', 'Brasov', 'brasov'], punctaj: 2 },
      { tip: 'completare', enuntInainte: '3. Artera hidrografică marcată cu numărul 6 se numește', raspunsCorect: 'Dunărea', raspunsuriAcceptate: ['Dunărea', 'Dunarea', 'dunarea'], punctaj: 2 },
    ],
    
    C: [
      { tip: 'grila', enunt: '1. Solurile din clasa spodosoluri (podzol) se găsesc în unitățile de relief marcate cu literele:', variante: { a: 'A și E', b: 'B și G', c: 'C și F', d: 'D și H' }, raspunsCorect: 'b', punctaj: 2 },
      { tip: 'grila', enunt: '2. Râul marcat cu numărul 3 se numește:', variante: { a: 'Bistrița', b: 'Buzău', c: 'Putna', d: 'Trotuș' }, raspunsCorect: 'd', punctaj: 2 },
      { tip: 'grila', enunt: '3. În unitatea de relief marcată cu litera D pătrund influențe climatice:', variante: { a: 'baltice', b: 'oceanice', c: 'pontice', d: 'submediteraneene' }, raspunsCorect: 'c', punctaj: 2 },
      { tip: 'grila', enunt: '4. Petrol, gaze naturale și cărbuni se găsesc în unitatea de relief marcată cu litera:', variante: { a: 'D', b: 'E', c: 'F', d: 'G' }, raspunsCorect: 'a', punctaj: 2 },
      { tip: 'grila', enunt: '5. Orașul marcat cu numărul 9 se numește:', variante: { a: 'Bacău', b: 'Onești', c: 'Piatra Neamț', d: 'Roman' }, raspunsCorect: 'c', punctaj: 2 },
    ],
    
    D: [
      { tip: 'comparatie', enunt: 'Precizați 3 deosebiri între relieful unității C (Carpații Meridionali) și relieful unității H (Câmpia Română)', raspunsExemplu: [
        'Mod de formare: C s-au format prin orogeneza alpină (cutare), iar H prin sedimentare fluvio-lacustră',
        'Altitudini: Carpații Meridionali depășesc 2500 m (Vf. Moldoveanu 2544 m), iar Câmpia Română are 10-300 m',
        'Tipuri de relief: C are relief glaciar și alpin, iar H are relief plan cu loess, crovuri și grinduri',
      ], punctajMaxim: 6 },
    ],
    
    E: [
      { tip: 'cauza', enunt: 'Două caracteristici biopedogeografice ale Deltei Dunării', raspunsExemplu: 'Caracteristică 1: vegetație acvatică abundentă - stuf (Phragmites australis) ocupă cca 50% din suprafață, plus salcie, plop, nuferi - rezervație a biosferei UNESCO. Caracteristică 2: fauna ornitologică diversă (peste 320 specii) - pelicani, lopătari, egrete, plus pești (sturioni, crap), formând cea mai bogată zonă umedă din Europa.', cuvinteCheie: ['stuf', 'biosferă', 'pelicani', 'sturioni'], punctaj: 4 },
    ],
  },
  
  subiectIII: {
    titlu: 'Subiect III - Lumea contemporană',
    hasDiagrama: true,
    hasTabele: true,
    
    A: [
      { tip: 'completare', enuntInainte: '1. Valoarea maximă a temperaturii medii lunare și luna', raspunsCorect: '22°C iulie', raspunsuriAcceptate: ['22 iulie', '21 iulie', '23 iulie', 'iulie', '22'], punctaj: 2 },
      { tip: 'completare', enuntInainte: '2. Valoarea minimă a temperaturii medii lunare și luna', raspunsCorect: '-1°C ianuarie', raspunsuriAcceptate: ['-1 ianuarie', '-2 ianuarie', '0 ianuarie', 'ianuarie', '-1'], punctaj: 2 },
    ],
    
    B: [
      { tip: 'calcul', enunt: '1. Amplitudinea termică medie anuală', formula: 'max - min', raspunsCorect: 23, intervalAcceptat: [22, 24], unitate: '°C', punctaj: 2 },
      { tip: 'calcul', enunt: '2. Diferența între temperatura din februarie și august', formula: 'aug - feb', raspunsCorect: 22, intervalAcceptat: [20, 24], unitate: '°C', punctaj: 2 },
      { tip: 'completare', enuntInainte: '3. Numele unității majore de relief în care este situat Budapesta', raspunsCorect: 'Câmpia Panonică', raspunsuriAcceptate: ['Câmpia Panonică', 'Panonică', 'panonica'], punctaj: 2 },
    ],
    
    C: [
      { tip: 'completare', enuntInainte: '1. Modul de formare al Depresiunii Colinare a Transilvaniei', raspunsCorect: 'sedimentare', raspunsuriAcceptate: ['sedimentare', 'depunere', 'mare interioară', 'sedimentar'], punctaj: 1 },
      { tip: 'completare', enuntInainte: '2. Două tipuri de roci', raspunsCorect: 'argile', raspunsuriAcceptate: ['argile', 'marne', 'nisipuri', 'gresii', 'tufuri', 'sare'], punctaj: 2 },
      { tip: 'completare', enuntInainte: '3. Direcția generală de scurgere a râurilor', raspunsCorect: 'centripetă', raspunsuriAcceptate: ['centripetă', 'centripeta', 'spre Mureș', 'radiară'], punctaj: 1 },
      { tip: 'completare', enuntInainte: '4. Doi afluenți ai Mureșului pe care îi primește în această unitate', raspunsCorect: 'Târnava', raspunsuriAcceptate: ['Târnava', 'Tarnava', 'Târnava Mare', 'Târnava Mică', 'Arieș', 'Aries', 'Sebeș'], punctaj: 2 },
      { tip: 'completare', enuntInainte: '5. Un tip genetic de lac', raspunsCorect: 'lac pe masive de sare', raspunsuriAcceptate: ['lac pe sare', 'sărat', 'antropic', 'pe sare', 'sare', 'Ocna Sibiului', 'Ursu'], punctaj: 1 },
      { tip: 'completare', enuntInainte: '6. Trei subdiviziuni', raspunsCorect: 'Podișul Someșan', raspunsuriAcceptate: ['Podișul Someșan', 'Podișul Târnavelor', 'Câmpia Transilvaniei', 'Subcarpații Transilvaniei', 'Dealurile Crișurilor'], punctaj: 3 },
    ],
    
    D: [
      { tip: 'cauza', enunt: '1. Cauză a creșterii ponderii energiei eoliene în statele vest-europene', raspunsExemplu: 'Politicile UE pentru energie regenerabilă (reducerea emisiilor CO2), subvențiile pentru turbine eoliene, potențialul natural (vânturi de vest constante pe coasta Atlanticului), tehnologie avansată și nevoia de independență energetică.', cuvinteCheie: ['UE', 'CO2', 'subvenții', 'vânturi'], punctaj: 2 },
      { tip: 'cauza', enunt: '2. Cauză a scăderii ponderii cărbunelui', raspunsExemplu: 'Cărbunele produce cele mai mari emisii de CO2 și poluare, fiind sancționat prin taxe pe emisii (ETS). Politicile climatice UE forțează tranziția spre energii curate. Mineritul devine neeconomic față de gaze, regenerabile.', cuvinteCheie: ['CO2', 'poluare', 'ETS', 'tranziție'], punctaj: 2 },
      { tip: 'completare', enuntInainte: '3. Două state europene cu pondere însemnată a energiei nucleare', raspunsCorect: 'Franța', raspunsuriAcceptate: ['Franța', 'Franta', 'Belgia', 'Suedia', 'Slovacia', 'Ungaria', 'Cehia', 'Slovenia'], punctaj: 2 },
    ],
    
    E: [
      { tip: 'cauza', enunt: 'Două soluții pentru prevenirea inundațiilor de pe râul Siret', raspunsExemplu: 'Soluție 1: amenajări hidrotehnice - construirea de baraje și lacuri de acumulare (Surduc, Mileanca) care preiau debitele mari și le eliberează gradual; consolidarea malurilor cu diguri în zonele vulnerabile. Soluție 2: împădurirea bazinului hidrografic - reduce viteza de scurgere, scade eroziunea, păstrează apa în sol; renaturarea luncilor inundabile pentru a oferi spațiu apei.', cuvinteCheie: ['baraje', 'diguri', 'împădurire', 'luncă'], punctaj: 4 },
    ],
  },
};
