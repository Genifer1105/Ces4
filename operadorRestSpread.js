/**  Operador Rest: sirve para definir una cantidad indefinida de valores (...valores) 
Siempre va al final 
*/

/*

function calcularDeuda(nombre, valor1, valor2) {
    return `la deuda de ${nombre} es de ${valor1 + valor2}`
}
const respuesta = calcularDeuda('Pedro', 100, 500);
console.log(respuesta);
*/

// Operador Rest, siempre va a al final
function calcularDeuda2(nombre, ...valores) {
    console.log(valores);
    let deuda = 0;
    valores.forEach(valor => deuda += valor);
    return `la deuda de ${nombre} es de ${deuda}`
}
const respuesta2 = calcularDeuda2('Pedro', 100, 500, 500, 1000);
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
 y para enviar argumentos
 **/


function calcularDeudaS(nombre, ...valores) {
    let deuda = 0;
    valores.forEach(valor => deuda += valor);
    return `la deuda de ${nombre} es de ${deuda}`
}
const deudaInicial1 = 200;
const deudas1 = [100, 100, 300]; //enviar una cantidad infinita de datos
const deudaTotal = [deudaInicial1, ...deudas1]; // agregar elementos al nuevo arreglo
console.log(calcularDeudaS('Pedro', ...deudaTotal));



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