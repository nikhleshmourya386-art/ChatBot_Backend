import dotenv from 'dotenv'
import express from "express";
import cors from "cors";
import chatRoute from "./routes/chat.js";

const app = express();
dotenv.config()
app.use(cors());
app.use(express.json());

app.use("/",(req,res)=>{
  res.send("Hello from my Side 💛")
})

app.use("/api", chatRoute);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});