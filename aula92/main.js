/**
 * 115. Babel e "can i use..."
 */

const nome = 'Mandrado';
const obj = {nome};
const novoObj = {...obj};
console.log(novoObj);

class Pessoa{
    constructor(nome, sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
}