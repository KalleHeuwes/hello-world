function liesRaster() {
    console.log("Raster einlesen");
    const raster = [
          ["E", "S", "K", "I", "S", "T", "A", "F", "Ü", "N", "F"]
        , ["Z", "E", "H", "N", "Z", "W", "A", "N", "Z", "I", "G"]
        , ["D", "R", "E", "I", "V", "I", "E", "R", "T", "E", "L"]
        , ["V", "O", "R", "F", "U", "N", "K", "N", "A", "C", "H"]
        , ["H", "A", "L", "B", "A", "E", "L", "F", "Ü", "N", "F"]
        , ["E", "I", "N", "S", "X", "A", "M", "Z", "W", "E", "I"]
        , ["D", "R", "E", "I", "P", "M", "J", "V", "I", "E", "R"]
        , ["S", "E", "C", "H", "S", "N", "L", "A", "C", "H", "T"]
        , ["S", "I", "E", "B", "E", "N", "Z", "W", "Ö", "L", "F"]
        , ["Z", "E", "H", "N", "E", "U", "N", "K", "U", "H", "R"]
    ]

    const myNode = document.getElementById("raster");
    while (myNode.firstChild) {
        myNode.removeChild(myNode.firstChild);
    }
    for (var zeile = 0; zeile < 10; zeile++) {
        for (var spalte = 0; spalte < 11; spalte++) {
            var div = document.createElement('z' + zeile + 's' + spalte);
            div.id = 'z' + zeile + 's' + spalte;
            div.innerHTML = raster[zeile][spalte];
            div.setAttribute('class', 'passiv'); // and make sure myclass has some styles in css
            document.getElementById("raster").appendChild(div);
        }
    }
}

function aktiviere(obj){
    for(var i = obj.spalteVon; i <= obj.spalteBis; i++){
        document.getElementById("z" + obj.zeile + "s" + i).setAttribute('class', 'aktiv');
    }
}

function aktualisiereUhrzeit(){
    liesRaster();
    const eingabe = document.getElementById("eingabe").value;
    console.log(eingabe);
    let today = new Date();
    let uhrzeit = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    let stunde = today.getHours();
    let minute = today.getMinutes();
    if(eingabe != ""){
        stunde = parseInt( eingabe.split(":")[0] );
        minute = parseInt( eingabe.split(":")[1] );
        uhrzeit = eingabe;
    }
    console.log(uhrzeit);
    if(minute >  52 || minute <= 7){
        aktiviere(leuchtobjekt("UHR"));
        if(minute >  52 ) stunde++;
        console.log("Uhr");
    }
    if(minute >  7 && minute <= 12){
        aktiviere(leuchtobjekt("MINUTE10"));
        aktiviere(leuchtobjekt("NACH"));
    }
    if(minute >  12 && minute <= 17){
        aktiviere(leuchtobjekt("VIERTEL"));
        aktiviere(leuchtobjekt("NACH"));
    }
    if(minute >  17 && minute <= 22){
        aktiviere(leuchtobjekt("MINUTE20"));
        aktiviere(leuchtobjekt("NACH"));
    }
    if(minute >  22 && minute <= 37){
        aktiviere(leuchtobjekt("HALB"));
        stunde++;
    }
    if(minute >  37 && minute <= 42){
        aktiviere(leuchtobjekt("MINUTE20"));
        aktiviere(leuchtobjekt("VOR"));
        stunde++;
    }
    if(minute >  42 && minute <= 47){
        aktiviere(leuchtobjekt("VIERTEL"));
        aktiviere(leuchtobjekt("VOR"));
        stunde++;
    }
    if(minute >  47 && minute <= 52){
        aktiviere(leuchtobjekt("MINUTE10"));
        aktiviere(leuchtobjekt("VOR"));
        stunde++;
    }
    if(stunde > 12) stunde = stunde - 12;
    aktiviere(leuchtobjekt("ES+"));
    aktiviere(leuchtobjekt("+IST"));
    aktiviere(leuchtobjekt("STUNDE" + stunde));
}

function leuchtobjekt(objName){
    let ret = {zeile:0, spalteVon: 0, spalteBis: 0};
    if(objName == "ES+")        { return {zeile:0, spalteVon: 0, spalteBis: 1};}
    if(objName == "+IST")       { return {zeile:0, spalteVon: 3, spalteBis: 5};}
    if(objName == "UHR")        { return {zeile:9, spalteVon: 8, spalteBis: 10};}
    if(objName == "VIERTEL")    { return {zeile:2, spalteVon: 4, spalteBis: 10};}
    if(objName == "HALB")       { return {zeile:4, spalteVon: 0, spalteBis: 3};}
    if(objName == "VOR")        { return {zeile:3, spalteVon: 0, spalteBis: 2};}
    if(objName == "NACH")       { return {zeile:3, spalteVon: 7, spalteBis: 10};}
    if(objName == "STUNDE0")    { return {zeile:8, spalteVon: 6, spalteBis: 10};}
    if(objName == "STUNDE1")    { return {zeile:5, spalteVon: 0, spalteBis: 3};}
    if(objName == "STUNDE2")    { return {zeile:5, spalteVon: 7, spalteBis: 10};}
    if(objName == "STUNDE3")    { return {zeile:6, spalteVon: 0, spalteBis: 3};}
    if(objName == "STUNDE4")    { return {zeile:6, spalteVon: 7, spalteBis: 10};}
    if(objName == "STUNDE5")    { return {zeile:4, spalteVon: 7, spalteBis: 10};}
    if(objName == "STUNDE6")    { return {zeile:7, spalteVon: 0, spalteBis: 4};}
    if(objName == "STUNDE7")    { return {zeile:8, spalteVon: 0, spalteBis: 5};}
    if(objName == "STUNDE8")    { return {zeile:7, spalteVon: 7, spalteBis: 10};}
    if(objName == "STUNDE9")    { return {zeile:9, spalteVon: 3, spalteBis: 6};}
    if(objName == "STUNDE10")   { return {zeile:9, spalteVon: 0, spalteBis: 3};}
    if(objName == "STUNDE11")   { return {zeile:4, spalteVon: 5, spalteBis: 7};}
    if(objName == "STUNDE12")   { return {zeile:8, spalteVon: 6, spalteBis: 10};}
    if(objName == "MINUTE5")    { return {zeile:0, spalteVon: 7, spalteBis: 10};}
    if(objName == "MINUTE10")   { return {zeile:1, spalteVon: 0, spalteBis: 3};}
    if(objName == "MINUTE20")   { return {zeile:1, spalteVon: 4, spalteBis: 10};}
    return ret;
}