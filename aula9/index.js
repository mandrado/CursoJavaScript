// diferença entre var e let

// Aula: 19. Let vs Var - Primeira diferença

// var permite que uma variável seja reinicializada com outro valor.
var nome = 'Mandrado';
var nome = 'Efigenia';

// Let foi incluído na versão ES6 (ECMAScript 2015) - JavaScript

console.log(nome);

/* 
NÃO FAÇA ISSO: DECLARAR UMA VARIÁVEL SEM DIZER SE É VAR, LET OU CONT
isso cria uma varíavel global dentro do sistema
nome = 'variave global'
*/

/* let nome = 'Mandrado'; */

console.log(nome);

// Aula: 20. Tipos de dados primitivos
// String, number, undefined, null, boolean, symbol (não tratado nesta aula)
// criando variáveis 
// do tipo string
const nome1 = 'Mandrado';
const nome2 = "Mandrado";
const nome3 = `Mandrado`;

// do tipo number
const num1 = 10;
const num2 = 10.52;

// do tipo undefined (indefinido)
let nomeAluno; // undefined -> não aponta par local nenhum na memória;
const sobrenomeAluno = null; // Nulo -> não aponta par local nenhum na memória;
const aprovado = true; // Boolean true ou false (lógico)

// para saber o tipo de uma variável utilize typeof

console.log(typeof sobrenomeAluno, sobrenomeAluno);

const a = [1, 2]; // array
const b = a; // tipo de dados passados por referência

console.log(a,b);

b.push(3); // em tipos de dados passados por referência se alterar a variável referenciada, a referência é alterada também
console.log(a,b);

// em tipos de dados primitivos, não ocorre como nos dados por referência:
let c = 2;
let d = c;

console.log(c, d);// é igual a 2, 2

d = 3;

console.log(c, d);// é igual a 2, 3
