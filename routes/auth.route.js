const router = require('express').Router();

const {postSignUp, userRegistered,postLogIn, sendUser} = require('../controller/auth.controller');

router.post('/api/signup', postSignUp);
router.get('/api/signup', userRegistered);
router.post('/api/signin', postLogIn);
router.get('/api/signin', sendUser);

module.exports = router;