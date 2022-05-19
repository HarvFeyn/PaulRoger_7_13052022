const express = require('express');
const router = express.Router();
const articleCtrl = require('../controllers/article');

router.get('/article', articleCtrl.getArticleById);

module.exports = router;