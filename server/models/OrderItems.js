const { databaza } = require("../database");
const { DataTypes } = require("sequelize/lib/sequelize");


const OrderItems = databaza.define("Order_Items", {
    //product_id:{}

    order_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  product_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  price: {
    type: DataTypes.DECIMAL(10, 2),
    defaultValue: 0.00,
  },
  quantity: {
    type: DataTypes.INTEGER,   
    allowNull: false,

  },
//   categorie: {
//     type: Sequelize.STRING(30),
//     allowNull: false, 
//   },
});

module.exports = OrderItems;
