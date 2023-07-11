'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('customers', {
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
      customer_name: {
        type: Sequelize.STRING
      },
      customer_age: {
        type: Sequelize.INTEGER
      },
      customer_gender: {
        type: Sequelize.STRING
      },
      customer_place_of_birth: {
        type: Sequelize.STRING
      },
      customer_date_of_birth: {
        type: Sequelize.DATE
      },
      customer_photo: {
        type: Sequelize.STRING
      },
      customer_cover_photo: {
        type: Sequelize.STRING
      },
      customer_description: {
        type: Sequelize.TEXT
      },
      customer_address: {
        type: Sequelize.STRING
      },
      customer_province: {
        type: Sequelize.STRING,
      },
      customer_cities: {
        type: Sequelize.STRING,
      },
      customer_district: {
        type: Sequelize.STRING,
      },
      customer_subdistrict: {
        type: Sequelize.STRING,
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
    await queryInterface.dropTable('customers');
  }
};