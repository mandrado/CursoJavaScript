import { Router } from 'express';
import multer from 'multer';

import multerConfig from '../config/multer';
import imagensController from '../controllers/ImagensController';

// passar as configurações do Multer para a variável de upload
const upload = multer(multerConfig);

const router = new Router();

// criando a rota para imagens:
router.post('/', upload.single('imagem'), imagensController.store);

export default router;
