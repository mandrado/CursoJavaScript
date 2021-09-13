import validator from "validator";

export default class Contato {
    constructor(formClass){
        this.form = document.querySelector(formClass);
    }
    init(){
        this.events();

    }
    events(){
        if(!this.form) return;
        this.form.addEventListener('submit', e =>{
            e.preventDefault();
            this.validate(e);
        })
    }
    validate(e){
        const el = e.target;
        const nomeInput = el.querySelector('input[name="nome"]');
        const emailInput = el.querySelector('input[name="email"]');
        const sobrenomeInput = el.querySelector('input[name="sobrenome"]');
        const telefoneInput = el.querySelector('input[name="telefone"]');
        let erro = false;
        
        if(validator.isEmpty(nomeInput.value, {ignore_whitespace:true}) || nomeInput.value.trim().length < 3) {
            alert("Campo nome é obrigatório! e precisa ser maior que 2 (dois) caracteres");
            erro = true;
        }

        if(!validator.isEmail(emailInput.value)){
            alert("Email inválido - contatos");
            erro = true;
        }

        if(!validator.isMobilePhone(telefoneInput.value.trim(), "pt-BR")){
            alert("Telefone inválido - contatos");
            erro = true;
        }


        if (!erro) el.submit();
    }
}