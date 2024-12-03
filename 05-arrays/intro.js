// Creación de un array
let frutas = ["manzana", "pera", "uva", "fresa", "mango"];

// Creación como instancia de objeto
let campers = new Array("Jinfer", "Marlon", "Jose", "Nicolás");

let salas = new Array(3);
salas[0] = "Sputnik";
console.log(salas[0]);

// Recorre un array

// Por sus posiciones
for(let i=0; i<frutas.length; i++) {
  console.log(frutas[i]);
}
console.log("=".repeat(40));

// Por sus elementos (for of)
for (fruta of frutas) {
  console.log(fruta);
}

console.log("=".repeat(40));

frutas.forEach(f => console.log(f + " verde"));
console.log("=".repeat(40));

// Con funciones LAMBDAS
frutas.map(f => console.log(f + " por libra"));
frutas.filter((f, pos) => console.log(f + " - " + pos));
frutas.filter(f => f.length < 5).map(f => console.log(f));