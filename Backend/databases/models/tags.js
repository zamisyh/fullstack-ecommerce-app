'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tags extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      tags.belongsTo(models.tags, {
        foreignKey: 'store_id'
      })
    }
  }
  tags.init({
    store_id: DataTypes.INTEGER,
    tag_name: DataTypes.STRING,
    tag_slug: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'tags',
  });
  return tags;
};