const fs = require('fs');
const chalk = require('chalk');

const path = './bigfile.txt';

fs.readFile(path, 'utf-8', (err, data) =>{
    if(!err){
        console.log(data);
    }
    else {
        chalk.red(console.log(err.message));
    }
});

console.log('Se termino de leer el archivo?');


