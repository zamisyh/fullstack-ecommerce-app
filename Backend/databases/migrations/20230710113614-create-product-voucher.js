'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('product_vouchers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      store_id: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'stores',
          key: 'id',
          as: 'store_id'
        }
      },
      product_voucher_title: {
        type: Sequelize.STRING
      },
      product_voucher_status: {
        type: Sequelize.STRING
      },
      product_voucher_valid_from: {
        type: Sequelize.DATE
      },
      product_voucher_valid_end: {
        type: Sequelize.DATE
      },
      product_voucher_discount: {
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('product_vouchers');
  }
};