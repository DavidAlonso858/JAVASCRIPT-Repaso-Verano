let array = [{ id: 1, name: "Nicolas", },
{ id: 2, name: "Felipe", },
{ id: 3, name: "David", }];

let pares = [
    [1, { id: 1, name: "Nicolas" }],
    [2, { id: 2, name: "Felipe", }],
    [3, { id: 3, name: "David", }],
]; // array de pares (clave y valor)

function toPairs(arr) {
    let pairs = [];
    for (idx in arr) { // idx se usa para el indice del array y uso in en vez de of para solo pillar el indice
        let elemento = arr[idx];
        pairs[idx] = [elemento.id, elemento]; // construyo el array de pares con el id y elemento completo del array normal
    }
    return pairs;
}

let resultado = toPairs(array);
console.log(resultado);
