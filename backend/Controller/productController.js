// src/controllers/productController.js
const productService = require("../services/productService");

const productController = {
  getAllProducts: async (req, res) => {
    try {
      const products = await productService.getAllProducts();
      res.json(products);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  getProductById: async (req, res) => {
    const productId = req.params.id;
    try {
      const product = await productService.getProductById(productId);
      if (!product) {
        return res.status(404).json({ error: "Product not found" });
      }
      res.json(product);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  createProduct: async (req, res) => {
    const productData = req.body;
    try {
      const newProduct = await productService.createProduct(productData);
      res.json(newProduct);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  updateProductById: async (req, res) => {
    const productId = req.params.id;
    const updatedData = req.body;
    try {
      const updatedProduct = await productService.updateProductById(
        productId,
        updatedData
      );
      if (!updatedProduct) {
        return res.status(404).json({ error: "Product not found" });
      }
      res.json(updatedProduct);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  deleteProductById: async (req, res) => {
    const productId = req.params.id;
    try {
      const deletedProduct = await productService.deleteProductById(productId);
      if (!deletedProduct) {
        return res.status(404).json({ error: "Product not found" });
      }
      res.json(deletedProduct);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};

module.exports = productController;
