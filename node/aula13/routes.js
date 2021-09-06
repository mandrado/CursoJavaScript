
/**
 * 137. Express Middlewares
 * 
 * Usando middlewares 
 * 
 * O Express é uma estrutura web de roteamento e middlewares que tem uma funcionalidade mínima 
 * por si só: Um aplicativo do Express é essencialmente uma série de chamadas de funções de middleware.
 * 
 * Funções de Middleware são funções que tem acesso ao objeto de solicitação (req), o objeto de resposta (res), 
 * e a próxima função de middleware no ciclo solicitação-resposta do aplicativo. A próxima função middleware é 
 * comumente denotada por uma variável chamada next.
 * 
 * Funções de middleware podem executar as seguintes tarefas:
 * 
 * Executar qualquer código.
 * Fazer mudanças nos objetos de solicitação e resposta.
 * Encerrar o ciclo de solicitação-resposta.
 * Chamar a próxima função de middleware na pilha.
 * 
 */
const express = require('express');
const route = express.Router();
const homeController = require('./src/controllers/homeController');
const contaController = require('./src/controllers/contatoController');

// Função Middleware
function meuMiddleware(req, res, next) {
    req.session = {nome: 'Mandrado', sobrenome: 'Santos'}
    console.log();
    console.log('Passei no seu Middleware.');
    console.log();
    next();
}

// Rotas da home
route.get('/', meuMiddleware, homeController.paginaInicial, function(req, res, next) {
    console.log();
    console.log('Ainda estou aqui...');
    console.log(`'meuMiddleware': Olha o que tem na req.session.nome ${req.session.nome}`);
});
route.post('/', homeController.trataPost);

// Rotas do Contato
route.get('/contato', contaController.paginaContato);






// esportar as rotas criadas
module.exports = route;