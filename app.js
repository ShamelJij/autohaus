
class Fahrzeug{
    constructor(marke, modell, farbe, antrieb, preis, headerFarbe){
        this.marke = marke;
        this.modell = modell;
        this.farbe = farbe;
        this.antrieb = antrieb;
        this.preis = preis;
        this.headerFarbe = headerFarbe;
    }
    info(){
        return "<div class='card bg-" + this.headerFarbe + " m-1' style='width: 14rem;'><div class='card-header text-white h6'>" + this.marke + " " + this.modell + "</div><ul class='list-group list-group-flush'><li class='list-group-item'>" +
        "Farbe: " + this.farbe + "</li><li class='list-group-item'>" +
        "Antrieb: " + this.antrieb + "</li><li class='list-group-item'>" +
        "Preis: " + this.preis + " €</li><li class='list-group-item'>";
    }
    tags(){
        return this.marke + " " + this.modell + " " + this.farbe +
        " " + this.antrieb + " " + this.preis + "€";
    }
}

class PKW extends Fahrzeug{
    constructor(marke, modell, farbe, antrieb, preis, sitze, headerFarbe= "info"){
        super(marke, modell, farbe, antrieb, preis);
        this.sitze = sitze;
        this.headerFarbe = headerFarbe;
    }
    info(){
        return super.info() + "Sitzpläze: " + this.sitze + " </li></ul></div>";
    }
    tags(){
        return super.tags() + "PKW Sitze " + this.sitze;
    }
}

class LKW extends Fahrzeug{
    constructor(marke, modell, farbe, antrieb, preis, ladung, headerFarbe = "success") {
        super(marke, modell, farbe, antrieb, preis, ladung);
        this.ladung = ladung;
        this.headerFarbe = headerFarbe;
    }
    info(){
        return super.info() + "Ladung: " + this.ladung + " kg</li></ul></div>";
    }
    tags(){
        return super.tags() + "LKW Ladung " + this.ladung;
    }
}
let lkw = [];
let pkw = [];
let fahrzeug = [];

fahrzeug.push(new PKW("Audi", "A8", "Anthrazit", "Allrad", 12000, 4));
fahrzeug.push(new PKW("BMW", "M3", "Weiß", "Heckantrieb", 85000, 5));
fahrzeug.push(new PKW("Ford", "Focus", "Schwarz", "Frontantrieb", 35000, 5));
fahrzeug.push(new PKW("LADA", "Niva", "Rost", "Allrad", 18000, 57));
fahrzeug.push(new LKW("Volvo", "FH", "Grün", "Frontantrieb", 650000, 85));
fahrzeug.push(new LKW("Bergmann", "FH", "Braun", "Frontantrieb", 650000, 85));
fahrzeug.push(new LKW("Daimler", "FH", "Weiß", "Frontantrieb", 650000, 85));
fahrzeug.push(new LKW("Goldhofer", "FH", "Hellgrau", "Frontantrieb", 650000, 85));
fahrzeug.push(new LKW("MAN", "FH", "Stahlblau", "Frontantrieb", 650000, 85));
fahrzeug.push(new LKW("Neoplan", "FH", "Silber", "Frontantrieb", 650000, 85));
fahrzeug.push(new LKW("Ruthmann", "FH", "Mais", "Frontantrieb", 650000, 85));
fahrzeug.push(new LKW("Schmitz", "FH", "Gelb", "Frontantrieb", 650000, 85));
fahrzeug.push(new LKW("Tadano", "FH", "Peru", "Frontantrieb", 650000, 85));
fahrzeug.push(new LKW("Titan", "FH", "Rosa", "Frontantrieb", 650000, 85));
fahrzeug.push(new LKW("VW", "FH", "Orchidee", "Frontantrieb", 650000, 85));
fahrzeug.push(new LKW("Heineke", "FH", "Blau", "Frontantrieb", 650000, 85));

fahrzeug.sort(function(a,b){return a.preis-b.preis});

document.getElementById("suche").value = localStorage.getItem("begriff");

suche();

function suche(){
        localStorage.setItem("begriff", document.getElementById("suche").value);
        document.getElementById("infoLinks").innerHTML = ""; //Seite leer
        document.getElementById("infoRechts").innerHTML = ""; //Seite leer
        var such = document.getElementById("suche").value.toUpperCase();
        for(let i = 0; i < fahrzeug.length; i++){
            if(fahrzeug[i].tags().toUpperCase().includes(such)){
                if(fahrzeug[i].constructor.name == "PKW"){
                    pkw.push(fahrzeug[i]);
                    document.getElementById("infoLinks").innerHTML += fahrzeug[i].info();
                } else if (fahrzeug[i].constructor.name == "LKW") {
                    lkw.push(fahrzeug[i]);
                    document.getElementById("infoRechts").innerHTML += fahrzeug[i].info();
                }
            }
        }
        console.log(pkw);
        console.log(lkw);
}

//--------------------------------------------------------------------------------------------------
var aktuelleSeite = 1;
var seitenzahl = 2;

function vorSeite(){
    if(aktuelleSeite > 1 ){
        aktuelleSeite--;
        seiteWechseln(aktuelleSeite);
    }
}

function naechSeite(){
    if(aktuelleSeite < numPages()){
        aktuelleSeite++;
        seiteWechseln(aktuelleSeite);
    }
}

function seiteWechseln(seite){
    var btn_next = document.getElementById("btnNext");
    var btn_prev = document.getElementById("btnPrev");
    var listing_table1 = document.getElementById("infoLinks");
    var listing_table2 = document.getElementById("infoRechts");
    var page_span = document.getElementById("page");
    var all_pages = document.getElementById("allpages");

    // Validate page
    if (seite < 1) seite = 1;
    if (seite > numPages()) seite = numPages();

    listing_table1.innerHTML = "";
    listing_table2.innerHTML = "";

    for (var i = (seite-1) * seitenzahl; i < (seite * seitenzahl); i++) {
        //listing_table.innerHTML += fahrzeug[i].marke + "<br>";
        var such = document.getElementById("suche").value.toUpperCase();
            if(fahrzeug[i].tags().toUpperCase().includes(such)){
                if(pkw[i] === undefined && lkw[i] === undefined){
                    console.log("both are null");
                } else if(pkw[i] === undefined){
                    listing_table2.innerHTML += lkw[i].info();
                }
                else if(lkw[i] === undefined){
                    listing_table1.innerHTML += pkw[i].info();
                } else {
                    listing_table1.innerHTML += pkw[i].info();
                    listing_table2.innerHTML += lkw[i].info();
                }
            }
    }
    page_span.innerHTML = seite;

    if (seite == 1) {
        btn_prev.style.visibility = "hidden";
    } else {
        btn_prev.style.visibility = "visible";
    }

    if (seite == numPages()) {
        btn_next.style.visibility = "hidden";
    } else {
        btn_next.style.visibility = "visible";
    }

    all_pages.innerHTML = numPages();
}

function numPages()
{
    if(lkw > pkw){
        fahrzeug.length = lkw.length;
    } else {
        fahrzeug.length = pkw.length;
    }
    console.log("else: ", fahrzeug.length);
    return Math.ceil(fahrzeug.length / seitenzahl);
}

window.onload = function() {
    seiteWechseln(1);
};