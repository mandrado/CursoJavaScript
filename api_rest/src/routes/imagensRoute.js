import { Router } from 'express';

import imagensController from '../controllers/ImagensController';
import loginRequired from '../middlewares/loginRequired';

// configurações do Multer transferidas para ImagensController.

const router = new Router();

// criando a rota para imagens (requerendo login para enviar imagens):
router.post('/', loginRequired, imagensController.store);

export default router;
