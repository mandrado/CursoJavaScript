
/**
 * Rotas
 * 
 * A rota vai decidir qual controler vai ser utilizado
 * quem irá controlar a rota e qual é a view a ser utilizada
 * 
 */
const express = require('express');
const route = express.Router();
const controllerHome = require('./src/controllers/controllerHome');
const controllerLogin = require('./src/controllers/controllerLogin');
const controllerContato = require('./src/controllers/controllerContato');
const {loginRequired} = require('./src/middlewares/middleware');
const controllerRegistro = require('./src/controllers/controllerRegistro');


/* rota para obter a página inicial (index) do arquivo controllerHome */
route.get('/', controllerHome.index);

/* Rotas para login */
route.get('/login/index', controllerLogin.index);
route.post('/login/register', controllerLogin.register);
route.post('/login/login', controllerLogin.login);
route.get('/login/logout', controllerLogin.logout);

/* Rota para contato */
route.get('/contato/index', loginRequired, controllerContato.index);
route.post('/contato/cadastro', loginRequired, controllerContato.cadastro);
route.get('/contato/index/:id', loginRequired, controllerContato.editIndex);
route.post('/contato/edit/:id', loginRequired, controllerContato.edit);
route.get('/contato/delete/:id', loginRequired, controllerContato.delete);

/* Rota para registro */
route.get('/registro', controllerRegistro.index);

// esportar as rotas criadas
module.exports = route;