function Usuario(nombre) { // las funciones en js son consideradas objetos tb
    this.nombre = nombre;
}

console.log(Usuario.name);
console.log(Usuario.length);

const U = Usuario;
let user = new U("David");

console.log(user);

function of (FN, arg){ // recibe una funcion constructora y un argumento
    return new FN(arg);
}


let user1 = of(Usuario, "Manolo");

console.log(user1);

function returned() {
    return function(){
        console.log("Hola mundo");
        
    }
}

let saludo = returned();

saludo();