module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('EmployeePositions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      employeeId: {
        type: Sequelize.INTEGER,
        foreignKey:true
      },
      positionId: {
        type: Sequelize.STRING,
        foreignKey:true
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
    await queryInterface.dropTable('EmployeePositions');
  }
};