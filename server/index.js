import express from "express";
import dotenv from "dotenv";
import cors from "cors";

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
app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

app.post("/api/chat", (req, res) => {
  const { message } = req.body;

  res.json({ reply: `You said: ${message}` });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
