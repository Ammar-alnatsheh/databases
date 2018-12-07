var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".

var dbConnect = mysql.createConnection({
  user: 'student',
  password: 'student',
  database: 'chat' 
});
       
       
dbConnect.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('DB connected!');
  }
});

module.exports = dbConnect;