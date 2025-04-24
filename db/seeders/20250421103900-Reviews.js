'use strict';



/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        const { faker } = require("@faker-js/faker");
        function randomIntFromInterval(min, max) {
            return Math.floor(Math.random() * (max - min + 1) + min)
        }

        const generateTrimmedText = (text, maxSymbols) => {
            return text.length > maxSymbols ? text?.slice(maxSymbols) : text
        }
        const statuses = ['pending', 'approved']
        const reviews = [...Array(2500).keys()].map((reviews_index) => ({
            id: reviews_index + 1,
            rating: randomIntFromInterval(0, 5),
            text: generateTrimmedText(faker.lorem.paragraph({ min: 1, max: 5 }), 500),
            date: new Date().getTime(),
            status: statuses[randomIntFromInterval(0, statuses.length - 1)],
            event_id: randomIntFromInterval(0, 2500),
            user_id: randomIntFromInterval(0, 2500),

            created_at: new Date(),
            updated_at: new Date()
        }))
        await queryInterface.bulkInsert('reviews', reviews, {});

    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('reviews', null, {});
    }
};
