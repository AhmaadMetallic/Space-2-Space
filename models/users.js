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
    introduction: DataTypes.STRING
  });


  return User;


};

  // console.log("User")
