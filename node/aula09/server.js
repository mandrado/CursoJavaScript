/**
 * 133. Express Router e Controllers
 * 
 * cd aula09
 * npm install
 *
 */

const express = require('express');
const app = express();
const routes = require('./routes')

// para usar req.body e obter o que vem no post da requisição:
app.use(
    express.urlencoded({
        extended: true
    })
);
app.use(routes);



app.listen(3000, () => {
    console.log('Servidor está rodando em http://localhost:3000');
});



