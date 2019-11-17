var Sequelize = require("sequelize");

var sequelize = require("../config/connection");

// Create a database
var Chirp = sequelize.define("chirp", {
    author: Sequelize.STRING,
    body: Sequelize.STRING,
    created_at: Sequelize.DATE

});

// Syncs with DB
Chirp.sync();

module.exports = Chirp;