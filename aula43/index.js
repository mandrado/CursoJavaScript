/**
 * 62. Exercício com lógica de programação - 03
 * 
 * Escreva uma função que recebe um númro e retorne o seguinte:
 * * Número é divisivel por 3 = Fizz
 * * Número é divisivel por 5 = Buzz
 * * Número é divisivel por 3 e 5 = FizzBuzz
 * * Número NÃO é divisivel por 3 e 5 = Retorna o próprio número
 * * Checar se o número é realmente um número = Retorna o próprio número
 * * Use a função com números de 0 a 100
 */

function fizzBuzz(x) {

    if (isNaN(x)) {
        return `${x} NÃO um número!`;
    } else
        if ((x % 3 === 0) && (x % 5 === 0)) {
            return `FizzBuzz: ${x} é divisivel por 3 e por 5`;
        } else
            if ((x % 3 === 0)) {
                return `Fizz: ${x} é divisivel por 3`;
            } else
                if ((x % 5 === 0)) {
                    return `Buzz: ${x} é divisivel por 5`;
                } else {
                    return `${x} NÃO é divisivel por 3 e/ou 5`;
                }
}

fizzBuzz('1');

let i = 0
do {
    console.log(fizzBuzz(i));
    i++
} while (i <= 100);


// Versão do professor:
function fizzBuzzProf(numero) {
    if (typeof numero !== 'number') return numero;
    if (numero % 3 === 0 && numero % 5 === 0) return 'FizzBuzz';
    if (numero % 3 === 0) return 'Fizz';
    if (numero % 5 === 0) return 'Buzz';
    return numero;
}
console.log('a', fizzBuzzProf('a'));

for (let i = 0; i <= 100; i++) {
    console.log(i, fizzBuzzProf(i));
}