import Aluno from '../models/Aluno';
import Imagem from '../models/Imagem';

class AlunoController {
  async index(req, res) {
    // exibir todos os alunos da base de dados
    const alunos = await Aluno.findAll({
      attributes: ['id', 'nome', 'sobrenome', 'email', 'idade', 'peso', 'altura'],
      order: [['id', 'DESC'], [Imagem, 'id', 'DESC']],
      // exibindo a imagem relacionada ao aluno
      include: {
        model: Imagem,
        attributes: ['originalname', 'filename', 'url'],
      },
    });
    res.json(alunos);
  }

  async store(req, res) {
    // cadastrar o aluno
    try {
      const aluno = await Aluno.create(req.body);
      return res.json({ aluno, msg: 'Aluno cadastrado!' });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async show(req, res) {
    // exibir dados de um aluno
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({
          errors: ['Faltando ID'],
        });
      }
      const aluno = await Aluno.findByPk(id, {
        attributes: ['id', 'nome', 'sobrenome', 'email', 'idade', 'peso', 'altura'],
        order: [['id', 'DESC'], [Imagem, 'id', 'DESC']],
        // exibindo a imagem relacionada ao aluno
        include: {
          model: Imagem,
          attributes: ['originalname', 'filename', 'url'],
        },
      });
      if (!aluno) {
        return res.status(400).json({
          errors: ['Aluno não existe'],
        });
      }
      return res.json(aluno);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async delete(req, res) {
    // excluir o cadatro de um aluno
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({
          errors: ['Faltando ID'],
        });
      }
      const aluno = await Aluno.findByPk(id);
      if (!aluno) {
        return res.status(400).json({
          errors: ['Aluno não existe'],
        });
      }

      await aluno.destroy();
      return res.json({ aluno, msg: 'Aluno excluído!' });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async update(req, res) {
    // atualizar dados de um aluno
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({
          errors: ['Faltando ID'],
        });
      }
      const aluno = await Aluno.findByPk(id);
      if (!aluno) {
        return res.status(400).json({
          errors: ['Aluno não existe'],
        });
      }
      const alunoAtualizado = await aluno.update(req.body);
      return res.json({ alunoAtualizado, msg: 'Aluno atualizado.' });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

// exportando a classe já instanciada:
export default new AlunoController();
