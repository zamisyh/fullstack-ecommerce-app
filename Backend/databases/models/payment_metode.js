'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class payment_metode extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  payment_metode.init({
    payment_metode_name: DataTypes.STRING,
    payment_metode_slug: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'payment_metode',
  });
  return payment_metode;
};