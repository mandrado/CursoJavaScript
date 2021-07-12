/**
 * 81. Revisão do básico em Arrays
 */

//array é indexado 0           1        2       3
const nomes = ['Mandrado', 'Guedes', 'João', 'Zilete'];

// tamanho do array não confundir com indice
console.log(nomes.length);

// alerar o indice 2
nomes[2] = 'Nathalya';

// deletar um elemento sem alterar o indice
delete nomes[2];

//Agora ficamso com um idice vazio: <1 empty item>
console.log(nomes);

// Funciona para String, Objetos, Funções, Números
// criando array com construtores
// raramente utilizado
const nomes2 = new Array('Eduardo', 'Maria', 'Joana', 'Paulo', 'Erica', 'Ricardo');
console.log(nomes2);

// criar array com valor passado por referência
const novo = nomes2;
// tudo que for feito em nomes2 reflete em novo e 
// tudo que for feito em novo reflete em nomes2

//remover o último item do array
novo.pop();
console.log(nomes2);

//quando eu quero pegar o resto do array eu utilizo o rest operator ...

//copiando valores do array sem referência utilizando o operador spreed

const novo2 = [...novo]; // fazendo uma cópia
//o que for feito e novo2 não reflete em novo ou nomes2:
console.log(novo2);
console.log(novo);
let removidoFim = novo2.pop(); // remove o último item do array e joga para uma variável
console.log(novo2, removidoFim);
console.log(novo);

//shift remove o primeiro item do array e joga para uma variável 
//shift "desloca o indice"
let removidoInicio = novo2.shift();
console.log(removidoInicio, novo2);


//adicionar coisas no final do array 
nomes2.push('João');
console.log(nomes2);

//adicionar coisas no inico do array "desloca o indice"
nomes2.unshift('Mandrado');
console.log(nomes2);

// fatiar o array
// pegar do indice x até o indice y
// splice pega o indice inicial mas não pega o final, ele traz um antes.
// pagar os indices 1 e 2:
let fatiar = nomes2.slice(1, 3);
console.log(fatiar);

// fatiando de trás para frente.
// pegando todos menos o último
fatiar = nomes2.slice(0, -1);
console.log(fatiar);
// pegando todos menos o primeiro e o último
fatiar = nomes2.slice(1, -1);
console.log(fatiar);


// converter string em array com base no espaço
const nomeString = 'Mandrado Silva dos Santos';
const nomeArray = nomeString.split(' ');
console.log(nomeArray);
// além de se basear no espaço, podemos nos baser em qualquer caractere
const nomeString2 = 'Mandrado, Silva dos Santos';
const nomeArray2 = nomeString2.split(',');
console.log(nomeArray2);

// transformando array em string
// unir todos os valores com base no espaço
const nomeJoin = nomeArray.join(' ');
console.log(nomeJoin);
// unir todos os valores com base na virgula
const nomeJoin2 = nomeArray2.join(',');
console.log(nomeJoin2);






