/**
 * 124. Módulos (1)
 * Formas de importação de módulos:
 * 
 */

//importaçao de módulos padrão sem informar o caminho:
const path = require('path');

// importação de módulos instalados (axios) sem informar o caminho
const axios = require('axios');


//const mod1 = require('./mod1');
//const falaNome = require('./mod1').falaNome;
const {nome, sobrenome, falaNome} = require('./mod1');
// fazendo descontructor
const { Pessoa } = require('./mod1');

//console.log(mod1);
//console.log(mod1.falaNome());
//console.log(falaNome());

const p1 = new Pessoa('Mandrado');
console.log(p1);

axios('https://www.otaviomiranda.com.br/files/json/pessoas.json')
    .then(response => console.log(response.data))
    .catch(e => console.log(e));