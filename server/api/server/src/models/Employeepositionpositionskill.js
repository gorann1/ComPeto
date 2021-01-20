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
  EmployeePositionPositionSkill.associate = ({ EmployeePosition }) => {
    EmployeePositionPositionSkill.belongsTo(EmployeePosition, {foreignKey:'employeePosition', targetKey:'id'});
   };

  EmployeePositionPositionSkill.associate = ({ PositionSkill }) => {
    EmployeePositionPositionSkill.belongsTo(PositionSkill, {foreignKey:'positionSkill', targetKey:'id'});
   };
  EmployeePositionPositionSkill.associate = ({ Level }) => {
    EmployeePositionPositionSkill.belongsTo(Level, { foreignKey:'levelId', targetKey:'id'});
   };
;
  
 
 /*   Position.associate = ({ Position }) => {
   Dependent.hasMany(Position);
  }; */
 
  return EmployeePositionPositionSkill;
};
 
module.exports = model;