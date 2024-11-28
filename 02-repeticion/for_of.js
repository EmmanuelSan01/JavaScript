let str = "Campus Lands";

for(let i=0; 1<str.length; i++) {
  let letra = str[i];
  if (letra === "a") break;
  console.log(letra);
  }
  
  let vocales = "aeiou";

  for(let i=0; 1<str.length; i++) {
  let letra = str[i];
  if (vocales.includes(letra)) continue;
  console.log(letra);

}

// for (let letra of str) {
//   console.log(letra);
// }