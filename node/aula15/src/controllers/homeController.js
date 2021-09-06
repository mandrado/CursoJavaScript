exports.paginaInicial = (req, res) => {
    req.session.usuario = { nome: 'Mandrado', logado: true };
    res.render('index');
    // acabando a função aqui.
    return;
};

exports.trataPost = (req, res) => {
    res.send(req.body);
    // acabando a função aqui.
    return;
};