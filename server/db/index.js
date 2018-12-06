var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".

module.exports = function() {
  mysql.createConnection({
    user: 'root',
    database: 'chat'
  }).connect(function(err) {
    if (err) {
      throw err;
    } 
    console.log('You are now connected...');
  });
};
