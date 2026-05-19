export const varianta1 = {
  id: 'varianta-1',
  nume: 'Varianta 1',
  testNumber: 6,
  totalPuncte: 90,
  
  subiectI: {
    titlu: 'Subiect I - Europa',
    
    A: [
      { tip: 'identificare', enunt: '1. Numele statului marcat cu litera J', raspunsCorect: 'Bulgaria', raspunsuriAcceptate: ['Bulgaria', 'bulgaria'], punctaj: 2 },
      { tip: 'identificare', enunt: '2. Numele orașului-capitală marcat cu numărul 12', raspunsCorect: 'Kiev', raspunsuriAcceptate: ['Kiev', 'kiev', 'Kyiv'], punctaj: 2 },
    ],
    
    B: [
      { tip: 'completare', enuntInainte: '1. Capitala statului marcat cu litera B se numește', raspunsCorect: 'Minsk', raspunsuriAcceptate: ['Minsk', 'minsk'], punctaj: 2 },
      { tip: 'completare', enuntInainte: '2. Orașul Skopje este marcat cu numărul', raspunsCorect: '8', raspunsuriAcceptate: ['8'], punctaj: 2 },
      { tip: 'completare', enuntInainte: '3. Aglomerația urbană Rhin-Ruhr este situată pe teritoriul statului marcat cu litera', raspunsCorect: 'C', raspunsuriAcceptate: ['C', 'c', 'Germania', 'germania'], punctaj: 2 },
    ],
    
    C: [
      { tip: 'grila', enunt: '1. Orașul-capitală Riga este marcat cu numărul:', variante: { a: '4', b: '11', c: '13', d: '15' }, raspunsCorect: 'a', punctaj: 2 },
      { tip: 'grila', enunt: '2. Munții Alpii Dinarici se desfășoară pe teritoriul statului marcat cu litera:', variante: { a: 'C', b: 'E', c: 'F', d: 'I' }, raspunsCorect: 'd', punctaj: 2 },
      { tip: 'grila', enunt: '3. Orașul-capitală marcat cu numărul 2 se numește:', variante: { a: 'Andorra la Vella', b: 'Monaco', c: 'San Marino', d: 'Valletta' }, raspunsCorect: 'c', punctaj: 2 },
      { tip: 'grila', enunt: '4. Capitala statului marcat cu litera G este orașul:', variante: { a: 'Amsterdam', b: 'Bruxelles', c: 'Copenhaga', d: 'Haga' }, raspunsCorect: 'c', punctaj: 2 },
      { tip: 'grila', enunt: '5. Statele marcate cu literele C și F au în comun elementele următoare:', variante: { a: 'Munții Alpi și fluviul Dunărea', b: 'Munții Alpi și fluviul Rin', c: 'Munții Carpați și fluviul Dunărea', d: 'Munții Carpați și fluviul Rin' }, raspunsCorect: 'b', punctaj: 2 },
    ],
    
    D: [
      { tip: 'comparatie', enunt: 'Precizați 3 deosebiri între clima statului D (Franța) și clima statului H (Spania)', raspunsExemplu: [
        'Tip de climă: D (Franța) are predominant climă temperat-oceanică, iar H (Spania) are climă mediteraneană în sud și oceanică în nord-vest',
        'Temperaturi: Franța are temperaturi mai moderate (15-20°C vara), Spania are temperaturi mai ridicate vara (peste 25°C în sud)',
        'Precipitații: Franța primește 600-1000 mm/an distribuite uniform, Spania are 300-600 mm/an concentrate iarna și primăvara',
      ], punctajMaxim: 6 },
    ],
    
    E: [
      { tip: 'cauza', enunt: '1. Cauză a valorilor mici ale densităţii populaţiei în Norvegia (litera A)', raspunsExemplu: 'Relieful muntos al Alpilor Scandinaviei, clima rece subpolară și solurile sărace limitează zonele locuibile. Iernile lungi și aspre, plus prezența ghețarilor și fiordurilor, fac dificilă locuirea.', cuvinteCheie: ['relief', 'rece', 'fiorduri', 'subpolar'], punctaj: 2 },
      { tip: 'cauza', enunt: '2. Două premise naturale care favorizează cultura viței de vie în Franța (litera F)', raspunsExemplu: 'Clima temperat-oceanică cu veri calde, soluri argilo-calcaroase și expoziția sudică a versanților favorizează viticultura. Cantitatea suficientă de precipitații și temperaturile moderate din regiunile Bordeaux, Champagne și Burgundia sunt ideale.', cuvinteCheie: ['climă', 'soluri', 'versanți', 'precipitații'], punctaj: 2 },
    ],
  },
  
  subiectII: {
    titlu: 'Subiect II - România',
    
    A: [
      { tip: 'identificare', enunt: '1. Numele orașului marcat cu numărul 12', raspunsCorect: 'Călărași', raspunsuriAcceptate: ['Călărași', 'Calarasi', 'calarasi'], punctaj: 2 },
      { tip: 'identificare', enunt: '2. Numele râului marcat cu numărul 6', raspunsCorect: 'Prut', raspunsuriAcceptate: ['Prut', 'prut'], punctaj: 2 },
    ],
    
    B: [
      { tip: 'completare', enuntInainte: '1. Râul marcat cu numărul 1 se numește', raspunsCorect: 'Buzău', raspunsuriAcceptate: ['Buzău', 'Buzau', 'buzau'], punctaj: 2 },
      { tip: 'completare', enuntInainte: '2. Orașul marcat cu numărul 7 se numește', raspunsCorect: 'Iași', raspunsuriAcceptate: ['Iași', 'Iasi', 'iasi'], punctaj: 2 },
      { tip: 'completare', enuntInainte: '3. Unitatea de relief marcată cu litera E se numește', raspunsCorect: 'Podișul Mehedinți', raspunsuriAcceptate: ['Podișul Mehedinți', 'Mehedinți', 'mehedinti'], punctaj: 2 },
    ],
    
    C: [
      { tip: 'grila', enunt: '1. În unitatea de relief marcată cu litera D există relief:', variante: { a: 'carstic', b: 'eolian', c: 'glaciar', d: 'vulcanic' }, raspunsCorect: 'a', punctaj: 2 },
      { tip: 'grila', enunt: '2. Râul marcat cu numărul 2 se numește:', variante: { a: 'Argeș', b: 'Dâmbovița', c: 'Ialomița', d: 'Vedea' }, raspunsCorect: 'a', punctaj: 2 },
      { tip: 'grila', enunt: '3. Influențe climatice (scandinavo-)baltice pătrund în unitatea de relief marcată cu litera:', variante: { a: 'B', b: 'C', c: 'D', d: 'F' }, raspunsCorect: 'd', punctaj: 2 },
      { tip: 'grila', enunt: '4. Etajul pădurilor de conifere există în unitatea de relief marcată cu litera:', variante: { a: 'B', b: 'C', c: 'G', d: 'H' }, raspunsCorect: 'a', punctaj: 2 },
      { tip: 'grila', enunt: '5. Orașul marcat cu numărul 8 se numește:', variante: { a: 'Bistrița', b: 'Cluj-Napoca', c: 'Reghin', d: 'Târgu Mureș' }, raspunsCorect: 'a', punctaj: 2 },
    ],
    
    D: [
      { tip: 'comparatie', enunt: 'Precizați 3 deosebiri între relieful unității F (Podișul Sucevei) și relieful unității H (Masivul Dobrogei de Nord)', raspunsExemplu: [
        'Mod de formare: Podișul Sucevei s-a format prin sedimentare, iar Masivul Dobrogei de Nord prin orogeneza hercinică (cutare)',
        'Altitudini: Podișul Sucevei are 300-500 m, iar Masivul Dobrogei de Nord are 200-467 m (Vf. Țuțuiatu)',
        'Tipuri de roci: Podișul Sucevei e format pe roci sedimentare (gresii, marne, argile), iar Masivul Dobrogei de Nord pe roci metamorfice și magmatice (șisturi verzi, granite)',
      ], punctajMaxim: 6 },
    ],
    
    E: [
      { tip: 'cauza', enunt: '1. Cauză a frecvenței mai mari a hidrocentralelor în regiunea montană decât în câmpie', raspunsExemplu: 'În zona montană există pante mari, debite considerabile și văi adânci care permit construirea de baraje și hidrocentrale eficiente. În câmpie relieful plan nu oferă cădere de apă suficientă pentru hidroenergie.', cuvinteCheie: ['pante', 'debit', 'baraje', 'cădere'], punctaj: 2 },
      { tip: 'cauza', enunt: '2. Un avantaj și un dezavantaj al utilizării hidroenergiei', raspunsExemplu: 'Avantaj: sursă regenerabilă, curată, fără emisii de CO2. Dezavantaj: dependentă de regimul hidrologic (secete reduc producția) și impact asupra mediului prin schimbarea cursurilor de apă.', cuvinteCheie: ['regenerabilă', 'curată', 'secete', 'mediu'], punctaj: 2 },
    ],
  },
  
  subiectIII: {
    titlu: 'Subiect III - Lumea contemporană',
    hasDiagrama: true,
    hasTabele: true,

    
    A: [
      { tip: 'completare', enuntInainte: '1. Lungimea celui mai mare sector al Dunării și denumirea lui', raspunsCorect: '480-495 km România-Bulgaria', raspunsuriAcceptate: ['490 km Romania-Bulgaria', 'Romania-Bulgaria', '480', '490', '495', 'Romania Bulgaria'], punctaj: 2 },
      { tip: 'completare', enuntInainte: '2. Lungimea sectorului din Germania', raspunsCorect: '415-425 km', raspunsuriAcceptate: ['420', '415', '425', '420 km'], punctaj: 1 },
      { tip: 'completare', enuntInainte: '3. Lungimea sectorului din Serbia (exclusiv graniță)', raspunsCorect: '260-280 km', raspunsuriAcceptate: ['270', '260', '280', '270 km'], punctaj: 1 },
    ],
    
    B: [
      { tip: 'completare', enuntInainte: '1. Două unități de relief străbătute sau delimitate de Dunăre', raspunsCorect: 'Câmpia Română', raspunsuriAcceptate: ['Câmpia Română', 'Podișul Getic', 'Podișul Dobrogei', 'Munții Carpați', 'Câmpia Panonică'], punctaj: 2 },
      { tip: 'completare', enuntInainte: '2. Doi afluenți direcți pe care Dunărea îi primește în România', raspunsCorect: 'Jiu', raspunsuriAcceptate: ['Jiu', 'Olt', 'Argeș', 'Ialomița', 'Siret', 'Prut', 'Cerna'], punctaj: 2 },
      { tip: 'completare', enuntInainte: '3. Două orașe cu peste 200.000 de locuitori străbătute de Dunăre', raspunsCorect: 'Viena', raspunsuriAcceptate: ['Viena', 'Belgrad', 'Budapesta', 'Bratislava', 'Linz'], punctaj: 2 },
    ],
    
    C: [
      { tip: 'completare', enuntInainte: '1. Modul de formare al Grupei Centrale Carpați Orientali', raspunsCorect: 'orogeneza alpină (cutare)', raspunsuriAcceptate: ['alpină', 'cutare', 'orogeneza alpină', 'cutarea'], punctaj: 1 },
      { tip: 'completare', enuntInainte: '2. Două tipuri de roci', raspunsCorect: 'fliș', raspunsuriAcceptate: ['fliș', 'gresii', 'marne', 'roci sedimentare', 'calcare', 'cristaline'], punctaj: 2 },
      { tip: 'completare', enuntInainte: '3. Un tip genetic de relief', raspunsCorect: 'glaciar', raspunsuriAcceptate: ['glaciar', 'carstic', 'structural', 'fluviatil'], punctaj: 1 },
      { tip: 'completare', enuntInainte: '4. Un etaj climatic', raspunsCorect: 'montan', raspunsuriAcceptate: ['montan', 'alpin', 'subalpin'], punctaj: 1 },
      { tip: 'completare', enuntInainte: '5. Trei râuri care izvorăsc sau străbat această subunitate', raspunsCorect: 'Mureș', raspunsuriAcceptate: ['Mureș', 'Olt', 'Bistrița', 'Trotuș', 'Bicaz', 'Tarcău'], punctaj: 3 },
      { tip: 'completare', enuntInainte: '6. Un tip sau o clasă de sol', raspunsCorect: 'cambisoluri', raspunsuriAcceptate: ['cambisoluri', 'brune', 'spodosoluri', 'podzol', 'soluri brune'], punctaj: 1 },
      { tip: 'completare', enuntInainte: '7. Un oraș-reședință de județ din această subunitate', raspunsCorect: 'Miercurea Ciuc', raspunsuriAcceptate: ['Miercurea Ciuc', 'Sfântu Gheorghe', 'Bacău', 'Piatra Neamț', 'Toplița'], punctaj: 1 },
    ],
    
    D: [
      { tip: 'calcul', enunt: '1. Calculați amplitudinea termică medie anuală', formula: 'temperatura max - temperatura min', raspunsCorect: 10.2, intervalAcceptat: [10.0, 10.4], unitate: '°C', punctaj: 2 },
      { tip: 'grila', enunt: '2. Orașul A este:', variante: { a: 'București', b: 'Dublin', c: 'Moscova', d: 'Roma' }, raspunsCorect: 'b', punctaj: 2 },
      { tip: 'cauza', enunt: '3. Cauză a faptului că nu se înregistrează temperaturi negative iarna', raspunsExemplu: 'Influența climei oceanice temperate prin Curentul Atlanticului de Nord (Gulf Stream) care moderează temperaturile, plus poziția insulară a Irlandei la latitudine medie, mențin temperaturile pozitive iarna.', cuvinteCheie: ['oceanic', 'Gulf Stream', 'curent', 'insulă'], punctaj: 2 },
    ],
    
    E: [
      { tip: 'calcul', enunt: '1. Calculați numărul total de locuitori din Ucraina în anul 2000', formula: '8.570.000 + 33.731.000 + 6.756.000', raspunsCorect: 49057000, intervalAcceptat: [49050000, 49060000], unitate: 'locuitori', punctaj: 2 },
      { tip: 'cauza', enunt: '2. Cauză a evoluției numerice a populației în Ucraina 2000-2010', raspunsExemplu: 'Scădere demografică determinată de migrația externă spre statele UE (Polonia, Italia), sporul natural negativ (mortalitate mai mare decât natalitate), îmbătrânirea populației și criza economică post-sovietică.', cuvinteCheie: ['migrație', 'natalitate', 'mortalitate', 'îmbătrânire'], punctaj: 2 },
    ],
  },
};
