const model = (sequelize, DataTypes) => {
  const Skill = sequelize.define(
    'Skill',
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      SkillGroupId: {
        type: DataTypes.INTEGER,
        foreignKey:true,
      }
    },
  );
 
  Skill.associate = ({ SkillGroup }) => {
   Skill.belongsTo(SkillGroup);
  };
  Skill.associate = ({ Position }) => {
    Skill.belongsToMany(Position, {
      through: 'PositionSkill'
    });
  };
/*   Position.associate = ({ Position }) => {
   Dependent.hasMany(Position);
  }; */
 
  return Skill;
};
 
module.exports = model;