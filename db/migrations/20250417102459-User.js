'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    queryInterface.sequelize.query(
      `CREATE TABLE users 
      ( 
      id int NOT NULL AUTO_INCREMENT, 
      photo_url varchar(100) DEFAULT NULL,
      first_name varchar(45) NOT NULL, 
      last_name varchar(45) DEFAULT NULL, 
      user_email varchar(128) NOT NULL, 
      password varchar(45) NOT NULL, 
      role enum('user','admin','moderator','operator') NOT NULL DEFAULT 'user', 
      created_at DATETIME, 
      updated_at DATETIME, 
      PRIMARY KEY (id),UNIQUE KEY user_email_UNIQUE (user_email)
      ) 
      ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;`
    )
  },

  async down(queryInterface, Sequelize) {
    queryInterface.sequelize.query(
      "DROP TABLE `users`"
    )
  }
};
