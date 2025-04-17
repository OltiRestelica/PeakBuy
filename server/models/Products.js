const { databaza } = require("../database");
const { DataTypes, Model } = require("sequelize");

class Products extends Model {}
Products.init(
  {
    product_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    
    stock: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING(500),
      allowNull: false,
    },
    category_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "categories",
        key: "category_id",
      }
    },
  },
  {
    sequelize: databaza,
    modelName: "Product",
    tableName: "products",
  }
);

Products.associate = (models) => {
  Products.belongsTo(models.Categories, { foreignKey: "category_id" });
  Products.hasMany(models.ProductVariants, { foreignKey: "product_id" });
  Products.hasMany(models.Reviews, { foreignKey: "product_id" });
  Products.hasMany(models.OrderItems, { foreignKey: "product_id" });
  Products.hasMany(models.Cart, { foreignKey: "product_id" });
  Products.hasMany(models.Wishlist, { foreignKey: "product_id" });
};

module.exports = Products;
