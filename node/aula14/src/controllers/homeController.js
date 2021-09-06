// importar o Schema de banco de dados Home Model

const HomeModel = require('../models/HomeModel');

//criar algo no banco de dados
HomeModel.create({
    titulo: 'Um titulo de teste 2',
    descricao: 'Uma descrição de teste 2.'
})
    .then(dados => console.log(dados))
    .catch(e => console.log(e));

//consultar algo no banco de dados
HomeModel.find()
    .then(dados => console.log(dados))
    .catch(e => console.log(e));



exports.paginaInicial = (req, res) => {
    res.render('index');
    // acabando a função aqui.
    return;
};

exports.trataPost = (req, res) => {
    res.send(req.body);
    // acabando a função aqui.
    return;
};