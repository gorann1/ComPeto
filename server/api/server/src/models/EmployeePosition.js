const model = (sequelize, DataTypes) => {
  const EmployeePosition = sequelize.define(
    'EmployeePosition',
    {
      employeeId: {
        type: DataTypes.STRING,
        foreignKey:true,
      },
      positionId: {
        type: DataTypes.STRING,
        foreignKey:true
      },
      datestart: {
        type: DataTypes.DATE,
      },
      dateend: {
        type: DataTypes.DATE,
      }

    },
  );
  EmployeePosition.associate = ({ Employee }) => {
    EmployeePosition.belongsTo(Employee, {foreignKey:'employeeId', targetKey: 'id'});
   };

  EmployeePosition.associate = ({ Position }) => {
    EmployeePosition.belongsTo(Position, {foreignKey:'positionId', targetKey: 'id'});
   };

  EmployeePosition.associate = ({ PositionSkill }) => {
    EmployeePosition.belongsToMany(PositionSkill, {
      through: 'EmployeePositionPositionSkill'
    });
  };
  
 
 /*   Position.associate = ({ Position }) => {
   Dependent.hasMany(Position);
  }; */
 
  return EmployeePosition;
};
 
module.exports = model;