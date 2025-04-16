const { databaza } = require("../database");
const { DataTypes, Model } = require("sequelize");

class OrderItems extends Model {}
OrderItems.init(
  {
    order_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    product_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL(10, 2),
      defaultValue: 0.0,
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    //   categorie: {
    //     type: Sequelize.STRING(30),
    //     allowNull: false,
    //   },
  },
  {
    sequelize: databaza,
    modelName: "OrderItems",
  }
);
OrderItems.associate = (models) => {
  OrderItems.belongsTo(models.Orders, { foreignKey: "order_id" });
  OrderItems.belongsTo(models.Products, { foreignKey: "product_id" });
};
module.exports = OrderItems;
