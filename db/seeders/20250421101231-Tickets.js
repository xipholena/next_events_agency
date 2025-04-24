'use strict';

const { randomIntFromInterval } = require("@/utils");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        const statuses = ['free', 'reserved', 'sold', 'used', 'refund']
        const tickets = [...Array(2500).keys()].map((ticket_index) => ({
            id: ticket_index + 1,
            status: statuses[randomIntFromInterval(0, statuses.length - 1)],
            reserved_time: new Date().getTime(),
            user_id: randomIntFromInterval(1, 2500),
            event_id: randomIntFromInterval(1, 2500),

            created_at: new Date(),
            updated_at: new Date()
        }))

        await queryInterface.bulkInsert('tickets', tickets, {});

    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('tickets', null, {});
    }
};
