const fs = require('fs');
const PATH = `${__dirname}/texto.txt`;

let texto = fs.readFileSync(PATH, 'utf-8');

texto += `
Hola mundo desde codigo
`;

fs.writeFileSync(PATH, texto);