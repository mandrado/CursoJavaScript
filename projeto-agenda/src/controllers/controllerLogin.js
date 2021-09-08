const Login = require('../models/modelLogin');

exports.index = (req, res) => {
    res.render('login');
    // acabando a função aqui.
    return;
};

exports.register = async function (req, res) {
    try {
        const login = new Login(req.body);
        await login.register();

        if (login.erros.length > 0) {
            req.flash('errors', login.erros);
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