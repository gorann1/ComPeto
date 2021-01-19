module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('PositionSkills', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      positionId: {
        type: Sequelize.INTEGER,
        foreignKey: true,
      },
      skillId: {
        type: Sequelize.INTEGER,
        foreignKey: true,
      },
      levelId: {
        type: Sequelize.INTEGER,
        foreignKey: true,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    },
    {
      schema: 'koncar'                      // default: public, PostgreSQL only.
    }
    );
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('PositionSkills');
  }
};