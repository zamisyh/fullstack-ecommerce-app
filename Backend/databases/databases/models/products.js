const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('products', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    product_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    product_slug: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    product_description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    product_stock: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    product_weight: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    product_sold: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    product_price: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    product_discount: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    product_voucher_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'product_vouchers',
        key: 'id'
      }
    },
    product_owner_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'owners',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'products',
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
        name: "product_voucher_id",
        using: "BTREE",
        fields: [
          { name: "product_voucher_id" },
        ]
      },
      {
        name: "product_owner_id",
        using: "BTREE",
        fields: [
          { name: "product_owner_id" },
        ]
      },
    ]
  });
};
