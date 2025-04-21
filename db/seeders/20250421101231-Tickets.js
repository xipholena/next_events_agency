'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
  
    await queryInterface.bulkInsert('tickets', [
      {
          "id": 1,
          "status": "free",
          "reserved_time": null,
          "user_id": null,
          "event_id": null
      },
      {
          "id": 2,
          "status": "free",
          "reserved_time": null,
          "user_id": null,
          "event_id": null
      },
      {
          "id": 3,
          "status": "free",
          "reserved_time": null,
          "user_id": null,
          "event_id": null
      },
      {
          "id": 4,
          "status": "free",
          "reserved_time": null,
          "user_id": null,
          "event_id": null
      },
      {
          "id": 5,
          "status": "free",
          "reserved_time": null,
          "user_id": null,
          "event_id": null
      },
      {
          "id": 6,
          "status": "free",
          "reserved_time": null,
          "user_id": null,
          "event_id": null
      },
      {
          "id": 7,
          "status": "free",
          "reserved_time": null,
          "user_id": null,
          "event_id": null
      },
      {
          "id": 8,
          "status": "free",
          "reserved_time": null,
          "user_id": null,
          "event_id": null
      },
      {
          "id": 9,
          "status": "free",
          "reserved_time": null,
          "user_id": null,
          "event_id": null
      },
      {
          "id": 10,
          "status": "free",
          "reserved_time": null,
          "user_id": null,
          "event_id": null
      }
  ], {});
    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('tickets', null, {});
  }
};
