const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
const dbmodel = require('../models/userModels');

// request to sign up a user
exports.signup = (req, res, next) => {
  bcrypt.hash(req.body.password, 10)
      .then(hash => {
        const user = {
            name: req.body.name,
            email: req.body.email,
            password: hash
        };
        dbmodel.saveUser(user)
            .then(() => res.status(201).json({ message: 'Utilisateur créé !' }))
            .catch(error => res.status(400).json({ error }));
      })
      .catch(error => res.status(500).json({ error }));
}

// request to login a user
exports.login = (req, res, next) => {
  dbmodel.findemail(req.body.email)
    .then(userfind => {
      if (userfind.id<=0) {
        return res.status(401).json({ error: 'Utilisateur non trouvé !' });
      }
      dbmodel.testpassword(req.body.email, req.body.password)
        .then(valid => {
          if (!valid) {
            return res.status(401).json({ error: 'Mot de passe incorrect !' });
          }
          console.log("user connected");
          res.status(200).json({
            userId: userfind.id,
            userName: userfind.name,
            userEmail: userfind.email,
            isAdmin: userfind.isAdmin,
            token: jwt.sign(
              { userId: userfind },
              'RANDOM_TOKEN_SECRET',
              { expiresIn: '24h' }
            )
          });
        })
        .catch(error => res.status(500).json({ error }));
    })
    .catch(error => res.status(500).json({ error }));
};