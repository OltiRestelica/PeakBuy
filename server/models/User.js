const { databaza } = require("../database");
const { DataTypes } = require("sequelize/lib/sequelize");

const User = databaza.define("User", {
  name: {
    type: DataTypes.STRING(30),
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING(30),
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING(30),
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING(30),
    allowNull: false,
  },
  phoneNumber: {
    type: DataTypes.STRING(30),
    allowNull: false,
  },
  address: {
    type: DataTypes.STRING(30),
    allowNull: false,
  },
  role: {
    type: DataTypes.ENUM("customer", "admin"),
    defaultValue: "customer",
  },
});

module.exports = User;
