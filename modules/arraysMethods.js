const ligaColombiana = [{
        equipo: "Nacional",
        ciudad: "Medellin",
        ligas: 16,
        libertadores: 2
    },
    {
        equipo: "Medellin",
        ciudad: "Medellin",
        ligas: 6,
        libertadores: 0
    },
    {
        equipo: "Millonarios",
        ciudad: "Bogota",
        ligas: 15,
        libertadores: 0
    },
    {
        equipo: "Santa Fe",
        ciudad: "Bogota",
        ligas: 8,
        libertadores: 0
    },
    {
        equipo: "Once Caldas",
        ciudad: "Manizales",
        ligas: 2,
        libertadores: 1
    },
    {
        equipo: "America",
        ciudad: "Cali",
        ligas: 13,
        libertadores: 0
    },
]

//ES5
let nombresEquipos = [];
for (let i = 0; i < ligaColombiana.length; i++) {
    nombresEquipos.push(ligaColombiana[i].equipo)
}
console.log(nombresEquipos);



//ES6 MAP, map permite recorrer el arreglo i itera en cada posición
// const nombresEq = ligaColombiano = ligarcolombiana.map(function(dato {return dato.equipo}))

const nombresEqu = ligaColombiana.map(dato => dato.equipo);
console.log(nombresEqu);


// ES6 FIND, retorna el primer elemento que coincide conla busqueda (nacional)

const esDeMedellin = ligaColombiana.find(dato => dato.ciudad === "Medellin");
console.log(esDeMedellin);


// ES6 Every, 

const winLibertadores = ligaColombiana.every(dato => dato.libertadores > 0);
console.log(winLibertadores);

// some, al menos un equipos gano la libertadores 

const winSomeLibertadores = ligaColombiana.some(dato => dato.libertadores > 0);
console.log(winSomeLibertadores);



// Filter
const equiposLibertadores = ligaColombiana.filter(dato => dato.libertadores > 0).map(dato => dato.equipo);
console.log(equiposLibertadores);

// nombres de los equipos que han ganado la libertadores
// Reduce
const cuantasLibertadores = ligaColombiana
    .reduce((total, dato) => total += dato.libertadores, 0);
console.log(cuantasLibertadores);


//Total ligas ganadas de los equipos de Medellin
const ligasCiudad = ligaColombiana
    .filter(dato => dato.ciudad === "Medellin")
    .reduce((total, dato) => total += dato.ligas, 0);
console.log(ligasCiudad);