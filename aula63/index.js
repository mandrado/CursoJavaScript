/**
 * 82. Aplicar Método Splice em Arrays
 */

//                0        1        2         3          4
//               -5       -4       -3        -2         -1
const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia'];

// nomes.splice(indice atual, qtd delete, elem2, elem3, ...);
// remover o último elemento (pop)
// função splice retorna um array com um ou mais elementos
// removendo o último elemento
const removidos = nomes.splice(4, 1);
console.log(nomes, removidos);

// começar do indice 3 e remover dois elementos
const removidos2 = nomes.splice(2, 2);
console.log(nomes, removidos2);

// usando Number.MAX_VALUE eu consigo remover todos os itens
// a contar o indice informado
console.log('     0        1        2        3           4');
console.log('    -6       -5       -4       -3          -2');
const nomes2 = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia'];
console.log(nomes2);
const removidos3 = nomes2.splice(-2, Number.MAX_VALUE);
console.log(nomes2, removidos3);

// adicionar elementos no indice desejado
// adicionar jorge na posição do elemento 2, sem remover
console.log('     0        1        2        3           4          5');
console.log('    -6       -5       -4       -3          -2         -1');

// Na posição 2, não remover ninguém e adicionar Jorge
const adicionados = nomes2.splice(2, 0, 'Jorge');
console.log(nomes2, adicionados);

// Na posição 2, remover o 'Jorge', adicionar o 'Luiz' no mesmo indice
const removerAdicionar = nomes2.splice(2, 1, 'Luiz');
console.log(nomes2, removerAdicionar);

// A partir da posição 2, remover 2 elementos, e incluir 
// 'Paulo" na posição 2
const removerAdicionar2 = nomes2.splice(2, 2, 'Paulo');
console.log(nomes2, removerAdicionar2);

// A partir da posição 1, remover 2 elementos ('João' e 'Paulo') e 
// adicionar 2 elementos ('Manuel' e 'Pedro')
const removerAdicionar3 = nomes2.splice(1, 2, 'Manuel', 'Pedro');
console.log(nomes2, removerAdicionar3);

// simular o pop()
// do último elmento remove 1
const removeFinal = nomes2.splice(-1, 1);
console.log(nomes2, removeFinal);

// simular o shift()
// do primeiro elmento remove 1
const removeInicio = nomes2.splice(0, 1);
console.log(nomes2, removeInicio);

// simular o push()
// adicionar 1 ou mais elemento no final do array
const adicionarFinal = nomes2.splice(nomes2.length, 0, 'Mandrado', 'Guedes');
console.log(nomes2, adicionarFinal);

// simular o unshift()
// adicionar 1 ou mais elemento no inicio do array
const adicionarInicio = nomes2.splice(0, 0, 'Efigenia', 'Nathalya');
console.log(nomes2, adicionarInicio);
