module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Positions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      dependentId: {
        type: Sequelize.INTEGER,
        foreignKey: true
      },
      description: {
        type: Sequelize.STRING
      },
      code: {
        type: Sequelize.INTEGER
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
    });
  },
    
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Positions');
  }
}