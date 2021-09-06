/**
 * 140. MongoDB - Conexão e primeiro Model
 * 
 * cd aula14
 * npm install
 * npm install dotenv@8.2.0 <- permite criar variáveis de ambiente que nãos serão enviadas para o reposítório
 * npm install mongoose@5.7.7 <- permite gerenciar schemas de banco de dados
 * npm start
 * npm run dev
 * 
 */
// conrigurar para as senhas de acesso a banco não fiquem no arquivo.
require('dotenv').config(); // após criar o arquivo .env com o par de chaves e valores
// git .ignore já ignora esse tipo de arquivo.
const express = require('express');
const app = express();

//conexão com banco de dados
const mongoose = require('mongoose');
//const connectionString = 'mongodb+srv://userdba:<password>@cluster0.pbdlo.mongodb.net/<myDatabase>?retryWrites=true&w=majority'
// CCONNECTIONSTRING do .env aplicada ao mongoose.connect
//mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true })
mongoose.connect(process.env.CONNECTIONSTRING, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Conectado ao Banco de Dados');
        app.emit('pronto'); // emitir um sinal de pronto quando a coneção estiver ok
    })
    .catch(e => console.log(e));


const routes = require('./routes');
const path = require('path');
//const meuMiddleware = require('./src/middlewares/middleware')
// com associação via desestruturação:
const { meuMiddlewareGlobal, OutroMiddlewareGlobal } = require('./src/middlewares/middleware')

// para usar req.body e obter o que vem no post da requisição:
app.use(express.urlencoded({ extended: true }));
// pastas para conteúdos estáticos
app.use(express.static(path.resolve(__dirname, 'public')));

// passar o caminho absoluto da pasta views:
app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

// chamar nosso próprio Middleware Global
app.use(meuMiddlewareGlobal);
app.use(OutroMiddlewareGlobal);

app.use(routes);

// quando a conexão estiver pronta, executar o aplicativo
app.on('pronto', () => {
    app.listen(3000, () => {
        console.log('Servidor está rodando em http://localhost:3000');
    });
});



