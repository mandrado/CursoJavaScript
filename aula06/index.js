let nome = 'João'; // além do lef temos também 'var' que é mais antigo
let teste; // variável declarada sem valor definido.
teste = 'qualquer valor'; // variável sendo inicializada com um valor
/**
 * Regras:
 * 1. não podemos criar variáveis com palavras reservadas da linguagem utilizada.
 * 2. variáveis porecisam ter nomes signifcativos
 * 3. variáveis não pode começar com números
 * 4. devem começar com letras minúsculas, quando compostas,
 * a segunda parte iniciando em Maíusculo (camelCase)
 * 5. não podem conter espaços ou traços.
 * 6. variáveis são case-sensitive, isto é, letras maiúsculas e minúsculas fazem diferença.
 * 7. não podemos redeclarar variáveis com Let.
 * 8. Nâo utilize VAR, utilize LET.
 * 
 */

let nomeCliente = 'João' // nomeCliente é diferente 
let nomecliente = 'Eduardo' // de nomecliente

console.log(nomeCliente,'nasceu em 1984. ');
console.log('Em 2000', nomecliente,'conheceu Maria. ');
nome = 'Mandrado'; // variando o valor da variável 'nome'
console.log(nome,'casou-se com Maria em 2012. ');
console.log('Maria teve um filhco com', nome,'em 2015. ');
console.log('O filho de', nome,'se chama Eduardo. ');
console.log(teste);
