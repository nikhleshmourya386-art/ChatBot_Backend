import express from "express";
import Groq from "groq-sdk";
import dotenv from "dotenv";

dotenv.config();

const router = express.Router();

const client = new Groq({
  apiKey: process.env.GROQ_API_KEY
});

router.post("/chat", async (req, res) => {

  const { messages } = req.body;

  try {

    
    const completion = await client.chat.completions.create({
      model: "moonshotai/kimi-k2-instruct-0905",
      messages: messages,
      temperature: 0.7,
      max_tokens: 2048
    });

    res.json({
      reply: completion.choices[0].message.content
    });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }

});

export default router;