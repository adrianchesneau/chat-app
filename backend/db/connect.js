const mysql = require('mysql2');
require('dotenv').config(); 

const db = mysql.createConnection({
  host: 'localhost',
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  port: 3306, 
});

function connectDatabase() {
  db.connect((err) => {
    if (err) {
      console.error('Erreur de connexion à la base de données :', err.stack);
      setTimeout(connectDatabase, 5000);
      return;
    }
    console.log('Connecté à la base de données MariaDB avec succès !');
  });
}

connectDatabase();

module.exports = db;
