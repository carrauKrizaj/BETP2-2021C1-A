// function(exports, module, require, __filename, __dirname)

console.log('Se invoco a utils.js');

const suma = (a,b) => a + b;
const resta = (a,b) => a -b;
const multiplicar = (a,b) => a * b;



module.exports = {"sum": suma, "res": resta, multiplicar};

// return module.exports;