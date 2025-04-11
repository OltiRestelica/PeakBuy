const { databaza } = require("../database");
const { DataTypes } = require("sequelize/lib/sequelize");


const Categorie = databaza.define("Categorie", {
  name: {
    type: DataTypes.STRING(30),
    allowNull: false,
  }
});

module.exports = Categorie;
