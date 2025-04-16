const { databaza } = require("../database");
const { DataTypes, Model } = require("sequelize");

class Order extends Model {}
Order.init(
  {
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Users",
        key: "userId",
      },
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    },
    total_price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM("pending", "shipped", "delivered", "canceled"),
      allowNull: false,
      defaultValue: "pending",
    },
  },
  {
    sequelize: databaza,
    modelName: "Order",
  }
);

Order.associate = (models) => {
  Order.belongsTo(models.User, { foreignKey: "user_id" });
  Order.hasMany(models.OrderItems, { foreignKey: "order_id" });
  Order.hasMany(models.Payments, { foreignKey: "order_id" });
  Order.hasOne(models.Shipping, { foreignKey: "order_id" });
};

module.exports = Order;
