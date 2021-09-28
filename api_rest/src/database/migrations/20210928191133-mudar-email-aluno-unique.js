module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Editar uma tabela para mudar o tipo de um campo para ser único.
     *
     */
    await queryInterface.changeColumn(
      'alunos',
      'email',
      {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
    );
  },

  down: async () => {},
};
