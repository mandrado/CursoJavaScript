/**
 * 61. Exercício com lógica de programação - 02
 * 
 * Escreva uma função chamada ePaisagem que
 * recebe dois argumentos, largura e altura
 * de uma imagem (number). Retorne true se a 
 * imagem estiver no modo paisagem.
 */

// Forma 0
function ePaisagem0(largura, altura){
    return largura > altura;
}

// Forma 1 arrow function 
const ePaisagem = (x,y) => x > y ? true : false

// Forma 2 arrow function 
const ePaisagem2 = (x,y) => x > y;

console.log(ePaisagem2(10,40));