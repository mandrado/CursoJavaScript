/**
 * Quantificadores
 * 
 * * (opcionais) 0 ou n = {0,}
 * + (obrigatório) 1 ou n = {1,}
 * ? (opcionais) 0 ou 1 = {0,1}
 * \ caractere de escape
 * {n,m} quantas vezes minimas e máximas que podem ser encontradas
 * {10,} no mínimo 10
 * {,10} no máximo 10 (0 a 10)
 * {5,10} no minimo 5 e no máximo 10
 * {10} 10 vezes
 * 
 */


// arquivo base para consultas da aula:
const { texto, arquivos } = require('./base');
/* 
console.log(texto);

const regExp1 = /Jo+ão+/gi;

console.log((texto.match(regExp1))); */


// buscar lista de arquivos
/* for (const arquivo of arquivos) {
    console.log(arquivo);
} */

//
const regExp2 = /\.((jp|JP)(e|E)?(g|G))/gi

for (const arquivo of arquivos) {
    const valido = arquivo.match(regExp2);
    
    if (!valido) continue;

    console.log(arquivo, valido);
}