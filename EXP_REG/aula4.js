/**
 * Greedy e non-greedy (lazy)
 * 
 *  <*>    *    </*><*>      *    </*>
 *  <.+>.+ <\/.+> = localizando todas as tags html
 * 
 */


// arquivo base para consultas da aula:
const { html } = require('./base');
console.log(html);
 
console.log(html.match(/<.+>/g)); // greedy (guloso, pega tudo)
console.log(html.match(/<.+?>/g)); // non-greedy (não guloso, pega somente o que foi pedidos)
console.log(html.match(/<.+?>.+?<\/.+?>/g)); // non-greedy (não guloso, pega somente o que foi pedidos)

