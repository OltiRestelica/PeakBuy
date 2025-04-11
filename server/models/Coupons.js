const { databaza } = require("../database");
const { DataTypes } = require("sequelize/lib/sequelize");


const Coupons = databaza.define("Coupons", {
    //product_id:{}
 
  code: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  discount: {
    type: DataTypes.DECIMAL(10, 2),
    defaultValue: 0.00,
  },
  expiration_date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
//   categorie: {
//     type: Sequelize.STRING(30),
//     allowNull: false, 
//   },
});

module.exports = Coupons;