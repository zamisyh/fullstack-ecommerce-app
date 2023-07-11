'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class product_image extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      product_image.belongsTo(models.product_image, {
        foreignKey: 'product_id'
      })
    }
  }
  product_image.init({
    product_id: DataTypes.INTEGER,
    product_image_name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'product_image',
  });
  return product_image;
};