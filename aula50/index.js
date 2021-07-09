/**
 * 69. Parâmetros da função
 * 
 */

function funcao() {
    console.log(arguments[0]);
};

// enviando um valor para uma função que não tem parâmetros:
funcao('Valor', 1, 2, 3, 4, 5, 6, 7, 8, 9);


// as funções possuem um parametro especial 'arguments' que sustetam todos
// os argumetnso envidados
function somaValores() {
    let total = 0;
    for (const argumento of arguments) {
        total += argumento;
    }

    console.log(`total: ${total}`);
};

somaValores(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)

function valores(a, b, c, d, e, f) {
    console.log(a, b, c, d, e, f);
}

/** 
 * quanod eu chamo uma função que possui paramentros
 * mas ñao envio todos os paramentros, o JS atribui
 * o valor undefined para cada variável que não recebeu
 *  um valor
*/

valores(1, 2, 3, 4)

// criando funções com valores padrão
function funcaoPadrao(a = 0, b = 2, c = 10) {
    console.log(a + b + c);
};
// enviando valores para a e b
funcaoPadrao(1, 10);
//forçando utilizar o valo padrão da varíavel b
funcaoPadrao(1, undefined, 10);

//atribuição por desestruturação de objetos
function funcObjPessoa({ nome, sobrenome, idade }) {
    console.log(nome, sobrenome, idade);
}
funcObjPessoa({ nome: 'Mandrado', sobrenome: 'Santos', idade: 45 });
// também podemos criar um objeto e envia-lo para a função
let objPessoa = { nome: 'Mandrado', sobrenome: 'Santos', idade: 45 };
funcObjPessoa(objPessoa);

//atribuição por desestruturação de array
function funcArrayPessoa([nome, sobrenome, idade]) {
    console.log(nome, sobrenome, idade);
}
funcArrayPessoa(['Mandrado', 'Santos', 45]);
// também podemos criar um objeto e envia-lo para a função
let arrayPessoa = ['Mandrado', 'Santos', 45];
funcArrayPessoa(arrayPessoa);

/** rest parameter (parâmetros rest)
 * Se o último argumento nomeado de uma função tiver prefixo com  ..., 
 * ele irá se tornar um array em que os elemento de 0 (inclusive) até 
 * theArgs.length (exclusivo) são disponibilizados pelos argumentos 
 * atuais passados à função.
 * */
function conta(operador, acumulador, ...numeros) {
    for (const numero of numeros) {
        if (operador === '+') acumulador += numero;
        if (operador === '-') acumulador -= numero;
        if (operador === '/') acumulador /= numero;
        if (operador === '*') acumulador *= numero;
    }
    console.log(operador, acumulador, numeros);
}

conta('-', 0, 20, 30, 40, 50);

// mundando a função acima para uma funcion expression
const conta2 = function(operador, acumulador, ...numeros) {
    for (const numero of numeros) {
        if (operador === '+') acumulador += numero;
        if (operador === '-') acumulador -= numero;
        if (operador === '/') acumulador /= numero;
        if (operador === '*') acumulador *= numero;
    }
    ;console.log(operador, acumulador, numeros);
}

conta2('-', 0, 20, 30, 40, 50);

// arrow function não possui o parametro arguments

const conta3 = (operador, acumulador, ...numeros) => {
    for (const numero of numeros) {
        if (operador === '+') acumulador += numero;
        if (operador === '-') acumulador -= numero;
        if (operador === '/') acumulador /= numero;
        if (operador === '*') acumulador *= numero;
    }
    ;console.log(operador, acumulador, numeros);
}

conta3('-', 0, 20, 30, 40, 50);

// arrow funcion aceita parâmetros rest

const conta4 = (...args) => {
    console.log(args);
};
conta4('-', 0, 20, 30, 40, 50);
