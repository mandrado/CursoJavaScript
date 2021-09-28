import { Router } from 'express';
import alunoController from '../controllers/AlunoController';

const router = new Router();

// criando rotas para aluno:
router.get('/', alunoController.index);
router.post('/', alunoController.store);
router.get('/:id', alunoController.show);
router.delete('/:id', alunoController.delete);
router.put('/:id', alunoController.update);

export default router;
