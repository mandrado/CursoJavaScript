/**
 * 124. Módulos (1)
 * Formas de exportação de módulos:
 */

const nome = 'Mandrado';
const sobrenome = 'Santos';

const falaNome = () => nome  + " " + sobrenome;

/* 
module.exports.nome = nome;
module.exports.sobrenome = sobrenome;
module.exports.falaNome = falaNome;

console.log(module); */

exports.NOME = nome;
exports.sobrenome = sobrenome;
exports.falaNome = falaNome;

this.qualquerCoisa = 'O que eu quiser exportar.';

console.log(exports);

class Pessoa {
    constructor(nome){
        this.nome = nome;
    }
}

exports.Pessoa = Pessoa;

// sobrescrevendo o module.exports

module.exports= {
    nome, sobrenome, Pessoa
};