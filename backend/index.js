// Importation des dépendances
const express = require('express');
const cors = require('cors');
const db = require('./db/connect.js');  // Assurez-vous que le chemin est correct


// Création de l'application Express
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Bonjour, serveur est en ligne !');
});

// Démarrage du serveur
const PORT = process.env.PORT || 5000;  // Par défaut sur le port 5000
app.listen(PORT, () => {
  console.log(`Serveur lancé sur http://localhost:${PORT}`);
});
