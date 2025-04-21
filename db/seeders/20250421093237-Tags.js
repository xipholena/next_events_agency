'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('tags', [
      {
          "id": 1,
          "type": "genre",
          "tag_name": "Indie/Alternative"
      },
      {
          "id": 2,
          "type": "genre",
          "tag_name": "Pop"
      },
      {
          "id": 3,
          "type": "genre",
          "tag_name": "Rock"
      },
      {
          "id": 4,
          "type": "genre",
          "tag_name": "Jazz"
      },
      {
          "id": 5,
          "type": "genre",
          "tag_name": "Classical"
      },
      {
          "id": 6,
          "type": "genre",
          "tag_name": "Hip-Hop/Rap"
      },
      {
          "id": 7,
          "type": "genre",
          "tag_name": "Electronic/Dance"
      },
      {
          "id": 8,
          "type": "genre",
          "tag_name": "Country"
      },
      {
          "id": 9,
          "type": "genre",
          "tag_name": "R&B/Soul"
      },
      {
          "id": 10,
          "type": "genre",
          "tag_name": "Reggae"
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('tags', null, {})
  }
};
