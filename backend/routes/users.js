const express = require('express');
const jwt = require('jsonwebtoken');
const db = require('../db/connect');
const router = express.Router();
const bcrypt = require('bcrypt');
const saltRounds = 10; 


router.post('/signup', async (req, res) => {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
        return res.status(400).json({ message: 'Tous les champs doivent être remplis' });
    }
    const salt = bcrypt.genSaltSync(saltRounds);
    const hash = bcrypt.hashSync(password, salt);

    try {
        db.query(
            `INSERT INTO users (username, email, password_hash) VALUES (?, ?, ?)`,
            [username, email, hash],
            (err, results) => {
                if (err) {
                    console.error('Erreur lors de l\'insertion des utilisateurs:', err);
                    return res.status(500).json({ message: 'Erreur serveur' });
                }
                res.status(200).json({ message: 'Utilisateur créé avec succès', data: results });
            }
        );
    } catch (error) {
        console.error('Erreur inattendue:', error);
        res.status(500).json({ message: 'Erreur serveur' });
    }
});



router.post('/signin', async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: 'L\'email et le mot de passe sont requis' });
    }

    try {
        db.query(
            'SELECT * FROM users WHERE email = ?',
            [email],
            (err, results) => {
                if (err) {
                    console.error('Erreur lors de la recherche de l\'utilisateur:', err);
                    return res.status(500).json({ message: 'Erreur serveur' });
                }

                else if (!results) {
                    return res.status(404).json({ message: 'Utilisateur non trouvé' });
                }

                const user = results[0];

                bcrypt.compare(password, user.password_hash, (err, isMatch) => {
                    if (err) {
                        console.error('Erreur de comparaison des mots de passe:', err);
                        return res.status(500).json({ message: 'Erreur serveur' });
                    }

                    else if (!isMatch) {
                        return res.status(401).json({ message: 'Mot de passe incorrect' });
                    }
                    else{
                        res.status(200).json({
                        message: 'Connexion réussie',
                        user: {
                            id: user.id,
                            username: user.username,
                            email: user.email
                   }
                        });}


                });
            }
        );
    } catch (error) {
        console.error('Erreur inattendue:', error);
        res.status(500).json({ message: 'Erreur serveur' });
    }
});



module.exports = router;
