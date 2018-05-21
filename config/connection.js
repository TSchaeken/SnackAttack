const mysql = require('mysql');

const connection = mysql.createConnection({
  port: 3306,
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'burgers_db'
});

connection.connect(err => {
  if (err) {
    console.error(`error connecting my dude, check: ${err.stack}`);
    return;
  }
  console.log(`Connected! Connection id: ${connection.threadId} `);
});

module.exports = connection;
