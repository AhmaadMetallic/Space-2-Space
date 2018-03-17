// this file will provide routes for the various html pages we will be forming
var path = require("path");

// Routes

module.exports = function(app) {

  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });
  // below are templates for further html routes
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/"))
  });

};
