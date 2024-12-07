const ahora = new Date();
console.log(ahora);

const horaJenni = new Date(2001, 11, 28, 6, 0, 0);
console.log(horaJenni);

const horaAnder = new Date(97, 10, 18);
console.log(horaAnder);

const fecha = new Date();
fecha.setFullYear(2024);
fecha.setMonth(11);
fecha.setDate(8);
console.log(fecha);

console.log("Día Anderson: " + horaAnder.getDay());
console.log("Cadena: " + horaAnder.toDateString());
console.log("Cadena hora: " + horaAnder.toTimeString());
console.log("Cadena hora corta: " + horaAnder.toLocaleDateString());
console.log("Milisegundos Anderson: " + horaAnder.getTime());
const miliDia = 1000 * 60 * 60 * 24;
console.log(Math.floor((horaJenni.getTime() - horaAnder.getTime()) / miliDia));
