/**
 * importar coisas de outros arquivos:
 * não é necessário informar a extenção do arquivo
 */

//import {nome, sobrenome, old as idade, soma, Pessoa as classPessoa} from './modulo1';

// podemos também importar tudo:

import * as meuModulo from './modulo1';

// importe padrão pode ter qualquer nome sem ter que renomear
import conta from './modulo1'
// podemos importar o padrão e também as variáveis 
import teste, {nome, old} from './modulo1';

//const p1 = new classPessoa('Mandrado', 'Santos');
const p1 = new meuModulo.Pessoa('Mandrado', 'Silva')
const idade = meuModulo.old;

console.log(meuModulo.nome, meuModulo.sobrenome, idade);
console.log(meuModulo.soma(5,6));
console.log(p1);
console.log(conta(5,4));
console.log(teste(7,8));