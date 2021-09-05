/**
 * 125. Módulos (2)
 *  Navegando entre pastas
 *  ./ pastas para frente
 *  ../ pastas para trás
 * 
 * variávies internas dentro do múdulo
 *  __filename <-- nome do arquivo atual com caminho absoluto
 *  __dirname <-- nome da pasta atual com caminho absoluto
 * 
 */


//const Cachorro = require('./B/C/D/mod');
const Cachorro = require('./Z/mod2');

const c = new Cachorro('bily');

c.latir();

console.log(__filename);
console.log(__dirname);

// saber o caminho correto de um arquivo independente do sistema
const path = require('path');
console.log(path.resolve(__dirname));
// retornar duas pastas independe do sistema
console.log(path.resolve(__dirname,'..','..'));
// retornar duas pastas independe do sistema, entrar na pasta aula85 e depois na pasta assets
console.log(path.resolve(__dirname,'..','..','aula85', 'assets'));



