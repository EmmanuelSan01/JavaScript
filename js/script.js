const sheet = document.styleSheets[0];
const rules = sheet.cssRules || sheet.rules;

console.log(rules);

let modifier = 50;
window.addEventListener('keydown', (event) => {
    let up= 0;
  switch(event.key) {
    case 'ArrowUp': up += modifier; rules[1].style.top = `${modifier}px`;  break;
    case 'ArrowDown': style.top = `${parseInt(style.top) + modifier}px`; break;
    case 'ArrowLeft': style.left = `${parseInt(style.left) - modifier}px`; break;
    case 'ArrowRight': style.left = `${parseInt(style.left) + modifier}px`; break;
  }
});

console.log(rules[1]);