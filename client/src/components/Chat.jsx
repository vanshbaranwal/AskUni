import { useState, useEffect } from "react";
import { useUser } from "@clerk/clerk-react";
import ChatHeader from "./ChatHeader";
import Sidebar from "./Sidebar";
import Messages from "./Messages";
import ChatInput from "./ChatInput";
import axios from "axios";
import "./chat.css";

export default function Chat() {
  const { user } = useUser();
  const currentUserId = user?.id;

  const [chatHistory, setChatHistory] = useState([]);   
  const [activeChatIndex, setActiveChatIndex] = useState(null); 
  const [messages, setMessages] = useState([]);         

  // Load chat history from backend on mount
  useEffect(() => {
    if (!currentUserId) return;

    const fetchChats = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/chats/${currentUserId}`);
        setChatHistory(res.data);
      } catch (err) {
        console.error("Failed to fetch chat history:", err);
      }
    };

    fetchChats();
  }, [currentUserId]);

  const startNewChat = () => {
    if (messages.length > 0) {
      setChatHistory([...chatHistory, { userId: currentUserId, messages }]);
    }
    setMessages([]);
    setActiveChatIndex(null);
  };

  const loadChat = (index) => {
    setMessages(chatHistory[index]?.messages || []);
    setActiveChatIndex(index);
  };

  return (
    <div className="chat-app">
     
      <Sidebar
        chatHistory={chatHistory}
        setChatHistory={setChatHistory}
        startNewChat={startNewChat}
        loadChat={loadChat}
        currentUserId={currentUserId}
        activeChatIndex={activeChatIndex}
        setMessages={setMessages}
        setActiveChatIndex={setActiveChatIndex}
      />
      <div className="main-chat">
        <ChatHeader />
        <Messages messages={messages} />
        {currentUserId && (
          <ChatInput
            messages={messages}
            setMessages={setMessages}
            currentUserId={currentUserId}
          />
        )}
      </div>
    </div>
  );
}
