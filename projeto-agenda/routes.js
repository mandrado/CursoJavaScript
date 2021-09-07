
const express = require('express');
const route = express.Router();
const homeController = require('./src/controllers/homeController');
const contatoController = require('./src/controllers/contatoController');

/**
 * Rotas
 * 
 * A rota vai decidir qual controler vai ser utilizado
 * quem irá controlar a rota e qual é a view a ser utilizada
 * 
 */

/* rota para obter a página inicial do arquivo homeControler*/
route.get('/', homeController.paginaInicial);
/* rota para enviar algo para ser tratado pelo trataPost do arquivo homeControler*/
route.post('/', homeController.trataPost);

// Rota para obter o Contato da pagina contatoController
route.get('/contato', contatoController.paginaContato);






// esportar as rotas criadas
module.exports = route;