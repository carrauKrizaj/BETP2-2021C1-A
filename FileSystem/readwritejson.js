const fs = require('fs');
const PATH = `${__dirname}/inventors.json`;

let inventors = fs.readFileSync(PATH,'utf-8');
inventors = JSON.parse(inventors);

// Ejercicio
// Leer archivo Inventors.json
// agregar un inventor
// persistir en el archivo

const miInventor = {first: 'Juan', last: 'Perez', year: 1978};
inventors.push(miInventor);

fs.writeFileSync(PATH, JSON.stringify(inventors, null, " "));

console.log("Escritura de archivo terminada");