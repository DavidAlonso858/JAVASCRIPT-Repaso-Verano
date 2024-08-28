function Usuario() {
    this.id = 1;
    this.recuperarClave = function () {
        console.log("recuperando clave...");
    }
}

let usuario = new Usuario(); // crea un nuevo usuario 

console.log(usuario);
