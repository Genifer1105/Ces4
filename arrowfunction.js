
// Funciones de flechas

// si tiene un parametro si o no ()
// si tiene varios si o si se ponen ()
// si no tiene también se colocan ()
// si ponen llaves tienen que poner return


const calcular = function (dato) {
 return dato + 1;
} 

console.log(calcular(100));


// Tiene un parametro
const calcularNuevo = dato => dato + 1;
console.log(calcular(100));


// No tiene parametros
const test = ()=> true;
console.log(test());


//Tiene varios parametros
const viaje = (pais="Francia", ciudad="Paris") => 
`pais: ${pais} ciudad ${ciudad}`

console.log(viaje('Itaia', 'Pisa'));