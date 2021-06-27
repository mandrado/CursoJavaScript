//28. Objeto Math
let num1 = 9.54578;
// arredondamento para baixo
let num2 = Math.floor(num1);
console.log(num2);
// arredondamento para cima
let num3 = Math.ceil(num1);
console.log(num3);
// arredondamento para o valor mais próximo (para cima ou para baixo)
let num4 = Math.round(num1);
console.log(num4);
// qual o maior número dentro de uma lista:
console.log(Math.max(1,2,3,4,5,-10,1500,9,8));
// qual o menor número dentro de uma lista:
console.log(Math.min(1,2,3,4,5,-10,1500,9,8));
// gerar número aleatório entre 0 e 1
console.log(Math.random());
// gerar número aleatório diretamente na variável
const aleatorio = Math.random();
// gerar número aleatório acima de 1, inteiro:
console.log(Math.round(aleatorio * 100));
// gerar número aleatório inteiro entre 0 e 9;
console.log(Math.floor(Math.random() * 10));
// gerar número aleatório inteiro entre 0 e 10;
console.log(Math.round(Math.random() * 11));
// gerar um número aleatório entre 10 e 5
const aleatorio2 = Math.random() * (10 - 5) + 5;
console.log(aleatorio2);
// valor de PI
console.log(Math.PI);
//potencialização
console.log(Math.pow(2,10));
console.log(2 ** 10);

// raiz quadrada de um número (1024)
console.log(1024 ** (1/2));
console.log(1024 ** 0.5);
console.log(Math.sqrt(1024));

// divisão por zero em JS retorna tipo de dado Infinity 
// e ainda retorna que a conta foi realizada corretamente True
console.log(100 / 0);
// é como se fosse a divisão por um número muito pequeno
// o resultado é muito grande
console.log(100 / 0.00000000000001);
// retornar true ou false em uma operação matemática:
console.log(!!(100/0));



