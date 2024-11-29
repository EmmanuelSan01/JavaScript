// Averiguar si una cadena es palíndromo.
// Debe usar ciclos. NO USAR FUNCIONES DE CADENA

//FUNCIÓN DECLARATIVA O NOMBRADA
function esPalindrome(str) {
  let lstr = str.lenght - 1;
  for (let i = 0; i <= lstr / 2; i++) {
    let lini = str[i];
    let lfin = str[lstr - i];
    console.log(lini + " " + lfin);
    if (lini !== lfin) {
      return false;
    }
  }
  return true
}

// FUNCIÓN EXPRESIVA O ANÓNIMA
const funcAnonima =function (str) {
  let lstr = str.lenght - 1;
  for (let i = 0; i <= lstr / 2; i++) {
    let lini = str[i];
    let lfin = str[lstr - i];
    console.log(lini + " " + lfin);
    if (lini !== lfin) {
      return false;
    }
  }
  return true;
}

// FUNCIÓN FLECHA
const funcFlecha = (str) => {
  let lstr = str.lenght - 1;
  for (let i = 0; i <= lstr / 2; i++) {
    let lini = str[i];
    let lfin = str[lstr - i];
    console.log(lini + " " + lfin);
    if (lini !== lfin) {
      return false;
    }
  }
  return true;
}

const msgEsPalindrome = (str) => 
  funcFlecha(str) ? "Es palíndromo" : "No es palíndromo.";

let cad = "anilina";
console.log((esPalindrome ? "Es" : "No es") + "palíndromo.");
console.log(funcAnonima("reconocera") ? "Es palíndromo" : "No es palíndromo.");
console.log(msgEsPalindrome("reconocer"));