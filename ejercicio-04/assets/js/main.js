let count=1;
let numero = 2;
const createCounter = () => {
    for (let i = 1; i <=numero; i++) {
        showCounter(count);
        count = count+1;
    }
    
}

const showCounter = (count) => {
    alert(count);
}

const requestNumber=()=>{
    numero = prompt("ingrese el numero hasta el cual quiere contar: ");
    parseInt(numero);
    return numero;
}

const main = () => {
requestNumber();
createCounter();

}

main();

