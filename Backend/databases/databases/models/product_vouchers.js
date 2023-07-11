const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('product_vouchers', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    store_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'stores',
        key: 'id'
      }
    },
    product_voucher_title: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    product_voucher_status: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    product_voucher_valid_from: {
      type: DataTypes.DATE,
      allowNull: true
    },
    product_voucher_valid_end: {
      type: DataTypes.DATE,
      allowNull: true
    },
    product_voucher_discount: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'product_vouchers',
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
        name: "store_id",
        using: "BTREE",
        fields: [
          { name: "store_id" },
        ]
      },
    ]
  });
};
