export const mensaje = "Bienvenido a CES4";
export const equipos = ['Nacional', 'Medellin', 'Envigado']
export function elMejor(equipo) {
    return `El mejor equipo es: ${equipo}`;
}
export function saludar(nombre) {
    return `Hola ${nombre}`;
}

// Un modulo solo puede tener un export default
const myToken = "12345gm";
export default myToken;

// En modulos, uno puede exportar una sola variable  con export