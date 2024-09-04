//Funcion que calcula cada uno de los numeros de la serie de fibonacci
const fibonacciCalculate = (cantidad) => {
    let fibonacci = [0, 1];

    //Este for genera los numeros de la secuencia de fibonacci desde el tercer elemento
    for (let i = 2; i < cantidad; i++) {
        fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
    }

    //Muestra en forma de alerta la serie ya generada hasta la cantidad ingresada
    alert("La secuencia de Fibonacci es: " + fibonacci.slice(0, cantidad).join(", "));
}

//Pide la cantidad de elementos que se desean generar
const requestQuantity = () => {
    let cantidad = prompt("Ingrese la cantidad de elementos en la secuencia de Fibonacci: ");
    cantidad = parseInt(cantidad);

    //Verifica que sea un entero positivo
    while (isNaN(cantidad) || cantidad <= 0) {
        cantidad = parseInt(prompt("Por favor, ingrese un número entero positivo: "));
    }

    return cantidad;
}

//Funcion main donde se inicia el procedimiento
const main = () => {
    const cantidad = requestQuantity();
    fibonacciCalculate(cantidad);
}

main();
