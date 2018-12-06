var db = require('../db');

module.exports = {
  messages: {
    get: function (callback) {
      db.serialize(function() {
        db.all("SELECT * FROM messages", function(err, allRows) {
          
          if (err != null) {
            console.log(err);
            callback(err);
          }
          console.log(util.inspect(allRows));
          callback(allRows);
          db.close();
        });
      });

    }, // a function which produces all the messages
    post: function () {} // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function () {}
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