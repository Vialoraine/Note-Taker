// Dependencies
var express = require("express");
var path = require("path");
var fs = require("fs");

// Sets up the Express App
var app = express();
var PORT = process.env.PORT || 8080;

// ROUTER
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

// Starts the server to begin listening
app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});