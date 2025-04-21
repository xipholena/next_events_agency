'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.sequelize.query(`
      ALTER TABLE event_agency.reviews 
      CHANGE COLUMN date date BIGINT(0) NULL DEFAULT NULL ;
    `)
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.sequelize.query(`
      ALTER TABLE event_agency.reviews 
      CHANGE COLUMN date date DATE NULL DEFAULT NULL ;
    `)
  }
};
