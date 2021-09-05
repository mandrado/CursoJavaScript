
/**
 * 133. Express Router e Controllers
 * 
 * Roteamento Básico
 * 
 * O Roteamento refere-se à determinação de como um aplicativo responde a uma solicitação 
 * do cliente por um endpoint específico, que é uma URI (ou caminho) e um método de solicitação 
 * HTTP específico (GET, POST, e assim por diante). 
 * 
 * Cada rota pode ter uma ou mais funções de manipulação, que são executadas quando a rota é correspondida.
 * 
 */
const express = require('express');
const route = express.Router();
const homeController = require('./src/controllers/homeController');
const contaController = require('./src/controllers/contatoController');

// Rotas da home
route.get('/', homeController.paginaInicial);
route.post('/', homeController.trataPost);

// Rotas do Contato
route.get('/contato', contaController.paginaContato);






// esportar as rotas criadas
module.exports = route;