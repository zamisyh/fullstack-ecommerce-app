'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class product_voucher extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      product_voucher.belongsTo(models.product_voucher, {
        foreignKey: 'store_id'
      })
    }
  }
  product_voucher.init({
    store_id: DataTypes.INTEGER,
    product_voucher_title: DataTypes.STRING,
    product_voucher_status: DataTypes.STRING,
    product_voucher_valid_from: DataTypes.DATE,
    product_voucher_valid_end: DataTypes.DATE,
    product_voucher_discount: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'product_voucher',
  });
  return product_voucher;
};