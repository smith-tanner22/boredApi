const express = require('express');
const { requiresAuth } = require('express-openid-connect');
const router = express.Router();

const mediaController = require('../controllers/media');

router.get('/', mediaController.getAll);

router.get('/:id', mediaController.getMediaById);

router.post('/', requiresAuth(), mediaController.createMedia);

router.put('/:id', requiresAuth(), mediaController.updateMedia);

router.delete('/:id', requiresAuth(), mediaController.deleteMedia);

module.exports = router;
