import { useState } from "react";
import ChatHeader from "./ChatHeader";
import Sidebar from "./Sidebar";
import Messages from "./Messages";
import ChatInput from "./ChatInput";

export default function Chat() {
  const [messages, setMessages] = useState([]);
  const [chatHistory, setChatHistory] = useState([]);

  const startNewChat = () => {
    if (messages.length > 0) {
      setChatHistory([...chatHistory, messages]);
    }
    setMessages([]);
  };

  return (
    <div className="chat-app">
      <Sidebar chatHistory={chatHistory} startNewChat={startNewChat} />
      <div className="main-chat">
        <ChatHeader />
        <Messages messages={messages} />
        <ChatInput messages={messages} setMessages={setMessages} />
      </div>
    </div>
  );
}
