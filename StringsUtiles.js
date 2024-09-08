let userName = "David";
let phoneNumber = "333-444-555";

console.log(userName.length); // saber la longitud
console.log(userName.charAt(0)); // saber que caracter esta en la posicion que indico
console.log(userName.indexOf("D")); // saber en que posicion esta
console.log(userName.lastIndexOf("d")); // saber la ultima posicion de esta

userName = userName.toUpperCase(); // todo mayuscula
phoneNumber = phoneNumber.replaceAll("-", ""); // quita elemento por lo que pongas

console.log(userName);
console.log(phoneNumber);






