// grupos de expressões regulares e suas variáveis
// (..1..(..2..(..3..)...)...) (..4..) (..5..) (..6..) $1 $2 $3 $4 $5 $



// arquivo base para consultas da aula:
const { texto } = require('./base');
const regExp1 = /João|maria/gi;

console.log(texto.match(regExp1)); // com a flag g ele lista todos os padrões encontrados.
// substituir o texto procurado por outro
console.log(texto.replace(/João|maria/gi, 'Felipe'));
// variáveis para tratar o padrão consultado
console.log(texto.replace(/(joão|maria)/gi, '"$1"'));
console.log(texto.replace(/(joão|maria)/gi, '<b>$1</b>'));
// alterar tudo que for encontrado para uppercase
console.log(texto.replace(/(joão|maria)/gi, function(input){
    return input.toUpperCase();
}));
console.log(texto.replace(/(joão|maria)/gi, function(input){
    return '---> ' + input.toUpperCase() + ' <----';
}));