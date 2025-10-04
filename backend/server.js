const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGO_URI, {
  serverSelectionTimeoutMS: 5000,
  socketTimeoutMS: 45000,
})
  .then(() => console.log("MongoDB connected successfully"))
  .catch(err => {
    console.error("MongoDB connection error:", err);
    process.exit(1);
  });

// Add a simple test route
app.get("/api/test", (req, res) => {
  res.json({ message: "Backend is working!", timestamp: new Date() });
});

app.use("/api/students", require("./routes/studentRoutes"));

// If this file is run directly (node backend/server.js), start a server for local development.
if (require.main === module) {
  const port = process.env.PORT || 5000;
  app.listen(port, () => console.log(`Server running on port ${port}`));
} 

// Export the Express app. Vercel's Node builder will accept an exported app and wrap it as a serverless function.
module.exports = app;
