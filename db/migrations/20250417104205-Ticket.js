'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.sequelize.query(
      "CREATE TABLE `tickets` (  `id` int NOT NULL,  `status` enum('free','reserved','sold','used','refund') NOT NULL,  `reserved_time` time NOT NULL,  `user_id` int DEFAULT NULL,  `event_id` int DEFAULT NULL,  PRIMARY KEY (`id`),  KEY `fk_tickets_user_id_idx` (`user_id`),  KEY `fk_tickets_event_id_idx` (`event_id`),  CONSTRAINT `fk_tickets_event_id` FOREIGN KEY (`event_id`) REFERENCES `events` (`id`),  CONSTRAINT `fk_tickets_user_id` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE SET NULL) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;"
    )
  },

  async down (queryInterface, Sequelize) {
    queryInterface.sequelize.query(
      "DROP TABLE `tickets`"
    )
  }
};
