const express = require('express');
const { requiresAuth } = require('express-openid-connect');
const router = express.Router();

router.use('/', require('./swagger'));
router.use('/ideas', require('./ideas'));
router.use('/media', require('./media'));
router.use('/reviews', require('./reviews'));
router.use('/users', requiresAuth(), require('./user'));

module.exports = router;
