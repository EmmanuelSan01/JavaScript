import mostrarTexto from "./mostrartexto.js";
import mostrarJSON from "./mostrarjson.js";

// Acción el botón mostrar texto
const btnMostrarTXT = document.getElementById("mostrartxt");
const areaTXT = document.getElementById("contenidotexto");
btnMostrarTXT.addEventListener("click", e => {
    mostrarTexto(areaTXT);
});

// Acción al botón mostrar JSON en la tabla
const btnMostrarJSON = document.getElementById("mostrarjson");
const areaJSON = document.getElementById("datostabla");
btnMostrarJSON.addEventListener("click", e => {
    mostrarJSON(areaJSON);
});