const { databaza } = require("../database");
const { DataTypes } = require("sequelize/lib/sequelize");

const Wishlist = databaza.define("Wishlist", {
  order_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  product_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = Wishlist;
