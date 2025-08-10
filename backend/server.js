const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const connectDB = require("./config/db");
const path = require("path");
require("dotenv").config();
const authRoutes = require("./routes/authRoutes")
const sessionRoutes = require("./routes/sessionRoutes")

const app = express();
app.use(express.json());


const corsOptions = {
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"] 
};

app.use(cors(corsOptions));

app.use("/uploads" , express.static(path.join(__dirname, "uploads")));

connectDB();

app.use("/api/auth",authRoutes);
app.use("/api/sessions", sessionRoutes);
// app.use("/api/questions", questionRoutes);

// app.use("/api/ai/generate-questions",protect,generateInterviewQuestions);
// app.use("/api/ai/generate-explanation",protect,generateConceptExplanation);


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))