'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('stores', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      owner_id: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'owners',
          key: 'id',
          as: 'owner_id'
        }
      },
      store_name: {
        type: Sequelize.STRING
      },
      store_description: {
        type: Sequelize.TEXT
      },
      store_address: {
        type: Sequelize.TEXT
      },
      store_photo: {
        type: Sequelize.STRING
      },
      store_cover_photo: {
        type: Sequelize.STRING
      },
      store_rating: {
        type: Sequelize.INTEGER
      },
      store_follower: {
        type: Sequelize.INTEGER
      },
      store_rules: {
        type: Sequelize.TEXT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('stores');
  }
};