# 202. Eslint, prettier e editorconfig
criando um projeto react-base para todos os demais projetos:

`npx create-react-app .`

prettier deixa seu código mais bonito, mais bem formatado.
instalar as dependências como de desenvolvimento.

`npm i eslint babel-eslint prettier eslint-config-prettier eslint-plugin-prettier -D`

# configurar o eslint com as seguintes opções:

`npx eslint --init`

```
> To check syntax, find problems, and enforce code style
> JavaScript modules (import/export)
> React
? Does your project use TypeScript? (y/N) N
? Where does your code run? Browser
> Use a popular style guide
> Airbnb: https://github.com/arbnb/javascript
> JavaScript
? Would you like to install them now with npm? (Y/n) Y
```

configurar o `eslintrc.js` e acrescentar as extenções:

```
extends: [
	'prettier',
	'prettier/react'
],
```
acima do parserOptions:

```
	parser: 'babel-eslint',
```
em plugins colocar:

```
plugins:[
	'react',
	'prettier',
	'react-hooks'
],
```
em:

```
 rules: {
	'prettier/prettier':'error',
	'react/jsx-filename-extension': 0,
	'import/prefer-default-export': 0,
	'react-hooks/rules-of-hooks': 'error',
	'react-hooks/exhaustive-deps': 'warn'
},
```
criar o arquivo .prettierrc (arquivo json)

```
{
	"singleQuote":true,
	"trailingComma": "es5"
}
```
configurar o editorconfig
precisa ter a extensão EditorConfig for VS Code
gere o arquivo com botão direito do mouse na estrutura de pasta do vscode
e clique em "Generate.editorconfig"
acresente as configurações:

`end_of_line = lf`

altere para true:

```
	trim_trailing_whitespace = true
	insert_final_newline = true
```
as demais configurações devem ser:

```
	root = true
	[*]
	indent_style = space
	indent_size = 2
	charset = utf-8
```
fechar o VS Code e abrir novamente.

configurar Settings do VS Code (engrenagem na parte inferior esquerda)
clicar no ícone para abrir o arquivo das configurações
acrescentar ao arquivo (se não existir):

```
// ESLINT
"editor.codeActionsOnSave":{
	"source.fixAll.eslint": true
}
```
# 203. Limpando o projeto
removendo diretórios e arquivos desnecessários no momento.
ativando o React Developer Tools extenção do google chrome

# 204. Styled-Components
## Components estilizados com super poderes
criar uma pasta para as páginas (login, registro, etc)
criar uma pasta para os componentes que serão compartilhados
globalmente no projeto (header, pesquisa, etc)

## criando a página de login

## instale extensão para style-Components
dentro do VSCode, pressione Ctrl+P, e entre com:

`ext install vscode-styled-components`

no terminal instale:

`npm i styled-components`

# 205. Configurando as cores

# 206. Menu da aplicação
instalando o pacote de icones:

`npm i react-icons`

# 207. React Router DOM
Responsável do roteamento da aplicação:

`npm i react-router-dom`

agora vamos utilizar os "link to" do react-router-dom em vez de links "a href"

# 208. Router e History
alterando BrowserRouter para  Router

instalando o History:

`npm i history`

# 210. MyRoute - Rota personalizada e privada
rotas privadas com checagem para login
instalar o prop-types para realizar as validações dos componentes:

`npm i prop-types`

##  Solucionando (ou não) Error: Maximum update depth exceeded.
Ao pesquisar no Google eu encontrei:

https://stackoverflow.com/questions/61010184/how-to-fix-error-maximum-update-depth-exceeded?rq=1

Então eu conclui que remover o 'exact' poderia resolver, e resolveu.

**Deixei a pergunta:**

"Professor é isso mesmo? retirar esse 'exact' vai me causar problemas lá na frente?"

# 211. React Toastify

## O que é React Toastify?
React Toastify é um pacote leve baseado na biblioteca react
que ajuda a adicionar notificações personalizadas lindamente
elaboradas para reagir ao projeto.

`npm install --save react-toastify`

configurar para 3 segundos:

`<ToastContainer autoClose={3000} />`

importar o css do Toastify Container

# 212. Configurando o Axios
utilizado para fazer requisições para nossa api_rest:

`npm i axios`

criar o arquivo chamado axios.js dentro da pasta services.
criar configuração para apontar pa a url da api_rest:

`baseURL: 'https://api.mandrado.com',`

## LIGAR nosso servidor na Google Cloud para testar
`gcloud compute instances start cursojs --zone=us-central1-a`

# teste axios ok

# 213. Redux + React
Redux cria um estado global para toda a aplicação
```
 --> Estado inicial: {
     usuario_logado: false
 }
 --> ação --> reducer --> newState = estadoAtual --> newState
```
instalar redux e react-redux:

`npm i redux react-redux`

criar a pasta store (tudo que for do redux, guarde aqui.)
criar o arquivo index.js

## DESLIGAR nosso servidor na Google Cloud
`gcloud compute instances stop cursojs --zone=us-central1-a`

# 214. Separando Actions e Reducers
# 215. Redux Saga
Redux Saga irá funcionar como um Middleware
```
Redux: ação --> reducer --> newState
Redux Saga: ação (request) --> saga --> reducer --> success/fail
```
`npm i redux-saga`

# 216. Redux Persist
Redux Persist pega seu objeto de estado Redux e o salva no armazenamento persistente. Em seguida, na inicialização do aplicativo, ele recupera esse estado persistente e o salva de volta para redux.

Salva os dados após o login do usuário, como o token do usuário,  para que possa ser recuperado em outro momento.

`npm i redux-persist`

salvar os dados necessários no local storage do navegador




