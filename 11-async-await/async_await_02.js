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

const getDatos = () => {
    return datos;
}

// const getDatosPromesas = new Promise((resolve, reject) => {
//     setTimeout(function() {
//         if (datos.length > 0) {
//             resolve(getDatos());
//         } else {
//             reject("ERROR. Sin datos");
//         }
//     }, 3000);
// });

function obtenerDatos() {
    setTimeout(async () => {
        const datos = await getDatos();
        console.table(datos);
    }, 3000)
}

console.log("INICIO");
obtenerDatos();
console.log("FIN");