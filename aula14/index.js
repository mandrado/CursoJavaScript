//27. Mais sobre numbers
// padrão para precisão de número IEEE 754-2008
let num1 = 1500.4654856419865;
let num2 = 2.5;

console.log(num1 + num2);

//transformar número em string em tempo de execução
console.log(num1.toString() + num2);

//transformando definitivamente o número em string
//snum1 = num1.toString();
console.log(typeof num1);

// saber a representação binária de um número
console.log(num1.toString(2));

//arrendodar para duas casas decimais
console.log(num1.toFixed(2));

// retornar se um número é inteiro ou não
console.log(Number.isInteger(num1));

// verificar se o conteúdo de uma variável não é um número NaN
let temp = num1 * 'Ola';
console.log(Number.isNaN(temp));

num1 = 0.7;
num2 = 0.1;

num1 += num2; // num1 = num1 + num2
num1 += num2; // 0.9
num1 += num2; // 1.0
// arredionda o número para corrigir os valores decimais incorretos.
// há uma certa imprecisão nos valores decimais, que podem ser corrigidas
// utilizando parseFloat(x.toFixed(2)) ou Number(x.toFixed(2))
num1 = parseFloat(num1.toFixed(2));
console.log(num1);
num1 += num2; // 1.1
console.log(num1);
num1 += num2; // 1.2
num1 += num2; // 1.3
num1 += num2; // 1.4
num1 += num2; // 1.5
num1 += num2; // 1.6
num1 += num2; // 1.7
num1 += num2; // 1.8
num1 += num2; // 1.9
num1 += num2; // 2.0

num1 = Number(num1.toFixed(2));
console.log(num1);

/**
 * outra forma de resolver o problema é multiplicar as variáveis
 * por 100 e dividir a conta toda por 100
 */

num1 = 0.7;
num2 = 0.1;

num1 = ((num1 * 100) + (num2 * 100)) / 100; // 0.8
console.log(num1);