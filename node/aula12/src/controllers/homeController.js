const exp = require("constants");

exports.paginaInicial = (req, res) => {
    res.render('index');
};

exports.trataPost = (req, res) =>{
    res.send("Ei, agora sou sua nova rota de Post.")
};