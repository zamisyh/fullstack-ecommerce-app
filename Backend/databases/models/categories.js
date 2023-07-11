'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class categories extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      categories.belongsTo(models.categories, {
        foreignKey: 'store_id'
      })
    }
  }
  categories.init({
    store_id: DataTypes.INTEGER,
    categorie_name: DataTypes.STRING,
    categorie_slug: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'categories',
  });
  return categories;
};