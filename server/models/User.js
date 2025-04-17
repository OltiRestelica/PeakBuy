const { databaza } = require("../database");
const { DataTypes, Model } = require("sequelize");

class User extends Model {}
User.init(
  {
    user_id: {
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
    role: {
      type: DataTypes.ENUM("customer", "admin"),
      defaultValue: "customer",
    },
  },
  {
    sequelize: databaza,
    modelName: "User",
    tableName:"users"
  }
);

User.associate = (models) => {
  User.hasMany(models.UserAddresses, { foreignKey: "user_id" });
  User.hasMany(models.Orders, { foreignKey: "user_id" });
  User.hasMany(models.Cart, { foreignKey: "user_id" });
  User.hasMany(models.Reviews, { foreignKey: "user_id" });
  User.hasMany(models.Wishlist, { foreignKey: "user_id" });
};

module.exports = User;
