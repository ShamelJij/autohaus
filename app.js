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
        return "<div class='card p-2 m-2' style='width: 14rem;'><div class='card-header bg-" + this.headerFarbe + "'>" + this.marke + " " + this.modell + "</div><br><ul class='list-group list-group-flush'><li class='list-group-item'>" +
        "Farbe: " + this.farbe + "</li><li class='list-group-item'>" +
        "Antrieb: " + this.antrieb + "</li><li class='list-group-item'>" +
        "Preis: " + this.preis + " €</li><li class='list-group-item'>";
    }
}

class PKW extends Fahrzeug{
    constructor(marke, modell, farbe, antrieb, preis, sitze, headerFarbe= "warning"){
        super(marke, modell, farbe, antrieb, preis);
        this.sitze = sitze;
        this.headerFarbe = headerFarbe;
    }
    info(){
        return super.info() + "Sitzpläze: " + this.sitze + " </li></div>";
    }
}

class LKW extends Fahrzeug{
    constructor(marke, modell, farbe, antrieb, preis, ladung, headerFarbe = "secondary") {
        super(marke, modell, farbe, antrieb, preis, ladung);
        this.ladung = ladung;
        this.headerFarbe = headerFarbe;
    }
    info(){
        return super.info() + "Ladung: " + this.ladung + " kg</li></div>";
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

for(let i = 0; i < fahrzeug.length; i++){
    if(fahrzeug[i].constructor.name == "PKW"){
        document.getElementById("infoLinks").innerHTML += fahrzeug[i].info();
    } else if (fahrzeug[i].constructor.name == "LKW") {
        document.getElementById("infoRechts").innerHTML += fahrzeug[i].info();
    }
}
    function suche(){
        document.getElementById("infoLinks").innerHTML = ""; //Seite leer
        document.getElementById("infoRechts").innerHTML = ""; //Seite leer
        var such = document.getElementById("suche").value.toUpperCase();
        for(let i = 0; i < fahrzeug.length; i++){
            if(fahrzeug[i].marke.toUpperCase().includes(such)){
                if(fahrzeug[i].constructor.name == "PKW"){
                    document.getElementById("infoLinks").innerHTML += fahrzeug[i].info();
                } else if (fahrzeug[i].constructor.name == "LKW") {
                    document.getElementById("infoRechts").innerHTML += fahrzeug[i].info();
                }
            }
        }
}


