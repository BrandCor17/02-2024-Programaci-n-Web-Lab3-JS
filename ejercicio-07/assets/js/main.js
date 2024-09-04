let valor1;
let valor2;
let aux;

//Pide el valor de la primera variable y lo asigna
const requestValue = () => {
    valor1 = prompt("Ingrese el valor A: ");
    valor1 = parseInt(valor1);

    while (isNaN(valor1) || valor1 <= 0) {
        valor1 = parseInt(prompt("Por favor, ingrese un número entero positivo para el valor A: "));
    }

    //Pide el valor de la segunda variable y lo asigna
    valor2 = prompt("Ingrese el valor de B: ");
    valor2 = parseInt(valor2);

    //Valida que el numero sea entero positivo
    while (isNaN(valor2) || valor2 <= 0) {
        valor2 = parseInt(prompt("Por favor, ingrese un número entero positivo para el valor de B: "));
    }

    //Se intercambian los valores (Se usa un auxiliar declarado anteriormente para poder hacer el intercambio)
    aux = valor1;
    valor1 = valor2;
    valor2 = aux;

    //Se muestra el intercambio en forma de alerta
    alert("Se intercambiaron los valores. Ahora el valor de A es: " + valor1 + " y el valor de B es: " + valor2);
}

const main = () => {
    requestValue();
}

main();

