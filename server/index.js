import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import axios from "axios"; // website active dependencies
import { spawn } from "child_process"; 
import path from "path";
import { Pinecone } from "@pinecone-database/pinecone";


//This is code make active the website in render
const url = `https://askuni-seven.vercel.app/`;
const interval = 30000;

function reloadWebsite() {
  axios
    .get(url)
    .then((response) => {
      console.log("website reloded");
    })
    .catch((error) => {
      console.error(`Error : ${error.message}`);
    });
}

setInterval(reloadWebsite, interval);

dotenv.config();

const app = express();

//CORS configuration
app.use(cors({
  origin: [
    "http://localhost:5173",             // local frontend
    "https://askuni-seven.vercel.app"    // live frontend
  ],
  methods: ["GET", "POST"],
  credentials: true,
}));

app.use(express.json());



app.get("/", async (req, res) => {
  res.send("Backend is running 🚀");

  // fetching the pinecone data from the from script.py.
  try {
      const result = await executePython(`python/script.py`);
      res.json({result: result})
  } catch (error) {
      res.status(500).json({error: error})
  }
});


app.post("/api/chat", async (req, res) => {
  const { message } = req.body;
  const lowerMsg = message.toLowerCase();

  //setup of pinecone
  const pc = new Pinecone({ apiKey: process.env.PINECONE_API_KEY });
  const assistant = pc.assistant("askuni");
  let reply = "Sorry, I don’t have information about that. Please contact the college directly.";
  //getting information from pinnecone
  try {
    console.log("Asking the question:", lowerMsg);

    const response = await assistant.chat({
      messages: [{ role: "user", content: lowerMsg }],
    });

    console.log(" Getting the Full response:", JSON.stringify(response, null, 2));

    // Correctly extract the answer from message.content
    reply = response?.message?.content || "No answer returned.";
    console.log("Answer:", reply);
    
    res.json({ reply });

    
  } catch (error) {
    console.error("❌ Detailed error:", error);
    
  }
  
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
