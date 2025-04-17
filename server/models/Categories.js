const { databaza } = require("../database");
const { DataTypes, Model } = require("sequelize");

class Categories extends Model {}
Categories.init(
  {
    category_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
    
  },
  {
    sequelize: databaza,
    modelName: "Categories",
    tableName: "categories",
  }
);
Categories.associate = (models) => {
  Categories.hasMany(models.Products, { foreignKey: "category_id" });
};
module.exports = Categories;
