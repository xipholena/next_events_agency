'use strict';
const { Model } = require('sequelize');
const User = require('./user');
const Event = require('./event')
module.exports = (sequelize, DataTypes) => {
  class Review extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Review.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    date: DataTypes.BIGINT, //created_at?
    rating: DataTypes.INTEGER,
    text: DataTypes.STRING(700),
    status: {
      type: DataTypes.ENUM,
      values: ['pending', 'approved'],
      allowNull: false,
    },
    event_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }

  }, {
    sequelize,
    modelName: 'Reviews',
  });

  
  Review.belongsTo(User, {
    as: "user",
    foreignKey: "user_id"
  })
  
  User.hasMany(Review, {
    as: "reviews",
    sourceKey: "id",
    foreignKey: "user_id",
    onDelete: "CASCADE",
  })
 
  
  Review.belongsTo(Event, {
    as: "event",
    foreignKey:"event_id"
  })

  Event.hasMany(Review, {
    as: "reviews",
    sourceKey: "id",
    foreignKey: "event_id",
    onDelete: "CASCADE",
  })
  return Review;
};