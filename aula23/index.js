/**
 * 39. Avaliação de Curto-Circuito (Short-Circuit)
 * && -> falsa && true -> falso "o valor mesmo" isto significa que havendo uma expressão
 * falsa, não precisa checar os demais.
 * a ordem de checagem é da primeira expressão para a última, retornando o valor da última
 * 
 * || -> true || (or) false -> "o valor verdadeiro"
 * 
 * FALSY : valores que são avaliados como falso:
 * * false
 * * 0
 * * '' "" ``
 * * null / undefined
 * * NaN
 * 
 */

// na orde de checagem, avalia-se as expressões e retorna a úlitma
console.log('Mandrado' && 'Efigenia'); // retorna Efigenia

// exemplo de avaliação em falso '' "" ``
console.log('Mandrado' && '' && 'Efigenia'); // retorna string vazia
console.log('Mandrado' && undefined && 'Efigenia'); // retorna undefined
console.log('Mandrado' && NaN && 'Efigenia'); // retorna NaN
console.log('Mandrado' && null && 'Efigenia'); // retorna null

// exemplo de Avaliação de Curto-Circuito (Short-Circuit)
function falaOi(){
    return 'Oi'
}
// com falso a expresão será falsa
let vaiExecutar = false;
console.log(vaiExecutar && falaOi()); // retorna falso

// com qualquer texto diferente dos FALSY, é o mesmo que true
vaiExecutar = 'João';
console.log(vaiExecutar && falaOi()); // retorna Oi

// || -> true || (or) false -> "o valor verdadeiro"
// na expressão abaixo é exibido o primeiro valor verdadeiro encontrado
// o Or precisa de ao menos uma expressão verdadeira para retornar o valor verdadeiro
console.log( 0 || false || null || 'Mandrado' || true); // exibe Mandrado

// exemplo
let corUsuario = null;
const corPadrao = corUsuario || 'preto';
console.log(corPadrao); // retorna preto

let corUsuario1 = 'vermelho';
const corPadrao1 = corUsuario1 || 'preto';
console.log(corPadrao1); // retorna vermelho

