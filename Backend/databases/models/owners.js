'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class owners extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      owners.belongsTo(models.owners, {
        foreignKey: "user_id",
      })
    }
  }
  owners.init({
    user_id: DataTypes.INTEGER,
    owner_name: DataTypes.STRING,
    owner_age: DataTypes.INTEGER,
    owner_gender: DataTypes.STRING,
    owner_address: DataTypes.TEXT,
    owner_photos: DataTypes.STRING,
    owner_description: DataTypes.TEXT,
    owner_job: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'owners',
  });
  return owners;
};