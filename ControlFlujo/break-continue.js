let i = 0;

while (i<6) {
    i++;
    if(i==2){
        continue; // salta la siguiente operacion cuando se da el caso pero continua
    }
    if (i==5) {
        break; // detiene el proceso entero (se puede usar en todos los bucles)
    }
    console.log(i);
}

