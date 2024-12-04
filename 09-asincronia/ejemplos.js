console.log("INICIO");

// Proceso asíncrono
setTimeout(() => {
    console.log("Tarea asíncrona completa 3 seg después")
}, 3000);

setTimeout(() => {
    console.log("Tarea asíncrona completa 2 seg después")
}, 2000);

setTimeout(() => {
    console.log("Tarea asíncrona completa 7 seg después")
}, 7000);

setTimeout(() => {
    console.log("Tarea asíncrona completa 5 seg después")
}, 5000);

console.log("FIN");