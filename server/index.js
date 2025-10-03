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

// Delete a chat by its ID
app.delete("/api/chats/:userId/:chatId", async (req, res) => {
  let { userId, chatId } = req.params;

  // Trim the chatId to remove whitespace or newlines
  chatId = chatId.trim();

  try {
    const chat = await Chat.findOne({ _id: chatId, userId });
    if (!chat) return res.status(404).json({ message: "Chat not found" });

    await chat.deleteOne(); // remove the chat
    res.status(200).json({ message: "Chat deleted successfully" });
  } catch (error) {
    console.error("Error deleting chat:", error);
    res.status(500).json({ message: "Failed to delete chat" });
  }
});


app.post("/active", (req, res) => {
  console.log("I am active", { ip: req.ip, origin: req.get("origin"), body: req.body });
  res.json({ message: "Backend is active!" });
});

// Start server 
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
