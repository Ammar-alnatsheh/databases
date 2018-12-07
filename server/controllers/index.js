var models = require('../models');


var headers = {
  'access-control-allow-origin': '*',
  'access-control-allow-methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'access-control-allow-headers': 'content-type, accept',
  'access-control-max-age': 10, // Seconds.
  'Content-Type': 'application/json'
};

module.exports = {
  messages: {
    //send the request to db models with get action to messages table
    get: function (req, res) {
      models.messages.get((err, messages) => {
        if (err) {
          throw err;
        } else {
          res.writeHead(200, headers);
          res.end(JSON.stringify(messages));
        }
      });
    }, // a function which handles a get request for all messages


    post: function (req, res) {
      //send the request to db models with post action to messages table

    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      //send the request to db models with get action to messages table
      models.users.get((err, usernames) => {
        if (err) {
          throw err;
        } else {
          res.writeHead(200, headers);
          res.end(JSON.stringify(usernames));
        }
      });
    },// let models = {users: {get: then}}

    post: function (req, res) {
      //send the request to db models with post action to user table
      models.users.post(JSON.stringify(req.query.username), (err, username) => {
        if (err) {
          throw err;
        } else {
          res.writeHead(201, headers);
          res.end();
        }
      });

    }
  }
};