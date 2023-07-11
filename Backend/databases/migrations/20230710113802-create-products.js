'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      product_name: {
        type: Sequelize.STRING
      },
      product_slug: {
        type: Sequelize.STRING
      },
      product_description: {
        type: Sequelize.TEXT
      },
      product_stock: {
        type: Sequelize.INTEGER
      },
      product_weight: {
        type: Sequelize.INTEGER
      },
      product_sold: {
        type: Sequelize.INTEGER
      },
      product_price: {
        type: Sequelize.INTEGER
      },
      product_discount: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      product_voucher_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        onDelete: 'CASCADE',
        references: {
          model: 'product_vouchers',
          key: 'id',
          as: 'product_voucher_id'
        }
      },
      product_owner_id: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'owners',
          key: 'id',
          as: 'product_owner_id'
        }
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
    await queryInterface.dropTable('products');
  }
};