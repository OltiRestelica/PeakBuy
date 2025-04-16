const { databaza } = require("../database");
const { DataTypes, Model } = require("sequelize");

class Order extends Model {}
Order.init(
  {
    orderId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "users",
        key: "user_id",
      },
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    },
    addressId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "userAddresses",
        key: "address_id",
      },
      onDelete: "SET NULL",
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
    tableName:"orders"
  }
);

Order.associate = (models) => {
  Order.belongsTo(models.User, { foreignKey: "user_id" });
  Order.belongsTo(models.UserAddresses, { foreignKey: "address_id" });
  Order.hasMany(models.OrderItems, { foreignKey: "order_id" });
  Order.hasOne(models.Payments, { foreignKey: "order_id" });
  Order.hasOne(models.Shipping, { foreignKey: "order_id" });
};

module.exports = Order;
