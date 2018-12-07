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
    get: function (req, res) {
    //   console.log(req)
    //   //send the request to db models with get action to messages table
    //   models.messages.get()
    //     .then(function(records) {
    //       res.writeHead(200, headers);
    //       res.end(records);
    //     });
    }, // a function which handles a get request for all messages


    post: function (req, res) {
      //send the request to db models with post action to messages table
      // models.messages.post(res);

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
      // models.users.post()
      // .then(function(user) {
      //   res.writeHead(201, headers);
      // });

    }
  }
};



  //   get: function (req, res) {
  //     return new Promise((resolve, reject) => {
  //     //send the request to db models with get action to messages table 
  //       models.messages.get()
  //       .then(function(records) {
  //         resolve(records)
  //       });
  //     });
  //   }, // a function which handles a get request for all messages
  //   post: function (req, res) {
  //     //send the request to db models with post action to messages table
  //     models.messages.post(res);

  //   } // a function which handles posting a message to the database
  // },
