import Aluno from '../models/Aluno';

class AlunoController {
  async index(req, res) {
    // selecionar todos os alunos da base de dados
    const alunos = await Aluno.findAll();
    res.json(alunos);
  }
}

// exportando a classe já instanciada:
export default new AlunoController();
