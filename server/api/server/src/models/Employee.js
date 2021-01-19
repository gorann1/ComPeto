const model = (sequelize, DataTypes) => {
  const Employee = sequelize.define(
    'Employee',
    {
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lastName: {
        type: DataTypes.INTEGER,
      },
      gender: {
        type: DataTypes.ENUM('M', 'F')
      },
    },
  )
 
  Employee.associate = ({ Position }) => {
   Employee.belongsToMany(Position, {
     through: 'EmployeePosition',
   });
  };
/*   Position.associate = ({ Position }) => {
   Dependent.hasMany(Position);
  }; */
 
  return Employee;
};
 
module.exports = model;