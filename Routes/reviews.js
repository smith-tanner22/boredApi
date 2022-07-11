const express = require('express');
const { requiresAuth } = require('express-openid-connect');
const router = express.Router();

const reviewController = require('../controllers/reviews');

router.get('/', reviewController.getAll);

router.get('/:id', reviewController.getReviewById);

router.post('/', requiresAuth(), reviewController.createReview);

router.put('/:id', requiresAuth(), reviewController.updateReview);

router.delete('/:id', requiresAuth(), reviewController.deleteReview);

module.exports = router;
