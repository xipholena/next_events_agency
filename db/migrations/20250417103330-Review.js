'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.sequelize.query(
        "CREATE TABLE `reviews` ( `id` int NOT NULL, `date` date DEFAULT NULL, `rating` int DEFAULT NULL, `text` varchar(700) DEFAULT NULL, `status` enum('pending','approved') NOT NULL, `event_id` int NOT NULL, `user_id` int NOT NULL, PRIMARY KEY (`id`), KEY `idx_status` (`status`), KEY `fk_reviews_event_id_idx` (`event_id`), KEY `fk_reviews_user_id_idx` (`user_id`), CONSTRAINT `fk_reviews_event_id` FOREIGN KEY (`event_id`) REFERENCES `events` (`id`) ON DELETE CASCADE, CONSTRAINT `fk_reviews_user_id` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;"
    )
  },

  async down (queryInterface, Sequelize) {
    queryInterface.sequelize.query(
      "DROP TABLE `reviews`"
    )
  }
};
