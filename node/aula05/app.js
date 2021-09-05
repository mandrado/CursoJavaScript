/**
 * 129. Escrevendo e lendo arquivos
 */
const path = require('path');
const caminhoArquivo = path.resolve(__dirname, 'teste.json');
const escreve = require('./modules/escrever');
const ler = require('./modules/ler');

const pessoas = [
    { nome: 'Mandrado', sobrenome: "Santos" },
    { nome: 'Maria' },
    { nome: 'Eduardo' },
    { nome: 'Zilete' },
];

// criar o arquivo Json, informando o conteúdo, 
// informando uma string vazia e 
// identando com dois espaços
const json = JSON.stringify(pessoas, '', 2);

escreve(caminhoArquivo, json);


async function lerArquivo(caminho) {
   const dados = await ler(caminho);
   renderizaDados(dados);
}

function renderizaDados(dados) {
    dados = JSON.parse(dados);
    dados.forEach(element => {
        console.log(element.nome);
    });
}

lerArquivo(caminhoArquivo);
