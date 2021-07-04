/**
 * 55. For in - Estrutura de repetição
 * 
 * for in --> lê os indices ou chaves do objeto
 */

const frutas = ['PÊra', 'Mação', 'Uva']; // vetor ou array de uma dimensão

for (let indice in frutas){
    console.log(indice);
}

const pessoa = {
    nome: 'mandrado',
    sobrenome: 'Santos',
    indade: 45
};

for (let chave in pessoa){
    console.log(chave);
}

for (let chave in pessoa){
    console.log(chave,':', pessoa[chave]);
}