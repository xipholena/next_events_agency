'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.sequelize.query(
      `CREATE TABLE events_tags 
      (  
      id int NOT NULL AUTO_INCREMENT,  
      event_id int NOT NULL,  
      tag_id int NOT NULL,  
      created_at DATETIME, 
      updated_at DATETIME,   
      PRIMARY KEY (id),  
      KEY fk_events_tags_event_id_idx (event_id),  
      KEY fk_events_tags_tag_id_idx (tag_id),  
      CONSTRAINT fk_events_tags_event_id FOREIGN KEY (event_id) REFERENCES events (id) ON DELETE CASCADE ON UPDATE RESTRICT, 
      CONSTRAINT fk_events_tags_tag_id FOREIGN KEY (tag_id) REFERENCES tags (id) ON DELETE CASCADE
      ) 
      ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;`
    )
  },

  async down(queryInterface, Sequelize) {
    queryInterface.sequelize.query(
      "DROP TABLE `events_tags`"
    )
  }
};
