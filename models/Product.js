module.exports = function(sequelize, DataTypes){
    var Products = sequelize.define("Product", {
        product_name: {
            type: DataTypes.STRING,
            allowNull: false,

        department_name:{
            type:DataTypes.STRING,
            allowNull: false,
        
        price: DataTypes.INTEGER,
        stock_quantiy: DataTypes.INTEGER
        }
        }
    });
    return Products;
};