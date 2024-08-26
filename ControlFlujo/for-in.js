let user = {
    id: 1,
    name: "David",
    age: 22,
};

for (let propiedad in user) {
    console.log(propiedad, user[propiedad]); // user[] para que vaya accediendo al valor de la propiedad
}