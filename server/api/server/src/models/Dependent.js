const model = (sequelize, DataTypes) => {
  const Dependent = sequelize.define(
    'Dependent',
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      code: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      departmentId: {
        type: DataTypes.INTEGER,
        foreignKey: true,
      },
      description: {
        type: DataTypes.STRING,
      },
    },
  );
 
  Dependent.associate = ({ Department }) => {
   Dependent.belongsTo(Department, { foreignKey:'departmentId', targetKey:'id'});
  };
  Dependent.associate = ({ Position }) => {
   Dependent.hasMany(Position, { foreignKey:'id', targetKey:'dependentId'});
  };
 
  return Dependent;
};
 
module.exports = model;