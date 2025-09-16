import { useState } from "react";
import axios from "axios";

export default function ChatInput({ messages, setMessages }) {
  const [input, setInput] = useState("");

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]); // ✅ use functional update

    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/chat`, // ✅ call proper route
        { message: input }
      );

      const botMessage = {
        role: "bot",
        content: res.data.reply || "No response",
      };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error(error); // ✅ useful for debugging
      setMessages((prev) => [
        ...prev,
        { role: "bot", content: "Error connecting to server" },
      ]);
    } finally {
      setInput(""); // ✅ clear input at the end
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
      <button onClick={sendMessage}>Send</button>
    </div>
  );
}