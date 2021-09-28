/**
 * em cada controller podemos ter até 5 métodos
 * index --> lista todos os usuários --> GET
 * store/create --> cria um novo usuário --> POST
 * delete --> apaga um usuário --> DELETE
 * show --> mostra um usuário --> GET
 * update --> atualiza um usuário --> PATCH ou PUT
 */

import User from '../models/User';

class UserController {
  // store ou create para criar um usuário
  async store(req, res) {
    try {
      const novoUser = await User.create(req.body);
      // em novoUser retornar apenas os campos que precisam ser exibidos
      const { id, nome, email } = novoUser;
      return res.json({
        id, nome, email, msg: 'Usuário criado com sucesso!',
      });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  // Index --> Exbie todos os usuários
  async index(req, res) {
    try {
      // em findAll enviar um atributo informando quais campos
      // precisamos que sejam exibidos
      const users = await User.findAll({ attributes: ['id', 'nome', 'email'] });
      return res.json(users);
    } catch (e) {
      return res.json('Ocorreu um erro no servidor');
    }
  }

  // Show --> exibe apenas o usuário consultado
  async show(req, res) {
    try {
      const user = await User.findByPk(req.params.id);
      // em user obter os quais campos precisamos que sejam exibidos
      const { id, nome, email } = user;
      return res.json({ id, nome, email });
    } catch (e) {
      return res.json('Ocorreu um erro no servidor');
    }
  }

  // Update --> atualiza apenas o usuário consultado
  async update(req, res) {
    try {
      /*       if (!req.params.id) {
        return res.status(400).json({
          errors: ['Id não enviado.'],
        });
      } */

      // const user = await User.findByPk(req.params.id);
      const user = await User.findByPk(req.userId);
      if (!user) {
        return res.status(400).json({
          errors: ['Usuário não existe.'],
        });
      }
      const novosDados = await user.update(req.body);
      // em novosDados retornar apenas os campos que precisam ser exibidos
      const { id, nome, email } = novosDados;
      return res.json({
        id, nome, email, msg: 'Dados atualizados com sucesso!',
      });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  // Delete --> excluir apenas o usuário consultado
  async delete(req, res) {
    try {
      /*       if (!req.params.id) {
        return res.status(400).json({
          errors: ['Id não enviado.'],
        });
      }
 */
      // const user = await User.findByPk(req.params.id);
      const user = await User.findByPk(req.userId);
      if (!user) {
        return res.status(400).json({
          errors: ['Usuário não existe.'],
        });
      }
      await user.destroy();
      // em novosDados retornar apenas os campos que precisam ser exibidos
      const { id, nome, email } = user;
      return res.json({
        id,
        nome,
        email,
        msg: 'Usuário excluído com sucesso!',
      });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

// exportando a classe já instanciada:
export default new UserController();
