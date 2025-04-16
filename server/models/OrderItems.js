const { databaza } = require("../database");
const { DataTypes, Model } = require("sequelize");

class OrderItems extends Model {}
OrderItems.init(
  {
    order_item_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    order_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "order",
        key: "order_id",
      },
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    },
    product_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "products",
        key: "product_id",
      },
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    },
    price: {
      type: DataTypes.DECIMAL(10, 2),
      defaultValue: 0.0,
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize: databaza,
    modelName: "OrderItem",
    tableName:"orderItems"
  }
);
OrderItems.associate = (models) => {
  OrderItems.belongsTo(models.Orders, { foreignKey: "order_id" });
  OrderItems.belongsTo(models.Products, { foreignKey: "product_id" });
};
module.exports = OrderItems;
