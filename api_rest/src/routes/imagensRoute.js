import { Router } from 'express';

import imagensController from '../controllers/ImagensController';

// configurações do Multer transferidas para ImagensController.

const router = new Router();

// criando a rota para imagens:
router.post('/', imagensController.store);

export default router;
