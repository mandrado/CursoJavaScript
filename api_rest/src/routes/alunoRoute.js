import { Router } from 'express';
import alunoController from '../controllers/AlunoController';

const router = new Router();

// criando a rota para aluno:
router.get('/', alunoController.index);

export default router;
