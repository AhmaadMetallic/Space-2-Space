
var db = require("../models");


module.exports = function(app) {

  app.post("/api/add", function(req,res) {
    db.Listings.create(req.body).then(function(dbPost) {
      res.json(dbPost)
    });
  });

};
