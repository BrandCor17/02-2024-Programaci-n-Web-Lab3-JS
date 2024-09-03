let valor1;
let valor2;
let aux;
const requestValue = () => {
   valor1 = prompt("ingrese el valor A: ")
   parseInt(valor1);
   valor2= prompt("Ingrese el valor de B: ")
   parseInt(valor2);

   aux = valor1;
   valor1= valor2;
   valor2=aux;

   alert("Se intercambiaron los valores. Ahora elvalor de A es: "+valor1+" y el valor de B: es "+valor2)
}

const main = () => {
    requestValue();
    
}

main();
