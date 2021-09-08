/**
 * 152. Criando usuários (1)
 * 
 * npm i validator
 * 
 */


const mongoose = require('mongoose');
const validator = require('validator');

const schemaLogin = new mongoose.Schema({
    email: { type: String, required: true },
    password: { type: String, required: true }
});

const modelLogin = mongoose.model('Login', schemaLogin);

class Login {
    constructor(body) {
        this.body = body;
        this.erros = [];
        this.user = null;
    }

    async register() {
        this.valida();
        if (this.erros.length > 0) return;
        try {
            this.user = await modelLogin.create(this.body)
        } catch (e) {
            console.log(e);
        }
    }

    valida() {
        this.cleanUp();
        // email precisa ser válida
        if (!validator.isEmail(this.body.email)) this.erros.push('E-mail inválido');
        // A senha precisa ter entre 3 e 50 caracteres
        if (this.body.password.length < 3 || this.body.password.length > 50) {
            this.erros.push('Senha precisa ter entre 3 e 50 caracteres.');
        }
    }

    cleanUp() {
        for (const key in this.body) {
            if (typeof this.body[key] !== 'string') {
                this.body[key] = '';
            }
        }

        // aqui estamos garantindo que o objeto terá somente
        // os campos e-mail e senha.
        this.body = {
            email: this.body.email,
            password: this.body.password
        };
    }

}

module.exports = Login;