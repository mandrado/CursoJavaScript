/**
 * 85. Função Map - Mapeando o array
 * altera valores do array
 * mantem o tamanho do array
 * 
 */

// dobrar os valores do array
 const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
 const numerosEx = numeros.map( function (valor, indice, array) {
    console.log(valor, indice, array);
    return `Mandrado -> ${valor}`
 } );
 console.log(numerosEx);

 // função reduzida arrow function
 const numerosEmDobro = numeros.map( valor => valor * 2);
 console.log(numerosEmDobro);

 // exibir o indice do array
 const numerosIndice = numeros.map( (valor, indice) => indice);
 console.log(numerosIndice);

/** 
 * Para cada elemento:
 * Retorne apenas uma string com o nome da pessoa
 * Remova apenas a chave "nome" do objeto
 * Adicione uma chave id em cada objeto
 * 
*/
 const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Letícia', idade: 19 },
    { nome: 'Rosana', idade: 32 },
    { nome: 'Wallace', idade: 47 },
];

// Retorne apenas uma string com o nome da pessoa
const nome = pessoas.map( obj => obj.nome);
console.log(nome);

// Remova apenas a chave "nome" do objeto
const idades = pessoas.map(function (obj) {
    // opção 1 deletar a chave nome :  delete obj.nome;
    // opção 2 criar um novo objeto:
        return {idade: obj.idade};
});
console.log(idades);

    // opção 3 isolar as chaves entre parenteses
const idades2 = pessoas.map( obj => ({idade: obj.idade}));
console.log(idades2);

// Adicione uma chave id em cada objeto
const addChave = pessoas.map((obj, indice) => {
    obj.id = (indice + 1); // para não iniciar em 0
    return obj;
});
console.log(addChave);

// perceba que o objeto original foi alterado
console.log(pessoas);

// para não alterar o objeto preciamos copiar o conteúdo para um novo objeto
const pessoas2 = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Letícia', idade: 19 },
    { nome: 'Rosana', idade: 32 },
    { nome: 'Wallace', idade: 47 },
];

const addChave2 = pessoas2.map((obj, indice) => {
    const newObj = {...obj};
    newObj.id = indice;
    return newObj;
});
console.log('Objeto Pessoa2 original:\n', pessoas2);
console.log('Objeto Pessoa2 alterado:\n', addChave2);