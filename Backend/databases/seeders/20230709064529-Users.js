/* eslint-disable no-unused-vars */
'use strict';

/** @type {import('sequelize-cli').Migration} */
const { hashPassword } = require('../../helpers/bcrypt')
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users', [
      {
        username: 'Zamzam', 
        email: 'zamsyh.dev@gmail.com', 
        password: await hashPassword('@Zamzam123', 10),
        role_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: 'Wasis', 
        email: 'wasis@gmail.com', 
        password: await hashPassword('@Wasis123', 10),
        role_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: 'Candra', 
        email: 'candra@gmail.com', 
        password: await hashPassword('@Candra123', 10),
        role_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});

  }
};
