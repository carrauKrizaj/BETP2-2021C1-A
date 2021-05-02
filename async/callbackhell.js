// 1.- Leer el archivo inventors.json
// 2.- Insertar un inventor
// 3.- Actualizar el archivo
// 4.- Leer el archivo actualizado
// 5.- Mostrar en consola

const fs = require('fs');
const chalk = require('chalk');
const path = './inventors.json';

const inventor = {first: 'Rene', last: 'Favarolo', year: 1923};
let inventors = [];
// 1.- Leer archivo json
fs.readFile(path, 'utf-8', (err, data) => {
    if(!err){
        inventors = JSON.parse(data);      
        // 2.- Insertar un inventor
        inventors.push(inventor);
        // 3.- Escribir archivo
        fs.writeFile(path, JSON.stringify(inventors, null, ' '), err => {
            if(!err){
                // 4.- Leer archivo
                fs.readFile(path, 'utf-8', (err, data) =>{
                    if(!err){
                        // 5.- Mostar en consola.
                        console.log(JSON.parse(data));
                    }
                    else {
                        chalk.red(console.log(err.message));
                    }                    
                });
            }
            else {
                chalk.red(console.log(err.message));
            }
        })
    }
    else 
    {
        chalk.red(console.log(err.message));
    }
});

