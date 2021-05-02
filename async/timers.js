
setTimeout(() => {
    console.log('Hola mundo, despues de 2 segundos');
}, 2000);

setTimeout(() => {
    console.log('Hola mundo, despues de 4 segundos');
}, 4000);

console.log('Hola mundo despues de 6 segundos?');

let i = 0;
const timerid = setInterval(() => {
    console.log('Hola mundo, cada segundo');
    i ++;
    if(i == 5){
        clearInterval(timerid);
    }
}, 1000);