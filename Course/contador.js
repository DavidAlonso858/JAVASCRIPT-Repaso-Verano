let count = 0;

document.getElementById("decreaseBtn").onclick = function () {
    count -= 1;

    document.getElementById("countLabel").innerHTML = count; // para actualizar el contenido y cambiar lo que se muestra
}

document.getElementById("resetBtn").onclick = function () {
    count = 0;
    document.getElementById("countLabel").innerHTML = count; // para actualizar el contenido y cambiar lo que se muestra

}

document.getElementById("increaseBtn").onclick = function () {
    count += 1;
    document.getElementById("countLabel").innerHTML = count; // para actualizar el contenido y cambiar lo que se muestra

}