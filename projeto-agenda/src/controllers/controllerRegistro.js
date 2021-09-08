const Registro = require('../models/modelRegistro');

exports.index = (req, res) => {
    res.render('registro');
};


exports.registro = function(req, res){
    const registro = new Registro(req.body);
    registro.registrar();
    res.send(registro.erros);

}