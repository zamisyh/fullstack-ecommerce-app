'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class transaction_status extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  transaction_status.init({
    transaction_status_name: DataTypes.STRING,
    transaction_status_slug: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'transaction_status',
  });
  return transaction_status;
};