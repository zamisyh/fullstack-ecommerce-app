const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('transactions', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    product_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'products',
        key: 'id'
      }
    },
    customer_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'customers',
        key: 'id'
      }
    },
    payment_metode_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'payment_metodes',
        key: 'id'
      }
    },
    transaction_status_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'transaction_statuses',
        key: 'id'
      }
    },
    transaction_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    transaction_qty: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    transaction_total: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    transaction_tracking_code: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'transactions',
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
        name: "product_id",
        using: "BTREE",
        fields: [
          { name: "product_id" },
        ]
      },
      {
        name: "customer_id",
        using: "BTREE",
        fields: [
          { name: "customer_id" },
        ]
      },
      {
        name: "payment_metode_id",
        using: "BTREE",
        fields: [
          { name: "payment_metode_id" },
        ]
      },
      {
        name: "transaction_status_id",
        using: "BTREE",
        fields: [
          { name: "transaction_status_id" },
        ]
      },
    ]
  });
};
