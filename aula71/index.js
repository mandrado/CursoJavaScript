/**
 * 90. Object.defineProperty() e Object.defineProperties()
 * travar (congelar) apenas partes de um objeto.
 */

function Produto(nome,preco,estoque) {
 //   this.nome = nome; // variável pública
 //   this.preco = preco; // variáve pública
 //   this.estoque = estoque; // variáve pública
 // definindo propriedades para uma chave:
    Object.defineProperty(this, 'estoque', {
        enumerable: true, // mostra a chave true or false (com for ou Object.keys(p1))
        value: estoque, // valor da chave
        writable: false,  // pode alterar o valor true or false
        configurable: false // pode reconfigurar / deletar a chave true or false
    });

// definindo propriedades para várias chaves
    Object.defineProperties(this, {
        nome: {
            enumerable: true, // mostra a chave true or false (com for ou Object.keys(p1))
            value: nome, // valor da chave
            writable: true,  // pode alterar o valor true or false
            configurable: false // pode reconfigurar / deletar a chave true or false
        },
        preco: {
            enumerable: true, // mostra a chave true or false (com for ou Object.keys(p1))
            value: preco, // valor da chave
            writable: true,  // pode alterar o valor true or false
            configurable: false // pode reconfigurar / deletar a chave true or false
        }
    });

}

const p1 = new Produto('Camiseta', 20, 3);
p1.estoque = 5000;
delete p1.estoque;
console.log(p1);

console.log(Object.keys(p1));