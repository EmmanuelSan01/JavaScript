// Una persona invierte $1,000.00 en una cuenta de ahorros que produce el 5% de interés. Suponiendo que todo el interés se deposita en la cuenta, calcule e imprima el monto de dinero en la cuenta al final de cada año, durante 10 años. Muestre una tabla en la página WEB que permita ver el rendimiento de la cuenta año a año.

const encabezadoConsola = function () {
    let titulo = "AÑO\t\tINVERSIÓN";
    console.log(titulo);
    console.log("-".repeat(titulo.length+6));
}

const cuerpoConsola = (year, valor) => console.log(`${year}\t\t$${valor.toFixed(2)}`);

const pieConsola = () => console.log("=".repeat(20));

function encabezadoWEB() {
    document.write(`<table border="1" width="50%"><tr><th>AÑO</th><th>INVERSIÓN</th></tr>`);
}

const cuerpoWEB = function (year, inversion) {
    let background = year%2==0?"#ffffff":"#DAF7A6";
    let fila = `<tr style='background: ${background};'><td style='text-align: center;'>${year}</td><td style='text-align: right;'>${inversion}</td></tr>`;
    document.write(fila);
}



const pieWEB = () => document.write("</table>");



function rendimiento(inversion, interes, tiempo) {
    encabezadoConsola();
    encabezadoWEB();
    for (let i=1; i<=tiempo; i++) {
        let final = Number(inversion * (1 + interes)).toFixed(2);
        cuerpoConsola(i, final);
        cuerpoWEB(i, final);
        inversion = final;
    }
    pieConsola();
    pieWEB();
}

let inversion = Number(prompt("Valor de la inversión inicial",1000));
const INTERES = 0.05;
const TIEMPO = 10;

rendimiento(inversion, INTERES, TIEMPO);
