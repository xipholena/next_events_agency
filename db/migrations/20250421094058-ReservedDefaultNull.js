'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.sequelize.query(`
      ALTER TABLE event_agency.tickets 
      CHANGE COLUMN reserved_time reserved_time BIGINT(0) NULL DEFAULT NULL ;
    `)
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.sequelize.query(`
      ALTER TABLE event_agency.tickets
      CHANGE COLUMN reserved_time reserved_time TIME NOT NULL ;
    `)
  }
};
