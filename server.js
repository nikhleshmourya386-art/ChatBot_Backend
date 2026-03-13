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
import chatRoute from "./api/chat.js";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Chatbot Backend Running 🚀");
});

app.use("/api", chatRoute);
    const jokes = [
  {
    id: 1,
    title: 'A joke',
    content: 'This is a joke'
  },
  {
    id: 2,
    title: 'Another joke',
    content: 'This is another joke'
  },
  {
    id: 3,
    title: 'Programmer joke',
    content: 'Why do programmers hate nature? Too many bugs.'
  },
  {
    id: 4,
    title: 'Coffee joke',
    content: 'I like my coffee like my code: strong and without errors.'
  },
  {
    id: 5,
    title: 'Debugging joke',
    content: 'Debugging: Being the detective in a crime movie where you are also the murderer.'
  },
  {
    id: 6,
    title: 'Laptop joke',
    content: 'My laptop and I have a relationship. It works, I give it electricity.'
  },
  {
    id: 7,
    title: 'WiFi joke',
    content: 'WiFi dropped… now I know how it feels to be disconnected from society.'
  }
];

app.get('/api/jokes',(req,res)=>{
  res.send(jokes)
})

if (process.env.NODE_ENV !== "production") {
  const port = process.env.PORT||5000;
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
}

export default app;