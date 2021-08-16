/**
 * 91. Getters e Setters
 * Object.defineProperty() --> Getters e Setters
 * Getters -> obter o valor
 * Setters -> configurar e validar o valor
 */

 function Produto(nome,preco,estoque) {
    this.nome = nome; // variável pública
    this.preco = preco; // variáve pública

    let estoquePrivado = estoque;
    
    // definindo propriedades para uma chave:
    Object.defineProperty(this, 'estoque', {
        enumerable: true, // mostra a chave true or false (com for ou Object.keys(p1))
        configurable: false, // pode reconfigurar / deletar a chave true or false
        get: function(){
            return estoquePrivado;
        },
        set: function(valor){
            // if (typeof valor !== 'number') {
            //     console.log('Valor inválido');
            //     return;
            // }
            if (typeof valor !== 'number') {
                throw new TypeError(`Valor inválido para a variável estoquePrivado`)
            }
            estoquePrivado = valor;   
        }
       });
      
   }

   function criaProduto(nome) {
       return{
           get nome(){
               return nome;
           },
           set nome(valor){
               valor = valor.replace('coisa.', '');
               nome = valor;
           }
       };
   }
   
//    const p1 = new Produto('Camiseta', 20, 3);
//    console.log(p1);
//    p1.estoque = 500
//    console.log(p1.estoque);

const p2 = criaProduto('Camiseta');
p2.nome = 'Qualquer coisa.';
console.log(p2.nome);
