class ImagensController {
  async store(req, res) {
    // exibir dados do arquivo no retorno do upload
    res.json(req.file);
  }
}

// exportando a classe já instanciada:
export default new ImagensController();
