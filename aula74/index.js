/**
 * 93. Prototypes
  
Javascript é baseado em protótipos para passar propriedades e métodos de um 
objeto para outro.

Definição de protótipo:
Protótipo é o termo usado para se referir ao que foi criado pela primeira 
vez, servindo de modelo ou molde para futuras produções.

Todos os objetos tem uma referencia interna para um prótotipo (__proto__) 
que vem da propriedade prototype da função construtora que foi usada pra criá-lo. 
Quando tentamos acessar um membro de um objeto, primeiro o motor do JS vai tentar 
encontrar este membro no proprio objeto e depois a cadeia de prótótipos é usada 
até o topo (null) até encontrar (ou não) tal membro.

 */

//Construtora -> molde (classe)

function Pessoa(nome,sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    // this.nomeCompleto = ()=> this.nome + ' - ORIGINAL - ' + this.sobrenome;
}

// Pessoa.prototype === pessoa1.__proto__
// com isso aqui, conseguimos melhorar muito a performance do sistema
Pessoa.prototype.nomeCompleto = function(){
    return this.nome +' '+ this.sobrenome;
}

//instância (criar novos objetos com base no molde)
const pessoa1 = new Pessoa('Mandrado', 'Santos');//<-- Pessoa = função contrutora
const pessoa2 = new Pessoa('Maria Efigenia', 'Mascarenhas');//<-- Pessoa = função contrutora
const data = new Date(); // <-- Date = Função contrutora

console.dir(pessoa1);
console.dir(pessoa2);
console.dir(data);