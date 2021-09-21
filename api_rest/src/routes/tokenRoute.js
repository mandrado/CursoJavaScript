// 177. Gerando o JWT do usuário

import { Router } from 'express';
import tokenController from '../controllers/TokenController';

const router = new Router();

// criando a rota para token:
router.post('/', tokenController.store);

export default router;
