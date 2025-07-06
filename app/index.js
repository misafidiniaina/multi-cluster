require("dotenv").config();
const express = require("express");
const path = require("path");
const { sequelize } = require("./models");

const app = express();

// View engine setup
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Static files (optional)
app.use(express.static(path.join(__dirname, "public")));

// Routes
app.use("/", require("./routes/viewRoutes"));

// Test DB connection and start server
const PORT = process.env.PORT || 3000;

sequelize
  .authenticate()
  .then(() => {
    console.log("✅ Connected to PostgreSQL successfully.");
    return sequelize.sync(); // Sync models
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`🚀 App is running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("❌ Failed to connect to DB:", err);
  });
