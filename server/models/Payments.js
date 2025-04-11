const { databaza } = require("../database");
const { DataTypes } = require("sequelize/lib/sequelize");


const Payments = databaza.define("Payments", {
    //product_id:{}

    order_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  amount: {
    type: DataTypes.DECIMAL(10, 2),
    defaultValue: 0.00,
  },
  payment_method: {
    type: DataTypes.ENUM('credit_card', 'paypal', 'cod'),
    allowNull: false,
  },
  status: {
    type: DataTypes.ENUM('pending', 'completed', 'failed'),
    defaultValue: "pending",
  },


//   categorie: {
//     type: Sequelize.STRING(30),
//     allowNull: false, 
//   },
});

module.exports = Payments;
