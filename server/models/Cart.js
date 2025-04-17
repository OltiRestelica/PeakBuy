const { databaza } = require("../database");
const { DataTypes, Model } = require("sequelize");
class Cart extends Model {}
Cart.init(
  {
    cart_id: {
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
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize: databaza,
    modelName: "Cart",
    tableName:"cart"
  }
);

Cart.associate = (models) => {
  Cart.belongsTo(models.User, { foreignKey: "user_id" });
  Cart.belongsTo(models.Products, { foreignKey: "product_id" });
};

module.exports = Cart;
