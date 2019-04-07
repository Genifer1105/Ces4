/**  Operador Rest: sirve para definir una cantidad indefinida de valores (...valores) 
Siempre va al final 
*/

function deuda(nombre, valor1, valor2) {
    return `${nombre} debe ${valor1 + valor2}`
}
const respuesta = deuda('Pedro', 100, 500);
console.log(respuesta);


function deuda2(nombre, ...valores) {
    // return `${nombre} debe ${valor1 + valor2}`
}
const respuesta2 = deuda2('Pedro', 100, 500, 500, 1000);
console.log(respuesta2);


function deuda3(nombre, ...valores) {
    let suma = 0;
    valores.forEach(valor => suma += valor)
    return `${nombre} debe ${suma}`
}
const respuesta3 = deuda3('Pedro', 100, 500, 500, 1000);
console.log(respuesta3);


function deuda4(nombre, ...valores) {
    let suma = 0;
    valores.forEach(valor => suma += valor)
    valores.forEach(function(valor) { return suma += valor })
    return `${nombre} debe ${suma}`
}
const respuesta4 = deuda4('Pedro', 100, 500, 500, 1000);
console.log(respuesta4);

/**
 *funcion Spread es para enviar un conjunto de valores para agregar atributos a un elemento
 **/

function deuda(nombre, ...valores) {
    let suma = 0;
    valores.forEach(valor => suma += valor)
        //valores.forEach(function(valor) {return suma += valor})
    return `${nombre} debe ${suma}`
}
const deudaInicial = 50000;
const deudas = [100, 500, 500, 1000]

// deudas.push(deudaInicial)
const newDeuda = [deudaInicial, ...deudas]

const respuestaspread = deuda('Pedro', ...newDeuda);
console.log(respuestaspread);