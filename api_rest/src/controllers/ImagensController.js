import multer from 'multer';
import multerConfig from '../config/multer';
import Imagem from '../models/Imagem';

const upload = multer(multerConfig).single('imagem');

class ImagensController {
  store(req, res) {
    // exibir dados do arquivo no retorno do upload
    // res.json(req.file);
    return upload(req, res, async (err) => {
      if (err) {
        return res.status(400).json({
          errors: [err.code],
        });
      }
      const { originalname, filename } = req.file;
      // eslint-disable-next-line camelcase
      const { id_aluno } = req.body;

      const imagem = await Imagem.create({ originalname, filename, id_aluno });

      return res.json(imagem);
    });
  }
}

// exportando a classe já instanciada:
export default new ImagensController();
