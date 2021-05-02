// en JS se puede pasar una funcion como parametro, al momento de invocar a la funcion se defina la funcion o
// se envia una existe.
// callback, generalmente se llama a la funcion que es pasada como parametro en otra función

const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879 },
    { first: 'Isaac', last: 'Newton', year: 1643 },
    { first: 'Galileo', last: 'Galilei', year: 1564 },
    { first: 'Marie', last: 'Curie', year: 1867 },
    { first: 'Johannes', last: 'Kepler', year: 1571 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473 },
    { first: 'Max', last: 'Planck', year: 1858 },
  ];

function saludoInventors(callbackSaludo){
    for (const inventor of inventors) {
        callbackSaludo(inventor.first);
    }
}

function callbackSaludo(nombre){
    console.log(`Buenos días ${nombre}!`)
}

//saludoInventors(nombre => console.log(`Buenos días ${nombre}!`));
saludoInventors(callbackSaludo);

console.log('Hola despues de la llamada');
