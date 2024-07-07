// src/routes/orderRoutes.js
const express = require("express");
const router = express.Router();
const Order = require("../models/Order");

const isValidObjectId = (id) => {
  if (typeof id !== "string") return false;
  const ObjectIdPattern = /^[0-9a-fA-F]{24}$/;
  return ObjectIdPattern.test(id);
};

// Create a new order
router.post("/", async (req, res) => {
  try {
    const {
      userId,
      productId,
      quantity,
      totalPrice,
      status,
      shippingAddress,
      fname,
      lname,
      user,
      phone,
    } = req.body;
    console.log(req.body);

    if (!isValidObjectId(productId)) {
      return res.status(400).json({ error: "Invalid productId" });
    }

    // Validate shippingAddress
    if (
      !shippingAddress ||
      !shippingAddress.zip ||
      !shippingAddress.state ||
      !shippingAddress.city ||
      !shippingAddress.street
    ) {
      return res
        .status(400)
        .json({ error: "shippingAddress fields are required" });
    }

    const newOrder = new Order({
      userId,
      productId,
      quantity,
      totalPrice,
      status,
      shippingAddress,
      fname,
      lname,
      user,
      phone,
    });
    console.log(newOrder);

    const savedOrder = await newOrder.save();

    res.json(savedOrder);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error " + error });
  }
});

// Get all orders
router.get("/", async (req, res) => {
  try {
    const allOrders = await Order.find();
    res.json(allOrders);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Get orders for a specific user
router.get("/user/:userId", async (req, res) => {
  try {
    const userId = req.params.userId;
    const userOrders = await Order.find({ userId });
    res.json(userOrders);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Get a specific order by ID
router.get("/:orderId", async (req, res) => {
  try {
    const orderId = req.params.orderId;
    const order = await Order.findById(orderId);
    if (!order) {
      return res.status(404).json({ error: "Order not found" });
    }
    res.json(order);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Update an order by ID
router.put("/:orderId", async (req, res) => {
  try {
    const orderId = req.params.orderId;
    const { userId, productId, quantity, totalPrice, status } = req.body;
    const updatedOrder = await Order.findByIdAndUpdate(
      orderId,
      { userId, productId, quantity, totalPrice, status },
      { new: true }
    );

    if (!updatedOrder) {
      return res.status(404).json({ error: "Order not found" });
    }

    res.json(updatedOrder);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Delete an order by ID
router.delete("/:orderId", async (req, res) => {
  try {
    const orderId = req.params.orderId;
    const deletedOrder = await Order.findByIdAndRemove(orderId);

    if (!deletedOrder) {
      return res.status(404).json({ error: "Order not found" });
    }

    res.json(deletedOrder);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
