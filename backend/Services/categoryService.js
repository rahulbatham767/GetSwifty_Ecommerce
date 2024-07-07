// src/services/categoryService.js
const Category = require("../models/Category");

const categoryService = {
  getAllCategories: async () => {
    try {
      return await Category.find();
    } catch (error) {
      throw new Error("Error fetching categories");
    }
  },

  getCategoryById: async (categoryId) => {
    try {
      return await Category.findById(categoryId);
    } catch (error) {
      throw new Error("Error fetching category by ID");
    }
  },

  createCategory: async (categoryData) => {
    try {
      const newCategory = new Category(categoryData);
      return await newCategory.save();
    } catch (error) {
      throw new Error("Error creating category");
    }
  },

  updateCategoryById: async (categoryId, updatedData) => {
    try {
      return await Category.findByIdAndUpdate(categoryId, updatedData, {
        new: true,
      });
    } catch (error) {
      throw new Error("Error updating category by ID");
    }
  },

  deleteCategoryById: async (categoryId) => {
    try {
      return await Category.findByIdAndRemove(categoryId);
    } catch (error) {
      throw new Error("Error deleting category by ID");
    }
  },
};

module.exports = categoryService;
