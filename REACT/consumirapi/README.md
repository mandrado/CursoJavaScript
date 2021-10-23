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

Limpando a página de login.

criando as páginas principais.

# 219. Buscando alunos da API

## LIGAR nosso servidor na Google Cloud para testar
`gcloud compute instances start cursojs --zone=us-central1-a`

Configurar o axios para o endereço de sua api.

Configurar a tela para exibir os alunos.

## Se uma chave não existir poderá haver um erro na aplicação
Para não ocorrer o erro, vamos usar a biblioteca lodash

`npm i lodash`

# 220. Cadastrando novos usuários na aplicação
Criando formulário de cadastro do usuário e validando os dados.
instalar o pacote de validação de e-mail:

`npm i validator`

# 221. Login 1
criando o formulário de login
configurando Reducer e Saga para o login

# 222. Login 2
logar e persistir Authorization
devolver o usuário para a página que chamou o login (prevPath)

# 223. Componente Loading

na api instalamos e configuramos um delay:

https://github.com/mandrado/CursoJavaScript/commit/93bb4ae6cf6b9eedfd880d960ab33978784d383b

Criar uma pasta chamada Loading dentro de componentes
Configurar o isLoading nos arquivos:
1. Alunos,
1. login,
1. Register, e
1. src\store\modules\auth

# 224. Edição dos dados do usuário logado #1
Editando os dados dos usuários parte 1
