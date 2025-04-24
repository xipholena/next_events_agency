'use strict';

const { randomIntFromInterval } = require("@/utils");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        const tagTypes = ["genre"]
        const genres = [
            "Indie/Alternative",
            "Pop",
            "Rock",
            "Jazz",
            "Classical",
            "Hip-Hop/Rap",
            "Electronic/Dance",
            "Country",
            "R&B/Soul",
            "Reggae"
        ]
        const tags = [...Array(2500).keys()].map((tag_index) => ({
            id: tag_index + 1,
            type: tagTypes[0],
            tag_name: genres[randomIntFromInterval(0, genres.length - 1)],

            created_at: new Date(),
            updated_at: new Date()
        }))
        await queryInterface.bulkInsert('tags', tags, {});
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('tags', null, {})
    }
};
