var Sequelize = require("sequelize");
module.exports = function(sequelize, Sequelize) {
  var User = sequelize.define("User", {
  	typeofuser: {
      type: Sequelize.STRING
    },
  	firstname: {
      type: Sequelize.STRING
    },
    lastname: {
      type: Sequelize.STRING
    },
    profilepicture: {
      type: Sequelize.STRING
    },
    birthdate: {
      type: Sequelize.DATEONLY
    },
    gender: {
      type: Sequelize.STRING
    },
    emailaddress: {
      type: Sequelize.STRING
    },
    country: {
      type: Sequelize.STRING
    },
    school: {
      type: Sequelize.STRING
    },
    religion: {
      type: Sequelize.STRING
    },
    language: {
      type: Sequelize.STRING,
    },
    staylength: {
      type: Sequelize.STRING,
    },
    introduction: {
      type: Sequelize.STRING
    },

});

  return User;


};

  // console.log("User")
