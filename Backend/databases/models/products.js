'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class products extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      products.belongsTo(models.products, {
        foreignKey: 'product_voucher_id'
      })

      products.belongsTo(models.products, {
        foreignKey: 'product_owner_id'
      })
    }
  }
  products.init({
    product_name: DataTypes.STRING,
    product_slug: DataTypes.STRING,
    product_description: DataTypes.TEXT,
    product_stock: DataTypes.INTEGER,
    product_weight: DataTypes.INTEGER,
    product_sold: DataTypes.INTEGER,
    product_price: DataTypes.INTEGER,
    product_discount: DataTypes.INTEGER,
    product_voucher_id: DataTypes.INTEGER,
    product_owner_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'products',
  });
  return products;
};