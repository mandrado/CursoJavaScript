/**
 * 174. Configurando e testando o Sequelize
 * um model é referente a um dado neste caso
 * esse modulo se refere a dado "aluno"
 *
 */
import Sequelize, { Model } from 'sequelize';

export default class Aluno extends Model {
  // sequelize é a conexão com o banco de dados:
  static init(sequelize) {
    super.init({
      nome: Sequelize.STRING,
      sobrenome: Sequelize.STRING,
      email: Sequelize.STRING,
      idade: Sequelize.INTEGER,
      peso: Sequelize.FLOAT,
      altura: Sequelize.FLOAT,
    }, {
      sequelize,
    });
    return this;
  }
}
