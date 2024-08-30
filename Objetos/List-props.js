const punto = {
    x: 10,
    y: 15,
    dibujar() {
        console.log("dibujando");
    }
};

if ("dibujar" in punto) { // para verificar que se encuentra esa funcion en el objeto
    punto.dibujar();
}

for (let llave in punto) {
    console.log(llave, punto[llave]); // propiedad y valor de la propiedad
}

