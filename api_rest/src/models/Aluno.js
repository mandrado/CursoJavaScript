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
      // indicação dos campos e validação:
      nome: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 255],
            msg: 'Nome precisa ter entre 3 e 255 caracteres.',
          },
        },
      },
      sobrenome: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 255],
            msg: 'Sobrenome precisa ter entre 3 e 255 caracteres.',
          },
        },
      },
      email: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          isEmail: {
            msg: 'Email precisa ser válido.',
          },
        },
        unique: {
          msg: 'Email já cadastrado.',
        },
      },
      idade: {
        type: Sequelize.INTEGER,
        defaultValue: '',
        validate: {
          isInt: {
            msg: 'Idade precisa ser inteiro.',
          },
        },
      },
      peso: {
        type: Sequelize.FLOAT,
        defaultValue: '',
        validate: {
          isFloat: {
            msg: 'Peso precisa ser um número inteiro ou de ponto flutuante.',
          },
        },
      },
      altura: {
        type: Sequelize.FLOAT,
        defaultValue: '',
        validate: {
          isFloat: {
            msg: 'Altura precisa ser um número inteiro ou de ponto flutuante.',
          },
        },
      },
    }, {
      sequelize,
    });
    return this;
  }

  // relacionar o aluno com suas imagens
  static associate(models) {
    this.hasMany(models.Imagem, { foreignKey: 'id_aluno' });
  }
}
