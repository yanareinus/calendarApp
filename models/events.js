'use strict';
module.exports = function(sequelize, DataTypes) {
  var events = sequelize.define('events', {
    title: DataTypes.TEXT,
    start_time: DataTypes.TIME,
    end_time: DataTypes.TIME,
    description: DataTypes.TEXT,
    event_date:  DataTypes.DATE,
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return events;
};