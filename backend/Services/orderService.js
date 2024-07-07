// src/services/orderService.js
const Order = require("../models/Order");

const orderService = {
  getAllOrders: async () => {
    try {
      return await Order.find();
    } catch (error) {
      throw new Error("Error fetching orders");
    }
  },

  getOrderByUserId: async (userId) => {
    try {
      return await Order.find({ userId });
    } catch (error) {
      throw new Error("Error fetching orders by user ID");
    }
  },

  createOrder: async (orderData) => {
    try {
      const newOrder = new Order(orderData);
      return await newOrder.save();
    } catch (error) {
      throw new Error("Error creating order");
    }
  },

  updateOrderStatus: async (orderId, newStatus) => {
    try {
      return await Order.findByIdAndUpdate(
        orderId,
        { status: newStatus },
        { new: true }
      );
    } catch (error) {
      throw new Error("Error updating order status");
    }
  },

  deleteOrderById: async (orderId) => {
    try {
      return await Order.findByIdAndRemove(orderId);
    } catch (error) {
      throw new Error("Error deleting order by ID");
    }
  },
};

module.exports = orderService;
