// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// require bamazon model
var db = require("../models");

// Routes
module.exports = function (app) {
    app.get("/api/products", function (req, res) {
        db.Product.findAll({})
        .then(function (products) {
            res.json(products)
        }).catch(function (error) {
            res.json({ error: err })
        });
    });


    // Post route for saving a new Product
    app.post("/api/products", function (req, res) {
        console.log(req.body);

        db.Product.create({
            product_name: req.body.product_name,
            department_name: req.body.department_name,
            price: req.body.price,
            stock_quantity: req.body.stock_quantity
        }).then(function (dbProduct) {
            // access the bamazon 
            res.json(dbProduct);
        });
    });

}