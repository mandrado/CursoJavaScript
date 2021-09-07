exports.paginaInicial = (req, res) => {
    req.session.usuario = { nome: 'Mandrado', logado: true };
    res.render('index', {
        //injetando dados na pagaina index.ejs:
        titulo: 'Este será o <span style="color: red;"> título </span> da página',
        numeros: [1,2,3,4,5,6,7,8,9]
    });
    // acabando a função aqui.
    return;
};

exports.trataPost = (req, res) => {
    res.send(req.body);
    // acabando a função aqui.
    return;
};