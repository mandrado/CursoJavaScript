/**
 * Regras:
 * 1. não podemos criar constantes com palavras reservadas da linguagem utilizada.
 * 2. constantes porecisam ter nomes signifcativos
 * 3. constantes não pode começar com números
 * 4. devem começar com letras minúsculas, quando compostas,
 * a segunda parte iniciando em Maíusculo (camelCase)
 * 5. não podem conter espaços ou traços.
 * 6. constantes são case-sensitive, isto é, letras maiúsculas e minúsculas fazem diferença.
 * 7. não podemos modificar o valor de uma constantes
 * 8. Nâo utilize VAR, utilize CONST.
 * 9. Não podemos declarar uma constante sem iniciazar com um valor.
 */

/* 
nome = 'nõa posso fazer isso para constantes';
console.log(nome);
 */

const nome = 'João';
console.log(nome);

const primeiroNumero = 5;
const segundoNumero = 10;


let resultado = primeiroNumero * segundoNumero;
// operadores básicos: + - * /

let resultadoDuplicado = resultado * 2;

console.log(resultadoDuplicado);

const texto = "texto";

// para saber o tipo de uma variável:
console.log(typeof(primeiroNumero)); // pode ser com parenteses ou 
console.log(typeof primeiroNumero); // sem parenteses
console.log(typeof texto);

// textos são concatenados com +
// números são somados com +

console.log(texto + 5);


