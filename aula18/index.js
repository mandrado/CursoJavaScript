//33. Objetos (Básico)
const array = [1,2,3];
array.push(4);
array[0] = 'Mandrado';
console.log(array);

// criando um objeto {}

const pessoa1 = {
    nome: 'Luiz',
    Sobrenome: 'Miranda',
    idade: 25
};

console.log(pessoa1.nome);
console.log(pessoa1.Sobrenome);
console.log(pessoa1.idade);

// função possui parametros 
// essa função cria objetos
function criaPessoa(nome, sobrenome, idade) {
    return {
        nome: nome,
        sobrenome: sobrenome,
        idade: idade
    };
}
// pode ser feito como acima, ou como as variáveis são iguais aos
// nomes, podemos fazer assim:
function criaPessoa2(nome, sobrenome, idade) {
    return { nome, sobrenome, idade };
}

// quando chamamos uma função, passamos argumentos para os paramentros
const pessoa2 = criaPessoa('Mandrado','Santos', 45)
const pessoa3 = criaPessoa2('Efigenia','Santos', 43)
const pessoa4 = criaPessoa('Nathalya','Santos', 22)
const pessoa5 = criaPessoa('Dilma','Santos', 65)

console.log(pessoa2.nome);
console.log(pessoa3.nome);
console.log(pessoa4.nome);

// criar uma função com um metodo
const pessoa = {
    nome: 'Mandrado',
    sobrenome: 'Santos',
    idade: 45,

    //método (igua função, mas sem a palavra function)
    
    fala() {
        //this significa deste objeto
        console.log(`${this.nome} ${this.sobrenome}, tem ${this.idade} anos e está dizendo: Olá Mundo:`);
    },

    incrementaIdade(){
        //aumenta a idade do individuo deste objeto
        ++this.idade;
    }
};

pessoa.fala();
pessoa.incrementaIdade();
pessoa.fala();