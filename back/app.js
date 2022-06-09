const express = require('express');
const userRoutes = require('./routes/user');
const articleRoutes = require('./routes/article');

const app = express();

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    res.setHeader('Access-Control-Allow-Credentials', 'true')
    next();
  });

app.use(express.json());
app.use('/api/auth', userRoutes);
app.use('/api/article', articleRoutes);

module.exports = app;
