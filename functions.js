// las funciones permiten ejecutar una tarea en particular: Declarativas 
// se envian argumentos y se reciben parametros
/**
 * Function Declaration
 */

 // Hoisting , llamar el metodo arriba

 function calcular(numero) {
     return numero*2000;
 }
 const respuesta =calcular(2000);
 console.log(respuesta);


 /**
  * Functions Expression
  */

  const calculo = function(numero) {
      return numero+2000;
  }
  const newRespuesta = calculo(2000); 
  console.log(newRespuesta);


// Un método es cuando una funcion hace parte de una propiedad de un objeto 

  const jugador = {
      nombre:"Pedro",
      saludar:function(nombre) {
          return `Hola ${nombre}`
      }
  }

  console.log(jugador.saludar(jugador.nombre));


  // parametros por defecto, poner un valor por defecto en  caso de que no se le manden


  function parametros (param ) {
   if (param) {
       console.log("Tiene parametros");
   }   else {
       console.log("Sin parametros ");
  }
}
// si llamo la función con el argumento null, coge el arametro por defecto
 parametros(4); 


 