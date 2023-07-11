'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class store_banner extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      store_banner.belongsTo(models.store_banner, {
        foreignKey: "store_id",
      })
    }
  }
  store_banner.init({
    store_id: DataTypes.INTEGER,
    store_banner_image_name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'store_banner',
  });
  return store_banner;
};