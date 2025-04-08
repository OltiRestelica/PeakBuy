const { databaza } = require("../database");
const { DataTypes } = require("sequelize/lib/sequelize");


const Products = databaza.define("Products", {
  name: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  price: {
    type: DataTypes.STRING(30),
    allowNull: false,
  },
  stock: {
    type: DataTypes.STRING(255),   
    allowNull: false,

  },
//   categorie: {
//     type: Sequelize.STRING(30),
//     allowNull: false, 
//   },
  image: {
    type: DataTypes.STRING(500),
    allowNull: false, 
  },
});

module.exports = Products;
