let conj = new Set();
console.log(conj.size);

conj.add("Audi");
conj.add("Mercedes");
conj.add("Audi");
console.log(conj);

conj.delete("Mercedes");
console.log(conj);

console.log(conj.has("Mercedes"));

// RECORRIDOS

// for of
for (elem of conj) {
  console.log(elem);
}

// for each
conj.forEach(elem => console.log(elem));

// Retorna un iterador con todos los valores
console.log(conj.values());

// Borra los elementos (?)
conj.clear();
console.log(conj.size);