'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   
    await queryInterface.bulkInsert('users', [
        {
            "id": 1,
            "user_email": "Marguerite.Mitchell95@yahoo.com",
            "first_name": "Annabel",
            "last_name": "Connelly",
            "password": "6b92-bd1b-446c-99e1-15983579675e0b39",
            "role": "admin"
        },
        {
            "id": 2,
            "user_email": "Amya.Harris51@yahoo.com",
            "first_name": "Drake",
            "last_name": "Lind",
            "password": "9675bd1b-6b92-446c-99e1-1598357e0b39",
            "role": "operator"
        },
        {
            "id": 3,
            "user_email": "Gerson_Hane18@yahoo.com",
            "first_name": "Shaun",
            "last_name": "Predovic",
            "password": "75149cb0-1be2-4ba3-be97-c83483c2e54a",
            "role": "moderator"
        },
        {
            "id": 4,
            "user_email": "Laila.Casper46@yahoo.com",
            "first_name": "Lilly",
            "last_name": "Huels",
            "password": "19b62c40-d524-4758-b8a2-04d9d795edc5",
            "role": "user"
        },
        {
            "id": 5,
            "user_email": "Cindy_Rempel@gmail.com",
            "first_name": "Susanna",
            "last_name": "Schmeler",
            "password": "d77744e5-3ba6-4abf-b4ef-c49341448cf7",
            "role": "user"
        },
        {
            "id": 6,
            "user_email": "Ellis76@gmail.com",
            "first_name": "Zora",
            "last_name": "Bogisich",
            "password": "1eee4824-eda4-46e5-aafb-31f762ba7a31",
            "role": "moderator"
        },
        {
            "id": 7,
            "user_email": "Bonita_Wolff@gmail.com",
            "first_name": "Victoria",
            "last_name": "Parisian",
            "password": "8c7057e8-7ec3-44a9-b4ad-4de168ab58d8",
            "role": "user"
        },
        {
            "id": 8,
            "user_email": "Aylin30@hotmail.com",
            "first_name": "Kira",
            "last_name": "Auer",
            "password": "e87cff62-58e1-4457-b6f5-158097ecaf54",
            "role": "operator"
        },
        {
            "id": 9,
            "user_email": "Stuart_Schowalter53@yahoo.com",
            "first_name": "Bonnie",
            "last_name": "Cormier",
            "password": "9599699a-1e97-41e4-a8eb-143023f240cd",
            "role": "user"
        },
        {
            "id": 10,
            "user_email": "Godfrey.Torp78@hotmail.com",
            "first_name": "Cale",
            "last_name": "Dickinson",
            "password": "eb88fc05-7dd2-4531-9baf-1f5c47802de0",
            "role": "moderator"
        }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  }
};
