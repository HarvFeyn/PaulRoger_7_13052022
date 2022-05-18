const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
const dbmodel = require('../models/userModels');

// request to sign up a user
exports.signup = (req, res, next) => {
  bcrypt.hash(req.query.password, 10)
      .then(hash => {
        const user = {
            email: req.query.email,
            password: hash
        };
        dbmodel.saveUser(user)
            .then(() => res.status(201).json({ message: 'Utilisateur créé !' }))
            .catch(error => res.status(400).json({ error }));
      })
      .catch(error => res.status(500).json({ error }));
}

exports.login = (req, res, next) => {
  return dbmodel.getAllUsers()
    .then((result) => res.status(200).json(result))
    .catch(error => res.status(400).json({ error }))
}
