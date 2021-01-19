const model = (sequelize, DataTypes) => {
  const PositionSkill = sequelize.define(
    'PositionSkill',
    {
      PositionId: {
        type: DataTypes.INTEGER,
        foreignKey:true,
      },
      SkillId: {
        type: DataTypes.INTEGER,
        foreignKey:true,
      },
      LevelId: {
        type: DataTypes.INTEGER,
        foreignKey:true,
      }
    },
  );
  PositionSkill.associate = ({ Position }) => {
    PositionSkill.belongsTo(Position);
   };

  PositionSkill.associate = ({ Skill }) => {
    PositionSkill.belongsTo(Skill);
   };

  PositionSkill.associate = ({ Level }) => {
    PositionSkill.belongsTo(Level);
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