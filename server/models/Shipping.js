const { databaza } = require("../database");
const { DataTypes, Model } = require("sequelize/lib/sequelize");
const { tableName } = require("./User");

class Shipping extends Model {}
Shipping.init(
  {
    shipping_id: {
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
    tracking_number: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    carrier: {
      type: DataTypes.STRING(50),
      defaultValue: "POSTA MIKMIK",
    },
    status: {
      type: DataTypes.ENUM("preparing", "in transit", "delivered"),
      defaultValue: "preparing",
    },
    estimated_delivery: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    sequelize: databaza,
    modelName: "Shipping",
    tableName:"shippings"
  }
);
Shipping.associate = (models) => {
  Shipping.belongsTo(models.Orders, { foreignKey: "order_id" });
};

module.exports = Shipping;
