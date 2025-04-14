const { databaza } = require("../database");
const { DataTypes } = require("sequelize/lib/sequelize");
const {User} = require("./User")
const Cart = databaza.define("Cart", {
  order_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  product_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
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

module.exports = Cart;
