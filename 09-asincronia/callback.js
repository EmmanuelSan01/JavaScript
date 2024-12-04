function myDisplayer(some) {
    console.log(some);
}

function esPrimo(num) {
    console.log(`${num} es un número primo`);
}

function esPar(num) {
    return num % 2 == 0;
}

// Se simula una consulta a la página de antecedentes criminales
// Solicita el número de identificación
// Retorna si la persona asociada a ese número tiene antecedentes o no

const consultar = callback => {
    setTimeout(() => {
        const segDesde1970 = Math.floor(Date.now()/1000);
        if (!callback(segDesde1970)) {
            console.log( segDesde1970 + " No tiene antecedentes");
        } else {
            console.log(segDesde1970 + " Tiene antecedentes");
        }
    }, 2000)
}

function myCalculator(a, b, funcCallback) {
    let sum = a + b;
    funcCallback(sum);
}


console.log("INICIO");
myCalculator(5, 5, myDisplayer);
myCalculator(5, 5, esPrimo);

consultar(myDisplayer);
consultar(esPrimo);
let tiempo = 3;
for(let i=1; i<=7; i++) {
   setTimeout(i => {
    console.log("Ejecución: " + i);
    consultar(esPar);
   }, 1000*(tiempo++))
}
console.log("FIN");