/* eslint-disable import/first */
/**
 * 170. Eslint
 * Instalação do Eslint e
 * Bracket Pair Colorizer
 *
 * 172. Nodemon e Sucrase
 * 173. Estruturando o projeto
 * 174. Configurando e testando o Sequelize
 * npm i dotenv
 */
import dotenv from 'dotenv';
// eslint-disable-next-line import/first
dotenv.config();

import express from 'express';
import { resolve } from 'path';
import homeRoute from './routes/homeRoute';
import userRoute from './routes/userRoute';
import tokenRoute from './routes/tokenRoute';
import alunoRoute from './routes/alunoRoute';
import imagensRoute from './routes/imagensRoute';

// importar as configurações do banco de dados
import './database';

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    this.app.use('/imagens/', express.static(resolve(__dirname, '..', 'uploads', 'imagens')));
  }

  routes() {
    // rota para home
    this.app.use('/', homeRoute);
    // rota para User
    this.app.use('/users/', userRoute);
    // rota para o token (jwt)
    this.app.use('/tokens/', tokenRoute);
    // rota para alunos
    this.app.use('/alunos/', alunoRoute);
    // rota para imagens
    this.app.use('/imagens/', imagensRoute);
  }
}

// exportando a classe já instanciada:
export default new App().app;
