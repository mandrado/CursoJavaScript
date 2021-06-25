/** 21. Operadores aritméticos
 * + Adição / concatenação
 * - subtração
 * / divisão
 * * multiplicação
 * ** potenciação
 * % Resto da divisão
*/
const num1 = '5';
const num2 = 10;
console.log(num1 + num2); // concatenação

const num3 = 5;
const num4 = 10;
console.log(num3 + num4); // Soma

const num5 = 5;
const num6 = 10;
console.log(num5 * num6); // Multiplicação

const num7 = 2;
const num8 = 3;
console.log(num7 ** num8); // Exponenciação

const num9 = 10;
const num10 = 5;
console.log(num9 % num10); // Resto da divisão

/**
 * precedencia aritmética:
 * 1º que que estiver em parenteses ()
 * 3º ** potenciação
 * 4º multiplicação * | divisão /  | resto da divisão %
 * 3º soma | subtração 
 */



/** 21. Operadores de incremento 
 * ++
*/

let contador = 1;
//pós incremento: primeiro processa o valor e depois incrementa
console.log(contador++); // exibe 1 e depois incrementa mais 1
console.log(contador); // exibe o valor 2 incrementado
contador++; // exibe 3
contador++; // exibe 4
//pré incremento: primeir incrementa o valor e depois processa
console.log(++contador);// incrementa mais um e exibe 5
++contador; // exibe 6
++contador; // exibe 7
console.log(contador);

/** 21. Operadores de decremento 
 * --
*/
let contadord = 10;
//pós decremento: primeiro processa o valor e depois incrementa
console.log(contadord--); // exibe 10 e depois decrementa menos 1
console.log(contadord); // exibe o valor 9 decrementado
contadord--; // exibe 8
contadord--; // exibe 7
//pré incremento: primeir incrementa o valor e depois processa
console.log(--contadord);// decrementa menos um e exibe 6
--contadord; // exibe 5
--contadord; // exibe 4
console.log(contadord);

// incrementando de passos em passos
const passo = 2;
let contarpasso = 1;
console.log('incrementando de passos em passos');
contarpasso = contarpasso + passo;
console.log(contarpasso);
//somar e atribuir um novo valor
contarpasso = contarpasso + passo;
contarpasso = contarpasso + passo;
contarpasso = contarpasso + passo;
console.log(contarpasso);

/** 21. Operadores de atribuição 
 * 
*/
//somar e atribuir um novo valor
contarpasso += passo; // é o mesmo que contarpasso + constarpasso + passo
console.log(contarpasso);

//multiplicar e atribuir um novo valor
contarpasso *= passo; 
console.log(contarpasso);

//potencialização e atribuir um novo valor
contarpasso **= passo; 
console.log(contarpasso);

const num22 = '5.2'
// NaN --> Not a Number
console.log(typeof num22, num22 );

//converftendo string para numero
console.log(typeof parseInt(num22), parseInt(num22)); // convertendo para inteiro
console.log(typeof parseFloat(num22), parseFloat(num22)); // convertendo para float
console.log(typeof Number(num22), Number(num22)); // convertendo para um número qualquer

