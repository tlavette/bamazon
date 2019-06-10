module.exports = function (sequelize, DataTypes) {
    var Product = sequelize.define("Product", {
        product_name: {
            type: DataTypes.STRING,
            allowNull: false,

            validate: {
                len: [1, 30]
            }
        },

        department_name: {
            type: DataTypes.STRING,
            allowNull: false,

            validate: {
                len: [1, 30]
            }

        },
        price: {
            type: DataTypes.DECIMAL(10, 2)
        
        },
        stock_quantity: {
            type: DataTypes.INTEGER,
            isNumeric: true,
            allowNull: false


        },











    });
    return Product;
};