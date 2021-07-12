/**
 * 86. Reduce - Reduzindo o array
 * Reduz o array em um único elemento
 */

// some todos os valores do array
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const total = numeros.reduce(function (acumulador, valor, indice, array) {
    console.log(acumulador, valor, indice);
    // acumulador = acumulador + valor;
    acumulador += valor;
    return acumulador
}, 0); // número zero é opcional, se colocar zero ele soma, se colocar lista [] ele concatena 
// devemos colocar o zero para garantir que o primeiro valor do acumulador seja zero e 
// não o primeiro valor do indice
console.log(total);

// retorne um array só com os números pares (filter)
const numerosPares = numeros.reduce(function (acumulador, valor, indice, array) {
    if (valor % 2 === 0) acumulador.push(valor); // faça isso com filter em vez de reduce.
    // if (valor % 8 === 0) acumulador.push(valor); // multiplo de 8
    // if (valor % 8 !== 0) acumulador.push(valor); // ímpares
    return acumulador;
}, []); // se colcoar lista ele vai criar uma lista para o acumulador
console.log(numerosPares);

// Retorne um array com o dobro dos valores (Map)
const numerosDobro = numeros.reduce(function (acumulador, valor) {
    acumulador.push(valor * 2); // faça isso com Map.
    return acumulador;
}, []); // colocar uma lista no final para que o acumulador seja uma lista.
console.log(numerosDobro);

/** 
 * Para cada elemento:
 * Retorne a pessoa mais velha
 * 
*/
const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Letícia', idade: 19 },
    { nome: 'Rosana', idade: 82 },
    { nome: 'Wallace', idade: 47 },
];

const maisVelha = pessoas.reduce((acumulador, valor) => {
    if (acumulador.idade > valor.idade) return acumulador;
    return valor;
});
console.log(maisVelha);