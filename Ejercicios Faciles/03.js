function getbyIDx(arr, idx) {
    if (arr[idx] != null) {
        return arr[idx];
    } else {
        return "fallo en el indice o no contiene nada"
    }
}
let resultado = getbyIDx([1, 2], 1); // devuelve el elemento del array al que pertenece ese indice 

console.log(resultado);
