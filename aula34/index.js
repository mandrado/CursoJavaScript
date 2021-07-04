//52. For - Clássico - Estrutura de repetição

// repetição de 1 a 6
console.log('Linha 0');
console.log('Linha 1');
console.log('Linha 2');
console.log('Linha 3');
console.log('Linha 4');
console.log('Linha 5');

// for tem tres partes (variável de controle; condição; incremento)
//       1º        2º   3º 
for (let i = 0; i <= 50; i++) {
    console.log(`Linha ${i}`);
}

// incrementando de 10 em 1-

for (let i = 0; i <= 50; i += 10) {
    console.log(`Linha ${i}`);
}

// decrementando

for (let i = 100; i >= 50; i--) {
    console.log(`Linha ${i}`);
}

// qual número é par:
for (let i = 0; i <= 10; i++){
    const par = i % 2 === 0;
    console.log(`${i} é par: ${par}`);
}

// qual número é par (mudando o valor da variável):
for (let i = 0; i <= 10; i++){
    const par = i % 2 === 0 ? 'par': 'impar';
    console.log(`${i} é par: ${par}`);
}

// percorrer uma lista(array) de frutas
const frutas = [ 'Maça', 'Pêra', 'Uva', 'Banana' ];

// para parar o array não pode ser menor ou igual, deve ser apenas menor que
// pois senão o resultado o último item será 'undefined'
for (let i = 0; i < frutas.length; i++){
    console.log(frutas[i]);
}
