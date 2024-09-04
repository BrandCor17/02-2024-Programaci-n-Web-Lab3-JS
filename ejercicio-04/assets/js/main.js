let count = 1;
let numero = 2;
//Funcion que crea y genera el conteo progresivo
const createCounter = () => {
    for (let i = 1; i <= numero; i++) {
        showCounter(count);
        count = count + 1;
    }
}

//Muestra en forma de alerta el conteo uno por uno
const showCounter = (count) => {
    alert(count);
}

//Funcion que pide el numero limite de conteoal usuario
const requestNumber = () => {
    numero = prompt("Ingrese el número hasta el cual quiere contar: ");
    numero = parseInt(numero);

    //Se valida que sea un numero entero positivo
    while (isNaN(numero) || numero <= 0) {
        numero = parseInt(prompt("Por favor, ingrese un número entero positivo: "));
    }

    return numero;
}

const main = () => {
    requestNumber();
    createCounter();
}

main();


