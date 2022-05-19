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

// request to login a user
exports.login = (req, res, next) => {
  console.log(req.query);
  dbmodel.findemail(req.query.email)
    .then(userfind => {
      if (userfind<=0) {
        return res.status(401).json({ error: 'Utilisateur non trouvé !' });
      }
      dbmodel.testpassword(req.query.email, req.query.password)
        .then(valid => {
          if (!valid) {
            return res.status(401).json({ error: 'Mot de passe incorrect !' });
          }
          console.log("user connected");
          res.status(200).json({
            userId: userfind,
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