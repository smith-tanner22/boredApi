const express = require('express');
const { requiresAuth } = require('express-openid-connect');
const router = express.Router();

const mediaController = require('../controllers/media');

router.get('/', mediaController.getAll);

router.get('/:id', mediaController.getMediaById);

router.post('/', mediaController.createMedia);

router.put('/:id', mediaController.updateMedia);

router.delete('/:id', mediaController.deleteMedia);

module.exports = router;
