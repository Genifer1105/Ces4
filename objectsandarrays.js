const equipos = {
    "nombre": "Nacional",
    "ligas": 16,
    "libertadores": 2,
    "jugador estrella": "barcos"
}



console.log(equipos);
equipos.tecnico = "Auroti"; // asigar un valor, acá si se utiliza =
console.log(equipos);

console.log(equipos.libertadores);
console.log(equipos["jugador estrella"]); // para las propiedades que tienen espacio se usa [""]

equipos.nombre="Medellin";
console.log(equipos);


const equiposCiudad = 
[equipos, 'Medellín', 'Nacionales', 10, 20,]; 
console.log(equiposCiudad);