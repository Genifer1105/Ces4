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
console.log(`name:${persona.name}`);
console.log(persona.saludar());