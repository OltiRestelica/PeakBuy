const { databaza } = require("../database");
const { DataTypes, Model } = require("sequelize");

class Payments extends Model {}
Payments.init(
  {
    payment_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    order_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "orders",
        key: "order_id",
      },
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
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
    amount: {
      type: DataTypes.DECIMAL(10, 2),
      defaultValue: 0.0,
    },
    payment_method: {
      type: DataTypes.ENUM("credit_card", "paypal", "cash"),
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM("pending", "completed", "failed"),
      defaultValue: "pending",
    },
  },
  {
    sequelize: databaza,
    modelName: "Payment",
    tableName:"payments"
  }
);

Payments.associate = (models) => {
  Payments.belongsTo(models.Orders, { foreignKey: "order_id" });
  Payments.belongsTo(models.User, { foreignKey: "user_id" });
};

module.exports = Payments;
