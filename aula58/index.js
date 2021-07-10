/**
 * 77. Funções construtoras (constructor functions)
 * função retorna objetos.
 * Em função construtora precisamos iniciar seu nome 
 * com letra maiuscula -> Pessoa (new).
 */

function Pessoa(nome, sobrenome) {
    // molde para objeto pessoa
    // funções contrutoras devem começar com letra maíuscula
    // atributos ou métodos privados
    const id = 123456;
    const metodoInterno = function () { }

    // atributos ou métodos públicos
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = function () {
        console.log(this.nome + ': Sou um método!');
    };

}

// para usar a função construtora, precisamos chamar ela com
// new que cria um objeto vazio e faz o this apontar para ele
const p1 = new Pessoa('Mandrado', 'Santos');
const p2 = new Pessoa('Maria', 'Mascarenhas');
p2.metodo();