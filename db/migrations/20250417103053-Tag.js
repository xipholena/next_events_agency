'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    queryInterface.sequelize.query(
      `CREATE TABLE tags 
      (  
     id int NOT NULL AUTO_INCREMENT, 
     type enum('event_type','genre','age','duration','city') NOT NULL,  
     tag_name varchar(45) NOT NULL,
      created_at DATETIME, 
      updated_at DATETIME,   
     PRIMARY KEY (id)
     ) 
     ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;`
    )
  },

  async down(queryInterface, Sequelize) {
    queryInterface.sequelize.query(
      "DROP TABLE `tags`"
    )
  }
};
