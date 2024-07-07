// src/services/cartService.js
const Cart = require("../Models/Cart");

const cartService = {
  getCartByUserId: async (userId) => {
    try {
      return await Cart.findOne({ userId });
    } catch (error) {
      throw new Error("Error fetching cart by user ID");
    }
  },

  addToCart: async (userId, productId, quantity) => {
    try {
      let cart = await Cart.findOne({ userId });

      if (!cart) {
        cart = new Cart({ userId, items: [] });
      }

      const existingItem = cart.items.find(
        (item) => item.productId === productId
      );

      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        cart.items.push({ productId, quantity });
      }

      return await cart.save();
    } catch (error) {
      throw new Error("Error adding to cart");
    }
  },

  removeFromCart: async (userId, productId) => {
    try {
      const cart = await Cart.findOne({ userId });

      if (!cart) {
        throw new Error("Cart not found");
      }

      cart.items = cart.items.filter((item) => item.productId !== productId);

      return await cart.save();
    } catch (error) {
      throw new Error("Error removing from cart");
    }
  },

  clearCart: async (userId) => {
    try {
      const cart = await Cart.findOne({ userId });

      if (!cart) {
        throw new Error("Cart not found");
      }

      cart.items = [];

      return await cart.save();
    } catch (error) {
      throw new Error("Error clearing cart");
    }
  },
};

module.exports = cartService;
