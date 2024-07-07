// src/routes/productRoutes.js
const express = require("express");
const router = express.Router();
const Product = require("../Models/Product");

// Create a new product
router.post("/", async (req, res) => {
  try {
    const {
      name,
      company,
      price,
      category,
      stars,
      stock,
      reviews,
      // colors,
      description,
      // featured,
      image,
    } = req.body;
    const newProduct = new Product({
      name,
      company,
      price,
      category,
      // colors,
      description,
      // featured,
      image,
    });
    const savedProduct = await newProduct.save();

    res.json(savedProduct);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Get all products
router.get("/", async (req, res) => {
  try {
    const allProducts = await Product.find();
    res.json(allProducts);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Get a specific product by ID
router.get("/singleproduct/:id", async (req, res) => {
  try {
    const productId = req.params.id;
    console.log(productId);

    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }
    res.json(product);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Update a product by ID
router.put("/:id", async (req, res) => {
  try {
    const productId = req.params.id;
    console.log(productId);

    const { name, description, price, category, image, stock } = req.body;
    const updatedProduct = await Product.findByIdAndUpdate(
      productId,
      { name, description, price, category, image, stock },
      { new: true }
    );

    if (!updatedProduct) {
      return res.status(404).json({ error: "Product not found" });
    }

    res.json(updatedProduct);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error", error });
  }
});

// Delete a product by ID
router.delete("/:id", async (req, res) => {
  try {
    const productId = req.params.id;
    console.log(productId);

    const deletedProduct = await Product.findByIdAndDelete(productId);

    if (!deletedProduct) {
      return res.status(404).json({ error: "Product not found" });
    }

    res.json(deletedProduct);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
