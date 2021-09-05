/**
 * 136. Express + Webpack
 * 
 * Copiar arquivos e configurações o modelo-webpack
 * cd aula12
 * npm install
 * npm start
 * npm run dev
 * 
 */

const express = require('express');
const app = express();
const routes = require('./routes');
const path = require('path');

// para usar req.body e obter o que vem no post da requisição:
app.use(express.urlencoded({extended: true}));
// pastas para conteúdos estáticos
app.use(express.static(path.resolve(__dirname, 'public')));

// passar o caminho absoluto da pasta views:
app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');
app.use(routes);



app.listen(3000, () => {
    console.log('Servidor está rodando em http://localhost:3000');
});



