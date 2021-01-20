const model = (sequelize, DataTypes) => {
  const Center = sequelize.define(
    'Center',
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true
        }
      },
      code: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      description: {
        type: DataTypes.STRING,
      },
    },
  )
 
  Center.associate = ({ Department }) => {
   Center.hasMany(Department, {foreignKey:'id', targetKey: 'centerId'});
  };
  
  Center.schema("koncar");
  return Center;
};
 
module.exports = model;
