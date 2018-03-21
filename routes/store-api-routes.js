
var db = require("../models");


module.exports = function(app) {

  app.post("/api/add", function(req, res) {
  console.log(req.body);
  db.User.create({
    typeofuser: req.body.userType,
  	firstname: req.body.firstName,
    lastname: req.body.lastName,
    profilepicture: req.body.profilePic,
    birthdate: req.body.birthdate,
    // gender: req.body.
    emailaddress: req.body.emailAddress,
    country: req.body.country,
    religion: req.body.religion,
    language: req.body.languages,
    length: req.body.lengthOfstay,
    introduction: req.body.introduction
  })
  .then(function(dbUser) {
    res.json(dbUser);
  });
});

  app.get("/api/users", function(req, res) {
    var query = {};
    if (req.query.userName) {
      query.userName = req.query.userName;
    }
    db.User.findAll({
      where: query,
      include: [db.userName]
    }).then(function(dbUser) {
      res.json(dbUser);
    });
  });

};
