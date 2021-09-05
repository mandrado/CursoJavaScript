/**
 * 128. Listando arquivos com FS e Recursão mútua
 * 
 */

const fs = require('fs').promises;
const path = require('path');

// leitura de arquivos diretórios de forma assincrona

//fs.readdir('.')
/* fs.readdir(path.resolve(__dirname))
    .then(diretorios => console.log(diretorios))
    .catch(e => console.log(e)); */

// pegar o caminho e os arquivos:
async function readdir(rootDir) {
    rootDir = rootDir || path.resolve(__dirname);
    const files = await fs.readdir(rootDir);
    walk(files, rootDir);
}

// listar os arquivos encontrados dentro do diritório.
/* function walk(files) {
    for (let file of files) {
        console.log(file);
    }
} */

// listar os arquivos encontrados dentro do diritório e dos subdiretórios.
/* async function walk(files, rootDir) {
    // obter o nome final do arquivo
    for (let file of files) {
        // compor o caminho completo do diretório onde está cada arquivo
        const fileFullPath = path.resolve(rootDir, file);
        // pegar se o arquivo é um diretório ou um arquivo
        const stats = await fs.stat(fileFullPath);
        // isDirectory() irá exibir true ou false para o diretorio:
        console.log(file, stats.isDirectory());
    }
} */

// listar os arquivos encontrados dentro do diritório e dos subdiretórios.
async function walk(files, rootDir) {
    // obter o nome final do arquivo
    for (let file of files) {
        // compor o caminho completo do diretório onde está cada arquivo
        const fileFullPath = path.resolve(rootDir, file);
        // pegar se o arquivo é um diretório ou um arquivo
        const stats = await fs.stat(fileFullPath);
   
        // não listar aquivos indesejados
        // se .git for localizado, continue para o próximo
   
        if (/\.git/g.test(fileFullPath)) continue;
        // não listar arquivos do diretório node_modules
        if (/node_modules/g.test(fileFullPath)) continue;
   
   
        // isDirectory() irá exibir true ou false para o diretorio:
        
        if (stats.isDirectory()) {
            // se for um diretório, envie o caminho completo para o 
            // readdir entrar na pasta e listar os arquivos
            readdir(fileFullPath);
            // continue para o inicio do laço for
            continue;
        }

        // listar somente os arquivos com extensão .css
        //if (!/\.css$/g.test(fileFullPath)) continue;

        
        // listar somente os arquivos com extensão .css e html
        if (
            !/\.css$/g.test(fileFullPath) && !/\.html$/g.test(fileFullPath) 
        ) continue;

        //console.log(file, stats.isDirectory());
        //listar o caminho completo do arquivo:
        console.log(fileFullPath);
    }
}
//readdir();

// listar todas as pastas do caminho fornecido

readdir('c:/\Users/\mandr/\src_dev/\CursoJavaScript')



