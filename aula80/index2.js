/**
 * 102. Criando classes
 * é a mesma coisa da função contrutora
 * fazem a mesma coisa
 *  
 */

class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
    falar(){
        console.log(`${this.nome} esta falando.`);
    }
    comer(){
        console.log(`${this.nome} esta comendo.`);
    }
    beber(){
        console.log(`${this.nome} esta bebendo.`);
    }
}
// instanciar é criar um objeto a partir da class
const p1 = new Pessoa('Mandrado','Santos');
const p2 = new Pessoa('Zilete','Santos');
const p3 = new Pessoa('Nathalya','Santos');
console.log(p1);
console.log(p2);
console.log(p3);

// comparação com a função construtora
function Pessoa2(nome,sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
};

Pessoa2.prototype.falar = function(){
    console.log(`${this.nome} esta falando.`);
};
Pessoa2.prototype.comer = function(){
    console.log(`${this.nome} esta comendo.`);
};
Pessoa2.prototype.beber = function(){
    console.log(`${this.nome} esta bebendo.`);;
};

const p4 = new Pessoa2('Mandrado','Santos');
const p5 = new Pessoa2('Zilete','Santos');
const p6 = new Pessoa2('Nathalya','Santos');
console.log(p4);
console.log(p5);
console.log(p6);