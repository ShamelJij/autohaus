class Fahrzeug{
    constructor(marke, modell, farbe, antrieb){
        this.marke = marke;
        this.modell = modell;
        this.farbe = farbe;
        this.antrieb = antrieb;
    }
    info(){
        return "<b>" + this.marke + " " + this.modell + "</b><br>" +
        "Farbe: " + this.farbe + "<br>" +
        "Antrieb: " + this.antrieb;
    }
}

let fahrzeug1 = new Fahrzeug("Audi", "A8", "Anthrazit", "Allrad");
let fahrzeug2 = new Fahrzeug("BMW", "M3", "Weiß", "Heckantrieb");

document.getElementById("info").innerHTML= fahrzeug1.info();
document.getElementById("info").innerHTML += fahrzeug2.info();  