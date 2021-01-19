const model = (sequelize, DataTypes) => {
  const Position = sequelize.define(
    'Position',
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      dependentId: {
        type: DataTypes.INTEGER,
        foreignKey: true,
      },
      code: {
        type: DataTypes.INTEGER,
      },
      description: {
        type: DataTypes.STRING,
      },
    },
  )
 
  Position.associate = ({ Dependent }) => {
   Position.belongsTo(Dependent);
  };
  Position.associate = ({ Employee }) => {
   Position.belongsToMany(Employee, {
     through: 'EmployeePosition'
   });
  };
  Position.associate = ({ Skill }) => {
   Position.belongsToMany(Skill, {
     through: 'PositionSkill'
   });
  };
/*   Position.associate = ({ Position }) => {
   Dependent.hasMany(Position);
  }; */
 
  return Position;
};
 
module.exports = model;