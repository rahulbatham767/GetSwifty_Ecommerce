// src/routes/reviewRoutes.js
const express = require("express");
const router = express.Router();
const Review = require("../Models/Review");

// Create a new review
router.post("/", async (req, res) => {
  try {
    const { userId, productId, rating, comment } = req.body;
    const newReview = new Review({ userId, productId, rating, comment });
    const savedReview = await newReview.save();

    res.json(savedReview);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Get all reviews
router.get("/", async (req, res) => {
  try {
    const allReviews = await Review.find();
    res.json(allReviews);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Get reviews for a specific product
router.get("/product/:productId", async (req, res) => {
  try {
    const productId = req.params.productId;
    const productReviews = await Review.find({ productId });
    res.json(productReviews);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Get a specific review by ID
router.get("/:reviewId", async (req, res) => {
  try {
    const reviewId = req.params.reviewId;
    const review = await Review.findById(reviewId);
    if (!review) {
      return res.status(404).json({ error: "Review not found" });
    }
    res.json(review);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Update a review by ID
router.put("/:reviewId", async (req, res) => {
  try {
    const reviewId = req.params.reviewId;
    const { userId, productId, rating, comment } = req.body;
    const updatedReview = await Review.findByIdAndUpdate(
      reviewId,
      { userId, productId, rating, comment },
      { new: true }
    );

    if (!updatedReview) {
      return res.status(404).json({ error: "Review not found" });
    }

    res.json(updatedReview);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Delete a review by ID
router.delete("/:reviewId", async (req, res) => {
  try {
    const reviewId = req.params.reviewId;
    const deletedReview = await Review.findByIdAndRemove(reviewId);

    if (!deletedReview) {
      return res.status(404).json({ error: "Review not found" });
    }

    res.json(deletedReview);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
