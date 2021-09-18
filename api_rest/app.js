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
import homeRoute from './src/routes/homeRoute';

// importar as configurações do banco de dados
import './src/database';

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
  }

  routes() {
    // rota para home
    this.app.use('/', homeRoute);
  }
}

// exportando a classe já instanciada:
export default new App().app;
