module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Skills', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      skillGroupId: {
        type: Sequelize.INTEGER,
        foreignKey:true,
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
    await queryInterface.dropTable('Skills');
  }
};