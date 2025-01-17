const express = require('express');
const jwt = require('jsonwebtoken');
const db = require('../db/connect');
const router = express.Router();
const bcrypt = require('bcrypt');


router.get('/', (req, res) => {
    res.send('Liste des utilisateurs');
});

module.exports = router;
