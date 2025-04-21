'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.sequelize.query(`
      ALTER TABLE event_agency.events 
      DROP COLUMN start_time,
      CHANGE COLUMN date date BIGINT(0) NULL DEFAULT NULL ,
      CHANGE COLUMN duration duration INT NULL DEFAULT NULL ;
  `)

  },

  async down (queryInterface, Sequelize) {
    return queryInterface.sequelize.query(`
        ALTER TABLE event_agency.events
        ADD COLUMN start_time TIMESTAMP NULL DEFAULT NULL AFTER address,
        CHANGE COLUMN date date DATE NULL DEFAULT NULL ,
        CHANGE COLUMN duration duration TIME NOT NULL`
      )

  }
};
