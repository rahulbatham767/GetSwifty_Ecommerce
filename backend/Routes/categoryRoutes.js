// src/routes/categoryRoutes.js
const express = require("express");
const router = express.Router();
const Category = require("../Models/Category");

// Create a new category
router.post("/", async (req, res) => {
  try {
    const { name, description } = req.body;
    const newCategory = new Category({ name, description });
    const savedCategory = await newCategory.save();

    res.json(savedCategory);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Get all categories
router.get("/", async (req, res) => {
  try {
    const allCategories = await Category.find();
    res.json(allCategories);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Get a specific category by ID
router.get("/:categoryId", async (req, res) => {
  try {
    const categoryId = req.params.categoryId;
    const category = await Category.findById(categoryId);
    if (!category) {
      return res.status(404).json({ error: "Category not found" });
    }
    res.json(category);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Update a category by ID
router.put("/:categoryId", async (req, res) => {
  try {
    const categoryId = req.params.categoryId;
    const { name, description } = req.body;
    const updatedCategory = await Category.findByIdAndUpdate(
      categoryId,
      { name, description },
      { new: true }
    );

    if (!updatedCategory) {
      return res.status(404).json({ error: "Category not found" });
    }

    res.json(updatedCategory);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Delete a category by ID
router.delete("/:categoryId", async (req, res) => {
  try {
    const categoryId = req.params.categoryId;
    const deletedCategory = await Category.findByIdAndRemove(categoryId);

    if (!deletedCategory) {
      return res.status(404).json({ error: "Category not found" });
    }

    res.json(deletedCategory);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
