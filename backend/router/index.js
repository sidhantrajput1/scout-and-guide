const {Router} = require('express');
const {signup} = require('../controller/auth.js');

const router = Router();

router.post("/auth/signup",signup);

module.exports = router;