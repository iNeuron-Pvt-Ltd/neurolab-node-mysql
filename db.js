// get the client
const mysql = require('mysql2');

// create the connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'mysql',
  database: 'sample',
  password: ''
});

module.exports = connection;