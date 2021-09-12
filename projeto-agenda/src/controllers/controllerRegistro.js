const Registro = require('../models/modelRegistro');

exports.index = (req, res) => {
    if(req.session.user) return res.render('logado');
    
    res.render('registro');
};


exports.registro = async function (req, res) {
    try {
        const registro = new Registro(req.body);
        await registro.registro();

        if (registro.erros.length > 0) {
            req.flash('errors', registro.erros);
            req.session.save(function () {
                return res.redirect('back');
            });
            return;
        }

        req.flash('success', "Seu usuário foi criado com sucesso.");
        req.session.save(function () {
            return res.redirect('back');
        });

    } catch (e) {
        console.log(e);
        return res.render('404');
    }
};