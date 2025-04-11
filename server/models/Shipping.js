const { databaza } = require("../database");
const { DataTypes } = require("sequelize/lib/sequelize");


const Shipping = databaza.define("Shipping", {
    //product_id:{}

    order_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  tracking_number: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  carrier: {
    type: DataTypes.STRING(50),
    defaultValue: 'POSTA MIKMIK',
  },
  status: {
    type: DataTypes.ENUM('preparing', 'in transit', 'delivered'),
    defaultValue: 'preparing',
  },
  estimated_delivery: {
    type: DataTypes.DATE,
    allowNull: false,
  },


//   categorie: {
//     type: Sequelize.STRING(30),
//     allowNull: false, 
//   },
});

module.exports = Shipping;
