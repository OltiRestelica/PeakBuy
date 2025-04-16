const { databaza } = require("../database");
const { DataTypes, Model } = require("sequelize");

class Wishlist extends Model {}
Wishlist.init(
  {
    wishlist_id: {
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
  },
  {
    sequelize: databaza,
    modelName: "Wishlist",
    tableName:"wishlists"
  }
);

Wishlist.associate = (models) => {
  Wishlist.belongsTo(models.User, { foreignKey: "user_id" });
  Wishlist.belongsTo(models.Products, { foreignKey: "product_id" });
};

module.exports = Wishlist;
