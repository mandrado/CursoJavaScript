const exp = require("constants");

exports.paginaInicial = (req, res, next) => {
    console.log('Respondendo ao cliente.');
    res.render('index');
    console.log(`'paginaInicial': Olha o que tem na req.session.nome ${req.session.nome}`);
    next();
};

exports.trataPost = (req, res) =>{
    res.send("Ei, agora sou sua nova rota de Post.")
};