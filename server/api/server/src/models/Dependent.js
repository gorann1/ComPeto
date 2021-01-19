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
   Dependent.belongsTo(Department);
  };
  Dependent.associate = ({ Position }) => {
   Dependent.hasMany(Position);
  };
 
  return Dependent;
};
 
module.exports = model;