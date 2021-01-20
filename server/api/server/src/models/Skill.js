const model = (sequelize, DataTypes) => {
  const Skill = sequelize.define(
    'Skill',
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      skillGroupId: {
        type: DataTypes.INTEGER,
        foreignKey:true,
      }
    },
  );
 
  Skill.associate = ({ SkillGroup }) => {
   Skill.belongsTo(SkillGroup, { foreignKey:'skillGroupId', target: 'id'});
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