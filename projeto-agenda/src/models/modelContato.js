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
    criadoEm: { type: Date, default: Date.now }

});

const modelContato = mongoose.model('Contato', schemaContato);

function Contato(body) {
    this.body = body;
    this.erros = [];
    this.contato = null;
}

Contato.prototype.cadastro = async function () {
    
    this.valida();
    if (this.erros.length > 0) return;
    
    await this.userExiste();
    
    if (this.erros.length > 0) return;
    
    this.contato = await modelContato.create(this.body);

};

Contato.prototype.userExiste = async function (){
    this.user = await modelContato.findOne({email: this.body.email});
    if(this.user) this.erros.push(`Usuário com o e-mail ${this.body.email} já cadastrado`);
}

Contato.prototype.valida = function () {
    this.cleanUp();
    // email precisa ser válido
    if (this.body.email && !validator.isEmail(this.body.email)) this.erros.push('E-mail inválido');
    if (!this.body.nome) this.erros.push('Nome é um campo obrigatório.');
    if (!this.body.telefone && !this.body.email) this.erros.push('Telefone ou e-mail precisa ser informado.');

};

Contato.prototype.cleanUp = function () {
    for (const key in this.body) {
        if (typeof this.body[key] !== 'string') {
            this.body[key] = '';
        }
    }
    // aqui estamos garantindo que o objeto terá somente
    // os campos e-mail e senha.
    this.body = {
        nome: this.body.nome.trim(),
        sobrenome: this.body.sobrenome.trim(),
        email: this.body.email.trim(),
        telefone: this.body.telefone.trim()
    }
};

Contato.prototype.edit = async function (id) {
    if (typeof id !== 'string') return;
    this.valida();
    if (this.erros.length > 0) return;
    this.contato = await modelContato.findByIdAndUpdate(id, this.body, { new: true });
}

// Métodos estáticos (sem acesso ao this)
Contato.buscaPorId = async function (id) {
    if (typeof id !== 'string') return;
    const contato = await modelContato.findById(id);
    return contato;
}
Contato.buscaContatos = async function () {
    //const contatos = await modelContato.find({email:tal});
    const contatos = await modelContato.find()
        .sort({ criadoEm: -1 }); // 1 para crescente | -1 para decrescente
    return contatos;
}

Contato.delete = async function (id) {
    if (typeof id !== 'string') return;
    const contato = await modelContato.findByIdAndDelete({_id: id});
    return contato;
};


module.exports = Contato;