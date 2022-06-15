const express = require('express');
const router = express.Router();
const imgCtrl = require('../controllers/image');
const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');

router.post('/', auth, multer, imgCtrl.saveImage);

module.exports = router;