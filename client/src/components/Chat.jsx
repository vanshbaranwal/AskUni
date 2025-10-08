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
  const [activeChatId, setActiveChatId] = useState(null); // track current chat ID

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

  // Start a new chat
  const startNewChat = () => {
    if (messages.length > 0 && activeChatId) {
      setChatHistory([...chatHistory, { _id: activeChatId, messages }]);
    }
    setMessages([]);
    setActiveChatId(null);
    setActiveChatIndex(null);
  };

  //  Load an existing chat
  const loadChat = (index) => {
    const selectedChat = chatHistory[index];
    setMessages(selectedChat?.messages || []);
    setActiveChatIndex(index);
    setActiveChatId(selectedChat?._id || null);
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
            activeChatId={activeChatId}          
            setActiveChatId={setActiveChatId}     
          />
        )}
      </div>
    </div>
  );
}
