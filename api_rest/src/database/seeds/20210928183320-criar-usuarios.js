const bcryptjs = require('bcryptjs');

module.exports = {
  up: async (queryInterface) => {
    // usar o exemplo já disponibilizado
    await queryInterface.bulkInsert(
      // alterar para a tabela de usuários e informar os dados:
      'users', [{
        nome: 'John 1',
        email: 'jhon1@teste.com',
        password_hash: await bcryptjs.hash('123456', 8),
        created_at: new Date(),
        updated_at: new Date(),
      }, {
        nome: 'John 2',
        email: 'jhon2@teste.com',
        password_hash: await bcryptjs.hash('123456', 8),
        created_at: new Date(),
        updated_at: new Date(),
      }, {
        nome: 'John 3',
        email: 'jhon3@teste.com',
        password_hash: await bcryptjs.hash('123456', 8),
        created_at: new Date(),
        updated_at: new Date(),
      }], {},
    );
  },

  down: async () => {},
};
