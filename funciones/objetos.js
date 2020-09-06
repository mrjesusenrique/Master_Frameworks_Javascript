var auto = {

    modelo: 'Ford Mustang',
    maxima: 500,
    antiguedad: 2020
}

//Hemos creado un objeto, variable que almacena propiedad - valor

document.write(`<h1>${auto.modelo}</h1><br><h1>${auto.maxima}</h1><br><h1>${auto.antiguedad}</h1><br>`);


// PROMESA

var saludar = new Promise((resolve, reject) => {

    setTimeout(() => {

        let saludo = "Hola, muy buenas a todos!!!";

            if (saludo){

                resolve(saludo);
            }
            else{
                reject("No hay saludo disponible");
            }
     }, 2000);
});

saludar.then(resultado => {

    alert(resultado);
})

.catch(error => {
    alert(error);
});