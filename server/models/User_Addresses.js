const { databaza } = require("../database");
const { DataTypes } = require("sequelize/lib/sequelize");


const User_Addresses = databaza.define("User_Addresses", {
    //product_id:{}

    user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  address: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  city: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  country: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
 
});

module.exports = User_Addresses;
