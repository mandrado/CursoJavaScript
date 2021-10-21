# 170. Eslint

`npm init -y`

`npx eslint --init`

## escolha
## Need to install the following packages:
To check syntax, find problems, and enforce code style

## What type of modules does your project use? ...
JavaScript modules (import/export)

## ? Which framework does your project use? ...
None of these

## ? Does your project use TypeScript? » No

## ? Where does your code run? ...  (Press <space> to select, <a> to toggle all, <i> to invert selection)
  Browser
√ Node

## ? How would you like to define a style for your project? ..
> Use a popular style guide
  Answer questions about your style
  Inspect your JavaScript file(s)

## ? Which style guide do you want to follow? ...
> Airbnb: https://github.com/airbnb/javascript
  Standard: https://github.com/standard/standard
  Google: https://github.com/google/eslint-config-google
  XO: https://github.com/xojs/eslint-config-xo


## ? What format do you want your config file to be in? ...
> JavaScript
  YAML
  JSON

## eslint-config-airbnb-base@latest eslint@^5.16.0 || ^6.8.0 || ^7.2.0 eslint-plugin-import@^2.22.1
? Would you like to install them now with npm? » Yes


# 172. Nodemon e Sucrase

Nodemon ->
Sucrase -> permite utilizar import/export dos modulos do JavaScript ES6

`npm i nodemon sucrase --save-dev`

# 173. Estruturando o projeto

`npm i express`

# 174. Configurando e testando o Sequelize
`npm i dotenv`

`npm i sequelize mariadb`

`npm i -D sequelize-cli` (instalando como dependência de desenvolvimento)

## iniciou o servidor no Google Cloud Plataform
`gcloud compute instances start cursojs`

## configurou o Sequelize
criou o schema escola do banco de dados MariaDB
criou o arquivo que prepara os campos da tabela alunos

`npx Sequelize migration:create --name=alunos`

criou os campos data tabela no arquivo criado pelo sequelize executa novamente o sequelize para em fim executar a migração dos os campos para o banco de dados

`npx sequelize db:migrate`

## DESLIGAR o servidor no Google Cloud Plataform
`gcloud compute instances stop cursojs`

# 175. Criando usuários
## LIGAR o servidor no Google Cloud Plataform
`gcloud compute instances start cursojs`

`npx sequelize migration:create --name=users`

cria os campos no arquivo criado para users
executa a migração da nova tabela para o banco de dados

`npx sequelize db:migrate`

se algo ocorrer de errado, a ação pode ser desfeita com undo

`npx sequelize db:migrate:undo`

criar as validações dos campos no arquivo models/User

## instala o bcryptjs para criar o hash das senhas
`npm i bcryptjs`

## DESLIGAR o servidor no Google Cloud Plataform
`gcloud compute instances stop cursojs`

# 176. CRUD de usuários
## LIGAR o servidor no Google Cloud Plataform
`gcloud compute instances start cursojs`

`npm run dev`

## DESLIGAR o servidor no Google Cloud Plataform
`gcloud compute instances stop cursojs --zone=us-central1-a`

# 177. Gerando o JWT do usuário
O JSON Web Token é um padrão da Internet para a criação de dados com assinatura opcional e/ou criptografia cujo payload contém o JSON que afirma algum número de declarações. Os tokens são assinados usando um segredo privado ou uma chave pública/privada

`npm i jsonwebtoken`

## LIGAR o servidor no Google Cloud Plataform
`gcloud compute instances start cursojs --zone=us-central1-a`

`npm run dev`

## DESLIGAR o servidor no Google Cloud Plataform
`gcloud compute instances stop cursojs --zone=us-central1-a`

# 178. Middleware de verificação de login do JWT

## Duas formas de utilizar o Token
1. Auth -> escolha Bearer Token e em TOKEN coloque o token gerando
2. Header -> no primeiro campo informe "authorization" em value coloque Baerer, de um espaço e coloque o token.

## LIGAR o servidor no Google Cloud Plataform
`gcloud compute instances start cursojs --zone=us-central1-a`

`npm run dev`

# 179. Correções de segurança para usuários

Removendo coisas que não precisam existir em um sistema real precisamos de uma página para criar usuários com acesso a usuários não logados:
precisamos de uma página para atualisar os dados do usuário usuário não pode deletar outros usuários, apenas seus dados chegar na base se o id e email ainda correspondem ao mesmo usuário

## DESLIGAR o servidor no Google Cloud Plataform
`gcloud compute instances stop cursojs --zone=us-central1-a`

# 180. Criando seeds
as vezes precisamos gerar dados aleatóriamente, como por exemplo criar vários alunos para realizar testes

## criar vários usuários
`npx sequelize seed:generate --name criar-usuarios`

Editar o arquivo gerado pelo sequelize.

rodar o servidor:

`npm run dev`

Em outro terminal, pedir para o sequelize executar o arquivo que cria usuários

`npx sequelize db:seed:all`

# 181. Rotas de alunos
## Criar o cadastro de alunos (CRUD)

Os dados dos alunos estão sendo repetidos, precisamos validar o e-mail para ser único

`npx sequelize migration:create --name=mudar-email-aluno-unique`

Editar uma tabela para mudar o tipo de um campo para ser único.

`npx sequelize db:migrate`

# 182. CRUD de alunos
1. Criando a indicação dos campos e validação no arquivo models\Aluno
2. criando as rotas no arquivo routes\alunoRoute
3. criando o acesso aos dados em controller\alunoController

# 182. Restringindo acesso ao cadastro. habilitando Bearer Token

# 183. Upload de arquivos

`npm i multer`

1. Criar as rotas para receber arquivos (imagens)
1. Criar o controller, atualizar o app.js
1. Configurar o insommia: criar uma pasta, uma
1. requisição tipo post para receber um JSON Multipart
1. Criar uma chave com o nome "imagem" e o valor do tipo "File"
1. Criar o arquivo de configuração multer.js

`npm run dev`

## fazer upload do arquivo.

# 184. Tratando os arquivos enviados

## LIGAR o servidor no Google Cloud Plataform
`gcloud compute instances start cursojs --zone=us-central1-a`

`npm run dev`

## recebendo apenas arquivos PNG ou JPEG


# 185. Salvando a foto na base de dados
requerer login para salvar imagens.
Criar campo no banco de dados para salvar imagens.

`npx sequelize migration:create --name=criar-tabela-imagens`

edita o arquivo para criar a nova tabela com uma chave estrangeira apontando para a tabela alunos.

`npx sequelize db:migrate`

## salvando imagens na tabela.

# 186. Listando alunos com suas fotos

# 187. Arquivos estáticos
Cria URL para a pasta de arquivos das imagens

# 188. Deploy da nossa API
Certifique-se se o servidor está rodando.

`gcloud compute instances start cursojs --zone=us-central1-a`

Criar a build do projeto para enviar ele para a produção.
Editar o arquivo package.json e incluir o scripts

```
  "build": "sucrase ./src -d ./dist --transforms imports"
    "start": "node dist/server.js",
```
## transferir as configurações de URL e PORTA para o arquivo
.env

`npm run build`

`npm run start`

## atualize seus arquivos com o github.

## Acessar o servidor na Google Cloud

`ssh -i ..\..\..\.ssh\cursojs seu.dominio.com`

## Criar o diretório api`
```
mkdir api
cd api
```

## clonar somente o diretório do projeto api-rest
`git clone -n https://github.com/mandrado/CursoJavaScript.git .`

`git checkout HEAD api_rest`

`cd api_rest`

## baixar atualizações do api_rest
`git pull`

## criar os arquivos e diretórios ignorados pelo git
`mkdir upload`
`mkdir uploads/imagens`

## recriar o arquivo .env
`vim .env`

## alterar o endereço do banco de dados, que agora é localhost
`DATABASE_HOST=localhost`

## testando a aplicação
`npm i`

## criar o build dentro do servidor
`npm run build`

`npm start`

## cancele o teste e vamos rodar com pm2
para rodar a aplicação com servidor de produção
`pm2 start /home/mandr/api/api_rest/dist/server.js --name=api`

## listar o que está rodando no servidor com pm2
`pm2 ls`

## salvar lista do que está rodando no servidor com pm2
`pm2 save`

## para testar se está rodando (se aparecer "index" está ok)
`curl http://localhost:3001`


## fazer o redirecionamento de porta 80 para 3001 com nginx

`cd /etc/nginx/sites-available/`

`sudo cp dev.mandrado.com api.mandrado.com`

`sudo vim api.mandrado.com`

## substituir a url endereço aquivo pela nova
`:%s/dev.mandrado.com/api.mandrado.com/g`

## alterar a porta para 3001
`:wq`


## criar o link simbólico para o novo arquivo na pasta sites-enabled:
`cd ../sites-enabled`

`sudo ln -s /etc/nginx/sites-available/api.mandrado.com api.mandrado.com`

## parar o servidor nginx
`sudo systemctl stop nginx`

## gerar o certificado ssl
`sudo certbot certonly --standalone -d api.mandrado.com`

### recebi o erro:
```
Failed authorization procedure. api.mandrado.com (http-01): urn:ietf:params:acme:error:dns :: DNS problem:
SERVFAIL looking up A for api.mandrado.com - the domain's nameservers may be malfunctioning
```
após ir no site https://access.enom.com/domainmain.aspx
Remover as configurações de "DNS Settings" que apontavam para o google (ns-cloud-x?.googledomains.com), voltando para as
configurações padrão
crie o redirecionamento para o novo subdominio adicionando

```
A (Adress) --> ip do Google cloud
CNAME (Alias) --> do Google cloud
```

## Tente novamente. Agora funcionou!

retorne as configurações do  "DNS Settings" para apontar para o Google Cloud

agora que o certificado está salvo e apontando para a pasta que foi
configurada no nginx (/etc/nginx/sites-available/api.mandrado.com)

necessário criar uma nova zona no Google Cloud para o subdominio api.mandrado.com
e adicionar as configurações de dns para o provedor do domimino:
https://www.youtube.com/watch?v=eXtqqofrhOo


## inicie o nginx
`sudo systemctl start nginx`

## configurar o nginx para aceitar tamanhos maiores de imagens
`sudo vim /etc/nginx/nginx.conf`

## crescentar dentro de
```
http {

  client_max_body_size 10M;

}
```
## salve e saia
`:wq!`

## reinicie o nginx
`sudo systemctl restart nginx`

## corrigindo o endereço de upload da imagem
## fazer a build novamente

`npm run build`

sua pasta de distribuição não sobe junto com seu git commit.
então terá que fazer build no servidor novamente.

```
git add
git commit -m "188. Deploy da API corrigindo o endereço de upload"
git push
```
## entre no servidor de produção e rode os comandos

`cd api/api_rest`

`git pull`

`npm run build`

`pm2 restart api`

# 201. Modificações na API Rest
instalar cors e helmet
`npm i cors helmet`

configurar cors para as regras de acesso a api

configurar para que além de retornar o token
retornar também o nome do usuário.

## publicar as alterações no servidor de produção.
```
git add .
git commit -m 'Modificações na API Rest, cors, helmet e token'
git push
```
## LIGAR o servidor no Google Cloud Plataform
`gcloud compute instances start cursojs --zone=us-central1-a`

## Acessar o servidor na Google Cloud
`ssh -i ..\..\..\.ssh\cursojs seu.dominio.com`

`cd api`

`cd api_rest`

## baixar atualizações do api_rest
`git pull`

## instalar os novos pacotes
`npm i`

## criar o build dentro do servidor
`npm run build`

## realizar o teste:
`npm start`

cancele o teste e vamos rodar com pm2

## para rodar a aplicação com servidor de produção
`pm2 start /home/mandr/api/api_rest/dist/server.js --name=api`

## listar o que está rodando no servidor com pm2
`pm2 ls`

## reiniciar a api que está rodando com pm2
`pm2 restart api`

## DESLIGAR o servidor no Google Cloud Plataform
`gcloud compute instances stop cursojs --zone=us-central1-a`

# 220. Cadastrando novos usuários na aplicação
Liberado rota de registro de novo usuário
convertendo arquivo de anotações em readme.md

# 223. Componente Loading
na api instalamos e configuramos um delay:

`npm i express-delay`

No arquivo app.js incluimos um delay de 2 segundos:

```
import delay from 'express-delay';

middlewares(){
  ...
  this.app.use(delay(2000))
  ...
}
```
