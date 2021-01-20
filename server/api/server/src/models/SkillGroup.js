const model = (sequelize, DataTypes) => {
  const SkillGroup = sequelize.define(
    'SkillGroup',
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      }
    },
  );
 
  SkillGroup.associate = ({ Skill }) => {
   SkillGroup.hasMany(Skill, { foreignKey:'id', targetKey:'skillGroupId'});
  };
/*   Position.associate = ({ Position }) => {
   Dependent.hasMany(Position);
  }; */
 
  return SkillGroup;
};
 
module.exports = model;