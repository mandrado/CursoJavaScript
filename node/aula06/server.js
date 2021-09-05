/**
 * 130. Express - Introdução
 * 
 * cd aula06
 * npm init -y
 * npm install express@4.17.1
 * 
 *           Criar   ler   atualizar apagar
 *  CRUD  -> CREATE, READ, UPDATE, DELETE
 *           POST    GET   PUT     DELETE
 * 
 *  http://meusite.com/ <- GET -> Entrege a página /
 *  http://meusite.com/sobre <- GET -> Entrege a página /sobre
 *  http://meusite.com/contato <- GET -> Entrege a página /contato
 * 
 */

const express = require('express');
const app = express();

// req = requisição
// res = resposta

app.get('/', (req, res) => {
    res.send( `
    'Hello world!'
    <form action="/" method="POST">
    Nome: <input type="text" name="nome">
    <button> Enviar</button>
    </form>
    `);
});

app.post('/', (req, res) =>{
    res.send('Recebi o formulário com seu nome.');
});


app.get('/contato', (req, res) => {
    res.send('Obrigado por entrar em contato conosco.')
});

// express escuta nesta porta:
// app.listen(3000);

// melhor é avisar ao usuário que o servidor está rodando
// e em que porta:

app.listen(3000, () => {
    console.log('Servidor está rodando em http://localhost:3000');
});

// caso vc tenha clicado em executar (Ctrl + Alt + N), 
// para parar vc precisa executar (Ctrl + Alt + M).

// vc pode abrir pelo terminal do vscode e rodar o comando:
// node server.js

// vc pode abrir o terminal fora do vscode e rodar o comando:
// node server.js

