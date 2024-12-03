const mapa = new Map();

// Agregar llave - valor al mapa
mapa.set("123", "Güaryen");
mapa.set("396", "Ada");
mapa.set("133", "Nicolás");

// Verificar si una llave existe en el mapa
console.log(mapa.has("laia"));

// Obtener un valor
console.log(mapa.get("123"));
console.log(mapa.get("555"));

// RECORRER

// for of
for(llave of mapa.keys()) {
  console.log(llave + " : " + mapa.get(llave));
}

for([llave, valor] of mapa) {
  console.log(llave + " : " + valor);
}

// for each
mapa.forEach((valor, llave) => console.log(llave + " -> " + valor));

console.log("tamaño: " + mapa.size);
// mapa.delete("123");
mapa.clear();
console.log("tamaño: " + mapa.size);