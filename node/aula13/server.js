/**
 * 137. Express Middlewares
 * 
 * cd aula13
 * npm install
 * npm start
 * npm run dev
 * 
 */

const express = require('express');
const app = express();
const routes = require('./routes');
const path = require('path');
//const meuMiddleware = require('./src/middlewares/middleware')
// com associação via desestruturação:
const {meuMiddlewareGlobal, OutroMiddlewareGlobal} = require('./src/middlewares/middleware')

// para usar req.body e obter o que vem no post da requisição:
app.use(express.urlencoded({extended: true}));
// pastas para conteúdos estáticos
app.use(express.static(path.resolve(__dirname, 'public')));

// passar o caminho absoluto da pasta views:
app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

// chamar nosso próprio Middleware Global
app.use(meuMiddlewareGlobal);
app.use(OutroMiddlewareGlobal);

app.use(routes);



app.listen(3000, () => {
    console.log('Servidor está rodando em http://localhost:3000');
});



