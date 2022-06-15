const express = require('express');
const router = express.Router();
const articleCtrl = require('../controllers/article');
const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');

router.get('/index', articleCtrl.getTenArticle);
router.get('/:id', articleCtrl.getArticleById);
router.post('/newArticle', auth, articleCtrl.creatArticle);
router.delete('/:id', auth, articleCtrl.deleteArtcile);
router.put('/:id', auth, articleCtrl.modifyArticle);

module.exports = router;