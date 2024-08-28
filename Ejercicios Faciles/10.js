let longitud = 7;

function crearArray(n) {
    if (n <= 0) {
        return "no se puede crear un array sin nada"
    } else {
        let array = new Array(n); // darle una longitud al array para luego rellenarlo

        for (let index = 1; index <= array.length; index++) {
            array[index - 1] = index;
        }
        return array;
    }
}

let resultado = crearArray(longitud);
console.log(resultado);

