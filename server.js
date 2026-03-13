import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import chatRoute from "./routes/chat.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// API route FIRST
app.use("/api", chatRoute);

// Test route
app.get("/", (req, res) => {
  res.send("Hello from my Side 💛");
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});