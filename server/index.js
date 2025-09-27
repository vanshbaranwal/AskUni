import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import collegeInfo from "./data/collegeInfo.js";
import axios from "axios"; // website active dependencies
import { spawn } from "child_process"; 
import path from "path";


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


// function to execute script.py file in python folder 

const executePython = async (script, args) => {
    const argsList  = args.map(arg => arg.toString()); //argsList = arguments
    const pythonPath = path.join(__dirname, '.venv', 'Scripts', 'python.exe');
    
    const py = spawn(pythonPath, [script, ...argsList]);
    const result = await new Promise((res, rej) => {
        let output = '';
        
        py.stdout.on('data', (data) => {
            output += data.toString();
        });
        
        py.stderr.on("data", (data) => {
            console.error(`[python] error occured : ${data}`);
            rej(`error occured in ${script}`);
        });
        
        py.on("exit", (code) => {
            console.log(`child process exited with code ${code}`);
            
            // Try to parse as JSON, if it fails, treat as plain text
            try {
                const jsonOutput = JSON.parse(output.trim());
                res(jsonOutput);
            } catch (e) {
                // If not JSON, return as plain text
                res({ message: output.trim(), status: "success" });
            }
        });
    });
    return result;
}



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

app.post("/api/chat", (req, res) => {
  const { message } = req.body;
  const lowerMsg = message.toLowerCase();

  let reply = "Sorry, I don’t have information about that. Please contact the college directly.";

  // Fee-related responses
  if (lowerMsg.includes("hello") || lowerMsg.includes("hi") || lowerMsg.includes("hey")) {
  reply = "Hello 👋 Welcome to AskUni! How can I help you today?";
}else if (lowerMsg.includes("bba") && lowerMsg.includes("fee")) {
    reply = collegeInfo.fee.bba;
  } else if (lowerMsg.includes("bca") && lowerMsg.includes("fee")) {
    reply = collegeInfo.fee.bca;
  } else if (lowerMsg.includes("bsc") && lowerMsg.includes("fee")) {
    reply = collegeInfo.fee.bsc;
  } else if (lowerMsg.includes("mba") && lowerMsg.includes("fee")) {
    reply = collegeInfo.fee.mba;
  } else if (lowerMsg.includes("fee")) {
    reply = "We offer multiple courses. Please specify (BBA, BCA, B.Sc, or MBA).";
  }

  // Other info
  else if (lowerMsg.includes("hostel")) {
    reply = collegeInfo.hostel;
  } else if (lowerMsg.includes("admission")) {
    reply = collegeInfo.admission;
  } else if (lowerMsg.includes("placement")) {
    reply = collegeInfo.placement;
  } else if (lowerMsg.includes("library")) {
    reply = collegeInfo.library;
  } else if (lowerMsg.includes("contact") || lowerMsg.includes("phone")) {
    reply = collegeInfo.contact;
  }

  res.json({ reply });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
