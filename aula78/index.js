/**
 * 99. Polimorfismo
 * 
 * Caracterizado por fazer um método se comportar de forma diferente 
 * em classes filhas de um mesmo pai
 * 
 * Polimorfismo de sobreescrita
 *  
 */

//Super classe = função construtora
function Conta(agencia, conta, saldo) {
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;
}

// Metodos
Conta.prototype.sacar = function (valor) {
    if (this.saldo < valor) {
        console.log(`Saldo insuficiente: R$ ${this.saldo}`);
        return;
    }
    this.saldo -= valor;
    this.verSaldo();
};

Conta.prototype.depositar = function (valor) {
    this.saldo += valor;
    this.verSaldo();
};

Conta.prototype.verSaldo = function () {
    console.log(`Agencia: ${this.agencia} / Conta: ${this.conta} \nSaldo: R$ ${this.saldo.toFixed(2)}`);
};

console.log('\nConta SuperClasse:');
const conta = new Conta(123, 123456, 1000);
conta.depositar(30);
conta.sacar(025);

// agora vamos especializar essa super classe criando 
// Conta Corrente e uma Conta Poupança

// Conta Corrente
function ContaCorrente(agencia, conta, saldo, limite) {
    Conta.call(this, agencia, conta, saldo);
    this.limite = limite;
}

ContaCorrente.prototype = Object.create(Conta.prototype);
ContaCorrente.prototype.constructor = ContaCorrente;

ContaCorrente.prototype.sacar = function (valor) {
    if ((this.saldo + this.limite) < valor) {
        console.log(`Saldo insuficiente: R$ ${this.saldo}`);
        return;
    }
    this.saldo -= valor;
    this.verSaldo();
};

// Conta Poupanca
function ContaPoupanca(agencia, conta, saldo) {
    Conta.call(this, agencia, conta, saldo);
}

ContaPoupanca.prototype = Object.create(Conta.prototype);
ContaPoupanca.prototype.constructor = ContaPoupanca;

ContaPoupanca.prototype.sacar = function (valor) {
    if ((this.saldo + this.limite) < valor) {
        console.log(`Saldo insuficiente: R$ ${this.saldo}`);
        return;
    }
    this.saldo -= valor;
    this.verSaldo();
};

console.log('\nConta Poupanca:');
const cp = new ContaPoupanca(123, 123456, 0);
cp.depositar(10);
cp.sacar(20);

console.log('\nConta Corrente:');
const cc = new ContaCorrente(123, 123456, 0, 100);
cc.depositar(10);
cc.sacar(120);


