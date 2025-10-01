import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import axios from "axios"; 
import { Pinecone } from "@pinecone-database/pinecone";
import mongoose from "mongoose";    
import Chat from "./models/Chat.js";

// This keeps the website alive in Render
const url = `https://askuni-seven.vercel.app/`;
const interval = 30000;
function reloadWebsite() {
  axios.get(url)
    .then(() => console.log("Website reloaded"))
    .catch((error) => console.error(`Error: ${error.message}`));
}
setInterval(reloadWebsite, interval);

dotenv.config();
const app = express();




// CORS configuration
app.use(cors({
  origin: [
    "http://localhost:5173",
    "https://askuni-seven.vercel.app"
  ],
  methods: ["GET", "POST", "DELETE"],
  credentials: true,
}));

app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error(" MongoDB connection error:", err));

//Root Route
app.get("/", async (req, res) => {
  res.send("Backend is running");

  try {
    const result = await executePython(`python/script.py`);
    console.log("Python script result:", result);
  } catch (error) {
    console.error("Python script error:", error);
  }
});

//Fetch chat history
app.get("/api/chats/:userId", async (req, res) => {
  const { userId } = req.params;
  try {
    const chats = await Chat.find({ userId }).sort({ createdAt: 1 });
    res.json(chats);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch chat history" });
  }
});

//Chat endpoint
app.post("/api/chat", async (req, res) => {
  const { userId, message, chatId } = req.body;
  const lowerMsg = message.toLowerCase();

  const pc = new Pinecone({ apiKey: process.env.PINECONE_API_KEY });
  const assistant = pc.assistant("askuni");
  let reply = "Sorry, I don’t have information about that. Please contact the college directly.";

  try {
    console.log("Asking the question:", lowerMsg);

    const response = await assistant.chat({
      messages: [{ role: "user", content: lowerMsg }],
    });

    reply = response?.message?.content || "No answer returned.";
    console.log("Answer:", reply);

    let chat;

    if (chatId) {
      chat = await Chat.findById(chatId);
      chat.messages.push({ role: "user", content: message });
      chat.messages.push({ role: "bot", content: reply });
      await chat.save();
    } else {
      chat = new Chat({
        userId,
        messages: [
          { role: "user", content: message },
          { role: "bot", content: reply },
        ],
      });
      await chat.save();
    }

    res.json({ reply, chatId: chat._id });

  } catch (error) {
    console.error(" Detailed error:", error);
    res.status(500).json({ reply: "Error connecting to server" });
  }
});

// Start server 
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
