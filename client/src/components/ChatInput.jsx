import { useState } from "react";
import axios from "axios";

export default function ChatInput({ messages, setMessages }) {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput(""); 
    setLoading(true);

    // Replace "typing..." with div typing
    const typingMessage = { 
      role: "bot", 
      content: (
        <div className="typing">
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
        </div>
      ) 
    };
    setMessages((prev) => [...prev, typingMessage]);

    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/chat`,
        { message: input }
      );

      const botMessage = {
        role: "bot",
        content: res.data.reply || "No response",
      };

      // Replace typing div with real response
      setMessages((prev) => [
        ...prev.slice(0, -1),
        botMessage,
      ]);
    } catch (error) {
      console.error(error);
      setMessages((prev) => [
        ...prev.slice(0, -1), // remove typing
        { role: "bot", content: "Error connecting to server" },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="chat-input">
      <input
        type="text"
        placeholder="Ask something..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && sendMessage()}
      />
      <button onClick={sendMessage} disabled={loading}>
        {loading ? "..." : "Send"}
      </button>
    </div>
  );
}
