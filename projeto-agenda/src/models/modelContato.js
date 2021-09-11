/**
 * 155. Cadastrando contatos (Create)
 * 
 */

const mongoose = require('mongoose');
const validator = require('validator');

const schemaContato = new mongoose.Schema({
    nome: { type: String, required: true },
    sobrenome: { type: String, required: false, default: '' },
    email: { type: String, required: false, default: '' },
    telefone: { type: String, required: false, default: '' },
    criadoEm: { type: Date, default: Date.now}

});

const modelContato = mongoose.model('Contato', schemaContato);

function Contato(body) {
    this.body = body;
    this.erros = [];
    this.contato = null;
}

Contato.buscaPorId = async function (id) {
    if(typeof id !== 'string') return;
    const contato = await modelContato.findById(id);
    return contato;
}

Contato.prototype.cadastro = async function() {
    this.valida();
    if (this.erros.length > 0) return;
    this.contato = await modelContato.create(this.body);

};

Contato.prototype.valida = function() {
    this.cleanUp();
    // email precisa ser válido
    if (this.body.email && !validator.isEmail(this.body.email)) this.erros.push('E-mail inválido');
    if (!this.body.nome) this.erros.push('Nome é um campo obrigatório.');
    if (!this.body.telefone && !this.body.email) this.erros.push('Telefone ou e-mail precisa ser informado.');

};

Contato.prototype.cleanUp = function() {
    for (const key in this.body) {
        if (typeof this.body[key] !== 'string') {
            this.body[key] = '';
        }
    }
    // aqui estamos garantindo que o objeto terá somente
    // os campos e-mail e senha.
    this.body = {
        nome: this.body.nome,
        sobrenome: this.body.sobrenome,
        email: this.body.email,
        telefone: this.body.telefone
    }
};


module.exports = Contato;