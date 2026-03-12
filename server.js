import express from "express";
import cors from "cors";
import chatRoute from "./route/chat.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", chatRoute);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
