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

    console.log('Sou seu MiddlewareGlobal');
    next();
};

exports.OutroMiddlewareGlobal = (req, res, next) => {
    console.log('Sou seu OutroMiddlewareGlobal');
    next();
};