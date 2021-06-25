alert('Mensagem de alerta nossa mensagem.');
let a = prompt('Digite um valor para A');
let b = prompt('Digite um valor para B');
console.log(a, b);
let resultado = parseFloat(a) + parseFloat(b);
alert('a soma de parseFloat(A) + parseFloat(B) = '+resultado);

a = Number(a);
b = Number(b);

resultado = a + b;

alert('a soma de A + B = '+resultado);
alert('Usando template string');

alert(`a soma de ${a} + ${b} foi ${resultado}`);