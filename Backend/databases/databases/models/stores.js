const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('stores', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    owner_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'owners',
        key: 'id'
      }
    },
    store_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    store_description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    store_address: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    store_photo: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    store_cover_photo: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    store_rating: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    store_follower: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    store_rules: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'stores',
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
        name: "owner_id",
        using: "BTREE",
        fields: [
          { name: "owner_id" },
        ]
      },
    ]
  });
};
