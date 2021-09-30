import multer from 'multer';
import multerConfig from '../config/multer';

const upload = multer(multerConfig).single('imagem');

class ImagensController {
  async store(req, res) {
    // exibir dados do arquivo no retorno do upload
    // res.json(req.file);
    return upload(req, res, (err) => {
      if (err) {
        return res.status(400).json({
          errors: [err.code],
        });
      }
      return res.json(req.file);
    });
  }
}

// exportando a classe já instanciada:
export default new ImagensController();
