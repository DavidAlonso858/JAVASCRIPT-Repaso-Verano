let user = {
    id: 1,
    email: "davidmadrid858@gmail.com",
    name: "David",
    activo: true,
    recuperarClave: function () { // funcion anonima
        console.log("recuperando clave...");

    },
};

function crearUsuario(name, email) { // factory functions para no tener que copiar y pegar usuarios iguales para hacerlo
    return {
        email,
        name,
        activo: false,
        recuperarClave: function () { // funcion anonima
            console.log("recuperando clave...");

        },
    };

}

let user1 = crearUsuario("Paco", "paco1234@gmail.com");
let user2 = crearUsuario("Juan", "juan1234@gmail.com");

console.log(user1);
console.log(user2);
