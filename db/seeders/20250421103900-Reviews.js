'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('reviews', [
      {
          "rating": 4,
          "text": "Loved the energy and vibe! A must-visit for anyone who loves festivals.",
          "date": 1736418558000,
          "id": 1,
          "status": "pending",
          "event_id": 2,
          "user_id": 1
      },
      {
          "rating": 3,
          "text": "Had a great time, but the food options could have been better.",
          "date": 1733999358000,
          "id": 2,
          "status": "pending",
          "event_id": 2,
          "user_id": 1
      },
      {
          "rating": 5,
          "text": "Fantastic lineup of artists! The best festival I've attended this year.",
          "date": 1716978558000,
          "id": 3,
          "status": "pending",
          "event_id": 2,
          "user_id": 1
      },
      {
          "rating": 5,
          "text": "Unforgettable memories were made here. Highly recommend to everyone!",
          "date": 1726136958000,
          "id": 4,
          "status": "pending",
          "event_id": 2,
          "user_id": 1
      },
      {
          "rating": 5,
          "text": "Had a great time, but the food options could have been better.",
          "date": 1719397758000,
          "id": 5,
          "status": "pending",
          "event_id": 2,
          "user_id": 1
      },
      {
          "rating": 2,
          "text": "Disappointing! The music was too loud and the seating uncomfortable.",
          "date": 1728988158000,
          "id": 6,
          "status": "pending",
          "event_id": 2,
          "user_id": 1
      },
      {
          "rating": 3,
          "text": "Had a great time, but the food options could have been better.",
          "date": 1723544958000,
          "id": 7,
          "status": "pending",
          "event_id": 2,
          "user_id": 1
      },
      {
          "rating": 4,
          "text": "It was alright. A bit too crowded for my liking.",
          "date": 1729592958000,
          "id": 8,
          "status": "pending",
          "event_id": 2,
          "user_id": 1
      },
      {
          "rating": 5,
          "text": "Fantastic lineup of artists! The best festival I've attended this year.",
          "date": 1728901758000,
          "id": 9,
          "status": "pending",
          "event_id": 2,
          "user_id": 1
      },
      {
          "rating": 4,
          "text": "Had a great time, but the food options could have been better.",
          "date": 1722421758000,
          "id": 10,
          "status": "pending",
          "event_id": 2,
          "user_id": 1
      }
  ], {});
    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('reviews', null, {});
  }
};
