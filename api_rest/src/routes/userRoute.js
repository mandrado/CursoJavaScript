import { Router } from 'express';
import userController from '../controllers/UserController';

const router = new Router();

// criando a rota para user:
router.post('/', userController.store);
router.get('/', userController.index);
router.get('/:id', userController.show);
router.put('/:id', userController.update);
router.delete('/:id', userController.delete);

export default router;

/**
 * em cada controller podemos ter até 5 métodos
 * index --> lista todos os usuários --> GET
 * store/create --> cria um novo usuário --> POST
 * delete --> apaga um usuário --> DELETE
 * show --> mostra um usuário --> GET
 * update --> atualiza um usuário --> PATCH ou PUT
 */
