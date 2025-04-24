'use strict';

const { randomIntFromInterval } = require("@/utils");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        const events_tags = [...Array(2500).keys()].map((event_tag_index) => ({
            id: event_tag_index + 1,
            event_id: randomIntFromInterval(0, 2500),
            tag_id: randomIntFromInterval(0, 2500),

            created_at: new Date(),
            updated_at: new Date()
        }))
        await queryInterface.bulkInsert('events_tags', events_tags, {});
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('events_tags', null, {});
    }
};
