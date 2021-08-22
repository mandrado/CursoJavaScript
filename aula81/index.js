/**
 * 103. Getters e Setters
 * parte 1
 */

// criando uma chave privada dentro do objeto:
const _velocidade = Symbol('velocidade');

class Carro{
    constructor(nome){
        this.nome =nome;
        //propriedade privada
        this[_velocidade] = 0;
    }
    set velocidade(valor){
        console.log('SETTER');
        if (typeof valor !== 'number') return;
        if(valor >= 100 || valor <= 0) return;
        this[_velocidade] = valor;
    }
    get velocidade(){
        console.log('GETTER');
        return this[_velocidade];

    }

    acelerar(){
        if(this[_velocidade] >= 100) return;
        this[_velocidade]++;
    }
    freiar(){
        if(this[_velocidade] <= 0) return;
        this[_velocidade]--;
    }
}

const c1 = new Carro('Fusca');
// for (let index = 0; index <= 200; index++) {
//     c1.acelerar();
//     console.log(index);
 
// }

// utilizando o SETTER para configurar a velocidade:
c1.velocidade = 50;

// utilizando o GETTER para exibir a velocidade:
console.log(c1.velocidade);