'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class product_comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      product_comment.belongsTo(models.product_comment, {
        foreignKey: 'product_id'
      })
      product_comment.belongsTo(models.product_comment, {
        foreignKey: 'customer_id'
      })
    }
  }
  product_comment.init({
    product_id: DataTypes.INTEGER,
    customer_id: DataTypes.INTEGER,
    product_comment: DataTypes.TEXT,
    product_comment_like: DataTypes.INTEGER,
    product_comment_rating: DataTypes.INTEGER,
    product_created_at: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'product_comment',
  });
  return product_comment;
};