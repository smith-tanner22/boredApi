const express = require('express');
const { requiresAuth } = require('express-openid-connect');
const router = express.Router();

const ideasController = require('../controllers/ideas');
// const validation = require('../validation/ideas');

router.get('/', ideasController.getAll);
router.get('/:id', ideasController.getSingle);

router.post('/', requiresAuth(), ideasController.createIdea);

router.put('/:id', requiresAuth(), ideasController.updateIdea);

router.delete('/:id', requiresAuth(), ideasController.deleteIdea);

module.exports = router;
