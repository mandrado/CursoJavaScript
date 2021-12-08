/**
 * 
 * $1 $2 $3 <-- Retrovisões /1 (são como variáveis que apontam para um grupo)
 * para usar precisa colcar entre parentes o item que
 * será considerado a variável, tornando-o um grupo (\w)
 * 
 * uso da expressão .dotAll (.*)
 * 
 * resolver o problema da quebra de linha dentro das tags
 * [\s\S] <-- selecione tudo que for ou não um espaço
 * 
 * 
 * 
 */
const { html2 } = require('./base');
console.log(html2);
console.log(html2.match(/<(\w+)[\s\S]*?>([\s\S]*?)<\/\1>/g));
// substituindo o primeiro grupo pela variável do grupo 1 ($1)
console.log(html2.replace(/<(\w+)[\s\S]*?>([\s\S]*?)<\/\1>/g, '$1'));
// substituindo o primeiro grupo pela variável do grupo 1 ($1) e 2 ($2)
console.log(html2.replace(/<(\w+)[\s\S]*?>([\s\S]*?)<\/\1>/g, '$1 $2'));
// recriando com grupos
console.log(html2.replace(/(<(\w+)[\s\S]*?>)([\s\S]*?)(<\/\2>)/g, '$1 $3 $4'));
// substituir o que tem dentro das tags html ($3)
console.log(html2.replace(/(<(\w+)([\s\S]*?)>)([\s\S]*?)(<\/\2>)/g, '$1 HAHA $4 HAHA $5'));
// Não salvar na memória um grupo de pesquisa ?:
console.log(html2.replace(/(<(\w+)(?:[\s\S]*?)>)([\s\S]*?)(<\/\2>)/g, '$1 HAHA $3 HAHA $4'));
