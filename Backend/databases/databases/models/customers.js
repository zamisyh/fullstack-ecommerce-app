const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('customers', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'users',
        key: 'id'
      }
    },
    customer_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    customer_age: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    customer_gender: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    customer_place_of_birth: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    customer_date_of_birth: {
      type: DataTypes.DATE,
      allowNull: true
    },
    customer_photo: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    customer_cover_photo: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    customer_description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    customer_address: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    customer_province: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    customer_cities: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    customer_district: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    customer_subdistrict: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'customers',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "user_id",
        using: "BTREE",
        fields: [
          { name: "user_id" },
        ]
      },
    ]
  });
};
