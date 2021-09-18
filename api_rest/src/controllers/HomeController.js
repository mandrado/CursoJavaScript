import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'Mandrado',
      sobrenome: 'Santos',
      email: 'mandrado@gmail.com',
      idade: 45,
      peso: 85,
      altura: 1.74,
    });
    res.json(novoAluno);
  }
}

// exportando a classe já instanciada:
export default new HomeController();
