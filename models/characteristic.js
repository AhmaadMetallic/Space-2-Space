module.exports = function(sequelize, DataTypes) {
  var Characteristic = sequelize.define("Characteristic", {
  	language: DataTypes.STRING,
  	religion: DataTypes.STRING,
    politics: DataTypes.STRING
    // video link
    
  });

 Characteristic.associate = function(models) {

    Characteristic.belongsTo(models.User,{
       foreignKey: {
        allowNull: false
      }
  
 
    });
};
  return Characteristic;

};