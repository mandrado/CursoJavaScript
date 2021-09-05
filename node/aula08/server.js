/**
 * 132. Express - req.params, req.query e req.body
 * 
 * cd aula08
 * npm install
 *
 */

const express = require('express');
const app = express();

// para usar req.body e obter o que vem no post da requisição:
app.use(
    express.urlencoded({
        extended: true
    })
);

// req = requisição
// res = resposta

app.get('/', (req, res) => {
    res.send(`
    'Hello world com NODEMON!'
    <form action="/" method="POST">
    Nome: <input type="text" name="nome">
    <button> Enviar formulário</button>
    </form>
    `);
});

app.post('/', (req, res) => {
    console.log(req.body);
    res.send('Recebi o formulário com seu nome: '+`${req.body.nome}`);
});

// obter paramentros a partir da URL /:idUser
// caso queira que o parametro seja opcional, acrescente ?
// acrescente parâmetros quantos necessários.
/* app.get('/testes/:idUser?/:conta?', (req,res)=>{
    console.log(req.params.idUser);
    res.send('Oi ' + req.params.idUser + " " + req.params.conta);
}); */

app.get('/testes/:idUser?/:conta?', (req, res) => {
    /*     
        req.params : das partes que vem das partes que vem na rota da url
        /profiles/3/4/5/...

        req.query : as partes que vem da query string
        /profiles/?chave1=valor1&chave2=valor2&chave3=valor3&... 

        req.body : o que vem no post da requisição
        vem as chaves que estão no campo name do input do formulário.
    */
    console.log(req.params);
    console.log(req.query);
    res.send(req.query.hobbie);
});


app.listen(3000, () => {
    console.log('Servidor está rodando em http://localhost:3000');
});



