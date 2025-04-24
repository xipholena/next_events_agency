'use strict';

const { randomIntFromInterval } = require("@/utils");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        const { faker } = require("@faker-js/faker");

        const roles = ['user', 'moderator', 'operator']
        const users = [...Array(2500).keys()].map((user_index) => ({
            id: user_index + 1,
            photo_url: faker.image.url({ width: 480, height: 640 }),
            user_email: faker.internet.email(),
            first_name: faker.person.firstName(),
            last_name: faker.person.lastName(),
            password: faker.lorem.word({ length: { min: 5, max: 45 }, strategy: 'shortest' }),
            role: roles[randomIntFromInterval(0, roles.length - 1)],

            created_at: new Date(),
            updated_at: new Date()
        }));
        await queryInterface.bulkInsert('users', users, {});
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('users', null, {});
    }
};
