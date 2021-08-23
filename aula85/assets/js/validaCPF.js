/**
 * 106. Usando classes (Validando CPF)
 * 705.484.450.52
 * 070.987.720-03
 */

class ValidaCPF {
    constructor(cpfEnviado){
        Object.defineProperty(this, 'cpfLimpo', {
            writable: false,
            enumerable: true,
            configurable: false,
            value: cpfEnviado.replace(/\D+/g,'')
        });
    }

    eSequencia(){
        //return this.cpfLimpo.charAt(0).repeat(this.cpfLimpo.length);
        return this.cpfLimpo.charAt(0).repeat(11) === this.cpfLimpo;
    }

    geraNovoCpf(){
        const cpfSemDigitos = this.cpfLimpo.slice(0, -2);
        // quando transformo um método em estático
        // para chamar ele eu não poosso mais utilizar this, mas sim o nome da classe        
        // const digito1 = this.geraDigito(cpfSemDigitos);
        const digito1 = ValidaCPF.geraDigito(cpfSemDigitos);
        const digito2 = ValidaCPF.geraDigito(cpfSemDigitos + digito1);
        this.novoCPF = cpfSemDigitos + digito1 + digito2;

    }
    // quando eu não utilixo a palavra this dentro do método
    // isso quer dizer que ele pode se tornar estático
    static geraDigito(cpfSemDigitos){
        let total = 0
        let reverso = cpfSemDigitos.length + 1;

        for (const stringNumero of cpfSemDigitos) {
            // console.log(stringNumero, reverso);
            total += Number(stringNumero) * reverso;
            reverso --;
        }
        // console.log(total);
        const digito = 11 - (total % 11);
        // console.log(digito);
        return digito < 9 ? String(digito) : '0';
    }

    valida(){
        if(!this.cpfLimpo) return false;
        if(typeof this.cpfLimpo !== 'string') return false;
        if(this.cpfLimpo.length !== 11) return false;
        if(this.eSequencia()) return false;
        this.geraNovoCpf();
        // console.log(this.novoCPF);
        
        return this.novoCPF === this.cpfLimpo;
    }
}

// const validacpf = new ValidaCPF('705.484.450.52');
// //const validacpf = new ValidaCPF('999.999.999-99');
// console.log(validacpf.valida());

// if (validacpf.valida()){
//     console.log('CPF válido');
// }else{
//     console.log('CPF inválido');
// }
