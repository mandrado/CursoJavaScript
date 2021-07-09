/**
 * 70. Retorno da função
 * return retorna um valor
 */

function soma(a, b) {
    return a + b;
}

console.log(soma(5,2));

/* //função que não retorna um valor, apenas executa uma ação
document.addEventListener('click', function(){
    document.body.style.backgroundColor = 'red';
}); */

function criaPessoa(nome, sobrenome){
    return{nome, sobrenome};
}

const p1 = criaPessoa('Mandrado', 'Santos');
const p2 = {
    nome: 'Mandrado',
    sobrenome: 'Santos'
};

console.log(typeof p1, p1);
console.log(typeof p2, p2);


// função que retorna outra função dentro dela
function falaFrase(comeco ){
    function falaResto(resto){
        return comeco + ' ' + resto;
    }
    return falaResto;
}

const olaMundo = falaFrase('Olá');
console.log(olaMundo('Mundo!'));

const fala = falaFrase('Olá');
const resto = fala('mundo!');
console.log(resto);

// exemplo da utilizade da função acima

function criaMultiplicador(multiplicador) {
    // multiplicador esta neste escopo
    return function (n) {
        return n * multiplicador;
    };
}

const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
const quadriplica = criaMultiplicador(4);

console.log(duplica(2));
console.log(triplica(2));
console.log(quadriplica(2));
