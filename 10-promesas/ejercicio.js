let now = new Date();
let hours = now.getHours();
let minutes = now.getMinutes();
let seconds = now.getSeconds();

const random = Math.random() * (5000 - 2000) + 2000;

const output = new Promise((resolve, reject) => {
    resolve(
        console.log(`A [Enviado de: 1] apareció en ${hours}:${minutes}:${seconds}`),
        setTimeout(console.log(`B [Enviado de: 2] apareció en ${hours}:${minutes}:${seconds}`), 0),
        setTimeout(console.log(`F [Enviado de: 3] apareció en ${hours}:${minutes}:${seconds}`), 7000),
        setTimeout(console.log(`C [Enviado de: 4] apareció en ${hours}:${minutes}:${seconds}`), 5000),
        setTimeout(console.log(`D [Enviado de: 5] apareció en ${hours}:${minutes}:${seconds}`), random),
        setTimeout(console.log(`E [Enviado de: 6] apareció en ${hours}:${minutes}:${seconds}`), random + 2000),
        setTimeout(console.log(`G [Enviado de: 7] apareció en ${hours}:${minutes}:${seconds}`), random + 4000),
        setTimeout(console.log(`H [Enviado de: 8] apareció en ${hours}:${minutes}:${seconds}`), random + 7000),
    );
    reject("ERROR");
});

output
.then(textBox => console.log(textBox))
.catch(err => console.error(err))