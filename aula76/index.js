/**
 * 95. Herança
 * 
 * Produto --> aumento, desconto
 * Camiseta = cor, caneca = material
 * 
 */

function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}

// metodo do produto feito via prototype
Produto.prototype.aumento = function (valor) {
    this.preco += valor;
};
Produto.prototype.desconto = function (valor) {
    this.preco -= valor;
};

function Camiseta(nome, preco, cor) {
    Produto.call(this, nome, preco);
    this.cor = cor;
}

function Caneca(nome, preco, material, estoque) {
    Produto.call(this, nome, preco);    
    this.material = material;
    
    //this.estoque = estoque;

    Object.defineProperty(this, 'estoque',{
        enumerable: true,
        configurable: false,
        get: function(){
            return estoque;
        },
        set: function(valor){
            // não deixar fazer nada se o valor não for um número:
            if (typeof valor !== 'number') return;
            estoque = valor;
        }
        
    });
}

Camiseta.prototype = Object.create(Produto.prototype);
Camiseta.prototype.constructor = Camiseta;

Camiseta.prototype.aumento = function (percentual) {
    this.preco = this.preco + (this.preco * (percentual / 100));
};

Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.constructor = Caneca;

Caneca.prototype.aumento = function (percentual) {
    this.preco = this.preco + (this.preco * (percentual / 100));
};


const produto = new Produto('Generico', 100)
const camiseta = new Camiseta('Regata', 7.5, 'preta');
const caneca = new Caneca('Marvel', 70, 'plastico', 5);
caneca.estoque = 100;

console.log(camiseta);
console.log(produto);
console.log(caneca);
console.log(caneca.estoque);

