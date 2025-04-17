const { databaza } = require("../database");
const { DataTypes, Model } = require("sequelize");

class Reviews extends Model {}
Reviews.init(
  {
    review_id: {
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
    rating: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 1,
        max: 5,
      },
    },
    comment: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  },
  {
    sequelize: databaza,
    modelName: "Review",
    tableName:"reviews"
  }
);

Reviews.associate = (models) => {
  Reviews.belongsTo(models.User, { foreignKey: "user_id" });
  Reviews.belongsTo(models.Products, { foreignKey: "product_id" });
};

module.exports = Reviews;
