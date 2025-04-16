const { databaza } = require("../database");
const { DataTypes, Model } = require("sequelize");

class ProductVariants extends Model {}
ProductVariants.init(
  {
    variantId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
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
    name: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    value: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL(10, 2),
      defaultValue: 0.0,
    },
    stock_quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize: databaza,
    modelName: "ProductVariant",
    tableName:"productVariants"
  }
);
ProductVariants.associate = (models) => {
  ProductVariants.belongsTo(models.Products, { foreignKey: "product_id" });
};

module.exports = ProductVariants;
