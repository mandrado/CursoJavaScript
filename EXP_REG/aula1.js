/**
 * Expressões Regulares
 * https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Regular_Expressions
 * 
 * Flag da expressão regular
 *  g - global (encontrar todas as ocorrências)
 *  i - insensitive (case insentitive)
 *  () - separa por grupos de pesquisa
 *  | - (pipe) ou
 */


// arquivo base para consultas da aula:
const { texto } = require('./base');

const regExp1 = /(maria|joao)(, hoje sua esposa)/i; // entrar todos os Joao, seja em maiúscula ou minúscula.

// test testa a expressão regular no texto informado
console.log(regExp1.test(texto)); // retorna true

// exec conseguimos extrair coisas do texto, mas não funciona com g
console.log(regExp1.exec(texto)); // retorna true e uma lista [] seoarada oir virgulas
// exec e .index retornam o indice da posição onde o texto foi encontrado
console.log(regExp1.exec(texto).index); // retorna true e uma lista [] seoarada oir virgulas

// jogar em uma variável o que foi encontrado
const found = regExp1.exec(texto);
console.log(found[2]);// exibir o prupo que está no indice correspondente