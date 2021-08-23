/**
 * 105. Métodos de instância e estáticos
 * 
 * São metodos que se podem utilizar da classe sem precisar instanciar uma classe.
 * 
 */

class ControleRemoto{
    constructor(tv){
        this.tv = tv;
        this.volume = 0;

    }
    //método de instância
    aumentarVolume(){
        this.volume += 2;
    }
    //método de instância
    diminuirVolume(){
        this.volume -+ 2;
    }

    //método estático
    static trocaPilha(){
        console.log('OK, vou trocar a pilha');
    }

    static soma(x,y){
        return x + y;
    }
}

const controle1 = new ControleRemoto('LG');

//método de instância só podem ser acessados quando a classe é instanciada
controle1.aumentarVolume();
controle1.aumentarVolume();
controle1.aumentarVolume();
console.log(controle1);

//método estático só pode sr acessado diretamente pela classe
ControleRemoto.trocaPilha();
console.log(ControleRemoto.soma(2,5));