// src/controllers/userController.js
const userService = require("../services/userService");

const userController = {
  getAllUsers: async (req, res) => {
    try {
      const users = await userService.getAllUsers();
      res.json(users);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  getUserById: async (req, res) => {
    const userId = req.params.id;
    try {
      const user = await userService.getUserById(userId);
      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }
      res.json(user);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  createUser: async (req, res) => {
    const userData = req.body;
    try {
      const newUser = await userService.createUser(userData);
      res.json(newUser);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  updateUserById: async (req, res) => {
    const userId = req.params.id;
    const updatedData = req.body;
    try {
      const updatedUser = await userService.updateUserById(userId, updatedData);
      if (!updatedUser) {
        return res.status(404).json({ error: "User not found" });
      }
      res.json(updatedUser);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  deleteUserById: async (req, res) => {
    const userId = req.params.id;
    try {
      const deletedUser = await userService.deleteUserById(userId);
      if (!deletedUser) {
        return res.status(404).json({ error: "User not found" });
      }
      res.json(deletedUser);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};

module.exports = userController;
