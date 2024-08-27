function cualEsMayor(a, b) {
    if (a > b) {
        return a;
    } else {
        return b;
    }
    // return (a > b) ? a:b;
}

let mayor = cualEsMayor(10, 12);

console.log(mayor);
