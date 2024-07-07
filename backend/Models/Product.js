const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  company: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  colors: {
    type: [String],
    default: ["black"],
    required: true,
  },
  amount: {
    type: Number,
    default: 1,
    require: true,
  },
  image: {
    type: Array,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  featured: {
    type: Boolean,
    default: false,
  },
  stars: {
    type: Number,
    default: 0,
  },
  stock: {
    type: Number,
    default: 1,
  },
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
