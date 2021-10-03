/**
 * 185. Salvando a imagem na base de dados
 *
 */
import Sequelize, { Model } from 'sequelize';
import appConfig from '../config/appConfig';

export default class Imagem extends Model {
  // sequelize é a conexão com o banco de dados:
  static init(sequelize) {
    super.init({
      // indicação dos campos e validação:
      originalname: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          notEmpty: {
            msg: 'Erro ao ler o nome do arquivo.',
          },
        },
      },
      filename: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          notEmpty: {
            msg: 'Erro ao ler o nome do arquivo.',
          },
        },
      },
      url: {
        type: Sequelize.VIRTUAL,
        get() {
          return `${appConfig.urlprod}/imagens/${this.getDataValue('filename')}`;
        },
      },
    }, {
      sequelize,
      tableName: 'imagens',
    });
    return this;
  }

  // 1ª maneira de relacionar a tabela alunos com a tabela imagens
  static associate(models) {
    this.belongsTo(models.Aluno, { foreignKey: 'id_aluno' });
  }
}
