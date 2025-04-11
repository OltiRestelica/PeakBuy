const { databaza } = require("../database");
const { DataTypes } = require("sequelize/lib/sequelize");


const Reviews = databaza.define("Reviews", {
    //product_id:{}

    user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  product_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },  
  rating: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      min: 1,
      max: 5,
    },
  },
  comment: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
//   categorie: {
//     type: Sequelize.STRING(30),
//     allowNull: false, 
//   },
});

module.exports = Reviews;
