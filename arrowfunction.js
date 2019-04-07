/* Funciones de flechas
 si tiene un parametro si o no ()
 si tiene varios si o si se ponen ()
 si no tiene también se colocan ()
 si ponen llaves tienen que poner return
*/

const calcular = function(dato) {
    return dato + 1;
}
console.log(calcular(100));


// Función que tiene un parametro, es la misma que la anterior
const calcularNuevo = dato => dato + 1;
console.log(calcular(100));


// Función que no tiene parametros
const test = () => true;
console.log(test());


//Funcion que tiene varios parametros
const viaje = (pais = "Francia", ciudad = "Paris") =>
    `pais: ${pais} ciudad ${ciudad}`

console.log(viaje('Italia', 'Pisa'));