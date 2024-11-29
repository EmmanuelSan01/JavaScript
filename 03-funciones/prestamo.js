let monto = Number(prompt("Monto del crédito"));
let inter = Number(prompt("Interés anual (%)"));
let pagos = Number(prompt("Número de pagos mensuales"));

let valto = monto * (1 + inter);
let valme = valto / pagos

for (let i=1; i<=pagos; i++) {
    let val1 = valto-valme
    console.log(`${i}\t\t$${(val1).toFixed(2)}`);
    val1 -= valme;
}

document.write


