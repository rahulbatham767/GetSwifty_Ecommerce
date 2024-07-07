// index.js

const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const bodyParser = require("body-parser"); // Optional, depending on your setup
const productRoutes = require("./Routes/productRoutes");
const userRoutes = require("./Routes/userRoutes");
const cartRoutes = require("./Routes/cartRoutes");
const orderRoutes = require("./Routes/orderRoutes");
const paymentRoute = require("./Routes/paymentRoute");
const categoryRoutes = require("./Routes/categoryRoutes");
const reviewRoutes = require("./Routes/reviewRoutes");

const shortid = require("shortid");
const path = require("path");
const cors = require("cors");
// Load environment variables from .env file
dotenv.config();

// Create Express app
const app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
    Credential: true,
  })
);
// Connect to MongoDB
mongoose
  .connect(process.env.MONGODB_URI, {
    dbname: "Ecommerce",
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.log("you are not connected to Database " + err);
  });

// Middleware
app.use(bodyParser.json()); // Optional, depending on your setup
app.use(bodyParser.urlencoded({ extended: true })); // Optional, depending on your setup

// Routes

app.use("/api/product", productRoutes);
app.use("/api/payment", paymentRoute);
app.use("/api/users", userRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/categories", categoryRoutes);
app.use("/api/reviews", reviewRoutes);

// Start the server
const PORT = process.env.PORT;
