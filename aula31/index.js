// 49. Mais diferenças entre var e let/const

/**
 * Let tem escopo de Bloco {... bloco}.
 * NÃO PODE ser redeclarada dentro de um mesmo bloco
 * 
 * let não é elevado para o inicio do arquivo em tempo de execução
 * com isso, se ela for declarada após ser utilizada o erro será:
 * <nome da variável> is not defined
 * 
 */
let nome = 'Mandrado'; // criando dentro do escopo de bloco global

const verdadeira = true;

console.log('LET escopo global: ', nome);

if (verdadeira) {
    let nome = 'Guedes'; // criando dentro do bloco
    console.log('LET escopo bloco 1: ', nome);
    
    if (verdadeira) { // bloco alinhado
        let nome = 'Zilete';
        console.log('LET escopo subbloco 1.1: ', nome);
    }
    
}

/**
 * var só tem escopo de função , isto é,
 * var dentro de uma função é protegida.
 * permite inclusive redeclarar variáveis
 * ja declaradas com LET.
 * Mas se não estiver dentro de uma função, ela
 * permite ser redeclarada em qualque bloco {} de código
 * impactando todo o código lido
 * 
 * var é elevada para o inicio do arquivo em tempo de execução
 * com isso, se ela for declarada após ser utilizada o valor será:
 * undefined
 */

var nome2 = 'Mandrado'; // POE ser redeclarada

console.log('VAR escopo global declarado: ', nome2);

var nome2 = 'Guedes'; // POE ser redeclarada

console.log('VAR escopo global redeclarada: ', nome2);

if (verdadeira) {
    var nome2 = 'Guedes'; // criando dentro do bloco
    console.log('VAR escopo bloco 1 redeclarada: ', nome2);
    
    if (verdadeira) { // bloco alinhado
        var nome2 = 'Zilete';
        console.log('VAR escopo subbloco 1.1 redeclarada: ', nome2);
    }
    
}

function falaOi() {
    var nome = 'Nathalya';
    console.log('VAR nome sendo declarada dentro da função: ', nome);
}

falaOi();