
import validator from "validator";

export default class Login {
    constructor(formClass){
        this.form = document.querySelector(formClass);
    }
    init(){
        this.events();

    }
    events(){
        if(!this.form) return;
        this.form.addEventListener('submit', e => {
            this.validate(e);
        })
    }
    validate(e){
        const el = e.target;
        const emailInput = el.querySelector('input[name="email"]');
        const passwordInput = el.querySelector('input[name="password"]');
        let erro = false;

        if(!validator.isEmail(emailInput.value)){
            alert('Email inválido');
            erro = true;
        }

        if(passwordInput.value.length <3 || passwordInput.value.length > 50){
            alert('Senha precisa estar entre 3 e 50 caracteres');
            erro = true;
        }

        if (!erro) el.submit();

        //console.log(emailInput.value, passwordInput.value);
    }
}