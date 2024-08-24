let nombre = "Mbappe";
let equipo = "Real Madrid";
let edad = "25";

let jugador = { nombre: "Mbappe", equipo: "Real Madrid", edad: 25, };

console.log(jugador);
console.log(jugador.equipo); // para saber solo una propiedad del objeto

jugador.nombre = "Kylian Mbappe"; // modificar una de las propiedades

delete jugador.edad; // para eliminar una propiedad del objeto