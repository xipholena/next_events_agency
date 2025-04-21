'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.sequelize.query(
       "CREATE TABLE `events` (`id` int NOT NULL, `event_name` varchar(45) NOT NULL, `performer_name` varchar(45) NOT NULL, `description` varchar(500) NOT NULL, `date` date DEFAULT NULL, `start_time` timestamp NULL DEFAULT NULL, `duration` time NOT NULL, `capacity` int DEFAULT NULL, `status` enum('draft','open','sold_out','finished') DEFAULT NULL, `price` decimal(10,0) NOT NULL, `address` varchar(50) NOT NULL,  PRIMARY KEY (`id`), KEY `idx_event_name` (`event_name`), KEY `idx_performer_name` (`performer_name`), FULLTEXT KEY `idx_description` (`description`)) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;"
    )
  },

  async down (queryInterface, Sequelize) {
    queryInterface.sequelize.query(
      "DROP TABLE `events`"
    )
  }
};
