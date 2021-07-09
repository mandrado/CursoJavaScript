/**
 * 68. Maneiras de declarar funções
 * Funcion Hoisting: 
 * Eleva as declarações de funções e variáveis para o topo do arquivo java script
 * 
 * Funções são objetos de primeira classe (First-class objects)
 * 
 */

//function expression
const souUmDado = function () {
    console.log('Sou um dado.');
};

function executaFuncao(funcao) {
    funcao();
};

function falaOi() {
    console.log('Oie');
};


falaOi();
souUmDado();
executaFuncao(souUmDado);

/**
 * Arrow funciton
 */

const funcaoArrow = () => {
    console.log('Sou uma arrow function');
};

funcaoArrow();

// dentro de um objeto

const obj = {
    falar: function(){
        console.log('Estou falando ...');
    }
};

obj.falar();
