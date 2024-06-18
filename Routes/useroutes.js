const express = require('express');
const auth = require('../Middleware/Auth');
const multer = require('multer')
const upload =  require("../Middleware/imageUplaod");
const{ registration,login } = require('../Controller/userController');

const router = express.Router();

router.post('/register',upload.single('avatar'), registration);
// router.route('/register').post(upload.single('avatar'),registration);
router.route('/login').post(login);

module.exports = router;