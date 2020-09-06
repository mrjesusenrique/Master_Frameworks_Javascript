class Coche {
     constructor(modelo, velocidad, antiguedad){
        this.modelo = modelo;
        this.velocidad = velocidad;
        this.antiguedad = antiguedad;
    
     }
     aumentarVelocidad(){
         this.velocidad += 1;
     }
     reducirVelocidad(){
        this.velocidad -= 1;
    }
}

class Camioneta extends Coche{
    constructor(modelo, velocidad, antiguedad){
        super(modelo, velocidad, antiguedad);
    }
}

var camioneta1 = new Camioneta("LandRover", 350, 2021);

console.log(camioneta1);

var coche1 = new Coche("Chevrolet", 300, 2018);
var coche2 = new Coche("BMW", 250, 2019);
var coche3 = new Coche("Fiat", 150, 2020);
var coche4 = new Coche("Ford", 350, 2020);

console.log(coche1);
console.log(coche2);
console.log(coche3);
console.log(coche4);

coche1.aumentarVelocidad();
coche1.aumentarVelocidad();
coche1.aumentarVelocidad();

console.log(coche1);

