const exp = require("constants");

exports.paginaInicial = (req, res) => {
    res.send(`
    'Hello world com NODEMON!'
    <form action="/" method="POST">
    Nome: <input type="text" name="nome">
    <button> Enviar formulário</button>
    </form>
    `);
};

exports.trataPost = (req, res) =>{
    res.send("Ei, agora sou sua nova rota de Post.")
};