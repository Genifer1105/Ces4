class Persona {
    // inicializa los atributos
    constructor(name, age, job) {
        this.name = name;
        this.age = age;
        this.job = job;
    }

    saludar() {
        return `Hola ${this.name}`;
    }
}

const persona = new Persona("Genifer", 20, "Tester");
/*console.log(`name:${persona.name}`);*/
console.log(persona.saludar());


class Estudiante {

    constructor (nombre,carrera,semestre) {
        this.nombre = nombre;
        this.carrera = carrera;
        this.semestre = semestre;
    }
    saludarEstudiante() {
        return `Hola: ${this.nombre}`;
    }
}

const estudiante = new Estudiante ("Geni", "Ingenieria", 6);
console.log(estudiante.saludarEstudiante());