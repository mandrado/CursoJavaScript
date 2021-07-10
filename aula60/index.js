/**
 * 79. Funções recursivas
 * 
 */
function recursiva(max) {
    // exibe cada valor de Max antes do incremento
    console.log(max);
    // se o número fo maior ou igual a 10
    // para a função recursiva
    if (max >= 100) return;
    // essa função incrementa o valor em max a cada
    // chamada
    max++;
    // aqui está a recursividade:
    // uma função que chama ela mesma:
    recursiva(max)
}

recursiva(0);