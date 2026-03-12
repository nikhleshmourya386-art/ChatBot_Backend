// import express from "express";
// import cors from "cors";
// import chatRoute from "./route/chat.js";

// const app = express();
// const port=process.env.PORT||5000
// app.use(cors());
// app.use(express.json());

// app.use("/api", chatRoute);

// app.listen(port, () => {
//   console.log("Server running on port 5000");
// });





import express from "express";
import cors from "cors";
import chatRoute from "./route/chat.js";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Chatbot Backend Running 🚀");
});

app.use("/api", chatRoute);

export default function handler(req, res) {
  return app(req, res);
}