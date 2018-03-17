module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
  	firstname: DataTypes.STRING,
  	lastname: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  });

 User.associate = function(models) {
   
    User.hasMany(models.Listings, {
      onDelete: "cascade"
    });

  	User.hasMany(models.Characteristic, {
      onDelete: "cascade"
    });

};
  return User;


};

  // console.log("User")
