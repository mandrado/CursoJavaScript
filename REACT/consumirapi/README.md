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
1. movendo a edição para o arquivo sagas.js

# 225. Edição dos dados do usuário logado #2

# 226. Logout
Configurando o logout do usuário

# 227. Excluindo alunos
## LIGAR nosso servidor na Google Cloud para testar
`gcloud compute instances start cursojs --zone=us-central1-a`

## Iniciar a aplicação

`npm start`

## DESLIGAR nosso servidor na Google Cloud para testar
`gcloud compute instances stop cursojs --zone=us-central1-a`

# 228. Corrigindo o LOGIN_FAILURE

Em nosso arquivo reducer.js (dentro de src/store/modules/auth/reducer.js) existe o seguinte case:

```
case types.LOGIN_FAILURE: {
  const newState = { ...initialState };
  return newState;
}
```

Como estamos utilizando este case para "deslogar" os usuários, é necessário excluir a chave "Authorization" que adicionamos ao logar o usuário dos "defaults" do axios.

Para fazer isso é bastante simples:

Primeiro importe o axios;

`import axios from '../../../services/axios';`

Agora altere o case para apagar a chave "Authorization" de dentro de axios.defaults.headers. Assim:

`delete axios.defaults.headers.Authorization;`

O case completo agora ficou assim:
```
case types.LOGIN_FAILURE: {
  delete axios.defaults.headers.Authorization;
  const newState = { ...initialState };
  return newState;
}
```
Isso garante que usuários que façam login e depois logout, não permaneçam com token ativo após o logout.
# 229. Cadastro de alunos #1
# 230. Cadastro de alunos #2
# 231. Cadastro de alunos #3
# 232. Exibindo a foto do aluno
# 233. Editando a foto do aluno


## LIGAR nosso servidor na Google Cloud para testar
`gcloud compute instances start cursojs --zone=us-central1-a`

## Iniciar a aplicação
`npm start`


## DESLIGAR nosso servidor na Google Cloud para testar
`gcloud compute instances stop cursojs --zone=us-central1-a`

# 234. Deploy do React com NGINX

## LIGAR o servidor no Google Cloud Plataform
`gcloud compute instances start cursojs --zone=us-central1-a`

## Acessar o servidor na Google Cloud
`ssh -i ..\..\..\..\.ssh\cursojs seu.dominio.com`

### instruções da aula para o servidor
`mkdir react`

`cd react`

`mkdir app && mkdir repo`

`cd repo`

`git init --bare`

`cd ../app`

`git config --global user.name 'Mandrado'`

`gitconfig --global user.email 'mandrado@gmail.com'`

`git remote add origin /home/mandr/react/repo`

### instruções da aula para o desktop

Copiar a pasta do projeto (linux)
`rsync -havi --progress --exclude node_modules --exclude .git /media/mandr/cursojs/REACT/consumirapi/ consumirapi`


Na nova pasta do projeto incluir as chaves "homepage" no arquivo package.json

Enviar a pasta para o servidor git
`cd consumirapi`

`git init`

`git config user.name 'Mandrado Santos'`

`git config user.email 'mandrado@gmail.com'`

`git remote add origin `

`git remote add origin api.mandrado.com:~/react/repo`

`git add .`

`git commit -am 'Inicial'`

`git push origin master -u`


### instruções da aula para o servidor na pasta cd "react/app"

`git pull origin master`

`npm i`

`npm run build`

`cd build`

 `pwd`

 `sudo nano /etc/nginx/site-enable/react2.otaviomiranda.com.br`

### instruções que eu utilizei no servidor na pasta cd "react/app"

`ln -s ../../api/REACT/consumirapi/ consumirapi`

`cd consumirapi`

`git pull`

`npm i`

Recebi o erro:

```
npm WARN read-shrinkwrap This version of npm is compatible with lockfileVersion@1, but package-lock.json was generated for lockfileVersion@2. I'll try to do my best with it!
```
Resolvi instalando a versão mais recente do NPM no servidor

`sudo npm install -g npm@latest`

Retomando a execução dos comandos:

`npm i`

`npm run build`

`cd build`

 `pwd`

`cd /etc/nginx/sites-available/`

`sudo cp dev.mandrado.com consumirapi.com`

`sudo vim consumirapi.http`

Desabilitar o site do projeto agenda

`cd ../sites-enabled/`

Listar os arquivos e ver seus links:
`ls -la`

```
api.mandrado.com -> /etc/nginx/sites-available/api.mandrado.com
dev.mandrado.com -> /etc/nginx/sites-available/dev.mandrado.com
```

Remover o link simbólico para recriar com o novo apontamento.
`sudo unlink dev.mandrado.com`

Criar o link para o novo app:

`sudo ln -s /etc/nginx/sites-available/consumirapi.com dev.mandrado.com `

Reiniciar o serviço nginx
`sudo service nginx restart`















