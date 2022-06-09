const express = require('express');
const router = express.Router();
const articleCtrl = require('../controllers/article');

router.get('/index', articleCtrl.getTenArticle);
router.get('/oneArticle', articleCtrl.getArticleById);
router.post('/newArticle', articleCtrl.creatArticle);

module.exports = router;