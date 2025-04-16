const { databaza } = require("../database");
const { DataTypes, Model } = require("sequelize");
const Cart = require("./Cart");

class User extends Model {}
User.init(
  {
    userId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
    phoneNumber: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
    role: {
      type: DataTypes.ENUM("customer", "admin"),
      defaultValue: "customer",
    },
  },
  {
    sequelize: databaza,
    modelName: "User",
  }
);

User.associate = (models) => {
  User.hasMany(models.Orders, { foreignKey: "user_id" });
  User.hasMany(models.Wishlist, { foreignKey: "user_id" });
};

module.exports = User;
