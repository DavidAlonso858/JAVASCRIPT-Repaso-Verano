function precioCompleto(precio, impuesto) {
    let iva =precio*impuesto;

    return (precio+iva);
}

let resultado = precioCompleto(19.90,0.15);

console.log(resultado);
