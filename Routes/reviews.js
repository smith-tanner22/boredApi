const express = require('express');
const { requiresAuth } = require('express-openid-connect');
const router = express.Router();

const reviewController = require('../controllers/reviews');

router.get('/', reviewController.getAll);

router.get('/:id', reviewController.getReviewById);

router.post('/', reviewController.createReview);

router.put('/:id', reviewController.updateReview);

router.delete('/:id', reviewController.deleteReview);

module.exports = router;
