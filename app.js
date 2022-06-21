
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

let fahrzeug = [];
fahrzeug.push(new PKW("Audi", "A8", "Anthrazit", "Allrad", 12000, 4));
fahrzeug.push(new PKW("BMW", "M3", "Weiß", "Heckantrieb", 85000, 5));
fahrzeug.push(new PKW("Ford", "Focus", "Schwarz", "Frontantrieb", 35000, 5));
fahrzeug.push(new PKW("LADA", "Niva", "Rost", "Allrad", 18000, 57));
fahrzeug.push(new LKW("Volvo", "FH", "Grün", "Frontantrieb", 650000, 85));
fahrzeug.push(new LKW("Volvo", "FH", "Grün", "Frontantrieb", 650000, 85));
fahrzeug.push(new LKW("Volvo", "FH", "Grün", "Frontantrieb", 650000, 85));

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
                    document.getElementById("infoLinks").innerHTML += fahrzeug[i].info();
                } else if (fahrzeug[i].constructor.name == "LKW") {
                    document.getElementById("infoRechts").innerHTML += fahrzeug[i].info();
                }
            }
        }
}
var seite = 1;
var seitezahl = 2;
function vorSeite(){
    if(seite > 1 ){
        seite--;
        seiteWechseln(seite);
    }
}

function naechSeite(){
    if(seite < numSeite()){
        seite++;
        seiteWechseln(seite);
    }
}
function seiteWechseln(){
    var btn_next = document.getElementById("btnNext");
    var btn_prev = document.getElementById("btnPrev");
    var listing_table = document.getElementById("listingTable");
    var page_span = document.getElementById("page");

    // Validate page
    if (page < 1) page = 1;
    if (page > numPages()) page = numPages();

    listing_table.innerHTML = "";

    for (var i = (page-1) * records_per_page; i < (page * records_per_page); i++) {
        listing_table.innerHTML += objJson[i].adName + "<br>";
    }
    page_span.innerHTML = page;

    if (page == 1) {
        btn_prev.style.visibility = "hidden";
    } else {
        btn_prev.style.visibility = "visible";
    }

    if (page == numPages()) {
        btn_next.style.visibility = "hidden";
    } else {
        btn_next.style.visibility = "visible";
    }
}
