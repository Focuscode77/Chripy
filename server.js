// Require express

var express = require("express");

// Set up Express
var app = express();

var PORT = process.env.PORT || 8000;

// Middleware set up for express
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// Static directory
app.use(express.static("app/public"));


require("./app/routes/api-routes")(app);


// Starts the server to begin listening
app.listen(PORT, function(){

console.log("App listening on PORT" + PORT);


});

