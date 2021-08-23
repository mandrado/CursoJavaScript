class ValidaFormulario {
    constructor() {
        this.formulario = document.querySelector('.formulario');
        this.eventos();
    }
    eventos() {
        this.formulario.addEventListener('submit', e => {
            this.handleSubmit(e);
        });

    }

    handleSubmit(e) {
        e.preventDefault();
        const camposValidos = this.camposSaoValidos();
        const senhasValidas = this.senhasSaoValidas();
        console.log('Formulário não enviado...');
        if (camposValidos && senhasValidas) {
            alert('Formulário enviado!')
            this.formulario.submit();
        }
    }
    senhasSaoValidas(){
        let valid = true;

        const senha = this.formulario.querySelector('.senha');
        const repetirSenha = this.formulario.querySelector('.repetir-senha');

        if (senha.value !== repetirSenha.value) {
            valid = false;
            this.criaErro(senha, 'Campos senha e repetir senha precisam se iguais.')
            this.criaErro(repetirSenha, 'Campos senha e repetir senha precisam se iguais.')
        }

        if (senha.value.length < 6 || senha.value.length > 12) {
            valid = false;
            this.criaErro(senha, 'Senha precisa ser maior que 6 e menor que 12 caracteres')
        }

        return valid;
    }

    camposSaoValidos(){
        let valid = true;
        
        for (const errorText of this.formulario.querySelectorAll('.error-text')) {
            errorText.remove();
        }

        for (const campo of this.formulario.querySelectorAll('.validar')) {
            const label = campo.previousElementSibling.innerText;
            //console.log(campo);
            if(!campo.value){
                this.criaErro(campo, `Campo "${label}" não pode estar em branco`)
                valid = false;
            }

            if (campo.classList.contains('cpf')) {
                if(!this.validaCPF(campo)) valid = false;
            }

            if (campo.classList.contains('usuario')) {
                if(!this.validaUsuario(campo)) valid = false;
            }
        }

        return valid;
    }

    validaCPF(campo){
        const cpf = new ValidaCPF(campo.value);
        
        if (!cpf.valida()) {
            this.criaErro(campo, 'CPF inválido.')
            return false;
        }
        return true;
    }

    validaUsuario(campo){
        const usr = campo.value;
        let valid = true

        if (!usr.match(/^[a-zA-Z0-9]+$/g)) {
            this.criaErro(campo, 'Usuário só poderá conter letras e/ou números')
            valid = false;
        }

        if (usr.length < 3 || usr.length > 12) {
            this.criaErro(campo, 'Nome do usuário deverá ter entre 3 e 12 caracteres')
            valid = false;
        }
        console.log(usr);
        return valid;
    }

    criaErro(campo, msg){
        const div = document.createElement('div');
        div.innerHTML = msg;
        div.classList.add('error-text');
        campo.insertAdjacentElement('afterend', div);
    }
}

const valida = new ValidaFormulario();