const user = {
    id: 1 // no se puede cambiar el valor de esa variable pero si las demas
};

user.name = "David";
user.guardar = function () { // funcion anonima
    console.log("Guardando...", user.name);

}

user.guardar();

delete user.name;
delete user.guardar;

console.log(user);



// const user1 = Object.freeze({ id: 1 });  con esto no se le puede modificar
const user1 = Object.seal({ id: 1 }); // con esto si se puede cambiar la propiedad dicha pero no añadir otra
user1.name = "Nico"; // no se añade
user1.id = 7; // si se mofica


console.log(user1);
