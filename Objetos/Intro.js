let email = "davidmadrid858@gmail.com";
let name = "David";
let direccion = {
    calle: "Queen st",
    numero: 15,
};

//Objeto para juntar parametros con otro objeto, funcione, etc POO
let user = {
    email: "davidmadrid858@gmail.com",
    name: "David",
    direccion: {
        calle: "Queen st",
        numero: 15,
    },

    activo: true,
    recuperarClave: function () { // funcion anonima
        console.log("recuperando clave...");

    },
};