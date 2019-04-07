/**
 *  Explicar Var
 */

function explicarVar(){
    var edad = 5;
    console.log(edad);
} 
explicarVar();


(function explicarVar2(){
    var edad = 5;
    if (true){
        var edad =10;
    }
    console.log(edad);
} )();

/**
 * Explicar Let
 */

 (function explicarLet(){
     let nota = 5;
     if(true){
         let nota = 19;
         console.log(nota);
     }
     console.log(nota);
 })(); 

 /**
  * Explicar Const
  */

  (function explicarConst(){
      const PI = 3.14;
      if(true){
          const PI = 3.15
          console.log(PI);
      }
      console.log(PI);
  })();

  console.log(x);
  let x = 10;

  console.log(y);
  const y = 11;

  console.log(z);
  var z = 12;
