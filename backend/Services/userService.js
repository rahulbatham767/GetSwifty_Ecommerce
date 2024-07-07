// src/services/userService.js
const User = require("../models/User");

const userService = {
  getAllUsers: async () => {
    try {
      return await User.find();
    } catch (error) {
      throw new Error("Error fetching users");
    }
  },

  getUserById: async (userId) => {
    try {
      return await User.findById(userId);
    } catch (error) {
      throw new Error("Error fetching user by ID");
    }
  },

  createUser: async (userData) => {
    try {
      const newUser = new User(userData);
      return await newUser.save();
    } catch (error) {
      throw new Error("Error creating user");
    }
  },

  updateUserById: async (userId, updatedData) => {
    try {
      return await User.findByIdAndUpdate(userId, updatedData, { new: true });
    } catch (error) {
      throw new Error("Error updating user by ID");
    }
  },

  deleteUserById: async (userId) => {
    try {
      return await User.findByIdAndRemove(userId);
    } catch (error) {
      throw new Error("Error deleting user by ID");
    }
  },
};

module.exports = userService;
