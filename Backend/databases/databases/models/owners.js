const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('owners', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'users',
        key: 'id'
      }
    },
    owner_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    owner_age: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    owner_gender: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    owner_address: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    owner_photos: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    owner_description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    owner_job: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'owners',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "user_id",
        using: "BTREE",
        fields: [
          { name: "user_id" },
        ]
      },
    ]
  });
};
