const { databaza } = require("../database");
const { DataTypes } = require("sequelize/lib/sequelize");

const Order = databaza.define('Order', {

  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  total_price: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  status: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: 'pending', // Default status is "pending"
  },
});

module.exports = Order ;