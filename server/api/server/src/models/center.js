module.exports = (sequelize, DataTypes) => {
  const Center = sequelize.define('Center', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    code: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
/*   Center.associate = function(models) {
    Center.hasMany(models.Department, {
      foreignKey: 'company_id',
      as: 'branches'
    });
  }; */
  Center.schema("koncar");
  return Center;
};