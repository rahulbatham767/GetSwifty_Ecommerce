// src/controllers/categoryController.js
const categoryService = require("../services/categoryService");

const categoryController = {
  getAllCategories: async (req, res) => {
    try {
      const categories = await categoryService.getAllCategories();
      res.json(categories);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  getCategoryById: async (req, res) => {
    const categoryId = req.params.id;
    try {
      const category = await categoryService.getCategoryById(categoryId);
      if (!category) {
        return res.status(404).json({ error: "Category not found" });
      }
      res.json(category);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  createCategory: async (req, res) => {
    const categoryData = req.body;
    try {
      const newCategory = await categoryService.createCategory(categoryData);
      res.json(newCategory);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  updateCategoryById: async (req, res) => {
    const categoryId = req.params.id;
    const updatedData = req.body;
    try {
      const updatedCategory = await categoryService.updateCategoryById(
        categoryId,
        updatedData
      );
      if (!updatedCategory) {
        return res.status(404).json({ error: "Category not found" });
      }
      res.json(updatedCategory);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  deleteCategoryById: async (req, res) => {
    const categoryId = req.params.id;
    try {
      const deletedCategory = await categoryService.deleteCategoryById(
        categoryId
      );
      if (!deletedCategory) {
        return res.status(404).json({ error: "Category not found" });
      }
      res.json(deletedCategory);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};

module.exports = categoryController;
