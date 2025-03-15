const express = require('express');
const { register, login } = require('../controllers/userController.js');

const router = express.Router();

router.post('/signup', register);
router.post('/login', login);

module.exports = router;