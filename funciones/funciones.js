
//---------------------------------------- FUNCION 1 -----------------------------------------------

/*function saludar(){

    alert("Hola, este es un saludo dentro de una función Javascript!!");

}

saludar();


//---------------------------------------- FUNCION 2 ----------------------------------------------

function sumar(){

    var num1 = parseInt(prompt("Ingresa primer número aquí:"));
    var num2 = parseInt(prompt("Ingresa segundo número aquí:"));
    var resultado = num1 + num2;

    return(resultado)
}

document.querySelector("#suma").innerHTML = ("El resultado de la suma es " + sumar());

// ---------------------------------------- FUNCION 3 ---------------------------------------------

function datos(nombre, edad){

    console.log("Su nombre es " + nombre + " y su edad es " + edad + " años");

}

datos("Jesús Casañas", 23); */

// -------------------------------------- FUNCTION 4 ---------------------------------------------

/*function data(){

    var nombre = prompt("Ingrese su nombre");
    var apellido = prompt("Ingrese su apellido");
    let edad = prompt("Ingrese su edad");
    let altura = prompt("Ingrese su estatura en cm aquí");

    var info = (`Su nombre es ${nombre} ${apellido}, tiene ${edad} años y mide ${altura} cm`);

    return(info);

}

function datosFinal (){
    console.log(data());
}

datosFinal();*/



function recopilacionDatos(){

    var confirmacion1 = confirm("Desea comenzar con el proceso de registro?");

        if ( confirmacion1 == true ){
            
            var nombre = prompt("Ingrese su nombre");
            var apellido = prompt("Ingrese su apellido");
            let edad = prompt("Ingrese su edad");

                if ( edad >= 18 ){

                    var confirmacion2 = confirm("Desea continuar con el proceso de registro?");

                    if ( confirmacion2 == true ){

                        var documento = prompt("Ingrese su DNI:");
                        var correo = prompt("Ingrese su email");
                        var contraseña = prompt("Ingrese su nueva contraseña");

                        alert("Haga click en ACEPTAR para finalizar con el proceso de registro.");

                        var resultados = (`<h1>Hola ${nombre} ${apellido}, tus datos de registro son:</h1> <br>
                        <p>DNI: ${documento}</p> <br>
                        <p>Email: ${correo}</p> <br>
                        <p>Contraseña: ${contraseña}</p> <br>
                        <h1>Bienvenido</h1> <br>`);

                        return(resultados);
                        
                    }
                    else{
                        alert("Usted abandonó el proceso de registro.");
                    }

                }
                else{
                    alert("Usted es menor de edad, consulte a su representante legal para poder avanzar.");
                }
        }
        
         else {
            alert("Usted canceló el proceso, esperamos verlo pronto.");
        }

        

    } // cierre de la función



function imprimir(){

    document.querySelector("#datos").innerHTML = recopilacionDatos();
}

imprimir();