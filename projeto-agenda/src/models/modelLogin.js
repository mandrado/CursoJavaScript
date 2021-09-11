/**
 * 152. Criando usuários (1)
 * 
 * npm i validator
 * 
 * 153. Criando usuários (2)
 * 
 * npm i bcryptjs
 * 
 * O BCrypt foi desenvolvido por Niels Provos e David Mazières (1999) 
 * com o propósito de esconder senhas criadas pelos usuários em forma de 
 * texto “puro” em dados indecifráveis, utilizando o algoritmo hash. Essa é 
 * uma ferramenta segura para armazenar senhas no banco de dados e pode ser 
 * utilizada por qualquer linguagem (C, C ++, C #, Go, Java, JavaScript, 
 * Elixir, Perl, PHP, Python, Ruby e outros).
 * 
 */


const mongoose = require('mongoose');
const validator = require('validator');
const bcryptjs = require('bcryptjs');

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

    async login() {
        this.valida();
        if (this.erros.length > 0) return;
        this.user = await modelLogin.findOne({ email: this.body.email });
        console.log(this.user);

        if (!this.user) {
            this.erros.push('Usuário não cadastrado.');
            return;
        }

        if (!bcryptjs.compareSync(this.body.password, this.user.password)) {
            this.erros.push('Senha inválida');
            console.log(`${this.body.password} <> ${this.user.password}`);
            this.user = null;
            return;
        }
    }

    async register() {
        this.valida();
        // checagem se houve errro nos dados do formularío
        if (this.erros.length > 0) return;

        await this.userExiste();
        // chegar se houve erro ao verificar se o usuário já existe.
        if (this.erros.length > 0) return;

        /**
         * O salt é uma das vantagens do BCrypt, pois acrescenta aleatoriamente 
         * sequências de caracteres a senha, projetando resultados criptográficos 
         * complexos e aumentando a segurança contra ataques de força bruta, como 
         * o rainbow tables, ou seja, um hash sempre será diferente, mesmo que 
         * a senha seja igual.
         */
        const salt = bcryptjs.genSaltSync();
        this.body.password = bcryptjs.hashSync(this.body.password, salt);

        this.user = await modelLogin.create(this.body)

    }

    async userExiste() {
        // buscar na base de dados:
        this.user = await modelLogin.findOne({ email: this.body.email });
        /// se email já estiver cadastrado: 
        if (this.user) this.erros.push('Usuário já cadastrado.');

    }

    valida() {
        this.cleanUp();
        // email precisa ser válido
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