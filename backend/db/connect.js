const mysql = require('mysql2');
require('dotenv').config(); 

const db = mysql.createConnection({
  host: 'localhost',
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  port: 3306, 
});

// Fonction pour établir la connexion à la base de données
function connectDatabase() {
  db.connect((err) => {
    if (err) {
      console.error('Erreur de connexion à la base de données :', err.stack);
      // Réessayer la connexion après 5 secondes en cas d'erreur
      setTimeout(connectDatabase, 5000);
      return;
    }
    console.log('Connecté à la base de données MariaDB avec succès !');
  });
}

// Lancer la connexion
connectDatabase();

module.exports = db;
