let array = [1, 5, 8, -34, - 77, 88];

function getMenorMayor(array) {
    let mayor = -Infinity;
    let menor = Infinity;
    let i = 0;
    do {
        if (mayor < array[i]) {
            mayor = array[i];
        }

        if (menor > array[i]) {
            menor = array[i];
        }

        i++
    } while (array.length > i);

    /* for (numero of array){  MEJOR FORMA DE HACERLO
    *   menor = menor < numero ? menor : numero;
    *   mayor = mayor > numero ? mayor : numero;
    *   }
    *   
    * return[menor, mayor];   
    *                       
    */
    return [menor, mayor];
}

let numero = getMenorMayor(array)

console.log(numero);
