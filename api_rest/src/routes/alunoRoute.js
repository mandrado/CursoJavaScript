import { Router } from 'express';
import alunoController from '../controllers/AlunoController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

// criando rotas para aluno:
router.get('/', alunoController.index);
router.post('/', loginRequired, alunoController.store);
router.get('/:id', alunoController.show);
router.delete('/:id', loginRequired, alunoController.delete);
router.put('/:id', loginRequired, alunoController.update);

export default router;
