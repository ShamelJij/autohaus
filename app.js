class Fahrzeug{
    constructor(marke, modell, farbe, antrieb){
        this.marke = marke;
        this.modell = modell;
        this.farbe = farbe;
        this.antrieb = antrieb;
    }
    info(){
        return "<div class='card p-2 m-2' style='width: 12rem;'><div class='card-header bg-warning'>" + this.marke + " " + this.modell + "</div><br><ul class='list-group list-group-flush'><li class='list-group-item'>" +
        "Farbe: " + this.farbe + "</li><li class='list-group-item'>" +
        "Antrieb: " + this.antrieb + "</li><br>";
    }
}


let fahrzeug = [];
let fahrzeug1 = new Fahrzeug("Audi", "A8", "Anthrazit", "Allrad");
let fahrzeug2 = new Fahrzeug("BMW", "M3", "Weiß", "Heckantrieb");

fahrzeug.push(fahrzeug1);
fahrzeug.push(fahrzeug2);

document.getElementById("info").innerHTML= fahrzeug1.info();
document.getElementById("info").innerHTML += fahrzeug2.info();  
