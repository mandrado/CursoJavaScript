import multer from 'multer';
import { extname, resolve } from 'path';

const aleatorio = () => Math.floor(Math.random() * 1000 + 1000);

export default {
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, resolve(__dirname, '..', '..', 'uploads'));
    },
    filename: (req, file, cb) => {
      // tentei obter o id do usuário + data do upload + numero aleatório + extensão do arquivo.
      cb(null, `${req.UserId}_${Date.now()}_${aleatorio()}${extname(file.originalname)}`);
    },
  }),
};
