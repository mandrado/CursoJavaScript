/**
 * 38. Operadores Lógicos
 * && -> AND -> E -> TODAS as espressões precisam ser verdadeiras para retornar true
 * || -> OR -> OU -> UMA ou MAIS espressões precisam ser verdadeiras para retornar true
 * ! -> NOT -> NÃO
 */

let a = true // 'tenho dinheiro no bolso';
let b = true // 'está fazendo sol lá fora';
let c = true // 'tenho a chave da casa';

console.log(a && b && c); // true

b = false;
console.log(a && b && c); // false

console.log(a || b && c); // true

a = false;
c = false;
console.log(a || b || c); // false

// negação inverte uma expressao
a = !false;
console.log(a); // retorna true

// negar duas vezes é dizer sim
a = !!true;
console.log(a); // retorna true





