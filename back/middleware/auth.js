const jwt = require('jsonwebtoken');

// request to test the token and go to to the next request if the token is valid or return error if unauthorized
module.exports = (req, res, next) => {
  console.log('authentification')
  try {
    const token = req.headers.authorization.split(' ')[1];
    const decodedToken = jwt.verify(token, 'RANDOM_TOKEN_SECRET');
    const userId = decodedToken.userId.id;
    if (req.body.userId && req.body.userId !== userId) {
      throw 'Invalid user ID';
    } else {
      console.log(req.body)
      next();
    }
  } catch {
    res.status(403).json({
      error: new Error('unauthorized request')
    });
  }
};