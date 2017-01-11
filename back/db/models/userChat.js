const User = require('./user');

'use strict';
module.exports = function(sequelize, DataTypes) {
  const UserChat = sequelize.define('User_Chat', {
    unreadNotification: {
      type: DataTypes.INTEGER, 
      defaultValue: 0
    }
  });
  return UserChat;
};