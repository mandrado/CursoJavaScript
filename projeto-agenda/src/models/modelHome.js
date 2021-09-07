/**
 * Tudo que vier do banco de dados será tratado 
 * dentro do diretório models
 * 
 */

const mongoose = require('mongoose');

const schemaHome = new mongoose.Schema({
    titulo: { type: String, required: true },
    descricao: String
});

const modelHome = mongoose.model('Home', schemaHome);

module.exports = modelHome;