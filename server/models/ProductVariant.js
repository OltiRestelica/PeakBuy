const { databaza } = require("../database");
const { DataTypes } = require("sequelize/lib/sequelize");


const ProductVariant = databaza.define("Product_Variant", {
    //product_id:{}

    name: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  value: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  price: {
    type: DataTypes.DECIMAL(10, 2),
    defaultValue: 0.00,
  },
  stock_quantity: {
    type: DataTypes.INTEGER,   
    allowNull: false,

  },
//   categorie: {
//     type: Sequelize.STRING(30),
//     allowNull: false, 
//   },
});

module.exports = ProductVariant;
