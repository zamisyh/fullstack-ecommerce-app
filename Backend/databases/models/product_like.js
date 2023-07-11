'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class product_like extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      product_like.belongsTo(models.product_like, {
        foreignKey: 'product_id'
      })
    }
  }
  product_like.init({
    product_id: DataTypes.INTEGER,
    product_like: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'product_like',
  });
  return product_like;
};