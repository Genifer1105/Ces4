// Se puede importar de doa manerar

// 1: import { mensaje, elMejor, equipos, saludar } from './util.js'
import myToken, * as Util from './util.js' // el export por defecto va de primero en los imports
import Animal from './AnimalClass.js'
// se debe importar para poder manejar la variable
console.log(Util.mensaje);
console.log(Util.equipos);
console.log(Util.elMejor("Nacional"));
console.log(myToken); // hay que importar y llamar al toke


const animal = new Animal("León");
console.log(animal.imprimir());