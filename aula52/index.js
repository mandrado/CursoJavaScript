/**
 * 71. Escopo léxico
 */

const nome = 'Mandrado';

function falaNome() {
    //usando uma variável declarada no vizinho mais próximo
    console.log(nome);
}
falaNome();

function usaFalaNome() {
    // mesmo que eu declare uma variável como mesmo nome
    // antes de chamar a função, ela não será afetada
    const nome = 'Maria';
    falaNome();
}
usaFalaNome();