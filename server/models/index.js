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
    post: function () {
      
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




















// var readRecordsFromMediaTable = function(){
//   return new Promise(function (resolve, reject) {
//     var responseObj;
//     db.all("SELECT * FROM MediaTable", null, function cb(err, rows) {
//       if (err) {
//         responseObj = {
//           'error': err
//         };
//         reject(responseObj);
//       } else {
//         responseObj = {
//           statement: this,
//           rows: rows
//         };
//         resolve(responseObj);
//       }
//       db.close();
//     });
//   });
// }
//https://stackoverflow.com/questions/39106668/node-js-sqlite3-read-all-records-in-table-and-return