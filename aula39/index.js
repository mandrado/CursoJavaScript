//58. While e Do While - Estrutura de repetição

let i = 0;
while (i <= 10) {
    console.log(i);
    /**
     * se esquecer de colocar a variável
     * de controle incrementando 
     * loop será infinito.
     */
    i++;
}

const nome = 'Mandrado Silva dos Santos'

i = 0;
while (i < nome.length) {
    console.log(nome[i]);
    i++;   
}

//função para criar número aleatório
function random(min, max) {
    const r = Math.random()*(max - min) + min;
    return Math.floor(r);
}


const min = 1;
const max = 50;

let rand = random(min,max);

console.log(rand);
let contador = 1;

while (rand !== 10) {
    rand = random(min,max);
    console.log(`passo ${contador}: valor randomico = ${rand}`);
    contador++;

}

//diferença entre While e Do While
//enquanto a condição não for verdadeira ele continua exedutando
//Do While faça primeiro e depois verifica se a condição é verdadeira

console.log(`######### ${rand}`);

do {
    rand = random(min, max);
    console.log(rand);
} while (rand == 10);
