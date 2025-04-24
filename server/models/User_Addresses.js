  const { databaza } = require("../database");
  const { DataTypes, Model } = require("sequelize");

  class UserAddresses extends Model {}
  UserAddresses.init(
    {
      address_id: {
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
      
      address: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      city: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      country: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
    },
    {
      sequelize: databaza,
      modelName: "UserAddresses",
      tableName:"userAddresses"
    }
  );

  UserAddresses.associate = (models) => {
    UserAddresses.belongsTo(models.User, { foreignKey: "user_id" });
    // UserAddresses.hasMany(models.Orders, { foreignKey: "order_id" });
  };

  module.exports = UserAddresses;
