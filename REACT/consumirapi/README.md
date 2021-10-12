# 217. Copiando a base para o projeto

Localizar a pasta react-base
caso tenha entrado no diretório, volte uma pasta:

`cd ..`

Comando no Linux:

`rsync -havi --progress --exclude node_modules --exclude .git react-base/ consumirapi`

Comando no Windows:

`ROBOCOPY .\react-base\ consumirapi /E /mt:10 /R:3 /W:10 /XD node_modules .git /TEE`

Entrar no novo diretório

`cd consumirapi`

# 218. Páginas e rotas da aplicação

Instalar os pacotes básicos

`npm i`

Estar a aplicação base

`npm start`

## Limpando a página de login
