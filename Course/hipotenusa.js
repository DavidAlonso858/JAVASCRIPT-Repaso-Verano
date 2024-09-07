let a;
let b;
let c;

/* Forma sin trabajar en HTML

a = window.prompt("Enter side A");
a = Number(a);

b = window.prompt("Enter side B");
b = Number(b);

c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));

c = Number(c.toFixed(2)); // c.toFixed para que solo muestre el numero de decimales que le paso
console.log("Side C: ", c);

*/

document.getElementById("submitButton").onclick = function () { // cuando clickes el boton se ejecuta esta funcion
    a = document.getElementById("aTextBox").value; // (input) pillar el valor de la caja de texto con ese id
    a = Number(a);

    b = document.getElementById("bTextBox").value; // (input) pillar el valor de la caja de texto con ese id
    b = Number(b);

    c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));

    c = Number(c.toFixed(2));
    document.getElementById("cLabel").innerHTML = "Side C: " + c;
}