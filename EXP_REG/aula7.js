// ^ --> Começa com (perfeito para campos de formulários)
// [^] --> Negação
// $ --> Termina com
// m --> multiline (expressão para ser aplicado em todas as linhas do arquivo)

const { cpfs2} = require('./base');

const cpfRegExp = /^(\d{3}\.){2}\d{3}\-\d{2}$/gm;
console.log(cpfs2);
console.log(cpfs2.match(cpfRegExp));
