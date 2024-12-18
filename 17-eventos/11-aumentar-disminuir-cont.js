const container = document.querySelector(".container");
const contador = document.getElementById("contador");

let varContador = 0;

container.addEventListener("click", evento => {
  if(evento.target.classList[1]==="btn-info") {
    contador.textContent++;
  } else {
    if(evento.target.classList[1]==="btn-danger") {
      contador.textContent--;
    }
  }
});

document.body.addEventListener("click", () => { console.log("click"); });
