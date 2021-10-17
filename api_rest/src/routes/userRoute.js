import { Router } from 'express';
import userController from '../controllers/UserController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

// criando a rota para user:
// -- esses dois abaixo não precisam existir em um sistema real
router.get('/', loginRequired, userController.index); // Lista todos os usuários
router.get('/:id', loginRequired, userController.show); // Lista usuário

// precisamos de uma página para criar usuários com acesso a usuários não logados:
router.post('/', userController.store);
// precisamos de uma páigna para atualisar seus dados, jamais de outros
// usuários, com login requerido
router.put('/', loginRequired, userController.update);
// usuário não pode deletar outros usuários
// apenas seus dados, com login requerido.
router.delete('/:id', loginRequired, userController.delete);

export default router;

/**
 * em cada controller podemos ter até 5 métodos
 * index --> lista todos os usuários --> GET
 * store/create --> cria um novo usuário --> POST
 * delete --> apaga um usuário --> DELETE
 * show --> mostra um usuário --> GET
 * update --> atualiza um usuário --> PATCH ou PUT
 */
