const db = require('../models');

const products =[
    {
        "product_name": "Women's Sports Tee",
        "department_name": "Womens Apparel",
        "price": 12,
        "stock_quantity": 120
    },
    {
        "product_name": "Men Sports Tee",
        "department_name": "Mens Apparel",
        "price": 18,
        "stock_quantity": 90
    },
    {
        "product_name": "Pocket Shorts",
        "department_name": "Womens Apparel",
        "price": 22,
        "stock_quantity": 75
    },
    {
        "product_name": "VitaShake Protien",
        "department_name": "Nutrition",
        "price": 60,
        "stock_quantity": 290
    },
    {
        "product_name": "VitaShake Bars",
        "department_name": "Nutrition",
        "price": 32,
        "stock_quantity": 160
    },
    {
        "product_name": "Womens Tank Top",
        "department_name": "Womens Apparel",
        "price": 16,
        "stock_quantity": 230
    },

];



db.sequelize.sync({force: true}).then(function() {
    db.Product.bulkCreate(products).then(function(rows) {
      console.log('\n\nINSERTED\n\n');
    }).catch(function(err) {
      console.log('\n\nError:', err);
    });
  });