'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class transactions extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      transactions.belongsTo(models.transactions, {
        foreignKey: 'product_id'
      })
      transactions.belongsTo(models.transactions, {
        foreignKey: 'customer_id'
      })
      transactions.belongsTo(models.transactions, {
        foreignKey: 'payment_metode_id'
      })
      transactions.belongsTo(models.transactions, {
        foreignKey: 'transaction_status_id'
      })
    }
  }
  transactions.init({
    product_id: DataTypes.INTEGER,
    customer_id: DataTypes.INTEGER,
    payment_metode_id: DataTypes.INTEGER,
    transaction_status_id: DataTypes.INTEGER,
    transaction_date: DataTypes.DATE,
    transaction_qty: DataTypes.INTEGER,
    transaction_total: DataTypes.INTEGER,
    transaction_tracking_code: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'transactions',
  });
  return transactions;
};