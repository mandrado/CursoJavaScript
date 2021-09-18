/**
 * 170. Eslint
 * Instalação do Eslint e
 * Bracket Pair Colorizer
 *
 * 172. Nodemon e Sucrase
 * 173. Estruturando o projeto
 */

import express from 'express';
import homeRoute from './src/routes/homeRoute';

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
