var db = require('../db');

module.exports = {
  messages: {
    get: function(callback) { 
      db.query("select users.username, rooms.roomname, messages.message from messages INNER JOIN users ON messages.user_id = users.id INNER JOIN rooms ON messages.room_id = rooms.id", (err, data) => {
        if (err) {
          throw err;
        } else {
          callback(null, data);
        }
      });
    }, // a function which produces all the messages
    post: function (username, roomname, message, callback) {

      //get the user id from users table

      var user_id;
      var room_id;

      db.query(`SELECT id FROM users WHERE username = ${username}`, function(err, data) {
        if (err) {
          callback(err);
        } else {
          user_id = data[0].id;
          db.query(`SELECT id FROM rooms WHERE roomname = ${roomname}`, function(err, data) {
            if (err) {
              callback(err);
            } else {
              room_id = data[0].id;

              db.query(`INSERT INTO messages (user_id, room_id, message) values (${user_id},${room_id},${message})`, function(err, data) {
                if (err) {
                  callback(err);
                } else {
                  callback(null, JSON.stringify(data));
                }
              });  


            }
          });  

        }
      });  
 
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function(callback) {
      db.query("SELECT users.username FROM users", (err, data) => {
        if (err) {
          throw err;
        } else {
          callback(null, data);
        }
      });
    },

    post: function (username, callback) {
      db.query(`INSERT INTO users (username) values (${username})`, function(err, data) {
        if (err) {
          callback(err);
        } else {
          callback(null, JSON.stringify(data));
        }
      });  
    }
  }
};