/**
 * 104. Herança com classes
 * 
 */

class DispositivoEletronico {
    constructor(nome) {
        this.nome = nome;
        this.ligado = false;
    }
    ligar(){
        if(this.ligado){
            console.log(`${this.nome} já está ligado.`);
            return;
        } 
        this.ligado = true;
    }
    desligar(){
        if(!this.ligado){
            console.log(`${this.nome} já está desligado.`);
            return;
        } 
        this.ligado = false;
    }
}

const d1 = new DispositivoEletronico('Smartphone');
d1.ligar();
d1.ligar();
d1.desligar();
d1.desligar();
console.log(d1);

//Extender a classe para uma classe mais especifica que herda de Dispositivo Eletronico
class Smartphone extends DispositivoEletronico{
    constructor(nome, cor, modelo){
        super(nome);
        this.cor = cor;
        this.modelo =modelo;
    }
}

const sp = new Smartphone('iPhone', 'cinza', '5s');
sp.ligar();
console.log(sp);

class Tablet extends DispositivoEletronico{
    constructor(nome, temWifi){
        super(nome);
        this.temWifi = true;
    }
    // sobrescrevendo o método ligar da classe DispositivoEletronico
    ligar(){
        console.log('Olha, vc alterou o método ligar.');
    }
    // novo método exclusivo do Tablet
    falaOi(){
        console.log('Oi');
    }
}
const t1 = new Tablet('iPad');
console.log(t1);
t1.ligar();
t1.falaOi()
