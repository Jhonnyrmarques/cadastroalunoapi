module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('disciplinas', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      disciplina: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      professor_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'professores',
          key: 'id',
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
      aluno_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'alunos',
          key: 'id',
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('disciplinas');
  },
};
