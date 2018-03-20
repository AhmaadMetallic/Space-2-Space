module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
  	typeofuser: DataTypes.STRING,
  	firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    profilepicture: DataTypes.STRING,
    birthdate: DataTypes.NUMBER,
    gender: DataTypes.STRING,
    emailaddress: DataTypes.STRING,
    country: DataTypes.STRING,
    religion: DataTypes.STRING,
    language: DataTypes.STRING,
    length: DataTypes.STRING,
    intriduction: DataTypes.STRING
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
