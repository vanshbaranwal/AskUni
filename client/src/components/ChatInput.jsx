import { useState } from "react";
import axios from "axios";
import send_icon from "/icons/send .png";

export default function ChatInput({ messages, setMessages, currentUserId, activeChatId, setActiveChatId }) {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim() || !currentUserId) return;

    const userMessage = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    const typingMessage = {
      role: "bot",
      content: (
        <div className="typing">
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
        </div>
      ),
    };
    setMessages((prev) => [...prev, typingMessage]);

    try {
      // Include chatId if exists
      const res = await axios.post(`${import.meta.env.VITE_API_URL}/api/chat`, {
        userId: currentUserId,
        message: input,
        chatId: activeChatId || null,
      });

      const botMessage = {
        role: "bot",
        content: res.data.reply || "No response",
      };

      setMessages((prev) => [...prev.slice(0, -1), botMessage]);

      //  Save chatId for this session
      if (!activeChatId && res.data.chatId) {
        setActiveChatId(res.data.chatId);
      }

    } catch (error) {
      console.error(error);
      setMessages((prev) => [
        ...prev.slice(0, -1),
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
        <img className="send-btn" src={send_icon} alt="" />
        {loading ? "" : ""}
      </button>
    </div>
  );
}
