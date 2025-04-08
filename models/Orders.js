const { DataTypes } = require("sequelize/lib/sequelize");
const { databaza } = require("../database");

const Orders = databaza.define("Order", {
  //   user_id: {
  //     type: Sequelize.STRING(30),
  //     allowNull: false,
  //   },
  total_price: {
    type: DataTypes.FLOAT(5,2),
    allowNull: false,
  },
  status: {
    type: DataTypes.ENUM("pending", "shipped", "delivered", "canceled"),
    defaultValue: "pending",
  },
});

module.exports = Orders;
