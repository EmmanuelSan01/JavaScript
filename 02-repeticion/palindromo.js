// Averiguar si una cadena es palíndromo.
// Debe usar ciclos. NO USAR FUNCIONES DE CADENA

let str = "ana";
let lstr = str.lenght-1;
let espal = true;
for(let i=0; i<=lstr/2; i++) {
  let lini = str[i] ;
  let lfin= str[lstr - i];
  console.log(lini + " " + lfin);
  if (lini !== lfin) {
    espal = false;
    break
  }
}

console.log((espal ? "Es" : "No es") + "palíndromo.");