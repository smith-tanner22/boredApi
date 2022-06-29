const express = require('express');
const router = express.Router();

const ideasController = require('../controllers/ideas');
// const validation = require('../validation/ideas');

router.get('/', ideasController.getAll);
router.get('/:id', ideasController.getSingle);

router.post('/', ideasController.createIdea);

router.put('/:id', ideasController.updateIdea);

router.delete('/:id', ideasController.deleteIdea);

module.exports = router;
