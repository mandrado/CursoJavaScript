const exp = require("constants");

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