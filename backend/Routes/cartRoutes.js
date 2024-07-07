// src/routes/cartRoutes.js
const express = require("express");
const router = express.Router();
const Cart = require("../Models/Cart");

// Create a new item in the cart
router.post("/", async (req, res) => {
  try {
    const { userId, productId, quantity } = req.body;
    const newCartItem = new Cart({ userId, productId, quantity });
    const savedCartItem = await newCartItem.save();

    res.json(savedCartItem);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Get all items in the cart
router.get("/", async (req, res) => {
  try {
    const allCartItems = await Cart.find();
    res.json(allCartItems);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Get cart items for a specific user
router.get("/user/:userId", async (req, res) => {
  try {
    const userId = req.params.userId;
    const userCartItems = await Cart.find({ userId });
    res.json(userCartItems);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Update quantity of an item in the cart
router.put("/:cartItemId", async (req, res) => {
  try {
    const cartItemId = req.params.cartItemId;
    const { quantity } = req.body;
    const updatedCartItem = await Cart.findByIdAndUpdate(
      cartItemId,
      { quantity },
      { new: true }
    );

    if (!updatedCartItem) {
      return res.status(404).json({ error: "Cart item not found" });
    }

    res.json(updatedCartItem);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Delete an item from the cart
router.delete("/:cartItemId", async (req, res) => {
  try {
    const cartItemId = req.params.cartItemId;
    const deletedCartItem = await Cart.findByIdAndRemove(cartItemId);

    if (!deletedCartItem) {
      return res.status(404).json({ error: "Cart item not found" });
    }

    res.json(deletedCartItem);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
