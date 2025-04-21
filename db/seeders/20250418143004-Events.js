'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('events', [
        {
            "event_name": "An Evening of Sonic Bliss",
            "description": "Experience an unforgettable night as top indie artists light up the stage with raw vocals and dreamy instrumentals. Let the music transport you into a world of rhythm, emotion, and unfiltered creativity under the glow of stage lights.",
            "performer_name": "The Dreamcatchers",
            "date": 1679145600000,
            "duration": 1,
            "price": 228,
            "capacity": 50,
            "status": "draft",
            "address": "80 Khmelnytskoho Street, Uzhhorod, Ukraine",
            "id": 1
        },
        {
            "event_name": "Live Under the Stars",
            "description": "Spend the night grooving to smooth jazz and funky beats in a beautiful open-air setting. With improvisation, soulful solos, and rich harmonies, this concert promises a magical evening full of rhythm and starlight.",
            "performer_name": "Funky Horizon",
            "date": 1684723200000,
            "duration": 4,
            "price": 80,
            "capacity": 446,
            "status": "draft",
            "address": "30 Pushkinska Street, Chernihiv, Ukraine",
            "id": 2
        },
        {
            "event_name": "Acoustic Sessions: Intimate & Raw",
            "description": "Get up close and personal with singer-songwriters as they perform stripped-down sets in an intimate venue. Heartfelt lyrics and warm acoustic tones will leave you deeply moved and musically fulfilled.",
            "performer_name": "Lila Rosewood",
            "date": 1690300800000,
            "duration": 1,
            "price": 91,
            "capacity": 139,
            "status": "draft",
            "address": "75 Khreshchatyk Street, Dnipro, Ukraine",
            "id": 3
        },
        {
            "event_name": "A Modern Classic, Reimagined",
            "description": "This bold reinterpretation of a classic play blends traditional themes with contemporary staging and multimedia. Expect powerful acting, striking visuals, and a fresh lens on a timeless story that still resonates today.",
            "performer_name": "The Avant Players",
            "date": 1695878400000,
            "duration": 3,
            "price": 152,
            "capacity": 101,
            "status": "draft",
            "address": "57 Heroiv Dnipra Street, Ternopil, Ukraine",
            "id": 4
        },
        {
            "event_name": "Laugh, Cry, Repeat",
            "description": "Dive into a heartfelt comedy-drama that explores the messy beauty of life, love, and the little things in between. Packed with humor, emotion, and relatable moments, this performance will keep you laughing and tearing up in equal measure.",
            "performer_name": "Emotion Ensemble",
            "date": 1701456000000,
            "duration": 3,
            "price": 478,
            "capacity": 374,
            "status": "draft",
            "address": "92 Myru Avenue, Ternopil, Ukraine",
            "id": 5
        },
        {
            "event_name": "One Stage, Infinite Worlds",
            "description": "Step into an imaginative theatrical universe where magic, mystery, and heroism unfold live on stage. With epic storytelling, dynamic sets, and larger-than-life characters, this is escapist entertainment at its finest.",
            "performer_name": "Mystic Horizons",
            "date": 1707033600000,
            "duration": 3,
            "price": 345,
            "capacity": 226,
            "status": "draft",
            "address": "98 Pushkinska Street, Chernihiv, Ukraine",
            "id": 6
        },
        {
            "event_name": "Visions in Color",
            "description": "Immerse yourself in a vibrant collection that celebrates identity, culture, and emotion through bold strokes and brilliant palettes. This contemporary art exhibition invites you to see the world through diverse and dynamic perspectives.",
            "performer_name": "Alicia Torrez",
            "date": 1712611200000,
            "duration": 3,
            "price": 59,
            "capacity": 431,
            "status": "draft",
            "address": "69 Tsentralna Street, Chernihiv, Ukraine",
            "id": 7
        },
        {
            "event_name": "Through the Artist’s Lens",
            "description": "Explore a powerful showcase of visual storytelling through photography and mixed media. Each piece captures a unique moment, emotion, or narrative, inviting you to view the ordinary in extraordinary ways.",
            "performer_name": "Marcus Lee",
            "date": 1718188800000,
            "duration": 4,
            "price": 189,
            "capacity": 477,
            "status": "draft",
            "address": "67 Tsentralna Street, Lviv, Ukraine",
            "id": 8
        },
        {
            "event_name": "Echoes of the Past",
            "description": "Uncover the secrets of ancient civilizations through rare artifacts, interactive displays, and in-depth storytelling. This exhibition brings history to life and shows how the past continues to shape our present and future.",
            "performer_name": "Elena Carter",
            "date": 1723766400000,
            "duration": 3,
            "price": 396,
            "capacity": 304,
            "status": "draft",
            "address": "62 Tsentralna Street, Sumy, Ukraine",
            "id": 9
        },
        {
            "event_name": "Game Day Glory",
            "description": "Join thousands of passionate fans for a thrilling night of football as top-tier teams battle it out. Expect high-speed action, strategic plays, and unforgettable moments that will have you on the edge of your seat from start to finish.",
            "performer_name": "Red Falcons and Blue Sharks",
            "date": 1729344000000,
            "duration": 4,
            "price": 160,
            "capacity": 449,
            "status": "draft",
            "address": "73 Khreshchatyk Street, Uzhhorod, Ukraine",
            "id": 10
        },
        {
            "event_name": "Fierce Rivals, One Arena",
            "description": "Feel the heat as two legendary basketball teams face off in a high-stakes showdown. Every pass, dunk, and buzzer-beater is packed with intensity. The rivalry is real—and you're invited to witness the drama unfold.",
            "performer_name": "City Hawks and Mountain Bears",
            "date": 1734921600000,
            "duration": 4,
            "price": 59,
            "capacity": 421,
            "status": "draft",
            "address": "15 Peremohy Avenue, Chernihiv, Ukraine",
            "id": 11
        },
        {
            "event_name": "Family Day at the Stadium",
            "description": "A perfect day out for sports fans of all ages! Enjoy America’s favorite pastime with interactive games, family-friendly zones, and giveaways. It’s more than a game—it’s a memory-making experience for everyone.",
            "performer_name": "Green Giants and River Runners",
            "date": 1740499200000,
            "duration": 1,
            "price": 125,
            "capacity": 231,
            "status": "draft",
            "address": "48 Lvivska Street, Dnipro, Ukraine",
            "id": 12
        },
        {
            "event_name": "Big Ideas, Bright Minds",
            "description": "Leading scientists and thinkers present cutting-edge discoveries and theories shaping our world. From AI to space exploration, this lecture offers an inspiring look at where human curiosity and innovation are taking us next.",
            "performer_name": "Simone Vega",
            "date": 1746076800000,
            "duration": 3,
            "price": 310,
            "capacity": 249,
            "status": "draft",
            "address": "23 Volodymyrska Street, Lviv, Ukraine",
            "id": 13
        },
        {
            "event_name": "Curious Minds Series: Ask the Experts",
            "description": "Engage with top minds in an interactive forum that invites open dialogue. Learn about current social issues, policy trends, and global challenges—then join the discussion and ask your own burning questions.",
            "performer_name": "Liam Hart",
            "date": 1751654400000,
            "duration": 1,
            "price": 488,
            "capacity": 253,
            "status": "draft",
            "address": "20 Heroiv Dnipra Street, Sumy, Ukraine",
            "id": 14
        },
        {
            "event_name": "Voices That Matter",
            "description": "Hear firsthand from thought leaders, activists, and scholars as they share moving stories and powerful ideas. This lecture series tackles critical issues from equity to ethics, encouraging reflection and action.",
            "performer_name": "Maya Daniels",
            "date": 1757232000000,
            "duration": 1,
            "price": 264,
            "capacity": 72,
            "status": "draft",
            "address": "70 Heroiv Dnipra Street, Ternopil, Ukraine",
            "id": 15
        }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('events', null, {});
  }
};
