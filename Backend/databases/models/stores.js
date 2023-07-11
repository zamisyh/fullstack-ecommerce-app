'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class stores extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      stores.belongsTo(models.stores, {
        foreignKey: "owner_id",
      })
    }
  }
  stores.init({
    owner_id: DataTypes.INTEGER,
    store_name: DataTypes.STRING,
    store_description: DataTypes.TEXT,
    store_address: DataTypes.TEXT,
    store_photo: DataTypes.STRING,
    store_cover_photo: DataTypes.STRING,
    store_rating: DataTypes.INTEGER,
    store_follower: DataTypes.INTEGER,
    store_rules: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'stores',
  });
  return stores;
};