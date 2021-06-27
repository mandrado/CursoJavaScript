//32. Funções (Básico)
// criando a função
function saudacao(nome) {
    console.log(`Bom dia, ${nome}!`)
} // sem ponto e virgula no final

//chamando a função
saudacao('Mandrado');

// a função saudação não retorna valor
// retorna undefined
const variavel = saudacao('Mandrado')
console.log(variavel);

// para a função retornar alguma coisa / valor
// devemos acrescentar a palavra return 
function saudacaoRetorna(nome) {
 //   console.log(`Bom dia, ${nome}!`);
    return `Bom dia, ${nome}!`
}

const variavelRetorna = saudacaoRetorna('Mandrado')
console.log(variavelRetorna);

function soma(x, y) {
    const resultado = x + y;
    return resultado;
}

console.log(soma(2,6));

// criando função com valores padrão
function soma2(x = 1, y = 1) {
    const resultado = x + y;
    return resultado;
}
// chamando uma função que possui valores padrão
console.log(soma2());

// criando função anonima
const raiz =  function(n) {
    return n ** 0.5;
}; //neste caso precisa do ponto e virgula

// chamando a função anonima (tem o nome da variável que a recebeu)
console.log(raiz(9));

// maneira mais moderna de criar funções: arrow function
// forma tradicional:
const raiz2 = (n) => {
    return n ** 0.5;
};
// forma resumida
const raiz3 = (n) => n ** 0.5;
// forma resumida se for somente uma variável
const raiz4 = n => n ** 0.5;

//