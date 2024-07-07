// src/services/reviewService.js
const Review = require("../models/Review");

const reviewService = {
  getAllReviews: async () => {
    try {
      return await Review.find();
    } catch (error) {
      throw new Error("Error fetching reviews");
    }
  },

  getReviewsByProductId: async (productId) => {
    try {
      return await Review.find({ productId });
    } catch (error) {
      throw new Error("Error fetching reviews by product ID");
    }
  },

  createReview: async (reviewData) => {
    try {
      const newReview = new Review(reviewData);
      return await newReview.save();
    } catch (error) {
      throw new Error("Error creating review");
    }
  },

  updateReviewById: async (reviewId, updatedData) => {
    try {
      return await Review.findByIdAndUpdate(reviewId, updatedData, {
        new: true,
      });
    } catch (error) {
      throw new Error("Error updating review by ID");
    }
  },

  deleteReviewById: async (reviewId) => {
    try {
      return await Review.findByIdAndRemove(reviewId);
    } catch (error) {
      throw new Error("Error deleting review by ID");
    }
  },
};

module.exports = reviewService;
