//30. Arrays (Básico)
// array são indexados pelo elemento
const alunos = ['Luiz', 'Maria', 'João', 'José'];

// altera ou adiciona um elemento
alunos[0] = 'Eduardo';
alunos[4] = 'Nathalya';
alunos[5] = 'Guedes';

// exbir tamanho do array
console.log(alunos.length);

//Adicionar elementos no array
alunos[alunos.length] = 'Efigênia';
alunos[alunos.length] = 'Dilma';

// colocar um elemento no final no array
alunos.push('Mandrado');

//adicionar no inicio do array, empurrando os demais
alunos.unshift('Luiza');

//remover elementos do final array
const removidofim = alunos.pop();
console.log('removido do fim: ' +removidofim);

//remover elementos do inicio do array
const removidoinicio = alunos.shift();
console.log('removido do inicio: ' +removidoinicio);

//deletar um elemento do array, deixando o espaço vazio <1 empty item>
// mas quando acessado via indice, retorna (undefined)
delete alunos[1];
console.log(alunos);

// acessar um indice que não exite retorna: undefined
console.log(alunos[50]);

// fatiar os elementos trazendo apenas alguns
console.log('Elementos de 2 até 4: '+ alunos.slice(2,5));
// outra forma de fatiar eliminando do final para o inicio
console.log('Elementos de 0 até 3: '+ alunos.slice(0,-4));


for (let index = 0; index < alunos.length; index++) {
    //const element = array[index];
    console.log( `array posição ${index} conteúdo: ${alunos[index]}`);
}

//array é um objeto indexado
console.log(typeof alunos);

//perguntando se uma variável é um array
console.log(alunos instanceof Array);
