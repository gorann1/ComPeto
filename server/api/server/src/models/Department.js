const model = (sequelize, DataTypes) => {
  const Department = sequelize.define(
    'Department',
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
      centerId: {
        type: DataTypes.INTEGER,
        foreignKey:true,
      },

      description: {
        type: DataTypes.STRING,
      },
    },
  );

  Department.associate = ({ Center }) => {
    Department.belongsTo(Center,{foreignKey: 'centerId', targetKey: 'id'});
   };

  Department.associate = ({ Dependent }) => {
   Department.hasMany(Dependent, {foreignKey: 'id', targetKey: 'departmentId'});
  };
  
  Department.schema("koncar");
  return Department;
};
 
module.exports = model;
