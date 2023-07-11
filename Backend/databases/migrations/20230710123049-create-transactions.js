'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('transactions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      product_id: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'products',
          key: 'id',
          as: 'product_id'
        }
      },
      customer_id: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'customers',
          key: 'id',
          as: 'customer_id'
        }
      },
      payment_metode_id: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'payment_metodes',
          key: 'id',
          as: 'payment_metode_id'
        }
      },
      transaction_status_id: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'transaction_statuses',
          key: 'id',
          as: 'transaction_status_id'
        }
      },
      transaction_date: {
        type: Sequelize.DATE
      },
      transaction_qty: {
        type: Sequelize.INTEGER
      },
      transaction_total: {
        type: Sequelize.INTEGER
      },
      transaction_tracking_code: {
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
    await queryInterface.dropTable('transactions');
  }
};