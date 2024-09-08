let x;
let y;
let z;

document.getElementById("roll").onclick = function () {
    x = (Math.random() * (21 - 1) + 1); // de 20 a 1
    document.getElementById("xlabel").innerHTML = x;

    y = (Math.random() * (21 - 1) + 1);
    document.getElementById("ylabel").innerHTML = y;

    z = (Math.random() * (21 - 1) + 1);
    document.getElementById("zlabel").innerHTML = z;
}
