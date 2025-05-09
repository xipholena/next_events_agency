'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        const { faker } = require("@faker-js/faker");
        function randomIntFromInterval(min, max) {
            return Math.floor(Math.random() * (max - min + 1) + min)
        }

        const generateTrimmedText = (text, maxSymbols) => {
            return text.length > maxSymbols ? text?.slice(maxSymbols - 1) : text
        }
        const statuses = ['draft', 'open', 'sold_out', 'finished']

        const events = [...Array(1000).keys()].map((event_index) => ({
            id: event_index + 1,
            banner_url: faker.image.url({ width: 480, height: 640 }),
            event_name: generateTrimmedText(faker.lorem.sentence(), 45),
            description: generateTrimmedText(faker.lorem.paragraph({ min: 1, max: 5 }), 500),
            performer_name: generateTrimmedText(faker.lorem.sentence(), 45),
            date: new Date().getTime(),
            duration: randomIntFromInterval(1, 4),
            price: faker.commerce.price({ min: 100, max: 200, dec: 2 }),
            capacity: randomIntFromInterval(50, 500),
            status: statuses[randomIntFromInterval(0, statuses.length - 1)],
            address: generateTrimmedText(faker.lorem.sentence(), 50),
            //address: faker.location.streetAddress(false)

            created_at: new Date(),
            updated_at: new Date()
        }))


        await queryInterface.bulkInsert('events', events, {});
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('events', null, {});
    }
};
