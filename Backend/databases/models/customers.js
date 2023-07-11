'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class customers extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      customers.belongsTo(models.customers, {
        foreignKey: "user_id",
      })
    }
  }
  customers.init({
    user_id: DataTypes.INTEGER,
    customer_name: DataTypes.STRING,
    customer_age: DataTypes.INTEGER,
    customer_gender: DataTypes.STRING,
    customer_place_of_birth: DataTypes.STRING,
    customer_date_of_birth: DataTypes.DATE,
    customer_photo: DataTypes.STRING,
    customer_cover_photo: DataTypes.STRING,
    customer_description: DataTypes.TEXT,
    customer_address: DataTypes.STRING,
    customer_province: DataTypes.STRING,
    customer_cities: DataTypes.STRING,
    customer_district: DataTypes.STRING,
    customer_subdistrict: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'customers',
  });
  return customers;
};