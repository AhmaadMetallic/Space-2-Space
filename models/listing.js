module.exports = function(sequelize, DataTypes) {
  var Listings = sequelize.define("Listings", {
  	language: DataTypes.STRING,
  	religion: DataTypes.STRING,
    politics: DataTypes.STRING,

    // video link
    
  });

 Listings.associate = function(models) {
   
    Listings.belongsTo(models.User,{
       foreignKey: {
        allowNull: false
      }
  
 
    });
  };
  return Listings;


};