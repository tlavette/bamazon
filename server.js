// dependencies
var express = require("express");
const path = require("path");

// Set up Express App
var app = express();
var PORT = process.env.PORT || 8080;
const db = require("./models");

// Set up Express to handle data parsing.- standard
app.use(express.urlencoded({ extended: true }));

app.use(express.json());
app.use(express.static("public"));




// Routes
require("./routes/api-routes.js")(app);
require("./routes/html.routes.js")(app);

// starts the server to begin listening.
db.sequelize.sync().then(function () {
    app.listen(PORT, function () {
        console.log("App listening on PORT" + PORT);

    });
});