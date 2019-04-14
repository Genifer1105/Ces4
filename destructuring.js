/**
 *Destructuring Arrays: es para sacar elementos del array
 */

// a x se le asigna 15 y a Y 10
/*const punto = [15, 10];
const [x, y] = punto;
console.log(`x: ${x} y: ${y}`);
*/

const punto2 = [15, 10, -3, 5, 10];
const [x, y, ...otros] = punto2;
console.log(`x: ${x} y: ${y} otros:${otros}`);



/** 
 * Destructuring Objects: para sacar propiedades de los objetos, los que se necesitan
 */


const persona = { name: "Jorge", age: "25", job: "Tester" }
const { name, job } = persona;
console.log(`name:${name} job:${job}`);



let ana = 30;
let pedro = 45;
// ES6
[ana, pedro] = [pedro, ana];
console.log(`ana:${ana} pedro:${pedro}`)
    /* ES5 
    let aux = pedro;
    pedro = ana;
    ana = aux;
    console.log(`ana:${ana} pedro:${pedro}`)
    */


const nombre = "Real";
const tecnico = "Zidane";
const capitan = "Ramos";
const estadio = "Santiago Bernabeu";

// Object Miteral : si el valor de la propiedad se llama igual a la propiedad se le puede quitar el valor 
//ej propiedad -nombre : nombre

const equipos = {
    nombre,
    tecnico,
    capitan: capitan,
    estadio: estadio
}

console.log(equipos);