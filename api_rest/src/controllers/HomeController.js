class HomeController {
  async index(req, res) {
    res.json('Index');
  }
}

// exportando a classe já instanciada:
export default new HomeController();
