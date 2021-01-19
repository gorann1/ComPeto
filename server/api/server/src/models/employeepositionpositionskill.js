const model = (sequelize, DataTypes) => {
  const EmployeePositionPositionSkill = sequelize.define(
    'EmployeePositionPositionSkill',
    {
      employeePositionId: {
        type: DataTypes.STRING,
        foreignKey:true,
      },
      positionSkillId: {
        type: DataTypes.STRING,
        foreignKey:true
      },
      levelId: {
        type: DataTypes.INTEGER,
        foreignKey:true
      }
    },
  );
  EmployeePositionPositionSkill.associate = ({ Employee }) => {
    EmployeePositionPositionSkill.belongsTo(Employee);
   };

  EmployeePositionPositionSkill.associate = ({ PositionSkill }) => {
    EmployeePositionPositionSkill.belongsTo(PositionSkill);
   };
  EmployeePositionPositionSkill.associate = ({ Level }) => {
    EmployeePositionPositionSkill.belongsTo(Level);
   };
;
  
 
 /*   Position.associate = ({ Position }) => {
   Dependent.hasMany(Position);
  }; */
 
  return EmployeePositionPositionSkill;
};
 
module.exports = model;