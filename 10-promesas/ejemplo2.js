const datos = [
    {
        id: 1,
        title: "Iron Man",
        year: 2008
    },
    {
        id: 2,
        title: "Spiderman Homecomming",
        year: 2017
    },
    {
        id: 3,
        title: "Avengers Endgame",
        year: 2019
    }
]

// Síncrono
const getDatos = () => {
    return datos;
}

// console.log("INICIO");
// console.log(getDatos());
// console.log("FIN");

// Asíncrono
const getDatosAsynCallback = (callback) => {
    setTimeout(function() {
        console.log(callback());
    }, 3000);
}

// console.log("INICIO");
// getDatosAsynCallback(getDatos);
// console.log("FIN");

// Promesa
const getDatosPromesas = new Promise((resolve, reject) => {
    setTimeout(function() {
        if (datos.length > 0) {
            resolve(getDatos());
        } else {
            reject("ERROR. Sin datos");
        }
    }, 3000);
});

console.log("INICIO");
getDatosPromesas
.then(datos => console.table(datos))
.catch(err => console.error(err))
console.log("FIN");