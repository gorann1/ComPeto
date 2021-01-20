const model = (sequelize, DataTypes) => {
  const PositionSkill = sequelize.define(
    'PositionSkill',
    {
      positionId: {
        type: DataTypes.INTEGER,
        foreignKey:true,
      },
      skillId: {
        type: DataTypes.INTEGER,
        foreignKey:true,
      },
      levelId: {
        type: DataTypes.INTEGER,
        foreignKey:true,
      }
    },
  );
  PositionSkill.associate = ({ Position }) => {
    PositionSkill.belongsTo(Position, { foreignKey: 'positionId', target: 'id'});
   };

  PositionSkill.associate = ({ Skill }) => {
    PositionSkill.belongsTo(Skill, { foreignKey: 'skillId', target: 'id'});
   };

  PositionSkill.associate = ({ Level }) => {
    PositionSkill.belongsTo(Level, { foreignKey: 'levelId', target: 'id'});
   };

  PositionSkill.associate = ({ EmployeePosition }) => {
    PositionSkill.belongsToMany(EmployeePosition, {
      through: 'EmployeePositionPositionSkill'
    });
  };
/*   Position.associate = ({ Position }) => {
   Dependent.hasMany(Position);
  }; */
 
  return PositionSkill;
};
 
module.exports = model;