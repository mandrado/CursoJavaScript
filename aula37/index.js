/**
 * 56. For of - Estrutura de repetição
 */
// indice     0123456789...
const nome = 'Mandrado Santos';

// for classico iterando com o indice
// geralmetne com iteráveis (array ou strings)
for (let i = 0; i < nome.length; i++){
    console.log(nome[i]);
}

// iterando diretamente no indice
// for in retorna o indice ou  achave (strings, array ou objetos)
for (let i in nome){
    console.log(nome[i]);
}

//iterando diretamente no valor
// não pode ser utilzado com objetos
// for of retorna o valor em si (arrays ou strings)
for (let valor of nome) {
    console.log(valor);
}

//ForEach
const nomes = ['Mandrado', 'Fabiano', 'Laura', 'Marelise', 'Rodrigues'];

// podemos obter apenas o valor, o valor e o indice, ou 
// o valor o indice e o próprio array
nomes.forEach(function(valor, indice, array){
    console.log(valor, indice, array);
});

