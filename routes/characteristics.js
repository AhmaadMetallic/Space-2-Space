module.exports = function(sequelize, DataTypes) {
  var Characteristic = sequelize.define("User", {
  	language: DataTypes.STRING,
  	religion: DataTypes.STRING,
    politics: DataTypes.STRING,
    // video link
    
  });

 Characteristic.associate = function(models) {
    // Associating Author with Posts
    // When an Author is deleted, also delete any associated Posts
    User.belongsTo(models.User,{
       foreignKey: {
        allowNull: false
      }
  };
 
    });

  return Characteristic;
};