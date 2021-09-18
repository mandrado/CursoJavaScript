class HomeController {
  index(req, res) {
    res.json({
      tudoCerto: true,
    });
  }
}

// exportando a classe já instanciada:
export default new HomeController();
