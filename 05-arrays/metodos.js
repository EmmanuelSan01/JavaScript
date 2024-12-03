let carros = [];

// Agrega al final
carros.push("Renault 4", "Fiat", "Volvo", "Ferrari");
console.log(carros);
// Elimina al final
carros.pop();
console.log(carros);
// Elimina al inicio
carros.shift();
console.log(carros);
// Agraga al inicio
carros.unshift("Audi");
console.log(carros);
// Retorna una sección
console.log(carros.slice(1, 3));
// Elimina y agrega en una misma sección
carros.splice(1,2,"Mercedes", "Mazda", "Nissan");
console.log(carros);
// Concatena con un patrón
console.log("JOIN: " + carros.join("; "));
// Retorna un vector
carros = carros.concat("Toyota", "Mitsubishi", ["Susuki", "Subaru"]);
console.log(carros);

console.log(carros.indexOf("Toyota"));
console.log(carros.includes("Renault 4"));

let rta = carros.reduce((prev, curr) => prev += (curr.length <= 5 ? `, ${curr}` : ""), prev = "");
console.log(rta);