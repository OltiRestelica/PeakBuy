const { databaza } = require("../database");
const { DataTypes, Model } = require("sequelize");

class Coupons extends Model {}
Coupons.init(
  {
    coupon_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    code: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
    discount: {
      type: DataTypes.DECIMAL(10, 2),
      defaultValue: 0.0,
    },
    expiration_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    sequelize: databaza,
    modelName: "Coupon",
    tableName:"coupons"
  }
);

module.exports = Coupons;
