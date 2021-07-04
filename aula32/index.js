// 50. Atribuição via desestruturação (Arrays)

let a = "A";
let b = "B";
let c = "C";

//atribuição por desestruturação (Arrays)
// modificando o valor da variável através de um array
[a, b, c] = [1, 2, 3];
// ou asssim
const numeros = [1, 2, 3];
[a, b, c] = numeros;

//invertendo a possição do valor das variáveis
const letras = [b, c, a];
[a, b, c] = letras;

console.log(a, b, c);

//                 0, 1, 2, 3, 4, 5, 6, 7, 8
const numeros2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(numeros2[0]);
const [primeiroNumero, segundoNumero] = numeros2;
console.log(primeiroNumero, segundoNumero);

// pegando o primeiro o segundo e o resto em uma única varável
// ... rest, ... spread
const [primeiro, segundo, ...resto] = numeros2;
console.log(resto);

//pulando indices:
const [um, , tres, , cinco, , sete] = numeros2;
console.log(um, tres, cinco);

// array de arrays
// principal          0          1          2
// seduncário      0 1 2 3    0 1 2 3    0 1 2 3
const numeros3 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
// acessando listas dentro de listas:
console.log(numeros3[1][2]);
// pegando número por desestruturação
const [,[,,seis]] = numeros3;
console.log(seis);

// separanto em listas
const [lista1, lista2, lista3] = numeros3;
console.log(lista2);
console.log(lista2[2]);




