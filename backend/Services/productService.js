// src/services/productService.js
const Product = require("../models/Product");

const productService = {
  getAllProducts: async () => {
    try {
      return await Product.find();
    } catch (error) {
      throw new Error("Error fetching products");
    }
  },

  getProductById: async (productId) => {
    try {
      return await Product.findById(productId);
    } catch (error) {
      throw new Error("Error fetching product by ID");
    }
  },

  createProduct: async (productData) => {
    try {
      const newProduct = new Product(productData);
      return await newProduct.save();
    } catch (error) {
      throw new Error("Error creating product");
    }
  },

  updateProductById: async (productId, updatedData) => {
    try {
      return await Product.findByIdAndUpdate(productId, updatedData, {
        new: true,
      });
    } catch (error) {
      throw new Error("Error updating product by ID");
    }
  },

  deleteProductById: async (productId) => {
    try {
      return await Product.findByIdAndRemove(productId);
    } catch (error) {
      throw new Error("Error deleting product by ID");
    }
  },
};

module.exports = productService;
