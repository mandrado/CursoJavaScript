/**
 * 137. Express Middlewares
 * 
 * Usando middlewares 
 * 
 * O Express é uma estrutura web de roteamento e middlewares que tem uma funcionalidade mínima 
 * por si só: Um aplicativo do Express é essencialmente uma série de chamadas de funções de middleware.
 * 
 * Funções de Middleware são funções que tem acesso ao objeto de solicitação (req), o objeto de resposta (res), 
 * e a próxima função de middleware no ciclo solicitação-resposta do aplicativo. A próxima função middleware é 
 * comumente denotada por uma variável chamada next.
 * 
 * Funções de middleware podem executar as seguintes tarefas:
 * 
 * Executar qualquer código.
 * Fazer mudanças nos objetos de solicitação e resposta.
 * Encerrar o ciclo de solicitação-resposta.
 * Chamar a próxima função de middleware na pilha.
 * 
 */



/* module.exports = (req, res, next) => {
    if (req.body.cliente) {
        req.body.cliente = req.body.cliente.replace('Miranda', 'NÃO USE Miranda');
        console.log();
        console.log(`Passei no Middleware Global ${req.body.cliente}`);
        console.log();
    }
    next();
}; */

exports.meuMiddlewareGlobal = (req, res, next) => {
    res.locals.errors = req.flash('errors');
    res.locals.success = req.flash('success');
    res.locals.user = req.session.user;
    next();
};

exports.checkCsrfError = (err, req, res, next) => {
    //if (err && 'EBADCSRFTOKEN' === err.code) {
    if (err) {
        console.log(err);
        return res.render('404');
    }
    next();
}

exports.csrfMiddleware = (req, res, next) => {
    res.locals.csrfToken = req.csrfToken();
    next();
}

exports.loginRequired = (req, res, next) => {
    if (!req.session.user) {
        req.flash('errors', 'Você precisa fazer login.');
        req.session.save(() => res.redirect('/'));
        return;
    }
    next();
}