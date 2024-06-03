const express = require('express');
const{ registration,login } = require('../Controller/userController');
const router = express.Router();

router.route('/register').post(registration);
router.route('/login').post(login);
module.exports = router;