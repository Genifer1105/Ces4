// las funciones permiten ejecutar una tarea en particular: Declarativas y Expresivas

// En una función se envian argumentos y se reciben parametros

/**
 * Function Declaration: la función tiene nombre
 */

// Hoisting , llamar el metodo arriba


function calcular(numero) {
    return numero * 2000;
}
const respuesta = calcular(2000);
console.log(respuesta);


/**
 * Function Expression : No tiene nombre, pero esta asignada a una variable
 */

const calculo = function(numero) {
    return numero + 2000;
}
const newRespuesta = calculo(2000);
console.log(newRespuesta);


// Un método es cuando una funcion hace parte de una propiedad de un objeto 

const jugador = {
    nombre: "Pedro",
    saludar: function(nombre) {
        return `Hola ${nombre}`
    }
}
console.log(jugador.saludar(jugador.nombre));



/**
   * Una función puede tener parametros por defecto,
en caso de que no se le manden los parámetros, cogera esos por defecto
   * 
   */
function parametros(param) {
    if (param) {
        console.log("Tiene parametros");
    } else {
        console.log("Sin parametros ");
    }
}

// Se llama la función con el argumento null, para que coja el parámetro por defecto
parametros(4);