// src/controllers/reviewController.js
const reviewService = require("../services/reviewService");

const reviewController = {
  getAllReviews: async (req, res) => {
    try {
      const reviews = await reviewService.getAllReviews();
      res.json(reviews);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  getReviewsByProductId: async (req, res) => {
    const productId = req.params.productId;
    try {
      const reviews = await reviewService.getReviewsByProductId(productId);
      res.json(reviews);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  createReview: async (req, res) => {
    const reviewData = req.body;
    try {
      const newReview = await reviewService.createReview(reviewData);
      res.json(newReview);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  updateReviewById: async (req, res) => {
    const reviewId = req.params.id;
    const updatedData = req.body;
    try {
      const updatedReview = await reviewService.updateReviewById(
        reviewId,
        updatedData
      );
      if (!updatedReview) {
        return res.status(404).json({ error: "Review not found" });
      }
      res.json(updatedReview);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  deleteReviewById: async (req, res) => {
    const reviewId = req.params.id;
    try {
      const deletedReview = await reviewService.deleteReviewById(reviewId);
      if (!deletedReview) {
        return res.status(404).json({ error: "Review not found" });
      }
      res.json(deletedReview);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};

module.exports = reviewController;
