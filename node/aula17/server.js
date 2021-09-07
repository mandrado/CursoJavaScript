/**
 * 145. Helmet e CSRF
 * 
 * Helmet no localhost (EVITE)
 *  
 * cd aula17
 * npm install
 * npm i helmet@3.21.2 csurf@1.10.0
 * npm start
 * npm run dev
 * 
 * O Helmet é para segurança da aplicação, portanto, caso você esteja com um sistema 
 * ainda em desenvolvimento, usando urls como "127.0.0.1", "localhost" ou até um servidor 
 * com IP externo, sem usar SSL (https), é recomendável desativá-lo. Ele pode bloquear 
 * importação de scripts e arquivos de CSS. 
 * 
 * Caso ocorra erros ao importar o bundle.js, arquivos de CDN (como bootstrap, por exemplo) 
 * ou CSS, basta desativar o helmet para correção.
 * 
 * Isso só ocorrerá em sistemas sem SSL (sem https na URL).
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

// salvar a seção na memória
const session = require('express-session');
const MongoStore = require('connect-mongo');
const flash = require('connect-flash');


const routes = require('./routes');
const path = require('path');
//O Helmet pode ajudar a proteger o seu aplicativo de algumas vulnerabilidades da web bastante conhecidas 
//configurando os cabeçalhos HTTP adequadamente
const helmet = require('helmet');
//Proteção contra cross-site request forgery (CSRF ou XSRF), em português falsificação de solicitação entre sites, 
// também conhecido como ataque de um clique (one-click attack) ou montagem de sessão (session riding)
const csrf = require('csurf');
//const meuMiddleware = require('./src/middlewares/middleware')
// com associação via desestruturação:
const { meuMiddlewareGlobal, OutroMiddlewareGlobal, checkCsrfError, csrfMiddleware } = require('./src/middlewares/middleware')

// para usar req.body e obter o que vem no post da requisição:
app.use(express.urlencoded({ extended: true }));
// pastas para conteúdos estáticos
app.use(express.static(path.resolve(__dirname, 'public')));
// uso do helmet
app.use(helmet());

//configurar a sessão do usuário
const sessionOptions = session({
    secret: 'qwerasdf123432qerqwasdfdsqwer1423',
    store: MongoStore.create({ mongoUrl: process.env.CONNECTIONSTRING }),
    resave: false,
    saveUninitialized: false,
    cookie:{
        maxAge: 1000 * 60 * 60 * 27 * 7,
        httpOnly: true
    }
});
app.use(sessionOptions);
app.use(flash());

// passar o caminho absoluto da pasta views:
app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

// proteção contra CSRF
app.use(csrf());
// chamar nosso próprio Middleware Global
app.use(meuMiddlewareGlobal);
app.use(OutroMiddlewareGlobal);
app.use(checkCsrfError);
app.use(csrfMiddleware);

app.use(routes);

// quando a conexão estiver pronta, executar o aplicativo
app.on('pronto', () => {
    app.listen(3000, () => {
        console.log('Servidor está rodando em http://localhost:3000');
    });
});



