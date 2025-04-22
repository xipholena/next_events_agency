'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.sequelize.query(`
          ALTER TABLE event_agency.events 
          ADD COLUMN image_url VARCHAR(500) NULL AFTER address,
          CHANGE COLUMN price price DECIMAL(10,2) NOT NULL ;
      `)
  },

  async down (queryInterface, Sequelize) {
    queryInterface.sequelize.query(`
      ALTER TABLE event_agency.events 
      DROP COLUMN image_url,
      CHANGE COLUMN price price DECIMAL(10,0) NOT NULL ;
    `)
    
  }
};
