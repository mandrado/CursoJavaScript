/**
 * Tudo que vier do banco de dados será tratado 
 * dentro do diretório models
 * 
 */

const mongoose = require('mongoose');

const HomeSchema = new mongoose.Schema({
    titulo: { type: String, required: true },
    descricao: String
});

const HomeModel = mongoose.model('Home', HomeSchema);

module.exports = HomeModel;