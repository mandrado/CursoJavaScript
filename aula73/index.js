/**
 * 92. Métodos úteis para objetos
 * vamos aprender a como copiar um objeto para outros
 * eles são valores passados por referência 
 
 Object.values (exibe somente os valores das chaves dos objetos)
 Object.entries (exibe um array com as chaves e os valores)
 Object.assign(des, any) (para copiar um objeto)
 Object.getOwnPropertyDescriptor(o, 'prop') (retorna a descrição das propriedades do objeto)
 ... (spread)

 // Já vimos
 Object.keys (retorna as chaves)
 Object.freeze (congela o objeto)
 Object.defineProperties (define várias propriedades)
 Object.defineProperty (define uma propriedade)
*/

const { object } = require("joi");

// criar o objeto produto
const produto = {nome: 'Caneca', preco: 1.89};
// linkar outro objeto para o objeto produto
const outraCoisa = produto;
//produto.nome = 'Chopeira'
outraCoisa.nome = 'Lancheira';
// ambas as variáves apontam para o mesmo endereço de memória
console.log(produto);
console.log(outraCoisa);

// copiar o valor do objeto criando outro espaço de memória
// utilizando spread

const produtoCopia = {
    ...produto,
material: 'porcelana'};

// outra maneira:
const caneca = Object.assign({}, produto, {patrocinio: 'flamengo'});

const formaRuim = {nome: produto.nome, preco: produto.preco, material: 'vinil'};

produtoCopia.nome = 'Outro produto';
produtoCopia.preco = 2.5;
console.log(produto);
console.log(produtoCopia);
console.log(caneca);
console.log(formaRuim);
// obter as chaves do objeto:
console.log(Object.keys(formaRuim));
// se não quero que o objeto não pode ser alterado:
//Object.freeze(produto);
produto.nome = 'Outro nome';
console.log(produto);

console.log(Object.getOwnPropertyDescriptor(produto, 'nome'));
Object.defineProperty(produto, 'nome',{
    writable: false,
    configurable: false,
    value: 'Qualquer outra coisa'
});
produto.nome = 'Outra coisa';
//delete produto.preco;
console.log(produto);
console.log(Object.getOwnPropertyDescriptor(produto, 'nome'));

console.log(Object.values(produto));

console.log(Object.entries(produto));

console.log('----------------------------');
for (const iterator of Object.entries(produto)) {
    console.log(iterator);
}
console.log('----------------------------');
for (const iterator of Object.entries(produto)) {
    console.log(iterator[0], iterator[1]);
}
console.log('----------------------------');
for (const [chave, valor] of Object.entries(produto)) {
    console.log(`${chave}: ${valor}`);
}