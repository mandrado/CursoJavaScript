/**
 * 147. Resumo
 * 
 * cd aula17
 * npm install
 * npm start
 * npm run dev
 * 
 */

/**
 dotenv é referente as variáveis de ambiente criadas no arquivo .env
 configurar para as senhas de acesso a banco não fiquem no arquivo.
 arquivo .env possui um par de chaves e valores.
 O arquivo é ignorado via gitignore para não ficar exposto na internet
 ou para outros desenvolvedores.
 Pode ser que seu git .ignore já ignore esse tipo de arquivo.
*/
require('dotenv').config();

/** Iniciando o express */
const express = require('express');
const app = express();

/** conexão com banco de dados MongoDB 
 * Exemplo de conexão sem uso do dotenv:
 * const connectionString = 'mongodb+srv://userdba:<password>@cluster0.pbdlo.mongodb.net/<myDatabase>?retryWrites=true&w=majority'
 * mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true })
 * 
 * CCONNECTIONSTRING é a variável salva no .env aplicada ao mongoose.connect precedida do process.env.
 * 
 * mongoose.connect retorna uma promises
 *  
*/
const mongoose = require('mongoose');
mongoose.connect(process.env.CONNECTIONSTRING, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Conectado ao Banco de Dados');
        app.emit('pronto'); // emitir um sinal de pronto quando a coneção estiver ok
    })
    .catch(e => console.log(e));

/** 
 * seções
 * serve para identificar o navegador do cliente salvar um cookie no computador do cliente
 * a seção do cliente na memória 
 * 
 * MongoStore é para falar que as seções serão salvas no banco de dados
 * 
 */
const session = require('express-session');
const MongoStore = require('connect-mongo');

/** 
 * flash message (mensagens auto destrutivas)
 * serve para mandar mensagens de erro ou algum feedback para o usuário
 * Essas mensagens são salva na seção do usuário
 * 
 */
const flash = require('connect-flash');

/** 
 * Routes
 * Por que precisamos de um arquivo de rota separado no Node js?
 * 
 * Porque no momento em que adicionarmos novos endpoints, então podemos imaginar no 
 * futuro ter muitas rotas aqui ou a funcionalidade, então o arquivo index.js se torna 
 * muito confuso e nem mesmo legível e isso não é uma boa prática. Portanto, queremos 
 * separar a rota deste arquivo
 * 
*/
const routes = require('./routes');

/** 
 * path
 * Serve para trabalhar com caminhos
 * 
 */ 
const path = require('path');

/**
 * O Helmet é uma recomendação da equipe do Express.
 * O Helmet pode ajudar a proteger o seu aplicativo de algumas vulnerabilidades da web bastante conhecidas 
 * configurando os cabeçalhos HTTP adequadamente 
 * 
 */
const helmet = require('helmet');

/** 
 * Proteção contra cross-site request forgery (CSRF ou XSRF), em português falsificação de solicitação entre sites, 
 * também conhecido como ataque de um clique (one-click attack) ou montagem de sessão (session riding)
 * 
*/
const csrf = require('csurf');

/**
 * Middleware são funções que são executadas no caminho da rota.
 * 
 * Middleware pegam uma requisição, faz alguma coisa e passa para a próxima (next)
 * 
 * Aqui foi importado associação via desestruturação:
 */
const { meuMiddlewareGlobal, checkCsrfError, csrfMiddleware } = require('./src/middlewares/middleware')

/*  uso do helmet */
app.use(helmet());

/**
 * express.urlencoded
 * Permite fazer o PARSE e enviar formulários para dentro da aplicação
 * foi criado para usar req.body e obter o que vem no post da requisição
 */
app.use(express.urlencoded({ extended: true }));

/**
 * express.json
 * 
 * Permite fazer o parse do Json para dentro da aplicação.
 */
app.use(express.json());

/**
 * express.static
 * 
 * usado para todos os arquivos estáticos dentro da aplicação
 * devendo utilizar o path.resolve para as pastas com onteúdos estáticos
 * que podem ser acessados diretamente, imagens, css, javascript
 */
app.use(express.static(path.resolve(__dirname, 'public')));

/** 
 * configurar a sessão do usuário e flash messages
 */
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

/** 
 * views
 * são os arquivos que renderizamos na tela geralmente são arquivos html
 * devemos passar o caminho absoluto da pasta views
 * 
 */
app.set('views', path.resolve(__dirname, 'src', 'views'));
/**
 * view engine é a engine utilizada para renderizar o html
 * 
 * ejs utiliza as tags:
 * 
 * <% controle de fluxo (if, for...) %>
 * <%= imprime escapando caracteres (tags html) %>
 * <%- imprime sem escapar caracters (tags html) %>
 * <%# linha de comentário %>
 * <%- include('CAMINHO/ARQUIVO'); %>
 *  
 */
app.set('view engine', 'ejs');

/* Usando a proteção contra CSRF */
app.use(csrf());

/* usando nossos próprios Middleware criado Globalmente */
app.use(meuMiddlewareGlobal);
app.use(checkCsrfError);
app.use(csrfMiddleware);

/*  usando as rotas criadas no arquivo rotes.js */
app.use(routes);

/** 
 * Quando a conexão com o banco de dados estiver pronta, 
 * podemos ouvir a porta e informar que estamos 
 * executando o aplicativo 
 * 
*/
app.on('pronto', () => {
    app.listen(3000, () => {
        console.log('Servidor está rodando em http://localhost:3000');
    });
});



