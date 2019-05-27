// dependencies
var express = require("express");

// Set up Express App
var app = express();
var PORT = process.env.PORT || 8080;

// Set up Express to handle data parsing.- standard
app.use(express.urlencoded({ extended: true }));
app.use(express.static("app/public"));

// static directory
app.use(express.static("app/puclic"));


// Routes
// require("./routes/api-routes.js")(app);


// starts the server to begin listening.
db.sequelize.sync().then(function () {
    app.listen(PORT, function () {
        console.log("App listening on PORT" + PORT);

    });
});