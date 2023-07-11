'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('owners', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_id: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'users',
          key: 'id',
          as: 'user_id'
        }
      },
      owner_name: {
        type: Sequelize.STRING
      },
      owner_age: {
        type: Sequelize.INTEGER
      },
      owner_gender: {
        type: Sequelize.STRING
      },
      owner_address: {
        type: Sequelize.TEXT
      },
      owner_photos: {
        type: Sequelize.STRING
      },
      owner_description: {
        type: Sequelize.TEXT
      },
      owner_job: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('owners');
  }
};