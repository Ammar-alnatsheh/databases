var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      //send the request to db models with get action to messages table
      models.messages.get(res);

    }, // a function which handles a get request for all messages
    post: function (req, res) {
      //send the request to db models with post action to messages table
      models.messages.post(res);
      
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      //send the request to db models with get action to user table
      models.users.get(res);

    },
    post: function (req, res) {
      //send the request to db models with post action to user table
      models.users.post(res);

    }
  }
};

