const fs = require('fs').promises;

//const path = require('path');
//const caminhoArquivo = path.resolve(__dirname, '..', 'teste.txt');

// escrever um arquivo
// informar o caminho do arquivo, o conteúdo a ser escrito, uma flag para 
// apagar todo o conteúdo, caso exista flag: w
// informar o encode  utf8 (por padrão não é necessário)
//fs.writeFile(caminhoArquivo,'Frase 1', {flag: 'w', encoding: 'utf8'} );


// adicionar um texto ao arquivo (append), use a flag 1
//fs.writeFile(caminhoArquivo,'Frase 2', {flag: 'a', encoding: 'utf8'} );

// adcionar um texto em uma nova linha (forçar a quebra de linha) \n
//fs.writeFile(caminhoArquivo,'\nFrase 3', {flag: 'a', encoding: 'utf8'} );

module.exports = (caminho, dados) => {
    fs.writeFile(caminho, dados, { flag: 'w' });
}