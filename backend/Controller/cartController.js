// src/controllers/cartController.js
const cartService = require("../services/cartService");

const cartController = {
  getCartByUserId: async (req, res) => {
    const userId = req.params.userId;
    try {
      const cart = await cartService.getCartByUserId(userId);
      res.json(cart);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  addToCart: async (req, res) => {
    const { userId, productId, quantity } = req.body;
    try {
      const updatedCart = await cartService.addToCart(
        userId,
        productId,
        quantity
      );
      res.json(updatedCart);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  removeFromCart: async (req, res) => {
    const { userId, productId } = req.body;
    try {
      const updatedCart = await cartService.removeFromCart(userId, productId);
      res.json(updatedCart);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  clearCart: async (req, res) => {
    const userId = req.params.userId;
    try {
      const clearedCart = await cartService.clearCart(userId);
      res.json(clearedCart);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};

module.exports = cartController;
