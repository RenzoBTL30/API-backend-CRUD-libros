// get the client
const mysql = require('mysql2');

// create the connection to database
export const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'biblioteca',
  port: 3306,
  password: 'root'
});


connection.query(
    'SELECT * FROM editorial',
    function(err, results, fields) {
      console.log(results); // results contains rows returned by server
      console.log(fields); // fields contains extra meta data about results, if available
    }
  );