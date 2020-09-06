var nombre = "Jesús Casañas";
var edad = 23;
var altura = 170;



/*document.getElementById("caja").innerHTML = ("Hola, mi nombre es " + nombre + ", tengo " + edad + " años y mido " + altura + "cm."); 

document.querySelector(".titulo").innerHTML = ("Accediendo con document.querySelector");


if ( edad >= 18){
    caja.innerHTML += (" usted es mayor de edad");
}
else{
    caja.innerHTML += (" usted es menor de edad");
}

if ( altura >= 170){
    document.querySelector(".titulo").innerHTML += (" Usted es alto");
}
else {
    document.querySelector(".titulo").innerHTML += (" Usted es bajo");
}

for (var i = 2010; i <= 2020; i++ ){
   caja.innerHTML += "<h2> Estamos en el año " + i ;
}

for (i = 0; i <= 10; i++){
    console.log("Hola, el valor de i es: " + i);
}
*/

function MostrarNombre (nombre, altura) {

    var datos = "Mi nombre es " + nombre + " y mi altura es " + altura; 

    return (datos);
}


function imprimir(){

    document.getElementById("caja").innerHTML = MostrarNombre("Jesús Casañas", 170);
}

imprimir();

var nombres = ['Jesus', 'Jose', 'Luis'];

/*for (i = 0; i < nombre.length; i++){
    console.log(nombres[0]);
}*/

nombres.forEach((nombre) =>{
    document.write(nombre + "<br>")
});















/* Cuando una función no tiene parámetros ella puede tomar valores de variables globales.
Cuando le paso parámetros solo puede tomar valores de variables locales. Puede existir variables locales o se las puedo pasar por parámetro en el llamado

Podemos retornar el valor de una variable de una función para otra, la otra funcion recibe el valor cuando hacemos llamado de la primera funcion dentro de ella*/