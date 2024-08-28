let pares = [
    [1, { id: 1, name: "Nicolas" }],
    [2, { id: 2, name: "Felipe", }],
    [3, { id: 3, name: "David", }],
];

let array = [{ id: 1, name: "Nicolas", },
{ id: 2, name: "Felipe", },
{ id: 3, name: "David", }];

function toCollection(arr) {
    let collection = [];
    for (idx in arr) {
        let elemento = arr[idx];
        collection[idx] = elemento[1]; // el segundo elemento de los pares
        collection[idx].id = elemento[0];
    }
    return collection;
}

let resultado = toCollection(pares);
console.log(resultado);