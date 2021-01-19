module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('EmployeePositionPositionSkills', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      employeePosition: {
        type: Sequelize.INTEGER,
        foreignKey:true
      },
      positionSkill: {
        type: Sequelize.INTEGER,
        foreignKey:true
      },
      level: {
        type: Sequelize.INTEGER,
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
    await queryInterface.dropTable('EmployeePositionPositionSkills');
  }
};