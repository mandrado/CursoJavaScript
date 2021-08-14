// 89. Revisando Objetos

const pessoa = {
    //corpo do objeto formado por um par de chaves e valores
    nome: 'Luiz',
    sobrenome: 'Otávio',
    idade: 30
};
console.log(pessoa.nome);
console.log(pessoa.sobrenome);
// podemos fazer igual um array
console.log(pessoa['nome']);
console.log(pessoa['sobrenome']);
// Esta forma permite acessar através de uma variável
const chave = 'nome';
console.log(pessoa[chave]);
console.log(pessoa['sobrenome']);

// outra forma de criar um objeto com new
const pessoa1 = new Object();
pessoa1.nome = 'Mandrado';
pessoa1.sobrenome = 'Santos';

console.log(pessoa1.nome);

// apagar a chave uma chave de um objeto
delete pessoa1.nome;
console.log(pessoa1);

// objetos podem conter métodos (funções)

pessoa.falarNome = function () {
    console.log(`${this.nome} está falando seu nome`);
}

pessoa.falarNome();

pessoa.getDataNascimento = function(){
    console.log(`${this.nome} tem ${this.idade} anos`);
}
pessoa.getDataNascimento();

pessoa.getAnoNascimento = function() {
    const dataAtual = new Date();
    return dataAtual.getFullYear() - this.idade;
}
console.log(pessoa.getAnoNascimento());

// ver as chaves do objeto
for (let chave in pessoa){
    console.log(chave);
}
// ver os valores das chaves do objeto
for (let chave in pessoa){
    console.log(pessoa[chave]);
}


/**
 * criar moldes de objetos
 * Factory functions
 * Constructor functions
 * Classes
 */

// Factory functions
function criaPessoa(nome, sobrenome) {
    return{
        nome,
        sobrenome,
        nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`
        }
    };
}

const p1 = criaPessoa('Luiz', 'Otávio');
console.log(p1.nomeCompleto());

//Constructor functions
function PessoaCF(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
    // travar o objeto dentro do construtor
    Object.freeze(this);
}
const p2 = new PessoaCF('Luiz', 'Miranda');
console.log(p2);

//travar o objeto para não ser alterado
Object.freeze(p2);
p2.nome = 'Outra coisa' // objeto não será alterado.
console.log(p2);