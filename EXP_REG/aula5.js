/**
 * Conjuntos e Ranges
 * Conjuntos: tudo que está dentro de colchetes []
 * [abc] --> Conjunto 
 * [^] --> negação
 * [-] --> range exemplo [0-9] de 0 a 9
 * 
 */

const { alfabeto } = require('./base');

console.log(alfabeto);

// encontra individualmente qualquer item do conjunto
console.log(alfabeto.match(/[abc]/g)); 
// encontra todos os itens do conjunto que estejam em uma sequência
console.log(alfabeto.match(/[abc123]+/g)); 
// exibir tudo que não combine com o padrão ^, exibe em sequência
console.log(alfabeto.match(/[^abc123]+/g)); 
// exibir tudo que não combine com o padrão ^, exibe individualmente
console.log(alfabeto.match(/[^abc123]/g)); 
// exibir o range de 0 a 9 individualmente (caractere por caractere)
console.log(alfabeto.match(/[0-9]/g)); 
// exibir o range de 0 a 9 em sequencia que for encontrada
console.log(alfabeto.match(/[0-9]+/g)); 
console.log(alfabeto.match(/[a-z]+/gi)); 
console.log(alfabeto.match(/[a-zA-Z0-9]+/g)); 
// exibir com negação
console.log(alfabeto.match(/[^a-zA-Z0-9]+/g)); 
// caracteres unicode (https://en.wikipedia.org/wiki/List_of_Unicode_characters)
console.log(alfabeto.match(/[\u00A0-\u00BA]+/g)); 
// Encontra correspondência de qualquer caractere alfanumérico incluindo underline
// Equivalente a [A-Za-z0-9_].
console.log(alfabeto.match(/\w+/g));
// Encontra correspondência em um não caractere. Equivalente a [^A-Za-z0-9_].
console.log(alfabeto.match(/\W+/g));
// Encontra correspondência com um número. Equivalente a [0-9].
console.log(alfabeto.match(/\d+/g));
// Encontra correspondência com um caractere que não seja número. Equivalente a [^0-9].
console.log(alfabeto.match(/\D+/g));
// Encontra correspondência com um único caractere de espaço em branco, espaço, tabulação, 
// avanço de página, quebra de linha. 
// Equivalente a [ \f\n\r\t\v​\u00A0\u1680​\u180e\u2000​\u2001\u2002​\u2003\u2004​\u2005\u2006​\u2007\u2008​\u2009\u200a​\u2028\u2029​\u2028\u2029​\u202f\u205f​\u3000]
console.log(alfabeto.match(/\s+/g));
// Encontra correspondência em um único caractere que não seja espaço em branco. 
// Equivalente a [^ \f\n\r\t\v​\u00A0\u1680​\u180e\u2000​\u2001\u2002​\u2003\u2004​\u2005\u2006​\u2007\u2008​\u2009\u200a​\u2028\u2029​\u2028\u2029​\u202f\u205f​\u3000]
console.log(alfabeto.match(/\S+/g));