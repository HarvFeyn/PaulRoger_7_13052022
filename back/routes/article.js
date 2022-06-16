const express = require('express');
const router = express.Router();
const articleCtrl = require('../controllers/article');
const auth = require('../middleware/auth');

router.get('/index', articleCtrl.getAllArticle);
router.get('/:id', articleCtrl.getArticleById);
router.post('/newArticle', auth, articleCtrl.creatArticle);
router.delete('/:id', auth, articleCtrl.deleteArtcile);
router.patch('/:id', auth, articleCtrl.modifyArticle);
router.patch('/:id/like', auth, articleCtrl.likeArticle);

module.exports = router;