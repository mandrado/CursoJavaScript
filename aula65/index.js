/**
 * 84. Filter - Filtrando o array
 * 
 * Filter sempre retorna um array com a mesma quantidade de elementos
 * ou menos que o arrar original
 * 
 */

const { array } = require("joi");

// Retorne os numeros maiores que 10
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// para filtrar um array criamos um novo array e vamos receber os valores filtrados

//criar uma função callback para verificar os valores

// 2 em vez de fazer tudo isso, podemo fazer
//function calbackFilter(valor, indice, array) {
//1. evite fazer como abaixo
/*     if (valor > 10){
    return true;
} else {
    return false;
} */
//1. faça assim
// return valor > 10;
//}
//3 faça assim
/* function calbackFilter(valor) {
    return valor > 10
} */


// Criar o novo array para receber os valores > 10
// 4 podemos criar a função anonima dentro do próprio filter

/* const numerosFiltrados = numeros.filter(function(valor) { 
    return valor > 10
});  */

// bem como pode fazer com uma arrow funcion
const numerosFiltrados = numeros.filter(valor => valor > 10);
console.log(numerosFiltrados);


// outra forma de fazer com arrow function
const numerosFiltrados2 = numeros.filter((valor, indice, array) => {
    console.log(valor, indice, array);
    return valor > 10;
}
);
// ###########################################################################

const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Letícia', idade: 19 },
    { nome: 'Rosana', idade: 32 },
    { nome: 'Wallace', idade: 47 },
];
// Retorne as pessoas que tem o nome com 5 letras ou mais
console.log('Retorne as pessoas que tem o nome com 5 letras ou mais')
const pessoasFiltroLetras = pessoas.filter(function (obj) {
    return obj.nome.length >= 5;
});
console.log(pessoasFiltroLetras);

// forma reduzida com arrow funcion
const pessoasFiltroLetras2 = pessoas.filter(obj => obj.nome.length >= 5);
console.log(pessoasFiltroLetras2);

// Retorne as pessoas com mais de 50 anos
console.log('etorne as pessoas com mais de 50 anos');
const pessoasMaior50 = pessoas.filter(function (obj) {
    return obj.idade > 50;
});
console.log(pessoasMaior50);

// forma reduzida com arrow funcion
const pessoasMaior502 = pessoas.filter(obj => obj.idade > 50);
console.log(pessoasMaior502);

// Retorne as pessoas cujo nome termina com a
console.log('Retorne as pessoas cujo nome termina com a');
const pessoaTerminaA = pessoas.filter(function (obj) {
    return obj.nome.toLowerCase().endsWith('a');
});
console.log(pessoaTerminaA);
// forma reduzida com arrow funcion
const pessoaTerminaA2 = pessoas.filter(obj => obj.nome.toLowerCase().endsWith('a'));
console.log(pessoaTerminaA2);