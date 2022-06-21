class Fahrzeug{
    constructor(marke, modell, farbe, antrieb, preis){
        this.marke = marke;
        this.modell = modell;
        this.farbe = farbe;
        this.antrieb = antrieb;
        this.preis = preis;
    }
    info(){
        return "<div class='card p-2 m-2' style='width: 14rem;'><div class='card-header bg-warning'>" + this.marke + " " + this.modell + "</div><br><ul class='list-group list-group-flush'><li class='list-group-item'>" +
        "Farbe: " + this.farbe + "</li><li class='list-group-item'>" +
        "Antrieb: " + this.antrieb + "</li><li class='list-group-item'>" +
        "Preis: " + this.preis + " €</li><li class='list-group-item'>";
    }
}

class PKW extends Fahrzeug{
    constructor(marke, modell, farbe, antrieb, preis, sitze){
        super(marke, modell, farbe, antrieb, preis);
        this.sitze = sitze;
    }
    info(){
        return super.info() + "Sitzpläze: " + this.sitze + " </li></div>";
    }
}

class LKW extends Fahrzeug{
    constructor(marke, modell, farbe, antrieb, preis, ladung) {
        super(marke, modell, farbe, antrieb, preis, ladung);
        this.ladung = ladung;
    }
    info(){
        return super.info() + "Ladung: " + this.ladung + " kg</li></div>";
    }
}

let fahrzeug = [];
fahrzeug.push(new PKW("Audi", "A8", "Anthrazit", "Allrad", 12000, 4));
fahrzeug.push(new PKW("BMW", "M3", "Weiß", "Heckantrieb", 85000, 5));
fahrzeug.push(new PKW("Ford", "Focus", "Schwarz", "Frontantrieb", 35000, 5));
fahrzeug.push(new LKW("LADA", "Niva", "Rost", "Allrad", 18000, 57));
fahrzeug.push(new LKW("Volvo", "FH", "Grün", "Frontantrieb", 650000, 85));

fahrzeug.sort(function(a,b){return a.preis-b.preis});

for(let i = 0; i < fahrzeug.length; i++){
    document.getElementById("info").innerHTML += fahrzeug[i].info();
}

