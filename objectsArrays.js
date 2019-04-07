// Objetos, para asignar valores a las propiedades se usa :

const equipos = {
    "nombre": "Nacional",
    "ligas": 16,
    "libertadores": 2,
    "jugador estrella": "barcos"
}


console.log(equipos);
equipos.tecnico = "Auroti"; // asigar una nueva propiedad consu valo (=)
console.log(equipos);

console.log(equipos.libertadores); // Para llamar una propiedad de ese objeto 
console.log(equipos["jugador estrella"]); // para las propiedades que tienen espacio se usa [""]

equipos.nombre = "Medellin";
console.log(equipos);


// Arrays, son un conjunto de elemento, recibe valores de cualquier tipo

const equiposCiudad = [equipos, 'Medellín', 'Nacionales', 10, 20, ];
console.log(equiposCiudad);