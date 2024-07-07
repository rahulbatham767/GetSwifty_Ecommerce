// src/controllers/orderController.js
const orderService = require("../services/orderService");

const orderController = {
  getAllOrders: async (req, res) => {
    try {
      const orders = await orderService.getAllOrders();
      res.json(orders);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  getOrderByUserId: async (req, res) => {
    const userId = req.params.userId;
    try {
      const orders = await orderService.getOrderByUserId(userId);
      res.json(orders);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  createOrder: async (req, res) => {
    const orderData = req.body;
    try {
      const newOrder = await orderService.createOrder(orderData);
      res.json(newOrder);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  updateOrderStatus: async (req, res) => {
    const orderId = req.params.id;
    const newStatus = req.body.status;
    try {
      const updatedOrder = await orderService.updateOrderStatus(
        orderId,
        newStatus
      );
      res.json(updatedOrder);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  deleteOrderById: async (req, res) => {
    const orderId = req.params.id;
    try {
      const deletedOrder = await orderService.deleteOrderById(orderId);
      res.json(deletedOrder);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};

module.exports = orderController;
