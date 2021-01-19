const model = (sequelize, DataTypes) => {
  const Level = sequelize.define(
    'Level',
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      }
    },
  )
 
  Level.associate = ({ PositionSkill }) => {
   Level.belongsToMany(PositionSkill, {
     through: 'EmployeePositionPositionSkill',
   });
  };
/*   Position.associate = ({ Position }) => {
   Dependent.hasMany(Position);
  }; */
 
  return Level;
};
 
module.exports = model;