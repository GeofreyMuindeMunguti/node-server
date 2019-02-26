var express = require("express");
var bodyParser = require("body-parser");
var routes = require("./routes/routes.js");
var app = express();
var connection = require("./config/dbcon.js");
var users = require("./api/users.js");



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

routes(app);
 

var server = app.listen(4200, function()
{
  console.log("App is running on port", server.address().port);
  console.log("Load this URL on your browser: localhost:4200");
  console.log("Initiating database connection...");
});
  
 