/**
 * 175. Criando usuários
 *
 */
import Sequelize, { Model } from 'sequelize';
import bcryptjs from 'bcryptjs';

export default class User extends Model {
  // sequelize é a conexão com o banco de dados:
  static init(sequelize) {
    super.init({
      nome: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 50],
            msg: 'Campo nome deve ter entre 3 e 50 caracteres',
          },
        },
      },
      email: {
        type: Sequelize.STRING,
        defaultValue: '',
        unique: {
          msg: 'Email á existe',
        },
        validate: {
          isEmail: {
            msg: 'E-mail inválido',
          },
        },
      },
      password_hash: {
        type: Sequelize.STRING,
        defaultValue: '',
      },
      // criar um campo senha virtual (que não irá existir na base de dados)
      password: {
        type: Sequelize.VIRTUAL,
        defaultValue: '',
        validate: {
          len: {
            args: [6, 50],
            msg: 'A senha precisa ter entre 6 e 50 caracteres',
          },
        },
      },
    }, {
      sequelize,
    });
    // um Hook antes de salvar
    this.addHook('beforeSave', async (user) => {
      // se a senha não for enviada (update), não precisa gerar o hash
      if (user.password) {
        // eslint-disable-next-line no-param-reassign
        user.password_hash = await bcryptjs.hash(user.password, 8);
      }
    });
    return this;
  }

  // 177. Gerando o JWT do usuário
  // verificando se a senha do usuário é valida
  passwordIsValid(password) {
    return bcryptjs.compare(password, this.password_hash);
  }
}
