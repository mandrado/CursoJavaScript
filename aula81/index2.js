/**
 * 103. Getters e Setters
 * parte 2
 * 
 */

class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
    get nomeCompleto() {
        return this.nome + ' ' + this.sobrenome;
    }
    set nomeCompleto(valor){
        valor = valor.split(' ');
        this.nome = valor.shift();
        this.sobrenome = valor.join(' ');
    }
}

const p1 = new Pessoa('Mandrado', 'Santos');
p1.nomeCompleto = 'Mandrado Silva'
console.log(p1.nomeCompleto);