/**
 * 94. Manipulando Prototypes
 * 
 */

// new Object --> tdoas as funções contrutora tem um Object.prototype
const objA = {
    chaveA: 'A'
    // __proto__ : Object.prototype
};
const objB = {
    chaveB: 'B'
    // __proto__ : ObjA
};

const objC = new Object();
objC.chaveC = 'C';

// configurar o prototype do objeto B, apontado para o Objeto A
Object.setPrototypeOf(objB, objA);
Object.setPrototypeOf(objC, objB);
console.log(objC.chaveB);

function Produto(nome,preco) {
    this.nome = nome;
    this.preco = preco;
}
// melhor colocar os métodos fora das funções construtoras para melhora 
// a performance
Produto.prototype.desconto = function(percentual){
    this.preco = this.preco - (this.preco * (percentual / 100));
}
Produto.prototype.acrescimo = function(percentual){
    this.preco = this.preco + (this.preco * (percentual / 100));
}

const p1 = new Produto('camiseta', 50);
p1.desconto(50);
console.log(p1);

const p2 = {
    nome: 'Caneca',
    preco: 15
};

Object.setPrototypeOf(p2, Produto.prototype);

p2.acrescimo(10);
console.log(p2);

const p3 = Object.create(Produto.prototype);
p3.preco = 113
p3.acrescimo(10);
console.log(p3);

const p4 = Object.create(Produto.prototype, {
    tamanho: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 42
    },
    cor: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 'Vermelho'
    },
    preco: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 45
    }
});

p4.acrescimo(20);

console.log(p4);

